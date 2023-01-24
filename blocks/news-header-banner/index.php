<?php 


// Create class attribute allowing for custom "className" and "align" values.
$className = 'news-header-banner';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

// Create id attribute allowing for custom "anchor" value.
$id = 'verfahren-text-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

//Data


?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>">

</div>


