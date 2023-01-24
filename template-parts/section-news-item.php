<?php
$categoryList = get_the_term_list(get_the_ID(), 'new', '', ',');
?>
<div class="col-md-6">

    <div class="header-img">
        <?php the_post_thumbnail('full'); ?>
    </div>

    <div class="procedures_box">
        <div class="procedures_box-top_bar">
            <?php if ($categoryList) { ?>
                <div class="procedures_box-main-title">
                    <?php echo $categoryList; ?>
                </div>
            <?php }; ?>
            <a href="#"
               class="procedures_box-main-time"><?php echo get_the_date('d . m . Y', $post->ID); ?></a>
        </div>
        <div class="procedures_box-content">
            <h5 class="procedures_box-sub_title"><?php echo get_the_title($post->ID); ?></h5>

            <?php echo get_the_excerpt($post->ID); ?>

            <a href="<?php the_permalink($post->ID); ?>" class="procedures_box-read_more"
               title="<?php _e('Read More', 'haertha'); ?>">
                <span><?php _e('Read More', 'haertha'); ?> </span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="48" height="48" x="0"
                     y="0"
                     viewBox="0 0 64 64" style="enable-background:new 0 0 512 512"
                     xml:space="preserve"
                     class="">
                                <g>
                                    <path d="m51.93 33-50.93-.041a1 1 0 0 1 0-2l50.931.041a1 1 0 0 1 0 2z"
                                          fill="#717170" data-original="#717170"></path>
                                    <path
                                            d="m64 32.012c-5.681 2.1-12.731 5.692-17.1 9.5l3.446-9.512-3.433-9.513c4.365 3.813 11.409 7.413 17.087 9.525z"
                                            fill="#717170" data-original="#717170"></path>
                                </g>
                            </svg>
            </a>
        </div>
    </div>
</div>