<?php

// Create id attribute allowing for custom "anchor" value.
$id = 'news-content-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'news-content';
$dataattr = '';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}

//Headlien
$headline = get_field('headline');

//SUbline
$subline = get_field('subline');

//Text
$text = get_field('text');

//Image
$images = get_field('images');

//SUB Filed: image
?>


<div class="single_main_content">
    <div class="wp-block-columns alignwide">
        <div class="container-xxl <?php echo esc_attr($className); ?>">
            <div class="row">
                <div class="col-lg-8">
                    <div class="single_main_content_left">
                        <h2 class="h2_title"><?php echo $headline ?></h2>
                        <h4 class="h4_title"> <?php echo $subline ?> </h4>
                        <div class="single_main_text">
                            <?php echo $text ?>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="single_main_content_right">
                        <?php
                        // foreach ($images as $k => $v) {
                        //     echo "<img src='" . $v['image']['url'] . "' alt='" . $v['image']['title'] . "'>";
                        // }

                        foreach ($images as $k => $v) {
                            // echo "background-image: url(" . $v['image']['url'] . ")";
                            echo "<div class='single_main_content_right_img' style='background-image: url(" . $v['image']['url'] . ")'></div>";
                        }
                        ?>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>