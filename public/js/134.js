(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

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
    return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue"));
  }), _components),
  computed: {
    Products: function Products() {
      return this.$page.RelatedProducts;
    }
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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


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



/***/ })

}]);