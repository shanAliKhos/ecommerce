(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_glide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-glide-js */ "./node_modules/vue-glide-js/dist/vue-glide.common.js");
/* harmony import */ var vue_glide_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_glide_js__WEBPACK_IMPORTED_MODULE_0__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: (_components = {}, _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["Glide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["Glide"]), _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["GlideSlide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["GlideSlide"]), _defineProperty(_components, "ShopProduct", function ShopProduct() {
    return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue"));
  }), _components),
  computed: {
    TrendingSliderProducts: function TrendingSliderProducts() {
      return this.$page.FeaturedSliders ? this.$page.FeaturedSliders.trending_slider : [];
    },
    SaleSliderProducts: function SaleSliderProducts() {
      return this.$page.SaleSliders ? this.$page.SaleSliders.sale_slider : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=template&id=7530c476&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=template&id=7530c476& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "w-full relative",
      class: {
        "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 ": true
      }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "w-2/3 md:max-w-screen-sm lg:w-5/6 lg:max-w-full xl:w-5/6 xxl:max-w-screen-xxl mx-auto lg:ml-auto lg:mr-10 xl:mr-16 xxl:mx-auto relative z-10"
        },
        [
          _c("div", { staticClass: "py-16" }, [
            _c("div", { staticClass: "ml-0 flex justify-between" }, [
              _c(
                "div",
                { staticClass: "hidden lg:block w-3/4 bg-white shadow-2xl" },
                [
                  _c(
                    "div",
                    { staticClass: "py-12 px-4  " },
                    [
                      _c(
                        "vue-glide",
                        {
                          attrs: {
                            type: "carousel",
                            perView: 3,
                            hoverpause: true,
                            gap: 30,
                            animationDuration: 1000,
                            breakpoints: {
                              1024: {
                                perView: 2
                              }
                            },
                            autoplay: 2000
                          }
                        },
                        _vm._l(_vm.SaleSliderProducts, function(
                          Product,
                          ProductIndex
                        ) {
                          return _c(
                            "vue-glide-slide",
                            { key: ProductIndex },
                            [
                              _c("shop-product", {
                                staticClass: "relative mt-2 mb-5 pb-2 z-30 ",
                                attrs: { Product: Product }
                              })
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pb-16" }, [
            _c("div", { staticClass: "ml-auto flex justify-between" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hidden lg:block w-3/4 bg-white shadow-2xl" },
                [
                  _c(
                    "div",
                    { staticClass: "py-12 px-4" },
                    [
                      _c(
                        "vue-glide",
                        {
                          attrs: {
                            type: "carousel",
                            perView: 3,
                            hoverpause: true,
                            gap: 30,
                            animationDuration: 1000,
                            breakpoints: {
                              1024: {
                                perView: 2
                              }
                            },
                            autoplay: 2000
                          }
                        },
                        _vm._l(_vm.TrendingSliderProducts, function(
                          Product,
                          ProductIndex
                        ) {
                          return _c(
                            "vue-glide-slide",
                            { key: ProductIndex },
                            [
                              _c("shop-product", {
                                staticClass: "relative mt-2 mb-5 pb-2 z-30 ",
                                attrs: { Product: Product }
                              })
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pb-16" }, [
            _c("div", { staticClass: "ml-0 flex justify-between" }, [
              _c(
                "div",
                { staticClass: "hidden lg:block w-3/4 bg-white shadow-2xl" },
                [
                  _c(
                    "div",
                    { staticClass: "py-12 px-4  " },
                    [
                      _c(
                        "vue-glide",
                        {
                          attrs: {
                            type: "carousel",
                            perView: 3,
                            hoverpause: true,
                            gap: 30,
                            animationDuration: 1000,
                            breakpoints: {
                              1024: {
                                perView: 2
                              }
                            },
                            autoplay: 2000
                          }
                        },
                        _vm._l(_vm.SaleSliderProducts, function(
                          Product,
                          ProductIndex
                        ) {
                          return _c(
                            "vue-glide-slide",
                            { key: ProductIndex },
                            [
                              _c("shop-product", {
                                staticClass: "relative mt-2 mb-5 pb-2 z-30 ",
                                attrs: { Product: Product }
                              })
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full lg:w-1/3 lg:pl-6 xl:pl-8" }, [
      _c("div", { staticClass: "text-right" }, [
        _c(
          "h2",
          {
            staticClass:
              "font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"
          },
          [_vm._v(" New season, matching shoes ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "font-regular text-gray-50 text-lg pt-1" }, [
          _vm._v(" Featured Collection ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "relative group shadow-2xl" }, [
        _c("div", {
          staticClass:
            "h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14",
          staticStyle: {
            "background-image": "url('/img/product/product (14).jpg')"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group transition-opacity"
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide",
                attrs: { href: "/" }
              },
              [_vm._v("View All Product")]
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full lg:w-1/3 lg:pr-6 xl:pr-8 " }, [
      _c("div", { staticClass: "text-left" }, [
        _c(
          "h2",
          {
            staticClass:
              "font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"
          },
          [_vm._v(" Stylish Backpacks, Only For You")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "font-regular text-gray-50 text-lg pt-1" }, [
          _vm._v("Featured Collection")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "relative group shadow-2xl" }, [
        _c("div", {
          staticClass:
            "h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14 relative",
          staticStyle: {
            "background-image": "url('/img/product/product (21).jpg')"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden"
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group"
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide",
                attrs: { href: "/" }
              },
              [_vm._v("View All Product")]
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full lg:w-1/3 lg:pl-6 xl:pl-8" }, [
      _c("div", { staticClass: "text-right" }, [
        _c(
          "h2",
          {
            staticClass:
              "font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"
          },
          [_vm._v("Summer? You need chick sunglasses")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "font-regular text-gray-50 text-lg pt-1" }, [
          _vm._v("Featured Collection")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "relative group shadow-2xl" }, [
        _c("div", {
          staticClass:
            "h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14",
          staticStyle: {
            "background-image": "url('/img/product/product (22).jpg')"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group"
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide",
                attrs: { href: "/" }
              },
              [_vm._v("View All Product")]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrendingMultiSlider_vue_vue_type_template_id_7530c476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrendingMultiSlider.vue?vue&type=template&id=7530c476& */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=template&id=7530c476&");
/* harmony import */ var _TrendingMultiSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrendingMultiSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrendingMultiSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrendingMultiSlider_vue_vue_type_template_id_7530c476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrendingMultiSlider_vue_vue_type_template_id_7530c476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingMultiSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingMultiSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingMultiSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=template&id=7530c476&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=template&id=7530c476& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingMultiSlider_vue_vue_type_template_id_7530c476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingMultiSlider.vue?vue&type=template&id=7530c476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue?vue&type=template&id=7530c476&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingMultiSlider_vue_vue_type_template_id_7530c476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingMultiSlider_vue_vue_type_template_id_7530c476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);