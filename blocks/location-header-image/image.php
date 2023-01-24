<?php

//Data
$image = get_field('image');
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?> container-xxl" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?>>   
    <div class="row">
        <div class="col-12">

            <?php if( !empty( $image ) ): ?>
                <img class="img-fluid" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
            <?php endif; ?>

        </div>
    </div>
</div>