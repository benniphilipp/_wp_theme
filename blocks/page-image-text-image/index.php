<?php 

// Create id attribute allowing for custom "anchor" value.
$id = 'page-image-text-image' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}

// Create class attribute allowing for custom "className".
$className = '';

$styleName = '';
//This is where Styles Support comes out. //Values "style_01 (isDefault)" "style_02" "style_03" "style_04"
if( !empty($block['className'])) {$styleName .= ' ' . $block['className'];}

//Margin Top Bottom
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}

$headline = get_field('headline');
$text = get_field('text');

$link_intern = get_field('link_intern');

$image_right = get_field('image_right');
$image_left = get_field('image_left');

?>


<div id="<?php echo esc_attr($id); ?>" class="page-image-text-image" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <section class="<?php echo esc_attr( $className ); if(!empty($styleName)): echo esc_attr($styleName); else: echo ' is-style-style_01'; endif; ?> container-xxl">
        <div class="wrap-flex">
            
            <div class="item-left">
                <?php if( !empty( $image_left ) ): ?>
                    <img src="<?php echo esc_url($image_left['url']); ?>" alt="<?php echo esc_attr($image_left['alt']); ?>" />
                <?php endif; ?>
            </div>

            <div class="item-right">
                <?php if( !empty( $image_right ) ): ?>
                    <img src="<?php echo esc_url($image_right['url']); ?>" alt="<?php echo esc_attr($image_right['alt']); ?>" />
                <?php endif; ?>
            </div>

        </div>

        <div class="wrap-flex overlay">
            <div class="iteme-center">
                <?php if(!empty($headline)){ ?>
                    <div class="headline texteditor">
                        <h2><?php echo $headline; ?></h2>
                    </div>
                <?php } ?>

                <?php if(!empty($text)){ ?>
                    <div class="content-text texteditor">
                        <?php echo $text; ?>
                    </div>
                <?php } ?>
            </div>
        </div>

    </section>

</div>
