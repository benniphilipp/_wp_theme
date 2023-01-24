<?php


// Create id attribute allowing for custom "anchor" value.
$id = 'verfahren-text-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}


// Create class attribute allowing for custom "className".
$className = 'verfahren-text';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}


//This is where Styles Support comes out. //Values "fullbleed_01" "fullbleed_02" "fullbleed_03" "fullbleed_04"
if( !empty($block['styles']) ) {
    $className .= ' ' . $block['name']; 
}


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


// Use preg_match to find iframe src.
// preg_match('/src="(.+?)"/', $video, $matches);
// $src = $matches[1];
?>

<section class="page-hero-slider-pictures-video <?php echo esc_attr( $className ); ?>">
    <!-- element section start -->
    <?php 
        if($block['className'] == 'is-style-fullbleed_02'){
    ?>
    <div class="element">
        <div class="bridge_wrapper bg-content" style="background-image: url(<?php if(!empty($background)){echo $background['url'];} ?>);">
            <div class="heading">
                <?php 
                    if(!empty($headline)){
                        printf('<h3>%s</h3>', $headline);
                    }
                ?>
            </div>
            <?php 
                if($image_or_video == 'image' && !empty($images)){

             ?>
            <div class="image_popup_item">
                <?php 
                    if(!empty($images)):
                        foreach($images as $img):
                 ?>
                <div class="magnific-img">
                    <a class="image-popup-vertical-fit" href="<?php echo $img['image']['url']; ?>">
                        <img src="<?php echo $img['image']['url']; ?>" alt="<?php echo $img['image']['alt']; ?>">
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                </div>
                <?php endforeach; endif; ?>
            </div>
            <?php 

                }elseif($image_or_video == 'video' && isset($src)){
             ?>
            <div class="video_popup">
                <a  class="popup-youtube" href="<?php echo $src; ?>"># <span>FILM ABSPIELEN</span></a>
            </div>
            <?php 
                }
            ?>
        </div>
    </div>
    <?php 
        }else{
     ?>
    <div class="element">
        <div class="bridge_wrapper bg-content" style="background-image: url(<?php if(!empty($background)){echo $background['url'];} ?>);">
            <div class="heading">
                <?php 
                    if(!empty($headline)){
                        printf('<h3>%s</h3>', $headline);
                    }
                ?>
            </div>
            <div class="subheading">
                <?php 
                    if(!empty($subline)){
                        printf('<h4 class="box">%s</h4>', $subline);
                    }
                ?>
            </div>
            <?php 
                if($image_or_video == 'image' && !empty($images)){

             ?>
            <div class="image_popup_item">
                <?php 
                    if(!empty($images)):
                        foreach($images as $img):
                 ?>
                <div class="magnific-img">
                    <a class="image-popup-vertical-fit" href="<?php echo $img['image']['url']; ?>">
                        <img src="<?php echo $img['image']['url']; ?>" alt="<?php echo $img['image']['alt']; ?>">
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                </div>
                <?php endforeach; endif; ?>
            </div>
            <?php 

                }elseif($image_or_video == 'video' && isset($src)){
             ?>
            <div class="video_popup">
                <a  class="popup-youtube" href="<?php echo $src; ?>"># <span>FILM ABSPIELEN</span></a>

            </div>
            <?php 
                }
             ?>
        </div>
        <?php 
            if(!empty($text)):
         ?>
        <div class="element_widget">
            <div class="bridge_content ">
                <?php echo $text; ?>
            </div>
        </div>
        <?php endif; ?>
    </div>
    <?php } ?>
</section>
