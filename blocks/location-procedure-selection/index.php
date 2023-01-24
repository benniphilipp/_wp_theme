<?php

// Create id attribute allowing for custom "anchor" value.
$id = 'location-procedure-selection-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-procedure-selection';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$data_id = get_the_ID();
?>

<input id="dataIdLoacation" type="hidden" value="<?php echo $data_id; ?>">

<div class="<?php echo esc_attr( $className ); ?>">

    <div class="col-12 offset-md-1">
        <div class="headline">
            <h2>16 Verfahren</h2>
        </div>
    </div>

    <div class="col-12 col-md-10 offset-md-1" style="background-color: var(--wp--preset--color--area);">
        <div class="row">
            <div class="col-12 col-md-4" id="dataIdLoacationResults">
                <div class="verfahren-main">
                <div id="wrapper-location" class="results-none">
                    <span>überschrift</span>
                    <ul>
                        <li>Item</li>
                    </ul>
                    </div>
                    <div class="headline-underline">
                        <span>Nitrieren</span>
                    </div>
                    <div class="verharen-body">
                        <ul>
                            <li>Plasmanitrieren</li>
                            <li>Gasnitrieren</li>
                            <li>Gasnitrieren</li>
                            <li>Gasnitrieren</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="verfahren-main">
                    <div class="headline-underline">
                        <span>Nitrieren</span>
                    </div>
                    <div class="verharen-body">
                        <ul>
                            <li>Plasmanitrieren</li>
                            <li>Gasnitrieren</li>
                            <li>Gasnitrieren</li>
                            <li>Gasnitrieren</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="verfahren-main">
                    <div class="headline-underline">
                        <span>Nitrieren</span>
                    </div>
                    <div class="verharen-body">
                        <ul>
                            <li>Plasmanitrieren</li>
                            <li>Gasnitrieren</li>
                            <li>Gasnitrieren</li>
                            <li>Gasnitrieren</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>