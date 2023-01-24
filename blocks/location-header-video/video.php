<?php 

// Load value.
$iframe = get_field('video');
$autoplay = get_field('autoplay');

$magnific_popup = get_field('magnific_popup');

// Use preg_match to find iframe src.
preg_match('/src="(.+?)"/', $iframe, $matches);
$src = $matches[1];

// Add extra parameters to src and replace HTML.
$params = array(
    'controls'    => 0,
    'hd'        => 1,
    'loop'      => $autoplay,
    'autohide'    => 1,
    'autohide'    => $autoplay,
    'autoplay' => $autoplay
);

$new_src = add_query_arg($params, $src);
$iframe = str_replace($src, $new_src, $iframe);

// Add extra attributes to iframe HTML.
$attributes = 'frameborder="0"';
$iframe = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $iframe);
?>

<script src="https://player.vimeo.com/api/player.js"></script>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr( $className ); ?>" <?php if(!empty($dataattr)) : echo $dataattr; endif; ?>>   
    <div class="embed-container">
        <?php echo $iframe; ?>
    </div> 
    <div class="video-nav-button">
        <ul>
            <li><?php if($magnific_popup=true): echo '<a id="iframeId" class="iframe-link" href="' . $src . '">'; endif; ?> 
            <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnIGlkPSJHcnVwcGVfNTE2Ij48cGF0aCBpZD0iUGZhZF8yNjYiIGQ9Ik01MCwwYzI3LjQyOSwtMCA1MCwyMi41NzEgNTAsNTBjMCwyNy40MjkgLTIyLjU3MSw1MCAtNTAsNTBjLTI3LjQyOSwwIC01MCwtMjIuNTcxIC01MCwtNTBjLTAsLTI3LjQyOSAyMi41NzEsLTUwIDUwLC01MFoiIHN0eWxlPSJmaWxsOiNmMGYwZjA7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggaWQ9IlBvbHlnb25fMyIgZD0iTTcyLjYsNDcuOTEzYzAuOTE2LDAuNTM4IDEuNDgsMS41MjQgMS40OCwyLjU4NmMwLDEuMDYzIC0wLjU2NCwyLjA0OSAtMS40OCwyLjU4N2wtMzEuMDgsMTguMjU5Yy0wLjQ2MSwwLjI3MSAtMC45ODYsMC40MTQgLTEuNTIsMC40MTRjLTEuNjQ2LC0wIC0zLC0xLjM1NSAtMywtM2MtMCwtMC4wMDEgLTAsLTAuMDAxIC0wLC0wLjAwMWwtMCwtMzYuNTE2Yy0wLC0wIC0wLC0wIC0wLC0wLjAwMWMtMCwtMS42NDUgMS4zNTQsLTMgMywtM2MwLjUzNCwwIDEuMDU5LDAuMTQzIDEuNTIsMC40MTRsMzEuMDgsMTguMjU4WiIgc3R5bGU9ImZpbGw6IzdjYjQ1ZTtmaWxsLXJ1bGU6bm9uemVybzsiLz48L2c+PC9zdmc+'/>
            <?php if($magnific_popup=true): echo '</a>'; endif; ?></li>
        </ul>
    </div>    
</div>
