<?php

function render_menu_footer_haertha() {
    ob_start();
    ?>
    <footer>
        
    </footer>
    <?php
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}