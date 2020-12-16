(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[199],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ApplicationLogo */ "./resources/js/Pages/Ecomerce/shared/Partials/components/ApplicationLogo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ApplicationLogo: _components_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    IsVisibleFooter: function IsVisibleFooter() {
      switch (this.$page.currentRouteName) {
        case 'login':
          return false;
          break;

        case 'register':
          return false;
          break;

        case 'password.request':
          return false;
          break;

        case 'password.reset':
          return false;
          break;

        case 'verification.notice':
          return false;
          break;

        case 'cart.success':
          return false;
          break;

        default:
          return true;
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=template&id=3223f624&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=template&id=3223f624& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _vm.IsVisibleFooter
    ? _c("div", { staticClass: "xxstheme-footer bg-gray-200 " }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex py-16 sm:py-20 md:py-24 text-gray-500" },
          [
            _c(
              "div",
              { staticClass: "text-center py-16 lg:py-0" },
              [
                _c(
                  "inertia-link",
                  {
                    staticClass:
                      "font-semibold  text-4xl uppercase tracking-wider",
                    attrs: { href: _vm.route("welcome") }
                  },
                  [
                    _vm._v(
                      "\r\n                        " +
                        _vm._s(_vm.$page.SiteOptions.Title) +
                        "\r\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center justify-center pt-5" },
                  [
                    _vm.$page.SiteOptions.Social.Facebook
                      ? _c(
                          "a",
                          {
                            staticClass: "group",
                            attrs: {
                              href: _vm.$page.SiteOptions.Social.Facebook,
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Social link")
                            ]),
                            _vm._v(" "),
                            _vm._m(1)
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$page.SiteOptions.Social.Twitter
                      ? _c(
                          "a",
                          {
                            staticClass: "group",
                            attrs: {
                              href: _vm.$page.SiteOptions.Social.Twitter,
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Social link")
                            ]),
                            _vm._v(" "),
                            _vm._m(2)
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$page.SiteOptions.Social.Instagram
                      ? _c(
                          "a",
                          {
                            staticClass: "group",
                            attrs: {
                              href: _vm.$page.SiteOptions.Social.Instagram,
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Social link")
                            ]),
                            _vm._v(" "),
                            _vm._m(3)
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$page.SiteOptions.Social.Pinterest
                      ? _c(
                          "a",
                          {
                            staticClass: "group",
                            attrs: {
                              href: _vm.$page.SiteOptions.Social.Pinterest,
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Social link")
                            ]),
                            _vm._v(" "),
                            _vm._m(4)
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$page.SiteOptions.Social.LinkedIn
                      ? _c(
                          "a",
                          {
                            staticClass: "group",
                            attrs: {
                              href: _vm.$page.SiteOptions.Social.LinkedIn,
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Social link")
                            ]),
                            _vm._v(" "),
                            _vm._m(5)
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-around"
              },
              [
                _c("div", { staticClass: "text-center lg:text-left" }, [
                  _c("p", { staticClass: "font-semibold  text-2xl pb-8" }, [
                    _vm._v("Contact")
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-reset" }, [
                    _c("li", { staticClass: "pb-2 block" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "font-semibold  transition-colors hover:text-primary text-base tracking-wide",
                          attrs: { href: "mailto:test.email0123@elyssi.com" }
                        },
                        [_vm._v(_vm._s(_vm.$page.SiteOptions.Email))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "pb-2 block" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "font-semibold  transition-colors hover:text-primary text-base tracking-wide",
                          attrs: { href: "tel:0123234222" }
                        },
                        [_vm._v(_vm._s(_vm.$page.SiteOptions.Phone))]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "pb-2 block" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "font-semibold  transition-colors hover:text-primary text-base tracking-wide",
                            attrs: { href: _vm.route("welcome") }
                          },
                          [
                            _vm._v(
                              " \r\n                                " +
                                _vm._s(_vm.$page.SiteOptions.Title) +
                                "\r\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center lg:text-left" }, [
                  _c("p", { staticClass: "font-semibold  text-2xl pb-8" }, [
                    _vm._v("Link")
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-reset" }, [
                    _c(
                      "li",
                      { staticClass: "pb-2 block" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "font-semibold  hover:text-primary text-base tracking-wide",
                            attrs: { href: _vm.route("welcome") }
                          },
                          [_vm._v("HOME")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "pb-2 block" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "font-semibold  hover:text-primary text-base tracking-wide",
                            attrs: { href: _vm.route("shop.index") }
                          },
                          [_vm._v("SHOP")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "pb-2 block" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "font-semibold  hover:text-primary text-base tracking-wide",
                            attrs: { href: _vm.route("blog.index") }
                          },
                          [_vm._v("BLOG")]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex item-centen justify-center border-gray-50 border rounded"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "font-semibold text-gray-400 text-base rounded bg-white py-1 px-5 mb-2"
              },
              [
                _c(
                  "p",
                  {
                    staticClass:
                      "flex transition duration-500 ease-in-out transform  hover:translate-x-2 hover:text-orange-500 "
                  },
                  [_vm._v(_vm._s(_vm.$page.SiteOptions.FooterCopyRightText))]
                )
              ]
            )
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "bg-gray-50 lg:rounded-b-full rounded-b-xl" },
      [
        _c("div", { staticClass: "py-10 text-center" }, [
          _c(
            "p",
            {
              staticClass:
                "font-semibold text-primary text-3xl sm:text-4xl tracking-wide"
            },
            [_vm._v(" Let's keep in touch")]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "font-regular  text-lg sm:text-xl pt-3 px-6" },
            [_vm._v(" Join our list and save 15% off your first order.")]
          ),
          _vm._v(" "),
          _c("form", { staticClass: "pt-10 sm:pt-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center"
              },
              [
                _c("input", {
                  staticClass:
                    "w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white",
                  attrs: {
                    type: "email",
                    name: "cta_email",
                    id: "cta_email",
                    placeholder: "ENTER YOUR EMAIL"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center"
              },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mt-4  w-full shadow",
                    attrs: { type: "button", "aria-label": "Subscribe button" }
                  },
                  [_vm._v("SUBSCRIBE")]
                )
              ]
            )
          ])
        ])
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
          "bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"
      },
      [
        _c("i", {
          staticClass:
            "bx bxl-facebook text-secondary transition-colors group-hover:text-white"
        })
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
          "bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"
      },
      [
        _c("i", {
          staticClass:
            "bx bxl-twitter text-secondary transition-colors group-hover:text-white"
        })
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
          "bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"
      },
      [
        _c("i", {
          staticClass:
            "bx bxl-instagram text-secondary transition-colors group-hover:text-white"
        })
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
          "bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"
      },
      [
        _c("i", {
          staticClass:
            "bx bxl-pinterest text-secondary transition-colors group-hover:text-white"
        })
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
          "bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"
      },
      [
        _c("i", {
          staticClass:
            "bx bxl-linkedin text-secondary transition-colors group-hover:text-white"
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_3223f624___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=3223f624& */ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=template&id=3223f624&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_3223f624___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_3223f624___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=template&id=3223f624&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=template&id=3223f624& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3223f624___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=3223f624& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue?vue&type=template&id=3223f624&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3223f624___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3223f624___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);