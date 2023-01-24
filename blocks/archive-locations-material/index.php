<?php
/**
 * Archive Standorte Werkstoff Block Template.
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
//not acf field name
//if (!get_field('text')) return;

?>
<div id="<?php echo esc_attr($id); ?>"
     class="<?php echo esc_attr($className); ?> my-5" <?php if (!empty($dataattr)) : echo $dataattr; endif; ?>>

    <div class="container ">
        <div class="row">
            <div class="col-12 ">
                <h2 class="ps-xl-5 ms-xl-3  ps-lg-4 ps-sm-4 ps-2 ms-sm-2 text-uppercase"><?php _e('Prozess- Und Anlagentechnik', 'haertha'); ?></h2>
            </div>
        </div>

        <div class="row">
            <div class="col-xxl-10 col-xl-11 ">
                <div class="bg-locations-white py-xl-5 py-lg-4 py-sm-4 py-4">
                    <div class="ps-xl-5 ms-xl-3  ps-lg-4 ps-sm-4 px-4  ms-sm-2 ">
                        <!--                        --><?php //the_field('text'); ?>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus expedita nam quisquam
                        quod? Alias id mollitia odit vero? Ad aliquid cupiditate dolorem dolores doloribus harum
                        perspiciatis repudiandae tempore veritatis!
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
