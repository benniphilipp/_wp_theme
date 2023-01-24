<?php 

//Data
$rows = get_field('video_gallery');
$autoplay = get_field('autoplay');

if( $rows ) { ?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?>>
    <div class="swiper mySwiper2">
        <div class="swiper-wrapper">

            <?php foreach( $rows as $row ) {
                $iframe = $row['video_url'];

                // Use preg_match to find iframe src.
                preg_match('/src="(.+?)"/', $iframe, $matches);
                $src = $matches[1];

                // Add extra parameters to src and replace HTML.
                $params = array(
                    'controls'    => 0,
                    'hd'        => 1,
                    'autohide'    => $autoplay,
                    'autoplay' => $autoplay
                );
                $new_src = add_query_arg($params, $src);
                $iframe = str_replace($src, $new_src, $iframe);

                // Add extra attributes to iframe HTML.
                $attributes = 'frameborder="0"';
                $iframeclass = 'class="swiper-lazy"';
                $iframe = str_replace('></iframe>', ' ' . $iframeclass . ' ' . $attributes . '></iframe>', $iframe);
                ?>
                <!-- Display customized HTML. -->

                <div class="swiper-slide">
                    
                    <div class="embed-container">
                        <?php echo $iframe; ?>
                    </div>
                    <div class="swiper-lazy-preloader"></div>
                </div>

            <?php } ?>

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>
</div>
<?php } ?>

