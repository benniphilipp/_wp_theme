<?php 

// Create id attribute allowing for custom "anchor" value.
$id = 'page-slider-icons-vertical' . $block['id'];
if( !empty($block['anchor']) ) {$id = $block['anchor'];}


// Create class attribute allowing for custom "className".
$className = '';



//CSS Style Json Block Support I still need a solution for that but not until later.
if( !empty($block['style'])) {$styles = get_block_styles($block['style']);}


//ACF Values
$headline = get_field('headline');
$texteditor = get_field('texteditor');
$image = get_field('background_image');

$icon_repeater = get_field('icon_repeater');
// $background_image = get_field('background_image');


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

<div id="<?php echo esc_attr($id); ?>" class="page-slider-icons-vertical" style="<?php if(!empty($styles)){echo $styles[0] . $styles[1];} ?> background-image: url(<?php echo esc_url($image['url']);?>);">

    <section class="<?php echo esc_attr($className); ?> container-xxl">

        <div class="wrap-grid">
            <div class="item-text">
                <div class="w-text">
                    <?php if(!empty($headline)){ ?>
                    <div class="headline">
                        <h2><?php echo $headline; ?></h2>
                    </div>  
                    <?php } ?>

                    <?php if(!empty($texteditor)){ ?>
                        <div class="text">
                        <?php echo $texteditor; ?>
                    </div>  
                    <?php } ?>


                    <?php if(!empty($buttonLink)){ ?>
                        <div class="border">
                            <a href="<?php echo $buttonLink; ?>" class="btn-cta button-page-slider-icons-vertical">
                                <span class="btn-decor-left"></span>
                                <?php echo __('MEHR ERFAHREN', 'haertha') ?>
                                <span class="btn-decor-right"></span>
                            </a>
                        </div>
                    <?php } ?>

                </div>
            </div>

            <?php if($icon_repeater){ ?>
            <div class="item-icon">
                    <?php 
                    foreach($icon_repeater as $icon){ 
                    $repeater_text = $icon['repeater_text'];
                    $repeater_icon = $icon['repeater_icon'];
                    $repeater_link_extern = $icon['repeater_link_extern'];
                    $repeater_link_intern = $icon['repeater_link_intern']; 

                    $buttonLinkRepeter = '';
                    if(!empty($repeater_link_intern)){
                        $buttonLinkRepeter = get_permalink($repeater_link_intern ->ID);
                    }elseif(!empty($repeater_link_extern)){
                        $buttonLinkRepeter = $repeater_link_extern;
                    }
                    ?>

                    <a href="<?php echo esc_url($buttonLinkRepeter); ?>" class="icon-list">
                        <span><?php echo $repeater_icon; ?></span>
                        <span><?php echo $repeater_text; ?></span>
                    </a>

                <?php } ?>
            </div>
            <?php } ?>

        </div>

    </section>

</div>
