

  //Import Class
  import ContactData from "./modules/Contact-data"
  import ProceedingData from "./modules/Overview-proceedings"
  import LocationData from "./modules/Location"
  import ContactPerson from "./modules/Contact"

  const contactdata = new ContactData()
  const proceedingdata = new ProceedingData()
  const locationdata = new LocationData()
  const contactperson = new ContactPerson()


  jQuery(document).ready(function($){

    //popup image
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
        enabled:true
      },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });

    //popup video
    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });



    jQuery('.video-button-run').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1&muted=1'
                },
                vimeo: {
                    index: 'vimeo.com/', 
                    id: function(url) {        
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: '//player.vimeo.com/video/%id%?autoplay=1&muted=1"'
                }
            }
        }
    });
    //popup image

    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
        enabled:true
      },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });

    //popup video
    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });
    
    //Header menü
    let mainNav = document.getElementById("menu-header-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");

    navBarToggle.addEventListener("click", function() {
      mainNav.classList.toggle("active");
    });

    //Swiper Verfahren Video
    var swiper = new Swiper(".mySwiper2", {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      preloadImages: false,
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  })

  //mySwiperImageGallery 18.02
  var swiper = new Swiper(".mySwiperImageGallery", {
    slidesPerView: "auto",
    centeredSlides: true,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    pagination: {
      el: '.wrapper-video-pagination > .swiper-pagination-video-new',
      clickable: true,
      renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';;
      },
    },

    navigation: {
      nextEl: ".wrapper-video-pagination > .swiper-button-video-next",
      prevEl: ".wrapper-video-pagination > .swiper-button-video-prev",
    },

  });


  //Verfahren Header Image Gallery
  var swiper = new Swiper(".mySwiperProceedingsHeader", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //Location Header Image Gallery
  var swiper = new Swiper(".mySwiperlocationHeader", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  if (jQuery(".sidebarmenu")[0]){
    let is_toc = false;
    let css_class = "";
    jQuery(".toc").each(function(){
        is_toc = true;
        jQuery(".sidebarmenu ol").append("<li><a href='#"+jQuery(this).attr("id")+"'>"+jQuery(this).attr("data-toctitle")+"</a></li>");
    });
    if(!is_toc){
      jQuery(".subnav .navpoints").hide();
    }
  }

  //List numbering
  jQuery(".nummber").each(function(i){
    jQuery(this).find("number").remove().end()
      .prepend("<span class='number'>" + (i + 1) + ". </span>");
  });

 
  //Smoothscroll Verfahren
  jQuery(document).on("scroll", onScroll);

  
  //smoothscroll
  jQuery('#nav-id ol li a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    jQuery(document).off("scroll");

    jQuery('a').each(function() {
      jQuery(this).removeClass('active');
    })
    jQuery(this).addClass('active');

    var target = this.hash,
      menu = target;
    target = jQuery(target);
    jQuery('html, body').stop().animate({
      'scrollTop': target.offset().top + 2
    }, 500, 'swing', function() {
      window.location.hash = target;
      jQuery(document).on("scroll", onScroll);
    });
  });

  function onScroll(event) {
    var scrollPos = jQuery(document).scrollTop();
    jQuery('#nav-id a').each(function() {
      var currLink = jQuery(this);
      var refElement = jQuery(currLink.attr("href"));
      var refElement_pos = refElement.offset().top;
      var header_height = jQuery('.navbar ').height() ;
      var refElement_pos_total = refElement_pos;
      var scrollPos_total = scrollPos + header_height;

      if (refElement_pos < scrollPos_total && refElement_pos + refElement.height() > scrollPos_total) {
        jQuery('#nav-id ol li a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }



  //Verfahren Page menu
  jQuery(".down").click(function() {
    jQuery('html, body').animate({
          scrollTop: jQuery(".up").offset().top
      }, 1500);
  });

  var btn = jQuery('#button');

  btn.on('click', function(e) {
    e.preventDefault();
    jQuery('html, body').animate({scrollTop:0}, '300');
  });

  jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  //PopUp https://codepen.io/kaiak/pen/yLyqxOY
  // jQuery("#popupIdVideo").click(function() {
  //   jQuery(".popup").fadeIn(500);
  // });
  jQuery(".close").click(function() {
    jQuery(".popup").fadeOut(500);
  });


  //open popup
  jQuery('.popup-button').on('click', function(event){
    event.preventDefault();
    var number = jQuery(this).data("number");
    console.log('.popup-'+number)
    jQuery('.popup-'+number).fadeIn(500);
  });
  
  //https://stackoverflow.com/questions/57375427/multiple-popup-in-same-page
  // //close popup
  // $('.popup').on('click', function(event){
  //   if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
  //     event.preventDefault();
  //     $(this).removeClass('is-visible');
  //   }
  // });
  
  // //close popup when clicking the esc keyboard button
  // $(document).keyup(function(event){
  //     if(event.which=='27'){
  //       $('.popup').removeClass('is-visible');
  //     }
  //   });

