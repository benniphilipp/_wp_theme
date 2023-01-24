<?php

function scripts_hearta() {

    //Import Styles CSS
    wp_enqueue_style( 'swiper-style', get_template_directory_uri() . '/dist/styles/swiper-bundle.min.css', false, _S_VERSION, 'all');
    wp_enqueue_style( 'style-magnific', get_template_directory_uri() . '/dist/styles/magnific-popup.css', false, _S_VERSION, 'all');
    
    //Main Styles CSS
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', false, _S_VERSION, 'all');
    wp_enqueue_style( 'style-hearta', get_template_directory_uri() . '/dist/styles/main.css', false, time(), 'all');

    //Import Scripts
    wp_enqueue_script( 'magnific-js', get_template_directory_uri() . '/dist/scripts/jquery.magnific-popup.min.js', array ( 'jquery' ), _S_VERSION, true);
    wp_enqueue_script( 'slidenav-js', get_template_directory_uri() . '/dist/scripts/slidenav.min.js', array ( 'jquery' ), _S_VERSION, true);
    wp_enqueue_script( 'scrollreveal-js', get_template_directory_uri() . '/dist/scripts/scrollreveal.min.js', array ( 'jquery' ), _S_VERSION, true);
    wp_enqueue_script( 'swiper-js', get_template_directory_uri() . '/dist/scripts/swiper-bundle.min.js', array ( 'jquery' ), _S_VERSION, true);
    wp_enqueue_script( 'lottie-js', get_template_directory_uri() . '/dist/scripts/lottie.min.js', array ( 'jquery' ), _S_VERSION, true);

    //Main Script
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/scripts/main.js', array ( 'jquery' ), _S_VERSION, true);

    //Import JS
    wp_localize_script('main-js', 'proceedingsData', array(
        'root_url' => get_site_url(),'ajax' => admin_url('admin-ajax.php')
    ));
}


add_action( 'admin_enqueue_scripts', 'load_admin_style' );
function load_admin_style() {
    wp_enqueue_style( 'admin_css', get_template_directory_uri() . '/admin-style.css', false, '1.0.0' );
}


function add_admin_scripts( $hook ) {

    global $post;

    if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
        if ( 'verfahren' === $post->post_type ) {     

            //Admin CSS
            wp_enqueue_style( 'swiper-style', get_template_directory_uri() . '/dist/styles/swiper-bundle.min.css', false, _S_VERSION, 'all');
            wp_enqueue_script(  'swiper-admin', get_stylesheet_directory_uri().'/dist/scripts/swiper-bundle.min.js' );

            //Admin Javascript
            wp_enqueue_style( 'admin-style', get_template_directory_uri() . '/dist/styles/admin.css', false, _S_VERSION, 'all');
            wp_enqueue_script(  'admin', get_stylesheet_directory_uri().'/dist/scripts/admin.js' );
        }
    }
}
add_action( 'admin_enqueue_scripts', 'add_admin_scripts', 10, 1 );
