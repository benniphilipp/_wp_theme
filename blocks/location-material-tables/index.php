<?php

// Create id attribute allowing for custom "anchor" value.
$id = 'location-material-tables-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-material-tables';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$data_id = get_the_ID();
?>

<input id="dataIdMaterial" type="hidden" value="<?php echo $data_id; ?>">

<div class="col-12 col-md-9 offset-md-1 <?php echo esc_attr( $className ); ?>" style="background-color: var(--wp--preset--color--area);">

<div class="row">
        <div class="col-12">
            <div class="wrapper-materials">
                <div class="content-materials">

                    <div class="drop-nav">
                        <span>Hover over me</span>
                        <ul class="drop-menu">
                            <li><a href="#">action 1</a></li>
                            <li><a href="#">action 2</a></li>
                            <li><a href="#">action 3</a></li>
                            <li><a href="#">action 4</a></li>
                        </ul>
                    </div>


                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col"><?php echo __('Werkstoff', 'haertha' );?></th>
                            <th scope="col"><?php echo __('Härte', 'haertha' ); ?></th>
                            <th scope="col"><?php echo __('NHT', 'haertha' ); ?></th>
                            <th scope="col"><?php echo __('VS', 'haertha' ); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>