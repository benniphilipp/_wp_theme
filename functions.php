<?php 

if (!defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}

// Includes
include(locate_template('/includes/setup.php'));
include(locate_template('/includes/scripts.php'));
include(locate_template('/includes/gutenberg-blogs.php'));
include(locate_template('/includes/register-cpts.php'));
include(locate_template('/includes/register-taxes.php'));
include(locate_template('/includes/blocks/header-menu.php'));
include(locate_template('/includes/blocks/footer-menu.php'));
include(locate_template('/includes/blocks/sidebar-verfahren.php'));
include(locate_template('/includes/blocks/custom-breadcrumbs.php'));
include(locate_template('/includes/rest-api.php'));

// Setup

// Hooks
add_action('init', 'create_gutenberg_blocks_haerta');
add_action('wp_enqueue_scripts', 'scripts_hearta', 100);
add_action('init', 'placeholder_gutenberg_blocks_haertha');

add_action( 'init', 'custom_taxonomy' );
// Register Post Type
add_action( 'init', 'register_my_cpts_haertha' );



//ACF Gutenberg Support
if ( ! function_exists( 'get_block_styles' ) ) :

    function get_block_styles($attributes) {

        $stylesArray = '';
        $styles = [];
        //Margin bottom
        if(! empty( $attributes['spacing']['margin']['bottom'] )){
            $style =  array('spacing' => array( 'margin' => array( 'bottom' => $attributes['spacing']['margin']['bottom'] )));
            $stylesbottom = wp_style_engine_get_styles( $style );
        }

        //Margin top
        if(! empty( $attributes['spacing']['margin']['top'] )){
            $style =  array('spacing' => array( 'margin' => array( 'top' => $attributes['spacing']['margin']['top'] )));
            $stylestop = wp_style_engine_get_styles( $style );
        }
        
        $stylesArray = array($stylestop,$stylesbottom);

        foreach( $stylesArray as $style){
            $styles[] = $style['css'];
        }

        return $styles;
    }

endif;



add_filter( 'allowed_block_types_all', 'rt_allowed_block_types', 25, 2 );
 
function rt_allowed_block_types( $allowed_blocks, $editor_context ) {
    if( 'verfahren' === $editor_context->post->post_type ) { 
        $allowed_blocks = array(
            'acf/verfahren-header-video',
            'acf/verfahren-header-image',
            'acf/verfahren-text',
            'core/image',
            'core/paragraph',
            'core/heading',
            'acf/proceedings-image-box',
            'core/list',
            'core/columns',
            'acf/location-header-image'
        );
        return $allowed_blocks;
    } elseif( 'standorte' === $editor_context->post->post_type ) {
        $allowed_blocks = array(

        );
        return $allowed_blocks;
    }elseif('new' === $editor_context->post->post_type){
        $allowed_blocks = array(
            'acf/news-content'
        );
        return $allowed_blocks;
    }else{
        return;
    }
}

function ka_override_MCE_options($init)
{

  $custom_colors = '
        "454545", "Fontfarbe",
        "ffffff", "Weiß",
        "6AB651", "Grün",
        "E3E3E3", "Light Grey",
    ';
  // build color grid palette
  $init['textcolor_map'] = '[' . $custom_colors . ']';

  // change the number of rows in the grid if the number of colors changes
  // 8 swatches per row
  $init['textcolor_rows'] = 1;

  return $init;
}
add_filter('tiny_mce_before_init', 'ka_override_MCE_options');