<?php

$rows = get_field('image_repeater');

?>



<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?>>   


            <?php 
            
            if( $rows ) {

                foreach( $rows as $row ) {
                    $image = $row['image'];
                }

            }
            ?>

            <!-- Swiper -->
            <div class="swiper mySwiperlocationHeader">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                </div>
            <div class="swiper-pagination"></div>
            </div>
     

</div>