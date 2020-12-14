(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

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
 // import HeroSlider from './../shared/Slider/HeroSlider'  
// import TrendingCollection from './components/TrendingCollection'   
// import TrendingSlider from './../shared/Slider/TrendingSlider'  
// import WelcomeTrendingMultiSlider from './../shared/Slider/WelcomeTrendingMultiSlider'  
// import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'  
// import WelcomeSaleBanner from './components/WelcomeSaleBanner'   
// import WelcomeBrands from './components/WelcomeBrands'   
// import SaleSlider from './../shared/Slider/SaleSlider'  

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: 'Welcome'
  },
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    HeroSlider: function HeroSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(39), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/HeroSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/HeroSlider.vue"));
    },
    WelcomeIcons: function WelcomeIcons() {
      return __webpack_require__.e(/*! import() */ 170).then(__webpack_require__.bind(null, /*! ./../shared/Partials/components/WelcomeIcons */ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue"));
    },
    TrendingCollection: function TrendingCollection() {
      return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./components/TrendingCollection */ "./resources/js/Pages/Ecomerce/welcome/components/TrendingCollection.vue"));
    },
    TrendingSlider: function TrendingSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/TrendingSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/TrendingSlider.vue"));
    },
    WelcomeTrendingMultiSlider: function WelcomeTrendingMultiSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(39), __webpack_require__.e(173)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/WelcomeTrendingMultiSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/WelcomeTrendingMultiSlider.vue"));
    },
    WelcomeSaleBanner: function WelcomeSaleBanner() {
      return __webpack_require__.e(/*! import() */ 177).then(__webpack_require__.bind(null, /*! ./components/WelcomeSaleBanner */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeSaleBanner.vue"));
    },
    WelcomeBrands: function WelcomeBrands() {
      return __webpack_require__.e(/*! import() */ 176).then(__webpack_require__.bind(null, /*! ./components/WelcomeBrands */ "./resources/js/Pages/Ecomerce/welcome/components/WelcomeBrands.vue"));
    },
    SaleSlider: function SaleSlider() {
      return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(169)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/SaleSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleSlider.vue"));
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
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
    { attrs: { id: "main" } },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("hero-slider"),
          _vm._v(" "),
          _c("welcome-icons"),
          _vm._v(" "),
          _c("trending-collection"),
          _vm._v(" "),
          _c("TrendingSlider")
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
          _c("SaleSlider")
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