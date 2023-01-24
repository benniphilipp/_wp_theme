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
//Import Class




var contactdata = new _modules_Contact_data__WEBPACK_IMPORTED_MODULE_0__["default"]();
var proceedingdata = new _modules_Overview_proceedings__WEBPACK_IMPORTED_MODULE_1__["default"]();
var locationdata = new _modules_Location__WEBPACK_IMPORTED_MODULE_2__["default"]();
var contactperson = new _modules_Contact__WEBPACK_IMPORTED_MODULE_3__["default"]();
jQuery(document).ready(function ($) {
  //popup image
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      // duration of the effect, in milliseconds
      easing: 'ease-in-out',
      // CSS transition easing function

      opener: function opener(openerElement) {
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
          id: function id(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1&muted=1'
        },
        vimeo: {
          index: 'vimeo.com/',
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

  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      // duration of the effect, in milliseconds
      easing: 'ease-in-out',
      // CSS transition easing function

      opener: function opener(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  //popup video
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });

  //Header menü
  var mainNav = document.getElementById("menu-header-menu");
  var navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function () {
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
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  pagination: {
    el: '.wrapper-video-pagination > .swiper-pagination-video-new',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '"></span>';
      ;
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
jQuery('#nav-id ol li a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  jQuery(document).off("scroll");
  jQuery('a').each(function () {
    jQuery(this).removeClass('active');
  });
  jQuery(this).addClass('active');
  var target = this.hash,
    menu = target;
  target = jQuery(target);
  jQuery('html, body').stop().animate({
    'scrollTop': target.offset().top + 2
  }, 500, 'swing', function () {
    window.location.hash = target;
    jQuery(document).on("scroll", onScroll);
  });
});
function onScroll(event) {
  var scrollPos = jQuery(document).scrollTop();
  jQuery('#nav-id a').each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));
    var refElement_pos = refElement.offset().top;
    var header_height = jQuery('.navbar ').height();
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
jQuery(".down").click(function () {
  jQuery('html, body').animate({
    scrollTop: jQuery(".up").offset().top
  }, 1500);
});
var btn = jQuery('#button');
btn.on('click', function (e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: 0
  }, '300');
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
  console.log('.popup-' + number);
  jQuery('.popup-' + number).fadeIn(500);
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
              partyHTML += "<ul class='checklist'>" + valHTML + "</ul>" + '</li>';
              valHTML = "";
            }
            partyHTML += '<li class="item first-child"><span class="main-head">' + object.name + '</span>';
          } else if (object.title !== undefined) {
            valHTML += '<li><label class="container1"><input type="checkbox" value="' + object.postid + '" name="cat[]">' + object.title + '<span class="checkmark"></label></li>';
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
              partyHTML += "<ul class='checklist'>" + valHTML + "</ul>" + '</li>';
              valHTML = "";
            }
            partyHTML += '<li class="item first-child"><span class="main-head">' + object.name + '</span>';
          } else if (object.title !== undefined) {
            valHTML += '<li><label class="container1"><input type="checkbox" value="' + object.postid + '" name="locations[]">' + object.title + '<span class="checkmark"></span></label></li>';
          }
        });
        jQuery("#wrapper-locations").append(partyHTML);
      });
    }

    //Zeig mir alle Ergebnisse an.
  }, {
    key: "getDataResults",
    value: function getDataResults() {
      var search_text = jQuery('#search_text').val();
      var loca = new Array();
      jQuery("#wrapper-locations input[type=checkbox]:checked").each(function () {
        loca.push(this.value);
      });
      var cat = new Array();
      jQuery("#wrapper-ur input[type=checkbox]:checked").each(function () {
        cat.push(this.value);
      });
      var serializedForm = {
        'cat': cat,
        'loca': loca,
        'search_text': search_text
      };
      jQuery.post(proceedingsData.root_url + '/wp-json/proceedingsdata/v1/data/', serializedForm, function (data) {
        var proceedings = data.proceedingsresults;
        var valHTMLg = '';
        var partyHTML = '';
        jQuery.each(proceedings, function (key, val) {
          /*  jQuery("#wrapper-results").after(`
            <div class="col-12 col-md-4">
                <div class="header-img">
                ${val.thumbnail ? `<img src="${val.thumbnail}"` : `<img src="https://via.placeholder.com/640x360">` }
                </div>
                <div class="body">
                    <p>${val.title}</p>   
                </div>
            </div>
            `)*/
          if (val.title !== undefined) {
            partyHTML += '<div class="col-12 col-md-4">';
            partyHTML += '<div class="header-img">';
            if (val.thumbnail) {
              partyHTML += '<img src="' + val.thumbnail + '">';
            } else {
              partyHTML += '<img src="https://via.placeholder.com/640x360">';
            }

            //partyHTML += val.thumbnail ? <img src="val.thumbnail" : <img src="https://via.placeholder.com/640x360"> 
            partyHTML += '</div>';
            partyHTML += '<div class="body">';
            partyHTML += '<p>' + val.title + '</p>';
            partyHTML += '</div>';
            partyHTML += '</div>';
          }
        });
        //valHTMLg += '<p>gfdgdfg</p>';
        jQuery("#wrapper-results").empty();
        if (proceedings == '') {
          jQuery("#wrapper-results").append('No Posts Found');
        }
        jQuery("#wrapper-results").append(partyHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRW5EQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvQ29udGFjdC1kYXRhLmpzIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvT3ZlcnZpZXctcHJvY2VlZGluZ3MuanMiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2hhZXJ0aGEvLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zdHlsZXMvbWFnbmlmaWMtcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIC8vSW1wb3J0IENsYXNzXG4gIGltcG9ydCBDb250YWN0RGF0YSBmcm9tIFwiLi9tb2R1bGVzL0NvbnRhY3QtZGF0YVwiXG4gIGltcG9ydCBQcm9jZWVkaW5nRGF0YSBmcm9tIFwiLi9tb2R1bGVzL092ZXJ2aWV3LXByb2NlZWRpbmdzXCJcbiAgaW1wb3J0IExvY2F0aW9uRGF0YSBmcm9tIFwiLi9tb2R1bGVzL0xvY2F0aW9uXCJcbiAgaW1wb3J0IENvbnRhY3RQZXJzb24gZnJvbSBcIi4vbW9kdWxlcy9Db250YWN0XCJcblxuICBjb25zdCBjb250YWN0ZGF0YSA9IG5ldyBDb250YWN0RGF0YSgpXG4gIGNvbnN0IHByb2NlZWRpbmdkYXRhID0gbmV3IFByb2NlZWRpbmdEYXRhKClcbiAgY29uc3QgbG9jYXRpb25kYXRhID0gbmV3IExvY2F0aW9uRGF0YSgpXG4gIGNvbnN0IGNvbnRhY3RwZXJzb24gPSBuZXcgQ29udGFjdFBlcnNvbigpXG5cblxuICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpe1xuXG4gICAgLy9wb3B1cCBpbWFnZVxuICAgICQoJy5pbWFnZS1wb3B1cC12ZXJ0aWNhbC1maXQnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICBtYWluQ2xhc3M6ICdtZnAtd2l0aC16b29tJywgXG4gICAgICBnYWxsZXJ5OntcbiAgICAgICAgZW5hYmxlZDp0cnVlXG4gICAgICB9LFxuICAgIFxuICAgICAgem9vbToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLCBcbiAgICBcbiAgICAgICAgZHVyYXRpb246IDMwMCwgLy8gZHVyYXRpb24gb2YgdGhlIGVmZmVjdCwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JywgLy8gQ1NTIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gICAgXG4gICAgICAgIG9wZW5lcjogZnVuY3Rpb24ob3BlbmVyRWxlbWVudCkge1xuICAgIFxuICAgICAgICAgIHJldHVybiBvcGVuZXJFbGVtZW50LmlzKCdpbWcnKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoJ2ltZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL3BvcHVwIHZpZGVvXG4gICAgJCgnLnBvcHVwLXlvdXR1YmUnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpZnJhbWUnXG4gICAgfSk7XG5cblxuXG4gICAgalF1ZXJ5KCcudmlkZW8tYnV0dG9uLXJ1bicpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgICBwYXR0ZXJuczoge1xuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6ICd5b3V0dWJlLmNvbS8nLCBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZ1bmN0aW9uKHVybCkgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHVybC5tYXRjaCgvW1xcXFw/XFxcXCZddj0oW15cXFxcP1xcXFwmXSspLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFtIHx8ICFtWzFdICkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJm11dGVkPTEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2aW1lbzoge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3ZpbWVvLmNvbS8nLCBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZ1bmN0aW9uKHVybCkgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHVybC5tYXRjaCgvKGh0dHBzPzpcXC9cXC8pPyh3d3cuKT8ocGxheWVyLik/dmltZW8uY29tXFwvKFthLXpdKlxcLykqKFswLTldezYsMTF9KVs/XT8uKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhbSB8fCAhbVs1XSApIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1bNV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEmbXV0ZWQ9MVwiJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vcG9wdXAgaW1hZ2VcblxuICAgICQoJy5pbWFnZS1wb3B1cC12ZXJ0aWNhbC1maXQnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICBtYWluQ2xhc3M6ICdtZnAtd2l0aC16b29tJywgXG4gICAgICBnYWxsZXJ5OntcbiAgICAgICAgZW5hYmxlZDp0cnVlXG4gICAgICB9LFxuICAgIFxuICAgICAgem9vbToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLCBcbiAgICBcbiAgICAgICAgZHVyYXRpb246IDMwMCwgLy8gZHVyYXRpb24gb2YgdGhlIGVmZmVjdCwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JywgLy8gQ1NTIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gICAgXG4gICAgICAgIG9wZW5lcjogZnVuY3Rpb24ob3BlbmVyRWxlbWVudCkge1xuICAgIFxuICAgICAgICAgIHJldHVybiBvcGVuZXJFbGVtZW50LmlzKCdpbWcnKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoJ2ltZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL3BvcHVwIHZpZGVvXG4gICAgJCgnLnBvcHVwLXlvdXR1YmUnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgIHR5cGU6ICdpZnJhbWUnXG4gICAgfSk7XG4gICAgXG4gICAgLy9IZWFkZXIgbWVuw7xcbiAgICBsZXQgbWFpbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1oZWFkZXItbWVudVwiKTtcbiAgICBsZXQgbmF2QmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1uYXZiYXItdG9nZ2xlXCIpO1xuXG4gICAgbmF2QmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIG1haW5OYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vU3dpcGVyIFZlcmZhaHJlbiBWaWRlb1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyMlwiLCB7XG4gICAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgICAgY3Jvc3NGYWRlOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgbGF6eTogdHJ1ZSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIH0pXG5cbiAgLy9teVN3aXBlckltYWdlR2FsbGVyeSAxOC4wMlxuICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlckltYWdlR2FsbGVyeVwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy53cmFwcGVyLXZpZGVvLXBhZ2luYXRpb24gPiAuc3dpcGVyLXBhZ2luYXRpb24tdmlkZW8tbmV3JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjwvc3Bhbj4nOztcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIud3JhcHBlci12aWRlby1wYWdpbmF0aW9uID4gLnN3aXBlci1idXR0b24tdmlkZW8tbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi53cmFwcGVyLXZpZGVvLXBhZ2luYXRpb24gPiAuc3dpcGVyLWJ1dHRvbi12aWRlby1wcmV2XCIsXG4gICAgfSxcblxuICB9KTtcblxuXG4gIC8vVmVyZmFocmVuIEhlYWRlciBJbWFnZSBHYWxsZXJ5XG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyUHJvY2VlZGluZ3NIZWFkZXJcIiwge1xuICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG5cbiAgLy9Mb2NhdGlvbiBIZWFkZXIgSW1hZ2UgR2FsbGVyeVxuICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlcmxvY2F0aW9uSGVhZGVyXCIsIHtcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuXG4gIGlmIChqUXVlcnkoXCIuc2lkZWJhcm1lbnVcIilbMF0pe1xuICAgIGxldCBpc190b2MgPSBmYWxzZTtcbiAgICBsZXQgY3NzX2NsYXNzID0gXCJcIjtcbiAgICBqUXVlcnkoXCIudG9jXCIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaXNfdG9jID0gdHJ1ZTtcbiAgICAgICAgalF1ZXJ5KFwiLnNpZGViYXJtZW51IG9sXCIpLmFwcGVuZChcIjxsaT48YSBocmVmPScjXCIralF1ZXJ5KHRoaXMpLmF0dHIoXCJpZFwiKStcIic+XCIralF1ZXJ5KHRoaXMpLmF0dHIoXCJkYXRhLXRvY3RpdGxlXCIpK1wiPC9hPjwvbGk+XCIpO1xuICAgIH0pO1xuICAgIGlmKCFpc190b2Mpe1xuICAgICAgalF1ZXJ5KFwiLnN1Ym5hdiAubmF2cG9pbnRzXCIpLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvL0xpc3QgbnVtYmVyaW5nXG4gIGpRdWVyeShcIi5udW1tYmVyXCIpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgalF1ZXJ5KHRoaXMpLmZpbmQoXCJudW1iZXJcIikucmVtb3ZlKCkuZW5kKClcbiAgICAgIC5wcmVwZW5kKFwiPHNwYW4gY2xhc3M9J251bWJlcic+XCIgKyAoaSArIDEpICsgXCIuIDwvc3Bhbj5cIik7XG4gIH0pO1xuXG4gXG4gIC8vU21vb3Roc2Nyb2xsIFZlcmZhaHJlblxuICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcblxuICBcbiAgLy9zbW9vdGhzY3JvbGxcbiAgalF1ZXJ5KCcjbmF2LWlkIG9sIGxpIGFbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBqUXVlcnkoZG9jdW1lbnQpLm9mZihcInNjcm9sbFwiKTtcblxuICAgIGpRdWVyeSgnYScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pXG4gICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmhhc2gsXG4gICAgICBtZW51ID0gdGFyZ2V0O1xuICAgIHRhcmdldCA9IGpRdWVyeSh0YXJnZXQpO1xuICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICdzY3JvbGxUb3AnOiB0YXJnZXQub2Zmc2V0KCkudG9wICsgMlxuICAgIH0sIDUwMCwgJ3N3aW5nJywgZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcbiAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIH0pO1xuICB9KTtcblxuICBmdW5jdGlvbiBvblNjcm9sbChldmVudCkge1xuICAgIHZhciBzY3JvbGxQb3MgPSBqUXVlcnkoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuICAgIGpRdWVyeSgnI25hdi1pZCBhJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyTGluayA9IGpRdWVyeSh0aGlzKTtcbiAgICAgIHZhciByZWZFbGVtZW50ID0galF1ZXJ5KGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgIHZhciByZWZFbGVtZW50X3BvcyA9IHJlZkVsZW1lbnQub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIGhlYWRlcl9oZWlnaHQgPSBqUXVlcnkoJy5uYXZiYXIgJykuaGVpZ2h0KCkgO1xuICAgICAgdmFyIHJlZkVsZW1lbnRfcG9zX3RvdGFsID0gcmVmRWxlbWVudF9wb3M7XG4gICAgICB2YXIgc2Nyb2xsUG9zX3RvdGFsID0gc2Nyb2xsUG9zICsgaGVhZGVyX2hlaWdodDtcblxuICAgICAgaWYgKHJlZkVsZW1lbnRfcG9zIDwgc2Nyb2xsUG9zX3RvdGFsICYmIHJlZkVsZW1lbnRfcG9zICsgcmVmRWxlbWVudC5oZWlnaHQoKSA+IHNjcm9sbFBvc190b3RhbCkge1xuICAgICAgICBqUXVlcnkoJyNuYXYtaWQgb2wgbGkgYScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBjdXJyTGluay5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJMaW5rLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIC8vVmVyZmFocmVuIFBhZ2UgbWVudVxuICBqUXVlcnkoXCIuZG93blwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IGpRdWVyeShcIi51cFwiKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDE1MDApO1xuICB9KTtcblxuICB2YXIgYnRuID0galF1ZXJ5KCcjYnV0dG9uJyk7XG5cbiAgYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LCAnMzAwJyk7XG4gIH0pO1xuXG4gIGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICBpZiAoalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcbiAgICAgIGJ0bi5hZGRDbGFzcygnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vUG9wVXAgaHR0cHM6Ly9jb2RlcGVuLmlvL2thaWFrL3Blbi95THlxeE9ZXG4gIC8vIGpRdWVyeShcIiNwb3B1cElkVmlkZW9cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gIC8vICAgalF1ZXJ5KFwiLnBvcHVwXCIpLmZhZGVJbig1MDApO1xuICAvLyB9KTtcbiAgalF1ZXJ5KFwiLmNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGpRdWVyeShcIi5wb3B1cFwiKS5mYWRlT3V0KDUwMCk7XG4gIH0pO1xuXG5cbiAgLy9vcGVuIHBvcHVwXG4gIGpRdWVyeSgnLnBvcHVwLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBudW1iZXIgPSBqUXVlcnkodGhpcykuZGF0YShcIm51bWJlclwiKTtcbiAgICBjb25zb2xlLmxvZygnLnBvcHVwLScrbnVtYmVyKVxuICAgIGpRdWVyeSgnLnBvcHVwLScrbnVtYmVyKS5mYWRlSW4oNTAwKTtcbiAgfSk7XG4gIFxuICAvL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU3Mzc1NDI3L211bHRpcGxlLXBvcHVwLWluLXNhbWUtcGFnZVxuICAvLyAvL2Nsb3NlIHBvcHVwXG4gIC8vICQoJy5wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gICBpZiggJChldmVudC50YXJnZXQpLmlzKCcucG9wdXAtY2xvc2UnKSB8fCAkKGV2ZW50LnRhcmdldCkuaXMoJy5wb3B1cCcpICkge1xuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xuICBcbiAgLy8gLy9jbG9zZSBwb3B1cCB3aGVuIGNsaWNraW5nIHRoZSBlc2Mga2V5Ym9hcmQgYnV0dG9uXG4gIC8vICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gICAgIGlmKGV2ZW50LndoaWNoPT0nMjcnKXtcbiAgLy8gICAgICAgJCgnLnBvcHVwJykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcblxuIiwiXG5jbGFzcyBjb250YWN0RGF0YSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5nZXREYXRhSWQoKVxuICAgICAgICB0aGlzLmdldFByb2NlZHVyZUxvY2F0aW9uKClcblxuICAgIH1cblxuXG4gICAgXG5cbiAgICBnZXRQcm9jZWR1cmVMb2NhdGlvbigpe1xuICAgICAgICB0aGlzLmRhdGFJZCA9IGpRdWVyeShcIiNkYXRhSWRcIikudmFsKClcbiAgICAgICAgalF1ZXJ5LmdldEpTT04ocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZHVyZWxvY2F0aW9uL3YxL2RhdGEvP3Rlcm09JyArIHRoaXMuZGF0YUlkLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbkh0bWwgPSBcIlwiO1xuICAgICAgICAgICAgY29uc3QgY291bnRyeV9kYXRhID0gW107XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihpLCBpdGVtKSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCFjb3VudHJ5X2RhdGEuaW5jbHVkZXMoaXRlbS5jb3VudHJ5X2NvZGUpKXtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmNvdW50cnlfY29kZSA9PSBpdGVtLmNvdW50cnlfY29kZSl7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSHRtbCArPSBcIjxsaT5cIiArICBpdGVtLmNvdW50cnlfY29kZSArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeV9kYXRhLnB1c2goaXRlbS5jb3VudHJ5X2NvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdWwgPSBqUXVlcnkoJyNwcm9jZWR1cmVsb2NhdGlvbicpXG4gICAgICAgICAgICB1bC5hcHBlbmQobG9jYXRpb25IdG1sKTtcbiAgICAgICAgfSkgIFxuICAgIH1cblxuXG5cblxuXG4gICAgZ2V0U3dpcGVySlMoKXtcbiAgICAgICAgLy9Db250YWN0IFByb2NlZWRpbmdzXG4gICAgICAgIHZhciBzd2lwZXJJbWFnZSA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJJbWdlXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHZhciBzd2lwZXJDb250YWN0ID0gbmV3IFN3aXBlcihcIi5teVN3aXBlckNvbnRha3RcIiwge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGVsOiAnLndyYXBwZXItcGFnaW5hdGlvbiA+IC5zd2lwZXItcGFnaW5hdGlvbi1uZXcnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+PC9zcGFuPic7O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmV4dEVsOiBcIi53cmFwcGVyLXBhZ2luYXRpb24gPiAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi53cmFwcGVyLXBhZ2luYXRpb24gPiAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBzd2lwZXJJbWFnZS5jb250cm9sbGVyLmNvbnRyb2wgPSBzd2lwZXJDb250YWN0O1xuICAgICAgICBzd2lwZXJDb250YWN0LmNvbnRyb2xsZXIuY29udHJvbCA9IHN3aXBlckltYWdlO1xuICAgIH1cblxuXG4gICAgZ2V0RGF0YUlkKCl7XG4gICAgICAgIHRoaXMuZ2V0U3dpcGVySlMoKVxuICAgICAgICB0aGlzLmRhdGFJZCA9IGpRdWVyeShcIiNkYXRhSWRcIikudmFsKClcbiAgICAgICAgdmFyIGltZyA9ICcnO1xuICAgICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3MvdjEvZGF0YS8/dGVybT0nICsgdGhpcy5kYXRhSWQsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucHJvY2VlZGluZ3MtY29udGFjdCcpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubm8tZGF0YScpLmh0bWwoJzxoMT5LZWluIFN0YW5kb3J0IGF1c2dld8OkaGx0PC9oMT4nKVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnByb2NlZWRpbmdzLWNvbnRhY3QnKS5yZW1vdmVDbGFzcygndG9jJylcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5jYWxsLXRvLWFjdGlvbicpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXG5cbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wcm9jZWVkaW5ncy1jb250YWN0JykucmVtb3ZlQXR0cignZGF0YS10b2N0aXRsZScpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvL0FycmF5IHRydWVcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5uby1kYXRhJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1jb250YWN0LWpzXCIpLmFmdGVyKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt2YWwuY291bnRyeV9jb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dmFsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHt2YWwuc3RyZWV0X251bWJlcn08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHt2YWwucG9zdGNvZGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiR7dmFsLmNvdW50cnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZW1haWxcIj48YSBocmVmPVwiXCI+JHt2YWwuZW1haWx9PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBob25lXCI+PGEgaHJlZj1cIlwiPiR7dmFsLnBob25lfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWN0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWRlY29yLWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dmFsLnBlcm1hbGlua31cIj5adW0gU3RhbmRvcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tZGVjb3ItcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsLnNsaWRlcl9pbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbC50aHVtYm5haWwpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih2YWwuc2xpZGVyX2ltYWdlICE9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcgKz0gYDxpbWcgc3JjPVwiJHt2YWwuc2xpZGVyX2ltYWdlfVwiIGFsdD1cIiR7dmFsLm5hbWV9XCIgaGVpZ2h0PVwiJHt2YWwuc2xpZGVyX2ltYWdlX3NpemUucHJvY2VlZGluZ19oZWFkZXIud2lkdGh9XCIgd2lkdGg9XCIke3ZhbC5zbGlkZXJfaW1hZ2Vfc2l6ZS5wcm9jZWVkaW5nX2hlYWRlci5oZWlnaHR9XCI+YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZhbC5zbGlkZXJfaW1hZ2Vfc2l6ZS5wcm9jZWVkaW5nX2hlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNlIGlmKHZhbC50aHVtYm5haWwgIT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltZyArPSBgPGltZyBzcmM9XCIke3ZhbC50aHVtYm5haWx9XCIgYWx0PVwiJHt2YWwubmFtZX1cIj5gO1xuICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltZyArPSBgPGltZyBzcmM9XCJodHRwczovL2R1bW15aW1hZ2UuY29tLzY0MHgzNjAvZmZmL2FhYVwiIGFsdD1cIlwiPmA7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItaW1hZ2UtanNcIikuYWZ0ZXIoYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0RGF0YVxuIiwiY2xhc3MgY29udGFjdFBlcnNvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvL2Z1bmN0aW9uXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpICAgICAgICBcbiAgICB9XG5cbiAgICBnZXREYXRhKCl7XG4gICAgICAgIHRoaXMuZGF0YUlkID0galF1ZXJ5KFwiI2RhdGFJZENvbnRhY3RcIikudmFsKClcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFJZClcbiAgICAgICAgLy8galF1ZXJ5LmdldEpTT04oICcnICsgdGhpcy5kYXRhSWQsIGZ1bmN0aW9uKCRkYXRhKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YUlkKVxuICAgICAgICAvLyB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGVyc29uIiwiY2xhc3MgbG9jYXRpb25EYXRhe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2V0TG9hY2F0aW9uRGF0YSgpXG4gICAgfVxuXG4gICAgZ2V0TG9hY2F0aW9uRGF0YSgpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRMb2FjYXRpb25EYXRhIGluIGxvY2F0aW9uLmpzJyk7XG4gICAgICAgIHRoaXMuZGF0YUlkID0galF1ZXJ5KFwiI2RhdGFJZExvYWNhdGlvblwiKS52YWwoKTtcbiAgICAgICAgY29uc3QgY2F0aWQgPSB0aGlzLmRhdGFJZD90aGlzLmRhdGFJZDonJztcbiAgICAgICAgY29uc3QgdXJsID0gcHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL2xvY2F0aW9ucmVzdWx0L3YxL2RhdGEvP3Rlcm09JyArIGNhdGlkO1xuICAgICAgICBqUXVlcnkuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TG9hY2F0aW9uRGF0YSBkYXRhOicsIGRhdGEpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgICAvL2dyb3VwaW5nIGJ5IGNhdGVnb3J5IGZpcnN0XG5cbiAgICAgICAgICAgIGxldCBhbGxDYXRzID0ge307XG5cbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlc3VsdHMsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcblxuICAgICAgICAgICAgICAgIGlmKCFpdGVtLmNhdCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIShpdGVtLmNhdCBpbiBhbGxDYXRzKSl7XG4gICAgICAgICAgICAgICAgICAgIGFsbENhdHNbaXRlbS5jYXRdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsbENhdHNbaXRlbS5jYXRdLnB1c2goaXRlbS5uYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldExvYWNhdGlvbkRhdGEgYWxsQ2F0czonLCBhbGxDYXRzKTtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbkh0bWwgPSBcIlwiO1xuXG4gICAgICAgICAgICBqUXVlcnkuZWFjaChhbGxDYXRzLCBmdW5jdGlvbihjYXQsIGxvY3MpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0ubmFtZSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25IdG1sICs9IFwiPGxpPlwiICsgY2F0ICsgJzx1bD4nO1xuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKGxvY3MsIGZ1bmN0aW9uKGosIGxvYykge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkh0bWwgKz0gXCI8bGk+XCIgKyBsb2MgKyBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25IdG1sICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB1bCA9IGpRdWVyeSgnI3dyYXBwZXItbG9jYXRpb24+dWwnKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBpdHMgY2hpbGRyZW5cbiAgICAgICAgICAgIHVsLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB1bC5hcHBlbmQobG9jYXRpb25IdG1sKTtcblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25EYXRhIiwiY2xhc3MgcHJvY2VlZGluZ0RhdGEge1xuXG5cbiAgICAvKiAgKi9cblxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy9CdXR0b25zXG4gICAgICAgIHRoaXMudXNlQnV0dG9uID0galF1ZXJ5KFwiI3VzZVwiKVxuICAgICAgICB0aGlzLnVzZUxvY2F0aW9uQnV0dG9uID0galF1ZXJ5KFwiI2xvY2F0aW9uXCIpXG4gICAgICAgIHRoaXMudXNlU2VhcmNoQnV0dG9uID0galF1ZXJ5KFwiI3NlcmFjaFwiKVxuICAgICAgICBcbiAgICAgICAgLy9FbGVtZW50ZVxuICAgICAgICB0aGlzLndyYXBwZXIgPSBqUXVlcnkoXCIjd3JhcHBlclwiKVxuICAgICAgICB0aGlzLmJnRGlzdGFuY2UgPSBqUXVlcnkoXCIjYmctZGlzdGFuY2VcIilcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cyA9IGpRdWVyeShcIiN3cmFwcGVyLXNlcmFjaC1yZXN1bHRzXCIpXG4gICAgICAgIHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cyA9IGpRdWVyeShcIiN3cmFwcGVyLWxvY2F0aW9uLXJlc3VsdHNcIilcbiAgICAgICAgdGhpcy53cmFwcGVyVXNlUmVzdWx0cyA9IGpRdWVyeShcIiN3cmFwcGVyLXVzZS1yZXN1bHRzXCIpXG5cbiAgICAgICAgdGhpcy5sb3R0aWV2aWV3ID0galF1ZXJ5KFwiI2xvdHRpZXZpZXdcIilcbiAgICAgICAgdGhpcy5vcGVuQ2xvc2VCdXR0b24gPSBqUXVlcnkoXCIjb3Blbi1jbG9zZS1idXR0b25cIilcblxuICAgICAgICB0aGlzLnVzZUZpbHRlciA9IGpRdWVyeSgnLnVzZS1maWx0ZXInKVxuICAgICAgICB0aGlzLmxvY2F0RmlsdGVyID0galF1ZXJ5KCcubG9jYXRpb24tZmlsdGVyJykgXG4gICAgICAgIHRoaXMuc2VyYWNoRmlsdGVyID0galF1ZXJ5KCcuc2VyYWNoLWZpbHRlcicpXG4gICAgICAgIHRoaXMuZmlsdGVyTWFpbiA9IGpRdWVyeSgnLmZpbHRlci1tYWluJylcbiAgICAgICAgdGhpcy5maWx0ZXJCb2R5ID0galF1ZXJ5KCcuZmlsdGVyLWJvZHknKVxuXG4gICAgICAgIHRoaXMuZXZlbnRzKClcbiAgICAgICAgLy90aGlzLmxvdHRpZSgpIFxuICAgICAgICB0aGlzLmdldERhdGFSZXN1bHRzKClcbiAgICAgICAgdGhpcy5nZXREYXRhVXNlKClcbiAgICAgICAgdGhpcy5nZXREYXRhTG9jYXRpb25zKClcbiAgICB9XG5cbiAgICBldmVudHMoKXtcbiAgICAgICAgdGhpcy51c2VTZWFyY2hCdXR0b24ub24oXCJjbGlja1wiLCB0aGlzLmFjdGl2ZVNlcmFjaFJlc3VsdHMuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy51c2VMb2NhdGlvbkJ1dHRvbi5vbihcImNsaWNrXCIsIHRoaXMuYWN0aXZlTG9jYXRpb25SZXN1bHRzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMudXNlQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmVVc2VSZXN1bHRzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMub3BlbkNsb3NlQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKVxuXG4gICAgfVxuXG4gICAgdHlwaW5nTG9naWMoKXt9XG5cbiAgICAvL0dpYiBtaXIgZGllIGZyZWllIFN1Y2hlXG4gICAgZ2V0RGF0YVNlYXJjaCgpe31cblxuICAgIC8vR2liIG1pciBhbGxlIEthdGVnb3JpZW4gdm9uIFZlcmZhaHJlblxuICAgIGdldERhdGFVc2UoKXtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWVkaW5nc2RhdGFyZXN0YXBpL3YxL2RhdGEvJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnb3QgZGF0YSBpbiBnZXREYXRhVXNlOicsIGRhdGEpXG4gICAgICAgICAgICB2YXIgY2F0ID0gZGF0YS5jYXRlZ29yaWU7XG5cbiAgICAgICAgICAgIHZhciBwYXJ0eUhUTUwgPSAnJztcbiAgICAgICAgICAgIHZhciB2YWxIVE1MID0gJyc7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChjYXQsIGZ1bmN0aW9uKGksIG9iamVjdCl7XG5cbiAgICAgICAgICAgICAgICBpZihvYmplY3QubmFtZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbEhUTUwgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9IFwiPHVsIGNsYXNzPSdjaGVja2xpc3QnPlwiICsgdmFsSFRNTCArIFwiPC91bD5cIiArICc8L2xpPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0gJzxsaSBjbGFzcz1cIml0ZW0gZmlyc3QtY2hpbGRcIj48c3BhbiBjbGFzcz1cIm1haW4taGVhZFwiPicgKyBvYmplY3QubmFtZSArICc8L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFsSFRNTCArPSAnPGxpPjxsYWJlbCBjbGFzcz1cImNvbnRhaW5lcjFcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCInICsgb2JqZWN0LnBvc3RpZCArICdcIiBuYW1lPVwiY2F0W11cIj4nICsgb2JqZWN0LnRpdGxlICsgJzxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9sYWJlbD48L2xpPic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci11clwiKS5hcHBlbmQocGFydHlIVE1MKTtcbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgLy9HaWIgbWlyIGRpZSBTdGFuZG9ydGUgbmFjaCBWZXJmYWhyZW5cbiAgICBnZXREYXRhTG9jYXRpb25zKCl7XG5cbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWVkaW5nc2RhdGFsb2NhdGlvbnNyZXN0YXBpL3YxL2RhdGEvJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnb3QgZGF0YSBpbiBnZXREYXRhVXNlOicsIGRhdGEpXG4gICAgICAgICAgICB2YXIgY2F0ID0gZGF0YS5jYXRlZ29yaWU7XG5cbiAgICAgICAgICAgIHZhciBwYXJ0eUhUTUwgPSAnJztcbiAgICAgICAgICAgIHZhciB2YWxIVE1MID0gJyc7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChjYXQsIGZ1bmN0aW9uKGksIG9iamVjdCl7XG5cbiAgICAgICAgICAgICAgICBpZihvYmplY3QubmFtZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbEhUTUwgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9IFwiPHVsIGNsYXNzPSdjaGVja2xpc3QnPlwiICsgdmFsSFRNTCArIFwiPC91bD5cIiArICc8L2xpPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0gJzxsaSBjbGFzcz1cIml0ZW0gZmlyc3QtY2hpbGRcIj48c3BhbiBjbGFzcz1cIm1haW4taGVhZFwiPicgKyBvYmplY3QubmFtZSArICc8L3NwYW4+JyA7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQpe1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbEhUTUwgKz0gJzxsaT48bGFiZWwgY2xhc3M9XCJjb250YWluZXIxXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiJyArIG9iamVjdC5wb3N0aWQgKyAnXCIgbmFtZT1cImxvY2F0aW9uc1tdXCI+JyArIG9iamVjdC50aXRsZSArICc8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPjwvbGk+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLWxvY2F0aW9uc1wiKS5hcHBlbmQocGFydHlIVE1MKTtcbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL1plaWcgbWlyIGFsbGUgRXJnZWJuaXNzZSBhbi5cbiAgICBnZXREYXRhUmVzdWx0cygpe1xuXG4gICAgICAgIHZhciBzZWFyY2hfdGV4dCA9IGpRdWVyeSgnI3NlYXJjaF90ZXh0JykudmFsKCk7XG5cbiAgICAgIHZhciBsb2NhID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItbG9jYXRpb25zIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbG9jYS5wdXNoKHRoaXMudmFsdWUpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgXG4gICAgICAgIHZhciBjYXQgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICBcbiAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXIgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGNhdC5wdXNoKHRoaXMudmFsdWUpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgXG4gICAgICAgIHZhciBzZXJpYWxpemVkRm9ybSA9IHsnY2F0JzpjYXQsICdsb2NhJzpsb2NhLCdzZWFyY2hfdGV4dCc6c2VhcmNoX3RleHQgfTtcblxuICAgICAgICBqUXVlcnkucG9zdChwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VlZGluZ3NkYXRhL3YxL2RhdGEvJywgc2VyaWFsaXplZEZvcm0sIGZ1bmN0aW9uKGRhdGEpIFxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcHJvY2VlZGluZ3MgPSBkYXRhLnByb2NlZWRpbmdzcmVzdWx0cztcbiAgICAgICAgICAgIHZhciB2YWxIVE1MZyA9ICcnO1xuICAgICAgICAgICAgdmFyIHBhcnR5SFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBqUXVlcnkuZWFjaChwcm9jZWVkaW5ncywgZnVuY3Rpb24oa2V5LCB2YWwpe1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8qICBqUXVlcnkoXCIjd3JhcHBlci1yZXN1bHRzXCIpLmFmdGVyKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dmFsLnRodW1ibmFpbCA/IGA8aW1nIHNyYz1cIiR7dmFsLnRodW1ibmFpbH1cImAgOiBgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MFwiPmAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7dmFsLnRpdGxlfTwvcD4gICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYCkqL1xuICAgICAgICAgICAgICAgIGlmKHZhbC50aXRsZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0nPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNFwiPic7XG4gICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9ICc8ZGl2IGNsYXNzPVwiaGVhZGVyLWltZ1wiPic7XG4gICAgICAgICAgICAgICAgICAgaWYodmFsLnRodW1ibmFpbClcbiAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSAnPGltZyBzcmM9XCInK3ZhbC50aHVtYm5haWwrJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSAnPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MFwiPic7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAvL3BhcnR5SFRNTCArPSB2YWwudGh1bWJuYWlsID8gPGltZyBzcmM9XCJ2YWwudGh1bWJuYWlsXCIgOiA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwXCI+IFxuICAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0nPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9ICc8ZGl2IGNsYXNzPVwiYm9keVwiPic7XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSAnPHA+JyArIHZhbC50aXRsZSArICc8L3A+JzsgICBcbiAgICAgICAgICAgICAgICAgICAgcGFydHlIVE1MICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL3ZhbEhUTUxnICs9ICc8cD5nZmRnZGZnPC9wPic7XG4gICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1yZXN1bHRzXCIpLmVtcHR5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHByb2NlZWRpbmdzID09ICcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLXJlc3VsdHNcIikuYXBwZW5kKCdObyBQb3N0cyBGb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItcmVzdWx0c1wiKS5hcHBlbmQocGFydHlIVE1MKTtcbiAgICAgICAgfSlcbiAgICAgICAgIFxuICAgICAgICAvKmpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWVkaW5nc2RhdGEvdjEvZGF0YS8nLCBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgdmFyIHByb2NlZWRpbmdzID0gZGF0YS5wcm9jZWVkaW5nc3Jlc3VsdHM7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChwcm9jZWVkaW5ncywgZnVuY3Rpb24oa2V5LCB2YWwpe1xuXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItcmVzdWx0c1wiKS5hZnRlcihgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAke3ZhbC50aHVtYm5haWwgPyBgPGltZyBzcmM9XCIke3ZhbC50aHVtYm5haWx9XCJgIDogYDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHgzNjBcIj5gIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ZhbC50aXRsZX08L3A+ICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pKi9cbiAgICB9XG5cbiAgICAvL0FjdGl2aWVydW5nXG4gICAgYWN0aXZlVXNlUmVzdWx0cygpe1xuICAgICAgICBpZiAoIXRoaXMud3JhcHBlci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Vc2VPdmVybGF5KClcbiAgICAgICAgICAgICwgMTAwKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpXG4gICAgICAgICAgICB0aGlzLm9wZW5Vc2VPdmVybGF5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2ZUxvY2F0aW9uUmVzdWx0cygpe1xuICAgICAgICBpZiAoIXRoaXMud3JhcHBlci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Mb2NhdGlvbk92ZXJsYXkoKVxuICAgICAgICAgICAgLCAxMDApXG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKClcbiAgICAgICAgICAgIHRoaXMub3BlbkxvY2F0aW9uT3ZlcmxheSgpXG4gICAgICAgIH0gIFxuICAgIH1cblxuICAgIGFjdGl2ZVNlcmFjaFJlc3VsdHMoKXsgXG4gICAgICAgIGlmICghdGhpcy53cmFwcGVyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgLy90aGlzLnJ1bkxvdHRpZSgpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFxuICAgICAgICAgICAgICAgIHRoaXMub3BlblNlYXJjaE92ZXJsYXkoKVxuICAgICAgICAgICAgLCAxMDApXG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKClcbiAgICAgICAgICAgIHRoaXMub3BlblNlYXJjaE92ZXJsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgd3JhcHBlckFjdGl2ZSgpe1xuICAgICAgICBpZih0aGlzLndyYXBwZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIGlmKHRoaXMud3JhcHBlclNlcmFjaFJlc3VsdHMuaGFzQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVVzZVJlc3VsdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlcmFjaFJlc3VsdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLmhhc0NsYXNzKCdyZXN1bHRzLWRpc3BsYXknKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVVc2VSZXN1bHRzKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxvY2F0aW9uUmVzdWx0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZXJhY2hSZXN1bHRzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMud3JhcHBlclVzZVJlc3VsdHMuaGFzQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVVzZVJlc3VsdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlcmFjaFJlc3VsdHMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0RlYWt0aXZpZXJ1bmdcbiAgICByZW1vdmVVc2VSZXN1bHRzKCl7XG4gICAgICAgIHRoaXMud3JhcHBlclVzZVJlc3VsdHMuYWRkQ2xhc3MoJ3Jlc3VsdHMtbm9uZScpXG4gICAgICAgIHRoaXMud3JhcHBlclVzZVJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpXG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMuc2VyYWNoRmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgIH0gICBcblxuICAgIHJlbW92ZUxvY2F0aW9uUmVzdWx0cygpe1xuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMuYWRkQ2xhc3MoJ3Jlc3VsdHMtbm9uZScpXG4gICAgICAgIHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5yZW1vdmVDbGFzcygncmVzdWx0cy1kaXNwbGF5JylcbiAgICAgICAgdGhpcy51c2VGaWx0ZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMuc2VyYWNoRmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJlbW92ZVNlcmFjaFJlc3VsdHMoKXtcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5hZGRDbGFzcygncmVzdWx0cy1ub25lJylcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5yZW1vdmVDbGFzcygncmVzdWx0cy1kaXNwbGF5JylcbiAgICAgICAgdGhpcy51c2VGaWx0ZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgLy9PdmVybGF5IE9wZW4gRmlsdGVyXG4gICAgb3BlblNlYXJjaE92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy5vdmVybGF5KClcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5yZW1vdmVDbGFzcygncmVzdWx0cy1ub25lJylcbiAgICAgICAgdGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5hZGRDbGFzcygncmVzdWx0cy1kaXNwbGF5JylcbiAgICAgICAgdGhpcy5zZXJhY2hGaWx0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgb3BlbkxvY2F0aW9uT3ZlcmxheSgpe1xuICAgICAgICB0aGlzLm92ZXJsYXkoKVxuICAgICAgICB0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Jlc3VsdHMtbm9uZScpXG4gICAgICAgIHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5hZGRDbGFzcygncmVzdWx0cy1kaXNwbGF5JylcbiAgICAgICAgdGhpcy5sb2NhdEZpbHRlci5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBvcGVuVXNlT3ZlcmxheSgpe1xuICAgICAgICB0aGlzLm92ZXJsYXkoKVxuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLnJlbW92ZUNsYXNzKCdyZXN1bHRzLW5vbmUnKVxuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzLmFkZENsYXNzKCdyZXN1bHRzLWRpc3BsYXknKVxuICAgICAgICB0aGlzLnVzZUZpbHRlci5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICAvL0Jhc2ljXG4gICAgb3ZlcmxheSgpe1xuICAgICAgICB0aGlzLndyYXBwZXIuYWRkQ2xhc3MoJ3dyYXBwZXItZmlsdGVyLXN0eWxlJylcbiAgICAgICAgdGhpcy5iZ0Rpc3RhbmNlLmFkZENsYXNzKCdiZy1kaXN0YW5jZScpXG4gICAgICAgIHRoaXMub3BlbkNsb3NlQnV0dG9uLmFkZENsYXNzKCdjbG9zZS1idXR0b24tZGlzcGxheScpXG4gICAgICAgIHRoaXMud3JhcHBlci5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgdGhpcy5maWx0ZXJNYWluLmFkZENsYXNzKCdhY3RpdmUtbWFpbicpXG4gICAgICAgIHRoaXMuZmlsdGVyQm9keS5hZGRDbGFzcygnYWN0aXZlLW1haW4nKVxuICAgIH1cblxuICAgIC8vIHJ1bkxvdHRpZSgpe1xuICAgIC8vICAgICBpZiAoIXRoaXMud3JhcHBlci5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0xvdHRpJylcbiAgICAvLyAgICAgICAgIHRoaXMubG90dGlldmlldy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxuICAgIC8vICAgICAgICAgdGhpcy53cmFwcGVyLmNzcygnZGlzcGxheScsICdub25lJylcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5sb3R0aWV2aWV3LmNzcygnZGlzcGxheScsICdub25lJyksIFxuICAgIC8vICAgICAgICAgMjUwMClcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VSZXN1bHRzKClcbiAgICAgICAgdGhpcy5yZW1vdmVMb2NhdGlvblJlc3VsdHMoKVxuICAgICAgICB0aGlzLnJlbW92ZVNlcmFjaFJlc3VsdHMoKVxuICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2xhc3MoJ3dyYXBwZXItZmlsdGVyLXN0eWxlJylcbiAgICAgICAgdGhpcy5iZ0Rpc3RhbmNlLnJlbW92ZUNsYXNzKCdiZy1kaXN0YW5jZScpXG4gICAgICAgIHRoaXMub3BlbkNsb3NlQnV0dG9uLnJlbW92ZUNsYXNzKCdjbG9zZS1idXR0b24tZGlzcGxheScpIFxuICAgICAgICB0aGlzLmZpbHRlck1haW4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tYWluJylcbiAgICAgICAgdGhpcy5maWx0ZXJCb2R5LnJlbW92ZUNsYXNzKCdhY3RpdmUtbWFpbicpXG4gICAgICAgIHRoaXMuZ2V0RGF0YVJlc3VsdHMoKVxuICAgIH1cblxuICAgIC8vIGxvdHRpZSgpe1xuICAgIC8vICAgICBsZXQgaWNvblNraXBGb3J3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdHRpZScpO1xuICAgIC8vICAgICBsZXQgYW5pbWF0aW9uU2tpcEZvcndhcmQgPSBib2R5bW92aW4ubG9hZEFuaW1hdGlvbih7XG4gICAgLy8gICAgICAgICAgICAgY29udGFpbmVyOiBpY29uU2tpcEZvcndhcmQsXG4gICAgLy8gICAgICAgICAgICAgcmVuZGVyZXI6ICdzdmcnLFxuICAgIC8vICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgcGF0aDogXCIvd3AtY29udGVudC90aGVtZXMvaGFlcnRoYS9pbWFnZXMvSEdfTG9nb19BbmltYXRpb25fTEEyLmpzb25cIlxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgYW5pbWF0aW9uU2tpcEZvcndhcmQucGxheVNlZ21lbnRzKFswLDYwXSwgdHJ1ZSk7XG4gICAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2NlZWRpbmdEYXRhXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZ2V0RGF0YVVzZSgpe1xuLy8gICAgIGpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWVkaW5nc2RhdGFyZXN0YXBpL3YxL2RhdGEvJywgZnVuY3Rpb24oZGF0YSl7XG4vLyAgICAgICAgIC8vdmFyIGNhdCA9IGRhdGEuY2F0ZWdvcmllO1xuXG4vLyAgICAgICAgIC8vIHZhciBjYXREYXRlID0ge307XG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAvLyAgICAgdmFyIHIgPSBjYXREYXRlW3RoaXMucmVzdWx0c10gPSBbXTtcbi8vICAgICAgICAgLy8gICAgIHIucHVzaCh0aGlzKTtcbi8vICAgICAgICAgLy8gfSk7XG5cbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhjYXREYXRlKVxuXG5cbiAgXG5cbi8vICAgICAgICAgdmFyIG1hbmRyaWxsX2V2ZW50cyA9IGRhdGEuY2F0ZWdvcmllO1xuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG1hbmRyaWxsX2V2ZW50cylcblxuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzBdO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzRdO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzldO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzEzXTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1sxNl07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbMjFdO1xuXG5cbi8vICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0LCBmdW5jdGlvbihpLCBvYmplY3Qpe1xuLy8gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpICsnKCcrb2JqZWN0Lmxlbmd0aCsnKScpXG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iamVjdCk7XG4vLyAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKG9iamVjdClcbi8vICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmplY3QpXG4vLyAgICAgICAgICAgICAvLyBqUXVlcnkuZWFjaChvYmplY3QsIGZ1bmN0aW9uIChpbmRleCwgb2JqKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhpbmRleClcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9ialtpbmRleF0pO1xuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqKVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqW2ldKVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vIGpRdWVyeS5lYWNoKG9iaiwgZnVuY3Rpb24gKGksIHZhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZhcnIpXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZhcnIucGVybWFsaW5rKVxuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codmFyci50aXRsZSlcblxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICBqUXVlcnkoXCIjd3JhcHBlci11c2UtcmVzdWx0c1wiKS5hcHBlbmQoYFxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICA8dWwgaWQ9XCJ3cmFwcGVyLXVyXCI+XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICA8bGk+ICR7dmFyclswXX0gPC9saT5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIDxsaT4gJHt2YXJyLnRpdGxlfSA8L2xpPlxuICAgICAgICAgICBcbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgPC91bD5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgYClcblxuLy8gICAgICAgICAgICAgLy8gICAgIC8vIH0pO1xuXG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvYmogKTtcbi8vICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhvYmpbaW5kZXhdKTtcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9iai5wZXJtYWxpbmspO1xuXG5cblxuLy8gICAgICAgICAgICAgLy8gfSk7XG4vLyAgICAgICAgIH0pO1xuXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oaSwgZSkge1xuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5LmVhY2goZSwgZnVuY3Rpb24oa2V5LCBhcnIpIHtcbi8vICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhcnIpXG4vLyAgICAgICAgIC8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goYXJyLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpe1xuLy8gICAgICAgICAvLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHZhbHVlKVxuLy8gICAgICAgICAvLyAgICAgICAgIC8vIH0pXG4vLyAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgLy8gfSlcblxuXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goY2F0LCBmdW5jdGlvbihpLCBpdGVtKSB7XG5cbi8vICAgICAgICAgLy8gICAgIGpRdWVyeShcIiN3cmFwcGVyLXVzZS1yZXN1bHRzXCIpLmFwcGVuZChgXG4vLyAgICAgICAgIC8vICAgICA8dWwgaWQ9XCJ3cmFwcGVyLXVyXCI+XG4gICAgICAgICAgICAgICAgXG5cbi8vICAgICAgICAgLy8gICAgICAgICAkeyBqUXVlcnkuZWFjaChpdGVtLCBmdW5jdGlvbihrZXksIGFycnkpe1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICBgPGxpPiAke2FycnkucGVybWFsaW5rfSAgJHthcnJ5LnRpdGxlfTwvbGk+YFxuLy8gICAgICAgICAvLyAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAvLyAgICAgPC91bD5cbi8vICAgICAgICAgLy8gICAgIGApXG5cbi8vICAgICAgICAgLy8gfSk7XG5cblxuXG4vLyAgICAgLy8gICAgIGRhdGEuY2F0ZWdvcmllLm1hcCggaXRlbSA9PiBjb25zb2xlLmxvZyhpdGVtKSlcbi8vICAgICAvLyAgICAvL2RhdGEuY2F0ZWdvcmllLm1hcCggaXRlbSA9PiBjb25zb2xlLmxvZyhpdGVtICsgaXRlbS5wZXJtYWxpbmsgKyBpdGVtLnRpdGVsKSlcblxuLy8gICAgIC8vICAgICBqUXVlcnkoXCIjd3JhcHBlci11c2UtcmVzdWx0c1wiKS5hcHBlbmQoYFxuLy8gICAgIC8vICAgICA8dWwgaWQ9XCJ3cmFwcGVyLXVyXCI+XG4vLyAgICAgLy8gICAgICR7ZGF0YS5jYXRlZ29yaWUubWFwKCBpdGVtID0+IGl0ZW0gKSB9XG4vLyAgICAgLy8gICAgIDwvdWw+XG4vLyAgICAgLy8gICAgIGApXG5cblxuXG4vLyAgICAgICAgIC8vIHZhciByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4vLyAgICAgICAgIC8vIHZhciBjYXRSZXN1bHRzID0gZGF0YS5jYXRlZ29yaWU7XG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goY2F0UmVzdWx0cywgZnVuY3Rpb24oaSwgaXRlbSkge1xuLy8gICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhpdGVtKTtcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGkpO1xuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS50aXRsZSk7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLnBlcm1hbGluayk7XG4vLyAgICAgICAgIC8vICAgICBpdGVtLnJlc3VsdHMubWFwKCBpdGVtID0+IGl0ZW0ucGVybWFsaW5rKVxuXG4vLyAgICAgICAgIC8vIH0pO1xuXG4vLyAgICAgICAgIC8vbGV0IGNhdFJlc3VsdHMgPSBudW1iZXJBcnJheS5tYXAoKG51bSkgPT4gbnVtLnRpdGxlKVxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGRhdGEsZnVuY3Rpb24oKXtcblxuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coIHRoaXMudGl0bGUgLHRoaXMucGVybWFsaW5rKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAvLyAgICAgfSlcblxuXG4vLyAgICAgICAgIC8vL2RmLmNhdGVnb3JpZXJlc3VsdHMubWFwKGl0ZW1fID0+IGNvbnNvbGUubG9nKGl0ZW1fLmlkKSlcblxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGNhdFJlc3VsdHMuY29uY2F0KHJlc3VsdHMpLCBmdW5jdGlvbihpLCBpdGVtKSB7XG4vLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uY2F0KTtcblxuLy8gICAgICAgICAvLyB9KTtcblxuXG4vLyAgICAgICAgIC8vIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGksIGUpIHtcbi8vICAgICAgICAgLy8gICAgIGpRdWVyeS5lYWNoKGUsIGZ1bmN0aW9uKGtleSwgYXJyKSB7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhcnIuY2F0ZWdvcmllKTsgICAgICAgXG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIi4uLlwiLGFyci5jYXRlZ29yaWUsIGFyci5uYW1lKTtcblxuLy8gICAgICAgICAvLyAgICAgfSk7XG4vLyAgICAgICAgIC8vIH0pXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oaSwgZSkge1xuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5LmVhY2goZSwgZnVuY3Rpb24oa2V5LCBhcnIpIHtcbi8vICAgICAgICAgLy8gICAgICAgICBqUXVlcnkuZWFjaChhcnIsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCIuLi5cIiwgaW5kZXgsIG9iai52YWx1ZSk7XG4vLyAgICAgICAgIC8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgLy8gfSlcblxuICAgICAgICBcbi8vICAgICAgICAgLy92YXIgY2F0ID0gZGF0YTtcbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oa2F5LCB2YWwpe1xuICAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMucGVybWFsaW5rKVxuLy8gICAgICAgICAvLyAgICAgLy92YWwubWFwKGl0ZW0gPT4gYDxsaT48YSBocmVmPVwiJHtpdGVtfVwiPiR7aXRlbS50aXRsZX08L2E+PC9saT5gKS5qb2luKFwiXCIpXG4vLyAgICAgICAgIC8vICAgICAvL3ZhbC5jYXRlZ29yaWUubWFwKCBpdGVtID0+IGNvbnNvbGUubG9nKGl0ZW0pKVxuICAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHZhbC5pZClcbi8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2codmFsKVxuXG5cbi8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGtleXMpO1xuLy8gICAgICAgICAvLyAgICAgLy8gaWYocnVzYWx0cy5pZCA9PSBjYXQuaWQpe1xuLy8gICAgICAgICAvLyAgICAgLy8gICAgIC8vY29uc29sZS5sb2cocnVzYWx0cy50aXRsZSlcbi8vICAgICAgICAgLy8gICAgIC8vIH1cbi8vICAgICAgICAgLy8gfSlcbi8vICAgICB9KVxuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9kaXN0L3NjcmlwdHMvbWFpblwiOiAwLFxuXHRcImRpc3Qvc3R5bGVzL21hZ25pZmljLXBvcHVwXCI6IDAsXG5cdFwiZGlzdC9zdHlsZXMvYWRtaW5cIjogMCxcblx0XCJkaXN0L3N0eWxlcy9tYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2hhZXJ0aGFcIl0gPSBzZWxmW1wid2VicGFja0NodW5raGFlcnRoYVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3Qvc3R5bGVzL21hZ25pZmljLXBvcHVwXCIsXCJkaXN0L3N0eWxlcy9hZG1pblwiLFwiZGlzdC9zdHlsZXMvbWFpblwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zY3JpcHRzL21haW4uanNcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIixcImRpc3Qvc3R5bGVzL2FkbWluXCIsXCJkaXN0L3N0eWxlcy9tYWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIixcImRpc3Qvc3R5bGVzL2FkbWluXCIsXCJkaXN0L3N0eWxlcy9tYWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIixcImRpc3Qvc3R5bGVzL2FkbWluXCIsXCJkaXN0L3N0eWxlcy9tYWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3N0eWxlcy9tYWduaWZpYy1wb3B1cC5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiQ29udGFjdERhdGEiLCJQcm9jZWVkaW5nRGF0YSIsIkxvY2F0aW9uRGF0YSIsIkNvbnRhY3RQZXJzb24iLCJjb250YWN0ZGF0YSIsInByb2NlZWRpbmdkYXRhIiwibG9jYXRpb25kYXRhIiwiY29udGFjdHBlcnNvbiIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwibWFnbmlmaWNQb3B1cCIsInR5cGUiLCJtYWluQ2xhc3MiLCJnYWxsZXJ5IiwiZW5hYmxlZCIsInpvb20iLCJkdXJhdGlvbiIsImVhc2luZyIsIm9wZW5lciIsIm9wZW5lckVsZW1lbnQiLCJpcyIsImZpbmQiLCJpZnJhbWUiLCJwYXR0ZXJucyIsInlvdXR1YmUiLCJpbmRleCIsImlkIiwidXJsIiwibSIsIm1hdGNoIiwic3JjIiwidmltZW8iLCJtYWluTmF2IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZCYXJUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic3dpcGVyIiwiU3dpcGVyIiwiZWZmZWN0IiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsInNsaWRlc1BlclZpZXciLCJzcGVlZCIsImxvb3AiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJjZW50ZXJlZFNsaWRlcyIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJzcGFjZUJldHdlZW4iLCJyZW5kZXJCdWxsZXQiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJpc190b2MiLCJjc3NfY2xhc3MiLCJlYWNoIiwiYXBwZW5kIiwiYXR0ciIsImhpZGUiLCJpIiwicmVtb3ZlIiwiZW5kIiwicHJlcGVuZCIsIm9uIiwib25TY3JvbGwiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidGFyZ2V0IiwiaGFzaCIsIm1lbnUiLCJzdG9wIiwiYW5pbWF0ZSIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZXZlbnQiLCJzY3JvbGxQb3MiLCJzY3JvbGxUb3AiLCJjdXJyTGluayIsInJlZkVsZW1lbnQiLCJyZWZFbGVtZW50X3BvcyIsImhlYWRlcl9oZWlnaHQiLCJoZWlnaHQiLCJyZWZFbGVtZW50X3Bvc190b3RhbCIsInNjcm9sbFBvc190b3RhbCIsImNsaWNrIiwiYnRuIiwic2Nyb2xsIiwiZmFkZU91dCIsIm51bWJlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmFkZUluIiwiY29udGFjdERhdGEiLCJnZXREYXRhSWQiLCJnZXRQcm9jZWR1cmVMb2NhdGlvbiIsImRhdGFJZCIsInZhbCIsImdldEpTT04iLCJwcm9jZWVkaW5nc0RhdGEiLCJyb290X3VybCIsImxvY2F0aW9uSHRtbCIsImNvdW50cnlfZGF0YSIsIml0ZW0iLCJpbmNsdWRlcyIsImNvdW50cnlfY29kZSIsInB1c2giLCJ1bCIsInN3aXBlckltYWdlIiwic3dpcGVyQ29udGFjdCIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwiZ2V0U3dpcGVySlMiLCJpbWciLCJsZW5ndGgiLCJjc3MiLCJodG1sIiwicmVtb3ZlQXR0ciIsImtleSIsImFmdGVyIiwibmFtZSIsInN0cmVldF9udW1iZXIiLCJwb3N0Y29kZSIsImNvdW50cnkiLCJlbWFpbCIsInBob25lIiwicGVybWFsaW5rIiwic2xpZGVyX2ltYWdlIiwic2xpZGVyX2ltYWdlX3NpemUiLCJwcm9jZWVkaW5nX2hlYWRlciIsIndpZHRoIiwiY29udGFjdFBlcnNvbiIsImdldERhdGEiLCJsb2NhdGlvbkRhdGEiLCJnZXRMb2FjYXRpb25EYXRhIiwiY2F0aWQiLCJyZXN1bHRzIiwiYWxsQ2F0cyIsImNhdCIsImxvY3MiLCJqIiwibG9jIiwiY2hpbGRyZW4iLCJwcm9jZWVkaW5nRGF0YSIsInVzZUJ1dHRvbiIsInVzZUxvY2F0aW9uQnV0dG9uIiwidXNlU2VhcmNoQnV0dG9uIiwid3JhcHBlciIsImJnRGlzdGFuY2UiLCJ3cmFwcGVyU2VyYWNoUmVzdWx0cyIsIndyYXBwZXJMb2NhdGlvblJlc3VsdHMiLCJ3cmFwcGVyVXNlUmVzdWx0cyIsImxvdHRpZXZpZXciLCJvcGVuQ2xvc2VCdXR0b24iLCJ1c2VGaWx0ZXIiLCJsb2NhdEZpbHRlciIsInNlcmFjaEZpbHRlciIsImZpbHRlck1haW4iLCJmaWx0ZXJCb2R5IiwiZXZlbnRzIiwiZ2V0RGF0YVJlc3VsdHMiLCJnZXREYXRhVXNlIiwiZ2V0RGF0YUxvY2F0aW9ucyIsImFjdGl2ZVNlcmFjaFJlc3VsdHMiLCJiaW5kIiwiYWN0aXZlTG9jYXRpb25SZXN1bHRzIiwiYWN0aXZlVXNlUmVzdWx0cyIsImNsb3NlIiwidGhhdCIsImNhdGVnb3JpZSIsInBhcnR5SFRNTCIsInZhbEhUTUwiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJuYW0iLCJ0aXRsZSIsInBvc3RpZCIsInNlYXJjaF90ZXh0IiwibG9jYSIsIkFycmF5IiwidmFsdWUiLCJzZXJpYWxpemVkRm9ybSIsInBvc3QiLCJwcm9jZWVkaW5ncyIsInByb2NlZWRpbmdzcmVzdWx0cyIsInZhbEhUTUxnIiwidGh1bWJuYWlsIiwiZW1wdHkiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJvcGVuVXNlT3ZlcmxheSIsIndyYXBwZXJBY3RpdmUiLCJvcGVuTG9jYXRpb25PdmVybGF5Iiwib3BlblNlYXJjaE92ZXJsYXkiLCJyZW1vdmVVc2VSZXN1bHRzIiwicmVtb3ZlTG9jYXRpb25SZXN1bHRzIiwicmVtb3ZlU2VyYWNoUmVzdWx0cyIsIm92ZXJsYXkiXSwic291cmNlUm9vdCI6IiJ9