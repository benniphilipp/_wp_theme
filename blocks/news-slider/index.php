<?php 

// Create id attribute allowing for custom "anchor" value.
$id = 'news-slider-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'news-slider';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}


$category = get_field('category');

?>


<div class="<?php echo esc_attr( $className ); ?>">
silder
</div>