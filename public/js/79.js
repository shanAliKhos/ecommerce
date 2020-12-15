(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var Sidebar = function Sidebar() {
  return __webpack_require__.e(/*! import() */ 141).then(__webpack_require__.bind(null, /*! ./Sidebar */ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    Sidebar: Sidebar
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  },
  computed: {
    Blogs: function Blogs() {
      return this.$page.Blogs;
    },
    FeaturedBlogs: function FeaturedBlogs() {
      return this.$page.FeaturedBlogs;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=template&id=35a14b50&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=template&id=35a14b50& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between"
      },
      [
        _c(
          "div",
          { staticClass: "lg:w-2/3" },
          [
            _c(
              "h2",
              {
                staticClass:
                  "font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl text-center lg:text-left"
              },
              [_vm._v(" Our Blog")]
            ),
            _vm._v(" "),
            _vm._l(_vm.Blogs, function(Blog, Blogindex) {
              return _c(
                "inertia-link",
                {
                  key: Blogindex,
                  staticClass:
                    "block rounded-lg shadow border border-grey group mt-10 lg:mt-12",
                  attrs: { href: _vm.route("blog.show", Blog.id) }
                },
                [
                  _c("div", {
                    staticClass:
                      "bg-no-repeat bg-cover bg-top w-full h-52 sm:h-64 lg:h-68",
                    style: "background-image:url(" + Blog.photo_url + ")"
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                    _c("div", {
                      staticClass:
                        "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                      style:
                        "background-image:url(" +
                        Blog.user.profile_photo_url +
                        ")"
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center font-hkregular text-sm md:text-base text-secondary"
                      },
                      [
                        _c("span", [
                          _vm._v("By "),
                          _c("span", { staticClass: "font-hkbold" }, [
                            _vm._v(_vm._s(Blog.user.name))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(Blog.created_at))])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "sm:w-5/6 lg:w-11/12 xl:w-3/4" }, [
                      _c(
                        "h4",
                        {
                          staticClass:
                            "font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-5 "
                        },
                        [_vm._v(" " + _vm._s(Blog.title))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex items-center" }, [
                      _c(
                        "span",
                        {
                          staticClass:
                            "bg-white transition-colors group-hover:bg-primary border border-grey-darkest group-hover:border-primary rounded-full p-1 flex items-center"
                        },
                        [
                          _c("i", {
                            staticClass:
                              "bx bx-chevron-right transition-colors text-grey-darkest group-hover:text-white text-xl"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-hksemibold transition-colors text-grey-darkest group-hover:text-primary sm:text-lg pl-3 sm:pl-5"
                        },
                        [_vm._v("Read\n                            more")]
                      )
                    ])
                  ])
                ]
              )
            }),
            _vm._v(" "),
            !_vm.Blogs.length > 0
              ? _c(
                  "div",
                  {
                    staticClass:
                      "w-full mx-auto md:mx-0 px-2 xl:px-5 mb-10 mt-10"
                  },
                  [
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-semibold text-gray-500 text-2xl pt-5 pb-5 flex item-center justify-center"
                      },
                      [_vm._v(" No Record Found")]
                    )
                  ]
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0"
          },
          [_c("Sidebar")],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 xl:pb-16 border-b border-grey-dark"
      },
      [
        _c(
          "h2",
          {
            staticClass:
              "font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl text-center"
          },
          [_vm._v(" Top Feature Blog")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-col md:flex-row justify-between pt-12 lg:pt-16 -mx-2 xl:-mx-5"
          },
          [
            _vm._l(_vm.FeaturedBlogs, function(
              FeaturedBlog,
              FeaturedBlogindex
            ) {
              return _c(
                "div",
                {
                  key: FeaturedBlogindex,
                  staticClass: "md:w-1/2 mx-auto md:mx-0 px-2 xl:px-5 mb-10"
                },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block rounded-lg shadow border border-grey group",
                      attrs: { href: _vm.route("blog.show", FeaturedBlog.id) }
                    },
                    [
                      _c("div", {
                        staticClass:
                          "bg-no-repeat bg-cover bg-center w-full h-52 sm:h-64 lg:h-68",
                        style:
                          "background-image:url(" + FeaturedBlog.photo_url + ")"
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                        _c("div", {
                          staticClass:
                            "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                          style:
                            "background-image:url(" +
                            FeaturedBlog.user.profile_photo_url +
                            ")"
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center font-hkregular text-sm md:text-base text-secondary"
                          },
                          [
                            _c("span", [
                              _vm._v("By "),
                              _c("span", { staticClass: "font-hkbold" }, [
                                _vm._v(_vm._s(FeaturedBlog.user.name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(_vm._s(FeaturedBlog.created_at))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "sm:w-5/6 lg:w-full" }, [
                          _c(
                            "h4",
                            {
                              staticClass:
                                "font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-5 "
                            },
                            [_vm._v(_vm._s(FeaturedBlog.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "bg-white group-hover:bg-primary border border-grey-darkest group-hover:border-primary transition-colors   rounded-full h-8 w-8 flex items-center justify-center"
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "bx bx-chevron-right text-grey-darkest transition-colors group-hover:text-white text-xl"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-hksemibold text-grey-darkest transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5 -mt-1"
                            },
                            [_vm._v("Read more")]
                          )
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            !_vm.FeaturedBlogs.length > 0
              ? _c(
                  "div",
                  { staticClass: "w-full mx-auto md:mx-0 px-2 xl:px-5 mb-10 " },
                  [
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-semibold text-gray-500 text-2xl pt-5 pb-5 flex item-center justify-center"
                      },
                      [_vm._v(" No Record Found")]
                    )
                  ]
                )
              : _vm._e()
          ],
          2
        )
      ]
    )
  ])
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

/***/ "./resources/js/Pages/Ecomerce/Blog/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_35a14b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=35a14b50& */ "./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=template&id=35a14b50&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_35a14b50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_35a14b50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/Blog/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=template&id=35a14b50&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=template&id=35a14b50& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_35a14b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=35a14b50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Index.vue?vue&type=template&id=35a14b50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_35a14b50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_35a14b50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);