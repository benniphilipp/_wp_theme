<?php 

// Create id attribute allowing for custom "anchor" value.
$id = 'location-contact-form-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'location-contact-form';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$page_id = get_the_ID();

$form = get_field('location_contact_form', $page_id);
$text_form = get_field('text_form', $page_id);
$cta = get_field('cta', $page_id);
$email_form = get_field('email_form', $page_id);
$phone_form = get_field('phone_form', $page_id);
$phone_link = get_field('phone_link', $page_id);
?>

<?php if($form): ?>
    <div class="<?php echo esc_attr( $className ); ?>">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="wrapper-contact-form">
                    <span class="icon-decor-out-right"></span>
                    <div class="headline">
                        <h2>Ihre<br> NACHRICHT</h2>
                    </div>
                    <div class="body-contact-form">
                        <div class="content-contact-form">
                            <?php echo $text_form; ?>
                        </div>
                        <div class="headline">
                            <?php echo $cta; ?>
                        </div>
                        <ul>
                            <li><a href="mailto:<?php echo $email_form; ?>"><?php echo $email_form; ?></a></li>
                            <li><a href="tel:<?php echo $phone_form; ?>"><?php echo $phone_form; ?></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 offset-md-1 col-md-5">
                <div class="wrapper-contact-formular">
                    <?php echo apply_shortcodes( '[contact-form-7 id="' . get_field('location_contact_form', $page_id)->ID . '"]' ); ?>
                </div>
            </div>
        </div>
    </div>
<?php else: ?>
    <?php echo __('Kein Formular aus gewählt.', 'haertha'); ?>
<?php endif; ?>