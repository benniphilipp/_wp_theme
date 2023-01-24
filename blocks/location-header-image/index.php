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
$id = 'verfahren-imge-header-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-header-image';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$image_auswahl = get_field('image_auswahl');

if($image_auswahl == 'gallery'){
    require_once('image-gallery.php');
}else{
    require_once('image.php');
}
