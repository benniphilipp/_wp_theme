<?php
/**
 * Archive Standorte Verfahren Block Template.
 *
 * @param array $block The block settings and attributes.
 * @param string $content The block inner HTML (empty).
 * @param bool $is_preview True during AJAX preview.
 * @param (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'archives-locations-procedures-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'archives-locations-procedures';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}

$term_name = 'verfahrenstechnik';
$terms = get_terms([
    'taxonomy' => $term_name,
    'hide_empty' => false,
]);
if (!$terms) return;

?>

<div id="<?php echo esc_attr($id); ?>"
     class="<?php echo esc_attr($className); ?> my-5" <?php if (!empty($dataattr)) : echo $dataattr; endif; ?>>

    <div class="container ">
        <div class="row">
            <div class="col-12 ">
                <h2 class="ps-xl-5 ms-xl-3  ps-lg-4 ps-sm-4 ps-2 ms-sm-2 text-uppercase"><?php _e('Verfahren', 'haertha'); ?></h2>
            </div>
        </div>

        <div class="row ">
            <div class="col-xxl-10 col-xl-11 ">
                <div class="bg-locations-white p-xl-5 p-lg-4 px-sm-5 px-4">
                    <div class="row mx-xl-3 mx-lg-2">
                        <?php foreach ($terms as $term) :
                            $term_posts = get_posts(array(
                                'numberposts' => 10,
                                'tax_query' => array(
                                    array(
                                        'taxonomy' => $term_name,
                                        'field' => 'term_id',
                                        'terms' => $term->term_id
                                    )
                                ),
                                'post_type' => 'verfahren',
                                'suppress_filters' => true, //Suppression of SQL query modification filters
                            )); ?>
                            <div class="col-lg-4  col-md-6 my-4">
                                <h4 class="term_name"><?php echo $term->name; ?></h4>
                                <ul class="term_posts">
                                    <?php foreach ($term_posts as $post) {
                                        ; ?>
                                        <li class="term_post">
                                            <a href="<?php echo get_permalink($post->ID) ?>"
                                               class="term_post__link"><?php echo $post->post_title; ?></a>
                                        </li>
                                    <?php }; ?>
                                </ul>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
