<?php


function news_post_ajax()
{
    if ( empty($_POST) || ! wp_verify_nonce( $_POST['nonce'], 'news_post_ajax') ){
        print 'Sorry, the verification data does not match.';
        exit;
    }
    $args = array(
        'posts_per_page' => 10,
        'post_type' => 'news'
    );
    if (isset($_POST['term'])) {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'new',
                'field' => 'term_id',
                'terms' => $_POST['term']
            )
        );
    }
    if (isset($_POST['date'])) {
        $args['date_query']['relation'] = 'OR';

        foreach ($_POST['date'] as $date){
            $args['date_query'][] = array(
                array(
                    'year' => explode( ',',$date )[1],
                    'monthnum' => explode( ',', $date )[0],
                    'compare'   => '=',
                )
            );
        }

    }

    if (isset($_POST['s'])) {
        $args['s'] = $_POST['s'];
    }


    $loop = new WP_Query($args);
    if ($loop->have_posts()) {
        while ($loop->have_posts()) {
            $loop->the_post();
            get_template_part('template-parts/section-news-item');
        }
    }else{
        echo '<div class="h3" >Not Found</div>';
    }

    exit;
}

add_action('wp_ajax_nopriv_news_post_ajax', 'news_post_ajax');
add_action('wp_ajax_news_post_ajax', 'news_post_ajax');
