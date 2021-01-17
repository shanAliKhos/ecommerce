(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
 // import ShopProduct from './../Product/Product' 

/* harmony default export */ __webpack_exports__["default"] = ({
  components: (_components = {}, _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["Glide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["Glide"]), _defineProperty(_components, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["GlideSlide"].name, vue_glide_js__WEBPACK_IMPORTED_MODULE_0__["GlideSlide"]), _defineProperty(_components, "ShopProduct", function ShopProduct() {
    return __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue"));
  }), _components),
  computed: {
    Products: function Products() {
      return this.$page.RelatedProducts;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _components_ShowProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ShowProduct */ "./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue");
/* harmony import */ var _shared_Slider_RelatedProductsSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/Slider/RelatedProductsSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue");
//
//
//
//
//
//
//
//
 // import ProductAttributes from './components/ProductAttributes'  



/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.$page.Product.name)
    };
  },
  components: {
    ShopProduct: _components_ShowProduct__WEBPACK_IMPORTED_MODULE_1__["default"],
    RelatedProductsSlider: _shared_Slider_RelatedProductsSlider__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pb-20 md:pb-32" },
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
          _vm._l(_vm.Products, function(Product, ProductIndex) {
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
                  "transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group",
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
                  "transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group",
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "h2",
        {
          staticClass:
            "font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"
        },
        [_vm._v("Related Product")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "font-hkregular text-secondary-lighter text-lg md:text-xl pt-2 pb-6 sm:pb-8 lg:pb-0"
        },
        [_vm._v(" Get the latest news & updates from store")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=template&id=aa60e68a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=template&id=aa60e68a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [_c("shop-product"), _vm._v(" "), _c("related-products-slider")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelatedProductsSlider.vue?vue&type=template&id=6aef0811& */ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&");
/* harmony import */ var _RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedProductsSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProductsSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProductsSlider.vue?vue&type=template&id=6aef0811& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/Show.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_aa60e68a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=aa60e68a& */ "./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=template&id=aa60e68a&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_aa60e68a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_aa60e68a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=template&id=aa60e68a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=template&id=aa60e68a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_aa60e68a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=aa60e68a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Show.vue?vue&type=template&id=aa60e68a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_aa60e68a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_aa60e68a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);