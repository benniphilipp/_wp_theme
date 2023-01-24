<?php
$id = 'procedures-overview' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'procedures-overview';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
?>

<div class="container <?php echo esc_attr($className); ?>">


<div class="filter-main">
    <div class="filter-body">
        <!-- <div id="bg-distance"></div> -->

        <div id="wrapper" class="wrapper-filter">

            <div class="row">
                <div class="col-12 col-md-4">
                    <span class="use-filter">
                        <span>#</span>
                        <span id="use">Verfahren</span>
                        <i>#</i>
                    </span>
                </div>
                <div class="col-12 col-md-4">
                    <span class="location-filter">
                        <span>#</span>
                        <span id="location">Standort</span>
                        <i>#</i>
                    </span>
                </div>
                <div class="col-12 col-md-4">
                    <span class="serach-filter">
                        <span>#</span>
                        <span id="serach">Suche</span>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12">

                    <!--Use results-->
                    <div id="wrapper-use-results" class="results-none">
                        <ul id="wrapper-ur"></ul>
                    </div>

                    <!--Location-->
                    <div id="wrapper-location-results" class="results-none">
                    <!-- <span>überschrift</span>
                    <ul>
                        <li>Item</li>
                    </ul> -->
                    </div>

                    <!--Search-->
                    <div id="wrapper-serach-results" class="results-none">
                        <div class="wrapper">
                            <input type="text" placeholder="Eingabe">
                            <span class="underline"></span>
                        </div>
                    </div>

                </div>
            </div>

            <!--Close-->
            <div id="open-close-button" class="close-button-none contact-cta">
                <span class="btn-decor-left"></span>
                <a href="#">Schliessen und Anwenden</a>
                <span class="btn-decor-right"></span>
            </div>

        </div>
    </div>
    </div>    
</div>

<div class="container" style="position: relative; margin-top: 100px;">
    <div class="row">
        <div id="wrapper-results"></div>
    </div>
</div>





