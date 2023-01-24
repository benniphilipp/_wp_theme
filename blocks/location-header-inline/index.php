<?php 


// Create id attribute allowing for custom "anchor" value.
$id = 'location-header-inline-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-header-inline';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

?>

<div class="col-12 col-md-12">
    <div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>">
        <?php 
  
        $allowed_blocks = array( 'acf/location-header-video', 'acf/location-header-image' );

        echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" templateLock="false" />';
        ?>
        
    </div>
</div>