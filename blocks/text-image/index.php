<?php 

// $text = '';

// if ( ! empty( $block['backgroundColor'] ) ) {
// 	$background_color[] = 'has-' . $block['backgroundColor'] . '-background-color';
// }

// if ( ! empty( $block['fontSize'] ) ) {
// 	$fontsitze[] = $block['fontSize'];
// }

// if ( ! empty( $block['textColor'] ) ) {
// 	$text_color[] = $block['textColor'];
// }

// if ( ! empty( $block['example'] ) ) {
// 	$text[] = $block['example'];
// }

// echo $text;

// pre_r($block);

// function pre_r($array) {
//     echo '<pre>';
//     print_r($array);
//     echo '</pre>';
// }

// if ( $is_preview ) {
        //echo '<img class="show-inserter-ui w-100" style="display: none;" alt="Preview" src="/wp-content/themes/arqis/template-parts/blocks/txt02/txt02.JPG"/>';
// }

$headline = get_field( 'headline' );
?>

<?php echo $headline; ?>



