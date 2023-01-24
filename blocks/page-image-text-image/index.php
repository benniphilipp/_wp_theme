<?php 

// Create id attribute allowing for custom "anchor" value.
$id = 'page-image-text-image' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}

// Create class attribute allowing for custom "className".
$className = 'page-image-text-image';
$styleName = ' ';
//This is where Styles Support comes out. 

//Values "style_01 (isDefault)" "style_02"
if( !empty($block['className'])) {$styleName .= ' ' . $block['className'];}

//Margin Top Bottom
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}

$headline = get_field('headline');
$text = get_field('text');

$link_intern = get_field('link_intern');

$image_right = get_field('image_right');
$image_left = get_field('image_left');
?>

<div id="<?php echo esc_attr($id); ?>" class="page-text-bilder-icon" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <!--This is where the class for the style comes out-->
    <section class="<?php echo esc_attr( $className); if(!empty($styleName)): echo $styleName; else: echo 'style_01'; endif; ?> container-xxl">
        <div class="row">
            <div class="col-lg-4">

                <div class="wrapper-image-right">
                    <div class="body-image-right">
                        <img src="http://127.0.0.1:8000/wp-content/uploads/2023/01/Header.jpg" alt="">
                    </div>
                </div>

            </div>
            <div class="col-lg-4">
            
            <div class="wrapper-content">
                <div class="body-content">
                    <div class="headline">
                        <?php if(!empty($headline)){echo $headline;} ?>
                    </div>
                    <div class="content">
                        <?php if(!empty($text)){echo $text;} ?>
                    </div>

                    <!--Button-->
                    <a class="btn-image-text-image btn-cta">
                        <span class="btn-decor-left"></span>
                        <?php echo __('MEHR ERFAHREN', 'haertha') ?>
                        <span class="btn-decor-right"></span>
                    </a>
                    
                </div>
            </div>

            </div>
            <div class="col-lg-4">
                
                <div class="wrapper-image-right">
                    <div class="body-image-right">
                        <img src="http://127.0.0.1:8000/wp-content/uploads/2023/01/Header.jpg" alt="">
                    </div>
                </div>

            </div>
        </div>
    </section>

</div>