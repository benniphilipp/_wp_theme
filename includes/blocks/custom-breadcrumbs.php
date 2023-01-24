<?php 



function custom_breadcrumbs() {
    global $post;
    $ancestors = $post->ancestors;
    $parent = $post->parent;
    echo '<ul class="breadcrumb list-unstyled">';
    if (is_front_page()) {
    echo get_the_title();
    } else {
    echo '<li><a href="'.home_url().'">Home</a>&nbsp;</li>';
    //Check if page has ancestors - if only one parent exists, this will be an empty array
    if($ancestors){
        //Reverse the array so out put starts at the top of the hierarchy
        $parents = array_reverse($ancestors);
        foreach($parents as $parent){
        echo '<li><a href="'.get_page_link($parent).'">'.get_the_title($parent).'</a>&nbsp;</li>';
        }
    }
    else if($post->parent){
        //Deal with single parent situation
        echo '<li><a href="'.get_page_link($parent).'">'.get_the_title($parent).'</a>&nbsp;</li>';
    }
    //Present current title as simple text, no link
    echo '<li>' . get_the_title() . '</li>';
    }
    echo '</ul>';
}


function render_custom_breadcrumbs_haertha() {
    ob_start(); ?>
    
    <div class="breadcrumbs">
        <?php custom_breadcrumbs(); ?>
    </div>

    <?php $output = ob_get_contents();
    ob_end_clean();
    return $output;
}