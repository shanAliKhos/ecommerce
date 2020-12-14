(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_Slider_BlogPostsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/Slider/BlogPostsSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue");
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  metaInfo: {
    title: 'Blog-details'
  },
  components: {
    BlogPostsSlider: _shared_Slider_BlogPostsSlider__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
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
  computed: {
    Categories: function Categories() {
      return this.$page.Categories;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ShopProduct: function ShopProduct() {
      return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue"));
    }
  },
  mounted: function mounted() {
    new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](".posts-slider", {
      type: "carousel",
      animationDuration: 1000,
      hoverpause: true,
      autoplay: 3000,
      startAt: 0,
      perView: 2,
      gap: 0,
      peek: {
        before: 150,
        after: 150
      },
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
      }
    }).mount();
  },
  computed: {
    RelatedBlogs: function RelatedBlogs() {
      return this.$page.RelatedBlogs;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=template&id=28e1375a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=template&id=28e1375a& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "blog-sidebar" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-16" },
      [
        _c(
          "h4",
          {
            staticClass:
              "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark text-center sm:text-left"
          },
          [_vm._v(" Categories")]
        ),
        _vm._v(" "),
        _vm._l(_vm.Categories, function(Category, CategoryIndex) {
          return _c(
            "inertia-link",
            {
              key: CategoryIndex,
              staticClass:
                "flex justify-between group pb-4 border-b border-grey-dark mt-8",
              attrs: { href: _vm.route("blog.by-category", Category.slug) }
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                },
                [_vm._v(" " + _vm._s(Category.name) + " ")]
              )
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      { staticClass: "flex items-center w-full mb-16 relative" },
      [
        _c(
          "label",
          {
            staticClass: "block relative h-0 w-0 overflow-hidden",
            attrs: { for: "search_form" }
          },
          [_vm._v("Search")]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass:
            "form-input   transition-all pr-10 text-grey-darkest text-base",
          attrs: {
            type: "text",
            id: "search_form",
            placeholder: "Search the Blog"
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "focus:outline-none absolute right-0 top-0 mt-4 mr-3",
            attrs: { "aria-label": "Search button" }
          },
          [_c("i", { staticClass: "bx bx-search text-2xl" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center sm:text-left" }, [
      _c(
        "h4",
        {
          staticClass:
            "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"
        },
        [_vm._v("\n            Follow Us")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex justify-center sm:justify-start pt-8" }, [
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
            attrs: { href: "https://www.google.com" }
          },
          [_c("i", { staticClass: "bx bxl-facebook text-white" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
            attrs: { href: "https://www.google.com" }
          },
          [_c("i", { staticClass: "bx bxl-twitter text-white" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
            attrs: { href: "https://www.google.com" }
          },
          [_c("i", { staticClass: "bx bxl-instagram text-white" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",
            attrs: { href: "https://www.google.com" }
          },
          [_c("i", { staticClass: "bx bxl-pinterest text-white" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& ***!
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
  return _c("div", { staticClass: "posts-slider relative" }, [
    _c(
      "div",
      { staticClass: "glide__track", attrs: { "data-glide-el": "track" } },
      [
        _c(
          "div",
          { staticClass: "glide__slides" },
          _vm._l(_vm.RelatedBlogs, function(RelatedBlog, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "px-2 xl:px-4 glide__slide transition duration-500 ease-in-out transform  hover:-skew-y-6   origin-center "
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"
                  },
                  [
                    _c("div", {
                      staticClass:
                        "bg-no-repeat bg-cover bg-center w-full h-52",
                      style:
                        "background-image:url(" + RelatedBlog.photo_url + ")"
                    }),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass: "flex items-center group",
                        attrs: { href: _vm.route("blog.show", RelatedBlog.id) }
                      },
                      [
                        _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex items-center font-hkregular text-sm md:text-base text-secondary"
                            },
                            [
                              _c("span", [
                                _vm._v("By "),
                                _c("span", { staticClass: "font-hkbold " }, [
                                  _vm._v(_vm._s(RelatedBlog.user.name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "px-3" }, [
                                _vm._v("|")
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(RelatedBlog.created_at))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "h4",
                            {
                              staticClass:
                                "font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8 truncate "
                            },
                            [_vm._v(_vm._s(RelatedBlog.title))]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center"
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"
                            },
                            [_vm._v("Read more")]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { "data-glide-el": "controls" } }, [
      _c(
        "div",
        {
          staticClass:
            "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-ml-5 lg:-ml-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",
          attrs: { "data-glide-dir": "<" }
        },
        [
          _c("i", {
            staticClass:
              "bx bx-chevron-left text-primary transition-colors group-hover:text-white md:text-2xl p-4"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-mr-5 lg:-mr-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",
          attrs: { "data-glide-dir": ">" }
        },
        [
          _c("i", {
            staticClass:
              "bx bx-chevron-right text-primary transition-colors group-hover:text-white md:text-2xl p-4"
          })
        ]
      )
    ])
  }
]
render._withStripped = true



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



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Sidebar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_28e1375a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=28e1375a& */ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=template&id=28e1375a&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_28e1375a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_28e1375a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/Blog/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=template&id=28e1375a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=template&id=28e1375a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_28e1375a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=28e1375a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Blog/Sidebar.vue?vue&type=template&id=28e1375a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_28e1375a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_28e1375a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&");
/* harmony import */ var _BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPostsSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostsSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);