<?php

/**
 * Verfahren Header Video Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'location-header-video-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-header-video';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}


// Load values and assign defaults.
$toc = get_field('toc')?: '';
if($toc != ""){
    $className .= ' toc';
    $dataattr .= ' data-toctitle="'.$toc.'"';
}

//ACF Content
$video_auswahl = get_field('video_auswahl');

?>


<?php 
if($video_auswahl == 'gallery'){
    require_once('video-gallery.php');
}else{
    require_once('video.php');
}
?>