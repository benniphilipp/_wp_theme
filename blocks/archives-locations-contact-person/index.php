<?php
/**
 * Archive Standorte Kontakt Person Block Template.
 *
 * @param array $block The block settings and attributes.
 * @param string $content The block inner HTML (empty).
 * @param bool $is_preview True during AJAX preview.
 * @param (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'archives-locations-contact-person-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'archives-locations-contact-person';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}


$team_posts = get_posts(array(
        'post_type' => 'team',
        'numberposts' => 10,
        'suppress_filters' => true, //Suppression of SQL query modification filters

    )
);
if (!$team_posts) return;
?>

<div id="<?php echo esc_attr($id); ?>"
     class="<?php echo esc_attr($className); ?> my-5" <?php if (!empty($dataattr)) : echo $dataattr; endif; ?>>

    <div class="container pb-5">
        <div class="row">
            <div class="col-12 ">
                <h2 class="ps-xl-3  ps-sm-4 ps-2 ms-sm-2 text-uppercase"><?php _e('Ansprechpartner', 'haertha'); ?></h2>
            </div>
        </div>

        <div class="row ">
            <?php foreach ($team_posts as $post) :

                $image = get_field('image', $post->ID);
                $person_position = get_field('person_position', $post->ID);
                $email_mailto = get_field('email_mailto', $post->ID);
                $email = get_field('email', $post->ID);
                $phone_number = get_field('phone_number', $post->ID);
                $phone_number_to = get_field('phone_number_to', $post->ID);


                ?>
                <div class=" col-lg-6  my-3 px-3">
                    <div class="bg-locations-white">
                        <div class="row p-3">
                            <?php if ($image) {
                                $image = is_int($image) ? $image : $image['id'];
                                ?>
                                <div class="col-sm-4 ms-sm-3  py-2 post_image">
                                    <?php echo wp_get_attachment_image($image, 'full'); ?>
                                </div>
                            <?php }; ?>
                            <div class="col-sm-7  ms-xxl-4 post_wrap py-2 <?php if (!$image) {
                                echo " col-lg-12";
                            } ?>">
                                <?php if ($person_position) echo "<div class='post_person_position'>$person_position</div>"; ?>
                                <h2 class="post_title"><?php echo $post->post_title; ?></h2>
                                <?php if ($email && $email_mailto) { ?>
                                    <div class="post_email">
                                        <i class="fa-local fa-local-mail"></i>
                                        <a href="mailto:<?php echo $email_mailto ?>"><?php echo $email ?></a>
                                    </div>
                                <?php }; ?>
                                <?php if ($phone_number && $phone_number_to) { ?>
                                    <div class="post_tel">
                                        <i class="fa-local fa-local-tel"></i>
                                        <a href="tel:<?php echo $phone_number_to ?>"><?php echo $phone_number ?></a>
                                    </div>
                                <?php }; ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
