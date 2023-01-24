<?php

//Create ID
$id = '-proceedings-image-box' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

//Create class name
$className = 'proceedings-image-box';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

// Data 
$columns = '';
$element = '';
$elements = []; 
while( have_rows('proceedings_image') ): the_row();

    $image = get_sub_field('image');
    $size = 'full';
    if( $image ) {
        $element = wp_get_attachment_image( $image, $size );
    }

    $elements[] = $element;

endwhile; 

?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>">
    <div class="row content">
       
        <?php 
            if(sizeof($elements)>0) {
                $size = ceil(12 / sizeof($elements));
                if($columns<2) $columns = 2;

                foreach($elements AS $element) {
                    echo '<div class="col-md-'.$size.'">'.$element.'</div>';
                }
            }?>
       
    </div>
</div>