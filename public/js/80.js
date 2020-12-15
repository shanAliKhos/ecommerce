(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
 // import Sidebar from './Sidebar'  
// import BlogPostsSlider from './../shared/Slider/BlogPostsSlider'  

var Sidebar = function Sidebar() {
  return __webpack_require__.e(/*! import() */ 141).then(__webpack_require__.bind(null, /*! ./Sidebar */ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue"));
};

var BlogPostsSlider = function BlogPostsSlider() {
  return Promise.all(/*! import() */[__webpack_require__.e(46), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, /*! ./../shared/Slider/BlogPostsSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: {
    title: 'Blog-details'
  },
  components: {
    BlogPostsSlider: BlogPostsSlider,
    Sidebar: Sidebar
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  },
  computed: {
    Blog: function Blog() {
      return this.$page.blog;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=template&id=e8262d22&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=template&id=e8262d22& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("div", {
      staticClass:
        "bg-no-repeat bg-cover bg-center w-full h-64 sm:h-76 md:h-90 xl:h-96",
      style: "background-image:url(" + _vm.Blog.photo_url + ")"
    }),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-col sm:flex-row" }, [
      _c("div", {
        staticClass:
          "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 -mt-10 ml-5 md:ml-8",
        style: "background-image:url(" + _vm.Blog.user.profile_photo_url + ")"
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex justify-center items-center sm:pl-10 md:pl-12 py-3 sm:py-4 md:py-6 font-hkregular text-base text-secondary"
        },
        [
          _c("span", [
            _vm._v("By\n                "),
            _c("span", { staticClass: "font-hkbold" }, [
              _vm._v(_vm._s(_vm.Blog.user.name))
            ])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
          _vm._v(" "),
          _c("span", [_vm._v("03 May 2019")])
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "border-b border-grey-dark" }, [
      _c(
        "div",
        {
          staticClass:
            "xl:w-11/12 pt-10 pb-20 flex flex-col lg:flex-row justify-between"
        },
        [
          _c(
            "div",
            { staticClass: "lg:w-2/3 text-center sm:text-left content" },
            [
              _c("h1", { staticClass: "pb-3 md:pb-5" }, [
                _vm._v(_vm._s(_vm.Blog.title))
              ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "content",
                domProps: { innerHTML: _vm._s(_vm.Blog.body) }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0"
            },
            [_c("Sidebar")],
            1
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "pt-16 pb-16 sm:pb-20" },
      [
        _c(
          "h2",
          {
            staticClass:
              "font-butlerregular text-secondary text-3xl sm:text-4xl md:text-7xl lg:text-5xl pb-2 md:pb-3 text-center"
          },
          [_vm._v(" Related Blogs ")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "font-hkregular text-secondary-lighter text-base md:text-lg text-center pb-5 sm:pb-12 md:pb-2 mb-5"
          },
          [
            _vm._v(
              " For powerful features, great design and support from the developer."
            )
          ]
        ),
        _vm._v(" "),
        _c("blog-posts-slider")
      ],
      1
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
          "flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6"
      },
      [
        _c("span", { staticClass: "font-hkbold text-base text-secondary" }, [
          _vm._v("678")
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "font-hkregular text-base text-secondary pl-3 sm:pl-0 md:pl-3"
          },
          [_vm._v("Share")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6"
      },
      [
        _c("span", { staticClass: "font-hkbold text-base text-secondary" }, [
          _vm._v("30")
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "font-hkregular text-base text-secondary pl-3 sm:pl-3"
          },
          [_vm._v("Comments")]
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

/***/ "./resources/js/Pages/Ecomerce/Blog/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Show.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_e8262d22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=e8262d22& */ "./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=template&id=e8262d22&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_e8262d22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_e8262d22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/Blog/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=template&id=e8262d22&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=template&id=e8262d22& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_e8262d22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=e8262d22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=template&id=e8262d22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_e8262d22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_e8262d22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);