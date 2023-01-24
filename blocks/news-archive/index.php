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

$args_all = array(
    'posts_per_page' => 10,
    'post_type' => 'news'
);
$query_all = new WP_Query($args_all);
$arrayDate = [];
while ($query_all->have_posts()) : $query_all->the_post();
    $arrayDate[get_the_date('Ym')]['option'] = get_the_date('F Y');
    $arrayDate[get_the_date('Ym')]['value'] = get_the_date('m,Y');
endwhile;
//                            var_dump($array);
sort($arrayDate);

wp_reset_postdata();
?>

<div class="container <?php echo esc_attr($className); ?>">
    <?php wp_nonce_field('news_post_ajax', 'news_post_ajax_of_nonce_field'); ?>

    <div class="filter-main">
        <div class="filter-body">

            <div class="wrapper-filter p-4">
                <div class="row">
                    <div class="col-12 col-md-4 py-3">
                        <div class="news-filter-col category-toggle" data-class="category-list">

                            <div class="">
                                <span>#</span>
                                <span id="use">Kategorie</span>
                            </div>

                            <i>#</i>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 py-3">
                        <div class="news-filter-col date-toggle" data-class="date-list">

                            <div class="">
                                <span>#</span>
                                <span id="use">Zeitraum</span>
                            </div>

                            <i>#</i>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 py-3">
                        <div class="news-filter-col">
                            <input type="search" placeholder="Suche" class="news-input-search"
                                   id="news-input-search-<?php echo $block['id']; ?>">
                            <label class="search-filter d-flex" for="news-input-search-<?php echo $block['id']; ?>">
                                <span class="search">#</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row filter-modal">
                    <div class="category-list p-4">
                        <div class="col-12 col-md-12">
                            <?php $terms = get_terms(array(
                                'taxonomy' => 'new',
                                'hide_empty' => true,
                            ));

                            if (!empty($terms)) : ?>
                                <!--                            <div id="wrapper-use-results" class="news-category">-->
                                <ul class="news-category__wrap">
                                    <?php foreach ($terms as $category) {
                                        ?>
                                        <li class="item">

                                            <input class="news-category__input" type="checkbox" name="category__input[]"
                                                   href="#"
                                                   id="news-category-<?php echo $block['id'] . '-' . $category->term_id;; ?>"
                                                   value="<?php echo $category->term_id; ?>"/>
                                            <label for="news-category-<?php echo $block['id'] . '-' . $category->term_id;; ?>"
                                                   class="news-category-label label">
                                                <?php echo $category->name; ?>
                                            </label>
                                        </li>
                                    <?php }; ?>
                                </ul>
                            <?php endif; ?>
                            <!--Close-->
                            <div  class="close-button-none contact-cta">
                                <span class="btn-decor-left"></span>
                                <a href="#">Schliessen und Anwenden</a>
                                <span class="btn-decor-right"></span>
                            </div>

                        </div>
                    </div>
                    <div class="date-list p-4">
                        <div class="col-12 col-md-12">
                            <?php $terms = get_terms(array(
                                'taxonomy' => 'new',
                                'hide_empty' => true,
                            ));


                            if (!empty($terms)) : ?>
                                <!--                            <div id="wrapper-use-results" class="news-category">-->
                                <ul class="news-date__wrap">
                                    <?php foreach ($arrayDate as $key => $time) {
                                        ?>
                                        <li class="item">

                                            <input class="news-date__input news-label" type="checkbox" name="date__input[]"
                                                   href="#"
                                                   id="news-date-<?php echo $block['id'] . '-' . $time['value'];; ?>"
                                                   value="<?php echo $time['value']; ?>"/>
                                            <label for="news-date-<?php echo $block['id'] . '-' . $time['value'];; ?>"
                                                   class="news-date-label label">
                                                <?php echo $time['option']; ?>
                                            </label>
                                        </li>
                                    <?php }; ?>
                                </ul>
                            <?php endif; ?>
                            <!--Close-->
                            <div  class="close-button-none contact-cta">
                                <span class="btn-decor-left"></span>
                                <a href="#">Schliessen und Anwenden</a>
                                <span class="btn-decor-right"></span>
                            </div>

                        </div>
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

