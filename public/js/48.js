(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

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
/* harmony import */ var _Partials_components_FlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partials/components/FlashMessage */ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppHeader: _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    FlashMessage: _Partials_components_FlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"] // DialogModal,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ShopProduct: _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    ProductsOnSale: function ProductsOnSale() {
      return this.$page.SaleProducts;
    }
  },
  mounted: function mounted() {
    new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.product-slider', {
      type: "carousel",
      startAt: 1,
      perView: 4,
      gap: 0,
      peek: {
        before: 50,
        after: 50
      },
      breakpoints: {
        1024: {
          perView: 3,
          peek: {
            before: 20,
            after: 20
          }
        },
        768: {
          perView: 2,
          peek: {
            before: 10,
            after: 10
          }
        },
        600: {
          perView: 1,
          peek: {
            before: 0,
            after: 0
          }
        }
      }
    }).mount();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _shared_Slider_WelcomeMainSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Slider/WelcomeMainSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeMainSlider.vue");
/* harmony import */ var _shared_Slider_WelcomeSaleSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/Slider/WelcomeSaleSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue");
/* harmony import */ var _shared_Slider_WelcomeTrendingSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/Slider/WelcomeTrendingSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeTrendingSlider.vue");
/* harmony import */ var _shared_Slider_WelcomeTrendingMultiSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/Slider/WelcomeTrendingMultiSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeTrendingMultiSlider.vue");
/* harmony import */ var _shared_Partials_components_WelcomeIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/Partials/components/WelcomeIcons */ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue");
/* harmony import */ var _components_WelcomeTrendingCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/WelcomeTrendingCollection */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeTrendingCollection.vue");
/* harmony import */ var _components_WelcomeSaleBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/WelcomeSaleBanner */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue");
/* harmony import */ var _components_WelcomeBrands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/WelcomeBrands */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: 'Welcome'
  },
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    WelcomeSlider: _shared_Slider_WelcomeMainSlider__WEBPACK_IMPORTED_MODULE_1__["default"],
    WelcomeIcons: _shared_Partials_components_WelcomeIcons__WEBPACK_IMPORTED_MODULE_5__["default"],
    WelcomeTrendingCollection: _components_WelcomeTrendingCollection__WEBPACK_IMPORTED_MODULE_6__["default"],
    WelcomeTrendingSlider: _shared_Slider_WelcomeTrendingSlider__WEBPACK_IMPORTED_MODULE_3__["default"],
    WelcomeTrendingMultiSlider: _shared_Slider_WelcomeTrendingMultiSlider__WEBPACK_IMPORTED_MODULE_4__["default"],
    WelcomeSaleSlider: _shared_Slider_WelcomeSaleSlider__WEBPACK_IMPORTED_MODULE_2__["default"],
    WelcomeSaleBanner: _components_WelcomeSaleBanner__WEBPACK_IMPORTED_MODULE_7__["default"],
    WelcomeBrands: _components_WelcomeBrands__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue?vue&type=template&id=03024d7a&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue?vue&type=template&id=03024d7a& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-col md:flex-row py-20 md:py-24" },
      [
        _c(
          "div",
          {
            staticClass:
              "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
          },
          [
            _c("span", {
              staticClass:
                "bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-shipping"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
              _c(
                "h3",
                {
                  staticClass:
                    "font-hksemibold text-primary text-xl tracking-wide"
                },
                [_vm._v(" Free shipping")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-base tracking-wide"
                },
                [_vm._v(" On all orders over $50")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
          },
          [
            _c("span", {
              staticClass:
                "bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-support"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
              _c(
                "h3",
                {
                  staticClass:
                    "font-hksemibold text-primary text-xl tracking-wide"
                },
                [_vm._v(" Always available")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-base tracking-wide"
                },
                [_vm._v(" 24/7 call center availabl e")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
          },
          [
            _c("span", {
              staticClass:
                "bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-return"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
              _c(
                "h3",
                {
                  staticClass:
                    "font-hksemibold text-primary text-xl tracking-wide"
                },
                [_vm._v(" Free returns")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-base tracking-wide"
                },
                [_vm._v(" 7 days free return policy")]
              )
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pb-20 md:pb-32" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "product-slider relative" }, [
      _c(
        "div",
        { staticClass: "glide__track", attrs: { "data-glide-el": "track" } },
        [
          _c(
            "div",
            { staticClass: "pt-12 relative glide__slides" },
            _vm._l(_vm.ProductsOnSale, function(Product, ProductIndex) {
              return _c(
                "div",
                {
                  key: ProductIndex,
                  staticClass: "relative group glide__slide"
                },
                [
                  _c(
                    "div",
                    { staticClass: "sm:px-5 lg:px-4" },
                    [_c("shop-product", { attrs: { Product: Product } })],
                    1
                  )
                ]
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center pb-12 md:pb-0" }, [
      _c(
        "h2",
        {
          staticClass:
            "font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"
        },
        [_vm._v("\n            On sale, only today\n        ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "font-hkregular text-secondary-lighter text-lg md:text-xl"
        },
        [_vm._v("\n            Get it while they last!\n        ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { "data-glide-el": "controls" } }, [
      _c(
        "div",
        {
          staticClass:
            "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
          attrs: { "data-glide-dir": "<" }
        },
        [
          _c("i", {
            staticClass:
              "bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
          attrs: { "data-glide-dir": ">" }
        },
        [
          _c("i", {
            staticClass:
              "bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "main" } },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("welcome-slider"),
          _vm._v(" "),
          _c("welcome-icons"),
          _vm._v(" "),
          _c("welcome-trending-collection"),
          _vm._v(" "),
          _c("welcome-trending-slider")
        ],
        1
      ),
      _vm._v(" "),
      _c("welcome-trending-multi-slider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("welcome-brands"),
          _vm._v(" "),
          _c("welcome-sale-banner"),
          _vm._v(" "),
          _c("welcome-sale-slider")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue?vue&type=template&id=fac9ca26&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue?vue&type=template&id=fac9ca26& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "pt-16 sm:pt-20 pb-5 sm:pb-12 border-b border-grey-dark" },
      [
        _c(
          "h4",
          {
            staticClass:
              "font-hkregular text-xl text-secondary uppercase text-center"
          },
          [_vm._v("\n          Our Brands\n      ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex flex-wrap items-center justify-center pt-8 -mx-5"
          },
          [
            _c("div", {
              staticClass:
                "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
              staticStyle: { "background-image": "url(./img/brand-01.png)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
              staticStyle: { "background-image": "url(./img/brand-02.png)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
              staticStyle: { "background-image": "url(./img/brand-03.png)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
              staticStyle: { "background-image": "url(./img/brand-04.png)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
              staticStyle: { "background-image": "url(./img/brand-05.png)" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
              staticStyle: { "background-image": "url(./img/brand-06.png)" }
            })
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "py-5 sm:py-16 mt-10 md:mt-16 mb-12 sm:mb-6 md:mb-12 lg:mb-28 relative w-full"
      },
      [
        _c("div", {
          staticClass:
            "bg-left bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 h-76 sm:h-82 md:h-86 lg:h-90 z-20 relative",
          staticStyle: { "background-image": "url(./img/coupon-image.jpg)" }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "lg:absolute right-0 bottom-0 bg-right bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 ml-auto h-76 sm:h-82 md:h-86 lg:h-90 bg-coupon-bg"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "py-14 sm:py-20 xl:py-24 lg:pr-8 lg:pl-40 xl:pl-76 w-5/6 sm:w-3/5  mx-auto text-center lg:text-left"
              },
              [
                _c(
                  "span",
                  {
                    staticClass:
                      "font-hkmedium text-white text-lg md:text-xl uppercase"
                  },
                  [_vm._v("New Arrivals")]
                ),
                _vm._v(" "),
                _c(
                  "h2",
                  {
                    staticClass:
                      "font-butlermedium text-white text-3xl sm:text-4xl md:text-7xl xl:text-5xl pt-5 leading-tight"
                  },
                  [
                    _vm._v(
                      "\n                Blouses & Jeans Up to 70% Off\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary btn-lg mt-8 md:mt-10",
                    attrs: { href: "/" }
                  },
                  [_vm._v("Get it now")]
                )
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



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

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=8bf7123c& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=template&id=8bf7123c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WelcomeIcons_vue_vue_type_template_id_03024d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeIcons.vue?vue&type=template&id=03024d7a& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue?vue&type=template&id=03024d7a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _WelcomeIcons_vue_vue_type_template_id_03024d7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WelcomeIcons_vue_vue_type_template_id_03024d7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue?vue&type=template&id=03024d7a&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue?vue&type=template&id=03024d7a& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeIcons_vue_vue_type_template_id_03024d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeIcons.vue?vue&type=template&id=03024d7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue?vue&type=template&id=03024d7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeIcons_vue_vue_type_template_id_03024d7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeIcons_vue_vue_type_template_id_03024d7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WelcomeSaleSlider_vue_vue_type_template_id_1f24f42b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b& */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b&");
/* harmony import */ var _WelcomeSaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomeSaleSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WelcomeSaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WelcomeSaleSlider_vue_vue_type_template_id_1f24f42b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WelcomeSaleSlider_vue_vue_type_template_id_1f24f42b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeSaleSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleSlider_vue_vue_type_template_id_1f24f42b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/WelcomeSaleSlider.vue?vue&type=template&id=1f24f42b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleSlider_vue_vue_type_template_id_1f24f42b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleSlider_vue_vue_type_template_id_1f24f42b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/Welcome.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=6974727a& */ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/welcome/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=6974727a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WelcomeBrands_vue_vue_type_template_id_fac9ca26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeBrands.vue?vue&type=template&id=fac9ca26& */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue?vue&type=template&id=fac9ca26&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _WelcomeBrands_vue_vue_type_template_id_fac9ca26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WelcomeBrands_vue_vue_type_template_id_fac9ca26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue?vue&type=template&id=fac9ca26&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue?vue&type=template&id=fac9ca26& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeBrands_vue_vue_type_template_id_fac9ca26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeBrands.vue?vue&type=template&id=fac9ca26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue?vue&type=template&id=fac9ca26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeBrands_vue_vue_type_template_id_fac9ca26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeBrands_vue_vue_type_template_id_fac9ca26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WelcomeSaleBanner_vue_vue_type_template_id_5b9cf118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118& */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _WelcomeSaleBanner_vue_vue_type_template_id_5b9cf118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WelcomeSaleBanner_vue_vue_type_template_id_5b9cf118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleBanner_vue_vue_type_template_id_5b9cf118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue?vue&type=template&id=5b9cf118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleBanner_vue_vue_type_template_id_5b9cf118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WelcomeSaleBanner_vue_vue_type_template_id_5b9cf118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);