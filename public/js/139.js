(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['selectedSku'],
  computed: {
    ProductName: function ProductName() {
      return this.$page.Product.name;
    },
    ProductIsOnSale: function ProductIsOnSale() {
      return this.selectedSku.id ? this.selectedSku.on_sale : this.$page.Product.on_sale;
    },
    ProductRegularPrice: function ProductRegularPrice() {
      return this.selectedSku.regular_price ? this.selectedSku.regular_price : this.$page.Product.regular_price;
    },
    ProductRating: function ProductRating() {
      return this.$page.Product.rating;
    },
    ProductCurrentPrice: function ProductCurrentPrice() {
      return this.selectedSku.current_price ? this.selectedSku.current_price : this.$page.Product.current_price;
    },
    ProductCategories: function ProductCategories() {
      return this.$page.Product.categories.map(function (categories) {
        return categories.name;
      });
    },
    ProductBrand: function ProductBrand() {
      return this.$page.Product.brand ? this.$page.Product.brand.name : '';
    },
    Currency: function Currency() {
      return this.$page.SiteOptions.Currency.Symbol;
    },
    ProductLabel: function ProductLabel() {
      if (this.ProductCurrentPrice > 0) {
        return this.$page.Product.label;
      } else {
        return {
          bg_color: 'bg-red-500',
          active: 'true',
          title: 'De-activated Product'
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=template&id=60ba60a1&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=template&id=60ba60a1& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-title" }, [
    _c("div", { staticClass: "border-b border-grey-dark mb-8" }, [
      _c("div", { staticClass: "flex items-center" }, [
        _c(
          "p",
          {
            staticClass:
              "font-mono text-3xl capitalize text-gray-900 overflow-ellipsis overflow-hidden"
          },
          [_vm._v(_vm._s(_vm.ProductName))]
        ),
        _vm._v(" "),
        _vm.ProductLabel.active
          ? _c(
              "small",
              {
                staticClass:
                  "rounded-full text-white uppercase text-sm text-center px-4 py-2 m-2",
                class: _vm.ProductLabel.bg_color
              },
              [_vm._v(_vm._s(_vm.ProductLabel.title))]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex items-center  " }, [
        _c(
          "div",
          { staticClass: "flex items-center" },
          _vm._l(5, function(n) {
            return _c("i", {
              key: n,
              staticClass: "bx text-yellow-300 border border-white text-lg",
              class: {
                "bxs-star": n <= _vm.ProductRating,
                "bx-star": n > _vm.ProductRating
              }
            })
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex items-center " }, [
        _c("span", { staticClass: "font-semibold text-red-600 text-2xl" }, [
          _vm._v(_vm._s(_vm.Currency) + " " + _vm._s(_vm.ProductCurrentPrice))
        ]),
        _vm._v(" "),
        _vm.ProductIsOnSale
          ? _c(
              "span",
              {
                staticClass:
                  "font-semibold text-grey-darker text-xl line-through pl-5"
              },
              [
                _vm._v(
                  _vm._s(_vm.Currency) + " " + _vm._s(_vm.ProductRegularPrice)
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex items-center justify-between border-t text-xs py-1 font-semibold "
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap items-center  " }, [
            _c("div", [
              _c("p", [
                _vm._v(
                  _vm._s(_vm.ProductBrand ? _vm.ProductBrand : "N/A") + " "
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex  items-center justify-between border-t text-xs py-1 font-semibold "
        },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-wrap items-center w-3/4 " }, [
            _c(
              "div",
              [
                _vm.ProductCategories.length < 1
                  ? _c("p", [_vm._v("N/A")])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.ProductCategories, function(ProductCategory, index) {
                  return _c("span", { key: index }, [
                    _c("span", [_vm._v(_vm._s(ProductCategory))]),
                    _vm._v(" "),
                    _vm.ProductCategories.length > index + 1
                      ? _c("span", [_vm._v("| ")])
                      : _vm._e()
                  ])
                })
              ],
              2
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap items-center" }, [
      _c("p", [_vm._v("Brand")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap items-center" }, [
      _c("p", [_vm._v("Categories")])
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

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductHeader_vue_vue_type_template_id_60ba60a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductHeader.vue?vue&type=template&id=60ba60a1& */ "./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=template&id=60ba60a1&");
/* harmony import */ var _ProductHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductHeader.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductHeader_vue_vue_type_template_id_60ba60a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductHeader_vue_vue_type_template_id_60ba60a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=template&id=60ba60a1&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=template&id=60ba60a1& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductHeader_vue_vue_type_template_id_60ba60a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductHeader.vue?vue&type=template&id=60ba60a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductHeader.vue?vue&type=template&id=60ba60a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductHeader_vue_vue_type_template_id_60ba60a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductHeader_vue_vue_type_template_id_60ba60a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);