(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["ProductQuantity"],
  methods: {
    AttrColor: function AttrColor(clr, sel, oid) {
      var color = "bg-".concat(clr, "-400 text-").concat(clr, "-400");
      var selected = sel == oid ? " outline-red" : '';
      return color.concat(selected);
    }
  },
  remember: 'SelectedSku',
  watch: {
    SelectedSku: function SelectedSku(val) {
      this.$emit('sku:changed', val);
    }
  },
  computed: {
    SelectedSku: function SelectedSku() {
      var _this = this;

      var self = this;
      var selectedSku = {};
      this.$page.Product.skus.filter(function (sku) {
        if (JSON.stringify(sku.attribute_options_ids) == JSON.stringify(_this.selctedOption)) {
          selectedSku = sku;
        }
      });
      return selectedSku;
    },
    SkuCode: function SkuCode() {
      var self = this;
      return self.SelectedSku.name ? self.SelectedSku.name : self.$page.Product.sku;
    },
    ProductVariations: function ProductVariations() {
      return this.$page.Product.variations;
    },
    selctedOption: function selctedOption() {
      var selectedOptions = [];
      this.$page.Product.variations.filter(function (variation) {
        selectedOptions.push(variation.selected);
      });
      return selectedOptions;
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$emit('sku:changed', self.SelectedSku);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=template&id=c8b32158&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=template&id=c8b32158& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "product-attrbute-variation text-xs font-semibold" },
    [
      _c("div", { staticClass: "flex items-center justify-between pb-4" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-wrap items-center text-blue-700 font-semibold"
          },
          [_c("p", [_vm._v(_vm._s(_vm.SkuCode))])]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex items-center justify-between pb-4" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap items-center" }, [
          _c(
            "p",
            {
              staticClass: "font-semibold",
              class: {
                "text-green-400": _vm.ProductQuantity > 0,
                "text-red-400": _vm.ProductQuantity < 1
              }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.ProductQuantity > 0 ? "In Stock" : "OutStock") +
                  "\n        " +
                  _vm._s(_vm.ProductQuantity) +
                  "\n      "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.ProductVariations, function(
        ProductVariation,
        ProductVariationIndex
      ) {
        return _c(
          "div",
          {
            key: ProductVariationIndex,
            staticClass: "flex flex-wrap items-center justify-between pb-4"
          },
          [
            _c("div", { staticClass: "flex flex-wrap  " }, [
              _c("p", [_vm._v(_vm._s(ProductVariation.attribute.name))])
            ]),
            _vm._v(" "),
            ProductVariation.attribute.name == "Color"
              ? _c(
                  "div",
                  { staticClass: "flex flex-wrap items-center w-2/3" },
                  _vm._l(ProductVariation.attribute_options, function(
                    attribute_option,
                    attribute_option_index
                  ) {
                    return _c(
                      "label",
                      {
                        key: attribute_option_index,
                        staticClass: "flex inline-flex items-center mt-3"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: ProductVariation.selected,
                              expression: "ProductVariation.selected"
                            }
                          ],
                          key: attribute_option_index,
                          staticClass:
                            "form-radio px-2 py-2 rounded focus:outline-red",
                          class: _vm.AttrColor(
                            attribute_option.name.toLowerCase(),
                            ProductVariation.selected,
                            attribute_option.id
                          ),
                          attrs: { type: "radio" },
                          domProps: {
                            value: attribute_option.id,
                            checked: _vm._q(
                              ProductVariation.selected,
                              attribute_option.id
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                ProductVariation,
                                "selected",
                                attribute_option.id
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "px-2 text-xs text-gray-700 font-semibold"
                          },
                          [_vm._v(_vm._s(attribute_option.name))]
                        )
                      ]
                    )
                  }),
                  0
                )
              : _c(
                  "div",
                  { staticClass: "flex flex-wrap items-center w-2/3" },
                  [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: ProductVariation.selected,
                            expression: "ProductVariation.selected"
                          }
                        ],
                        staticClass:
                          "w-full transition duration-700 ease-in-out px-4 py-2 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none focus:border-purple-600",
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              ProductVariation,
                              "selected",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(ProductVariation.attribute_options, function(
                        attribute_option,
                        attribute_option_index
                      ) {
                        return _c(
                          "option",
                          {
                            key: attribute_option_index,
                            domProps: { value: attribute_option.id }
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(attribute_option.name) +
                                "\n        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap items-center" }, [
      _c("p", [_vm._v("SKU")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-wrap items-center" }, [
      _c("p", [_vm._v("Availablity")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductVariations_vue_vue_type_template_id_c8b32158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductVariations.vue?vue&type=template&id=c8b32158& */ "./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=template&id=c8b32158&");
/* harmony import */ var _ProductVariations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductVariations.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductVariations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductVariations_vue_vue_type_template_id_c8b32158___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductVariations_vue_vue_type_template_id_c8b32158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductVariations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=template&id=c8b32158&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=template&id=c8b32158& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariations_vue_vue_type_template_id_c8b32158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductVariations.vue?vue&type=template&id=c8b32158& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductVariations.vue?vue&type=template&id=c8b32158&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariations_vue_vue_type_template_id_c8b32158___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductVariations_vue_vue_type_template_id_c8b32158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);