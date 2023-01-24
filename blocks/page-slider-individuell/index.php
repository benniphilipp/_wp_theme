<?php 


// Create id attribute allowing for custom "anchor" value.
$id = 'page-slider-individuell' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}

//ClassName
$className = '';
//CSS Style Json Block Support I still need a solution for that but not until later.
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}


//ACF Values
$headline = get_field('headline');
$texteditor = get_field('texteditor');
$image = get_field('image');

$button = get_field('button');
$link_extern = get_field('link_extern');
$link_intern = get_field('link_intern');

$elemente = get_field('elemente');

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
<div id="<?php echo esc_attr($id); ?>" class="page-slider-individuell" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <section class="<?php echo esc_attr($className); ?> container-xxl">
     

        <!-- Swiper -->
        <div class="swiper myIndividually">
            <div class="swiper-wrapper">

                <?php if(!empty($elemente)){ ?>
                    <?php foreach($elemente as $elm){ ?>
                        <?php 
                            $image = $elm['image'];
                            $button = $elm['button'];
                            $hovertext = $elm['hover_text'];
                            $texteditor = $elm['texteditor'];
                       
                        ?>
                        <div class="swiper-slide">
                            <div class="wraper-content">

                                <div class="wrapper-body">
                                    <div class="content">
                                        <?php echo $texteditor; ?>
                                    </div>
                                    <div class="wrapper-image" style="background: url(<?php echo $image['url'] ?>) no-repeat center center fixed; ">
                                        <div class="hover-text">
                                            <?php echo $hovertext; ?>
                                        </div>
                                      
                                    </div>
                                </div>

                            </div>
                        </div>
                    <?php } ?>
                    <?php ?>
                <?php } ?>

            </div>
            <div class="swiper-button-next"></div>
        </div>

    </section>

</div>


