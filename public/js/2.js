(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ApplicationLogo: _components_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__["default"]
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
  return _c("footer", { staticClass: "xxstheme-footer" }, [
    this.$page.currentRouteName != "login" ||
    this.$page.currentRouteName != "cart.checkout"
      ? _c("div", { staticClass: "container" }, [_vm._m(0)])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "container text-center pt-20 md:pt-28 lg:pt-32" }),
    _vm._v(" "),
    _c("div", { staticClass: "bg-center bg-no-repeat bg-cover bg-footer-bg" }, [
      _c("div", { staticClass: "container py-16 sm:py-20 md:py-24" }, [
        _c(
          "div",
          {
            staticClass:
              "w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between"
          },
          [
            _c("div", { staticClass: "text-center lg:text-left" }, [
              _c("h4", { staticClass: "font-hkbold text-white text-xl pb-8" }, [
                _vm._v("Contact")
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-reset" }, [
                _c("li", { staticClass: "pb-2 block" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide",
                      attrs: { href: "mailto:test.email0123@elyssi.com" }
                    },
                    [_vm._v(_vm._s(_vm.$page.SiteOptions.Email))]
                  )
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "pb-2 block" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide",
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
            _c(
              "div",
              { staticClass: "text-center py-16 lg:py-0" },
              [
                _c(
                  "inertia-link",
                  {
                    staticClass:
                      "font-butlerregular text-white text-4xl uppercase tracking-wider",
                    attrs: { href: _vm.route("welcome") }
                  },
                  [
                    _vm._v(
                      "\r\n                        " +
                        _vm._s(_vm.$page.SiteOptions.Title) +
                        "\r\n                        \r\n                    "
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
                            _vm._m(2)
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
                            _vm._m(3)
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
                            _vm._m(4)
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
                            _vm._m(5)
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
                            _vm._m(6)
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-center lg:text-left" }, [
              _c("h4", { staticClass: "font-hkbold text-white text-xl pb-8" }, [
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
                          "font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide",
                        attrs: { href: _vm.route("shop.index") }
                      },
                      [_vm._v("Shop")]
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
                          "font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide",
                        attrs: { href: _vm.route("contact") }
                      },
                      [_vm._v("Contact Us")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container py-8" }, [
      _c(
        "p",
        { staticClass: "font-hkregular text-secondary text-base text-center" },
        [_vm._v(_vm._s(_vm.$page.SiteOptions.FooterCopyRightText))]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "bg-center bg-no-repeat bg-cover bg-cta-bg" },
      [
        _c("div", { staticClass: "py-16 md:py-20 text-center" }, [
          _c(
            "h3",
            {
              staticClass:
                "font-butlerregular text-white text-3xl sm:text-4xl tracking-wide"
            },
            [_vm._v("\r\n                    Let's keep in touch")]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                "font-hkregular text-white text-lg sm:text-xl pt-3 px-6"
            },
            [
              _vm._v(
                "\r\n                    Join our list and save 15% off your first order."
              )
            ]
          ),
          _vm._v(" "),
          _c("form", { staticClass: "pt-10 sm:pt-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "w-5/6 sm:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto flex flex-col sm:flex-row justify-center items-center"
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "block relative h-0 w-0 overflow-hidden",
                    attrs: { for: "cta_email" }
                  },
                  [_vm._v("Email")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass:
                    "form-input bg-transparent text-sm text-white border-white uppercase",
                  attrs: {
                    type: "email",
                    name: "cta_email",
                    id: "cta_email",
                    placeholder: "ENTER YOUR EMAIL"
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-primary sm:ml-5 mt-4 sm:mt-0 w-full sm:w-auto",
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
    return _c("li", { staticClass: "pb-2 block" }, [
      _c(
        "a",
        {
          staticClass:
            "font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide",
          attrs: { href: "tel:0123234222" }
        },
        [_vm._v("0123 234 222")]
      )
    ])
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