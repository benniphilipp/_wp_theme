<?php

/**
 * Verfahren Header Bilder Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'verfahren-header-image-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'verfahren-header-image';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

//Data
$image = get_field('image');
$image_auswahl = get_field('image_auswahl');
$images = get_field('image_repeater');


// Load values and assign defaults.
$toc = get_field('toc')?: '';
if($toc != ""){
    $className .= ' toc';
    $dataattr .= ' data-toctitle="'.$toc.'"';
}
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?>>   

    <div class="image-wrapper">
        <?php if( !empty( $image ) ): ?>
            <img class="img-fluid" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
        <?php endif; ?>
    </div>

    <?php if($image_auswahl == 'gallery' && !empty($images)){ ?>
        <?php if( !empty($images)){ ?>
        
            <div class="image_popup_item">

                <?php foreach($images as $img): ?>

                    <div class="magnific-img">
                        <a class="image-popup-vertical-fit" href="<?php echo $img['images']['url']; ?>">
                            <img src="<?php echo $img['images']['url']; ?>" alt="<?php echo $img['images']['alt']; ?>">
                        </a>
                    </div>

                    <?php endforeach; ?>

            </div>

        <?php } ?>
    <?php } ?>

</div>







