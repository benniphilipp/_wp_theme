<?php


$id = 'proceedings-contact-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'proceedings-contact';


//Data Post ID
$data_id = get_the_ID();

?>

<?php if(!empty($data_id)): ?>
<input type="hidden" id="dataId" value="<?php echo $data_id; ?>" />
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?> container-xxl toc up" data-toctitle="<?php echo __('Kontakt', 'haertha') ?>">
    <div class="row">
        <div class="col-12">
            <div class="wrapper-head">
                <div class="nummber"></div>
                <div class="headline">
                    <h2><?php echo __('Konatkt', 'haertha'); ?></h2>
                </div>
            </div>
            <div class="mt-5"></div>
            <div class="row">
                <div class="col-12 col-lg-3 col-md-12 order-lg-1 order-3">



                    <div class="swiper-container">
                        <div class="swiper mySwiperContakt">
                            <div class="swiper-wrapper">

                            <div id="wrapper-contact-js"></div>

                            </div>
                        </div>
                    <div class="wrapper-pagination">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination-new"></div>
                        <div class="swiper-button-prev"></div>
                    </div>  
                    </div>
                    <!-- ./swiper -->
                </div>
                <div class="col-12 col-lg-8 col-md-12 order-lg-2 order-2">
                    <!-- Swiper -->
                    <div class="swiper mySwiperImge">
                        <div class="swiper-wrapper">
                            
                            <div id="wrapper-image-js"></div>

                        </div>
                        <div class="wrapper-pagination">
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="wrapper-icon">
                            <img src="http://via.placeholder.com/640x360" alt="">
                            <img src="http://via.placeholder.com/640x360" alt="">
                            <img src="http://via.placeholder.com/640x360" alt="">
                            <img src="http://via.placeholder.com/640x360" alt="">
                            <img src="http://via.placeholder.com/640x360" alt="">
                        </div> 
                    </div>
                </div>
                <div class="col-12 col-lg-1 col-md-12 order-lg-3 d-md-none d-none d-lg-block">
                    <div class="wrapper-icon">
                        <img src="http://via.placeholder.com/640x360" alt="">
                        <img src="http://via.placeholder.com/640x360" alt="">
                        <img src="http://via.placeholder.com/640x360" alt="">
                        <img src="http://via.placeholder.com/640x360" alt="">
                        <img src="http://via.placeholder.com/640x360" alt="">
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>
<?php else: ?>
<?php endif; ?>
<span class="no-data"></span>
