(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['Product'],
  methods: {// AddToCart(Item){   
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
    },
    SetLable: function SetLable() {
      var lable;

      if (this.Product.sale_price > 0) {
        lable = {
          Color: 'text-orange-500',
          Title: '-' + Math.round((this.Product.regular_price - this.Product.sale_price) / this.Product.regular_price * 100) + '%',
          Active: true
        };
      } else if (this.Product.is_featured) {
        lable = {
          Color: 'text-blue-500',
          Title: 'Trend',
          Active: true
        };
      } else {
        lable = {
          Color: 'text-green-500',
          Title: 'new',
          Active: true
        };
      }

      return lable;
    },
    Currency: function Currency() {
      return this.$page.SiteOptions.Currency.Symbol;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_glide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-glide-js */ "./node_modules/vue-glide-js/dist/vue-glide.common.js");
/* harmony import */ var vue_glide_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_glide_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: (_components = {}, _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["Glide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["Glide"]), _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["GlideSlide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["GlideSlide"]), _defineProperty(_components, "ShopProduct", _Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"]), _components),
  computed: {
    SaleSliderProducts: function SaleSliderProducts() {
      return this.$page.SaleSliders ? this.$page.SaleSliders.sale_slider : [];
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
  return _c("div", { staticClass: "p-2 " }, [
    _c(
      "div",
      {
        staticClass:
          "product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "focus:outline-none",
            attrs: { href: _vm.route("shop.show", _vm.Product.slug) }
          },
          [
            _vm.SetLable.Active
              ? _c(
                  "div",
                  {
                    staticClass:
                      "absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30"
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-semibold text-sm uppercase tracking-wide",
                        class: _vm.SetLable.Color
                      },
                      [_vm._v(" " + _vm._s(_vm.SetLable.Title))]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-center items-center h-64 pb-4 p-2" },
              [
                _c("img", {
                  staticClass:
                    "w-auto h-full bg-center bg-no-repeat bg-cover transition transform hover:scale-105  duration-500 ease-in-out hover:shadow-lg rounded-lg",
                  attrs: { src: _vm.ProductImage }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center px-4 py-1" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-semibold text-xs text-gray-400 capitalize  overflow-ellipsis truncate overflow-hidden",
                  attrs: { title: _vm.ProductName }
                },
                [_vm._v(_vm._s(_vm.ProductName))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex px-4 py-1" }, [
              _c(
                "p",
                { staticClass: "font-semibold text-red-500 text-normal" },
                [
                  _vm._v(
                    _vm._s(_vm.Currency) + " " + _vm._s(_vm.CurrentPrice) + " "
                  )
                ]
              ),
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
                        _vm._s(_vm.Currency) + _vm._s(_vm.RegularPrice) + " "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex px-4" }, [
              _c("div", { staticClass: "flex items-center  " }, [
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
                { staticClass: "font-regular text-sm text-gray-500  ml-2" },
                [_vm._v("(45)")]
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=template&id=dd49c592&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=template&id=dd49c592& ***!
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
  return _c("div", [
    _vm.SaleSliderProducts.length > 0
      ? _c(
          "div",
          [
            _c(
              "vue-glide",
              {
                attrs: {
                  type: "carousel",
                  perView: 4,
                  hoverpause: true,
                  bound: true,
                  animationDuration: 200,
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
                _vm._l(_vm.SaleSliderProducts, function(Product, ProductIndex) {
                  return _c(
                    "vue-glide-slide",
                    { key: ProductIndex },
                    [
                      _c("shop-product", {
                        staticClass: "relative mt-2 mb-5 pb-2 z-30",
                        attrs: { Product: Product }
                      })
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c("template", { slot: "control" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25 left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 md:cursor-pointer group",
                      attrs: { "data-glide-dir": "<" }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "bx bx-chevron-left text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 md:cursor-pointer group",
                      attrs: { "data-glide-dir": ">" }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "bx bx-chevron-right text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
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
              "p-10 flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg"
          },
          [_vm._m(0)]
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-row group animate-pulse" }, [
      _c(
        "p",
        {
          staticClass:
            "flex item-center justify-center text-6xl text-gray-50 uppercase"
        },
        [_vm._v("EMPTY SLIDER")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "flex item-center justify-center text-2xl text-gray-200 uppercase"
        },
        [_vm._v("add some slide to see slider")]
      )
    ])
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

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleSlider_vue_vue_type_template_id_dd49c592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleSlider.vue?vue&type=template&id=dd49c592& */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=template&id=dd49c592&");
/* harmony import */ var _SaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleSlider_vue_vue_type_template_id_dd49c592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleSlider_vue_vue_type_template_id_dd49c592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=template&id=dd49c592&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=template&id=dd49c592& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleSlider_vue_vue_type_template_id_dd49c592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleSlider.vue?vue&type=template&id=dd49c592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue?vue&type=template&id=dd49c592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleSlider_vue_vue_type_template_id_dd49c592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleSlider_vue_vue_type_template_id_dd49c592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);