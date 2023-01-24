<?php

/**
 * Verfahren Header Video Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'verfahren-header-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'verfahren-header-video';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$dataattr = '';

// Load values and assign defaults.
$toc = get_field('toc')?: '';
if($toc != ""){
    $className .= ' toc';
    $dataattr .= ' data-toctitle="'.$toc.'"';
}

//ACF Content
$video_auswahl = get_field('video_auswahl');

// Load value.
$iframe = get_field('video');
$autoplay = get_field('autoplay');
$image = get_field('image');

$magnific_popup = get_field('magnific_popup');

// Use preg_match to find iframe src.
preg_match('/src="(.+?)"/', $iframe, $matches);
$src = $matches[1];

// Add extra parameters to src and replace HTML.
$params = array(
    'controls'    => 0,
    'hd'        => 1,
    'loop'      => $autoplay,
    'autohide'    => $autoplay,
    'autoplay' => $autoplay
);

$new_src = add_query_arg($params, $src);
$iframe = str_replace($src, $new_src, $iframe);

// Add extra attributes to iframe HTML.
$attributes = 'frameborder="0"';
$iframe = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $iframe);
$size = 'full'; 
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?>>   
    <div class="embed-container popup-vimeo">
        <?php echo $iframe; ?>
    </div>   

    <div class="video-image-box">
        <div class="body-image-video">
            <div class="wrapper-image-video">

                <?php if($autoplay == 0){ ?>
                    <?php if($image) {
                        echo wp_get_attachment_image( $image, $size );
                    } ?>
                <?php } ?>

            </div>
        </div>
    </div>

    <?php if($autoplay == 0){ ?>
        <div class="video-btn">
            <span class="dot"></span>
                <a class="video-button-run btn" href="<?php echo $src; ?>">
                    <span>#</span>
                    <?php echo __('Film abspielen', 'haertha') ?>
                </a>
            <span class="dot dot-left"></span>
        </div>
    <?php } ?>

</div>
