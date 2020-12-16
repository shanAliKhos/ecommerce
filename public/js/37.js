(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['Product'],
  data: function data() {
    return {
      Label: {
        Color: null,
        Title: null,
        Active: false
      }
    };
  },
  methods: {
    // AddToCart(Item){   
    //     this.$root.$emit('Add-To-Cart',{
    //         "id":(Item.id)?Item.id:'',
    //         "name":(Item.name)?Item.name:'',
    //         "slug":(Item.slug)?Item.slug:'',
    //         "Instock":(Item.quantity)?Item.quantity:'',
    //         "Qty":1,
    //         "price":Item.current_price,
    //         "image":this.Product.image?Item.image:'./img/shoes-4.png',
    //     });      
    // },        
    SetLable: function SetLable() {
      if (this.Product.sale_price > 0) {
        this.Label = {
          Color: 'text-primary-light',
          Title: '-' + Math.round((this.Product.regular_price - this.Product.sale_price) / this.Product.regular_price * 100) + '%',
          Active: true
        };
      } else if (this.Product.is_featured) {
        this.Label = {
          Color: 'text-v-blue',
          Title: 'Trend',
          Active: true
        };
      } else {
        this.Label = {
          Color: 'text-v-green',
          Title: 'new',
          Active: true
        };
      }
    }
  },
  computed: {
    ProductImage: function ProductImage() {
      var img = this.Product.mainphoto_url;
      return img;
    },
    RegularPrice: function RegularPrice() {
      return this.Product.regular_price;
    },
    SalePrice: function SalePrice() {
      return this.Product.sale_price;
    },
    CurrentPrice: function CurrentPrice() {
      return this.Product.current_price;
    },
    ProductName: function ProductName() {
      return this.Product.name;
    }
  },
  mounted: function mounted() {
    this.SetLable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue");
/* harmony import */ var vue_glide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-glide-js */ "./node_modules/vue-glide-js/dist/vue-glide.common.js");
/* harmony import */ var vue_glide_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_glide_js__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: (_components = {}, _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_1__["Glide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_1__["Glide"]), _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_1__["GlideSlide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_1__["GlideSlide"]), _defineProperty(_components, "ShopProduct", _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]), _components),
  computed: {
    TrendingSliderProducts: function TrendingSliderProducts() {
      return this.$page.FeaturedSliderProducts.trending_slider;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "inertia-link",
    {
      staticClass: "z-30",
      attrs: { href: _vm.route("shop.show", _vm.Product.slug) }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "product-gird transition duration-500 ease-in-out transform motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 shadow-sm hover:shadow-md"
        },
        [
          _c(
            "div",
            { staticClass: " rounded flex justify-center items-center p-2" },
            [
              _c("div", {
                staticClass:
                  "w-full h-68 bg-center bg-no-repeat bg-cover shadow-md hover:shadow-lg",
                style: "background-image:url('" + _vm.ProductImage + "')"
              }),
              _vm._v(" "),
              _vm.Label.Active
                ? _c(
                    "div",
                    {
                      staticClass:
                        "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass:
                            "font-bold text-sm uppercase tracking-wide",
                          class: _vm.Label.Color
                        },
                        [_vm._v(" " + _vm._s(_vm.Label.Title))]
                      )
                    ]
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "p-2 relative h-28 " }, [
            _c(
              "div",
              { staticClass: "flex items-center content-center py-2" },
              [
                _c(
                  "p",
                  {
                    staticClass:
                      "font-semibold text-xs text-gray-400 capitalize",
                    attrs: { title: _vm.ProductName }
                  },
                  [_vm._v(_vm._s(_vm.ProductName.substring(0, 65) + "..."))]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex  absolute bottom-7" }, [
              _c("p", { staticClass: "font-semibold text-red-400 text-sm" }, [
                _vm._v(
                  _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                    _vm._s(_vm.CurrentPrice) +
                    " "
                )
              ]),
              _vm._v(" "),
              _vm.SalePrice > 0
                ? _c(
                    "p",
                    {
                      staticClass:
                        "font-semibold line-through text-gray-400 text-xs ml-3"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                          _vm._s(_vm.RegularPrice) +
                          " "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex absolute bottom-2" }, [
              _c("div", { staticClass: "flex items-center text-xs" }, [
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" })
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "font-regular text-sm text-secondary  ml-2" },
                [_vm._v("(45)")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=template&id=9430ddd6&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=template&id=9430ddd6& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pb-20 md:pb-24 lg:pb-32" }, [
    _vm.TrendingSliderProducts.length > 0
      ? _c(
          "div",
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "vue-glide",
              {
                attrs: {
                  type: "carousel",
                  perView: 4,
                  hoverpause: true,
                  bound: true,
                  animationDuration: 1000,
                  peek: { before: 100, after: 100 },
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
                  },
                  autoplay: 2000
                }
              },
              [
                _vm._l(_vm.TrendingSliderProducts, function(
                  Product,
                  ProductIndex
                ) {
                  return _c(
                    "vue-glide-slide",
                    { key: ProductIndex },
                    [_c("shop-product", { attrs: { Product: Product } })],
                    1
                  )
                }),
                _vm._v(" "),
                _c("template", { slot: "control" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group",
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
                        "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group",
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
              ],
              2
            )
          ],
          1
        )
      : _c(
          "div",
          {
            staticClass:
              "flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg"
          },
          [
            _c(
              "p",
              {
                staticClass:
                  "text-6xl text-gray-50 uppercase animate-pulse bg-none "
              },
              [_vm._v("Trending slider section")]
            )
          ]
        )
  ])
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
          "flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0"
      },
      [
        _c("div", { staticClass: "text-center sm:text-left" }, [
          _c(
            "h2",
            {
              staticClass:
                "font-regular text-gray-400 text-3xl md:text-4xl lg:text-7xl"
            },
            [_vm._v("Elyssi’s trends")]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                "font-regular text-gray-400-lighter text-lg md:text-xl pt-2"
            },
            [_vm._v("Be styling, no matter the season!")]
          )
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-regular text-xl text-primary",
            attrs: { href: "/collection-grid" }
          },
          [
            _vm._v("\r\n                Show more\r\n                "),
            _c("i", {
              staticClass:
                "bx bx-chevron-right text-primary transition-colors group-hover:text-primary-light pl-3 pt-2 text-xl"
            })
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Product/Product.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=0ee436e0& */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=0ee436e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrendingSlider_vue_vue_type_template_id_9430ddd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrendingSlider.vue?vue&type=template&id=9430ddd6& */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=template&id=9430ddd6&");
/* harmony import */ var _TrendingSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrendingSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrendingSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrendingSlider_vue_vue_type_template_id_9430ddd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrendingSlider_vue_vue_type_template_id_9430ddd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=template&id=9430ddd6&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=template&id=9430ddd6& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingSlider_vue_vue_type_template_id_9430ddd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrendingSlider.vue?vue&type=template&id=9430ddd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue?vue&type=template&id=9430ddd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingSlider_vue_vue_type_template_id_9430ddd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrendingSlider_vue_vue_type_template_id_9430ddd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);