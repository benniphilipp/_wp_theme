<?php


// Create id attribute allowing for custom "anchor" value.
$id = 'page-image-text' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}


// Create class attribute allowing for custom "className".
$className = '';
if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
if( !empty($block['align_text']) ) {$className .= 'has-align-text-' . $block['align_text'];}

$styleName = '';
//This is where Styles Support comes out. //Values "style_01 (isDefault)" "style_02" "style_03" "style_04"
if( !empty($block['className'])) {$styleName .= ' ' . $block['className'];}


//CSS Style Json Block Support I still need a solution for that but not until later.
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}


//ACF Values
$headline = get_field('headline');
$text = get_field('text');
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


<div id="<?php echo esc_attr($id); ?>" class="page-image-text"  style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">
    <section class="<?php echo esc_attr($className); if(!empty($styleName)): echo esc_attr($styleName); else: echo ' is-style-style_01'; endif; ?> container-xxl">
        
        <div class="grid_wrap">

            <div class="grid_item underlay">
                <?php if(!empty($image)){ ?>
                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <?php } ?>
            </div>

            <div class="grid_item overlay">
                <!--Content-->
                <div class="wrapper-content">

                    <!--Icon Box-->
                    <?php $allowed_blocks = array( 'acf/iconbox' ); ?>
                    <?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" templateLock="false" />'; ?>
                    <!-- ./ Icon Box-->

                    <!--Headline-->
                    <?php if(!empty($headline)): ?>
                        <div class="headline">
                            <?php echo $headline; ?>
                        </div>
                    <?php endif; ?>
                    <!--/. Headline-->

                    <div class="content">
                        <?php if(!empty($text)){echo $text;} ?>

                        <!--Button-->
                        <?php if(!empty($buttonLink)){ ?>
                            <div class="wrapper-button">
                                <a href="<?php echo $buttonLink; ?>" class="btn-cta btn-imge-text">
                                    <span class="btn-decor-left"></span>
                                    <?php echo __('MEHR ERFAHREN', 'haertha') ?>
                                    <span class="btn-decor-right"></span>
                                </a>
                            </div>
                        <?php } ?>
                        <!--/. Button-->

                    </div>
                </div>
                <!--/. Content-->
            </div>
        </div>

    </section>
</div>




