(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _shared_Partials_components_WelcomeIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Partials/components/WelcomeIcons */ "./resources/js/Pages/Ecomerce/shared/Partials/components/WelcomeIcons.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: {
    title: 'Contact'
  },
  components: {
    WelcomeIcons: _shared_Partials_components_WelcomeIcons__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null
      },
      faqIndex: null,
      sending: false
    };
  },
  methods: {
    store: function store() {
      var self = this;
      var formData = new FormData();
      formData.append("name", self.form.name || '');
      formData.append("email", self.form.email || '');
      formData.append("subject", self.form.subject || '');
      formData.append("message", self.form.message || ''); // self.$inertia.post(route('contact.store'), formData,{
      //     preserveState: true, 
      //     onStart: () => this.sending = true,
      //     onFinish: () => this.sending = false,
      //     onSuccess: () => {
      //         if (Object.keys(this.$page.errors).length === 0) {
      //             this.form.name = null
      //             this.form.email = null
      //             this.form.subject = null
      //             this.form.message = null
      //         }
      //     },             
      // });
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=template&id=3cf07014&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=template&id=3cf07014& ***!
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
    { staticClass: "container" },
    [
      _c(
        "div",
        {
          staticClass:
            "pb-10 md:pb-10 lg:pb-10 flex flex-col lg:flex-row justify-between"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "w-full lg:w-3/8 xl:w-1/3 mx-auto lg:mx-0 border border-grey-darker shadow px-6 xl:px-8 py-10 lg:py-8 text-center lg:text-left"
            },
            [
              _c(
                "h2",
                {
                  staticClass:
                    "font-butlerregular border-b border-grey-dark pb-6 text-secondary text-2xl sm:text-3xl md:text-4xl"
                },
                [_vm._v(" Quick contact")]
              ),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass:
                    "font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"
                },
                [_vm._v(" Email")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-hkregular text-secondary" }, [
                _vm._v(" " + _vm._s(_vm.$page.SiteOptions.Email) + " ")
              ]),
              _vm._v(" "),
              _c(
                "h4",
                {
                  staticClass:
                    "font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"
                },
                [_vm._v(" Phone")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-hkregular text-secondary" }, [
                _vm._v("+0 321-654-0987 ")
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "lg:w-3/5 border border-grey-darker shadow px-8 py-10 lg:py-8 mt-10 md:mt-12 lg:mt-0"
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.store($event)
                    }
                  }
                },
                [
                  _c(
                    "p",
                    {
                      staticClass: "font-hkregular text-secondary text-lg pb-8"
                    },
                    [
                      _vm._v(
                        " Any questions? Contact us through whats app or on our contact from below."
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col sm:flex-row justify-between mb-5 -mx-5"
                    },
                    [
                      _c("div", { staticClass: "sm:w-1/2 px-5 mb-8 sm:mb-0" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "font-hkregular text-secondary block mb-2",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-input",
                          attrs: {
                            type: "text",
                            placeholder: "Enter your name",
                            id: "name"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.$page.errors.name
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [_vm._v(_vm._s(_vm.$page.errors.name))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "sm:w-1/2 px-5" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "font-hkregular text-secondary block mb-2",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email address")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass: "form-input",
                          attrs: {
                            type: "text",
                            placeholder: "Enter your email",
                            id: "email"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.$page.errors.email
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [_vm._v(_vm._s(_vm.$page.errors.email))]
                            )
                          : _vm._e()
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mb-8" }, [
                    _c(
                      "label",
                      {
                        staticClass: "font-hkregular text-secondary block mb-2",
                        attrs: { for: "subject" }
                      },
                      [_vm._v("Subject*")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.subject,
                          expression: "form.subject"
                        }
                      ],
                      staticClass: "form-input",
                      attrs: {
                        type: "text",
                        placeholder: "Enter your subject",
                        id: "subject"
                      },
                      domProps: { value: _vm.form.subject },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "subject", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.$page.errors.subject
                      ? _c(
                          "p",
                          { staticClass: "text-red-500 text-xs italic" },
                          [_vm._v(_vm._s(_vm.$page.errors.subject))]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mb-8" }, [
                    _c(
                      "label",
                      {
                        staticClass: "font-hkregular text-secondary block mb-2",
                        attrs: { for: "message" }
                      },
                      [_vm._v("Message*")]
                    ),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.message,
                          expression: "form.message"
                        }
                      ],
                      staticClass: "form-textarea",
                      attrs: {
                        rows: "5",
                        placeholder: "Enter your message",
                        id: "message"
                      },
                      domProps: { value: _vm.form.message },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "message", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.$page.errors.message
                      ? _c(
                          "p",
                          { staticClass: "text-red-500 text-xs italic" },
                          [_vm._v(_vm._s(_vm.$page.errors.message))]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full lg:w-1/2  ",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm.sending
                            ? _c(
                                "svg",
                                {
                                  staticClass:
                                    "transition  ease-in-out  animate-spin h-5 w-5 mr-1",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d:
                                        "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                      "clip-rule": "evenodd"
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.sending
                            ? _c(
                                "svg",
                                {
                                  staticClass:
                                    "transition duration-700 ease-in-out  h-5 w-5 mr-2",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d:
                                        "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      "clip-rule": "evenodd"
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(
                            "                           \n                        SUBMIT\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("WelcomeIcons"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pb-16 md:pb-20 lg:pb-24", attrs: { id: "faq" } },
        [
          _c(
            "div",
            { staticClass: "text-center sm:w-5/6 md:w-full mx-auto md:mx-0" },
            [
              _c(
                "h2",
                {
                  staticClass:
                    "font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl"
                },
                [_vm._v("\n                Frequently Asked Questions")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-lg md:text-xl pt-2"
                },
                [
                  _vm._v(
                    "\n                Get the latest news & updates from Ciloe"
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "pt-12",
                  attrs: { "x-data": "{ faqIndex: null }" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary",
                          class: { "border-b": _vm.faqIndex === 1 },
                          on: {
                            click: function($event) {
                              _vm.faqIndex === 1
                                ? (_vm.faqIndex = null)
                                : (_vm.faqIndex = 1)
                            }
                          }
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/6 text-right" }, [
                            _c("i", {
                              staticClass: "bx text-primary text-2xl",
                              class: _vm.faqIndex === 1 ? "bx-minus" : "bx-plus"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "item-height   transition-all overflow-auto cursor-text",
                          class: { active: _vm.faqIndex === 1 }
                        },
                        [_vm._m(2)]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary",
                          class: { "border-b": _vm.faqIndex === 2 },
                          on: {
                            click: function($event) {
                              _vm.faqIndex === 2
                                ? (_vm.faqIndex = null)
                                : (_vm.faqIndex = 2)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "w-5/6 text-left" }, [
                            _vm._v(
                              '\n                        <   span class="font-hkmedium text-secondary md:text-lg uppercase">How much is shipping?'
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-1/6 text-right" }, [
                            _c("i", {
                              staticClass: "bx text-primary text-2xl",
                              class: _vm.faqIndex === 2 ? "bx-minus" : "bx-plus"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "item-height   transition-all overflow-auto cursor-text",
                          class: { active: _vm.faqIndex === 2 }
                        },
                        [_vm._m(3)]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pt-8" }, [
      _c(
        "h4",
        {
          staticClass: "font-hkbold text-secondary text-lg sm:text-xl uppercase"
        },
        [_vm._v(" Follow Us")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex justify-center lg:justify-start pt-3" }, [
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl",
            attrs: { href: "/" }
          },
          [_c("i", { staticClass: "bx bxl-facebook text-white" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl",
            attrs: { href: "/" }
          },
          [_c("i", { staticClass: "bx bxl-twitter text-white" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl",
            attrs: { href: "/" }
          },
          [_c("i", { staticClass: "bx bxl-google text-white" })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "bg-secondary-lighter hover:bg-primary transition-colors p-3 rounded-full flex items-center text-xl",
            attrs: { href: "/" }
          },
          [_c("i", { staticClass: "bx bxl-linkedin text-white" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-5/6 text-left" }, [
      _c(
        "span",
        { staticClass: "font-hkmedium text-secondary md:text-lg uppercase" },
        [_vm._v("How many days does the product takes to arrive?")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-5 md:px-8 py-5" }, [
      _c(
        "p",
        {
          staticClass:
            "font-hkregular text-secondary text-sm leading-loose text-left"
        },
        [_vm._v("It depends on the product, but it can take 3-5 days max.")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-5 md:px-8 py-5" }, [
      _c(
        "p",
        {
          staticClass:
            "font-hkregular text-secondary text-sm leading-loose text-left"
        },
        [
          _vm._v(
            "\n                                It depends on a lot of factors like where you're located and how many things you buy. We do have a free shipping special if you buy more than $50.\n                            "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

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
              "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
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
                    "font-hksemibold text-primary text-xl tracking-wide"
                },
                [_vm._v(" Free shipping")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-base tracking-wide"
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
              "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
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
                    "font-hksemibold text-primary text-xl tracking-wide"
                },
                [_vm._v(" Always available")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-base tracking-wide"
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
              "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
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
                    "font-hksemibold text-primary text-xl tracking-wide"
                },
                [_vm._v(" Free returns")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-hkregular text-secondary-lighter text-base tracking-wide"
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

/***/ "./resources/js/Pages/Ecomerce/contact/Contact.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/contact/Contact.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_3cf07014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=3cf07014& */ "./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=template&id=3cf07014&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_3cf07014___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_3cf07014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/contact/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=template&id=3cf07014&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=template&id=3cf07014& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_3cf07014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=3cf07014& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/contact/Contact.vue?vue&type=template&id=3cf07014&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_3cf07014___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_3cf07014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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