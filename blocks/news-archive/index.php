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