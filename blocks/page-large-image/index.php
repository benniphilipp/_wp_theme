<?php


// Create id attribute allowing for custom "anchor" value.
$id = 'page-large-image' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}


// Create class attribute allowing for custom "className".
$className = '';
$styleName = '';
//This is where Styles Support comes out. //Values "style_01 (isDefault)" "style_02" "style_03" "style_04"
if( !empty($block['className'])) {$styleName .= ' ' . $block['className'];}


//Margin Top Bottom
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}


$headline = get_field('headline');
$texteditor = get_field('texteditor');

$image_big = get_field('image_big');
$image_mini = get_field('image_mini');

$button = get_field('button');
$link_extern = get_field('link_extern');
$link_intern = get_field('link_intern');


//Button links
$buttonLink = '';
if (!empty(get_field('button'))) {
    if (!empty(get_field('link_extern'))) {
        $buttonLink = $link_intern = get_field('link_extern');
    } elseif (get_field('link_intern')) {
        $link_data = get_field('link_intern');

        $buttonLink = get_permalink($link_data->ID);
    }
}


?>

<div id="<?php echo esc_attr($id); ?>" class="page-large-image" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?>">

    <section class="<?php echo esc_attr( $className ); if(!empty($styleName)): echo esc_attr($styleName); else: echo ' is-style-style_01'; endif; ?> container-xxl">

            <div class="wrap-flex">

                <div class="item-left">
                    <div class="wrapper-headline">

                        <?php if (!empty($headline)) { ?>
                            <div class="headline">
                                <h2><?php echo $headline; ?></h2>
                            </div>
                        <?php } ?>

                        <div class="wrapper-content">
                            <?php if (!empty($texteditor)) { ?>
                                <?php echo $texteditor; ?>
                            <?php } ?>
                        </div>
                    </div>
                </div>

                <div class="item-right">
                    <div class="wrapper-image">
                        <?php if (!empty($image_mini)) { ?>
                            <img src="<?php echo esc_url($image_mini['url']); ?>" alt="<?php echo esc_attr($image_mini['alt']); ?>" />
                        <?php } ?>
                    </div>
                </div>

            </div>

            <div class="underlay">
                <div class="bg-image" style="background-image: url('<?php if(!empty($image_big)){ echo $image_big['url']; }; ?>');"></div>
            </div>

    </section>

</div>




<!-- <div class="page_large_image">
    <div class="container">
        <div class="row ">
            <div class="col-lg-12">
                <div class="page_large_image-main">
                    <div class="page_large_image-bg_img" style="background-image: url('https://source.unsplash.com/random/900×700/?fruit');"></div>
                    <div class="row align-items-end">
                        <div class="col-lg-6">
                            <div class="page_large_image-bottom_img" style="background-image: url('https://source.unsplash.com/random/900×750/?fruit');"></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="procedures_box_wp">
                                <div class="procedures_box-main-title-wp">
                                    <a href="#" class="procedures_box-main-title">Style 1</a>
                                </div>
                                <div class="procedures_box">
                                    <div class="procedures_box-content">
                                        <h5 class="procedures_box-sub_title">Lorem, ipsum dolor.</h5>
                                        <p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <div class="procedures-overview">
                                            <div id="open-close-button" class="close-button-none contact-cta close-button-display">
                                                <span class="btn-decor-left"></span>
                                                <a href="#">MEHR ERFAHREN</a>
                                                <span class="btn-decor-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
