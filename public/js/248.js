(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[248],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import HeroSlider from './../shared/Slider/HeroSlider'
// import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'
// import TrendingCollection from './components/TrendingCollection'
// import TrendingSlider from './../shared/Slider/TrendingSlider'
// import TrendingMultiSlider from './../shared/Slider/TrendingMultiSlider'
// import WelcomeBrands from './components/WelcomeBrands'
// import SaleBanner from './components/SaleBanner'
// import SaleSlider from './../shared/Slider/SaleSlider'

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Welcome"
  },
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    HeroSlider: function HeroSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(198)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/HeroSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/HeroSlider.vue"));
    },
    WelcomeIcons: function WelcomeIcons() {
      return __webpack_require__.e(/*! import() */ 202).then(__webpack_require__.bind(null, /*! ./../shared/Partials/components/WelcomeIcons */ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue"));
    },
    SaleSlider: function SaleSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(199)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/SaleSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue"));
    },
    TrendingCollection: function TrendingCollection() {
      return __webpack_require__.e(/*! import() */ 214).then(__webpack_require__.bind(null, /*! ./components/TrendingCollection */ "./resources/js/Pages/Ecomerce/welcome/components/TrendingCollection.vue"));
    },
    TrendingSlider: function TrendingSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(200)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/TrendingSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue"));
    },
    TrendingMultiSlider: function TrendingMultiSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(53)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/TrendingMultiSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingMultiSlider.vue"));
    },
    WelcomeBrands: function WelcomeBrands() {
      return __webpack_require__.e(/*! import() */ 204).then(__webpack_require__.bind(null, /*! ./components/WelcomeBrands */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue"));
    },
    SaleBanner: function SaleBanner() {
      return __webpack_require__.e(/*! import() */ 203).then(__webpack_require__.bind(null, /*! ./components/SaleBanner */ "./resources/js/Pages/Ecomerce/welcome/components/SaleBanner.vue"));
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit("sidebar-close");
  }
});

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
    [
      _c("HeroSlider"),
      _vm._v(" "),
      _c("WelcomeIcons"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pb-20 md:pb-32" },
        [_vm._m(0), _vm._v(" "), _c("SaleSlider")],
        1
      ),
      _vm._v(" "),
      _c("TrendingCollection"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pb-20 md:pb-24 lg:pb-32" },
        [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0"
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-regular text-xl text-primary",
                  attrs: { href: _vm.route("shop.index") }
                },
                [
                  _vm._v("\n        Show more\n        "),
                  _c("i", {
                    staticClass:
                      "bx bx-chevron-right text-orange-500 transition-colors group-hover:text-orange-400 pl-3 pt-2 text-xl"
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("TrendingSlider")
        ],
        1
      ),
      _vm._v(" "),
      _c("TrendingMultiSlider"),
      _vm._v(" "),
      _c("WelcomeBrands")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center pb-12 md:pb-5" }, [
      _c(
        "h2",
        {
          staticClass:
            "font-regular text-gray-600 text-3xl md:text-4xl lg:text-7xl uppercase"
        },
        [_vm._v("\n        On sale\n      ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "font-regular text-gray-500 text-lg md:text-xl" },
        [_vm._v("\n        Get it while they last!\n      ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center sm:text-left" }, [
      _c(
        "h2",
        {
          staticClass:
            "font-regular text-gray-500 text-3xl md:text-4xl lg:text-7xl"
        },
        [_vm._v("\n          Store trends\n        ")]
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "font-regular text-gray-400 text-lg md:text-xl pt-2" },
        [_vm._v("\n          Be styling, no matter the season!\n        ")]
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



/***/ })

}]);