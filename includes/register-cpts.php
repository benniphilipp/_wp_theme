<?php



function register_my_cpts_haertha(){

    /**
     * Post Type: Verfahren
     */
    $labels = [
        "name" => __("Verfahren", "haertha"),
        "singular_name" => __("Verfahren", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => true,
        //"rewrite" => ["slug" => "verfahrenstechnik"],
        "query_var" => true,
        'show_in_rest' =>true,
        "rest_base" => "",
        "supports" => ["title", "editor", "page-attributes", 'excerpt', 'author', 'revisions', 'thumbnail'],
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg',
    ];

    register_post_type("verfahren", $args);



    /**
     * Post Type: Werkstoff Tabelle
     */
    $labels = [
        "name" => __("Werkstoff Tabellen", "haertha"),
        "singular_name" => __("Werkstoff Tabelle", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "has_archive" => true,
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg',
        "supports" => ["title", 'revisions'],
    ];

    register_post_type("werkstoff_tabelle", $args);


    /**
     * Post Type: Standorte
     */
    $labels = [
        "name" => __("Standorte", "haertha"),
        "singular_name" => __("standort", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => true,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => true,
        //"rewrite" => ["slug" => "standort", "with_front" => true],
        "query_var" => true,
        'show_in_rest'      => true,
        "supports" => ["title", "editor", "page-attributes", 'excerpt', 'author', 'revisions', 'thumbnail'],
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg'
    ];

    register_post_type("standorte", $args);

    /**
     * Post Type: Team
     */
    $labels = [
        "name" => __("Team", "haertha"),
        "singular_name" => __("Teams", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "show_in_rest" => true,
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "hierarchical" => true,
        //"rewrite" => ["slug" => "team", "with_front" => true],
        "query_var" => true,
        "supports" => ["title", "editor", "page-attributes", 'excerpt', 'author', 'revisions', 'thumbnail'],
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg'
    ];

    register_post_type("team", $args);


    /**
     * Post Type: News
     */
    $labels = [
        "name" => __("News", "haertha"),
        "singular_name" => __("News", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => true,
        "query_var" => true,
        'show_in_rest' =>true,
        "rest_base" => "",
        "supports" => ["title", "editor", "page-attributes", 'excerpt', 'author', 'revisions', 'thumbnail'],
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg'
    ];

    register_post_type("news", $args);

    /**
     * Post Type: Stellenangebot
     */
    $labels = [
        "name" => __("Stellenangebot", "haertha"),
        "singular_name" => __("Stellenangebote", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "show_in_rest" => true,
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "hierarchical" => true,
        "rewrite" => ["slug" => "stellenangebote", "with_front" => true],
        "query_var" => true,
        "supports" => ["title", "editor", "page-attributes", 'excerpt', 'author', 'revisions'],
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg'
    ];

    register_post_type("stellenangebote", $args);


    /**
     * Post Type: Downloads
     */
    $labels = [
        "name" => __("Download", "haertha"),
        "singular_name" => __("Downloads", "haertha"),
    ];

    $args = [
        "labels" => $labels,
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "show_in_rest" => true,
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "has_archive" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "hierarchical" => true,
        "rewrite" => ["slug" => "downloads", "with_front" => true],
        "query_var" => true,
        "supports" => ["title", "editor", "page-attributes", 'excerpt', 'author', 'revisions'],
        "menu_icon" => get_template_directory_uri() . '/images/icon-nk-small.svg'
    ];

    register_post_type("downloads", $args);

}


