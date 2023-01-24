<?php


/**
 * Add custom taxonomies
 */


function custom_taxonomy()
{


    $labels = array(
        'name'                       => __('Kategorie', 'haertha'),
        'singular_name'              => __('Kategorien', 'haertha'),
    );

    $args = array(
        "label" => __("Kategorie", "haertha"),
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "hierarchical" => true,
        "show_ui" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "query_var" => true,
        "rewrite" => ['slug' => 'standort', 'with_front' => true,],
        'show_admin_column' => true,
        "rest_controller_class" => "WP_REST_Terms_Controller",
        "show_in_quick_edit" => true,
        'show_in_rest'      => true,
    );
    register_taxonomy('standort', ["standorte"], $args);

    //Verfahren
    $labels = array(
        'name'                       => __('Kategorie', 'haertha'),
        'singular_name'              => __('Kategorien', 'haertha'),
    );

    $args = array(
        "label" => __("Kategorie", "haertha"),
        'labels'                     => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "hierarchical" => true,
        "show_ui" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "query_var" => true,
        "rewrite" => array('slug' => 'verfahrenstechnik'),
        'show_admin_column' => true,
        "rest_base" => "",
        "rest_controller_class" => "WP_REST_Terms_Controller",
        "show_in_quick_edit" => true,
        'show_in_rest' => true,
    );
    register_taxonomy('verfahrenstechnik', ["verfahren"], $args);


    //News
    $labels = array(
        'name'                       => __('Kategorie', 'haertha'),
        'singular_name'              => __('Kategorien', 'haertha'),
    );

    $args = array(
        "label" => __("Kategorie", "haertha"),
        'labels'                     => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "hierarchical" => true,
        "show_ui" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "query_var" => true,
        "rewrite" => array('slug' => 'new'),
        'show_admin_column' => true,
        "rest_base" => "",
        "rest_controller_class" => "WP_REST_Terms_Controller",
        "show_in_quick_edit" => true,
        'show_in_rest' => true,
    );
    register_taxonomy('new', ["news"], $args);
}
