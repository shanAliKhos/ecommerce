(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_Slider_BlogPostsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/Slider/BlogPostsSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue");
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  metaInfo: {
    title: 'Blog-details'
  },
  components: {
    BlogPostsSlider: _shared_Slider_BlogPostsSlider__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partials/AppHeader */ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue");
/* harmony import */ var _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/AppFooter */ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue");
/* harmony import */ var _Shared_FlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Shared/FlashMessage */ "./resources/js/Pages/Shared/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import DialogModal from './../../Shared/DialogModal'  
// import SecondaryButton from './../../Shared/SecondaryButton'  
// import LoginForm from './../../Auth/Login'  
// import FlashMessage from './Partials/components/FlashMessage'  


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppHeader: _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    FlashMessage: _Shared_FlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"] // DialogModal,
    // LoginForm,
    // SecondaryButton,

  },
  // data() {
  //     return {
  //         LoginModal:true,
  //     }
  // },
  created: function created() {
    var _this = this;

    this.$root.$on('open-login-modal', function () {
      _this.LoginModal = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ "./resources/js/Pages/Ecomerce/shared/Partials/components/NavBar.vue");
/* harmony import */ var _components_MobileNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MobileNavbar */ "./resources/js/Pages/Ecomerce/shared/Partials/components/MobileNavbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    MobileNavbar: _components_MobileNavbar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      mobileMenu: false,
      categories: false,
      subcategory: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/FlashMessage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/FlashMessage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    Alert: function Alert() {
      if (this.$page.flash.success) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'success',
          title: this.$page.flash.success
        });
      }

      if (this.$page.flash.error) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'error',
          title: this.$page.flash.error
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=template&id=66c6a993&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=template&id=66c6a993& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", {
      staticClass:
        "bg-no-repeat bg-cover bg-center w-full h-64 sm:h-76 md:h-90 xl:h-96",
      staticStyle: { "background-image": "url(./img/blog-hero.jpg)" }
    }),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "border-b border-grey-dark" }, [
      _c(
        "div",
        {
          staticClass:
            "xl:w-11/12 pt-10 pb-20 flex flex-col lg:flex-row justify-between"
        },
        [
          _c(
            "div",
            { staticClass: "lg:w-2/3 text-center sm:text-left content" },
            [
              _c("h1", { staticClass: "pb-3 md:pb-5" }, [
                _vm._v("The 3 Golden Rules Professional Graphic Designers")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "content" }, [
                _c("p", [
                  _vm._v(
                    "Affiliate marketing is the latest trend online. With so\n                        many products to sell and services to offer, sometimes\n                        displaying it on one site isn’t enough. Thus,\n                        advertisers or merchants need affiliates, some sites\n                        which are willing to display ads for a particular cost.\n                        On the other hand, this is an opportunity for potential\n                        affiliates to earn extra income online."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "The easy way to earn from affiliate marketing is to join\n                        an affiliate marketing network. Joining poses several\n                        benefits to both the advertiser and the affiliate. For\n                        the advertisers, this opens a new door of opportunity to\n                        get more leads and sales, get higher return on\n                        investment and pay only for results. Affiliate marketing\n                        network lessens the risk of venturing into marketing\n                        without proper management and guidance."
                  )
                ]),
                _vm._v(" "),
                _c("blockquote", [
                  _vm._v(
                    '"For the affiliates, joining an affiliate\n                        network makes earning money online a whole lot easier.\n                        Instead of going after many merchants for payment, the\n                        affiliate has only one contact"'
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Affiliate marketing will continually grow as the need for\n                        more sales and leads continue. People are beginning to\n                        look at this type of marketing as an important aspect of\n                        pushing websites forward. More and more websites and\n                        online businesses are looking into one day joining the\n                        ever growing affiliate marketing networks."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "The common affiliate marketing sectors include financial\n                        services, travel, retail, telecoms, mobile, broadband,\n                        gaming and even online gambling. Because of the\n                        increasing affiliate marketing networks also drastically\n                        increased. This means there will be more networks\n                        competing against each other. UK Affiliate Marketing\n                        Networks."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Affiliate marketing has become the trend in UK, as well.\n                        There are already a number of UK based affiliate\n                        marketing networks. Who are the major UK affiliate\n                        marketing networks and which one should you join?"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "The major affiliate marketing networks in UK include\n                        advertising.com, affiliatefuture.com,\n                        affiliatemarketing.co.uk, affiliatewindow.com,\n                        affili.net, brandconversions.com, buy.at,\n                        clash-media.co.uk, cj.com, dgmaffiliates.com,\n                        onlinemediagroup.co.uk, paidonresults.com, primeq.co.uk,\n                        silvertap.com, smart-quotes.com, tradedoubler.com,\n                        webgains.com and zanox.com. This is according to\n                        e-consultancy report."
                  )
                ]),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: "./img/blog-image.jpg", alt: "blog image" }
                }),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "These affiliate marketing networks all vies for merchants\n                        and affiliates. They will get an override commission for\n                        the sales so it would be best to have more merchants and\n                        affiliates on the network. The standard override fee is\n                        30% although that still depends on the network. But\n                        whatever network you choose, whether you are a merchant\n                        or an affiliate, as long as you set things up properly,\n                        you will still get your share of higher sales."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Affiliate marketing is the latest trend online. With so\n                        many products to sell and services to offer, sometimes\n                        displaying it on one site isn’t enough. Thus,\n                        advertisers or merchants need affiliates, some sites\n                        which are willing to display ads for a particular cost.\n                        On the other hand, this is an opportunity for potential\n                        affiliates to earn extra income online."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "The easy way to earn from affiliate marketing is to join\n                        an affiliate marketing network. Joining poses several\n                        benefits to both the advertiser and the affiliate. For\n                        the advertisers, this opens a new door of opportunity to\n                        get more leads and sales, get higher return on\n                        investment and pay only for results. Affiliate marketing\n                        network lessens the risk of venturing into marketing\n                        without proper management and guidance."
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "pt-16 pb-16 sm:pb-20" },
      [
        _c(
          "h2",
          {
            staticClass:
              "font-butlerregular text-secondary text-3xl sm:text-4xl md:text-7xl lg:text-5xl pb-2 md:pb-3 text-center"
          },
          [_vm._v("\n            Related Post\n        ")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "font-hkregular text-secondary-lighter text-base md:text-lg text-center pb-5 sm:pb-12 md:pb-0"
          },
          [
            _vm._v(
              "\n            For powerful features, great design and support from the developer.\n        "
            )
          ]
        ),
        _vm._v(" "),
        _c("blog-posts-slider")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-col sm:flex-row" }, [
      _c("div", {
        staticClass:
          "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 -mt-10 ml-5 md:ml-8",
        staticStyle: { "background-image": "url(./img/blog-author.jpg)" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex justify-center items-center sm:pl-10 md:pl-12 py-3 sm:py-4 md:py-6 font-hkregular text-base text-secondary"
        },
        [
          _c("span", [
            _vm._v("By\n                "),
            _c("span", { staticClass: "font-hkbold" }, [_vm._v("Abdullah")])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
          _vm._v(" "),
          _c("span", [_vm._v("03 May 2019")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6"
        },
        [
          _c("span", { staticClass: "font-hkbold text-base text-secondary" }, [
            _vm._v("678")
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "font-hkregular text-base text-secondary pl-3 sm:pl-0 md:pl-3"
            },
            [_vm._v("Share")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6"
        },
        [
          _c("span", { staticClass: "font-hkbold text-base text-secondary" }, [
            _vm._v("30")
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "font-hkregular text-base text-secondary pl-3 sm:pl-3"
            },
            [_vm._v("Comments")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0" },
      [
        _c("form", { staticClass: "flex items-center w-full mb-16 relative" }, [
          _c(
            "label",
            {
              staticClass: "block relative h-0 w-0 overflow-hidden",
              attrs: { for: "search_form" }
            },
            [_vm._v("Search")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass:
              "form-input   transition-all pr-10 text-grey-darkest text-base",
            attrs: {
              type: "text",
              id: "search_form",
              placeholder: "Search the Blog"
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "focus:outline-none absolute right-0 top-0 mt-4 mr-3",
              attrs: { "aria-label": "Search button" }
            },
            [_c("i", { staticClass: "bx bx-search text-2xl" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-16 text-center sm:text-left" }, [
          _c(
            "h4",
            {
              staticClass:
                "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"
            },
            [_vm._v("\n                        Recent Post")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "block mt-8 border-b border-grey-dark pb-5 group",
              attrs: { href: "/post" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary text-base transition-colors group-hover:text-primary"
                },
                [
                  _vm._v(
                    "\n                            How to make the most of the rest of the year"
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"
                },
                [_vm._v("\n                            02 May 2019")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "block mt-8 border-b border-grey-dark pb-5 group",
              attrs: { href: "/post" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary text-base transition-colors group-hover:text-primary"
                },
                [
                  _vm._v(
                    "\n                            3 top OOTD to play with while traveling!"
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"
                },
                [_vm._v("\n                            03 May 2019")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "block mt-8 border-b border-grey-dark pb-5 group",
              attrs: { href: "/post" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary text-base transition-colors group-hover:text-primary"
                },
                [
                  _vm._v(
                    "\n                            Looking forward: Planning for the winter’s outfits"
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"
                },
                [_vm._v("\n                            04 May 2019")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-16" }, [
          _c(
            "h4",
            {
              staticClass:
                "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark text-center sm:text-left"
            },
            [_vm._v("\n                        Categories")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Stylish Fashion\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("5")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Makeup Tips\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("23")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Traveling Tips\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("45")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Empowerment\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("65")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Instagram\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("32")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Skin Care\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("21")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Hair Care\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("2")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: "#" }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [
                  _vm._v(
                    "\n                            Coming up\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                },
                [_vm._v("11")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-center sm:text-left" }, [
          _c(
            "h4",
            {
              staticClass:
                "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"
            },
            [_vm._v("\n                        Follow Us")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-center sm:justify-start pt-8" },
            [
              _c(
                "a",
                {
                  staticClass:
                    "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
                  attrs: { href: "https://www.google.com" }
                },
                [_c("i", { staticClass: "bx bxl-facebook text-white" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
                  attrs: { href: "https://www.google.com" }
                },
                [_c("i", { staticClass: "bx bxl-twitter text-white" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
                  attrs: { href: "https://www.google.com" }
                },
                [_c("i", { staticClass: "bx bxl-instagram text-white" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
                  attrs: { href: "https://www.google.com" }
                },
                [_c("i", { staticClass: "bx bxl-pinterest text-white" })]
              )
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("app-header"),
      _vm._v(" "),
      _c("main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("app-footer"),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modal", multiple: "" } }),
      _vm._v(" "),
      _vm.$page.flash ? _c("flash-message") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=template&id=082068e0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=template&id=082068e0& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    { staticClass: "xxstheme-header" },
    [
      _c("nav-bar", {
        attrs: {
          mobileMenu: _vm.mobileMenu,
          categories: _vm.categories,
          subcategory: _vm.subcategory
        },
        on: {
          "mobile-menu-is-disabled": function($event) {
            _vm.mobileMenu = false
          },
          "mobile-menu-is-enabled": function($event) {
            _vm.mobileMenu = true
          }
        }
      }),
      _vm._v(" "),
      _c("mobile-navbar", {
        attrs: {
          mobileMenu: _vm.mobileMenu,
          categories: _vm.categories,
          subcategory: _vm.subcategory
        },
        on: {
          "mobile-menu-is-disabled": function($event) {
            _vm.mobileMenu = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/FlashMessage.vue?vue&type=template&id=fdf19e30&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/FlashMessage.vue?vue&type=template&id=fdf19e30& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    " + _vm._s(_vm.Alert) + "\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogDetails_vue_vue_type_template_id_66c6a993___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogDetails.vue?vue&type=template&id=66c6a993& */ "./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=template&id=66c6a993&");
/* harmony import */ var _BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogDetails.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogDetails_vue_vue_type_template_id_66c6a993___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogDetails_vue_vue_type_template_id_66c6a993___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=template&id=66c6a993&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=template&id=66c6a993& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_66c6a993___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetails.vue?vue&type=template&id=66c6a993& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog-details/BlogDetails.vue?vue&type=template&id=66c6a993&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_66c6a993___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_66c6a993___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=0b5ac64c& */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=template&id=0b5ac64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeader_vue_vue_type_template_id_082068e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=082068e0& */ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=template&id=082068e0&");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_082068e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppHeader_vue_vue_type_template_id_082068e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=template&id=082068e0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=template&id=082068e0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_082068e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=template&id=082068e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue?vue&type=template&id=082068e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_082068e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_082068e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/FlashMessage.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Shared/FlashMessage.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_fdf19e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=fdf19e30& */ "./resources/js/Pages/Shared/FlashMessage.vue?vue&type=template&id=fdf19e30&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessage_vue_vue_type_template_id_fdf19e30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashMessage_vue_vue_type_template_id_fdf19e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/FlashMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/FlashMessage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Shared/FlashMessage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/FlashMessage.vue?vue&type=template&id=fdf19e30&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/FlashMessage.vue?vue&type=template&id=fdf19e30& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_fdf19e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=template&id=fdf19e30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/FlashMessage.vue?vue&type=template&id=fdf19e30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_fdf19e30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_fdf19e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);