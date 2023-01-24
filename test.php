<?php 
class Blocks{
    
    var $inlineStyles;

    //Styling Padding Top
    function setPaddingTop($inlineStyles){
        
        $style =  array('spacing' => array( 'padding' => array( 'top' => $inlineStyles )),);

        $styles_top = wp_style_engine_get_styles(
            $style,
        );
        $this->top = $styles_top;
    }

    //Styling Padding Top
    function getPaddingTop(){
        return(
            $PaddingTop = $this->top['css']
        );
    }

    //Styling Padding Bottom
    function setPaddingBottom($inlineStyles){

        $style =  array(
        	'spacing' => array( 'padding' => array( 'bottom' => $inlineStyles )),
        );

        $styles_bottom = wp_style_engine_get_styles(
           $style,

        );
        $this->bottom = $styles_bottom;
    }

    //Styling Padding Bottom
    function getPaddingBottom(){
        return(
            $PaddingBottom = $this->bottom['css']
        );
    }

    //Styling Margin Bottom
    function setMarginTop($inlineStyles){

        $style =  array(
            'spacing' => array( 'margin' => array( 'top' => $inlineStyles )),
        );

        $styles_top = wp_style_engine_get_styles(
            $style,

        );
        $this->top = $styles_top;
    }

    //Styling Margin Bottom
    function getMarginTop(){
        return(
            $marginTop = $this->top['css']
        );
    }

    //Styling Margin Bottom
    function setBottomTop($inlineStyles){

        $style =  array('spacing' => array( 'margin' => array( 'bottom' => $inlineStyles )));

        $styles_bottom = wp_style_engine_get_styles(
            $style,

        );
        $this->bottom = $styles_bottom;
    }

    //Styling Margin Bottom
    function getBottomTop(){
        return(
            $marginBottom = $this->bottom['css']
        );
    }

}

//Sicherung 17.01

//ACF Supoort
if ( ! function_exists( 'get_block_styles' ) ) :
    function get_block_styles($attributes) {

        $styles = "";

        // Get our top, right, bottom, and left padding values
        if ( ! empty( $attributes['spacing']['padding'] ) ) {
            $paddingTop = $attributes['spacing']['padding']['top'] ? "padding-top: {$attributes['spacing']['padding']['top']};" : '';
            $paddingRight = $attributes['spacing']['padding']['right'] ? "padding-right: {$attributes['spacing']['padding']['right']};" : '';
            $paddingBottom = $attributes['spacing']['padding']['bottom'] ? "padding-bottom: {$attributes['spacing']['padding']['bottom']};" : '';
            $paddingLeft = $attributes['spacing']['padding']['left'] ? "padding-left: {$attributes['spacing']['padding']['left']};" : '';
            $styles .= "{$paddingTop}{$paddingRight}{$paddingBottom}{$paddingLeft}";
        }

        // Get our top, right, bottom, and left margin values
        if ( ! empty( $attributes['spacing']['margin'] ) ) {
            $marginTop = $attributes['spacing']['margin']['top'] ? "margin-top: {$attributes['spacing']['margin']['top']};" : '';
            //$marginRight = $attributes['spacing']['margin']['right'] ? "margin-right: {$attributes['spacing']['margin']['right']};" : '';
            $marginBottom = $attributes['spacing']['margin']['bottom'] ? "margin-bottom: {$attributes['spacing']['margin']['bottom']};" : '';
            //$marginLeft = $attributes['spacing']['margin']['left'] ? "margin-left: {$attributes['spacing']['margin']['left']};" : '';
            //$styles .= "{$marginTop}{$marginRight}{$marginBottom}{$marginLeft}";
            $styles .= "{$marginTop}{$marginBottom}";
        }

        return $styles;
    }
endif;


function gutenberg_apply_colors_support( $block_type, $block_attributes ) {
	// The return value.
	$attributes = array();
    
	// Return early if the block skips all serialization for block supports.
	if ( gutenberg_should_skip_block_supports_serialization( $block_type, 'color' ) ) {
		return $attributes;
	}

	// Checks for support and skip serialization.
	$has_text_support                        = block_has_support( $block_type, array( 'color', 'text' ), false ); 
	$has_background_support                  = block_has_support( $block_type, array( 'color', 'background' ), false );
	$skips_serialization_of_color_text       = wp_should_skip_block_supports_serialization( $block_type, 'color', 'text' ); 
	$skips_serialization_of_color_background = wp_should_skip_block_supports_serialization( $block_type, 'color', 'background' ); 
    
	// Get the color styles from the style object.
	$block_color_styles = isset( $block_attributes['style']['color'] ) ? $block_attributes['style']['color'] : null;

	// The mutated styles object we're going to pass to wp_style_engine_get_styles().
	$color_block_styles = array();

	// Set the color style values according to whether the block has support and does not skip serialization.
	$spacing_block_styles['text']       = $has_text_support && ! $skips_serialization_of_color_text ? _wp_array_get( $block_color_styles, array( 'text' ), null ) : null;
	$spacing_block_styles['background'] = $has_background_support && ! $skips_serialization_of_color_background ? _wp_array_get( $block_color_styles, array( 'background' ), null ) : null;

	// Pass the color styles, excluding those that have no support or skip serialization, to the Style Engine.
	$styles = wp_style_engine_get_styles( array( 'color' => $block_color_styles ) );

	// Return the generated styles to be applied to the block's HTML element.
	return array(
		'style' => $styles['css'],
		'class' => $styles['classnames']
	);
}

// // functions.php
// // Will only leave Image, Paragraph, Heading and List blocks 
// function misha_allowed_block_types( $allowed_blocks, $post ) {
//     $allowed_blocks = array(
//       'core/image',
//       'core/paragraph',
//       'core/heading',
//       'core/list'
//     );
//     // Only for Page post type
//     if( $post->post_type === 'page' ) {
//       $allowed_blocks[] = 'core/shortcode';
//     }
//     return $allowed_blocks;
//   }
//   add_filter( 'allowed_block_types', 'misha_allowed_block_types', 10, 2 );

// add_filter( 'allowed_block_types_all', 'misha_allowed_block_types', 25, 2 );
 
// function misha_allowed_block_types( $allowed_blocks, $editor_context ) {
 
// 	return array(

// 	);
 
// }


// add_filter( 'rwmb_meta_boxes', 'your_prefix_register_meta_boxes' );

// function your_prefix_register_meta_boxes( $meta_boxes ) {
//     $prefix = '';

//     $meta_boxes[] = [
//         'title'   => esc_html__( 'Untitled Field Group', 'online-generator' ),
//         'id'      => 'untitled',
//         'context' => 'normal',
//         'fields'  => [
//             [
//                 'type' => 'text',
//                 'name' => esc_html__( 'Text', 'online-generator' ),
//                 'id'   => $prefix . 'text_el62ndb82nn',
//             ],
//         ],
//     ];

//     return $meta_boxes;
// }





// function assistancy_responsive_images( $attr, $attachment, $size ) {
//     if ( $size == 'full' ) {
//       $attr['sizes'] = '100vw';
//     } 
//     else {
//    // make any customizations based on other image sizes here
//       $attr['sizes'] = '(min-width: 768px) 440px, 100vw';
//    // expand to include as many breakpoints as you like. List the larger ones first!
//     }
//     return $attr;
//   }
//   add_filter( 'wp_get_attachment_image_attributes', 'assistancy_responsive_images', 10, 3 );





//SIcherung Verharen ergebnisse

// add_action('rest_api_init', 'proceedingsresult');

// function proceedingsresult(){
//     register_rest_route('proceedingsresult/v1', 'data', array(
//         'methods' => WP_REST_SERVER::READABLE,
//         'callback' => 'ProceedingsDataResult'
//     ));
// }

// function ProceedingsDataResult(){

//     $proceedingresults = new WP_Query(array(
//         'post_type' => array('verfahren', 'standorte'),
//         'order'                 => 'ABC',
//         'posts_per_page' => -1,
//         'tax_query' =>
//             array(
//                 'taxonomy' => 'verfahrenstechnik',
//                 'field' => 'slug',
//                 'terms' => 'all',
//         )
//     )); 

//     $results_items = array(
//         'results' => array(),
//         'categorieresults' => array()
//     );

//     $categorys = get_terms('verfahrenstechnik');

//     foreach ($categorys as $catVal) {
//         array_push($results_items['categorieresults'], array(
//             'name' => $catVal->name,
//             'id' => $catVal->term_id,
//         ));
//     }

//     while($proceedingresults->have_posts()){
//         $proceedingresults->the_post();

//         $terms = get_the_terms( get_the_ID(), 'verfahrenstechnik' );
//         $terms = join(', ', wp_list_pluck( $terms , 'name') );

//         $terms_id = get_the_terms( get_the_ID(), 'verfahrenstechnik' );
//         $terms_id = join(', ', wp_list_pluck( $terms_id , 'term_id') );

//         // foreach($terms as $items){
//         //     array_push($results_items['results'], array(
//         //         'name' => $items->name
//         //     ));
//         // }

//         if(get_post_type() == 'verfahren'){
//             array_push($results_items['results'], array(
//                 'permalink' => get_the_permalink(),
//                 'title' => get_the_title(),
//                 'cat' => $terms,
//                 'id' => $terms_id
//             ));
//         }   

//         // $terms_loc = get_the_terms( get_the_ID(), 'standort' );
//         // $terms_loc = join(', ', wp_list_pluck( $terms_loc , 'name') );

//         // if(get_post_type() == 'standorte'){
//         //     array_push($results_items['location'], array(
//         //         'permalink' => get_the_permalink(),
//         //         'title' => get_the_title(),
//         //         'thumbnail' =>  get_the_post_thumbnail_url(),
//         //         'slug' => $terms_loc
//         //     ));
//         // } 
//     }
//     return $results_items;
// }




//Verfahren BlocK

if(isset($block['style']['spacing']['padding']['top'])) {

    $inlineStyles = $block['style']['spacing']['padding']['top'];

    //Padding Top
    $top = new Blocks;
    $top->setPaddingTop($inlineStyles);
    $paddingTop = $top->getPaddingTop();
}
if(isset($block['style']['spacing']['padding']['bottom']) ) {

    $inlineStyles = $block['style']['spacing']['padding']['bottom'];

    //Padding Botttom
    $bottom = new Blocks;
    $bottom->setPaddingBottom($inlineStyles);
    $paddingBottom = $bottom->getPaddingBottom();
}
if(isset($block['style']['spacing']['margin']['top']) ) {

    $inlineStyles = $block['style']['spacing']['margin']['top'];

    //Marigin top
    $topMargin  = new Blocks;
    $top->setMarginTop($inlineStyles);
    $marginTop = $top->getMarginTop();
}
if(isset($block['style']['spacing']['margin']['bottom']) ) {

    $inlineStyles = $block['style']['spacing']['margin']['bottom'];

    //Marigin Bottom
    $topBottom  = new Blocks;
    $bottom->setBottomTop($inlineStyles);
    $marginBottom = $bottom->getBottomTop();
}


// $block_default = '';
// $allowed_blocks = array(
//     array( 'core/columns', array(), array(
//         array( 'core/column', array(), array(
//             array( 'core/image', array() ),
//         ) ),
//         array( 'core/column', array(), array(
//             array( 'core/paragraph', array() ),
//         ) ),
//         array( 'core/column', array(), array(
//             array( 'core/list', array() ),
//         ) ),
//     ) )
// );


//Verharen Sicherung

/**
 * Verfahren Text Block.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'verfahren-text-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'verfahren-text';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

// Load values and assign defaults.
$toc = get_field('toc') ? : '';
if($toc != ""){
    $dataattr .= 'data-toctitle="'.$toc.'"';
}

$headline = get_field('headline');
$subline = get_field('subline');
$texteditor = get_field('texteditor');
$border = get_field('border') ? : '';

$style_boder ="";
if($border != ""){
    $style_boder .= 'style="border: 10px solid #C9C9C9;"';
}

$special_characters = get_field('special_characters') ? : '';

$headline_placholder = isset( $block['example']['attributes']['data']['headline']) ? $block['example']['attributes']['data']['headline'] : 'Headline';
$text_placholder = isset( $block['example']['attributes']['data']['text']) ? $block['example']['attributes']['data']['text'] : 'subline';



$allowed_blocks = array( 'core/image', 'core/paragraph', 'core/list', 'core/columns' );
$v_toc = 'toc';
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?> <?php if($toc): echo $v_toc; endif; ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?> style="<?php if(!empty($marginTop)) : echo $marginTop; endif; if(!empty($marginBottom)): echo $marginBottom; endif; ?>">
    <div class="row">
        <div class="col-12">
            <div class="content-wrapper" <?php echo $style_boder; ?> style="<?php  if(!empty($paddingTop)): echo $paddingTop; endif; ?> <?php if(!empty($paddingBottom)): echo $paddingBottom; endif; ?>">
                <div class="box">
                    <?php if($special_characters){ ?>
                        <div class="characters"> 
                            <span><?php echo $special_characters; ?></span>
                        </div>
                    <?php }elseif($toc){ ?>
                        <div class="nummber"> 
                            <span></span>
                        </div>
                    <?php }else{
                        ?> <span style="width: 44px;"></span> <?php 
                    } ?>
                    <div class="headline">
                        <h2><?php if($headline): echo $headline; else: echo $headline_placholder; endif; ?></h2>
                    </div>
                </div>
                <div class="content-box">
                    <div class="subline">
                        <?php echo $subline; ?>
                    </div>
                    <?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" templateLock="false" />'; ?>
                    <p><?php if($texteditor): echo $texteditor; else: echo $text_placholder; endif; ?></p>
                </div>
            </div>
        </div>
    </div>
</div>

<?php // echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $block_default ) ) . '" />'; 




// add_filter( 'rwmb_meta_boxes', 'your_prefix_register_meta_boxes' );

// function your_prefix_register_meta_boxes( $meta_boxes ) {
//     $prefix = '';

//     $meta_boxes[] = [
//         'title'   => esc_html__( 'Untitled Field Group', 'online-generator' ),
//         'id'      => 'untitled',
//         'context' => 'normal',
//         'fields'  => [
//             [
//                 'type' => 'text',
//                 'name' => esc_html__( 'Text', 'online-generator' ),
//                 'id'   => $prefix . 'text_el62ndb82nn',
//             ],
//         ],
//     ];

//     return $meta_boxes;
// }





// function assistancy_responsive_images( $attr, $attachment, $size ) {
//     if ( $size == 'full' ) {
//       $attr['sizes'] = '100vw';
//     } 
//     else {
//    // make any customizations based on other image sizes here
//       $attr['sizes'] = '(min-width: 768px) 440px, 100vw';
//    // expand to include as many breakpoints as you like. List the larger ones first!
//     }
//     return $attr;
//   }
//   add_filter( 'wp_get_attachment_image_attributes', 'assistancy_responsive_images', 10, 3 );


















//SIcherung Verharen ergebnisse

// add_action('rest_api_init', 'proceedingsresult');

// function proceedingsresult(){
//     register_rest_route('proceedingsresult/v1', 'data', array(
//         'methods' => WP_REST_SERVER::READABLE,
//         'callback' => 'ProceedingsDataResult'
//     ));
// }

// function ProceedingsDataResult(){

//     $proceedingresults = new WP_Query(array(
//         'post_type' => array('verfahren', 'standorte'),
//         'order'                 => 'ABC',
//         'posts_per_page' => -1,
//         'tax_query' =>
//             array(
//                 'taxonomy' => 'verfahrenstechnik',
//                 'field' => 'slug',
//                 'terms' => 'all',
//         )
//     )); 

//     $results_items = array(
//         'results' => array(),
//         'categorieresults' => array()
//     );

//     $categorys = get_terms('verfahrenstechnik');

//     foreach ($categorys as $catVal) {
//         array_push($results_items['categorieresults'], array(
//             'name' => $catVal->name,
//             'id' => $catVal->term_id,
//         ));
//     }

//     while($proceedingresults->have_posts()){
//         $proceedingresults->the_post();

//         $terms = get_the_terms( get_the_ID(), 'verfahrenstechnik' );
//         $terms = join(', ', wp_list_pluck( $terms , 'name') );

//         $terms_id = get_the_terms( get_the_ID(), 'verfahrenstechnik' );
//         $terms_id = join(', ', wp_list_pluck( $terms_id , 'term_id') );

//         // foreach($terms as $items){
//         //     array_push($results_items['results'], array(
//         //         'name' => $items->name
//         //     ));
//         // }

//         if(get_post_type() == 'verfahren'){
//             array_push($results_items['results'], array(
//                 'permalink' => get_the_permalink(),
//                 'title' => get_the_title(),
//                 'cat' => $terms,
//                 'id' => $terms_id
//             ));
//         }   

//         // $terms_loc = get_the_terms( get_the_ID(), 'standort' );
//         // $terms_loc = join(', ', wp_list_pluck( $terms_loc , 'name') );

//         // if(get_post_type() == 'standorte'){
//         //     array_push($results_items['location'], array(
//         //         'permalink' => get_the_permalink(),
//         //         'title' => get_the_title(),
//         //         'thumbnail' =>  get_the_post_thumbnail_url(),
//         //         'slug' => $terms_loc
//         //     ));
//         // } 
//     }
//     return $results_items;
// }




































       //var_dump($terms);

        // if(get_post_type() == 'verfahren'){
        //     array_push($results_items['results'], array(
        //         'permalink' => get_the_permalink(),
        //         'title' => get_the_title(),
        //         'thumbnail' =>  get_the_post_thumbnail_url(),
        //         'slug' => $terms
        //     ));
        // }   

        // $terms_loc = get_the_terms( get_the_ID(), 'standort' );
        // $terms_loc = join(', ', wp_list_pluck( $terms_loc , 'name') );

        // if(get_post_type() == 'standorte'){
        //     array_push($results_items['location'], array(
        //         'permalink' => get_the_permalink(),
        //         'title' => get_the_title(),
        //         'thumbnail' =>  get_the_post_thumbnail_url(),
        //         'slug' => $terms_loc
        //     ));
        // }   

    //}
    //return $results_items;

// array_push($results['categorieResults'], array(
//     'title' => get_the_title(),
//     'permalink' => get_the_permalink(),
//     'location' => get_field('contact_location')
// ));


// array_push($results['proceedingsresults'], array(
//     'title' => get_the_title(),
//     'permalink' => get_the_permalink()
// ));


// // Code for themes
// add_action( 'after_switch_theme', 'flush_rewrite_rules' );

// // Code for plugins
// register_deactivation_hook( __FILE__, 'flush_rewrite_rules' );
// register_activation_hook( __FILE__, 'myplugin_flush_rewrites' );
// function myplugin_flush_rewrites() {
// 	// call your CPT registration function here (it should also be hooked into 'init')
// 	register_my_cpts_haertha();
// 	flush_rewrite_rules();
// }






//ALT 

    // $taxonomies = get_object_taxonomies( array( 'post_type' => 'verfahren' ) );

    // $post_type = 'verfahren';
    // foreach( $taxonomies as $taxonomy ){

    //     $results = array(
    //         'categorie' => array(),
    //     );

    //     $terms = get_terms( $taxonomy );

    //     foreach( $terms as $term ){
            
    //         $args = array(
    //             'post_type' => $post_type,
    //             'posts_per_page' => -1,
    //             'tax_query' => array(
    //                 array(
    //                     'taxonomy' => $taxonomy,
    //                     'field' => 'slug',
    //                     'terms' => $term->slug,
    //                 )
    //             )
    //         );

    //         $posts = new WP_Query($args);
   
    //         array_push($results['categorie'], $term->name );


    //         //$term->name, $term->term_id 

    //         while($posts->have_posts() ){
    //             $posts->the_post();

    //             array_push($results['categorie'], array(
    //                 'permalink' => get_the_permalink(),
    //                 'title' => get_the_title()
    //             ));
    //         } 

    //     }

    // }

?>



<!--page-text-bilder-icon--->

    <!-- about_wrapper section start -->
    <section class="pageptext-bilder-icon">
         <?php 
            if($block['className'] == 'is-style-style_02'){
          ?>
         <!-- about wrapper start 2-->
        <div class="about_wrapper">
            <div class="single_about_left">
                <div class="content_right">
                    <?php 
                        if(!empty($bg)){
                            printf('<img src="%s" alt="%s">', $bg['url'], $bg['alt']);
                        }
                        if(!empty($video)):
                     ?>
                    <a href="<?php echo $video; ?>" class="icon popup-youtube">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/play-2.png" alt="">
                    </a>
                    <?php endif; ?>
                </div>
            </div>
            <div class="single_about_right">
                <?php 
                    echo $text;
                    if($button == 'link_extern'){
                ?>
                <div class="popup_link">
                    <a class="theme-btn" href="<?php echo $link_extern; ?>" target="__blank">MEHR ERFAHREN</a>
                </div>
                <?php }elseif($button == 'link_intern'){ ?>
                <div class="popup_link">
                    <a class="theme-btn" href="<?php echo $link_intern->guid; ?>">MEHR ERFAHREN</a>
                </div>
                <?php } ?>
            </div>
        </div>
         <!-- about wrapper end-->
         <?php 
            }elseif($block['className'] == 'is-style-style_03'){
          ?>
         <!-- about wrapper start 3-->
        <div class="about_wrapper about_wrapper_2">
            <div class="single_about_right single_about_right_2">
                <?php 
                    if(!empty($headline)){
                        printf('<h2>%s</h2>', $headline);
                    }
                 ?>
                <div class="content_left">
                    <div class="content_single">
                        <?php echo $text;?>
                    </div>
                </div>
            </div>
            <div class="single_about_left single_about_left_2">
                <div class="content_right">
                    <?php 
                        if(!empty($bg)){
                            printf('<img src="%s" alt="%s">', $bg['url'], $bg['alt']);
                        }
                        if(!empty($video)):
                    ?>
                    <div class="video_popup">
                        <a href="<?php echo $video; ?>" class="icon-2 popup-youtube">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/play-2.png" alt="">
                            <span>FILM ABSPIELEN</span>
                        </a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
         <!-- about wrapper start-->
         <?php 
            }elseif($block['className'] == 'is-style-style_04'){
          ?>
         <!-- about wrapper start 4-->
        <div class="about_wrapper about_wrapper_2">
            <div class="single_about_left single_about_left_2">
                <div class="content_right">
                    <?php 
                        if(!empty($bg)){
                            printf('<img src="%s" alt="%s">', $bg['url'], $bg['alt']);
                        }
                     ?>
                </div>
            </div>
            <div class="single_about_right single_about_right_2 ">
                <div class="content_left content_left_2">
                    <?php 
                        if(!empty($headline)){
                            printf('<h2>%s</h2>', $headline);
                        }
                     ?>
                    <div class="content_single">
                        <?php 
                            echo $text;
                            if($button == 'link_extern'){
                        ?>
                        <div class="popup_link">
                            <a class="theme-btn" href="<?php echo $link_extern; ?>" target="__blank">MEHR ERFAHREN</a>
                        </div>
                        <?php }elseif($button == 'link_intern'){ ?>
                        <div class="popup_link">
                            <a class="theme-btn" href="<?php echo $link_intern->guid; ?>">MEHR ERFAHREN</a>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
         <!-- about wrapper start-->
        <?php }else{ ?>
            <!-- about wrapper start-->
            <div class="about_wrapper">
                <div class="single_about_left">
                    <div class="content_right">
                        <?php 
                            if(!empty($bg)){
                                printf('<img src="%s" alt="%s">', $bg['url'], $bg['alt']);
                            }
                         ?>
                    </div>
                </div>
                <div class="single_about_right">
                    <?php 
                        echo $text;
                        if($button == 'link_extern'){
                    ?>
                    <div class="popup_link">
                        <a class="theme-btn" href="<?php echo $link_extern; ?>" target="__blank">MEHR ERFAHREN</a>
                    </div>
                    <?php }elseif($button == 'link_intern'){ ?>
                    <div class="popup_link">
                        <a class="theme-btn" href="<?php echo $link_intern->guid; ?>">MEHR ERFAHREN</a>
                    </div>
                    <?php } ?>
                </div>
            </div>
             <!-- about wrapper end-->
        <?php } ?>
    </section>