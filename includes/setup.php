<?php

if ( ! function_exists( 'haertha_setup' ) ) :

    /**
    * Sets up theme defaults and registers support for various WordPress features
    *
    *  It is important to set up these functions before the init hook so that none of these
    *  features are lost.
    *
    *  @since 1.0
    *  
    */

    /** thumbnails **/
    add_theme_support( 'post-thumbnails' );

    /** menu **/
    register_nav_menu('headerMenuLocation', 'Header Menu Location');
    register_nav_menu('footerMenuLocation', 'Footer Menu Location');

    add_theme_support( 'title-tag' );
    add_theme_support('editor-styles');
    add_theme_support('align-wide');

    // add_theme_support( 'starter-content' );
    // add_theme_support( 'wp-block-styles' );
    // add_theme_support( 'editor-styles' );


    add_image_size( 'proceeding_header', 1106, 2148 );


    /*
    * Switch default core markup for search form, comment form, and comments
    * to output valid HTML5.
    */
    add_theme_support(
        'html5',
        array(
            'search-form',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );
    
endif;


//Add menu Class li tag
add_filter ( 'nav_menu_css_class', 'add_meue_li_class', 10, 4 );

function add_meue_li_class ($classes){
  $classes[] = 'nav-liks';
  return $classes;
}

//Add menu Class a tag
function add_menu_a_class($ulclass) {
    return preg_replace('/<a /', '<a class="a-link"', $ulclass);
 }
 add_filter('wp_nav_menu','add_menu_a_class');

// Acf Create News Archive Options Page

function haertha_create_acf_pages() {
    if(function_exists('acf_add_options_page')) {
        acf_add_options_sub_page(array(
            'page_title'      => 'News Archive Settings', /* Use whatever title you want */
            'parent_slug'     => 'edit.php?post_type=news', /* Change "services" to fit your situation */
            'capability' => 'manage_options'
        ));
    }
}
add_action('init', 'haertha_create_acf_pages');