<?php

/**
 * Filter Data Overview procedure is not for filtering but only for view.
 * Function: proceedingsDataApi
 * Rest data funkction: callbackOverviewpProceedingsDataAPI
 * Route: proceedingsdatarestapi /v1 data
 * 
 * Jquery file Overview-proceedings.js path: assets/scripts/modules/Overview-proceedings.js
 * 
 */


add_action('rest_api_init', 'proceedingsDataApi');

function proceedingsDataApi(){
    register_rest_route('proceedingsdatarestapi/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'callbackOverviewpProceedingsDataAPI'
    ));
}

function callbackOverviewpProceedingsDataAPI(){
    $post_type = 'verfahren';
    $taxonomies = get_object_taxonomies( array( 'post_type' => $post_type) );
    
    // $results = array(
    //         'categorie' => array(),
    // );


    $results = array(
            'categorie' => array(),

    );
    
    foreach( $taxonomies as $taxonomy ){

        $terms = get_terms( $taxonomy );

        foreach( $terms as $term ){
            
            $args = array(
                'post_type' => $post_type,
                'posts_per_page' => -1,
                'tax_query' => array(
                    array(
                        'taxonomy' => $taxonomy,
                        'field' => 'slug',
                        'terms' => $term->slug,
                    )
                )
            );

            $posts = new WP_Query($args);
   
            array_push($results['categorie'], array(
                'name' => $term->name
            ));

            while($posts->have_posts() ){
                $posts->the_post();

                array_push($results['categorie'], array(
                    //'permalink' => get_the_permalink(),
                    'title' => get_the_title(),
                    'postid' => get_the_ID(),
                ));
            } 

        }

    }

    return $results;

}




add_action('rest_api_init', 'proceedingslocationsDataApi');

function proceedingslocationsDataApi(){
    register_rest_route('proceedingsdatalocationsrestapi/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'callbackOverviewpProceedingslocationsDataAPI'
    ));
}

function callbackOverviewpProceedingslocationsDataAPI(){
    $post_type = 'standorte';
    $taxonomies = get_object_taxonomies( array( 'post_type' => $post_type) );
    
    // $results = array(
    //         'categorie' => array(),
    // );


    $results = array(
            'categorie' => array(),

    );
    
    foreach( $taxonomies as $taxonomy ){

        $terms = get_terms( $taxonomy );

        foreach( $terms as $term ){
            
            $args = array(
                'post_type' => $post_type,
                'posts_per_page' => -1,
                'tax_query' => array(
                    array(
                        'taxonomy' => $taxonomy,
                        'field' => 'slug',
                        'terms' => $term->slug,
                    )
                )
            );

            $posts = new WP_Query($args);
   
            array_push($results['categorie'], array(
                'name' => $term->name
            ));

            while($posts->have_posts() ){
                $posts->the_post();

                array_push($results['categorie'], array(
                    //'permalink' => get_the_permalink(),
                    'postid' => get_the_ID(),
                    'title' => get_the_title()
                ));
            } 

        }

    }

    return $results;

}


//Filter Übersicht Verfahren
add_action('rest_api_init', 'proceedingsData');


function proceedingsData(){
    register_rest_route('proceedingsdata/v1', 'data', array(
        'methods' => WP_REST_SERVER::CREATABLE,
        'callback' => 'overviewpProceedingsData'
    ));
}

function overviewpProceedingsData($data){
   
    $locations = $_POST['loca'];
    $search_text = $_POST['search_text'];
    
   
    $cat = $_POST['cat'];
   
    foreach($locations as $location)
    {
        $new_meta_query[] = array('key' => 'contact_location', 'value' => sprintf('%s', $location),'compare' => 'LIKE');
    }
    $proceedings = new WP_Query(array(
        'post_type' => 'verfahren',
        'posts_per_page' => -1,
        'post__in'       => $cat,
        'sentence' => true,
        's' => sanitize_text_field($search_text),
         'meta_query' => array(
           'relation' => 'OR',
             $new_meta_query        
        )
    ));
   

   $categorys = get_terms('verfahrenstechnik');
    $categorysLocation = get_terms('standort');

    $results = array(
        'proceedingsresults' => array(),
        'locationresults' => array(),
        'categorieresults' => array(),
        'location' => array(),
        'categorysLocation' => array()
    );

   

    foreach($categorysLocation as $catVal){
        array_push($results['categorysLocation'], array(
            'name' => $catVal->name,
            'id' => $catVal->term_id,
        ));
    }

    foreach ($categorys as $catVal) {
        array_push($results['categorieresults'], array(
            'name' => $catVal->name,
            'id' => $catVal->term_id,
        ));
    }
    

    while($proceedings->have_posts()){
        $proceedings->the_post();

       
        if(get_post_type() == 'verfahren'){
            array_push($results['proceedingsresults'], array(
                'permalink' => get_the_permalink(),
                'title' => get_the_title(),
                'thumbnail' =>      get_the_post_thumbnail_url(),
              
            ));
        }

        if(get_post_type() == 'standorte'){
            array_push($results['location'], array(
                'permalink' => get_the_permalink(),
                'title' => get_the_title()
            ));
        }

        $data_location = get_field('contact_location');

        if ($data_location) {
            foreach($data_location as $item) {

                array_push($results['locationresults'], array(
                'name' => get_the_title($item),
                'permalink' => get_the_permalink($item),
                'verfahren' => array(
                    'permalink' => get_the_permalink(),
                    'title' => get_the_title()
                    )
                ));

            }
        }

    }
    wp_reset_postdata();


    //print_r($results);

    return $results;

}


/**
 * Name: Location procedure Rest API
 * 
 * function: locationprocedure
 * Rest data funktion: locationprocedure_data
 * Callback funktion: callbackLocationProcedure
 * Route: locationresult /v1 data
 * 
 * jQuer file Location.js path: assets/scripts/modules/Location.js
 * 
 */


add_action('rest_api_init', 'locationprocedure_data');

function locationprocedure_data(){
    register_rest_route('locationresult/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'callbackLocationProcedure'
    ));
}

function callbackLocationProcedure($data){

    $proceedings = new WP_Query(array(
        'post_type' => 'verfahren',
        'posts_per_page' => -1,
        'meta_query' => array(
            array(
                'key' => 'contact_location', // name of custom field
                'value' => sanitize_text_field($data['term']), // matches exactly "123", not just 123. This prevents a match for "1234"
                'compare' => 'LIKE'
            )
        )
    ));

    $proceedingsResults = array(
        'catResults' => array(),
        'results' => array()
    );


    $terms = get_terms( 'verfahrenstechnik' );

        foreach($terms as $catVal){
            array_push($proceedingsResults['catResults'], array(
                'catName' => $catVal->name,
            ));
        }
    

    while($proceedings->have_posts()){
        $proceedings->the_post();

        $terms_id = get_the_terms( get_the_ID(), 'verfahrenstechnik' );

        $cat = "";
        foreach ($terms_id as $catVal) {
            $cat = $catVal->name;
        }

        array_push( $proceedingsResults['results'], array(
            'name' => get_the_title(),
            'cat' => $cat
        ));
     
    }

    wp_reset_postdata();

    return $proceedingsResults;

}

/**
 * Rest API contact procedure slider
 * function: contactProceedings
 * Rest data funktion: contactProceedingsData
 * Callback funktion: contactProceedings
 * Route: proceedings / v1 data
 * 
 * jQuer file Contact-data.js path: assets/scripts/modules/Contact-data.js
 * 
 */


add_action('rest_api_init', 'contactProceedings');

function contactProceedings() {
    register_rest_route('proceedings/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'contactProceedingsData'
    ));
}

function contactProceedingsData($data){

    $proceedings = new WP_Query(array(
        'post_type' => 'verfahren',
        'post__in' => array($data['term'])
    ));

    $proceedingsResults = array();

    while($proceedings->have_posts()){
        $proceedings->the_post();

        $data_location = get_field('contact_location');

        if ($data_location) {
            foreach($data_location as $item) {
                array_push($proceedingsResults, array(
                'name' => get_the_title($item),
                'permalink' => get_the_permalink($item),
                'phone' => get_field('phone', $item),
                'postcode' => get_field('postcode', $item),
                'country_code' => get_field('country_code', $item),
                'email' => get_field('email', $item),
                'street_number' => get_field('street_number', $item),
                'slider_image' => get_field('slider_image', $item),
                'slider_image_size' => wp_get_registered_image_subsizes(get_field('slider_image', $item)),
                'country' => get_field('country', $item),
                //'thumbnail' =>  get_the_post_thumbnail_url($item)
                'thumbnail' => wp_get_registered_image_subsizes($item)
                ));
            }
        }

    }
    wp_reset_postdata();
    return $proceedingsResults;
}



/**
 * Rest API procedure location country code
 * function: procedureloacation
 * Rest data funktion: procedureLoacationData
 * Callback funktion: procedureLoacation
 * Route: procedurelocation / v1 data
 * 
 * 
 * 
 */

 add_action('rest_api_init', 'procedureloacation');

 function procedureloacation(){
    register_rest_route('procedurelocation/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'procedureLoacationData'
    ));
 }

 function procedureLoacationData($data){


    $locationResults = new WP_Query(array(
        'post_type' => 'verfahren',
        'post__in' => array($data['term'])
    ));

    $proceedingsResults = array();

    while($locationResults->have_posts()){
        $locationResults->the_post();

        $data_location = get_field('contact_location');

        if ($data_location) {
            foreach($data_location as $item) {
                array_push($proceedingsResults, array(
                'country_code' => get_field('country_code', $item),
                ));
            }
        }

    }
    wp_reset_postdata();
    return $proceedingsResults;

 }