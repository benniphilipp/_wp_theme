<?php 

//https://gist.github.com/ZachEngstrom/291f888a15b2d4bdd838
function render_sidebar_verfahren_haertha() {
    ob_start();

    while(have_posts()) {
        the_post(); ?>

<div class="row">
    <div class="wrapper-fix" style="background-color: var(--wp--preset--color--primary);">
        <div class="fix">
            <div class="col-12 col-md-4">
                <div class="headline">
                    <?php the_title('<h1>', '</h1>'); ?>
                </div>
                <span class="location">
                    <ul id="procedurelocation">

                    </ul>
                </span>
            </div>

            <div class="col-12 col-md-8">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="excerpt">
                            <?php the_excerpt(); ?>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="call-to-action">
                            <p><?php the_field('text_cta'); ?></p>
                            <a class="d-none d-lg-block d-sx-none down" href="#contact">Zum Kontakt</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>


    <?php }

    $output = ob_get_contents();
    ob_end_clean();
    
    return $output;

}


