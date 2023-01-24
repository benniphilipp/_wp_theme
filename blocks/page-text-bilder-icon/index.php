<?php 


// Create id attribute allowing for custom "anchor" value.
$id = 'page-text-bilder-icon' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}


// Create class attribute allowing for custom "className".
$className = '';
if( !empty($block['className']) ) {$className .= ' ' . $block['name'];}
if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
if( !empty($block['align_text']) ) {$className .= ' has-align-text-' . $block['align_text'];}


//This is where Styles Support comes out. //Values "style_01 (isDefault)" "style_02" "style_03" "style_04"
if( !empty($block['className'])) {$className .= ' ' . $block['className'];}


//CSS Style Json Block Support I still need a solution for that but not until later.
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}


///ACF Values
$text = get_field('text');
$main_image = get_field('main_image');


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


$bilder_slider_video_popup = get_field('bilder_slider_video_popup');

//Image Silder
$rows = get_field('image');
$video = get_field('video');

if(!empty($video)){
    // Use preg_match to find iframe src.
    preg_match('/src="(.+?)"/', $video, $matches);
    $src = $matches[1];
}

if (empty($block['className'])) {
    $block['className'] = "is-style-style_01";
}
 
?>


<div id="<?php echo esc_attr($id); ?>" class="page-text-bilder-icon <?php echo  $block['className'] ;?>" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <section class="<?php echo esc_attr( $className ); ?> container-xxl">

        <div class="row wrapper-position">
            
            <div class="col-md-12 col-lg-6 order">
                <div class="wrapper-image">
                    <img src="<?php echo $main_image['url'] ?>" data-number="1" alt="<?php echo $main_image['alt'] ?>">
                    
                    <?php if(!empty($rows)){ ?>
                        <span id="" data-number="<?php echo esc_attr($id); ?>" class="popup-button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    <?php } ?>

                    <?php if(!empty($src)){ ?>
                        video
                    <?php } ?>

                </div>
            </div>

            <div class="col-md-12 col-lg-6">
                <div class="row wrapper-position">
                    <div class="col-md-10">
                        <div class="wrapper-text">

                        <!--Icon Box-->
                        <?php $allowed_blocks = array( 'acf/iconbox' ); ?>
                        <?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" templateLock="false" />'; ?>
                        <!-- ./ Icon Box-->

                            <div class="body-text">
                                <?php echo $text; ?>
                            </div>

                            <?php if(!empty($buttonLink)){ ?>
                            <a href="<?php echo $buttonLink; ?>" class="btn-cta btn-text-bilder-icon">
                                <span class="btn-decor-left"></span>
                                <?php echo __('MEHR ERFAHREN', 'haertha') ?>
                                <span class="btn-decor-right"></span>
                            </a>
                            <?php } ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</div>

<section class="popup popup-<?php echo esc_attr($id); ?>">
  <div class="popup__content">
    
    <div class="close">
      <span></span>
      <span></span>
    </div>

    <!-- Swiper -->
    <div class="swiper mySwiperImageGallery">
        <div class="swiper-wrapper">
        <?php if( !empty($rows)): ?>
            <?php foreach( $rows as $row ): ?>

             <!-- Data -->
            <?php $image = $row['image']; ?>
            <?php $headline = $row['headline']; ?>
            <?php $text = $row['text']; ?>

                    <div class="swiper-slide">
                        <div class="wrapper-slider-video">
                            <div class="wrapper-image">
                                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                            </div>
                            <div class="body-content">
                                <div class="headline">
                                    <h2><?php echo $headline; ?></h2>
                                    
                                </div>
                                <div class="content">
                                <?php echo $text; ?>
                                </div>
                            </div>
                        </div>
                    </div>

            <?php endforeach; ?>
        <?php endif; ?>

        </div>

    </div>

    <div class="wrapper-video-pagination">
        <div class="swiper-button-video-next"></div>
        <div class="swiper-pagination-video-new"></div>
        <div class="swiper-button-video-prev"></div>
    </div>  
     <!-- ./ Swiper -->



    <?php if(!empty($src)){ ?>
        Video
    <?php } ?>
  </div>
</section>