<?php 

// Create id attribute allowing for custom "anchor" value.
$id = 'location-contact-person-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-contact-person';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$data_id = get_the_ID();
?>

<input id="dataIdContact" type="hidden" value="<?php echo $data_id; ?>">


<div class="col-12 col-md-11 offset-md-1 <?php echo esc_attr( $className ); ?>">
    <div class="headline">
        <span>12</span>
        <h2>ANSPRECHPARTNER</h2>
    </div>

    <div class="row">

        <div class="col-12 col-md-5 mt-4">
            <div class="contact-main">
                <div class="wrapper-img">
                    <img src="http://127.0.0.1:8000/wp-content/uploads/2023/01/Gruppe-maskieren-59.png" alt="">
                </div>
                <div class="contact-body">
                    <ul>
                        <li class="job">VERTRIEB/AUSSENDIENST</li>
                        <li class="name">Peter Maffay</li>
                        <li class="email">peter.maffay@haertha.de</li>
                        <li class="phon">(+49) 2464 5806-0</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-5 mt-4">
            <div class="contact-main">
                <div class="wrapper-img">
                    <img src="http://127.0.0.1:8000/wp-content/uploads/2023/01/Gruppe-maskieren-59.png" alt="">
                </div>
                <div class="contact-body">
                    <ul>
                        <li class="job">VERTRIEB/AUSSENDIENST</li>
                        <li class="name">Peter Maffay</li>
                        <li class="email">peter.maffay@haertha.de</li>
                        <li class="phon">(+49) 2464 5806-0</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-5 mt-4">
            <div class="contact-main">
                <div class="wrapper-img">
                    <img src="http://127.0.0.1:8000/wp-content/uploads/2023/01/Gruppe-maskieren-59.png" alt="">
                </div>
                <div class="contact-body">
                    <ul>
                        <li class="job">VERTRIEB/AUSSENDIENST</li>
                        <li class="name">Peter Maffay</li>
                        <li class="email">peter.maffay@haertha.de</li>
                        <li class="phon">(+49) 2464 5806-0</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-12 col-md-5 mt-4">
            <div class="contact-main">
                <div class="wrapper-img">
                    <img src="http://127.0.0.1:8000/wp-content/uploads/2023/01/Gruppe-maskieren-59.png" alt="">
                </div>
                <div class="contact-body">
                    <ul>
                        <li>VERTRIEB/AUSSENDIENST</li>
                        <li class="name">Peter Maffay</li>
                        <li class="email">peter.maffay@haertha.de</li>
                        <li class="phon">(+49) 2464 5806-0</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>


</div>