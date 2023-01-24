<?php 

//ACF Blocks
function create_gutenberg_blocks_haerta() {

    $blocks = [
        [ 'name' => 'page-logo-slider' ],
        [ 'name' => 'standort-karte'],
        [ 'name' => 'video-360'],
        [ 'name' => 'page-slider-individuell'],
        [ 'name' => 'page-slider-icons-vertical'],
        [ 'name' => 'verfahren-text' ],
        [ 'name' => 'verfahren-header-image'],
        [ 'name' => 'verfahren-header-video'],
        [ 'name' => 'proceedings-image-box'],
        [ 'name' => 'proceedings-werkstofftabelle'],
        [ 'name' => 'proceedings-contact'],
        [ 'name' => 'procedures-overview'],
        [ 'name' => 'location-header-video'],
        [ 'name' => 'location-header-image'],
        [ 'name' => 'location-header-inline'],
        [ 'name' => 'location-procedure-selection'],
        [ 'name' => 'location-contact-person'],
        [ 'name' => 'location-material-tables'],
        [ 'name' => 'location-contact-form'],
        [ 'name' => 'news-content' ],
        [ 'name' => 'news-slider' ],
        [ 'name' => 'news-header-banner' ],
        [ 'name' => 'page-hero-slider-pictures-video'],
        [ 'name' => 'page-text-bilder-icon'],
        [ 'name' => 'news-archive'],
        [ 'name' => 'archives-locations-procedures'],
        [ 'name' => 'archive-locations-header'],
        [ 'name' => 'archives-locations-contact-person'],
        [ 'name' => 'archive-locations-material'],
        [ 'name' => 'page-image-text-image'],
        [ 'name' => 'page-image-text'],
        [ 'name' => 'page-large-image'],
        [ 'name' => 'page-image-text-50-50'],
        [ 'name' => 'page-contact-cta'],
      ];
    
      foreach($blocks as $block) {
        register_block_type( get_template_directory() . '/blocks/' . $block['name']);
      }

}

// Gutenberg Wordpress Blocks
function placeholder_gutenberg_blocks_haertha() {

  $blocks = [
      [ 'name' => 'header-menu', 'options' => [
        'render_callback' => 'render_header_haertha',
      ]],
      [ 'name' => 'footer-menu', 'options' => [
        'render_callback' => 'render_menu_footer_haertha',
      ]],
      [ 'name' => 'page-query', 'options' => [
        'render_callback' => 'render_page_query_haertha',
      ]],
      [ 'name' => 'sidebar-verfahren', 'options' => [
        'render_callback' => 'render_sidebar_verfahren_haertha',
      ]],
      [ 'name' => 'custom-breadcrumbs', 'options' => [
        'render_callback' => 'render_custom_breadcrumbs_haertha',
      ]],
      [ 'name' => 'header-single-location', 'options' => [
        'render_callback' => 'render_custom_headline',
      ]],
    ];

    foreach($blocks as $block) {
      register_block_type( get_template_directory() . '/build/' . $block['name'],
        isset($block['options']) ? $block['options'] : []
      );
    }

}
