


###########
I need a single page, news post, type news, the block for that already exists.
###########

Der Kontent soll so sein wir auf dem Bild, du kannst den Block nemehen den ich breits angelgt habe.
Es sind alle Felder angelegt, du von ACF kommen und Benötigt werden.

Theme Pfad: blocks/news-content/index.php


Das Header Bild und die Seite soll über die Wordpress Theme Page eingebunden werden:
templates/single-new.html

Sonst ist das eine einfach arbeit später wirst du dann die überischt (Archive) seite machen.





Was benutze werden darf:

magnific-popup
https://dimsemenov.com/plugins/magnific-popup/

scrollrevealjs
https://scrollrevealjs.org/


##### Update task 1: #####


Please do not include icons, all icons are forbidden with us, you can't use anything that I don't give you, just add a "#" sign.

###########

Don't make it so complicated with the styles. You don't have to make a query as to which Style Guard is selected and everything has to be filled in. The user has to be able to fill out all the fields in the backend.

Once with a green dot and once without.

You can omit all the icons, I can't embed any images that way. I'll do that later.

With the IFrame for video, the src code is enough for us, so I added it and already adapted it.

I like the way the slider opens with the pictures.

Maybe I'll adjust it a little more.

Only the slider in the popup should be exactly like this: https://codesandbox.io/s/buxl0r?file=/index.html:3872-3932

And please stick to the design exactly, otherwise we have to adapt it again and again.

What you need to check again is the height I forgot the menu if you would look at it again.

Then we do the second task.


And the backend always has to be adjusted.


### Task 2 ####

##### introduction #### 
Here it is again, 4 styles in one block.
With Video Popup Slider you just have to pay attention to it. The user can decide whether the picture is once on the right and once on the left. So it's adjustable.

#Button: The button is only displayed if the internal link or external link is displayed.
Internal means the user can search for a page. External means the user can link somewhere. We have to do it in such a way that 
when the link of the internal page changes, the user doesn't have to go through the whole page and look for the link.

#Image Slider: 
Slider as before, even if the user clicks on the button, the pop-up opens and a slider appears.

#Video PopUp: 
As with the other task, the video is clicked and it opens in a pop-up.

ACF Gutenberg Blocks -- blocks/page-text-bilder-icon
SCSS data -- assets/styles/pages/_page-text-bilder-icon.scss

#Icon Box:
What is also added here is the icons box, which the user can select as an inline, you don't have to worry about it just making sure that this box is in the right place, it comes out over the text.




#### Task 1 ####
We make 3 designs from this Gutenberg ACF field, with the support of WordPress it's no problem, you can have everything spent.

Only the positions of the elements change, the content remains the same.

Additional functions:
Video:
A video should be stored, which should be opened at the push of a button.

Image:
And a picture gallery if the user wants that, please use Swiper JS, I've already integrated it.

https://swiperjs.com/swiper-api

We chose this for the picture gallery: https://codesandbox.io/s/buxl0r?file=/index.html:3872-3932

You can put your JQuery in the Main JS
insert.
assets/scripts/main.js

Please install the NPM packages otherwise you cannot work.

#######################

(Block) Hero Slider Bilder und Video

ACF Gutenbenberg Block --> page-hero-slider-pictures-video

SCSS --> assets/styles/pages/_page-hero-slider-pictures-video.scss



Vimeo test Video: https://vimeo.com/235215203


npm init -y
npm install @wordpress/scripts --save-dev
npm run watch

Ordner Stucktur

JS files --> assets/scripts
CSS files --> assets/scss

##### Asif Y #####
assets/styles/_news.scss

////Asif Y Here you can WRITE your JS
assets/scripts/main.js



I have already created the Gutenberg block where you can write your code.
If you prefer to create JS instead of Classe, you are welcome to do that too.
---------------------------------------------------------------------------

News overview page
templates/archive-news.html

    ACF Gutenbenberg Blocks:
    (Block) News Header Banner
    news-header-banner

    Fields: is a silver post(Is in acf Optionen News)
    Is true or false

    false_true

    The header silder needs to fetch the posts itself that it needs.
    For all posts, there is an option that this post is in the header, please sort by date, newest is always displayed first.

    Swiper js is already included, we are already using it.
    https://swiperjs.com/



    If you need to register your Ajax, you are welcome to do so under: includes/rest-api.php, please label it.


---------------------------------------------------------------------------------------------------------------------------------------






##########

ACF Login:

I have created the ACF Blcok (Block) News content for you, it requires 3 images where the user can decide to use only one image.
In addition, headline and subline, text, that's all I need.

You just have to adjust the block as in the picture, all fields of ACF are already created. You only have to write code, nothing else.

ACF BLOCK --> blocks/news-content

Path to php --> blocks/news-content
Path to scss --> assets/styles/_news.scss

You can create the fields that are missing yourself.



