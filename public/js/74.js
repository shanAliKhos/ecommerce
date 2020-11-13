(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _YourOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YourOrder */ "./resources/js/Pages/Ecomerce/checkout/YourOrder.vue");
/* harmony import */ var _PaymentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentForm */ "./resources/js/Pages/Ecomerce/checkout/PaymentForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Checkout'
  },
  components: {
    YourOrder: _YourOrder__WEBPACK_IMPORTED_MODULE_1__["default"],
    PaymentForm: _PaymentForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=template&id=0a4770b4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=template&id=0a4770b4& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "checkout spad" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "checkout__form" }, [
        _c("h4", [_vm._v("Billing Details")]),
        _vm._v(" "),
        _c("form", { attrs: { action: "#" } }, [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("your-order", { staticClass: "col-12 col-md-4" }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("payment-form", { staticClass: "col-12 col-md-8" })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
  return _c("div", { staticClass: "checkout__order" }, [
    _c("h4", [_vm._v("Your Order")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.CartItems, function(CartItem, index) {
        return _c("li", { key: index }, [
          _c("small", [
            _vm._v(
              _vm._s(CartItem.name) +
                " $" +
                _vm._s(CartItem.price) +
                " * " +
                _vm._s(CartItem.Qty) +
                " "
            )
          ]),
          _vm._v(" "),
          _c("span", [_vm._v("$" + _vm._s(CartItem.Qty * CartItem.price))])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "checkout__order__subtotal" }, [
      _vm._v("Subtotal "),
      _c("span", [_vm._v("$" + _vm._s(_vm.CartTotalPrice))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "checkout__order__total" }, [
      _vm._v("Total "),
      _c("span", [_vm._v("$" + _vm._s(_vm.CartTotalPrice))])
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt\n        ut labore et dolore magna aliqua."
      )
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "checkout__order__products" }, [
      _vm._v("Products | Qty"),
      _c("span", [_vm._v("Total")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "checkout__input__checkbox" }, [
      _c("label", { attrs: { for: "payment" } }, [
        _vm._v("\n            Check Payment\n            "),
        _c("input", { attrs: { type: "checkbox", id: "payment" } }),
        _vm._v(" "),
        _c("span", { staticClass: "checkmark" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "checkout__input__checkbox" }, [
      _c("label", { attrs: { for: "paypal" } }, [
        _vm._v("\n            Paypal\n            "),
        _c("input", { attrs: { type: "checkbox", id: "paypal" } }),
        _vm._v(" "),
        _c("span", { staticClass: "checkmark" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/checkout/Checkout.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/checkout/Checkout.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_0a4770b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=0a4770b4& */ "./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=template&id=0a4770b4&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_0a4770b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_0a4770b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/checkout/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=template&id=0a4770b4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=template&id=0a4770b4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_0a4770b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=0a4770b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/checkout/Checkout.vue?vue&type=template&id=0a4770b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_0a4770b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_0a4770b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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