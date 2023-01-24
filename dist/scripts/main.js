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
    jQuery(e).closest('.news-archive-block').find('.wrapper-filter').addClass('active');
    jQuery(e).closest('.news-archive-block').find('.category-list').removeClass('active');
  }
  // search button
  jQuery('.news-input-search ~ .search').on('click', function (e) {
    return ajaxNews(e.target);
  });

  // trigger category modal
  jQuery('.category-toggle').on('click', function (e) {
    var parent = $(e.target).closest('.news-archive-block');
    parent.find('.category-list').toggleClass('active');
    // check if close section category
    if (parent.find('.category-list').hasClass('active')) {
      parent.find('.wrapper-filter').addClass('active');
    } else {
      parent.find('.wrapper-filter').removeClass('active');
    }
  });

  // Click Other section  hide category and remove background
  jQuery(document).click(function (event) {
    if (!$(event.target).closest(".wrapper-filter").length) {
      $('.category-list').removeClass('active');
      $('.wrapper-filter').removeClass('active');
    }
  });
  jQuery('.date-select').on('change', function (e) {
    return ajaxNews(e.target);
  }).on('focus', function (e) {
    return closetNewsModalCategory(e.target);
  }).on('focusout', function (e) {
    $(e.target).closest('.news-archive-block').find('.wrapper-filter').removeClass('active');
  });
  jQuery('.news-category__input').on('click', function (e) {
    return ajaxNews(e.target);
  });

  // ajax
  function ajaxNews(element) {
    var val = [];
    $(element).closest('.news-archive-block').find('.news-category__input:checked').each(function () {
      val.push(jQuery(this).val());
    });
    $(element).closest('.news-archive-block').find('.wrapper-filter').addClass('active');
    var s = $(element).closest('.news-archive-block').find('.news-input-search').val();
    var date = $(element).closest('.news-archive-block').find('.date-select').val();
    var nonce = $(element).closest('.news-archive-block').find('[name=news_post_ajax_of_nonce_field]').val();
    var objectPost = {
      action: "news_post_ajax",
      term: val,
      s: s,
      nonce: nonce,
      date: date
    };
    if (nonce) {
      $.post(proceedingsData.ajax, objectPost).success(function (posts) {
        $(element).closest('.news-archive-block').find('.wrapper-filter').removeClass('active');
        $(element).closest('.news-archive-block').find('.category-list').removeClass('active');
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
    this.useFilter = jQuery('.use-filter');
    this.locatFilter = jQuery('.location-filter');
    this.serachFilter = jQuery('.serach-filter');
    this.filterMain = jQuery('.filter-main');
    this.filterBody = jQuery('.filter-body');
    this.events();
    //this.lottie() 
    this.getDataResults();
    this.getDataUse();
    this.getDataLocations();
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
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatarestapi/v1/data/', function (data) {
        //console.log('got data in getDataUse:', data)
        var cat = data.categorie;
        var partyHTML = '';
        var valHTML = '';
        jQuery.each(cat, function (i, object) {
          if (object.name !== undefined) {
            var nam = i;
            if (valHTML !== "") {
              partyHTML += "<ul>" + valHTML + "</ul>" + '</li>';
              valHTML = "";
            }
            partyHTML += '<li class="item first-child"><span class="main-head">' + object.name + '</span>';
          } else if (object.title !== undefined) {
            valHTML += '<li><input type="checkbox" value="' + object.title + '" name="cat[]">' + object.title + '</li>';
          }
        });
        jQuery("#wrapper-ur").append(partyHTML);
      });
    }

    //Gib mir die Standorte nach Verfahren
  }, {
    key: "getDataLocations",
    value: function getDataLocations() {
      var that = this;
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatalocationsrestapi/v1/data/', function (data) {
        //console.log('got data in getDataUse:', data)
        var cat = data.categorie;
        var partyHTML = '';
        var valHTML = '';
        jQuery.each(cat, function (i, object) {
          if (object.name !== undefined) {
            var nam = i;
            if (valHTML !== "") {
              partyHTML += "<ul>" + valHTML + "</ul>" + '</li>';
              valHTML = "";
            }
            partyHTML += '<li class="item first-child"><span class="main-head">' + object.name + '</span>';
          } else if (object.title !== undefined) {
            valHTML += '<li><input type="checkbox" value="' + object.postid + '" name="locations[]">' + object.title + '</li>';
          }
        });
        jQuery("#wrapper-locations").append(partyHTML);
      });
    }

    //Zeig mir alle Ergebnisse an.
  }, {
    key: "getDataResults",
    value: function getDataResults() {
      var selected = new Array();
      jQuery("#wrapper-locations input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
      });
      var serializedForm = {
        locations: selected
      };
      jQuery.post(proceedingsData.root_url + '/wp-json/proceedingsdata/v1/data/', serializedForm, function (data) {
        var proceedings = data.proceedingsresults;
        jQuery.each(proceedings, function (key, val) {
          jQuery("#wrapper-results").after("\n                <div class=\"col-12 col-md-4\">\n                    <div class=\"header-img\">\n                    ".concat(val.thumbnail ? "<img src=\"".concat(val.thumbnail, "\"") : "<img src=\"https://via.placeholder.com/640x360\">", "\n                    </div>\n                    <div class=\"body\">\n                        <p>").concat(val.title, "</p>   \n                    </div>\n                </div>\n                "));
        });
      });

      /*jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdata/v1/data/', function(data){
           var proceedings = data.proceedingsresults;
          jQuery.each(proceedings, function(key, val){
               jQuery("#wrapper-results").after(`
              <div class="col-12 col-md-4">
                  <div class="header-img">
                  ${val.thumbnail ? `<img src="${val.thumbnail}"` : `<img src="https://via.placeholder.com/640x360">` }
                  </div>
                  <div class="body">
                      <p>${val.title}</p>   
                  </div>
              </div>
              `)
          })
       })*/
    }

    //Activierung
  }, {
    key: "activeUseResults",
    value: function activeUseResults() {
      var _this = this;
      if (!this.wrapper.hasClass('active')) {
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
      if (!this.wrapper.hasClass('active')) {
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
      if (!this.wrapper.hasClass('active')) {
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
      if (this.wrapper.hasClass('active')) {
        if (this.wrapperSerachResults.hasClass('results-display')) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
        if (this.wrapperLocationResults.hasClass('results-display')) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
        if (this.wrapperUseResults.hasClass('results-display')) {
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
      this.wrapperUseResults.addClass('results-none');
      this.wrapperUseResults.removeClass('results-display');
      this.locatFilter.removeClass('active');
      this.serachFilter.removeClass('active');
    }
  }, {
    key: "removeLocationResults",
    value: function removeLocationResults() {
      this.wrapperLocationResults.addClass('results-none');
      this.wrapperLocationResults.removeClass('results-display');
      this.useFilter.removeClass('active');
      this.serachFilter.removeClass('active');
    }
  }, {
    key: "removeSerachResults",
    value: function removeSerachResults() {
      this.wrapperSerachResults.addClass('results-none');
      this.wrapperSerachResults.removeClass('results-display');
      this.useFilter.removeClass('active');
      this.locatFilter.removeClass('active');
    }

    //Overlay Open Filter
  }, {
    key: "openSearchOverlay",
    value: function openSearchOverlay() {
      this.overlay();
      this.wrapperSerachResults.removeClass('results-none');
      this.wrapperSerachResults.addClass('results-display');
      this.serachFilter.addClass('active');
    }
  }, {
    key: "openLocationOverlay",
    value: function openLocationOverlay() {
      this.overlay();
      this.wrapperLocationResults.removeClass('results-none');
      this.wrapperLocationResults.addClass('results-display');
      this.locatFilter.addClass('active');
    }
  }, {
    key: "openUseOverlay",
    value: function openUseOverlay() {
      this.overlay();
      this.wrapperUseResults.removeClass('results-none');
      this.wrapperUseResults.addClass('results-display');
      this.useFilter.addClass('active');
    }

    //Basic
  }, {
    key: "overlay",
    value: function overlay() {
      this.wrapper.addClass('wrapper-filter-style');
      this.bgDistance.addClass('bg-distance');
      this.openCloseButton.addClass('close-button-display');
      this.wrapper.addClass('active');
      this.filterMain.addClass('active-main');
      this.filterBody.addClass('active-main');
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
      this.wrapper.removeClass('wrapper-filter-style');
      this.bgDistance.removeClass('bg-distance');
      this.openCloseButton.removeClass('close-button-display');
      this.filterMain.removeClass('active-main');
      this.filterBody.removeClass('active-main');
      this.getDataResults();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL0NvbnRhY3QtZGF0YS5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9Db250YWN0LmpzIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL0xvY2F0aW9uLmpzIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL092ZXJ2aWV3LXByb2NlZWRpbmdzLmpzIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc3R5bGVzL21haW4uc2Nzcz83ZWNhIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zdHlsZXMvbWFnbmlmaWMtcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgQ29udGFjdERhdGEgZnJvbSBcIi4vbW9kdWxlcy9Db250YWN0LWRhdGFcIjtcbmltcG9ydCBQcm9jZWVkaW5nRGF0YSBmcm9tIFwiLi9tb2R1bGVzL092ZXJ2aWV3LXByb2NlZWRpbmdzXCI7XG5pbXBvcnQgTG9jYXRpb25EYXRhIGZyb20gXCIuL21vZHVsZXMvTG9jYXRpb25cIjtcbmltcG9ydCBDb250YWN0UGVyc29uIGZyb20gXCIuL21vZHVsZXMvQ29udGFjdFwiO1xuXG5jb25zdCBjb250YWN0ZGF0YSA9IG5ldyBDb250YWN0RGF0YSgpO1xuY29uc3QgcHJvY2VlZGluZ2RhdGEgPSBuZXcgUHJvY2VlZGluZ0RhdGEoKTtcbmNvbnN0IGxvY2F0aW9uZGF0YSA9IG5ldyBMb2NhdGlvbkRhdGEoKTtcbmNvbnN0IGNvbnRhY3RwZXJzb24gPSBuZXcgQ29udGFjdFBlcnNvbigpO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgLy9wb3B1cCBpbWFnZVxuICAgICQoXCIuaW1hZ2UtcG9wdXAtdmVydGljYWwtZml0XCIpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgIG1haW5DbGFzczogXCJtZnAtd2l0aC16b29tXCIsXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgem9vbToge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCwgLy8gZHVyYXRpb24gb2YgdGhlIGVmZmVjdCwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIiwgLy8gQ1NTIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIG9wZW5lcjogZnVuY3Rpb24gKG9wZW5lckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbmVyRWxlbWVudC5pcyhcImltZ1wiKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoXCJpbWdcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy9wb3B1cCB2aWRlb1xuICAgICQoXCIucG9wdXAteW91dHViZVwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogXCJpZnJhbWVcIixcbiAgICB9KTtcblxuICAgIGpRdWVyeShcIi52aWRlby1idXR0b24tcnVuXCIpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICB0eXBlOiBcImlmcmFtZVwiLFxuICAgICAgICBpZnJhbWU6IHtcbiAgICAgICAgICAgIHBhdHRlcm5zOiB7XG4gICAgICAgICAgICAgICAgeW91dHViZToge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogXCJ5b3V0dWJlLmNvbS9cIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gdXJsLm1hdGNoKC9bXFxcXD9cXFxcJl12PShbXlxcXFw/XFxcXCZdKykvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbSB8fCAhbVsxXSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MSZtdXRlZD0xXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2aW1lbzoge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogXCJ2aW1lby5jb20vXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHVybC5tYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKGh0dHBzPzpcXC9cXC8pPyh3d3cuKT8ocGxheWVyLik/dmltZW8uY29tXFwvKFthLXpdKlxcLykqKFswLTldezYsMTF9KVs/XT8uKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW0gfHwgIW1bNV0pIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1bNV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEmbXV0ZWQ9MVwiJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICAvL3BvcHVwIGltYWdlXG5cbiAgICAkKFwiLmltYWdlLXBvcHVwLXZlcnRpY2FsLWZpdFwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICBtYWluQ2xhc3M6IFwibWZwLXdpdGgtem9vbVwiLFxuICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsIC8vIGR1cmF0aW9uIG9mIHRoZSBlZmZlY3QsIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsIC8vIENTUyB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvblxuXG4gICAgICAgICAgICBvcGVuZXI6IGZ1bmN0aW9uIChvcGVuZXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoXCJpbWdcIikgPyBvcGVuZXJFbGVtZW50IDogb3BlbmVyRWxlbWVudC5maW5kKFwiaW1nXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vcG9wdXAgdmlkZW9cbiAgICAkKFwiLnBvcHVwLXlvdXR1YmVcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6IFwiaWZyYW1lXCIsXG4gICAgfSk7XG5cbiAgICAvL0hlYWRlciBtZW7DvFxuICAgIGxldCBtYWluTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWhlYWRlci1tZW51XCIpO1xuICAgIGxldCBuYXZCYXJUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLW5hdmJhci10b2dnbGVcIik7XG5cbiAgICBuYXZCYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy9Td2lwZXIgVmVyZmFocmVuIFZpZGVvXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXIyXCIsIHtcbiAgICAgICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgICAgY3Jvc3NGYWRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgICAgIGxhenk6IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vU3dpcGVyIG5ld3Mgc2xpZGVyXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubmV3cy1zbGlkZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgICBsYXp5OiB0cnVlLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG59KTtcblxuXG4vL215U3dpcGVySW1hZ2VHYWxsZXJ5IDE4LjAyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlckltYWdlR2FsbGVyeVwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi53cmFwcGVyLXZpZGVvLXBhZ2luYXRpb24gPiAuc3dpcGVyLXBhZ2luYXRpb24tdmlkZW8tbmV3XCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+PC9zcGFuPic7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi53cmFwcGVyLXZpZGVvLXBhZ2luYXRpb24gPiAuc3dpcGVyLWJ1dHRvbi12aWRlby1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIud3JhcHBlci12aWRlby1wYWdpbmF0aW9uID4gLnN3aXBlci1idXR0b24tdmlkZW8tcHJldlwiLFxuICAgIH0sXG59KTtcblxuLy9WZXJmYWhyZW4gSGVhZGVyIEltYWdlIEdhbGxlcnlcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyUHJvY2VlZGluZ3NIZWFkZXJcIiwge1xuICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxufSk7XG5cbi8vTG9jYXRpb24gSGVhZGVyIEltYWdlIEdhbGxlcnlcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVybG9jYXRpb25IZWFkZXJcIiwge1xuICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxufSk7XG5cbmlmIChqUXVlcnkoXCIuc2lkZWJhcm1lbnVcIilbMF0pIHtcbiAgICBsZXQgaXNfdG9jID0gZmFsc2U7XG4gICAgbGV0IGNzc19jbGFzcyA9IFwiXCI7XG4gICAgalF1ZXJ5KFwiLnRvY1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNfdG9jID0gdHJ1ZTtcbiAgICAgICAgalF1ZXJ5KFwiLnNpZGViYXJtZW51IG9sXCIpLmFwcGVuZChcbiAgICAgICAgICAgIFwiPGxpPjxhIGhyZWY9JyNcIiArXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmF0dHIoXCJpZFwiKSArXG4gICAgICAgICAgICAgICAgXCInPlwiICtcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYXR0cihcImRhdGEtdG9jdGl0bGVcIikgK1xuICAgICAgICAgICAgICAgIFwiPC9hPjwvbGk+XCJcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAoIWlzX3RvYykge1xuICAgICAgICBqUXVlcnkoXCIuc3VibmF2IC5uYXZwb2ludHNcIikuaGlkZSgpO1xuICAgIH1cbn1cblxuLy9MaXN0IG51bWJlcmluZ1xualF1ZXJ5KFwiLm51bW1iZXJcIikuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGpRdWVyeSh0aGlzKVxuICAgICAgICAuZmluZChcIm51bWJlclwiKVxuICAgICAgICAucmVtb3ZlKClcbiAgICAgICAgLmVuZCgpXG4gICAgICAgIC5wcmVwZW5kKFwiPHNwYW4gY2xhc3M9J251bWJlcic+XCIgKyAoaSArIDEpICsgXCIuIDwvc3Bhbj5cIik7XG59KTtcblxuLy9TbW9vdGhzY3JvbGwgVmVyZmFocmVuXG5qUXVlcnkoZG9jdW1lbnQpLm9uKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcblxuLy9zbW9vdGhzY3JvbGxcbmpRdWVyeSgnI25hdi1pZCBvbCBsaSBhW2hyZWZePVwiI1wiXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgalF1ZXJ5KGRvY3VtZW50KS5vZmYoXCJzY3JvbGxcIik7XG5cbiAgICBqUXVlcnkoXCJhXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuaGFzaCxcbiAgICAgICAgbWVudSA9IHRhcmdldDtcbiAgICB0YXJnZXQgPSBqUXVlcnkodGFyZ2V0KTtcbiAgICBqUXVlcnkoXCJodG1sLCBib2R5XCIpXG4gICAgICAgIC5zdG9wKClcbiAgICAgICAgLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wICsgMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICBcInN3aW5nXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG59KTtcblxuZnVuY3Rpb24gb25TY3JvbGwoZXZlbnQpIHtcbiAgICB2YXIgc2Nyb2xsUG9zID0galF1ZXJ5KGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcbiAgICBqUXVlcnkoXCIjbmF2LWlkIGFcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyTGluayA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgdmFyIHJlZkVsZW1lbnQgPSBqUXVlcnkoY3VyckxpbmsuYXR0cihcImhyZWZcIikpO1xuICAgICAgICB2YXIgcmVmRWxlbWVudF9wb3MgPSByZWZFbGVtZW50Lm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIGhlYWRlcl9oZWlnaHQgPSBqUXVlcnkoXCIubmF2YmFyIFwiKS5oZWlnaHQoKTtcbiAgICAgICAgdmFyIHJlZkVsZW1lbnRfcG9zX3RvdGFsID0gcmVmRWxlbWVudF9wb3M7XG4gICAgICAgIHZhciBzY3JvbGxQb3NfdG90YWwgPSBzY3JvbGxQb3MgKyBoZWFkZXJfaGVpZ2h0O1xuXG4gICAgICAgIGlmIChyZWZFbGVtZW50X3BvcyA8IHNjcm9sbFBvc190b3RhbCAmJiByZWZFbGVtZW50X3BvcyArIHJlZkVsZW1lbnQuaGVpZ2h0KCkgPiBzY3JvbGxQb3NfdG90YWwpIHtcbiAgICAgICAgICAgIGpRdWVyeShcIiNuYXYtaWQgb2wgbGkgYVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGN1cnJMaW5rLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VyckxpbmsucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy9WZXJmYWhyZW4gUGFnZSBtZW51XG5qUXVlcnkoXCIuZG93blwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgalF1ZXJ5KFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IGpRdWVyeShcIi51cFwiKS5vZmZzZXQoKS50b3AsXG4gICAgICAgIH0sXG4gICAgICAgIDE1MDBcbiAgICApO1xufSk7XG5cbnZhciBidG4gPSBqUXVlcnkoXCIjYnV0dG9uXCIpO1xuXG5idG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBqUXVlcnkoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCIzMDBcIik7XG59KTtcblxualF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICBpZiAoalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcbiAgICBidG4uYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfSBlbHNlIHtcbiAgICBidG4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfVxufSk7XG5cbi8vUG9wVXAgaHR0cHM6Ly9jb2RlcGVuLmlvL2thaWFrL3Blbi95THlxeE9ZXG4vLyBqUXVlcnkoXCIjcG9wdXBJZFZpZGVvXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuLy8gICBqUXVlcnkoXCIucG9wdXBcIikuZmFkZUluKDUwMCk7XG4vLyB9KTtcbmpRdWVyeShcIi5jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIGpRdWVyeShcIi5wb3B1cFwiKS5mYWRlT3V0KDUwMCk7XG59KTtcblxuXG4vL29wZW4gcG9wdXBcbmpRdWVyeSgnLnBvcHVwLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgbnVtYmVyID0galF1ZXJ5KHRoaXMpLmRhdGEoXCJudW1iZXJcIik7XG4gIGpRdWVyeSgnLnBvcHVwLScgKyBudW1iZXIpLmZhZGVJbig1MDApO1xuICBqUXVlcnkoJy5wb3B1cC0nICsgbnVtYmVyKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xufSk7XG5cbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTczNzU0MjcvbXVsdGlwbGUtcG9wdXAtaW4tc2FtZS1wYWdlXG4vLyAvL2Nsb3NlIHBvcHVwXG4vLyAkKCcucG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4vLyAgIGlmKCAkKGV2ZW50LnRhcmdldCkuaXMoJy5wb3B1cC1jbG9zZScpIHx8ICQoZXZlbnQudGFyZ2V0KS5pcygnLnBvcHVwJykgKSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyAvL2Nsb3NlIHBvcHVwIHdoZW4gY2xpY2tpbmcgdGhlIGVzYyBrZXlib2FyZCBidXR0b25cbi8vICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGV2ZW50KXtcbi8vICAgICBpZihldmVudC53aGljaD09JzI3Jyl7XG4vLyAgICAgICAkKCcucG9wdXAnKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vIE5ld3MgcGFnZVxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICBqUXVlcnkoJy5uZXdzLWlucHV0LXNlYXJjaCcpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZW50ZXIgcHJlc3NcbiAgICBpZiAoZS53aGljaCA9PSAxMykge1xuICAgICAgYWpheE5ld3MoZS5jdXJyZW50VGFyZ2V0KVxuICAgIH1cbiAgfSkub24oJ2ZvY3VzJywgZSA9PiBjbG9zZXROZXdzTW9kYWxDYXRlZ29yeShlLnRhcmdldCkpXG4gICAgICAub24oJ2NsaWNrJywgZSA9PiBjbG9zZXROZXdzTW9kYWxDYXRlZ29yeShlLnRhcmdldCkpXG5cbiAgLy8gY2xvc2V0IE1vZGFsIENhdGVnb3J5XG4gIGZ1bmN0aW9uIGNsb3NldE5ld3NNb2RhbENhdGVnb3J5KGUpIHtcbiAgICBqUXVlcnkoZSkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLmZpbmQoJy53cmFwcGVyLWZpbHRlcicpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIGpRdWVyeShlKS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnLmNhdGVnb3J5LWxpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgfVxuICAvLyBzZWFyY2ggYnV0dG9uXG4gIGpRdWVyeSgnLm5ld3MtaW5wdXQtc2VhcmNoIH4gLnNlYXJjaCcpLm9uKCdjbGljaycsIGUgPT4gYWpheE5ld3MoZS50YXJnZXQpKVxuXG4gIC8vIHRyaWdnZXIgY2F0ZWdvcnkgbW9kYWxcbiAgalF1ZXJ5KCcuY2F0ZWdvcnktdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJylcbiAgICBwYXJlbnQuZmluZCgnLmNhdGVnb3J5LWxpc3QnKS50b2dnbGVDbGFzcygnYWN0aXZlJylcbiAgICAvLyBjaGVjayBpZiBjbG9zZSBzZWN0aW9uIGNhdGVnb3J5XG4gICAgaWYgKHBhcmVudC5maW5kKCcuY2F0ZWdvcnktbGlzdCcpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgcGFyZW50LmZpbmQoJy53cmFwcGVyLWZpbHRlcicpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuZmluZCgnLndyYXBwZXItZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4vLyBDbGljayBPdGhlciBzZWN0aW9uICBoaWRlIGNhdGVnb3J5IGFuZCByZW1vdmUgYmFja2dyb3VuZFxuICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXCIud3JhcHBlci1maWx0ZXJcIikubGVuZ3RoKSB7XG4gICAgICAkKCcuY2F0ZWdvcnktbGlzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgJCgnLndyYXBwZXItZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuICB9KTtcblxuICBqUXVlcnkoJy5kYXRlLXNlbGVjdCcpXG4gICAgICAub24oJ2NoYW5nZScsIGUgPT4gYWpheE5ld3MoZS50YXJnZXQpKVxuICAgICAgLm9uKCdmb2N1cycsIGUgPT4gY2xvc2V0TmV3c01vZGFsQ2F0ZWdvcnkoZS50YXJnZXQpKVxuICAgICAgLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcud3JhcHBlci1maWx0ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0pXG5cblxuICBqUXVlcnkoJy5uZXdzLWNhdGVnb3J5X19pbnB1dCcpLm9uKCdjbGljaycsIGUgPT4gYWpheE5ld3MoZS50YXJnZXQpKVxuXG4vLyBhamF4XG4gIGZ1bmN0aW9uIGFqYXhOZXdzKGVsZW1lbnQpIHtcbiAgICBsZXQgdmFsID0gW11cbiAgICAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcubmV3cy1jYXRlZ29yeV9faW5wdXQ6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFsLnB1c2goalF1ZXJ5KHRoaXMpLnZhbCgpKTtcbiAgICB9KVxuXG4gICAgJChlbGVtZW50KS5jbG9zZXN0KCcubmV3cy1hcmNoaXZlLWJsb2NrJykuZmluZCgnLndyYXBwZXItZmlsdGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgbGV0IHMgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcubmV3cy1pbnB1dC1zZWFyY2gnKS52YWwoKVxuXG4gICAgbGV0IGRhdGUgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcuZGF0ZS1zZWxlY3QnKS52YWwoKVxuICAgIGxldCBub25jZSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLmZpbmQoJ1tuYW1lPW5ld3NfcG9zdF9hamF4X29mX25vbmNlX2ZpZWxkXScpLnZhbCgpXG4gICAgbGV0IG9iamVjdFBvc3QgPSB7XG4gICAgICBhY3Rpb246IFwibmV3c19wb3N0X2FqYXhcIixcbiAgICAgIHRlcm06IHZhbCwgcyxcbiAgICAgIG5vbmNlLCBkYXRlLFxuXG4gICAgfVxuICAgIGlmIChub25jZSkge1xuXG4gICAgICAkLnBvc3QocHJvY2VlZGluZ3NEYXRhLmFqYXgsIG9iamVjdFBvc3QpXG4gICAgICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcud3JhcHBlci1maWx0ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICQoZWxlbWVudCkuY2xvc2VzdCgnLm5ld3MtYXJjaGl2ZS1ibG9jaycpLmZpbmQoJy5jYXRlZ29yeS1saXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5uZXdzLWFyY2hpdmUtYmxvY2snKS5maW5kKCcuYWpheC1uZXdzLXJvdycpLmh0bWwocG9zdHMpO1xuXG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn0pXG5cbi8vICAgICBpZiAoalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcbi8vICAgICAgICAgYnRuLmFkZENsYXNzKFwic2hvd1wiKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBidG4ucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuLy8gICAgIH1cbi8vIH0pO1xuXG4vL1BvcFVwIGh0dHBzOi8vY29kZXBlbi5pby9rYWlhay9wZW4veUx5cXhPWVxuLy8galF1ZXJ5KFwiI3BvcHVwSWRWaWRlb1wiKS5jbGljayhmdW5jdGlvbigpIHtcbi8vICAgalF1ZXJ5KFwiLnBvcHVwXCIpLmZhZGVJbig1MDApO1xuLy8gfSk7XG5qUXVlcnkoXCIuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGpRdWVyeShcIi5wb3B1cFwiKS5mYWRlT3V0KDUwMCk7XG59KTtcblxuLy9vcGVuIHBvcHVwXG5qUXVlcnkoXCIucG9wdXAtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbnVtYmVyID0galF1ZXJ5KHRoaXMpLmRhdGEoXCJudW1iZXJcIik7XG5cbiAgICBqUXVlcnkoXCIucG9wdXAtXCIgKyBudW1iZXIpLmZhZGVJbig1MDApO1xuICAgIGpRdWVyeShcIi5wb3B1cC1cIiArIG51bWJlcikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG59KTtcblxuLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NzM3NTQyNy9tdWx0aXBsZS1wb3B1cC1pbi1zYW1lLXBhZ2Vcbi8vIC8vY2xvc2UgcG9wdXBcbi8vICQoJy5wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbi8vICAgaWYoICQoZXZlbnQudGFyZ2V0KS5pcygnLnBvcHVwLWNsb3NlJykgfHwgJChldmVudC50YXJnZXQpLmlzKCcucG9wdXAnKSApIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIC8vY2xvc2UgcG9wdXAgd2hlbiBjbGlja2luZyB0aGUgZXNjIGtleWJvYXJkIGJ1dHRvblxuLy8gJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZXZlbnQpe1xuLy8gICAgIGlmKGV2ZW50LndoaWNoPT0nMjcnKXtcbi8vICAgICAgICQoJy5wb3B1cCcpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gICAgIGpRdWVyeSgnLnBvcHVwLScrbnVtYmVyKS5mYWRlSW4oNTAwKTtcbi8vICAgICBqUXVlcnkoJy5wb3B1cC0nK251bWJlcikuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbi8vICAgfSk7XG4gIFxuICAvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU3Mzc1NDI3L211bHRpcGxlLXBvcHVwLWluLXNhbWUtcGFnZVxuICAvLyAvL2Nsb3NlIHBvcHVwXG4gIC8vICQoJy5wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gICBpZiggJChldmVudC50YXJnZXQpLmlzKCcucG9wdXAtY2xvc2UnKSB8fCAkKGV2ZW50LnRhcmdldCkuaXMoJy5wb3B1cCcpICkge1xuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xuICBcbiAgLy8gLy9jbG9zZSBwb3B1cCB3aGVuIGNsaWNraW5nIHRoZSBlc2Mga2V5Ym9hcmQgYnV0dG9uXG4gIC8vICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gICAgIGlmKGV2ZW50LndoaWNoPT0nMjcnKXtcbiAgLy8gICAgICAgJCgnLnBvcHVwJykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcblxuXG5cblxuICAvL1NsaWVkZXIgcGFnZS1zbGlkZXItaW5kaXZpZHVlbGxcbiAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlJbmRpdmlkdWFsbHlcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IDIuNSxcbiAgICAvL3NsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIH0sXG4gIH0pO1xuXG5cblxuXG4gIC8vY2FjaGUgcmVzdWx0IGRpc3RhbmNlcyBmb3IgdGhpcyBsb2NhdGlvblxuICBsZXQgZGlzdGFudF9yZXN1bHRzID0ge307XG5cbiAgY29uc3QgYnVpbGRfY25fYmxvY2sgPSBmdW5jdGlvbihjbl9jb2RlLCBsb2NzKXtcbiAgICAvL3Nob3cgZGlzdGFudCByZXN1bHQgd2l0aCBkYXRhXG5cbiAgICAvKlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHJ5XCI+REU8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkFMREVOSE9WRU48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5DQURPTFpCVVJHPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SVNFUkxPSE48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImttXCI+XG4gICAgICAgICAgICAgICAgPGxpPjIwPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MzA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4xMDA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKi9cbiAgICAgbGV0IHRpdGxlcyA9IFtdO1xuICAgICBsZXQga21zID0gW107XG4gICAgIGpRdWVyeS5lYWNoKGxvY3MsIGZ1bmN0aW9uKGksIGxvYykge1xuICAgICAgICB0aXRsZXMucHVzaCgnPGxpPicgKyBsb2MudGl0bGUgKyAnPC9saT4nKTtcbiAgICAgICAga21zLnB1c2goJzxsaT4nICsgbG9jLmRpc3RhbmNlICsgJzwvbGk+Jyk7XG4gICAgIH0pXG4gICAgIGNvbnN0IHRpdGxlX3N0ciA9IHRpdGxlcy5qb2luKFwiXCIpO1xuICAgICBjb25zdCBrbV9zdHIgPSBrbXMuam9pbihcIlwiKTtcbiAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibG9jYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHJ5XCI+JHtjbl9jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAke3RpdGxlX3N0cn1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJrbVwiPlxuICAgICAgICAgICAgICAgICR7a21fc3RyfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+YDtcbiAgfVxuICBjb25zdCBzaG93X2Rpc3RhbnRfcmVzdWx0ID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgY29uc29sZS5sb2coJ2RhdGE6JywgZGF0YSlcbiAgICBsZXQgYmxvY2tzID0gW11cbiAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihjbl9jb2RlLCBsb2NzKSB7XG4gICAgICAgIGJsb2Nrcy5wdXNoKGJ1aWxkX2NuX2Jsb2NrKGNuX2NvZGUsIGxvY3MpKTtcbiAgICB9KTtcbiAgICBjb25zdCBsb2Nfc3RyID0gYmxvY2tzLmpvaW4oXCJcIik7XG4gICAgY29uc3QgZWxlID0galF1ZXJ5KFwiLmJvZHktbG9jYXRpb24tbGlzdFwiKTtcbiAgICBlbGUuZmluZCgnLmxvY2F0aW9uLWxpc3QnKS5yZW1vdmUoKS5lbmQoKTtcbiAgICBlbGUuYXBwZW5kKGxvY19zdHIpO1xuICAgIGNvbnNvbGUubG9nKCdsb2Nfc3RyOicsIGxvY19zdHIpXG4gIH1cblxuICBqUXVlcnkoJy5sb2NhdGlvbi1pbnB1dCBpbnB1dCcpLm9uKCdibHVyJywgZnVuY3Rpb24oZSl7XG4gICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24gaW5wdXQgdmFsdWU6JywgdGhpcy52YWx1ZSk7XG4gICAgICBjb25zdCBsb2MgPSB0aGlzLnZhbHVlO1xuICAgICAgaWYgKGxvYyBpbiBkaXN0YW50X3Jlc3VsdHMpe1xuICAgICAgICByZXR1cm4gc2hvd19kaXN0YW50X3Jlc3VsdChkaXN0YW50X3Jlc3VsdHNbbG9jXSk7XG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSAnL3dwLWpzb24vbG9jYXRpb25kaXN0YW5jZS92MS9kYXRhLz9sb2M9JyArIGxvYztcbiAgICAgIGpRdWVyeS5nZXQodXJsKS5kb25lKGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgIGlmKHJlcyl7XG4gICAgICAgICAgICBkaXN0YW50X3Jlc3VsdHNbbG9jXSA9IHJlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaG93X2Rpc3RhbnRfcmVzdWx0KHJlcyk7XG4gICAgICB9KVxuICB9KVxuXG5cbiIsIlxuY2xhc3MgY29udGFjdERhdGEge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2V0RGF0YUlkKClcbiAgICAgICAgdGhpcy5nZXRQcm9jZWR1cmVMb2NhdGlvbigpXG5cbiAgICB9XG5cblxuICAgIFxuXG4gICAgZ2V0UHJvY2VkdXJlTG9jYXRpb24oKXtcbiAgICAgICAgdGhpcy5kYXRhSWQgPSBqUXVlcnkoXCIjZGF0YUlkXCIpLnZhbCgpXG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWR1cmVsb2NhdGlvbi92MS9kYXRhLz90ZXJtPScgKyB0aGlzLmRhdGFJZCwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBsZXQgbG9jYXRpb25IdG1sID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnlfZGF0YSA9IFtdO1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oaSwgaXRlbSkge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZighY291bnRyeV9kYXRhLmluY2x1ZGVzKGl0ZW0uY291bnRyeV9jb2RlKSl7XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jb3VudHJ5X2NvZGUgPT0gaXRlbS5jb3VudHJ5X2NvZGUpe1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkh0bWwgKz0gXCI8bGk+XCIgKyAgaXRlbS5jb3VudHJ5X2NvZGUgKyBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlfZGF0YS5wdXNoKGl0ZW0uY291bnRyeV9jb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHVsID0galF1ZXJ5KCcjcHJvY2VkdXJlbG9jYXRpb24nKVxuICAgICAgICAgICAgdWwuYXBwZW5kKGxvY2F0aW9uSHRtbCk7XG4gICAgICAgIH0pICBcbiAgICB9XG5cblxuXG5cblxuICAgIGdldFN3aXBlckpTKCl7XG4gICAgICAgIC8vQ29udGFjdCBQcm9jZWVkaW5nc1xuICAgICAgICB2YXIgc3dpcGVySW1hZ2UgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVySW1nZVwiLCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB2YXIgc3dpcGVyQ29udGFjdCA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJDb250YWt0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBlbDogJy53cmFwcGVyLXBhZ2luYXRpb24gPiAuc3dpcGVyLXBhZ2luYXRpb24tbmV3JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjwvc3Bhbj4nOztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgIG5leHRFbDogXCIud3JhcHBlci1wYWdpbmF0aW9uID4gLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICAgICAgICAgIHByZXZFbDogXCIud3JhcHBlci1wYWdpbmF0aW9uID4gLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3dpcGVySW1hZ2UuY29udHJvbGxlci5jb250cm9sID0gc3dpcGVyQ29udGFjdDtcbiAgICAgICAgc3dpcGVyQ29udGFjdC5jb250cm9sbGVyLmNvbnRyb2wgPSBzd2lwZXJJbWFnZTtcbiAgICB9XG5cblxuICAgIGdldERhdGFJZCgpe1xuICAgICAgICB0aGlzLmdldFN3aXBlckpTKClcbiAgICAgICAgdGhpcy5kYXRhSWQgPSBqUXVlcnkoXCIjZGF0YUlkXCIpLnZhbCgpXG4gICAgICAgIHZhciBpbWcgPSAnJztcbiAgICAgICAgalF1ZXJ5LmdldEpTT04ocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZWRpbmdzL3YxL2RhdGEvP3Rlcm09JyArIHRoaXMuZGF0YUlkLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnByb2NlZWRpbmdzLWNvbnRhY3QnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm5vLWRhdGEnKS5odG1sKCc8aDE+S2VpbiBTdGFuZG9ydCBhdXNnZXfDpGhsdDwvaDE+JylcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wcm9jZWVkaW5ncy1jb250YWN0JykucmVtb3ZlQ2xhc3MoJ3RvYycpXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuY2FsbC10by1hY3Rpb24nKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucHJvY2VlZGluZ3MtY29udGFjdCcpLnJlbW92ZUF0dHIoJ2RhdGEtdG9jdGl0bGUnKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy9BcnJheSB0cnVlXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubm8tZGF0YScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItY29udGFjdC1qc1wiKS5hZnRlcihgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXItY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dmFsLmNvdW50cnlfY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3ZhbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS1jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiR7dmFsLnN0cmVldF9udW1iZXJ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiR7dmFsLnBvc3Rjb2RlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke3ZhbC5jb3VudHJ5fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImVtYWlsXCI+PGEgaHJlZj1cIlwiPiR7dmFsLmVtYWlsfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwaG9uZVwiPjxhIGhyZWY9XCJcIj4ke3ZhbC5waG9uZX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1kZWNvci1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3ZhbC5wZXJtYWxpbmt9XCI+WnVtIFN0YW5kb3J0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWRlY29yLXJpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbCl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbC5zbGlkZXJfaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwudGh1bWJuYWlsKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsLnNsaWRlcl9pbWFnZSAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nICs9IGA8aW1nIHNyYz1cIiR7dmFsLnNsaWRlcl9pbWFnZX1cIiBhbHQ9XCIke3ZhbC5uYW1lfVwiIGhlaWdodD1cIiR7dmFsLnNsaWRlcl9pbWFnZV9zaXplLnByb2NlZWRpbmdfaGVhZGVyLndpZHRofVwiIHdpZHRoPVwiJHt2YWwuc2xpZGVyX2ltYWdlX3NpemUucHJvY2VlZGluZ19oZWFkZXIuaGVpZ2h0fVwiPmA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWwuc2xpZGVyX2ltYWdlX3NpemUucHJvY2VlZGluZ19oZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZSBpZih2YWwudGh1bWJuYWlsICE9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbWcgKz0gYDxpbWcgc3JjPVwiJHt2YWwudGh1bWJuYWlsfVwiIGFsdD1cIiR7dmFsLm5hbWV9XCI+YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbWcgKz0gYDxpbWcgc3JjPVwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS82NDB4MzYwL2ZmZi9hYWFcIiBhbHQ9XCJcIj5gO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLWltYWdlLWpzXCIpLmFmdGVyKGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdERhdGFcbiIsImNsYXNzIGNvbnRhY3RQZXJzb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy9mdW5jdGlvblxuICAgICAgICB0aGlzLmdldERhdGEoKSAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpe1xuICAgICAgICB0aGlzLmRhdGFJZCA9IGpRdWVyeShcIiNkYXRhSWRDb250YWN0XCIpLnZhbCgpXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhSWQpXG4gICAgICAgIC8vIGpRdWVyeS5nZXRKU09OKCAnJyArIHRoaXMuZGF0YUlkLCBmdW5jdGlvbigkZGF0YSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFJZClcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBlcnNvbiIsImNsYXNzIGxvY2F0aW9uRGF0YXtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdldExvYWNhdGlvbkRhdGEoKVxuICAgIH1cblxuICAgIGdldExvYWNhdGlvbkRhdGEoKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TG9hY2F0aW9uRGF0YSBpbiBsb2NhdGlvbi5qcycpO1xuICAgICAgICB0aGlzLmRhdGFJZCA9IGpRdWVyeShcIiNkYXRhSWRMb2FjYXRpb25cIikudmFsKCk7XG4gICAgICAgIGNvbnN0IGNhdGlkID0gdGhpcy5kYXRhSWQ/dGhpcy5kYXRhSWQ6Jyc7XG4gICAgICAgIGNvbnN0IHVybCA9IHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9sb2NhdGlvbnJlc3VsdC92MS9kYXRhLz90ZXJtPScgKyBjYXRpZDtcbiAgICAgICAgalF1ZXJ5LmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldExvYWNhdGlvbkRhdGEgZGF0YTonLCBkYXRhKTtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICAgICAgLy9ncm91cGluZyBieSBjYXRlZ29yeSBmaXJzdFxuXG4gICAgICAgICAgICBsZXQgYWxsQ2F0cyA9IHt9O1xuXG4gICAgICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHRzLCBmdW5jdGlvbihpLCBpdGVtKSB7XG5cbiAgICAgICAgICAgICAgICBpZighaXRlbS5jYXQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEoaXRlbS5jYXQgaW4gYWxsQ2F0cykpe1xuICAgICAgICAgICAgICAgICAgICBhbGxDYXRzW2l0ZW0uY2F0XSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGxDYXRzW2l0ZW0uY2F0XS5wdXNoKGl0ZW0ubmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRMb2FjYXRpb25EYXRhIGFsbENhdHM6JywgYWxsQ2F0cyk7XG4gICAgICAgICAgICBsZXQgbG9jYXRpb25IdG1sID0gXCJcIjtcblxuICAgICAgICAgICAgalF1ZXJ5LmVhY2goYWxsQ2F0cywgZnVuY3Rpb24oY2F0LCBsb2NzKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uSHRtbCArPSBcIjxsaT5cIiArIGNhdCArICc8dWw+JztcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChsb2NzLCBmdW5jdGlvbihqLCBsb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25IdG1sICs9IFwiPGxpPlwiICsgbG9jICsgXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uSHRtbCArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdWwgPSBqUXVlcnkoJyN3cmFwcGVyLWxvY2F0aW9uPnVsJyk7XG4gICAgICAgICAgICAvLyByZW1vdmUgaXRzIGNoaWxkcmVuXG4gICAgICAgICAgICB1bC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICAgICAgdWwuYXBwZW5kKGxvY2F0aW9uSHRtbCk7XG5cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uRGF0YSIsImNsYXNzIHByb2NlZWRpbmdEYXRhIHtcblxuXG4gICAgLyogICovXG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vQnV0dG9uc1xuICAgICAgICB0aGlzLnVzZUJ1dHRvbiA9IGpRdWVyeShcIiN1c2VcIilcbiAgICAgICAgdGhpcy51c2VMb2NhdGlvbkJ1dHRvbiA9IGpRdWVyeShcIiNsb2NhdGlvblwiKVxuICAgICAgICB0aGlzLnVzZVNlYXJjaEJ1dHRvbiA9IGpRdWVyeShcIiNzZXJhY2hcIilcbiAgICAgICAgXG4gICAgICAgIC8vRWxlbWVudGVcbiAgICAgICAgdGhpcy53cmFwcGVyID0galF1ZXJ5KFwiI3dyYXBwZXJcIilcbiAgICAgICAgdGhpcy5iZ0Rpc3RhbmNlID0galF1ZXJ5KFwiI2JnLWRpc3RhbmNlXCIpXG4gICAgICAgIHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMgPSBqUXVlcnkoXCIjd3JhcHBlci1zZXJhY2gtcmVzdWx0c1wiKVxuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMgPSBqUXVlcnkoXCIjd3JhcHBlci1sb2NhdGlvbi1yZXN1bHRzXCIpXG4gICAgICAgIHRoaXMud3JhcHBlclVzZVJlc3VsdHMgPSBqUXVlcnkoXCIjd3JhcHBlci11c2UtcmVzdWx0c1wiKVxuXG4gICAgICAgIHRoaXMubG90dGlldmlldyA9IGpRdWVyeShcIiNsb3R0aWV2aWV3XCIpXG4gICAgICAgIHRoaXMub3BlbkNsb3NlQnV0dG9uID0galF1ZXJ5KFwiI29wZW4tY2xvc2UtYnV0dG9uXCIpXG5cbiAgICAgICAgdGhpcy51c2VGaWx0ZXIgPSBqUXVlcnkoJy51c2UtZmlsdGVyJylcbiAgICAgICAgdGhpcy5sb2NhdEZpbHRlciA9IGpRdWVyeSgnLmxvY2F0aW9uLWZpbHRlcicpIFxuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlciA9IGpRdWVyeSgnLnNlcmFjaC1maWx0ZXInKVxuICAgICAgICB0aGlzLmZpbHRlck1haW4gPSBqUXVlcnkoJy5maWx0ZXItbWFpbicpXG4gICAgICAgIHRoaXMuZmlsdGVyQm9keSA9IGpRdWVyeSgnLmZpbHRlci1ib2R5JylcblxuICAgICAgICB0aGlzLmV2ZW50cygpXG4gICAgICAgIC8vdGhpcy5sb3R0aWUoKSBcbiAgICAgICAgdGhpcy5nZXREYXRhUmVzdWx0cygpXG4gICAgICAgIHRoaXMuZ2V0RGF0YVVzZSgpXG4gICAgICAgIHRoaXMuZ2V0RGF0YUxvY2F0aW9ucygpXG4gICAgfVxuXG4gICAgZXZlbnRzKCl7XG4gICAgICAgIHRoaXMudXNlU2VhcmNoQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmVTZXJhY2hSZXN1bHRzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMudXNlTG9jYXRpb25CdXR0b24ub24oXCJjbGlja1wiLCB0aGlzLmFjdGl2ZUxvY2F0aW9uUmVzdWx0cy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnVzZUJ1dHRvbi5vbihcImNsaWNrXCIsIHRoaXMuYWN0aXZlVXNlUmVzdWx0cy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLm9wZW5DbG9zZUJ1dHRvbi5vbihcImNsaWNrXCIsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSlcblxuICAgIH1cblxuICAgIHR5cGluZ0xvZ2ljKCl7fVxuXG4gICAgLy9HaWIgbWlyIGRpZSBmcmVpZSBTdWNoZVxuICAgIGdldERhdGFTZWFyY2goKXt9XG5cbiAgICAvL0dpYiBtaXIgYWxsZSBLYXRlZ29yaWVuIHZvbiBWZXJmYWhyZW5cbiAgICBnZXREYXRhVXNlKCl7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhcmVzdGFwaS92MS9kYXRhLycsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ290IGRhdGEgaW4gZ2V0RGF0YVVzZTonLCBkYXRhKVxuICAgICAgICAgICAgdmFyIGNhdCA9IGRhdGEuY2F0ZWdvcmllO1xuXG4gICAgICAgICAgICB2YXIgcGFydHlIVE1MID0gJyc7XG4gICAgICAgICAgICB2YXIgdmFsSFRNTCA9ICcnO1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2goY2F0LCBmdW5jdGlvbihpLCBvYmplY3Qpe1xuXG4gICAgICAgICAgICAgICAgaWYob2JqZWN0Lm5hbWUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW0gPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZih2YWxIVE1MICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSBcIjx1bD5cIiArIHZhbEhUTUwgKyBcIjwvdWw+XCIgKyAnPC9saT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsSFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9ICc8bGkgY2xhc3M9XCJpdGVtIGZpcnN0LWNoaWxkXCI+PHNwYW4gY2xhc3M9XCJtYWluLWhlYWRcIj4nICsgb2JqZWN0Lm5hbWUgKyAnPC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQpe1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbEhUTUwgKz0gJzxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCInICsgb2JqZWN0LnRpdGxlICsgJ1wiIG5hbWU9XCJjYXRbXVwiPicgKyBvYmplY3QudGl0bGUgKyAnPC9saT4nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXJcIikuYXBwZW5kKHBhcnR5SFRNTCk7XG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgIC8vR2liIG1pciBkaWUgU3RhbmRvcnRlIG5hY2ggVmVyZmFocmVuXG4gICAgZ2V0RGF0YUxvY2F0aW9ucygpe1xuXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhbG9jYXRpb25zcmVzdGFwaS92MS9kYXRhLycsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ290IGRhdGEgaW4gZ2V0RGF0YVVzZTonLCBkYXRhKVxuICAgICAgICAgICAgdmFyIGNhdCA9IGRhdGEuY2F0ZWdvcmllO1xuXG4gICAgICAgICAgICB2YXIgcGFydHlIVE1MID0gJyc7XG4gICAgICAgICAgICB2YXIgdmFsSFRNTCA9ICcnO1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2goY2F0LCBmdW5jdGlvbihpLCBvYmplY3Qpe1xuXG4gICAgICAgICAgICAgICAgaWYob2JqZWN0Lm5hbWUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW0gPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZih2YWxIVE1MICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSBcIjx1bD5cIiArIHZhbEhUTUwgKyBcIjwvdWw+XCIgKyAnPC9saT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsSFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9ICc8bGkgY2xhc3M9XCJpdGVtIGZpcnN0LWNoaWxkXCI+PHNwYW4gY2xhc3M9XCJtYWluLWhlYWRcIj4nICsgb2JqZWN0Lm5hbWUgKyAnPC9zcGFuPicgO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iamVjdC50aXRsZSAhPT0gdW5kZWZpbmVkKXtcblxuICAgICAgICAgICAgICAgICAgICB2YWxIVE1MICs9ICc8bGk+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiJyArIG9iamVjdC5wb3N0aWQgKyAnXCIgbmFtZT1cImxvY2F0aW9uc1tdXCI+JyArIG9iamVjdC50aXRsZSArICc8L2xpPic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1sb2NhdGlvbnNcIikuYXBwZW5kKHBhcnR5SFRNTCk7XG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy9aZWlnIG1pciBhbGxlIEVyZ2Vibmlzc2UgYW4uXG4gICAgZ2V0RGF0YVJlc3VsdHMoKXtcblxuICAgICAgdmFyIHNlbGVjdGVkID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLWxvY2F0aW9ucyBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh0aGlzLnZhbHVlKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIFxuICAgICAgICB2YXIgc2VyaWFsaXplZEZvcm0gPSB7bG9jYXRpb25zOnNlbGVjdGVkfTtcblxuICAgICAgICBqUXVlcnkucG9zdChwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhL3YxL2RhdGEvJywgc2VyaWFsaXplZEZvcm0sIGZ1bmN0aW9uKGRhdGEpIFxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcHJvY2VlZGluZ3MgPSBkYXRhLnByb2NlZWRpbmdzcmVzdWx0cztcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKHByb2NlZWRpbmdzLCBmdW5jdGlvbihrZXksIHZhbCl7XG5cbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1yZXN1bHRzXCIpLmFmdGVyKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dmFsLnRodW1ibmFpbCA/IGA8aW1nIHNyYz1cIiR7dmFsLnRodW1ibmFpbH1cImAgOiBgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MFwiPmAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7dmFsLnRpdGxlfTwvcD4gICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLypqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhL3YxL2RhdGEvJywgZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgIHZhciBwcm9jZWVkaW5ncyA9IGRhdGEucHJvY2VlZGluZ3NyZXN1bHRzO1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2gocHJvY2VlZGluZ3MsIGZ1bmN0aW9uKGtleSwgdmFsKXtcblxuICAgICAgICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLXJlc3VsdHNcIikuYWZ0ZXIoYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt2YWwudGh1bWJuYWlsID8gYDxpbWcgc3JjPVwiJHt2YWwudGh1bWJuYWlsfVwiYCA6IGA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwXCI+YCB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt2YWwudGl0bGV9PC9wPiAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KSovXG4gICAgfVxuXG4gICAgLy9BY3RpdmllcnVuZ1xuICAgIGFjdGl2ZVVzZVJlc3VsdHMoKXtcbiAgICAgICAgaWYgKCF0aGlzLndyYXBwZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuVXNlT3ZlcmxheSgpXG4gICAgICAgICAgICAsIDEwMClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy90aGlzLnJ1bkxvdHRpZSgpXG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKVxuICAgICAgICAgICAgdGhpcy5vcGVuVXNlT3ZlcmxheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmVMb2NhdGlvblJlc3VsdHMoKXtcbiAgICAgICAgaWYgKCF0aGlzLndyYXBwZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTG9jYXRpb25PdmVybGF5KClcbiAgICAgICAgICAgICwgMTAwKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpXG4gICAgICAgICAgICB0aGlzLm9wZW5Mb2NhdGlvbk92ZXJsYXkoKVxuICAgICAgICB9ICBcbiAgICB9XG5cbiAgICBhY3RpdmVTZXJhY2hSZXN1bHRzKCl7IFxuICAgICAgICBpZiAoIXRoaXMud3JhcHBlci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5TZWFyY2hPdmVybGF5KClcbiAgICAgICAgICAgICwgMTAwKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpXG4gICAgICAgICAgICB0aGlzLm9wZW5TZWFyY2hPdmVybGF5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdyYXBwZXJBY3RpdmUoKXtcbiAgICAgICAgaWYodGhpcy53cmFwcGVyLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBpZih0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLmhhc0NsYXNzKCdyZXN1bHRzLWRpc3BsYXknKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVVc2VSZXN1bHRzKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxvY2F0aW9uUmVzdWx0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZXJhY2hSZXN1bHRzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5oYXNDbGFzcygncmVzdWx0cy1kaXNwbGF5Jykpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVXNlUmVzdWx0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMb2NhdGlvblJlc3VsdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VyYWNoUmVzdWx0cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLndyYXBwZXJVc2VSZXN1bHRzLmhhc0NsYXNzKCdyZXN1bHRzLWRpc3BsYXknKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVVc2VSZXN1bHRzKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxvY2F0aW9uUmVzdWx0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZXJhY2hSZXN1bHRzKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9EZWFrdGl2aWVydW5nXG4gICAgcmVtb3ZlVXNlUmVzdWx0cygpe1xuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLmFkZENsYXNzKCdyZXN1bHRzLW5vbmUnKVxuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLnJlbW92ZUNsYXNzKCdyZXN1bHRzLWRpc3BsYXknKVxuICAgICAgICB0aGlzLmxvY2F0RmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlci5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICB9ICAgXG5cbiAgICByZW1vdmVMb2NhdGlvblJlc3VsdHMoKXtcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLmFkZENsYXNzKCdyZXN1bHRzLW5vbmUnKVxuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpXG4gICAgICAgIHRoaXMudXNlRmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlci5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZW1vdmVTZXJhY2hSZXN1bHRzKCl7XG4gICAgICAgIHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMuYWRkQ2xhc3MoJ3Jlc3VsdHMtbm9uZScpXG4gICAgICAgIHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpXG4gICAgICAgIHRoaXMudXNlRmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLmxvY2F0RmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIC8vT3ZlcmxheSBPcGVuIEZpbHRlclxuICAgIG9wZW5TZWFyY2hPdmVybGF5KCl7XG4gICAgICAgIHRoaXMub3ZlcmxheSgpXG4gICAgICAgIHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Jlc3VsdHMtbm9uZScpXG4gICAgICAgIHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMuYWRkQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpXG4gICAgICAgIHRoaXMuc2VyYWNoRmlsdGVyLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIG9wZW5Mb2NhdGlvbk92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy5vdmVybGF5KClcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLnJlbW92ZUNsYXNzKCdyZXN1bHRzLW5vbmUnKVxuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMuYWRkQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpXG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgb3BlblVzZU92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy5vdmVybGF5KClcbiAgICAgICAgdGhpcy53cmFwcGVyVXNlUmVzdWx0cy5yZW1vdmVDbGFzcygncmVzdWx0cy1ub25lJylcbiAgICAgICAgdGhpcy53cmFwcGVyVXNlUmVzdWx0cy5hZGRDbGFzcygncmVzdWx0cy1kaXNwbGF5JylcbiAgICAgICAgdGhpcy51c2VGaWx0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgLy9CYXNpY1xuICAgIG92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy53cmFwcGVyLmFkZENsYXNzKCd3cmFwcGVyLWZpbHRlci1zdHlsZScpXG4gICAgICAgIHRoaXMuYmdEaXN0YW5jZS5hZGRDbGFzcygnYmctZGlzdGFuY2UnKVxuICAgICAgICB0aGlzLm9wZW5DbG9zZUJ1dHRvbi5hZGRDbGFzcygnY2xvc2UtYnV0dG9uLWRpc3BsYXknKVxuICAgICAgICB0aGlzLndyYXBwZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMuZmlsdGVyTWFpbi5hZGRDbGFzcygnYWN0aXZlLW1haW4nKVxuICAgICAgICB0aGlzLmZpbHRlckJvZHkuYWRkQ2xhc3MoJ2FjdGl2ZS1tYWluJylcbiAgICB9XG5cbiAgICAvLyBydW5Mb3R0aWUoKXtcbiAgICAvLyAgICAgaWYgKCF0aGlzLndyYXBwZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdMb3R0aScpXG4gICAgLy8gICAgICAgICB0aGlzLmxvdHRpZXZpZXcuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAvLyAgICAgICAgIHRoaXMud3JhcHBlci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFxuICAgIC8vICAgICAgICAgICAgIHRoaXMubG90dGlldmlldy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpLCBcbiAgICAvLyAgICAgICAgIDI1MDApXG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICAgIHRoaXMucmVtb3ZlVXNlUmVzdWx0cygpXG4gICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKClcbiAgICAgICAgdGhpcy5yZW1vdmVTZXJhY2hSZXN1bHRzKClcbiAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUNsYXNzKCd3cmFwcGVyLWZpbHRlci1zdHlsZScpXG4gICAgICAgIHRoaXMuYmdEaXN0YW5jZS5yZW1vdmVDbGFzcygnYmctZGlzdGFuY2UnKVxuICAgICAgICB0aGlzLm9wZW5DbG9zZUJ1dHRvbi5yZW1vdmVDbGFzcygnY2xvc2UtYnV0dG9uLWRpc3BsYXknKSBcbiAgICAgICAgdGhpcy5maWx0ZXJNYWluLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWFpbicpXG4gICAgICAgIHRoaXMuZmlsdGVyQm9keS5yZW1vdmVDbGFzcygnYWN0aXZlLW1haW4nKVxuICAgICAgICB0aGlzLmdldERhdGFSZXN1bHRzKClcbiAgICB9XG5cbiAgICAvLyBsb3R0aWUoKXtcbiAgICAvLyAgICAgbGV0IGljb25Ta2lwRm9yd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3R0aWUnKTtcbiAgICAvLyAgICAgbGV0IGFuaW1hdGlvblNraXBGb3J3YXJkID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xuICAgIC8vICAgICAgICAgICAgIGNvbnRhaW5lcjogaWNvblNraXBGb3J3YXJkLFxuICAgIC8vICAgICAgICAgICAgIHJlbmRlcmVyOiAnc3ZnJyxcbiAgICAvLyAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIHBhdGg6IFwiL3dwLWNvbnRlbnQvdGhlbWVzL2hhZXJ0aGEvaW1hZ2VzL0hHX0xvZ29fQW5pbWF0aW9uX0xBMi5qc29uXCJcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGFuaW1hdGlvblNraXBGb3J3YXJkLnBsYXlTZWdtZW50cyhbMCw2MF0sIHRydWUpO1xuICAgIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZWVkaW5nRGF0YVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGdldERhdGFVc2UoKXtcbi8vICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhcmVzdGFwaS92MS9kYXRhLycsIGZ1bmN0aW9uKGRhdGEpe1xuLy8gICAgICAgICAvL3ZhciBjYXQgPSBkYXRhLmNhdGVnb3JpZTtcblxuLy8gICAgICAgICAvLyB2YXIgY2F0RGF0ZSA9IHt9O1xuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgLy8gICAgIHZhciByID0gY2F0RGF0ZVt0aGlzLnJlc3VsdHNdID0gW107XG4vLyAgICAgICAgIC8vICAgICByLnB1c2godGhpcyk7XG4vLyAgICAgICAgIC8vIH0pO1xuXG4vLyAgICAgICAgIC8vY29uc29sZS5sb2coY2F0RGF0ZSlcblxuXG4gIFxuXG4vLyAgICAgICAgIHZhciBtYW5kcmlsbF9ldmVudHMgPSBkYXRhLmNhdGVnb3JpZTtcblxuLy8gICAgICAgICBjb25zb2xlLmxvZyhtYW5kcmlsbF9ldmVudHMpXG5cbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1swXTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1s0XTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1s5XTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1sxM107XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbMTZdO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzIxXTtcblxuXG4vLyAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdCwgZnVuY3Rpb24oaSwgb2JqZWN0KXtcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaSArJygnK29iamVjdC5sZW5ndGgrJyknKVxuLy8gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QpO1xuLy8gICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhvYmplY3QpXG4vLyAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqZWN0KVxuLy8gICAgICAgICAgICAgLy8galF1ZXJ5LmVhY2gob2JqZWN0LCBmdW5jdGlvbiAoaW5kZXgsIG9iaikge1xuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coaW5kZXgpXG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvYmpbaW5kZXhdKTtcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9iailcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9ialtpXSlcbi8vICAgICAgICAgICAgIC8vICAgICAvLyBqUXVlcnkuZWFjaChvYmosIGZ1bmN0aW9uIChpLCB2YXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YXJyKVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YXJyLnBlcm1hbGluaylcbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZhcnIudGl0bGUpXG5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIikuYXBwZW5kKGBcbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgPHVsIGlkPVwid3JhcHBlci11clwiPlxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgPGxpPiAke3ZhcnJbMF19IDwvbGk+XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICA8bGk+ICR7dmFyci50aXRsZX0gPC9saT5cbiAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIDwvdWw+XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIGApXG5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyB9KTtcblxuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqICk7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cob2JqW2luZGV4XSk7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvYmoucGVybWFsaW5rKTtcblxuXG5cbi8vICAgICAgICAgICAgIC8vIH0pO1xuLy8gICAgICAgICB9KTtcblxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGksIGUpIHtcbi8vICAgICAgICAgLy8gICAgIGpRdWVyeS5lYWNoKGUsIGZ1bmN0aW9uKGtleSwgYXJyKSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYXJyKVxuLy8gICAgICAgICAvLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGFyciwgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKXtcbi8vICAgICAgICAgLy8gICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZSlcbi8vICAgICAgICAgLy8gICAgICAgICAvLyB9KVxuLy8gICAgICAgICAvLyAgICAgfSk7XG4vLyAgICAgICAgIC8vIH0pXG5cblxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGNhdCwgZnVuY3Rpb24oaSwgaXRlbSkge1xuXG4vLyAgICAgICAgIC8vICAgICBqUXVlcnkoXCIjd3JhcHBlci11c2UtcmVzdWx0c1wiKS5hcHBlbmQoYFxuLy8gICAgICAgICAvLyAgICAgPHVsIGlkPVwid3JhcHBlci11clwiPlxuICAgICAgICAgICAgICAgIFxuXG4vLyAgICAgICAgIC8vICAgICAgICAgJHsgalF1ZXJ5LmVhY2goaXRlbSwgZnVuY3Rpb24oa2V5LCBhcnJ5KXtcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgYDxsaT4gJHthcnJ5LnBlcm1hbGlua30gICR7YXJyeS50aXRsZX08L2xpPmBcbi8vICAgICAgICAgLy8gICAgICAgICB9KSB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgLy8gICAgIDwvdWw+XG4vLyAgICAgICAgIC8vICAgICBgKVxuXG4vLyAgICAgICAgIC8vIH0pO1xuXG5cblxuLy8gICAgIC8vICAgICBkYXRhLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSkpXG4vLyAgICAgLy8gICAgLy9kYXRhLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSArIGl0ZW0ucGVybWFsaW5rICsgaXRlbS50aXRlbCkpXG5cbi8vICAgICAvLyAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIikuYXBwZW5kKGBcbi8vICAgICAvLyAgICAgPHVsIGlkPVwid3JhcHBlci11clwiPlxuLy8gICAgIC8vICAgICAke2RhdGEuY2F0ZWdvcmllLm1hcCggaXRlbSA9PiBpdGVtICkgfVxuLy8gICAgIC8vICAgICA8L3VsPlxuLy8gICAgIC8vICAgICBgKVxuXG5cblxuLy8gICAgICAgICAvLyB2YXIgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cblxuLy8gICAgICAgICAvLyB2YXIgY2F0UmVzdWx0cyA9IGRhdGEuY2F0ZWdvcmllO1xuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGNhdFJlc3VsdHMsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbi8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coaXRlbSk7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpKTtcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0udGl0bGUpO1xuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5wZXJtYWxpbmspO1xuLy8gICAgICAgICAvLyAgICAgaXRlbS5yZXN1bHRzLm1hcCggaXRlbSA9PiBpdGVtLnBlcm1hbGluaylcblxuLy8gICAgICAgICAvLyB9KTtcblxuLy8gICAgICAgICAvL2xldCBjYXRSZXN1bHRzID0gbnVtYmVyQXJyYXkubWFwKChudW0pID0+IG51bS50aXRsZSlcblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLGZ1bmN0aW9uKCl7XG5cbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCB0aGlzLnRpdGxlICx0aGlzLnBlcm1hbGluayk7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgLy8gICAgIH0pXG5cblxuLy8gICAgICAgICAvLy9kZi5jYXRlZ29yaWVyZXN1bHRzLm1hcChpdGVtXyA9PiBjb25zb2xlLmxvZyhpdGVtXy5pZCkpXG5cblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChjYXRSZXN1bHRzLmNvbmNhdChyZXN1bHRzKSwgZnVuY3Rpb24oaSwgaXRlbSkge1xuLy8gICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhpdGVtLmNhdCk7XG5cbi8vICAgICAgICAgLy8gfSk7XG5cblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihpLCBlKSB7XG4vLyAgICAgICAgIC8vICAgICBqUXVlcnkuZWFjaChlLCBmdW5jdGlvbihrZXksIGFycikge1xuICAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYXJyLmNhdGVnb3JpZSk7ICAgICAgIFxuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIuLi5cIixhcnIuY2F0ZWdvcmllLCBhcnIubmFtZSk7XG5cbi8vICAgICAgICAgLy8gICAgIH0pO1xuLy8gICAgICAgICAvLyB9KVxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGksIGUpIHtcbi8vICAgICAgICAgLy8gICAgIGpRdWVyeS5lYWNoKGUsIGZ1bmN0aW9uKGtleSwgYXJyKSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgalF1ZXJ5LmVhY2goYXJyLCBmdW5jdGlvbihpbmRleCwgb2JqKSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLi4uXCIsIGluZGV4LCBvYmoudmFsdWUpO1xuLy8gICAgICAgICAvLyAgICAgICAgIH0pO1xuLy8gICAgICAgICAvLyAgICAgfSk7XG4vLyAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgXG4vLyAgICAgICAgIC8vdmFyIGNhdCA9IGRhdGE7XG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtheSwgdmFsKXtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZGF0YS5yZXN1bHRzLnBlcm1hbGluaylcbi8vICAgICAgICAgLy8gICAgIC8vdmFsLm1hcChpdGVtID0+IGA8bGk+PGEgaHJlZj1cIiR7aXRlbX1cIj4ke2l0ZW0udGl0bGV9PC9hPjwvbGk+YCkuam9pbihcIlwiKVxuLy8gICAgICAgICAvLyAgICAgLy92YWwuY2F0ZWdvcmllLm1hcCggaXRlbSA9PiBjb25zb2xlLmxvZyhpdGVtKSlcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh2YWwuaWQpXG4vLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHZhbClcblxuXG4vLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhrZXlzKTtcbi8vICAgICAgICAgLy8gICAgIC8vIGlmKHJ1c2FsdHMuaWQgPT0gY2F0LmlkKXtcbi8vICAgICAgICAgLy8gICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHJ1c2FsdHMudGl0bGUpXG4vLyAgICAgICAgIC8vICAgICAvLyB9XG4vLyAgICAgICAgIC8vIH0pXG4vLyAgICAgfSlcbi8vIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvZGlzdC9zY3JpcHRzL21haW5cIjogMCxcblx0XCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiOiAwLFxuXHRcImRpc3Qvc3R5bGVzL2FkbWluXCI6IDAsXG5cdFwiZGlzdC9zdHlsZXMvbWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoYWVydGhhXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2hhZXJ0aGFcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc2NyaXB0cy9tYWluLmpzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3Qvc3R5bGVzL21hZ25pZmljLXBvcHVwXCIsXCJkaXN0L3N0eWxlcy9hZG1pblwiLFwiZGlzdC9zdHlsZXMvbWFpblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3Qvc3R5bGVzL21hZ25pZmljLXBvcHVwXCIsXCJkaXN0L3N0eWxlcy9hZG1pblwiLFwiZGlzdC9zdHlsZXMvbWFpblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2Nzc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3Qvc3R5bGVzL21hZ25pZmljLXBvcHVwXCIsXCJkaXN0L3N0eWxlcy9hZG1pblwiLFwiZGlzdC9zdHlsZXMvbWFpblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zdHlsZXMvbWFnbmlmaWMtcG9wdXAuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkNvbnRhY3REYXRhIiwiUHJvY2VlZGluZ0RhdGEiLCJMb2NhdGlvbkRhdGEiLCJDb250YWN0UGVyc29uIiwiY29udGFjdGRhdGEiLCJwcm9jZWVkaW5nZGF0YSIsImxvY2F0aW9uZGF0YSIsImNvbnRhY3RwZXJzb24iLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWFpbkNsYXNzIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJ6b29tIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvcGVuZXIiLCJvcGVuZXJFbGVtZW50IiwiaXMiLCJmaW5kIiwiaWZyYW1lIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJpZCIsInVybCIsIm0iLCJtYXRjaCIsInNyYyIsInZpbWVvIiwibWFpbk5hdiIsImdldEVsZW1lbnRCeUlkIiwibmF2QmFyVG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInN3aXBlciIsIlN3aXBlciIsImVmZmVjdCIsImZhZGVFZmZlY3QiLCJjcm9zc0ZhZGUiLCJzbGlkZXNQZXJWaWV3Iiwic3BlZWQiLCJsb29wIiwicHJlbG9hZEltYWdlcyIsImxhenkiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiY2VudGVyZWRTbGlkZXMiLCJzcGFjZUJldHdlZW4iLCJyZW5kZXJCdWxsZXQiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJpc190b2MiLCJjc3NfY2xhc3MiLCJlYWNoIiwiYXBwZW5kIiwiYXR0ciIsImhpZGUiLCJpIiwicmVtb3ZlIiwiZW5kIiwicHJlcGVuZCIsIm9uIiwib25TY3JvbGwiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidGFyZ2V0IiwiaGFzaCIsIm1lbnUiLCJzdG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZXZlbnQiLCJzY3JvbGxQb3MiLCJjdXJyTGluayIsInJlZkVsZW1lbnQiLCJyZWZFbGVtZW50X3BvcyIsImhlYWRlcl9oZWlnaHQiLCJoZWlnaHQiLCJyZWZFbGVtZW50X3Bvc190b3RhbCIsInNjcm9sbFBvc190b3RhbCIsImNsaWNrIiwiYnRuIiwic2Nyb2xsIiwiZmFkZU91dCIsIm51bWJlciIsImRhdGEiLCJmYWRlSW4iLCJjc3MiLCJ3aGljaCIsImFqYXhOZXdzIiwiY3VycmVudFRhcmdldCIsImNsb3NldE5ld3NNb2RhbENhdGVnb3J5IiwiY2xvc2VzdCIsInBhcmVudCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJsZW5ndGgiLCJlbGVtZW50IiwidmFsIiwicHVzaCIsInMiLCJkYXRlIiwibm9uY2UiLCJvYmplY3RQb3N0IiwiYWN0aW9uIiwidGVybSIsInBvc3QiLCJwcm9jZWVkaW5nc0RhdGEiLCJhamF4Iiwic3VjY2VzcyIsInBvc3RzIiwiaHRtbCIsInNsaWRlc1Blckdyb3VwIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsImRpc3RhbnRfcmVzdWx0cyIsImJ1aWxkX2NuX2Jsb2NrIiwiY25fY29kZSIsImxvY3MiLCJ0aXRsZXMiLCJrbXMiLCJsb2MiLCJ0aXRsZSIsImRpc3RhbmNlIiwidGl0bGVfc3RyIiwiam9pbiIsImttX3N0ciIsInNob3dfZGlzdGFudF9yZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiYmxvY2tzIiwibG9jX3N0ciIsImVsZSIsInZhbHVlIiwiZ2V0IiwiZG9uZSIsInJlcyIsImNvbnRhY3REYXRhIiwiZ2V0RGF0YUlkIiwiZ2V0UHJvY2VkdXJlTG9jYXRpb24iLCJkYXRhSWQiLCJnZXRKU09OIiwicm9vdF91cmwiLCJsb2NhdGlvbkh0bWwiLCJjb3VudHJ5X2RhdGEiLCJpdGVtIiwiaW5jbHVkZXMiLCJjb3VudHJ5X2NvZGUiLCJ1bCIsInN3aXBlckltYWdlIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInN3aXBlckNvbnRhY3QiLCJjb250cm9sbGVyIiwiY29udHJvbCIsImdldFN3aXBlckpTIiwiaW1nIiwicmVtb3ZlQXR0ciIsImtleSIsImFmdGVyIiwibmFtZSIsInN0cmVldF9udW1iZXIiLCJwb3N0Y29kZSIsImNvdW50cnkiLCJlbWFpbCIsInBob25lIiwicGVybWFsaW5rIiwic2xpZGVyX2ltYWdlIiwic2xpZGVyX2ltYWdlX3NpemUiLCJwcm9jZWVkaW5nX2hlYWRlciIsIndpZHRoIiwiY29udGFjdFBlcnNvbiIsImdldERhdGEiLCJsb2NhdGlvbkRhdGEiLCJnZXRMb2FjYXRpb25EYXRhIiwiY2F0aWQiLCJyZXN1bHRzIiwiYWxsQ2F0cyIsImNhdCIsImoiLCJjaGlsZHJlbiIsInByb2NlZWRpbmdEYXRhIiwidXNlQnV0dG9uIiwidXNlTG9jYXRpb25CdXR0b24iLCJ1c2VTZWFyY2hCdXR0b24iLCJ3cmFwcGVyIiwiYmdEaXN0YW5jZSIsIndyYXBwZXJTZXJhY2hSZXN1bHRzIiwid3JhcHBlckxvY2F0aW9uUmVzdWx0cyIsIndyYXBwZXJVc2VSZXN1bHRzIiwibG90dGlldmlldyIsIm9wZW5DbG9zZUJ1dHRvbiIsInVzZUZpbHRlciIsImxvY2F0RmlsdGVyIiwic2VyYWNoRmlsdGVyIiwiZmlsdGVyTWFpbiIsImZpbHRlckJvZHkiLCJldmVudHMiLCJnZXREYXRhUmVzdWx0cyIsImdldERhdGFVc2UiLCJnZXREYXRhTG9jYXRpb25zIiwiYWN0aXZlU2VyYWNoUmVzdWx0cyIsImJpbmQiLCJhY3RpdmVMb2NhdGlvblJlc3VsdHMiLCJhY3RpdmVVc2VSZXN1bHRzIiwiY2xvc2UiLCJ0aGF0IiwiY2F0ZWdvcmllIiwicGFydHlIVE1MIiwidmFsSFRNTCIsIm9iamVjdCIsInVuZGVmaW5lZCIsIm5hbSIsInBvc3RpZCIsInNlbGVjdGVkIiwiQXJyYXkiLCJzZXJpYWxpemVkRm9ybSIsImxvY2F0aW9ucyIsInByb2NlZWRpbmdzIiwicHJvY2VlZGluZ3NyZXN1bHRzIiwidGh1bWJuYWlsIiwic2V0VGltZW91dCIsIm9wZW5Vc2VPdmVybGF5Iiwid3JhcHBlckFjdGl2ZSIsIm9wZW5Mb2NhdGlvbk92ZXJsYXkiLCJvcGVuU2VhcmNoT3ZlcmxheSIsInJlbW92ZVVzZVJlc3VsdHMiLCJyZW1vdmVMb2NhdGlvblJlc3VsdHMiLCJyZW1vdmVTZXJhY2hSZXN1bHRzIiwib3ZlcmxheSJdLCJzb3VyY2VSb290IjoiIn0=