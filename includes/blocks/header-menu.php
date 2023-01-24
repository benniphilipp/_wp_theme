<?php 



function render_header_haertha(){

        ob_start();
        ?>
        <div class="row">
            <div class="col-12">
            <header>
                <nav class="navbar sticky-fix">
                    <span class="navbar-toggle" id="js-navbar-toggle"></span>
                    <a class="navbar-brand" href="#">
                        <img class="brand" src="<?php echo get_template_directory_uri() . '/images/h-Logo.png' ?>" width="64" height="64" alt="">
                    </a>    
                    <?php 
                        wp_nav_menu(array(
                            'theme_location' => 'headerMenuLocation',
                            'container' => ''
                        ));
                        ?>
                    <!-- <input class="d-none search-icon d-md-block" type="text"> -->
                    <ul class="lang">
                        <li class="d-none d-md-block">DE</li>
                    </ul>
                </nav>
            </header>
            </div>
        </div>
        <?php
        $output = ob_get_contents();
        ob_end_clean();

    return $output;
}

