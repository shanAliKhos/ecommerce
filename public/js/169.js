(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[169],{

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
              "w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
          },
          [
            _c("span", {
              staticClass:
                "bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-shipping"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-semibold text-orange-500 text-xl tracking-wide"
                },
                [_vm._v(" Free shipping")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-regular text-gray-500 text-base tracking-wide"
                },
                [_vm._v(" On all orders over only $50 ")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
          },
          [
            _c("span", {
              staticClass:
                "bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-support"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-semibold text-orange-500 text-xl tracking-wide"
                },
                [_vm._v(" Always available")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-regular text-gray-500 text-base tracking-wide"
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
              "w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left  pb-3 md:pb-0"
          },
          [
            _c("span", {
              staticClass:
                "bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-return"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-semibold text-orange-500 text-xl tracking-wide"
                },
                [_vm._v(" Free returns")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-regular text-gray-500 text-base tracking-wide"
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



/***/ })

}]);