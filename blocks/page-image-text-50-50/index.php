<?php

// Create id attribute allowing for custom "anchor" value.
$id = 'page-image-text-50-50' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}


// Create class attribute allowing for custom "className".
$className = '';
if( !empty($block['align_text']) ) {$className .= 'has-align-text-' . $block['align_text'];}


//CSS Style Json Block Support I still need a solution for that but not until later.
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}


//ACF Values
$headline = get_field('headline');
$texteditor = get_field('texteditor');
$image = get_field('image');

$button = get_field('button');
$link_extern = get_field('link_extern');
$link_intern = get_field('link_intern');


//Button links
$buttonLink = '';
if(!empty(get_field('button'))){
   if(!empty(get_field('link_extern'))){
        $buttonLink = $link_intern = get_field('link_extern');
   }elseif(get_field('link_intern' )){
        $link_data = get_field('link_intern');

        $buttonLink = get_permalink($link_data->ID);
        
   } 
}

?>

<div id="<?php echo esc_attr($id); ?>" class="page-image-text" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <section class="<?php echo esc_attr($className); ?> container-xxl">
     


                <div class="wrapper-flexbox-content">
                    <div class="wrapper-contnet">
                        <div class="wrapper-body">

                            <?php  if(!empty($headline)){ ?>
                                <div class="headline">
                                    <h2><?php echo $headline; ?></h2>
                                </div>
                            <?php } ?>


                            <div class="content">
                                <?php if(!empty($texteditor)) { ?>
                                    <?php echo $texteditor; ?>
                                <?php } ?>
                            </div>

                        </div>
                    </div>
                
                    <?php if( !empty( $image ) ): ?>
                        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                    <?php endif; ?>  
                    
                </div>            
        

  
    </section>

</div>

