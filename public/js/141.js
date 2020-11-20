(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=template&id=0d805a46&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=template&id=0d805a46& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0" },
      [
        _c("div", { staticClass: "p-8" }, [
          _c(
            "h4",
            {
              staticClass:
                "font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left"
            },
            [_vm._v("\n                    Your Order")]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass:
                "font-hkbold text-secondary uppercase text-center sm:text-left"
            },
            [_vm._v("\n                    PRODUCTS")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-5 mb-8" }, [
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c("div", { staticClass: "w-20 relative mr-3 sm:pr-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "h-20 rounded flex items-center justify-center"
                  },
                  [
                    _c("div", {
                      staticClass: "w-12 h-16 bg-center bg-no-repeat bg-cover",
                      staticStyle: {
                        "background-image":
                          "url(/assets/img/unlicensed/purse-1.png)"
                      }
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
                { staticClass: "font-hkregular text-secondary text-lg" },
                [_vm._v("Beautiful Brown\n                        ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c("div", { staticClass: "w-20 relative mr-3 sm:pr-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "h-20 rounded flex items-center justify-center"
                  },
                  [
                    _c("div", {
                      staticClass: "w-12 h-16 bg-center bg-no-repeat bg-cover",
                      staticStyle: {
                        "background-image":
                          "url(/assets/img/unlicensed/backpack-2.png)"
                      }
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
                { staticClass: "font-hkregular text-secondary text-lg" },
                [_vm._v("Woodie Blake\n                        ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c("div", { staticClass: "w-20 relative mr-3 sm:pr-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "h-20 rounded flex items-center justify-center"
                  },
                  [
                    _c("div", {
                      staticClass: "w-12 h-16 bg-center bg-no-repeat bg-cover",
                      staticStyle: {
                        "background-image":
                          "url(/assets/img/unlicensed/watch-4.png)"
                      }
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
                { staticClass: "font-hkregular text-secondary text-lg" },
                [_vm._v("Princess\n                        ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c("div", { staticClass: "w-20 relative mr-3 sm:pr-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "h-20 rounded flex items-center justify-center"
                  },
                  [
                    _c("div", {
                      staticClass: "w-12 h-16 bg-center bg-no-repeat bg-cover",
                      staticStyle: {
                        "background-image":
                          "url(/assets/img/unlicensed/shoes-4.png)"
                      }
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
                { staticClass: "font-hkregular text-secondary text-lg" },
                [_vm._v("Siberian Boots\n                        ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mb-5" }, [
              _c("div", { staticClass: "w-20 relative mr-3 sm:pr-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "h-20 rounded flex items-center justify-center"
                  },
                  [
                    _c("div", {
                      staticClass: "w-12 h-16 bg-center bg-no-repeat bg-cover",
                      staticStyle: {
                        "background-image":
                          "url(/assets/img/unlicensed/backpack-1.png)"
                      }
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
                { staticClass: "font-hkregular text-secondary text-lg" },
                [_vm._v("Black Blake\n                        ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "font-hkbold text-secondary pt-1 pb-2" }, [
            _vm._v("Cart Totals")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "border-b border-grey-darker pb-1 flex justify-between"
            },
            [
              _c("span", { staticClass: "font-hkregular text-secondary" }, [
                _vm._v("Subtotal")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "font-hkregular text-secondary" }, [
                _vm._v("$236")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
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
                _vm._v("-$36")
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pt-3 flex justify-between" }, [
            _c("span", { staticClass: "font-hkbold text-secondary" }, [
              _vm._v("Total")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "font-hkbold text-secondary" }, [
              _vm._v("$200")
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/checkout/YourOrder.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/checkout/YourOrder.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YourOrder_vue_vue_type_template_id_0d805a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YourOrder.vue?vue&type=template&id=0d805a46& */ "./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=template&id=0d805a46&");
/* harmony import */ var _YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YourOrder.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YourOrder_vue_vue_type_template_id_0d805a46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YourOrder_vue_vue_type_template_id_0d805a46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/checkout/YourOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./YourOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=template&id=0d805a46&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=template&id=0d805a46& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_template_id_0d805a46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./YourOrder.vue?vue&type=template&id=0d805a46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/YourOrder.vue?vue&type=template&id=0d805a46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_template_id_0d805a46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YourOrder_vue_vue_type_template_id_0d805a46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);