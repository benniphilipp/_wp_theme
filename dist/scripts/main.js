/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Contact_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Contact-data */ "./assets/scripts/modules/Contact-data.js");
/* harmony import */ var _modules_Overview_proceedings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Overview-proceedings */ "./assets/scripts/modules/Overview-proceedings.js");
/* harmony import */ var _modules_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Location */ "./assets/scripts/modules/Location.js");
/* harmony import */ var _modules_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Contact */ "./assets/scripts/modules/Contact.js");




var contactdata = new _modules_Contact_data__WEBPACK_IMPORTED_MODULE_0__["default"]();
var proceedingdata = new _modules_Overview_proceedings__WEBPACK_IMPORTED_MODULE_1__["default"]();
var locationdata = new _modules_Location__WEBPACK_IMPORTED_MODULE_2__["default"]();
var contactperson = new _modules_Contact__WEBPACK_IMPORTED_MODULE_3__["default"]();
jQuery(document).ready(function ($) {
  //popup image
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      // duration of the effect, in milliseconds
      easing: "ease-in-out",
      // CSS transition easing function

      opener: function opener(openerElement) {
        return openerElement.is("img") ? openerElement : openerElement.find("img");
      }
    }
  });

  //popup video
  $(".popup-youtube").magnificPopup({
    type: "iframe"
  });
  jQuery(".video-button-run").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: function id(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: "//www.youtube.com/embed/%id%?autoplay=1&muted=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: function id(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1&muted=1"'
        }
      }
    }
  });
  //popup image

  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      // duration of the effect, in milliseconds
      easing: "ease-in-out",
      // CSS transition easing function

      opener: function opener(openerElement) {
        return openerElement.is("img") ? openerElement : openerElement.find("img");
      }
    }
  });

  //popup video
  $(".popup-youtube").magnificPopup({
    type: "iframe"
  });

  //Header menü
  var mainNav = document.getElementById("menu-header-menu");
  var navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  //Swiper Verfahren Video
  var swiper = new Swiper(".mySwiper2", {
    effect: "fade",
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
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  //Swiper news slider
  var swiper = new Swiper(".news-slider", {
    slidesPerView: 1,
    speed: 1000,
    loop: false,
    preloadImages: false,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

//mySwiperImageGallery 18.02
var swiper = new Swiper(".mySwiperImageGallery", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".wrapper-video-pagination > .swiper-pagination-video-new",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '"></span>';
    }
  },
  navigation: {
    nextEl: ".wrapper-video-pagination > .swiper-button-video-next",
    prevEl: ".wrapper-video-pagination > .swiper-button-video-prev"
  }
});

//Verfahren Header Image Gallery
var swiper = new Swiper(".mySwiperProceedingsHeader", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

//Location Header Image Gallery
var swiper = new Swiper(".mySwiperlocationHeader", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
if (jQuery(".sidebarmenu")[0]) {
  var is_toc = false;
  var css_class = "";
  jQuery(".toc").each(function () {
    is_toc = true;
    jQuery(".sidebarmenu ol").append("<li><a href='#" + jQuery(this).attr("id") + "'>" + jQuery(this).attr("data-toctitle") + "</a></li>");
  });
  if (!is_toc) {
    jQuery(".subnav .navpoints").hide();
  }
}

//List numbering
jQuery(".nummber").each(function (i) {
  jQuery(this).find("number").remove().end().prepend("<span class='number'>" + (i + 1) + ". </span>");
});

//Smoothscroll Verfahren
jQuery(document).on("scroll", onScroll);

//smoothscroll
jQuery('#nav-id ol li a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  jQuery(document).off("scroll");
  jQuery("a").each(function () {
    jQuery(this).removeClass("active");
  });
  jQuery(this).addClass("active");
  var target = this.hash,
    menu = target;
  target = jQuery(target);
  jQuery("html, body").stop().animate({
    scrollTop: target.offset().top + 2
  }, 500, "swing", function () {
    window.location.hash = target;
    jQuery(document).on("scroll", onScroll);
  });
});
function onScroll(event) {
  var scrollPos = jQuery(document).scrollTop();
  jQuery("#nav-id a").each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));
    var refElement_pos = refElement.offset().top;
    var header_height = jQuery(".navbar ").height();
    var refElement_pos_total = refElement_pos;
    var scrollPos_total = scrollPos + header_height;
    if (refElement_pos < scrollPos_total && refElement_pos + refElement.height() > scrollPos_total) {
      jQuery("#nav-id ol li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

//Verfahren Page menu
jQuery(".down").click(function () {
  jQuery("html, body").animate({
    scrollTop: jQuery(".up").offset().top
  }, 1500);
});
var btn = jQuery("#button");
btn.on("click", function (e) {
  e.preventDefault();
  jQuery("html, body").animate({
    scrollTop: 0
  }, "300");
});
jQuery(window).scroll(function () {
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
jQuery(".close").click(function () {
  jQuery(".popup").fadeOut(500);
});

//open popup
jQuery('.popup-button').on('click', function (event) {
  event.preventDefault();
  var number = jQuery(this).data("number");
  jQuery('.popup-' + number).fadeIn(500);
  jQuery('.popup-' + number).css('display', 'flex');
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

// News page
jQuery(document).ready(function ($) {
  jQuery('.news-input-search').on('keypress', function (e) {
    // enter press
    if (e.which == 13) {
      ajaxNews(e.currentTarget);
    }
  }).on('focus', function (e) {
    return closetNewsModalCategory(e.target);
  }).on('click', function (e) {
    return closetNewsModalCategory(e.target);
  });

  // closet Modal Category
  function closetNewsModalCategory(e) {
    jQuery(e).closest('.news-archive-block').find('.wrapper-filter').removeClass('active');
    jQuery(e).closest('.news-archive-block').find('.news-filter-col.category-toggle,.news-filter-col.date-toggle').removeClass('active');
    jQuery(e).closest('.news-archive-block').find('.filter-modal .active').removeClass('active');
  }

  // search button
  jQuery('.search-filter').on('click', function (e) {
    return ajaxNews(e.target);
  });

  // trigger category and date modal
  jQuery('.date-toggle,.category-toggle').on('click', function (e) {
    e.preventDefault();
    console.log(e);
    var parent = $(e.target).closest('.news-archive-block'),
      target = $(e.target).data('class') ? $(e.target) : $(e.target).closest('.news-filter-col');
    console.log(target);
    // check if close section category
    if (parent.find('.' + target.data('class')).hasClass('active')) {
      parent.find('.wrapper-filter').removeClass('active');
      parent.find('.news-filter-col.active').removeClass('active');
      parent.find('.filter-modal .active').removeClass('active');
    } else {
      parent.find('.news-filter-col.active').removeClass('active');
      parent.find('.filter-modal .active').removeClass('active');
      parent.find('.wrapper-filter').addClass('active');
      parent.find('.' + target.data('class')).addClass('active');
      target.addClass('active');
    }
  });

  // Click Other section  hide category and remove background
  jQuery(document).click(function (event) {
    if (!$(event.target).closest(".wrapper-filter").length) {
      $('.category-list,.date-list').removeClass('active');
      $('.news-filter-col.active').removeClass('active');
      $('.wrapper-filter').removeClass('active');
    }
  });
  jQuery('.date-select').on('change', function (e) {
    return ajaxNews(e.target);
  }).on('focus', function (e) {
    return closetNewsModalCategory(e.target);
  }).on('click', function (e) {
    return closetNewsModalCategory(e.target);
  }).on('focusout', function (e) {
    $(e.target).closest('.news-archive-block').find('.wrapper-filter').removeClass('active');
  });
  jQuery('.filter-modal .close-button-none').on('click', function (e) {
    e.preventDefault();
    ajaxNews(e.target);
  });

  // ajax
  function ajaxNews(element) {
    var term = [];
    $(element).closest('.news-archive-block').find('.news-category__input:checked').each(function () {
      term.push(jQuery(this).val());
    });
    var date = [];
    $(element).closest('.news-archive-block').find('.news-date__input:checked').each(function () {
      date.push(jQuery(this).val());
    });
    var s = $(element).closest('.news-archive-block').find('.news-input-search').val();
    var nonce = $(element).closest('.news-archive-block').find('[name=news_post_ajax_of_nonce_field]').val();
    var objectPost = {
      action: "news_post_ajax",
      term: term,
      s: s,
      nonce: nonce,
      date: date
    };
    if (nonce) {
      $.post(proceedingsData.ajax, objectPost).success(function (posts) {
        closetNewsModalCategory(element);
        $(element).closest('.news-archive-block').find('.ajax-news-row').html(posts);
      });
    }
  }
});

//     if (jQuery(window).scrollTop() > 300) {
//         btn.addClass("show");
//     } else {
//         btn.removeClass("show");
//     }
// });

//PopUp https://codepen.io/kaiak/pen/yLyqxOY
// jQuery("#popupIdVideo").click(function() {
//   jQuery(".popup").fadeIn(500);
// });
jQuery(".close").click(function () {
  jQuery(".popup").fadeOut(500);
});

//open popup
jQuery(".popup-button").on("click", function (event) {
  event.preventDefault();
  var number = jQuery(this).data("number");
  jQuery(".popup-" + number).fadeIn(500);
  jQuery(".popup-" + number).css("display", "flex");
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

//     jQuery('.popup-'+number).fadeIn(500);
//     jQuery('.popup-'+number).css('display', 'flex');
//   });

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

//Slieder page-slider-individuell
var swiper = new Swiper(".myIndividually", {
  slidesPerView: 2.5,
  //slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next"
  }
});

//cache result distances for this location
var distant_results = {};
var build_cn_block = function build_cn_block(cn_code, locs) {
  //show distant result with data

  /*
      <div class="location-list">
          <span class="country">DE</span>
          <ul>
              <li>ALDENHOVEN</li>
              <li>CADOLZBURG</li>
              <li>ISERLOHN</li>
          </ul>
          <ul class="km">
              <li>20</li>
              <li>30</li>
              <li>100</li>
          </ul>
      </div>
  */
  var titles = [];
  var kms = [];
  jQuery.each(locs, function (i, loc) {
    titles.push('<li>' + loc.title + '</li>');
    kms.push('<li>' + loc.distance + '</li>');
  });
  var title_str = titles.join("");
  var km_str = kms.join("");
  return "<div class=\"location-list\">\n            <span class=\"country\">".concat(cn_code, "</span>\n            <ul>\n                ").concat(title_str, "\n            </ul>\n            <ul class=\"km\">\n                ").concat(km_str, "\n            </ul>\n        </div>");
};
var show_distant_result = function show_distant_result(data) {
  console.log('data:', data);
  var blocks = [];
  jQuery.each(data, function (cn_code, locs) {
    blocks.push(build_cn_block(cn_code, locs));
  });
  var loc_str = blocks.join("");
  var ele = jQuery(".body-location-list");
  ele.find('.location-list').remove().end();
  ele.append(loc_str);
  console.log('loc_str:', loc_str);
};
jQuery('.location-input input').on('blur', function (e) {
  console.log('location input value:', this.value);
  var loc = this.value;
  if (loc in distant_results) {
    return show_distant_result(distant_results[loc]);
  }
  var url = '/wp-json/locationdistance/v1/data/?loc=' + loc;
  jQuery.get(url).done(function (res) {
    if (res) {
      distant_results[loc] = res;
    }
    return show_distant_result(res);
  });
});

/***/ }),

/***/ "./assets/scripts/modules/Contact-data.js":
/*!************************************************!*\
  !*** ./assets/scripts/modules/Contact-data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var contactData = /*#__PURE__*/function () {
  function contactData() {
    _classCallCheck(this, contactData);
    this.getDataId();
    this.getProcedureLocation();
  }
  _createClass(contactData, [{
    key: "getProcedureLocation",
    value: function getProcedureLocation() {
      this.dataId = jQuery("#dataId").val();
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/procedurelocation/v1/data/?term=' + this.dataId, function (data) {
        var locationHtml = "";
        var country_data = [];
        jQuery.each(data, function (i, item) {
          if (!country_data.includes(item.country_code)) {
            if (item.country_code == item.country_code) {
              locationHtml += "<li>" + item.country_code + "</li>";
              country_data.push(item.country_code);
            }
          }
        });
        var ul = jQuery('#procedurelocation');
        ul.append(locationHtml);
      });
    }
  }, {
    key: "getSwiperJS",
    value: function getSwiperJS() {
      //Contact Proceedings
      var swiperImage = new Swiper(".mySwiperImge", {
        direction: "vertical",
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
      var swiperContact = new Swiper(".mySwiperContakt", {
        direction: 'horizontal',
        observer: true,
        observeParents: true,
        pagination: {
          el: '.wrapper-pagination > .swiper-pagination-new',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '"></span>';
            ;
          }
        },
        navigation: {
          nextEl: ".wrapper-pagination > .swiper-button-next",
          prevEl: ".wrapper-pagination > .swiper-button-prev"
        }
      });
      swiperImage.controller.control = swiperContact;
      swiperContact.controller.control = swiperImage;
    }
  }, {
    key: "getDataId",
    value: function getDataId() {
      this.getSwiperJS();
      this.dataId = jQuery("#dataId").val();
      var img = '';
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedings/v1/data/?term=' + this.dataId, function (data) {
        if (data.length == 0) {
          jQuery('.proceedings-contact').css("display", "none");
          jQuery('.no-data').html('<h1>Kein Standort ausgewählt</h1>');
          jQuery('.proceedings-contact').removeClass('toc');
          jQuery('.call-to-action').css("display", "none");
          jQuery('.proceedings-contact').removeAttr('data-toctitle');
        } else {
          //Array true
          jQuery('.no-data').css("display", "none");
          jQuery.each(data, function (key, val) {
            jQuery("#wrapper-contact-js").after("\n                        <div class=\"swiper-slide\">\n                            <div class=\"wrapper-contact\">\n                                <div class=\"header-contact\">\n                                    <div class=\"code\">\n                                    <span>\n                                       ".concat(val.country_code, "\n                                    </span>   \n                                    </div>\n                                    <div class=\"country\">\n                                        ").concat(val.name, "\n                                    </div>\n                                </div>\n                                <div class=\"body-contact\">\n                                    <div class=\"address\">\n                                        <ul>\n                                            <li>").concat(val.street_number, "</li>\n                                            <li>").concat(val.postcode, "</li>\n                                            <li>").concat(val.country, "</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"contact\">\n                                        <ul>\n                                            <li class=\"email\"><a href=\"\">").concat(val.email, "</a></li>\n                                            <li class=\"phone\"><a href=\"\">").concat(val.phone, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"contact-cta\">\n                                        <span class=\"btn-decor-left\"></span>\n                                        <a href=\"").concat(val.permalink, "\">Zum Standort</a>\n                                        <span class=\"btn-decor-right\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    "));
          });
          jQuery.each(data, function (key, val) {
            // console.log(val.slider_image);
            // console.log(val.thumbnail);

            if (val.slider_image !== false) {
              img += "<img src=\"".concat(val.slider_image, "\" alt=\"").concat(val.name, "\" height=\"").concat(val.slider_image_size.proceeding_header.width, "\" width=\"").concat(val.slider_image_size.proceeding_header.height, "\">");
            }

            //console.log(val.slider_image_size.proceeding_header);
            // }else if(val.thumbnail !== false){
            //     img += `<img src="${val.thumbnail}" alt="${val.name}">`;
            // }else{
            //     img += `<img src="https://dummyimage.com/640x360/fff/aaa" alt="">`;
            // }

            jQuery("#wrapper-image-js").after("\n                    <div class=\"swiper-slide\">\n                        <div class=\"main-image\">\n                        ".concat(img, "\n                        </div>\n                    </div>\n                    "));
          });
        }
      });
    }
  }]);
  return contactData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactData);

/***/ }),

/***/ "./assets/scripts/modules/Contact.js":
/*!*******************************************!*\
  !*** ./assets/scripts/modules/Contact.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var contactPerson = /*#__PURE__*/function () {
  function contactPerson() {
    _classCallCheck(this, contactPerson);
    //function
    this.getData();
  }
  _createClass(contactPerson, [{
    key: "getData",
    value: function getData() {
      this.dataId = jQuery("#dataIdContact").val();
      //console.log(this.dataId)
      // jQuery.getJSON( '' + this.dataId, function($data){
      //     console.log(this.dataId)
      // })
    }
  }]);
  return contactPerson;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPerson);

/***/ }),

/***/ "./assets/scripts/modules/Location.js":
/*!********************************************!*\
  !*** ./assets/scripts/modules/Location.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var locationData = /*#__PURE__*/function () {
  function locationData() {
    _classCallCheck(this, locationData);
    this.getLoacationData();
  }
  _createClass(locationData, [{
    key: "getLoacationData",
    value: function getLoacationData() {
      //console.log('getLoacationData in location.js');
      this.dataId = jQuery("#dataIdLoacation").val();
      var catid = this.dataId ? this.dataId : '';
      var url = proceedingsData.root_url + '/wp-json/locationresult/v1/data/?term=' + catid;
      jQuery.getJSON(url, function (data) {
        //console.log('getLoacationData data:', data);
        var results = data.results;
        //grouping by category first

        var allCats = {};
        jQuery.each(results, function (i, item) {
          if (!item.cat) {
            return true;
          }
          if (!(item.cat in allCats)) {
            allCats[item.cat] = [];
          }
          allCats[item.cat].push(item.name);
          return true;
        });

        //console.log('getLoacationData allCats:', allCats);
        var locationHtml = "";
        jQuery.each(allCats, function (cat, locs) {
          //console.log(item.name);
          locationHtml += "<li>" + cat + '<ul>';
          jQuery.each(locs, function (j, loc) {
            locationHtml += "<li>" + loc + "</li>";
          });
          locationHtml += "</ul>";
        });
        var ul = jQuery('#wrapper-location>ul');
        // remove its children
        ul.children().remove();
        ul.append(locationHtml);
      });
    }
  }]);
  return locationData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationData);

/***/ }),

/***/ "./assets/scripts/modules/Overview-proceedings.js":
/*!********************************************************!*\
  !*** ./assets/scripts/modules/Overview-proceedings.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var proceedingData = /*#__PURE__*/function () {
  /*  */

  function proceedingData() {
    _classCallCheck(this, proceedingData);
    //Buttons
    this.useButton = jQuery("#use");
    this.useLocationButton = jQuery("#location");
    this.useSearchButton = jQuery("#serach");

    //Elemente
    this.wrapper = jQuery("#wrapper");
    this.bgDistance = jQuery("#bg-distance");
    this.wrapperSerachResults = jQuery("#wrapper-serach-results");
    this.wrapperLocationResults = jQuery("#wrapper-location-results");
    this.wrapperUseResults = jQuery("#wrapper-use-results");
    this.lottieview = jQuery("#lottieview");
    this.openCloseButton = jQuery("#open-close-button");
    this.useFilter = jQuery(".use-filter");
    this.locatFilter = jQuery(".location-filter");
    this.serachFilter = jQuery(".serach-filter");
    this.filterMain = jQuery(".filter-main");
    this.filterBody = jQuery(".filter-body");
    this.events();
    //this.lottie()
    this.getDataResults();
    this.getDataUse();
  }
  _createClass(proceedingData, [{
    key: "events",
    value: function events() {
      this.useSearchButton.on("click", this.activeSerachResults.bind(this));
      this.useLocationButton.on("click", this.activeLocationResults.bind(this));
      this.useButton.on("click", this.activeUseResults.bind(this));
      this.openCloseButton.on("click", this.close.bind(this));
    }
  }, {
    key: "typingLogic",
    value: function typingLogic() {}

    //Gib mir die freie Suche
  }, {
    key: "getDataSearch",
    value: function getDataSearch() {}

    //Gib mir alle Kategorien von Verfahren
  }, {
    key: "getDataUse",
    value: function getDataUse() {
      var that = this;
      jQuery.getJSON(proceedingsData.root_url + "/wp-json/proceedingsdatarestapi/v1/data/", function (data) {
        //console.log('got data in getDataUse:', data)
        var cat = data.categorie;
        var partyHTML = "";
        var valHTML = "";
        jQuery.each(cat, function (i, object) {
          if (object.name !== undefined) {
            var nam = i;
            if (valHTML !== "") {
              partyHTML += "<ul>" + valHTML + "</ul>" + "</li>";
              valHTML = "";
            }
            partyHTML += '<li class="item first-child">' + object.name;
          } else if (object.title !== undefined) {
            valHTML += "<li>" + object.title + "</li>";
          }
        });
        jQuery("#wrapper-ur").append(partyHTML);
      });
    }

    //Gib mir die Standorte nach Verfahren
  }, {
    key: "getDataLocations",
    value: function getDataLocations() {}

    //Zeig mir alle Ergebnisse an.
  }, {
    key: "getDataResults",
    value: function getDataResults() {
      jQuery.getJSON(proceedingsData.root_url + "/wp-json/proceedingsdata/v1/data/", function (data) {
        var proceedings = data.proceedingsresults;
        jQuery.each(proceedings, function (key, val) {
          jQuery("#wrapper-results").append("\n                    <div class=\"col-lg-6\">\n                        <div class=\"procedures_box\">\n                            <div class=\"procedures_box-top_bar\">\n                                <a href=\"".concat(val.permalink, "\" class=\"procedures_box-main-title\">").concat(val.title, "</a>\n                                <a href=\"").concat(val.permalink, "\" class=\"procedures_box-main-time\">").concat(val.date, "</a>\n                           </div>\n                            ").concat(val.thumbnail ? "<a class=\"procedures_box-img\" href=\"".concat(val.permalink, "\" title=\"").concat(val.title, "\" style=\"background-image: url('").concat(val.thumbnail, "')\"></a>") : "<a class=\"procedures_box-img\" href=\"".concat(val.permalink, "\" title=\"").concat(val.title, "\" style=\"background-image: url('https://via.placeholder.com/640x360')\"></a>"), "\n                            <div class=\"procedures_box-content\">\n                                <h5 class=\"procedures_box-sub_title\">Lorem, ipsum dolor.</h5>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum illum iusto porro consequatur eum, amet repellendus eligendi fugiat laborum, repudiandae illo quaerat perferendis. Provident enim debitis cupiditate odio suscipit!</p>\n                                <a href='").concat(val.permalink, "' class=\"procedures_box-read_more\" title=\"Read More\">\n                                    <span>Read More </span>\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" width=\"48\" height=\"48\" x=\"0\" y=\"0\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\"><g><path d=\"m51.93 33-50.93-.041a1 1 0 0 1 0-2l50.931.041a1 1 0 0 1 0 2z\" fill=\"#717170\" data-original=\"#717170\"></path><path d=\"m64 32.012c-5.681 2.1-12.731 5.692-17.1 9.5l3.446-9.512-3.433-9.513c4.365 3.813 11.409 7.413 17.087 9.525z\" fill=\"#717170\" data-original=\"#717170\"></path></g></svg>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                "));
        });
      });
    }

    //Activierung
  }, {
    key: "activeUseResults",
    value: function activeUseResults() {
      var _this = this;
      if (!this.wrapper.hasClass("active")) {
        //this.runLottie()
        setTimeout(function () {
          return _this.openUseOverlay();
        }, 100);
        this.wrapperActive();
      } else {
        //this.runLottie()
        this.wrapperActive();
        this.openUseOverlay();
      }
    }
  }, {
    key: "activeLocationResults",
    value: function activeLocationResults() {
      var _this2 = this;
      if (!this.wrapper.hasClass("active")) {
        //this.runLottie()
        setTimeout(function () {
          return _this2.openLocationOverlay();
        }, 100);
        this.wrapperActive();
      } else {
        //this.runLottie()
        this.wrapperActive();
        this.openLocationOverlay();
      }
    }
  }, {
    key: "activeSerachResults",
    value: function activeSerachResults() {
      var _this3 = this;
      if (!this.wrapper.hasClass("active")) {
        //this.runLottie()
        setTimeout(function () {
          return _this3.openSearchOverlay();
        }, 100);
        this.wrapperActive();
      } else {
        //this.runLottie()
        this.wrapperActive();
        this.openSearchOverlay();
      }
    }
  }, {
    key: "wrapperActive",
    value: function wrapperActive() {
      if (this.wrapper.hasClass("active")) {
        if (this.wrapperSerachResults.hasClass("results-display")) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
        if (this.wrapperLocationResults.hasClass("results-display")) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
        if (this.wrapperUseResults.hasClass("results-display")) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
      }
    }

    //Deaktivierung
  }, {
    key: "removeUseResults",
    value: function removeUseResults() {
      this.wrapperUseResults.addClass("results-none");
      this.wrapperUseResults.removeClass("results-display");
      this.locatFilter.removeClass("active");
      this.serachFilter.removeClass("active");
    }
  }, {
    key: "removeLocationResults",
    value: function removeLocationResults() {
      this.wrapperLocationResults.addClass("results-none");
      this.wrapperLocationResults.removeClass("results-display");
      this.useFilter.removeClass("active");
      this.serachFilter.removeClass("active");
    }
  }, {
    key: "removeSerachResults",
    value: function removeSerachResults() {
      this.wrapperSerachResults.addClass("results-none");
      this.wrapperSerachResults.removeClass("results-display");
      this.useFilter.removeClass("active");
      this.locatFilter.removeClass("active");
    }

    //Overlay Open Filter
  }, {
    key: "openSearchOverlay",
    value: function openSearchOverlay() {
      this.overlay();
      this.wrapperSerachResults.removeClass("results-none");
      this.wrapperSerachResults.addClass("results-display");
      this.serachFilter.addClass("active");
    }
  }, {
    key: "openLocationOverlay",
    value: function openLocationOverlay() {
      this.overlay();
      this.wrapperLocationResults.removeClass("results-none");
      this.wrapperLocationResults.addClass("results-display");
      this.locatFilter.addClass("active");
    }
  }, {
    key: "openUseOverlay",
    value: function openUseOverlay() {
      this.overlay();
      this.wrapperUseResults.removeClass("results-none");
      this.wrapperUseResults.addClass("results-display");
      this.useFilter.addClass("active");
    }

    //Basic
  }, {
    key: "overlay",
    value: function overlay() {
      this.wrapper.addClass("wrapper-filter-style");
      this.bgDistance.addClass("bg-distance");
      this.openCloseButton.addClass("close-button-display");
      this.wrapper.addClass("active");
      this.filterMain.addClass("active-main");
      this.filterBody.addClass("active-main");
    }

    // runLottie(){
    //     if (!this.wrapper.hasClass('active')){
    //         console.log('Lotti')
    //         this.lottieview.css('display', 'block')
    //         this.wrapper.css('display', 'none')
    //         setTimeout(() =>
    //             this.lottieview.css('display', 'none'),
    //         2500)
    //     }

    // }
  }, {
    key: "close",
    value: function close() {
      this.removeUseResults();
      this.removeLocationResults();
      this.removeSerachResults();
      this.wrapper.removeClass("wrapper-filter-style");
      this.bgDistance.removeClass("bg-distance");
      this.openCloseButton.removeClass("close-button-display");
      this.filterMain.removeClass("active-main");
      this.filterBody.removeClass("active-main");
    }

    // lottie(){
    //     let iconSkipForward = document.querySelector('.lottie');
    //     let animationSkipForward = bodymovin.loadAnimation({
    //             container: iconSkipForward,
    //             renderer: 'svg',
    //             loop: true,
    //             autoplay: true,
    //             path: "/wp-content/themes/haertha/images/HG_Logo_Animation_LA2.json"
    //     });
    //     animationSkipForward.playSegments([0,60], true);
    // }
  }]);
  return proceedingData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proceedingData);

// getDataUse(){
//     jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatarestapi/v1/data/', function(data){
//         //var cat = data.categorie;

//         // var catDate = {};
//         // jQuery.each(data, function() {
//         //     var r = catDate[this.results] = [];
//         //     r.push(this);
//         // });

//         //console.log(catDate)

//         var mandrill_events = data.categorie;

//         console.log(mandrill_events)

//         var result = mandrill_events[0];
//         var result = mandrill_events[4];
//         var result = mandrill_events[9];
//         var result = mandrill_events[13];
//         var result = mandrill_events[16];
//         var result = mandrill_events[21];

//         jQuery.each(result, function(i, object){
//             //console.log(i +'('+object.length+')')
//             //console.log(object);
//         //    console.log(object)
//            //console.log(object)
//             // jQuery.each(object, function (index, obj) {
//             //     //console.log(index)
//             //     //console.log(obj[index]);
//             //     //console.log(obj)
//             //     //console.log(obj[i])
//             //     // jQuery.each(obj, function (i, varr) {

//             //     //     // console.log(varr)
//             //     //     // console.log(varr.permalink)

//             //     //     // console.log(varr.title)

//             //     //     jQuery("#wrapper-use-results").append(`
//             //     //     <ul id="wrapper-ur">
//             //     //         <li> ${varr[0]} </li>
//             //     //         <li> ${varr.title} </li>

//             //     //     </ul>
//             //     //     `)

//             //     // });

//             //     //console.log(obj );
//             //     // console.log(obj[index]);
//             //     //console.log(obj.permalink);

//             // });
//         });

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {
//         //         console.log(arr)
//         //         // jQuery.each(arr, function(index, value){
//         //         //     //console.log(value)
//         //         // })
//         //     });
//         // })

//         // jQuery.each(cat, function(i, item) {

//         //     jQuery("#wrapper-use-results").append(`
//         //     <ul id="wrapper-ur">

//         //         ${ jQuery.each(item, function(key, arry){
//         //             `<li> ${arry.permalink}  ${arry.title}</li>`
//         //         }) }

//         //     </ul>
//         //     `)

//         // });

//     //     data.categorie.map( item => console.log(item))
//     //    //data.categorie.map( item => console.log(item + item.permalink + item.titel))

//     //     jQuery("#wrapper-use-results").append(`
//     //     <ul id="wrapper-ur">
//     //     ${data.categorie.map( item => item ) }
//     //     </ul>
//     //     `)

//         // var results = data.results;
//         // console.log(data);

//         // var catResults = data.categorie;

//         // jQuery.each(catResults, function(i, item) {
//         //     //console.log(item);
//         //     console.log(i);
//         //     console.log(item.title);
//         //     console.log(item.permalink);
//         //     item.results.map( item => item.permalink)

//         // });

//         //let catResults = numberArray.map((num) => num.title)

//         // jQuery.each(data,function(){

//         //     console.log( this.title ,this.permalink);

//         //     })

//         ///df.categorieresults.map(item_ => console.log(item_.id))

//         // jQuery.each(catResults.concat(results), function(i, item) {
//         //     //console.log(item.cat);

//         // });

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {

//         //         console.log(arr.categorie);
//         //     console.log("...",arr.categorie, arr.name);

//         //     });
//         // })

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {
//         //         jQuery.each(arr, function(index, obj) {
//         //             console.log("...", index, obj.value);
//         //         });
//         //     });
//         // })

//         //var cat = data;
//         // jQuery.each(data, function(kay, val){

//         //     // console.log(data.results.permalink)
//         //     //val.map(item => `<li><a href="${item}">${item.title}</a></li>`).join("")
//         //     //val.categorie.map( item => console.log(item))

//         //     //console.log(val.id)
//         //     //console.log(val)

//         //     // console.log(keys);
//         //     // if(rusalts.id == cat.id){
//         //     //     //console.log(rusalts.title)
//         //     // }
//         // })
//     })
// }

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin.scss":
/*!**********************************!*\
  !*** ./assets/styles/admin.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/magnific-popup.scss":
/*!*******************************************!*\
  !*** ./assets/styles/magnific-popup.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/scripts/main": 0,
/******/ 			"dist/styles/magnific-popup": 0,
/******/ 			"dist/styles/admin": 0,
/******/ 			"dist/styles/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhaertha"] = self["webpackChunkhaertha"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/scripts/main.js")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/styles/main.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/styles/admin.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/styles/magnific-popup.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9Db250YWN0LWRhdGEuanMiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9PdmVydmlldy1wcm9jZWVkaW5ncy5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2NzcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3N0eWxlcy9tYWduaWZpYy1wb3B1cC5zY3NzIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhY3REYXRhIGZyb20gXCIuL21vZHVsZXMvQ29udGFjdC1kYXRhXCI7XG5pbXBvcnQgUHJvY2VlZGluZ0RhdGEgZnJvbSBcIi4vbW9kdWxlcy9PdmVydmlldy1wcm9jZWVkaW5nc1wiO1xuaW1wb3J0IExvY2F0aW9uRGF0YSBmcm9tIFwiLi9tb2R1bGVzL0xvY2F0aW9uXCI7XG5pbXBvcnQgQ29udGFjdFBlcnNvbiBmcm9tIFwiLi9tb2R1bGVzL0NvbnRhY3RcIjtcblxuY29uc3QgY29udGFjdGRhdGEgPSBuZXcgQ29udGFjdERhdGEoKTtcbmNvbnN0IHByb2NlZWRpbmdkYXRhID0gbmV3IFByb2NlZWRpbmdEYXRhKCk7XG5jb25zdCBsb2NhdGlvbmRhdGEgPSBuZXcgTG9jYXRpb25EYXRhKCk7XG5jb25zdCBjb250YWN0cGVyc29uID0gbmV3IENvbnRhY3RQZXJzb24oKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgIC8vcG9wdXAgaW1hZ2VcbiAgICAkKFwiLmltYWdlLXBvcHVwLXZlcnRpY2FsLWZpdFwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICBtYWluQ2xhc3M6IFwibWZwLXdpdGgtem9vbVwiLFxuICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsIC8vIGR1cmF0aW9uIG9mIHRoZSBlZmZlY3QsIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsIC8vIENTUyB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvblxuXG4gICAgICAgICAgICBvcGVuZXI6IGZ1bmN0aW9uIChvcGVuZXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoXCJpbWdcIikgPyBvcGVuZXJFbGVtZW50IDogb3BlbmVyRWxlbWVudC5maW5kKFwiaW1nXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vcG9wdXAgdmlkZW9cbiAgICAkKFwiLnBvcHVwLXlvdXR1YmVcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6IFwiaWZyYW1lXCIsXG4gICAgfSk7XG5cbiAgICBqUXVlcnkoXCIudmlkZW8tYnV0dG9uLXJ1blwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogXCJpZnJhbWVcIixcbiAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgICBwYXR0ZXJuczoge1xuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IFwieW91dHViZS5jb20vXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHVybC5tYXRjaCgvW1xcXFw/XFxcXCZddj0oW15cXFxcP1xcXFwmXSspLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW0gfHwgIW1bMV0pIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1bMV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEmbXV0ZWQ9MVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmltZW86IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IFwidmltZW8uY29tL1wiLFxuICAgICAgICAgICAgICAgICAgICBpZDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSB1cmwubWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyhodHRwcz86XFwvXFwvKT8od3d3Lik/KHBsYXllci4pP3ZpbWVvLmNvbVxcLyhbYS16XSpcXC8pKihbMC05XXs2LDExfSlbP10/LiovXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtIHx8ICFtWzVdKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtWzVdO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xJm11dGVkPTFcIicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgLy9wb3B1cCBpbWFnZVxuXG4gICAgJChcIi5pbWFnZS1wb3B1cC12ZXJ0aWNhbC1maXRcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgbWFpbkNsYXNzOiBcIm1mcC13aXRoLXpvb21cIixcbiAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLCAvLyBkdXJhdGlvbiBvZiB0aGUgZWZmZWN0LCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLCAvLyBDU1MgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cblxuICAgICAgICAgICAgb3BlbmVyOiBmdW5jdGlvbiAob3BlbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuZXJFbGVtZW50LmlzKFwiaW1nXCIpID8gb3BlbmVyRWxlbWVudCA6IG9wZW5lckVsZW1lbnQuZmluZChcImltZ1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvL3BvcHVwIHZpZGVvXG4gICAgJChcIi5wb3B1cC15b3V0dWJlXCIpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICB0eXBlOiBcImlmcmFtZVwiLFxuICAgIH0pO1xuXG4gICAgLy9IZWFkZXIgbWVuw7xcbiAgICBsZXQgbWFpbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1oZWFkZXItbWVudVwiKTtcbiAgICBsZXQgbmF2QmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1uYXZiYXItdG9nZ2xlXCIpO1xuXG4gICAgbmF2QmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vU3dpcGVyIFZlcmZhaHJlbiBWaWRlb1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyMlwiLCB7XG4gICAgICAgIGVmZmVjdDogXCJmYWRlXCIsXG4gICAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgICAgIGNyb3NzRmFkZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgICBsYXp5OiB0cnVlLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvL1N3aXBlciBuZXdzIHNsaWRlclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm5ld3Mtc2xpZGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICAgICAgbGF6eTogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG5cblxuLy9teVN3aXBlckltYWdlR2FsbGVyeSAxOC4wMlxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJJbWFnZUdhbGxlcnlcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIud3JhcHBlci12aWRlby1wYWdpbmF0aW9uID4gLnN3aXBlci1wYWdpbmF0aW9uLXZpZGVvLW5ld1wiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIud3JhcHBlci12aWRlby1wYWdpbmF0aW9uID4gLnN3aXBlci1idXR0b24tdmlkZW8tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLndyYXBwZXItdmlkZW8tcGFnaW5hdGlvbiA+IC5zd2lwZXItYnV0dG9uLXZpZGVvLXByZXZcIixcbiAgICB9LFxufSk7XG5cbi8vVmVyZmFocmVuIEhlYWRlciBJbWFnZSBHYWxsZXJ5XG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlclByb2NlZWRpbmdzSGVhZGVyXCIsIHtcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG4vL0xvY2F0aW9uIEhlYWRlciBJbWFnZSBHYWxsZXJ5XG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlcmxvY2F0aW9uSGVhZGVyXCIsIHtcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5pZiAoalF1ZXJ5KFwiLnNpZGViYXJtZW51XCIpWzBdKSB7XG4gICAgbGV0IGlzX3RvYyA9IGZhbHNlO1xuICAgIGxldCBjc3NfY2xhc3MgPSBcIlwiO1xuICAgIGpRdWVyeShcIi50b2NcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzX3RvYyA9IHRydWU7XG4gICAgICAgIGpRdWVyeShcIi5zaWRlYmFybWVudSBvbFwiKS5hcHBlbmQoXG4gICAgICAgICAgICBcIjxsaT48YSBocmVmPScjXCIgK1xuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hdHRyKFwiaWRcIikgK1xuICAgICAgICAgICAgICAgIFwiJz5cIiArXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmF0dHIoXCJkYXRhLXRvY3RpdGxlXCIpICtcbiAgICAgICAgICAgICAgICBcIjwvYT48L2xpPlwiXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgaWYgKCFpc190b2MpIHtcbiAgICAgICAgalF1ZXJ5KFwiLnN1Ym5hdiAubmF2cG9pbnRzXCIpLmhpZGUoKTtcbiAgICB9XG59XG5cbi8vTGlzdCBudW1iZXJpbmdcbmpRdWVyeShcIi5udW1tYmVyXCIpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICBqUXVlcnkodGhpcylcbiAgICAgICAgLmZpbmQoXCJudW1iZXJcIilcbiAgICAgICAgLnJlbW92ZSgpXG4gICAgICAgIC5lbmQoKVxuICAgICAgICAucHJlcGVuZChcIjxzcGFuIGNsYXNzPSdudW1iZXInPlwiICsgKGkgKyAxKSArIFwiLiA8L3NwYW4+XCIpO1xufSk7XG5cbi8vU21vb3Roc2Nyb2xsIFZlcmZhaHJlblxualF1ZXJ5KGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG5cbi8vc21vb3Roc2Nyb2xsXG5qUXVlcnkoJyNuYXYtaWQgb2wgbGkgYVtocmVmXj1cIiNcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGpRdWVyeShkb2N1bWVudCkub2ZmKFwic2Nyb2xsXCIpO1xuXG4gICAgalF1ZXJ5KFwiYVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmhhc2gsXG4gICAgICAgIG1lbnUgPSB0YXJnZXQ7XG4gICAgdGFyZ2V0ID0galF1ZXJ5KHRhcmdldCk7XG4gICAgalF1ZXJ5KFwiaHRtbCwgYm9keVwiKVxuICAgICAgICAuc3RvcCgpXG4gICAgICAgIC5hbmltYXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCArIDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgXCJzd2luZ1wiLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbFBvcyA9IGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgalF1ZXJ5KFwiI25hdi1pZCBhXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VyckxpbmsgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgIHZhciByZWZFbGVtZW50ID0galF1ZXJ5KGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgdmFyIHJlZkVsZW1lbnRfcG9zID0gcmVmRWxlbWVudC5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBoZWFkZXJfaGVpZ2h0ID0galF1ZXJ5KFwiLm5hdmJhciBcIikuaGVpZ2h0KCk7XG4gICAgICAgIHZhciByZWZFbGVtZW50X3Bvc190b3RhbCA9IHJlZkVsZW1lbnRfcG9zO1xuICAgICAgICB2YXIgc2Nyb2xsUG9zX3RvdGFsID0gc2Nyb2xsUG9zICsgaGVhZGVyX2hlaWdodDtcblxuICAgICAgICBpZiAocmVmRWxlbWVudF9wb3MgPCBzY3JvbGxQb3NfdG90YWwgJiYgcmVmRWxlbWVudF9wb3MgKyByZWZFbGVtZW50LmhlaWdodCgpID4gc2Nyb2xsUG9zX3RvdGFsKSB7XG4gICAgICAgICAgICBqUXVlcnkoXCIjbmF2LWlkIG9sIGxpIGFcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyTGluay5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJMaW5rLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vVmVyZmFocmVuIFBhZ2UgbWVudVxualF1ZXJ5KFwiLmRvd25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGpRdWVyeShcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBqUXVlcnkoXCIudXBcIikub2Zmc2V0KCkudG9wLFxuICAgICAgICB9LFxuICAgICAgICAxNTAwXG4gICAgKTtcbn0pO1xuXG52YXIgYnRuID0galF1ZXJ5KFwiI2J1dHRvblwiKTtcblxuYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgalF1ZXJ5KFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiMzAwXCIpO1xufSk7XG5cbmpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgYnRuLmFkZENsYXNzKCdzaG93Jyk7XG4gIH0gZWxzZSB7XG4gICAgYnRuLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH1cbn0pO1xuXG4vL1BvcFVwIGh0dHBzOi8vY29kZXBlbi5pby9rYWlhay9wZW4veUx5cXhPWVxuLy8galF1ZXJ5KFwiI3BvcHVwSWRWaWRlb1wiKS5jbGljayhmdW5jdGlvbigpIHtcbi8vICAgalF1ZXJ5KFwiLnBvcHVwXCIpLmZhZGVJbig1MDApO1xuLy8gfSk7XG5qUXVlcnkoXCIuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICBqUXVlcnkoXCIucG9wdXBcIikuZmFkZU91dCg1MDApO1xufSk7XG5cblxuLy9vcGVuIHBvcHVwXG5qUXVlcnkoJy5wb3B1cC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIG51bWJlciA9IGpRdWVyeSh0aGlzKS5kYXRhKFwibnVtYmVyXCIpO1xuICBqUXVlcnkoJy5wb3B1cC0nICsgbnVtYmVyKS5mYWRlSW4oNTAwKTtcbiAgalF1ZXJ5KCcucG9wdXAtJyArIG51bWJlcikuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbn0pO1xuXG4vL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU3Mzc1NDI3L211bHRpcGxlLXBvcHVwLWluLXNhbWUtcGFnZVxuLy8gLy9jbG9zZSBwb3B1cFxuLy8gJCgnLnBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuLy8gICBpZiggJChldmVudC50YXJnZXQpLmlzKCcucG9wdXAtY2xvc2UnKSB8fCAkKGV2ZW50LnRhcmdldCkuaXMoJy5wb3B1cCcpICkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gLy9jbG9zZSBwb3B1cCB3aGVuIGNsaWNraW5nIHRoZSBlc2Mga2V5Ym9hcmQgYnV0dG9uXG4vLyAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihldmVudCl7XG4vLyAgICAgaWYoZXZlbnQud2hpY2g9PScyNycpe1xuLy8gICAgICAgJCgnLnBvcHVwJykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyBOZXdzIHBhZ2VcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgalF1ZXJ5KCcubmV3cy1pbnB1dC1zZWFyY2gnKS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGVudGVyIHByZXNzXG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcbiAgICAgIGFqYXhOZXdzKGUuY3VycmVudFRhcmdldClcbiAgICB9XG4gIH0pLm9uKCdmb2N1cycsIGUgPT4gY2xvc2V0TmV3c01vZGFsQ2F0ZWdvcnkoZS50YXJnZXQpKVxuICAgICAgLm9uKCdjbGljaycsIGUgPT4gY2xvc2V0TmV3c01vZGFsQ2F0ZWdvcnkoZS50YXJnZXQpKVxuXG4gICAgLy8gY2xvc2V0IE1vZGFsIENhdGVnb3J5XG4gICAgZnVuY3Rpb24gY2xvc2V0TmV3c01vZGFsQ2F0ZWdvcnkoZSkge1xuICAgICAgICBqUXVlcnkoZSkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLmZpbmQoJy53cmFwcGVyLWZpbHRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICBqUXVlcnkoZSkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLmZpbmQoJy5uZXdzLWZpbHRlci1jb2wuY2F0ZWdvcnktdG9nZ2xlLC5uZXdzLWZpbHRlci1jb2wuZGF0ZS10b2dnbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgalF1ZXJ5KGUpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcuZmlsdGVyLW1vZGFsIC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICAvLyBzZWFyY2ggYnV0dG9uXG4gICAgalF1ZXJ5KCcuc2VhcmNoLWZpbHRlcicpLm9uKCdjbGljaycsIGUgPT4gYWpheE5ld3MoZS50YXJnZXQpKVxuXG4gICAgLy8gdHJpZ2dlciBjYXRlZ29yeSBhbmQgZGF0ZSBtb2RhbFxuICAgIGpRdWVyeSgnLmRhdGUtdG9nZ2xlLC5jYXRlZ29yeS10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgY29uc3QgcGFyZW50ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gJChlLnRhcmdldCkuZGF0YSgnY2xhc3MnKSA/ICQoZS50YXJnZXQpIDogJChlLnRhcmdldCkuY2xvc2VzdCgnLm5ld3MtZmlsdGVyLWNvbCcpXG5cblxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXG4gICAgICAgIC8vIGNoZWNrIGlmIGNsb3NlIHNlY3Rpb24gY2F0ZWdvcnlcbiAgICAgICAgaWYgKHBhcmVudC5maW5kKCcuJyArIHRhcmdldC5kYXRhKCdjbGFzcycpKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcud3JhcHBlci1maWx0ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCcubmV3cy1maWx0ZXItY29sLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5maWx0ZXItbW9kYWwgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5uZXdzLWZpbHRlci1jb2wuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLmZpbHRlci1tb2RhbCAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLndyYXBwZXItZmlsdGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnLicgKyB0YXJnZXQuZGF0YSgnY2xhc3MnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbi8vIENsaWNrIE90aGVyIHNlY3Rpb24gIGhpZGUgY2F0ZWdvcnkgYW5kIHJlbW92ZSBiYWNrZ3JvdW5kXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCEkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi53cmFwcGVyLWZpbHRlclwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5jYXRlZ29yeS1saXN0LC5kYXRlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICQoJy5uZXdzLWZpbHRlci1jb2wuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAkKCcud3JhcHBlci1maWx0ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgalF1ZXJ5KCcuZGF0ZS1zZWxlY3QnKVxuICAgICAgICAub24oJ2NoYW5nZScsIGUgPT4gYWpheE5ld3MoZS50YXJnZXQpKVxuICAgICAgICAub24oJ2ZvY3VzJywgZSA9PiBjbG9zZXROZXdzTW9kYWxDYXRlZ29yeShlLnRhcmdldCkpXG4gICAgICAgIC5vbignY2xpY2snLCBlID0+IGNsb3NldE5ld3NNb2RhbENhdGVnb3J5KGUudGFyZ2V0KSlcbiAgICAgICAgLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnLndyYXBwZXItZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIH0pXG5cblxuICAgIGpRdWVyeSgnLmZpbHRlci1tb2RhbCAuY2xvc2UtYnV0dG9uLW5vbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFqYXhOZXdzKGUudGFyZ2V0KVxuICAgIH0pXG5cbi8vIGFqYXhcbiAgICBmdW5jdGlvbiBhamF4TmV3cyhlbGVtZW50KSB7XG4gICAgICAgIGxldCB0ZXJtID0gW11cbiAgICAgICAgJChlbGVtZW50KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnLm5ld3MtY2F0ZWdvcnlfX2lucHV0OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRlcm0ucHVzaChqUXVlcnkodGhpcykudmFsKCkpO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgZGF0ZSA9IFtdXG4gICAgICAgICQoZWxlbWVudCkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLmZpbmQoJy5uZXdzLWRhdGVfX2lucHV0OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRhdGUucHVzaChqUXVlcnkodGhpcykudmFsKCkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzID0gJChlbGVtZW50KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnLm5ld3MtaW5wdXQtc2VhcmNoJykudmFsKClcbiAgICAgICAgbGV0IG5vbmNlID0gJChlbGVtZW50KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnW25hbWU9bmV3c19wb3N0X2FqYXhfb2Zfbm9uY2VfZmllbGRdJykudmFsKClcbiAgICAgICAgbGV0IG9iamVjdFBvc3QgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwibmV3c19wb3N0X2FqYXhcIixcbiAgICAgICAgICAgIHRlcm0sIHMsXG4gICAgICAgICAgICBub25jZSwgZGF0ZSxcblxuICAgICAgICB9XG4gICAgICAgIGlmIChub25jZSkge1xuXG4gICAgICAgICAgICAkLnBvc3QocHJvY2VlZGluZ3NEYXRhLmFqYXgsIG9iamVjdFBvc3QpXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xvc2V0TmV3c01vZGFsQ2F0ZWdvcnkoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnLmFqYXgtbmV3cy1yb3cnKS5odG1sKHBvc3RzKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59KVxuXG4vLyAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4vLyAgICAgICAgIGJ0bi5hZGRDbGFzcyhcInNob3dcIik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgYnRuLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbi8vICAgICB9XG4vLyB9KTtcblxuLy9Qb3BVcCBodHRwczovL2NvZGVwZW4uaW8va2FpYWsvcGVuL3lMeXF4T1lcbi8vIGpRdWVyeShcIiNwb3B1cElkVmlkZW9cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgIGpRdWVyeShcIi5wb3B1cFwiKS5mYWRlSW4oNTAwKTtcbi8vIH0pO1xualF1ZXJ5KFwiLmNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBqUXVlcnkoXCIucG9wdXBcIikuZmFkZU91dCg1MDApO1xufSk7XG5cbi8vb3BlbiBwb3B1cFxualF1ZXJ5KFwiLnBvcHVwLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG51bWJlciA9IGpRdWVyeSh0aGlzKS5kYXRhKFwibnVtYmVyXCIpO1xuXG4gICAgalF1ZXJ5KFwiLnBvcHVwLVwiICsgbnVtYmVyKS5mYWRlSW4oNTAwKTtcbiAgICBqUXVlcnkoXCIucG9wdXAtXCIgKyBudW1iZXIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xufSk7XG5cbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTczNzU0MjcvbXVsdGlwbGUtcG9wdXAtaW4tc2FtZS1wYWdlXG4vLyAvL2Nsb3NlIHBvcHVwXG4vLyAkKCcucG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4vLyAgIGlmKCAkKGV2ZW50LnRhcmdldCkuaXMoJy5wb3B1cC1jbG9zZScpIHx8ICQoZXZlbnQudGFyZ2V0KS5pcygnLnBvcHVwJykgKSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyAvL2Nsb3NlIHBvcHVwIHdoZW4gY2xpY2tpbmcgdGhlIGVzYyBrZXlib2FyZCBidXR0b25cbi8vICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGV2ZW50KXtcbi8vICAgICBpZihldmVudC53aGljaD09JzI3Jyl7XG4vLyAgICAgICAkKCcucG9wdXAnKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vICAgICBqUXVlcnkoJy5wb3B1cC0nK251bWJlcikuZmFkZUluKDUwMCk7XG4vLyAgICAgalF1ZXJ5KCcucG9wdXAtJytudW1iZXIpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4vLyAgIH0pO1xuICBcbiAgLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NzM3NTQyNy9tdWx0aXBsZS1wb3B1cC1pbi1zYW1lLXBhZ2VcbiAgLy8gLy9jbG9zZSBwb3B1cFxuICAvLyAkKCcucG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gIC8vICAgaWYoICQoZXZlbnQudGFyZ2V0KS5pcygnLnBvcHVwLWNsb3NlJykgfHwgJChldmVudC50YXJnZXQpLmlzKCcucG9wdXAnKSApIHtcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gIC8vICAgfVxuICAvLyB9KTtcbiAgXG4gIC8vIC8vY2xvc2UgcG9wdXAgd2hlbiBjbGlja2luZyB0aGUgZXNjIGtleWJvYXJkIGJ1dHRvblxuICAvLyAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihldmVudCl7XG4gIC8vICAgICBpZihldmVudC53aGljaD09JzI3Jyl7XG4gIC8vICAgICAgICQoJy5wb3B1cCcpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG5cblxuXG5cbiAgLy9TbGllZGVyIHBhZ2Utc2xpZGVyLWluZGl2aWR1ZWxsXG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15SW5kaXZpZHVhbGx5XCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAyLjUsXG4gICAgLy9zbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICBsb29wOiB0cnVlLFxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICB9LFxuICB9KTtcblxuXG5cblxuICAvL2NhY2hlIHJlc3VsdCBkaXN0YW5jZXMgZm9yIHRoaXMgbG9jYXRpb25cbiAgbGV0IGRpc3RhbnRfcmVzdWx0cyA9IHt9O1xuXG4gIGNvbnN0IGJ1aWxkX2NuX2Jsb2NrID0gZnVuY3Rpb24oY25fY29kZSwgbG9jcyl7XG4gICAgLy9zaG93IGRpc3RhbnQgcmVzdWx0IHdpdGggZGF0YVxuXG4gICAgLypcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRyeVwiPkRFPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5BTERFTkhPVkVOPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q0FET0xaQlVSRzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPklTRVJMT0hOPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJrbVwiPlxuICAgICAgICAgICAgICAgIDxsaT4yMDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjMwPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MTAwPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICovXG4gICAgIGxldCB0aXRsZXMgPSBbXTtcbiAgICAgbGV0IGttcyA9IFtdO1xuICAgICBqUXVlcnkuZWFjaChsb2NzLCBmdW5jdGlvbihpLCBsb2MpIHtcbiAgICAgICAgdGl0bGVzLnB1c2goJzxsaT4nICsgbG9jLnRpdGxlICsgJzwvbGk+Jyk7XG4gICAgICAgIGttcy5wdXNoKCc8bGk+JyArIGxvYy5kaXN0YW5jZSArICc8L2xpPicpO1xuICAgICB9KVxuICAgICBjb25zdCB0aXRsZV9zdHIgPSB0aXRsZXMuam9pbihcIlwiKTtcbiAgICAgY29uc3Qga21fc3RyID0ga21zLmpvaW4oXCJcIik7XG4gICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImxvY2F0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRyeVwiPiR7Y25fY29kZX08L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgJHt0aXRsZV9zdHJ9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwia21cIj5cbiAgICAgICAgICAgICAgICAke2ttX3N0cn1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmA7XG4gIH1cbiAgY29uc3Qgc2hvd19kaXN0YW50X3Jlc3VsdCA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpXG4gICAgbGV0IGJsb2NrcyA9IFtdXG4gICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oY25fY29kZSwgbG9jcykge1xuICAgICAgICBibG9ja3MucHVzaChidWlsZF9jbl9ibG9jayhjbl9jb2RlLCBsb2NzKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbG9jX3N0ciA9IGJsb2Nrcy5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGVsZSA9IGpRdWVyeShcIi5ib2R5LWxvY2F0aW9uLWxpc3RcIik7XG4gICAgZWxlLmZpbmQoJy5sb2NhdGlvbi1saXN0JykucmVtb3ZlKCkuZW5kKCk7XG4gICAgZWxlLmFwcGVuZChsb2Nfc3RyKTtcbiAgICBjb25zb2xlLmxvZygnbG9jX3N0cjonLCBsb2Nfc3RyKVxuICB9XG5cbiAgalF1ZXJ5KCcubG9jYXRpb24taW5wdXQgaW5wdXQnKS5vbignYmx1cicsIGZ1bmN0aW9uKGUpe1xuICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIGlucHV0IHZhbHVlOicsIHRoaXMudmFsdWUpO1xuICAgICAgY29uc3QgbG9jID0gdGhpcy52YWx1ZTtcbiAgICAgIGlmIChsb2MgaW4gZGlzdGFudF9yZXN1bHRzKXtcbiAgICAgICAgcmV0dXJuIHNob3dfZGlzdGFudF9yZXN1bHQoZGlzdGFudF9yZXN1bHRzW2xvY10pO1xuICAgICAgfVxuICAgICAgY29uc3QgdXJsID0gJy93cC1qc29uL2xvY2F0aW9uZGlzdGFuY2UvdjEvZGF0YS8/bG9jPScgKyBsb2M7XG4gICAgICBqUXVlcnkuZ2V0KHVybCkuZG9uZShmdW5jdGlvbihyZXMpe1xuICAgICAgICBpZihyZXMpe1xuICAgICAgICAgICAgZGlzdGFudF9yZXN1bHRzW2xvY10gPSByZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hvd19kaXN0YW50X3Jlc3VsdChyZXMpO1xuICAgICAgfSlcbiAgfSlcblxuXG4iLCJcbmNsYXNzIGNvbnRhY3REYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdldERhdGFJZCgpXG4gICAgICAgIHRoaXMuZ2V0UHJvY2VkdXJlTG9jYXRpb24oKVxuXG4gICAgfVxuXG5cbiAgICBcblxuICAgIGdldFByb2NlZHVyZUxvY2F0aW9uKCl7XG4gICAgICAgIHRoaXMuZGF0YUlkID0galF1ZXJ5KFwiI2RhdGFJZFwiKS52YWwoKVxuICAgICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VkdXJlbG9jYXRpb24vdjEvZGF0YS8/dGVybT0nICsgdGhpcy5kYXRhSWQsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uSHRtbCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5X2RhdGEgPSBbXTtcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIWNvdW50cnlfZGF0YS5pbmNsdWRlcyhpdGVtLmNvdW50cnlfY29kZSkpe1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY291bnRyeV9jb2RlID09IGl0ZW0uY291bnRyeV9jb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25IdG1sICs9IFwiPGxpPlwiICsgIGl0ZW0uY291bnRyeV9jb2RlICsgXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5X2RhdGEucHVzaChpdGVtLmNvdW50cnlfY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB1bCA9IGpRdWVyeSgnI3Byb2NlZHVyZWxvY2F0aW9uJylcbiAgICAgICAgICAgIHVsLmFwcGVuZChsb2NhdGlvbkh0bWwpO1xuICAgICAgICB9KSAgXG4gICAgfVxuXG5cblxuXG5cbiAgICBnZXRTd2lwZXJKUygpe1xuICAgICAgICAvL0NvbnRhY3QgUHJvY2VlZGluZ3NcbiAgICAgICAgdmFyIHN3aXBlckltYWdlID0gbmV3IFN3aXBlcihcIi5teVN3aXBlckltZ2VcIiwge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdmFyIHN3aXBlckNvbnRhY3QgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyQ29udGFrdFwiLCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgZWw6ICcud3JhcHBlci1wYWdpbmF0aW9uID4gLnN3aXBlci1wYWdpbmF0aW9uLW5ldycsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj48L3NwYW4+Jzs7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLndyYXBwZXItcGFnaW5hdGlvbiA+IC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLndyYXBwZXItcGFnaW5hdGlvbiA+IC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXBlckltYWdlLmNvbnRyb2xsZXIuY29udHJvbCA9IHN3aXBlckNvbnRhY3Q7XG4gICAgICAgIHN3aXBlckNvbnRhY3QuY29udHJvbGxlci5jb250cm9sID0gc3dpcGVySW1hZ2U7XG4gICAgfVxuXG5cbiAgICBnZXREYXRhSWQoKXtcbiAgICAgICAgdGhpcy5nZXRTd2lwZXJKUygpXG4gICAgICAgIHRoaXMuZGF0YUlkID0galF1ZXJ5KFwiI2RhdGFJZFwiKS52YWwoKVxuICAgICAgICB2YXIgaW1nID0gJyc7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWVkaW5ncy92MS9kYXRhLz90ZXJtPScgKyB0aGlzLmRhdGFJZCwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wcm9jZWVkaW5ncy1jb250YWN0JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5uby1kYXRhJykuaHRtbCgnPGgxPktlaW4gU3RhbmRvcnQgYXVzZ2V3w6RobHQ8L2gxPicpXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucHJvY2VlZGluZ3MtY29udGFjdCcpLnJlbW92ZUNsYXNzKCd0b2MnKVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmNhbGwtdG8tYWN0aW9uJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcblxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnByb2NlZWRpbmdzLWNvbnRhY3QnKS5yZW1vdmVBdHRyKCdkYXRhLXRvY3RpdGxlJylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vQXJyYXkgdHJ1ZVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm5vLWRhdGEnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLWNvbnRhY3QtanNcIikuYWZ0ZXIoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3ZhbC5jb3VudHJ5X2NvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt2YWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke3ZhbC5zdHJlZXRfbnVtYmVyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke3ZhbC5wb3N0Y29kZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHt2YWwuY291bnRyeX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJlbWFpbFwiPjxhIGhyZWY9XCJcIj4ke3ZhbC5lbWFpbH08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGhvbmVcIj48YSBocmVmPVwiXCI+JHt2YWwucGhvbmV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY3RhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tZGVjb3ItbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt2YWwucGVybWFsaW5rfVwiPlp1bSBTdGFuZG9ydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1kZWNvci1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwuc2xpZGVyX2ltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsLnRodW1ibmFpbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbC5zbGlkZXJfaW1hZ2UgIT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyArPSBgPGltZyBzcmM9XCIke3ZhbC5zbGlkZXJfaW1hZ2V9XCIgYWx0PVwiJHt2YWwubmFtZX1cIiBoZWlnaHQ9XCIke3ZhbC5zbGlkZXJfaW1hZ2Vfc2l6ZS5wcm9jZWVkaW5nX2hlYWRlci53aWR0aH1cIiB3aWR0aD1cIiR7dmFsLnNsaWRlcl9pbWFnZV9zaXplLnByb2NlZWRpbmdfaGVhZGVyLmhlaWdodH1cIj5gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsLnNsaWRlcl9pbWFnZV9zaXplLnByb2NlZWRpbmdfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2UgaWYodmFsLnRodW1ibmFpbCAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1nICs9IGA8aW1nIHNyYz1cIiR7dmFsLnRodW1ibmFpbH1cIiBhbHQ9XCIke3ZhbC5uYW1lfVwiPmA7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1nICs9IGA8aW1nIHNyYz1cImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vNjQweDM2MC9mZmYvYWFhXCIgYWx0PVwiXCI+YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1pbWFnZS1qc1wiKS5hZnRlcihgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3REYXRhXG4iLCJjbGFzcyBjb250YWN0UGVyc29ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vZnVuY3Rpb25cbiAgICAgICAgdGhpcy5nZXREYXRhKCkgICAgICAgIFxuICAgIH1cblxuICAgIGdldERhdGEoKXtcbiAgICAgICAgdGhpcy5kYXRhSWQgPSBqUXVlcnkoXCIjZGF0YUlkQ29udGFjdFwiKS52YWwoKVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YUlkKVxuICAgICAgICAvLyBqUXVlcnkuZ2V0SlNPTiggJycgKyB0aGlzLmRhdGFJZCwgZnVuY3Rpb24oJGRhdGEpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5kYXRhSWQpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQZXJzb24iLCJjbGFzcyBsb2NhdGlvbkRhdGF7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5nZXRMb2FjYXRpb25EYXRhKClcbiAgICB9XG5cbiAgICBnZXRMb2FjYXRpb25EYXRhKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldExvYWNhdGlvbkRhdGEgaW4gbG9jYXRpb24uanMnKTtcbiAgICAgICAgdGhpcy5kYXRhSWQgPSBqUXVlcnkoXCIjZGF0YUlkTG9hY2F0aW9uXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBjYXRpZCA9IHRoaXMuZGF0YUlkP3RoaXMuZGF0YUlkOicnO1xuICAgICAgICBjb25zdCB1cmwgPSBwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vbG9jYXRpb25yZXN1bHQvdjEvZGF0YS8/dGVybT0nICsgY2F0aWQ7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHVybCwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRMb2FjYXRpb25EYXRhIGRhdGE6JywgZGF0YSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICAgIC8vZ3JvdXBpbmcgYnkgY2F0ZWdvcnkgZmlyc3RcblxuICAgICAgICAgICAgbGV0IGFsbENhdHMgPSB7fTtcblxuICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0cywgZnVuY3Rpb24oaSwgaXRlbSkge1xuXG4gICAgICAgICAgICAgICAgaWYoIWl0ZW0uY2F0KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKGl0ZW0uY2F0IGluIGFsbENhdHMpKXtcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2F0c1tpdGVtLmNhdF0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxsQ2F0c1tpdGVtLmNhdF0ucHVzaChpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TG9hY2F0aW9uRGF0YSBhbGxDYXRzOicsIGFsbENhdHMpO1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uSHRtbCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGFsbENhdHMsIGZ1bmN0aW9uKGNhdCwgbG9jcykge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5uYW1lKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkh0bWwgKz0gXCI8bGk+XCIgKyBjYXQgKyAnPHVsPic7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gobG9jcywgZnVuY3Rpb24oaiwgbG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSHRtbCArPSBcIjxsaT5cIiArIGxvYyArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkh0bWwgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVsID0galF1ZXJ5KCcjd3JhcHBlci1sb2NhdGlvbj51bCcpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGl0cyBjaGlsZHJlblxuICAgICAgICAgICAgdWwuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZChsb2NhdGlvbkh0bWwpO1xuXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbkRhdGEiLCJjbGFzcyBwcm9jZWVkaW5nRGF0YSB7XG4gICAgLyogICovXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9CdXR0b25zXG4gICAgICAgIHRoaXMudXNlQnV0dG9uID0galF1ZXJ5KFwiI3VzZVwiKTtcbiAgICAgICAgdGhpcy51c2VMb2NhdGlvbkJ1dHRvbiA9IGpRdWVyeShcIiNsb2NhdGlvblwiKTtcbiAgICAgICAgdGhpcy51c2VTZWFyY2hCdXR0b24gPSBqUXVlcnkoXCIjc2VyYWNoXCIpO1xuXG4gICAgICAgIC8vRWxlbWVudGVcbiAgICAgICAgdGhpcy53cmFwcGVyID0galF1ZXJ5KFwiI3dyYXBwZXJcIik7XG4gICAgICAgIHRoaXMuYmdEaXN0YW5jZSA9IGpRdWVyeShcIiNiZy1kaXN0YW5jZVwiKTtcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cyA9IGpRdWVyeShcIiN3cmFwcGVyLXNlcmFjaC1yZXN1bHRzXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMgPSBqUXVlcnkoXCIjd3JhcHBlci1sb2NhdGlvbi1yZXN1bHRzXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzID0galF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIik7XG5cbiAgICAgICAgdGhpcy5sb3R0aWV2aWV3ID0galF1ZXJ5KFwiI2xvdHRpZXZpZXdcIik7XG4gICAgICAgIHRoaXMub3BlbkNsb3NlQnV0dG9uID0galF1ZXJ5KFwiI29wZW4tY2xvc2UtYnV0dG9uXCIpO1xuXG4gICAgICAgIHRoaXMudXNlRmlsdGVyID0galF1ZXJ5KFwiLnVzZS1maWx0ZXJcIik7XG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIgPSBqUXVlcnkoXCIubG9jYXRpb24tZmlsdGVyXCIpO1xuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlciA9IGpRdWVyeShcIi5zZXJhY2gtZmlsdGVyXCIpO1xuICAgICAgICB0aGlzLmZpbHRlck1haW4gPSBqUXVlcnkoXCIuZmlsdGVyLW1haW5cIik7XG4gICAgICAgIHRoaXMuZmlsdGVyQm9keSA9IGpRdWVyeShcIi5maWx0ZXItYm9keVwiKTtcblxuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgICAgICAvL3RoaXMubG90dGllKClcbiAgICAgICAgdGhpcy5nZXREYXRhUmVzdWx0cygpO1xuICAgICAgICB0aGlzLmdldERhdGFVc2UoKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHRoaXMudXNlU2VhcmNoQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmVTZXJhY2hSZXN1bHRzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnVzZUxvY2F0aW9uQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmVMb2NhdGlvblJlc3VsdHMuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudXNlQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmVVc2VSZXN1bHRzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm9wZW5DbG9zZUJ1dHRvbi5vbihcImNsaWNrXCIsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdHlwaW5nTG9naWMoKSB7fVxuXG4gICAgLy9HaWIgbWlyIGRpZSBmcmVpZSBTdWNoZVxuICAgIGdldERhdGFTZWFyY2goKSB7fVxuXG4gICAgLy9HaWIgbWlyIGFsbGUgS2F0ZWdvcmllbiB2b24gVmVyZmFocmVuXG4gICAgZ2V0RGF0YVVzZSgpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKFxuICAgICAgICAgICAgcHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgXCIvd3AtanNvbi9wcm9jZWVkaW5nc2RhdGFyZXN0YXBpL3YxL2RhdGEvXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dvdCBkYXRhIGluIGdldERhdGFVc2U6JywgZGF0YSlcbiAgICAgICAgICAgICAgICB2YXIgY2F0ID0gZGF0YS5jYXRlZ29yaWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFydHlIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICB2YXIgdmFsSFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goY2F0LCBmdW5jdGlvbiAoaSwgb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxIVE1MICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9IFwiPHVsPlwiICsgdmFsSFRNTCArIFwiPC91bD5cIiArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSAnPGxpIGNsYXNzPVwiaXRlbSBmaXJzdC1jaGlsZFwiPicgKyBvYmplY3QubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsSFRNTCArPSBcIjxsaT5cIiArIG9iamVjdC50aXRsZSArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXJcIikuYXBwZW5kKHBhcnR5SFRNTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy9HaWIgbWlyIGRpZSBTdGFuZG9ydGUgbmFjaCBWZXJmYWhyZW5cbiAgICBnZXREYXRhTG9jYXRpb25zKCkge31cblxuICAgIC8vWmVpZyBtaXIgYWxsZSBFcmdlYm5pc3NlIGFuLlxuICAgIGdldERhdGFSZXN1bHRzKCkge1xuICAgICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyBcIi93cC1qc29uL3Byb2NlZWRpbmdzZGF0YS92MS9kYXRhL1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHByb2NlZWRpbmdzID0gZGF0YS5wcm9jZWVkaW5nc3Jlc3VsdHM7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChwcm9jZWVkaW5ncywgZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItcmVzdWx0c1wiKS5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9jZWR1cmVzX2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9jZWR1cmVzX2JveC10b3BfYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3ZhbC5wZXJtYWxpbmt9XCIgY2xhc3M9XCJwcm9jZWR1cmVzX2JveC1tYWluLXRpdGxlXCI+JHt2YWwudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt2YWwucGVybWFsaW5rfVwiIGNsYXNzPVwicHJvY2VkdXJlc19ib3gtbWFpbi10aW1lXCI+JHt2YWwuZGF0ZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwudGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGA8YSBjbGFzcz1cInByb2NlZHVyZXNfYm94LWltZ1wiIGhyZWY9XCIke3ZhbC5wZXJtYWxpbmt9XCIgdGl0bGU9XCIke3ZhbC50aXRsZX1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWwudGh1bWJuYWlsfScpXCI+PC9hPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYDxhIGNsYXNzPVwicHJvY2VkdXJlc19ib3gtaW1nXCIgaHJlZj1cIiR7dmFsLnBlcm1hbGlua31cIiB0aXRsZT1cIiR7dmFsLnRpdGxlfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MCcpXCI+PC9hPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2NlZHVyZXNfYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwicHJvY2VkdXJlc19ib3gtc3ViX3RpdGxlXCI+TG9yZW0sIGlwc3VtIGRvbG9yLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZhY2lsaXMgaXBzdW0gaWxsdW0gaXVzdG8gcG9ycm8gY29uc2VxdWF0dXIgZXVtLCBhbWV0IHJlcGVsbGVuZHVzIGVsaWdlbmRpIGZ1Z2lhdCBsYWJvcnVtLCByZXB1ZGlhbmRhZSBpbGxvIHF1YWVyYXQgcGVyZmVyZW5kaXMuIFByb3ZpZGVudCBlbmltIGRlYml0aXMgY3VwaWRpdGF0ZSBvZGlvIHN1c2NpcGl0ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nJHt2YWwucGVybWFsaW5rfScgY2xhc3M9XCJwcm9jZWR1cmVzX2JveC1yZWFkX21vcmVcIiB0aXRsZT1cIlJlYWQgTW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVhZCBNb3JlIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bWxuczpzdmdqcz1cImh0dHA6Ly9zdmdqcy5jb20vc3ZnanNcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB4PVwiMFwiIHk9XCIwXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBjbGFzcz1cIlwiPjxnPjxwYXRoIGQ9XCJtNTEuOTMgMzMtNTAuOTMtLjA0MWExIDEgMCAwIDEgMC0ybDUwLjkzMS4wNDFhMSAxIDAgMCAxIDAgMnpcIiBmaWxsPVwiIzcxNzE3MFwiIGRhdGEtb3JpZ2luYWw9XCIjNzE3MTcwXCI+PC9wYXRoPjxwYXRoIGQ9XCJtNjQgMzIuMDEyYy01LjY4MSAyLjEtMTIuNzMxIDUuNjkyLTE3LjEgOS41bDMuNDQ2LTkuNTEyLTMuNDMzLTkuNTEzYzQuMzY1IDMuODEzIDExLjQwOSA3LjQxMyAxNy4wODcgOS41MjV6XCIgZmlsbD1cIiM3MTcxNzBcIiBkYXRhLW9yaWdpbmFsPVwiIzcxNzE3MFwiPjwvcGF0aD48L2c+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0FjdGl2aWVydW5nXG4gICAgYWN0aXZlVXNlUmVzdWx0cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLndyYXBwZXIuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wZW5Vc2VPdmVybGF5KCksIDEwMCk7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKCk7XG4gICAgICAgICAgICB0aGlzLm9wZW5Vc2VPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmVMb2NhdGlvblJlc3VsdHMoKSB7XG4gICAgICAgIGlmICghdGhpcy53cmFwcGVyLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuTG9jYXRpb25PdmVybGF5KCksIDEwMCk7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKCk7XG4gICAgICAgICAgICB0aGlzLm9wZW5Mb2NhdGlvbk92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2ZVNlcmFjaFJlc3VsdHMoKSB7XG4gICAgICAgIGlmICghdGhpcy53cmFwcGVyLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuU2VhcmNoT3ZlcmxheSgpLCAxMDApO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuU2VhcmNoT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd3JhcHBlckFjdGl2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMuaGFzQ2xhc3MoXCJyZXN1bHRzLWRpc3BsYXlcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVVzZVJlc3VsdHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxvY2F0aW9uUmVzdWx0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VyYWNoUmVzdWx0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5oYXNDbGFzcyhcInJlc3VsdHMtZGlzcGxheVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVXNlUmVzdWx0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZXJhY2hSZXN1bHRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwcGVyVXNlUmVzdWx0cy5oYXNDbGFzcyhcInJlc3VsdHMtZGlzcGxheVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVXNlUmVzdWx0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZXJhY2hSZXN1bHRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0RlYWt0aXZpZXJ1bmdcbiAgICByZW1vdmVVc2VSZXN1bHRzKCkge1xuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLmFkZENsYXNzKFwicmVzdWx0cy1ub25lXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLnJlbW92ZUNsYXNzKFwicmVzdWx0cy1kaXNwbGF5XCIpO1xuICAgICAgICB0aGlzLmxvY2F0RmlsdGVyLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICByZW1vdmVMb2NhdGlvblJlc3VsdHMoKSB7XG4gICAgICAgIHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5hZGRDbGFzcyhcInJlc3VsdHMtbm9uZVwiKTtcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLnJlbW92ZUNsYXNzKFwicmVzdWx0cy1kaXNwbGF5XCIpO1xuICAgICAgICB0aGlzLnVzZUZpbHRlci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5zZXJhY2hGaWx0ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcmVtb3ZlU2VyYWNoUmVzdWx0cygpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5hZGRDbGFzcyhcInJlc3VsdHMtbm9uZVwiKTtcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5yZW1vdmVDbGFzcyhcInJlc3VsdHMtZGlzcGxheVwiKTtcbiAgICAgICAgdGhpcy51c2VGaWx0ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgLy9PdmVybGF5IE9wZW4gRmlsdGVyXG4gICAgb3BlblNlYXJjaE92ZXJsYXkoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSgpO1xuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLnJlbW92ZUNsYXNzKFwicmVzdWx0cy1ub25lXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLmFkZENsYXNzKFwicmVzdWx0cy1kaXNwbGF5XCIpO1xuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBvcGVuTG9jYXRpb25PdmVybGF5KCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkoKTtcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLnJlbW92ZUNsYXNzKFwicmVzdWx0cy1ub25lXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMuYWRkQ2xhc3MoXCJyZXN1bHRzLWRpc3BsYXlcIik7XG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgb3BlblVzZU92ZXJsYXkoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSgpO1xuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLnJlbW92ZUNsYXNzKFwicmVzdWx0cy1ub25lXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLmFkZENsYXNzKFwicmVzdWx0cy1kaXNwbGF5XCIpO1xuICAgICAgICB0aGlzLnVzZUZpbHRlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvL0Jhc2ljXG4gICAgb3ZlcmxheSgpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyLmFkZENsYXNzKFwid3JhcHBlci1maWx0ZXItc3R5bGVcIik7XG4gICAgICAgIHRoaXMuYmdEaXN0YW5jZS5hZGRDbGFzcyhcImJnLWRpc3RhbmNlXCIpO1xuICAgICAgICB0aGlzLm9wZW5DbG9zZUJ1dHRvbi5hZGRDbGFzcyhcImNsb3NlLWJ1dHRvbi1kaXNwbGF5XCIpO1xuICAgICAgICB0aGlzLndyYXBwZXIuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFpbi5hZGRDbGFzcyhcImFjdGl2ZS1tYWluXCIpO1xuICAgICAgICB0aGlzLmZpbHRlckJvZHkuYWRkQ2xhc3MoXCJhY3RpdmUtbWFpblwiKTtcbiAgICB9XG5cbiAgICAvLyBydW5Mb3R0aWUoKXtcbiAgICAvLyAgICAgaWYgKCF0aGlzLndyYXBwZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdMb3R0aScpXG4gICAgLy8gICAgICAgICB0aGlzLmxvdHRpZXZpZXcuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAvLyAgICAgICAgIHRoaXMud3JhcHBlci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5sb3R0aWV2aWV3LmNzcygnZGlzcGxheScsICdub25lJyksXG4gICAgLy8gICAgICAgICAyNTAwKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VSZXN1bHRzKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VyYWNoUmVzdWx0cygpO1xuICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2xhc3MoXCJ3cmFwcGVyLWZpbHRlci1zdHlsZVwiKTtcbiAgICAgICAgdGhpcy5iZ0Rpc3RhbmNlLnJlbW92ZUNsYXNzKFwiYmctZGlzdGFuY2VcIik7XG4gICAgICAgIHRoaXMub3BlbkNsb3NlQnV0dG9uLnJlbW92ZUNsYXNzKFwiY2xvc2UtYnV0dG9uLWRpc3BsYXlcIik7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFpbi5yZW1vdmVDbGFzcyhcImFjdGl2ZS1tYWluXCIpO1xuICAgICAgICB0aGlzLmZpbHRlckJvZHkucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtbWFpblwiKTtcbiAgICB9XG5cbiAgICAvLyBsb3R0aWUoKXtcbiAgICAvLyAgICAgbGV0IGljb25Ta2lwRm9yd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3R0aWUnKTtcbiAgICAvLyAgICAgbGV0IGFuaW1hdGlvblNraXBGb3J3YXJkID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xuICAgIC8vICAgICAgICAgICAgIGNvbnRhaW5lcjogaWNvblNraXBGb3J3YXJkLFxuICAgIC8vICAgICAgICAgICAgIHJlbmRlcmVyOiAnc3ZnJyxcbiAgICAvLyAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIHBhdGg6IFwiL3dwLWNvbnRlbnQvdGhlbWVzL2hhZXJ0aGEvaW1hZ2VzL0hHX0xvZ29fQW5pbWF0aW9uX0xBMi5qc29uXCJcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGFuaW1hdGlvblNraXBGb3J3YXJkLnBsYXlTZWdtZW50cyhbMCw2MF0sIHRydWUpO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvY2VlZGluZ0RhdGE7XG5cbi8vIGdldERhdGFVc2UoKXtcbi8vICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhcmVzdGFwaS92MS9kYXRhLycsIGZ1bmN0aW9uKGRhdGEpe1xuLy8gICAgICAgICAvL3ZhciBjYXQgPSBkYXRhLmNhdGVnb3JpZTtcblxuLy8gICAgICAgICAvLyB2YXIgY2F0RGF0ZSA9IHt9O1xuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgLy8gICAgIHZhciByID0gY2F0RGF0ZVt0aGlzLnJlc3VsdHNdID0gW107XG4vLyAgICAgICAgIC8vICAgICByLnB1c2godGhpcyk7XG4vLyAgICAgICAgIC8vIH0pO1xuXG4vLyAgICAgICAgIC8vY29uc29sZS5sb2coY2F0RGF0ZSlcblxuLy8gICAgICAgICB2YXIgbWFuZHJpbGxfZXZlbnRzID0gZGF0YS5jYXRlZ29yaWU7XG5cbi8vICAgICAgICAgY29uc29sZS5sb2cobWFuZHJpbGxfZXZlbnRzKVxuXG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbMF07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbNF07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbOV07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbMTNdO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzE2XTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1syMV07XG5cbi8vICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LCBmdW5jdGlvbihpLCBvYmplY3Qpe1xuLy8gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpICsnKCcrb2JqZWN0Lmxlbmd0aCsnKScpXG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iamVjdCk7XG4vLyAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKG9iamVjdClcbi8vICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QpXG4vLyAgICAgICAgICAgICAvLyBqUXVlcnkuZWFjaChvYmplY3QsIGZ1bmN0aW9uIChpbmRleCwgb2JqKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhpbmRleClcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9ialtpbmRleF0pO1xuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqKVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqW2ldKVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vIGpRdWVyeS5lYWNoKG9iaiwgZnVuY3Rpb24gKGksIHZhcnIpIHtcblxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YXJyKVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YXJyLnBlcm1hbGluaylcblxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YXJyLnRpdGxlKVxuXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIGpRdWVyeShcIiN3cmFwcGVyLXVzZS1yZXN1bHRzXCIpLmFwcGVuZChgXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIDx1bCBpZD1cIndyYXBwZXItdXJcIj5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIDxsaT4gJHt2YXJyWzBdfSA8L2xpPlxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgPGxpPiAke3ZhcnIudGl0bGV9IDwvbGk+XG5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgPC91bD5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgYClcblxuLy8gICAgICAgICAgICAgLy8gICAgIC8vIH0pO1xuXG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvYmogKTtcbi8vICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhvYmpbaW5kZXhdKTtcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9iai5wZXJtYWxpbmspO1xuXG4vLyAgICAgICAgICAgICAvLyB9KTtcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oaSwgZSkge1xuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5LmVhY2goZSwgZnVuY3Rpb24oa2V5LCBhcnIpIHtcbi8vICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhcnIpXG4vLyAgICAgICAgIC8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goYXJyLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpe1xuLy8gICAgICAgICAvLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHZhbHVlKVxuLy8gICAgICAgICAvLyAgICAgICAgIC8vIH0pXG4vLyAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgLy8gfSlcblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChjYXQsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcblxuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIikuYXBwZW5kKGBcbi8vICAgICAgICAgLy8gICAgIDx1bCBpZD1cIndyYXBwZXItdXJcIj5cblxuLy8gICAgICAgICAvLyAgICAgICAgICR7IGpRdWVyeS5lYWNoKGl0ZW0sIGZ1bmN0aW9uKGtleSwgYXJyeSl7XG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIGA8bGk+ICR7YXJyeS5wZXJtYWxpbmt9ICAke2FycnkudGl0bGV9PC9saT5gXG4vLyAgICAgICAgIC8vICAgICAgICAgfSkgfVxuXG4vLyAgICAgICAgIC8vICAgICA8L3VsPlxuLy8gICAgICAgICAvLyAgICAgYClcblxuLy8gICAgICAgICAvLyB9KTtcblxuLy8gICAgIC8vICAgICBkYXRhLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSkpXG4vLyAgICAgLy8gICAgLy9kYXRhLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSArIGl0ZW0ucGVybWFsaW5rICsgaXRlbS50aXRlbCkpXG5cbi8vICAgICAvLyAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIikuYXBwZW5kKGBcbi8vICAgICAvLyAgICAgPHVsIGlkPVwid3JhcHBlci11clwiPlxuLy8gICAgIC8vICAgICAke2RhdGEuY2F0ZWdvcmllLm1hcCggaXRlbSA9PiBpdGVtICkgfVxuLy8gICAgIC8vICAgICA8L3VsPlxuLy8gICAgIC8vICAgICBgKVxuXG4vLyAgICAgICAgIC8vIHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuLy8gICAgICAgICAvLyB2YXIgY2F0UmVzdWx0cyA9IGRhdGEuY2F0ZWdvcmllO1xuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGNhdFJlc3VsdHMsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbi8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coaXRlbSk7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpKTtcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0udGl0bGUpO1xuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5wZXJtYWxpbmspO1xuLy8gICAgICAgICAvLyAgICAgaXRlbS5yZXN1bHRzLm1hcCggaXRlbSA9PiBpdGVtLnBlcm1hbGluaylcblxuLy8gICAgICAgICAvLyB9KTtcblxuLy8gICAgICAgICAvL2xldCBjYXRSZXN1bHRzID0gbnVtYmVyQXJyYXkubWFwKChudW0pID0+IG51bS50aXRsZSlcblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLGZ1bmN0aW9uKCl7XG5cbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCB0aGlzLnRpdGxlICx0aGlzLnBlcm1hbGluayk7XG5cbi8vICAgICAgICAgLy8gICAgIH0pXG5cbi8vICAgICAgICAgLy8vZGYuY2F0ZWdvcmllcmVzdWx0cy5tYXAoaXRlbV8gPT4gY29uc29sZS5sb2coaXRlbV8uaWQpKVxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGNhdFJlc3VsdHMuY29uY2F0KHJlc3VsdHMpLCBmdW5jdGlvbihpLCBpdGVtKSB7XG4vLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uY2F0KTtcblxuLy8gICAgICAgICAvLyB9KTtcblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihpLCBlKSB7XG4vLyAgICAgICAgIC8vICAgICBqUXVlcnkuZWFjaChlLCBmdW5jdGlvbihrZXksIGFycikge1xuXG4vLyAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYXJyLmNhdGVnb3JpZSk7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIi4uLlwiLGFyci5jYXRlZ29yaWUsIGFyci5uYW1lKTtcblxuLy8gICAgICAgICAvLyAgICAgfSk7XG4vLyAgICAgICAgIC8vIH0pXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oaSwgZSkge1xuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5LmVhY2goZSwgZnVuY3Rpb24oa2V5LCBhcnIpIHtcbi8vICAgICAgICAgLy8gICAgICAgICBqUXVlcnkuZWFjaChhcnIsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCIuLi5cIiwgaW5kZXgsIG9iai52YWx1ZSk7XG4vLyAgICAgICAgIC8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgLy8gfSlcblxuLy8gICAgICAgICAvL3ZhciBjYXQgPSBkYXRhO1xuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihrYXksIHZhbCl7XG5cbi8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cy5wZXJtYWxpbmspXG4vLyAgICAgICAgIC8vICAgICAvL3ZhbC5tYXAoaXRlbSA9PiBgPGxpPjxhIGhyZWY9XCIke2l0ZW19XCI+JHtpdGVtLnRpdGxlfTwvYT48L2xpPmApLmpvaW4oXCJcIilcbi8vICAgICAgICAgLy8gICAgIC8vdmFsLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSkpXG5cbi8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2codmFsLmlkKVxuLy8gICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh2YWwpXG5cbi8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGtleXMpO1xuLy8gICAgICAgICAvLyAgICAgLy8gaWYocnVzYWx0cy5pZCA9PSBjYXQuaWQpe1xuLy8gICAgICAgICAvLyAgICAgLy8gICAgIC8vY29uc29sZS5sb2cocnVzYWx0cy50aXRsZSlcbi8vICAgICAgICAgLy8gICAgIC8vIH1cbi8vICAgICAgICAgLy8gfSlcbi8vICAgICB9KVxuLy8gfVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Rpc3Qvc2NyaXB0cy9tYWluXCI6IDAsXG5cdFwiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIjogMCxcblx0XCJkaXN0L3N0eWxlcy9hZG1pblwiOiAwLFxuXHRcImRpc3Qvc3R5bGVzL21haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raGFlcnRoYVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoYWVydGhhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIixcImRpc3Qvc3R5bGVzL2FkbWluXCIsXCJkaXN0L3N0eWxlcy9tYWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NjcmlwdHMvbWFpbi5qc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3R5bGVzL21haW4uc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3R5bGVzL21hZ25pZmljLXBvcHVwLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJDb250YWN0RGF0YSIsIlByb2NlZWRpbmdEYXRhIiwiTG9jYXRpb25EYXRhIiwiQ29udGFjdFBlcnNvbiIsImNvbnRhY3RkYXRhIiwicHJvY2VlZGluZ2RhdGEiLCJsb2NhdGlvbmRhdGEiLCJjb250YWN0cGVyc29uIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsIm1haW5DbGFzcyIsImdhbGxlcnkiLCJlbmFibGVkIiwiem9vbSIsImR1cmF0aW9uIiwiZWFzaW5nIiwib3BlbmVyIiwib3BlbmVyRWxlbWVudCIsImlzIiwiZmluZCIsImlmcmFtZSIsInBhdHRlcm5zIiwieW91dHViZSIsImluZGV4IiwiaWQiLCJ1cmwiLCJtIiwibWF0Y2giLCJzcmMiLCJ2aW1lbyIsIm1haW5OYXYiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkJhclRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJlZmZlY3QiLCJmYWRlRWZmZWN0IiwiY3Jvc3NGYWRlIiwic2xpZGVzUGVyVmlldyIsInNwZWVkIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlcmVkU2xpZGVzIiwic3BhY2VCZXR3ZWVuIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwiaXNfdG9jIiwiY3NzX2NsYXNzIiwiZWFjaCIsImFwcGVuZCIsImF0dHIiLCJoaWRlIiwiaSIsInJlbW92ZSIsImVuZCIsInByZXBlbmQiLCJvbiIsIm9uU2Nyb2xsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRhcmdldCIsImhhc2giLCJtZW51Iiwic3RvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImV2ZW50Iiwic2Nyb2xsUG9zIiwiY3VyckxpbmsiLCJyZWZFbGVtZW50IiwicmVmRWxlbWVudF9wb3MiLCJoZWFkZXJfaGVpZ2h0IiwiaGVpZ2h0IiwicmVmRWxlbWVudF9wb3NfdG90YWwiLCJzY3JvbGxQb3NfdG90YWwiLCJjbGljayIsImJ0biIsInNjcm9sbCIsImZhZGVPdXQiLCJudW1iZXIiLCJkYXRhIiwiZmFkZUluIiwiY3NzIiwid2hpY2giLCJhamF4TmV3cyIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXROZXdzTW9kYWxDYXRlZ29yeSIsImNsb3Nlc3QiLCJjb25zb2xlIiwibG9nIiwicGFyZW50IiwiaGFzQ2xhc3MiLCJsZW5ndGgiLCJlbGVtZW50IiwidGVybSIsInB1c2giLCJ2YWwiLCJkYXRlIiwicyIsIm5vbmNlIiwib2JqZWN0UG9zdCIsImFjdGlvbiIsInBvc3QiLCJwcm9jZWVkaW5nc0RhdGEiLCJhamF4Iiwic3VjY2VzcyIsInBvc3RzIiwiaHRtbCIsInNsaWRlc1Blckdyb3VwIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsImRpc3RhbnRfcmVzdWx0cyIsImJ1aWxkX2NuX2Jsb2NrIiwiY25fY29kZSIsImxvY3MiLCJ0aXRsZXMiLCJrbXMiLCJsb2MiLCJ0aXRsZSIsImRpc3RhbmNlIiwidGl0bGVfc3RyIiwiam9pbiIsImttX3N0ciIsInNob3dfZGlzdGFudF9yZXN1bHQiLCJibG9ja3MiLCJsb2Nfc3RyIiwiZWxlIiwidmFsdWUiLCJnZXQiLCJkb25lIiwicmVzIiwiY29udGFjdERhdGEiLCJnZXREYXRhSWQiLCJnZXRQcm9jZWR1cmVMb2NhdGlvbiIsImRhdGFJZCIsImdldEpTT04iLCJyb290X3VybCIsImxvY2F0aW9uSHRtbCIsImNvdW50cnlfZGF0YSIsIml0ZW0iLCJpbmNsdWRlcyIsImNvdW50cnlfY29kZSIsInVsIiwic3dpcGVySW1hZ2UiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwic3dpcGVyQ29udGFjdCIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwiZ2V0U3dpcGVySlMiLCJpbWciLCJyZW1vdmVBdHRyIiwia2V5IiwiYWZ0ZXIiLCJuYW1lIiwic3RyZWV0X251bWJlciIsInBvc3Rjb2RlIiwiY291bnRyeSIsImVtYWlsIiwicGhvbmUiLCJwZXJtYWxpbmsiLCJzbGlkZXJfaW1hZ2UiLCJzbGlkZXJfaW1hZ2Vfc2l6ZSIsInByb2NlZWRpbmdfaGVhZGVyIiwid2lkdGgiLCJjb250YWN0UGVyc29uIiwiZ2V0RGF0YSIsImxvY2F0aW9uRGF0YSIsImdldExvYWNhdGlvbkRhdGEiLCJjYXRpZCIsInJlc3VsdHMiLCJhbGxDYXRzIiwiY2F0IiwiaiIsImNoaWxkcmVuIiwicHJvY2VlZGluZ0RhdGEiLCJ1c2VCdXR0b24iLCJ1c2VMb2NhdGlvbkJ1dHRvbiIsInVzZVNlYXJjaEJ1dHRvbiIsIndyYXBwZXIiLCJiZ0Rpc3RhbmNlIiwid3JhcHBlclNlcmFjaFJlc3VsdHMiLCJ3cmFwcGVyTG9jYXRpb25SZXN1bHRzIiwid3JhcHBlclVzZVJlc3VsdHMiLCJsb3R0aWV2aWV3Iiwib3BlbkNsb3NlQnV0dG9uIiwidXNlRmlsdGVyIiwibG9jYXRGaWx0ZXIiLCJzZXJhY2hGaWx0ZXIiLCJmaWx0ZXJNYWluIiwiZmlsdGVyQm9keSIsImV2ZW50cyIsImdldERhdGFSZXN1bHRzIiwiZ2V0RGF0YVVzZSIsImFjdGl2ZVNlcmFjaFJlc3VsdHMiLCJiaW5kIiwiYWN0aXZlTG9jYXRpb25SZXN1bHRzIiwiYWN0aXZlVXNlUmVzdWx0cyIsImNsb3NlIiwidGhhdCIsImNhdGVnb3JpZSIsInBhcnR5SFRNTCIsInZhbEhUTUwiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJuYW0iLCJwcm9jZWVkaW5ncyIsInByb2NlZWRpbmdzcmVzdWx0cyIsInRodW1ibmFpbCIsInNldFRpbWVvdXQiLCJvcGVuVXNlT3ZlcmxheSIsIndyYXBwZXJBY3RpdmUiLCJvcGVuTG9jYXRpb25PdmVybGF5Iiwib3BlblNlYXJjaE92ZXJsYXkiLCJyZW1vdmVVc2VSZXN1bHRzIiwicmVtb3ZlTG9jYXRpb25SZXN1bHRzIiwicmVtb3ZlU2VyYWNoUmVzdWx0cyIsIm92ZXJsYXkiXSwic291cmNlUm9vdCI6IiJ9