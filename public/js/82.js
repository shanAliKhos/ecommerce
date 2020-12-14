(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _YourOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YourOrder */ "./resources/js/Pages/Ecomerce/Cart/YourOrder.vue");
/* harmony import */ var _PaymentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentForm */ "./resources/js/Pages/Ecomerce/Cart/PaymentForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    YourOrder: _YourOrder__WEBPACK_IMPORTED_MODULE_1__["default"],
    PaymentForm: _PaymentForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  remember: 'form',
  data: function data() {
    return {
      form: {
        email: this.$page.user ? this.$page.user.email : null,
        full_name: this.$page.user ? this.$page.user.name : null,
        get_updates: this.$page.CustomerInformation ? this.$page.CustomerInformation.get_updates : null,
        address: this.$page.CustomerInformation ? this.$page.CustomerInformation.address : null,
        city: this.$page.CustomerInformation ? this.$page.CustomerInformation.city : null,
        country: this.$page.CustomerInformation ? this.$page.CustomerInformation.country : null,
        postal_code: this.$page.CustomerInformation ? this.$page.CustomerInformation.postal_code : null,
        mobile: this.$page.CustomerInformation ? this.$page.CustomerInformation.mobile : null,
        saveinformation: this.$page.CustomerInformation ? this.$page.CustomerInformation.saveinformation : null
      },
      sending: false
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      var self = this;
      var formData = new FormData();
      formData.append("email", self.form.email || '');
      formData.append("full_name", self.form.full_name || '');
      formData.append("get_updates", self.form.get_updates || '');
      formData.append("address", self.form.address || '');
      formData.append("city", self.form.city || '');
      formData.append("country", self.form.country || '');
      formData.append("postal_code", self.form.postal_code || '');
      formData.append("mobile", self.form.mobile || '');
      formData.append("saveinformation", self.form.saveinformation || '');
      self.$inertia.post(this.route('cart.CustomerInfomationStore'), formData, {
        preserveState: true,
        onStart: function onStart() {
          return _this.sending = true;
        },
        onFinish: function onFinish() {
          return _this.sending = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
    CountCartItems: function CountCartItems() {
      var Qty = 0;

      if (this.$page.Cart.Items.length > 0) {
        Qty = this.$page.Cart.Items.reduce(function (TotalItems, Item) {
          return TotalItems + Item.Qty;
        }, 0);
      }

      return Qty;
    },
    CartTotalPrice: function CartTotalPrice() {
      var sum = 0;

      if (this.$page.Cart.Items.length > 0) {
        sum = this.$page.Cart.Items.reduce(function (TotalPrice, Item) {
          return TotalPrice + Item.Qty * Item.price;
        }, 0);
      }

      return sum;
    },
    CartItems: function CartItems() {
      return this.$page.Cart.Items;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=template&id=43457c2c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=template&id=43457c2c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container border-t border-grey-dark" }, [
    _c(
      "div",
      {
        staticClass:
          "flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24"
      },
      [
        _c("div", { staticClass: "lg:w-2/3 lg:pr-16 xl:pr-20" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.store()
                }
              }
            },
            [
              _c("div", { staticClass: "pt-10 md:pt-12" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "pt-4 md:pt-5" }, [
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                            attrs: { for: "grid-first-emai" }
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight   cursor-not-allowed"
                          },
                          [_vm._v(_vm._s(_vm.form.email))]
                        ),
                        _vm._v(" "),
                        _vm.$page.errors.email
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [_vm._v(_vm._s(_vm.$page.errors.email))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-full md:w-1/2 px-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                          attrs: { for: "grid-last-mobile" }
                        },
                        [_vm._v(" Mobile ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.form.mobile,
                            expression: "form.mobile",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass: "form-input ",
                        attrs: {
                          placeholder: "Mobile Number",
                          id: "grid-last-name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.mobile },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "mobile",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.$page.errors.mobile
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [_vm._v(_vm._s(_vm.$page.errors.mobile))]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pt-4 pb-10" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left"
                  },
                  [_vm._v("Shipping address")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "pt-4 md:pt-5" }, [
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c("div", { staticClass: "w-full px-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                          attrs: { for: "grid-full_name" }
                        },
                        [_vm._v("Full Name")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight   cursor-not-allowed"
                        },
                        [_vm._v(_vm._s(_vm.form.full_name))]
                      ),
                      _vm._v(" "),
                      _vm.$page.errors.full_name
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [_vm._v(_vm._s(_vm.$page.errors.full_name))]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c("div", { staticClass: "w-full px-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                          attrs: { for: "grid-password" }
                        },
                        [_vm._v("Address")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.address,
                            expression: "form.address"
                          }
                        ],
                        staticClass: "form-input ",
                        attrs: {
                          placeholder: "You address",
                          id: "grid-address",
                          type: "text"
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.$page.errors.address
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [_vm._v(_vm._s(_vm.$page.errors.address))]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                            attrs: { for: "grid-city" }
                          },
                          [_vm._v("City")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.city,
                              expression: "form.city"
                            }
                          ],
                          staticClass: "form-input",
                          attrs: {
                            id: "grid-city",
                            type: "text",
                            placeholder: "City"
                          },
                          domProps: { value: _vm.form.city },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "city", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.$page.errors.city
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [_vm._v(_vm._s(_vm.$page.errors.city))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                            attrs: { for: "grid-state" }
                          },
                          [_vm._v("Country")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "relative" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.country,
                                  expression: "form.country"
                                }
                              ],
                              staticClass: "form-input",
                              attrs: { id: "grid-state" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "country",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", [_vm._v("New Mexico")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Missouri")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Texas")])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.$page.errors.country
                            ? _c(
                                "p",
                                { staticClass: "text-red-500 text-xs italic" },
                                [_vm._v(_vm._s(_vm.$page.errors.country))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "fill-current h-4 w-4",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/3 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                            attrs: { for: "grid-zip" }
                          },
                          [_vm._v("Zip/Postal Code")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.form.postal_code,
                              expression: "form.postal_code",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-input ",
                          attrs: {
                            id: "grid-zip",
                            type: "text",
                            placeholder: "90210"
                          },
                          domProps: { value: _vm.form.postal_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "postal_code",
                                _vm._n($event.target.value)
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.$page.errors.postal_code
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [_vm._v(_vm._s(_vm.$page.errors.postal_code))]
                            )
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex items-center pt-4" }, [
                    _c(
                      "label",
                      {
                        staticClass: "block relative h-0 w-0 overflow-hidden",
                        attrs: { for: "offers" }
                      },
                      [_vm._v("Sign up to exclusive offers")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.get_updates,
                          expression: "form.get_updates"
                        }
                      ],
                      staticClass: "form-checkbox",
                      attrs: { type: "checkbox", id: "offers" },
                      domProps: {
                        checked: Array.isArray(_vm.form.get_updates)
                          ? _vm._i(_vm.form.get_updates, null) > -1
                          : _vm.form.get_updates
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.form.get_updates,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.form,
                                  "get_updates",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.form,
                                  "get_updates",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.form, "get_updates", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-sm pl-3 text-secondary"
                      },
                      [
                        _vm._v(
                          "\n                                Keep me up to date on news and exclusive offers\n                            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12"
                  },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all",
                        attrs: {
                          "preserve-scroll": "",
                          href: _vm.route("cart.index")
                        }
                      },
                      [
                        _c("i", {
                          staticClass:
                            "bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"
                        }),
                        _vm._v(
                          "\n                            Return to Cart\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3 hidden lg:block"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full  ",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm.sending
                              ? _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "animate-pulse transition duration-700 ease-in-out  h-5 w-auto mr-1",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                      }
                                    })
                                  ]
                                )
                              : _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "transition duration-700 ease-in-out  h-5 w-auto mr-1",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                      }
                                    })
                                  ]
                                ),
                            _vm._v(
                              "                        \n                                Proceed\n                            "
                            )
                          ]
                        )
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
                      "mobile-secondary-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 "
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "grid grid-cols-4 gap-2 flex justify-around"
                      },
                      [
                        _c("div", {
                          staticClass:
                            "w-1/2 relative px-2 py-2 flex item-center"
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "w-1/2 relative px-2 py-2 flex item-center justify-end"
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "flex items-center transition duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none rounded px-2 py-2 text-white text-sm font-semibold uppercase shadow",
                                class: {
                                  "opacity-50 pointer-events-none": _vm.sending
                                },
                                attrs: { disabled: _vm.sending, type: "submit" }
                              },
                              [
                                _vm.sending
                                  ? _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "animate-pulse transition duration-700 ease-in-out  h-5 w-auto mr-1",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                          }
                                        })
                                      ]
                                    )
                                  : _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "transition duration-700 ease-in-out  h-5 w-auto mr-1",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                          }
                                        })
                                      ]
                                    ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "tracking-tighter" },
                                  [_vm._v("Proceed")]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("your-order")
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
    return _c("div", { staticClass: "flex flex-wrap items-center" }, [
      _c(
        "a",
        {
          staticClass:
            "  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular ",
          attrs: { href: "/cart/" }
        },
        [_vm._v("Cart")]
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "bx bx-chevron-right text-sm text-secondary px-2"
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkbold ",
          attrs: { href: "/cart/customer-info" }
        },
        [_vm._v("Customer information")]
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "bx bx-chevron-right text-sm text-secondary px-2"
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular ",
          attrs: { href: "/cart/shipping-method" }
        },
        [_vm._v("Shipping method")]
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "bx bx-chevron-right text-sm text-secondary px-2"
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular  ",
          attrs: { href: "/cart/payment-method" }
        },
        [_vm._v("Payment method")]
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "bx bx-chevron-right text-sm text-transparent px-2"
      })
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
          "flex flex-col-reverse sm:flex-row items-center justify-between"
      },
      [
        _c(
          "h1",
          { staticClass: "font-hkmedium text-secondary text-xl md:text-2xl" },
          [_vm._v(" Contact information ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=template&id=658178d7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=template&id=658178d7& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0" },
    [
      _c("div", { staticClass: "p-8" }, [
        _c(
          "h4",
          {
            staticClass:
              "font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left"
          },
          [_vm._v(" Your Order ")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "font-hkbold text-secondary uppercase text-center sm:text-left"
          },
          [_vm._v(" PRODUCTS (" + _vm._s(_vm.CountCartItems) + ")")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-5 mb-8" },
          _vm._l(_vm.CartItems, function(CartItem, index) {
            return _c(
              "div",
              { key: index, staticClass: "flex items-center mb-5" },
              [
                _c("div", { staticClass: "w-20 relative mr-3 sm:pr-0" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "h-20 rounded flex items-center justify-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-12 h-16 bg-center bg-no-repeat bg-cover",
                        style: "background-image:url('" + CartItem.image + "')"
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6"
                        },
                        [_vm._v("2")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "font-hkregular text-secondary text-md",
                    attrs: { title: CartItem.name }
                  },
                  [
                    _vm._v(
                      _vm._s(CartItem.name.substring(0, 12) + "..") +
                        " $" +
                        _vm._s(CartItem.price) +
                        " "
                    )
                  ]
                )
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("p", { staticClass: "font-hkbold text-secondary pt-1 pb-2" }, [
          _vm._v("Cart Totals")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "border-b border-grey-darker pb-1 flex justify-between"
          },
          [
            _c("span", { staticClass: "font-hkregular text-secondary" }, [
              _vm._v("Subtotal")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "font-hkregular text-secondary" }, [
              _vm._v("$" + _vm._s(_vm.CartTotalPrice))
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "pt-3 flex justify-between" }, [
          _c("span", { staticClass: "font-hkbold text-secondary" }, [
            _vm._v("Total")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "font-hkbold text-secondary" }, [
            _vm._v("$" + _vm._s(_vm.CartTotalPrice))
          ])
        ])
      ])
    ]
  )
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
          "border-b border-grey-darker pt-2 pb-1 flex justify-between"
      },
      [
        _c("span", { staticClass: "font-hkregular text-secondary" }, [
          _vm._v("Coupon apply")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "font-hkregular text-secondary" }, [
          _vm._v("-$0")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerInformation_vue_vue_type_template_id_43457c2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerInformation.vue?vue&type=template&id=43457c2c& */ "./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=template&id=43457c2c&");
/* harmony import */ var _CustomerInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerInformation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerInformation_vue_vue_type_template_id_43457c2c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerInformation_vue_vue_type_template_id_43457c2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=template&id=43457c2c&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=template&id=43457c2c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerInformation_vue_vue_type_template_id_43457c2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerInformation.vue?vue&type=template&id=43457c2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/CustomerInformation.vue?vue&type=template&id=43457c2c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerInformation_vue_vue_type_template_id_43457c2c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerInformation_vue_vue_type_template_id_43457c2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/YourOrder.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/YourOrder.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YourOrder_vue_vue_type_template_id_658178d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YourOrder.vue?vue&type=template&id=658178d7& */ "./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=template&id=658178d7&");
/* harmony import */ var _YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YourOrder.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YourOrder_vue_vue_type_template_id_658178d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YourOrder_vue_vue_type_template_id_658178d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/Cart/YourOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./YourOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=template&id=658178d7&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=template&id=658178d7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_template_id_658178d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./YourOrder.vue?vue&type=template&id=658178d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/YourOrder.vue?vue&type=template&id=658178d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_template_id_658178d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_template_id_658178d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);