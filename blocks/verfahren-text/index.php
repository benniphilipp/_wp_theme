<?php
/**
 * Verfahren Text Block.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'verfahren-text-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'verfahren-text';
$dataattr = '';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

// Load values and assign defaults.
$toc = get_field('toc') ? : '';
if($toc != ""){
    $dataattr .= 'data-toctitle="'.$toc.'"';
}

$headline = get_field('headline');
$subline = get_field('subline');
$texteditor = get_field('texteditor');
$border = get_field('border') ? : '';
$infotext = get_field('infotext');

$style_boder ="";
if($border != ""){
    $style_boder .= 'style="border: 10px solid #C9C9C9;"';
}

$special_characters = get_field('special_characters') ? : '';

$headline_placholder = isset( $block['example']['attributes']['data']['headline']) ? $block['example']['attributes']['data']['headline'] : 'Headline';
$text_placholder = isset( $block['example']['attributes']['data']['text']) ? $block['example']['attributes']['data']['text'] : 'subline';

if(isset($block['style']['spacing']['padding']['top'])) {

    $inlineStyles = $block['style']['spacing']['padding']['top'];

    //Padding Top
    $top = new Blocks;
    $top->setPaddingTop($inlineStyles);
    $paddingTop = $top->getPaddingTop();
}
if(isset($block['style']['spacing']['padding']['bottom']) ) {

    $inlineStyles = $block['style']['spacing']['padding']['bottom'];

    //Padding Botttom
    $bottom = new Blocks;
    $bottom->setPaddingBottom($inlineStyles);
    $paddingBottom = $bottom->getPaddingBottom();
}
if(isset($block['style']['spacing']['margin']['top']) ) {

    $inlineStyles = $block['style']['spacing']['margin']['top'];

    //Marigin top
    $topMargin  = new Blocks;
    $top->setMarginTop($inlineStyles);
    $marginTop = $top->getMarginTop();
}
if(isset($block['style']['spacing']['margin']['bottom']) ) {

    $inlineStyles = $block['style']['spacing']['margin']['bottom'];

    //Marigin Bottom
    $topBottom  = new Blocks;
    $bottom->setBottomTop($inlineStyles);
    $marginBottom = $bottom->getBottomTop();
}

// $block_default = '';
// $allowed_blocks = array(
//     array( 'core/columns', array(), array(
//         array( 'core/column', array(), array(
//             array( 'core/image', array() ),
//         ) ),
//         array( 'core/column', array(), array(
//             array( 'core/paragraph', array() ),
//         ) ),
//         array( 'core/column', array(), array(
//             array( 'core/list', array() ),
//         ) ),
//     ) )
// );

$allowed_blocks = array( 'core/image', 'core/paragraph', 'core/list', 'core/columns', 'core/heading' );
$v_toc = 'toc';
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?> <?php if($toc): echo $v_toc; endif; ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?> style="<?php if(!empty($marginTop)) : echo $marginTop; endif; if(!empty($marginBottom)): echo $marginBottom; endif; ?>">
    <div class="row">
        <div class="col-12">
            <div class="content-wrapper" <?php echo $style_boder; ?> style="<?php  if(!empty($paddingTop)): echo $paddingTop; endif; ?> <?php if(!empty($paddingBottom)): echo $paddingBottom; endif; ?>">
                <div class="box">
                    <?php if($special_characters){ ?>
                        <div class="characters"> 
                            <span><?php echo $special_characters; ?></span>
                        </div>
                    <?php }elseif($toc){ ?>
                        <div class="nummber"> 
                            <span></span>
                        </div>
                    <?php }else{
                        ?> <span style="width: 44px;"></span> <?php 
                    } ?>
                    <div class="headline">
                        <h2><?php if($headline): echo $headline; else: echo $headline_placholder; endif; ?></h2>
                    </div>
                </div>
                <div class="content-box">
                    <div class="subline">
                        <?php echo $subline; ?>
                    </div>
                    
                    <p><?php if($texteditor): echo $texteditor; else: echo $text_placholder; endif; ?></p>
                    <?php echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" templateLock="false" />'; ?>

                    <?php if( !empty($infotext)){ ?>
                    <div class="wrapper-infotext">
                        <div class="body-infotext">
                            <?php echo $infotext; ?>
                        </div>
                    </div>
                    <?php } ?>

                </div>
            </div>
        </div>
    </div>
</div>

<?php // echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $block_default ) ) . '" />'; ?>


