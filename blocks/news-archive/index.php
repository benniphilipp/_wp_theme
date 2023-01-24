<?php


$id = 'news-archive-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'news-archive-block';
$dataattr = '';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
};
//var_dump(get_lastpostdate($timezone = 'server', $post_type = 'news'));
$args = array(
    'posts_per_page' => 10,
    'post_type' => 'news'
);
$query = new WP_Query($args);
//Import JS

?>

<div class="container <?php echo esc_attr($className); ?>">
    <?php wp_nonce_field('news_post_ajax', 'news_post_ajax_of_nonce_field'); ?>

    <div class="filter-main">
        <div class="filter-body">

            <div class="wrapper-filter p-4">
                <div class="row">
                    <div class="col-12 col-md-4 py-3">
                        <div class="category-toggle">
                            <span>#</span>
                            <span id="use">Kategorie</span>
                            <i>#</i>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 py-3">

                        <span>#</span>
                        <select class="date-select">
                            <option value="">Zeitraum</option>
                            <?php
                            $args_all = array(
                                'posts_per_page' => 10,
                                'post_type' => 'news'
                            );
                            $query_all = new WP_Query($args_all);
                            $array = [];
                            while ($query_all->have_posts()) : $query_all->the_post();
                                $array[get_the_date('Ym')]['option'] = get_the_date('F Y');
                                $array[get_the_date('Ym')]['value'] = get_the_date('m,Y');
                            endwhile;
                            //                            var_dump($array);
                            sort($array);
                            foreach ($array as $key => $time) {
                                echo '<option value="' . $time['value'] . '">' . $time['option'] . '</option>';
                            }
                            wp_reset_postdata(); ?>
                        </select>

                    </div>
                    <div class="col-12 col-md-4 py-3">
                        <label class="serach-filter d-flex">
                            <input type="search" placeholder="Suche" class="news-input-search">
                            <span class="search">#</span>
                        </label>
                    </div>
                </div>

                <div class="category-list p-4">
                    <div class="col-12 col-md-12">
                        <?php $terms = get_terms(array(
                            'taxonomy' => 'new',
                            'hide_empty' => false,
                        ));

                        if (!empty($terms)) : ?>
                            <!--                            <div id="wrapper-use-results" class="news-category">-->
                            <ul class="news-category__wrap">
                                <?php foreach ($terms as $category) {
                                    ?>
                                    <li class="item">
                                        <label>
                                            <input class="news-category__input" type="checkbox" name="category__input[]"
                                                   href="#" class="link"
                                                   value="<?php echo $category->term_id; ?>"/><?php echo $category->name; ?>
                                        </label>
                                    </li>
                                <?php }; ?>
                            </ul>
                        <?php endif; ?>

                    </div>
                </div>


            </div>
        </div>
    </div>
    <?php if ($query->have_posts()) { ?>
        <div class="row py-5 ajax-news-row">
            <?php while ($query->have_posts()) : $query->the_post();
                get_template_part('template-parts/section-news-item')
                ?>

            <?php endwhile; ?>

            <?php wp_reset_postdata();; ?>
        </div>
    <?php } else {
        echo '<div class="h3" >Not Found</div>';
    }; ?>
</div>

