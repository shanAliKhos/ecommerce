(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partials/AppHeader */ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue");
/* harmony import */ var _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/AppFooter */ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue");
/* harmony import */ var _Partials_components_FlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partials/components/FlashMessage */ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import DialogModal from './../../Shared/DialogModal'  
// import SecondaryButton from './../../Shared/SecondaryButton'  
// import LoginForm from './../../Auth/Login'  


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppHeader: _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    FlashMessage: _Partials_components_FlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"] // DialogModal,
    // LoginForm,
    // SecondaryButton,

  },
  // data() {
  //     return {
  //         LoginModal:true,
  //     }
  // },
  created: function created() {
    var _this = this;

    this.$root.$on('open-login-modal', function () {
      _this.LoginModal = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    Alert: function Alert() {
      if (this.$page.flash.success) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'success',
          title: this.$page.flash.success
        });
      }

      if (this.$page.flash.error) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'error',
          title: this.$page.flash.error
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=template&id=491133b4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=template&id=491133b4& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
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
              _c(
                "div",
                { staticClass: "md:w-1/2 mx-auto md:mx-0 px-2 xl:px-5 mb-10" },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "block rounded-lg shadow border border-grey group",
                      attrs: { href: "/post" }
                    },
                    [
                      _c("div", {
                        staticClass:
                          "bg-no-repeat bg-cover bg-center w-full h-52 sm:h-64 lg:h-68",
                        staticStyle: {
                          "background-image": "url(./img/post-05.jpg)"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                        _c("div", {
                          staticClass:
                            "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                          staticStyle: {
                            "background-image": "url(./img/blog-author.jpg)"
                          }
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
                                _vm._v("Katherine S.")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                            _vm._v(" "),
                            _c("span", [_vm._v("02 May 2019")])
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
                            [
                              _vm._v(
                                "\n                                How to make the most of the rest of the year\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "sm:w-5/6 md:w-full" }, [
                          _c(
                            "p",
                            {
                              staticClass:
                                "font-hkregular text-secondary-lighter text-sm md:text-base pb-6 sm:pb-8"
                            },
                            [
                              _vm._v(
                                "\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                tempor incididunt ut labore et dolore magna aliqua."
                              )
                            ]
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
                            [
                              _vm._v(
                                "Read\n                                more"
                              )
                            ]
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
                { staticClass: "md:w-1/2 mx-auto md:mx-0 px-2 xl:px-5 mb-10" },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "block rounded-lg shadow border border-grey group",
                      attrs: { href: "/post" }
                    },
                    [
                      _c("div", {
                        staticClass:
                          "bg-no-repeat bg-cover bg-center w-full h-52 sm:h-64 lg:h-68",
                        staticStyle: {
                          "background-image": "url(./img/post-04.jpg)"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                        _c("div", {
                          staticClass:
                            "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                          staticStyle: {
                            "background-image": "url(./img/blog-author.jpg)"
                          }
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
                                _vm._v("Katherine S.")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                            _vm._v(" "),
                            _c("span", [_vm._v("03 May 2019")])
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
                            [
                              _vm._v(
                                "\n                                Looking forward: Planning for the winter’s outfits\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "sm:w-5/6 md:w-full" }, [
                          _c(
                            "p",
                            {
                              staticClass:
                                "font-hkregular text-secondary-lighter text-sm md:text-base pb-6 sm:pb-8"
                            },
                            [
                              _vm._v(
                                "\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n                                tempor incididunt ut labore et dolore magna aliqua."
                              )
                            ]
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
                            [
                              _vm._v(
                                "Read\n                                more"
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between"
        },
        [
          _c("div", { staticClass: "lg:w-2/3" }, [
            _c(
              "h2",
              {
                staticClass:
                  "font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl text-center lg:text-left"
              },
              [_vm._v("\n                Our Blog")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "block rounded-lg shadow border border-grey group mt-10 lg:mt-12",
                attrs: { href: "/post" }
              },
              [
                _c("div", {
                  staticClass:
                    "bg-no-repeat bg-cover bg-top w-full h-52 sm:h-64 lg:h-68",
                  staticStyle: { "background-image": "url(./img/post-08.jpg)" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                  _c("div", {
                    staticClass:
                      "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                    staticStyle: {
                      "background-image": "url(./img/blog-author.jpg)"
                    }
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
                          _vm._v("Katherine S.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("02 May 2019")])
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
                      [
                        _vm._v(
                          "\n                            How to make the most of the rest of the year"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sm:w-3/4 lg:w-5/6 xl:w-3/5" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-sm md:text-base pb-6 sm:pb-8 "
                      },
                      [
                        _vm._v(
                          "\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                            incididunt ut labore et dolore magna aliqua.\n                        "
                        )
                      ]
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
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "block rounded-lg shadow border border-grey group mt-10 lg:mt-12",
                attrs: { href: "/post" }
              },
              [
                _c("div", {
                  staticClass:
                    "bg-no-repeat bg-cover bg-top w-full h-52 sm:h-64 lg:h-68",
                  staticStyle: { "background-image": "url(./img/post-08.jpg)" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                  _c("div", {
                    staticClass:
                      "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                    staticStyle: {
                      "background-image": "url(./img/blog-author.jpg)"
                    }
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
                          _vm._v("Katherine S.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("03 May 2019")])
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
                      [
                        _vm._v(
                          "\n                            3 top OOTD to play with while traveling!"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sm:w-3/4 lg:w-5/6 xl:w-3/5" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-sm md:text-base pb-6 sm:pb-8 "
                      },
                      [
                        _vm._v(
                          "\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                            incididunt ut labore et dolore magna aliqua.\n                        "
                        )
                      ]
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
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "block rounded-lg shadow border border-grey group mt-10 lg:mt-12",
                attrs: { href: "/post" }
              },
              [
                _c("div", {
                  staticClass:
                    "bg-no-repeat bg-cover bg-top w-full h-52 sm:h-64 lg:h-68",
                  staticStyle: { "background-image": "url(./img/post-08.jpg)" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                  _c("div", {
                    staticClass:
                      "bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5",
                    staticStyle: {
                      "background-image": "url(./img/blog-author.jpg)"
                    }
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
                          _vm._v("Katherine S.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("04 May 2019")])
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
                      [
                        _vm._v(
                          "\n                            Looking forward: Planning for the winter’s outfits"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "sm:w-3/4 lg:w-5/6 xl:w-3/5" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-sm md:text-base pb-6 sm:pb-8 "
                      },
                      [
                        _vm._v(
                          "\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                            incididunt ut labore et dolore magna aliqua.\n                        "
                        )
                      ]
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
            ),
            _vm._v(" "),
            _c("div", { staticClass: "pt-12 flex justify-center mx-auto" }, [
              _c(
                "span",
                {
                  staticClass:
                    "font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer"
                },
                [_vm._v("Previous")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer"
                },
                [_vm._v("1")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer"
                },
                [_vm._v("2")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center cursor-pointer"
                },
                [_vm._v("3")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    " font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer"
                },
                [_vm._v("Next")]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0"
            },
            [
              _c(
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
                      staticClass:
                        "focus:outline-none absolute right-0 top-0 mt-4 mr-3",
                      attrs: { "aria-label": "Search button" }
                    },
                    [_c("i", { staticClass: "bx bx-search text-2xl" })]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-16 text-center sm:text-left" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"
                  },
                  [_vm._v("\n                    Recent Post")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "block mt-8 border-b border-grey-dark pb-5 group",
                    attrs: { href: "/post" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary text-base transition-colors group-hover:text-primary"
                      },
                      [
                        _vm._v(
                          "\n                        How to make the most of the rest of the year"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"
                      },
                      [_vm._v("\n                        02 May 2019")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "block mt-8 border-b border-grey-dark pb-5 group",
                    attrs: { href: "/post" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary text-base transition-colors group-hover:text-primary"
                      },
                      [
                        _vm._v(
                          "\n                        3 top OOTD to play with while traveling!"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"
                      },
                      [_vm._v("\n                        03 May 2019")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "block mt-8 border-b border-grey-dark pb-5 group",
                    attrs: { href: "/post" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary text-base transition-colors group-hover:text-primary"
                      },
                      [
                        _vm._v(
                          "\n                        Looking forward: Planning for the winter’s outfits"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"
                      },
                      [_vm._v("\n                        04 May 2019")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-16" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark text-center sm:text-left"
                  },
                  [_vm._v("\n                    Categories")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Stylish Fashion\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("5")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Makeup Tips\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("23")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Traveling Tips\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("45")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Empowerment\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("65")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Instagram\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("32")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Skin Care\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("21")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Hair Care\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("2")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex justify-between group pb-4 border-b border-grey-dark mt-8",
                    attrs: { href: "#" }
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"
                      },
                      [
                        _vm._v(
                          "\n                        Coming up\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base"
                      },
                      [_vm._v("11")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center sm:text-left" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"
                  },
                  [_vm._v("\n                    Follow Us")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-center sm:justify-start pt-8" },
                  [
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
                  ]
                )
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("app-header"),
      _vm._v(" "),
      _c("main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("app-footer"),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modal", multiple: "" } }),
      _vm._v(" "),
      _vm.$page.flash ? _c("flash-message") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c& ***!
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
  return _c("div", [_vm._v("\n    " + _vm._s(_vm.Alert) + "\n")])
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

/***/ "./resources/js/Pages/Ecomerce/blog/Blog.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/blog/Blog.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_491133b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=491133b4& */ "./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=template&id=491133b4&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blog_vue_vue_type_template_id_491133b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blog_vue_vue_type_template_id_491133b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/blog/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=template&id=491133b4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=template&id=491133b4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_491133b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=491133b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/blog/Blog.vue?vue&type=template&id=491133b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_491133b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_491133b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=0b5ac64c& */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=template&id=0b5ac64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=8bf7123c& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=template&id=8bf7123c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/FlashMessage.vue?vue&type=template&id=8bf7123c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_8bf7123c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);