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

function proceedingsDataApi()
{
    register_rest_route('proceedingsdatarestapi/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'callbackOverviewpProceedingsDataAPI'
    ));
}

function callbackOverviewpProceedingsDataAPI()
{
    $post_type = 'verfahren';
    $taxonomies = get_object_taxonomies(array('post_type' => $post_type));

    // $results = array(
    //         'categorie' => array(),
    // );


    $results = array(
        'categorie' => array(),

    );

    foreach ($taxonomies as $taxonomy) {

        $terms = get_terms($taxonomy);

        foreach ($terms as $term) {

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

            while ($posts->have_posts()) {
                $posts->the_post();

                array_push($results['categorie'], array(
                    //'permalink' => get_the_permalink(),
                    'title' => get_the_title()
                ));
            }
        }
    }

    return $results;
}




//Filter Übersicht Verfahren
add_action('rest_api_init', 'proceedingsData');


function proceedingsData()
{
    register_rest_route('proceedingsdata/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'overviewpProceedingsData'
    ));
}

function overviewpProceedingsData($data)
{

    $proceedings = new WP_Query(array(
        'post_type' => array('verfahren', 'standorte'),
        'posts_per_page' => -1,
        // 'exact' => true,
        'sentence' => true,
        's' => sanitize_text_field($data['term'])
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



    foreach ($categorysLocation as $catVal) {
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

    while ($proceedings->have_posts()) {
        $proceedings->the_post();

        if (get_post_type() == 'verfahren') {
            array_push($results['proceedingsresults'], array(
                'permalink' => get_the_permalink(),
                'title' => get_the_title(),
                'thumbnail' =>  get_the_post_thumbnail_url(),
                'date' =>  get_the_date(),
            ));
        }

        if (get_post_type() == 'standorte') {
            array_push($results['location'], array(
                'permalink' => get_the_permalink(),
                'title' => get_the_title()
            ));
        }

        $data_location = get_field('contact_location');

        if ($data_location) {
            foreach ($data_location as $item) {

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

function locationprocedure_data()
{
    register_rest_route('locationresult/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'callbackLocationProcedure'
    ));
}

function callbackLocationProcedure($data)
{

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


    $terms = get_terms('verfahrenstechnik');

    foreach ($terms as $catVal) {
        array_push($proceedingsResults['catResults'], array(
            'catName' => $catVal->name,
        ));
    }


    while ($proceedings->have_posts()) {
        $proceedings->the_post();

        $terms_id = get_the_terms(get_the_ID(), 'verfahrenstechnik');

        $cat = "";
        foreach ($terms_id as $catVal) {
            $cat = $catVal->name;
        }

        array_push($proceedingsResults['results'], array(
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

function contactProceedings()
{
    register_rest_route('proceedings/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'contactProceedingsData'
    ));
}

function contactProceedingsData($data)
{

    $proceedings = new WP_Query(array(
        'post_type' => 'verfahren',
        'post__in' => array($data['term'])
    ));

    $proceedingsResults = array();

    while ($proceedings->have_posts()) {
        $proceedings->the_post();

        $data_location = get_field('contact_location');

        if ($data_location) {
            foreach ($data_location as $item) {
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

function procedureloacation()
{
    register_rest_route('procedurelocation/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'procedureLoacationData'
    ));
}

function procedureLoacationData($data)
{


    $locationResults = new WP_Query(array(
        'post_type' => 'verfahren',
        'post__in' => array($data['term'])
    ));

    $proceedingsResults = array();

    while ($locationResults->have_posts()) {
        $locationResults->the_post();

        $data_location = get_field('contact_location');

        if ($data_location) {
            foreach ($data_location as $item) {
                array_push($proceedingsResults, array(
                    'country_code' => get_field('country_code', $item),
                ));
            }
        }
    }
    wp_reset_postdata();
    return $proceedingsResults;


 }


 
// There has been a critical error on this website.
//}




 /**
 * Name: Location distance Rest API
 *
 * function: locationdistance
 * Rest data funktion: locationdistance_data
 * Callback funktion: callbackLocationDistance
 * Route: locationdistance /v1 data
 *
 * jQuery file Location.js path: assets/scripts/main.js
 *
 */


add_action('rest_api_init', 'locationdistance_data');

function locationdistance_data(){
    register_rest_route('locationdistance/v1', 'data', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'callbackLocationDistance'
    ));
}

function callbackLocationDistance($data){
    $loc = $data['loc'];
    $the_term = "standorte";
    $proceedings = new WP_Query(array(
        'post_type' => $the_term,
        'posts_per_page' => -1,

    ));

    $Results = array(
    );
    /* result:
        [{cat1 => [
                {title => "post title", distance => distance},
                {title => "post title", distance => distance},
                ...]},
        {cat2  => [
                {title => "post title", distance => distance},
                {title => "post title", distance => distance},
                ...]},
        ...
        {catx   => [...]}
    ]
    */
    $the_cat_term = 'standort';
    // first, have a flat array of post with lon/lat
    while($proceedings->have_posts()){
        $proceedings->the_post();
        $id = get_the_ID();
        // post title
        $title = get_the_title();
        /*
        $categories = [];


        $post_categories = get_the_terms( $id, $the_cat_term );

        foreach ($post_categories as $cat){
            array_push($categories, $cat->name);
        }
        */

        $lon = get_field( 'longitude', $id );
        $lat = get_field( 'latitude', $id );


        if(!($lon && $lat)){
            continue;
        }
        $cn_code = get_field( 'country_code', $id );
        array_push($Results, array(
            id => $id,
            title => $title,
            cn_code => $cn_code,
            lon => $lon,
            lat => $lat,
            distance => null,
        ));

    }
    $lon_lats = array_map(function($a){return $a['lon'] . ',' . $a['lat'];}, $Results);
    $dest = implode($lon_lats, ";");


    // calculate their distance with the given lon/lat

    $curl = curl_init();
    //'http://router.project-osrm.org/table/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219?sources=0&annotations=distance'
    $api_url = 'http://router.project-osrm.org/table/v1/driving/';
    $url = $api_url . $loc . ';' . $dest . '?sources=0&annotations=distance';

    curl_setopt_array($curl, array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    $data = json_decode($response);
    //echo 'response:'. $response;


    $group_result = array();
    if($data->code == 'Ok'){
       $distances = $data->distances[0];
       array_shift($distances);
       $i = 0;
       foreach($distances as $d){
         $Results[$i++]['distance'] = (int)($d/1000);
       }
    }
    //grouping the result with location cat
    foreach($Results as $r){
        $cn_code = $r['cn_code'];

        if(! array_key_exists($cn_code, $group_result)){
            $group_result[$cn_code] = [];
        }
        array_push($group_result[$cn_code], $r);

    }

    //reset
    wp_reset_postdata();

    return $group_result;

}


