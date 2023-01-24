<?php

$id = 'verfahren-werkstofftabelle-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'proceedings-werkstofftabelle';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?> container-xxl toc" data-toctitle="<?php echo __('Geeignete Werkstoffe', 'haertha') ?>">
    <div class="row">
        <div class="col-12">
            <div class="wrapper-materials">

                <div class="wrapper-head">
                    <div class="nummber"></div>
                    <div class="headline">
                        <h2><?php echo __('Geeignete Werkstoffe', 'haertha'); ?></h2>
                    </div>
                </div>

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