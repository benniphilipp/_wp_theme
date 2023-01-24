<?php


// Create id attribute allowing for custom "anchor" value.
$id = 'page-hero-slider-pictures-video-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}


// Create class attribute allowing for custom "className".
$className = '';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}


// Create class attribute allowing for custom "className".
$className = '';
$styleName = '';
//This is where Styles Support comes out. //Values "style_01 (isDefault)" "style_02" "style_03" "style_04"
if( !empty($block['className'])) {$styleName .= ' ' . $block['className'];}



//ACF DATA
$background = get_field('background');
$headline = get_field('headline');
$subline = get_field('subline');
$text = get_field('text');

// "no" "video" "image" Values Image or Video field.
$image_or_video = get_field('bilder_slider_video_popup');

$video = get_field('video');


//repeater
$images = get_field('images');

// var_dump($background);

// Use preg_match to find iframe src.
// preg_match('/src="(.+?)"/', $video, $matches);
// $src = $matches[1];
?>

<div id="<?php echo esc_attr($id); ?>" class="page-hero-slider-pictures-video"  style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <section class="<?php echo esc_attr( $className ); ?> bg-content" style="background-image: url(<?php if(!empty($background)){echo $background['url'];} ?>);">
        
    <div class="container-xxl <?php if(!empty($styleName)): echo esc_attr($styleName); else: echo ' is-style-style_01'; endif; ?>">
        <div class="wrap-flex">

            <div class="item-site-name">
                
                <span class="headline">
                    <h1><?php the_title(); ?></h1>
                </span>
   
            </div>

            <div class="itme-left">
                <?php if(!empty($headline)){ ?>
                <div class="headline-text">
                    <h2><?php echo $headline; ?></h2>
                </div>
                <?php } ?>
            </div>


            <div class="button-cta">
                <!-- <a href="hier button">Button</a> -->
            </div>

        </div>
    </div>
    </section>

    <div class="text-section container-xxl">
        <div class="wrap-flex-bottom">

            <div class="iteme-center">
                <?php if(!empty($text)){ ?>
                    <div class="text-content texteditor">
                    <?php echo $text; ?>
                </div>
                <?php } ?>
            </div>

        </div>
    </div>

</div>

