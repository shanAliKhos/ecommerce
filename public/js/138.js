(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/orders/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/orders/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Layouts/AppLayout */ "./resources/js/Pages/Admin/Layouts/AppLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: 'Order'
  },
  layout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    StatusColor: function StatusColor(Status) {
      switch (Status) {
        case 'pending':
          return 'badge-warning';
          break;

        case 'processing':
          return 'badge-info';
          break;

        case 'completed':
          return 'badge-success';
          break;

        case 'decline':
          return 'badge-danger';
          break;
      }
    }
  },
  computed: {
    Orders: function Orders() {
      return this.$page.Orders.data;
    },
    Currency: function Currency() {
      return this.$page.SiteOptions.Currency;
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/orders/index.vue?vue&type=template&id=ff62ed5e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/orders/index.vue?vue&type=template&id=ff62ed5e& ***!
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
  return _c("div", [
    _c(
      "nav",
      {
        staticClass: "text-sm font-semibold mb-6",
        attrs: { "aria-label": "Breadcrumb" }
      },
      [
        _c("ol", { staticClass: "list-none p-0 inline-flex" }, [
          _c(
            "li",
            { staticClass: "flex items-center text-blue-500" },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "text-gray-700",
                  attrs: { href: _vm.route("admin.dashboard") }
                },
                [_vm._v("Home")]
              ),
              _vm._v(" "),
              _c(
                "svg",
                {
                  staticClass: "  w-3 h-3 mx-3",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 320 512"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    }
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c(
          "inertia-link",
          {
            staticClass:
              "transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right",
            attrs: { href: _vm.route("admin.dashboard") }
          },
          [
            _c(
              "svg",
              {
                staticClass: "fill-current w-4 h-4 mr-2",
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
                      "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
                    "clip-rule": "evenodd"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Back")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "my-8 p-10 bg-white rounded shadow-xl" }, [
      _c("p", { staticClass: "text-xl pb-6 flex items-center" }, [
        _vm._v("\n            Order Listing\n        ")
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "border-collapse w-full table-auto" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.Orders, function(Order, OrderIndex) {
            return _c(
              "tr",
              {
                key: OrderIndex,
                staticClass:
                  "bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              },
              [
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static "
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("#")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-5  lg:p-1 " }, [
                      _vm._v(_vm._s(OrderIndex + 1))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static "
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("ORDER NUMBER")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-5 lg:p-1 text-sm" }, [
                      _vm._v(_vm._s(Order.OrderNumber))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("PLACED BY")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-5  lg:p-1 " }, [
                      _vm._v(_vm._s(Order.user.name))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("TOTAL PRICE")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-5  lg:p-1 " }, [
                      _vm._v(
                        " " +
                          _vm._s(_vm.Currency.Symbol) +
                          _vm._s(Order.GrandTotal)
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("ITEAMS QTY")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-5  lg:p-1 " }, [
                      _vm._v(_vm._s(Order.ItemCount))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("ORDER STATUS")]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-5 lg:p-1 " }, [
                      Order.PaymentStatus
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "rounded bg-green-400 py-1 px-3 text-xs font-bold"
                            },
                            [_vm._v("Paid")]
                          )
                        : _c(
                            "span",
                            {
                              staticClass:
                                "rounded bg-red-400 py-1 px-3 text-xs font-bold"
                            },
                            [_vm._v("Not-Paid")]
                          ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "rounded bg-green-400 py-1 px-3 text-xs font-bold",
                          class: _vm.StatusColor(Order.Status)
                        },
                        [_vm._v(_vm._s(Order.Status))]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass:
                      "w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                      },
                      [_vm._v("ACTIONS")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "inline-flex py-5  lg:p-1 " },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "transition duration-500 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3",
                            attrs: {
                              href: _vm.route("admin.order.show", Order.id)
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "w-4 h-4",
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
                                    d:
                                      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "flex items-center" }, [
      _c("a", { staticClass: "text-gray-600", attrs: { href: "#" } }, [
        _vm._v("Order Listing")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden  lg:table-cell"
          },
          [_vm._v("#")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          },
          [_vm._v("ORDER NUMBER")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          },
          [_vm._v("PLACED BY")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          },
          [_vm._v("TOTAL PRICE")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          },
          [_vm._v("ITEAMS QTY")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          },
          [_vm._v("STATUS")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          },
          [_vm._v("ACTIONS")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/orders/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Admin/orders/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ff62ed5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ff62ed5e& */ "./resources/js/Pages/Admin/orders/index.vue?vue&type=template&id=ff62ed5e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ff62ed5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ff62ed5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/orders/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/orders/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/orders/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/orders/index.vue?vue&type=template&id=ff62ed5e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/orders/index.vue?vue&type=template&id=ff62ed5e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff62ed5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ff62ed5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/orders/index.vue?vue&type=template&id=ff62ed5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff62ed5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff62ed5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);