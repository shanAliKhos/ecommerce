(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    Product: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      ProductImages: [],
      CartProduct: {
        id: this.Product.id ? this.Product.id : null,
        name: this.Product.name ? this.Product.name : '',
        slug: this.Product.slug ? this.Product.slug : '',
        Instock: this.Product.quantity ? this.Product.quantity : '',
        Qty: 1,
        price: this.Product.sale_price ? this.Product.sale_price : this.Product.regular_price,
        image: this.Product.image ? this.Product.image : ''
      }
    };
  },
  methods: {
    AddToCart: function AddToCart(Item) {
      this.$root.$emit('Add-To-Cart', Item);
    }
  },
  watch: {
    CartQty: function CartQty(newQty, oldQty) {
      if (newQty > this.ProductQuantity || newQty < 1) {
        this.CartProduct.Qty = oldQty;
      }
    }
  },
  computed: {
    ProductMainImage: function ProductMainImage() {
      self = this;
      var img = this.Product.image ? '/' + this.Product.image.replace("public", "storage") : '/' + self.Product.image;
      return img;
    },
    ProductAttributes: function ProductAttributes() {
      self = this;
      return self.Product.Attributes;
    },
    ProductPrice: function ProductPrice() {
      self = this;
      return self.Product.sale_price ? self.Product.sale_price : self.Product.regular_price;
    },
    CartQty: function CartQty() {
      self = this;
      return self.CartProduct.Qty;
    },
    ProductQuantity: function ProductQuantity() {
      self = this;
      return self.Product.quantity;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=template&id=63c41176&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=template&id=63c41176& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "product-details spad" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6 col-md-6" }, [
          _c("div", { staticClass: "product__details__pic" }, [
            _c("div", { staticClass: "product__details__pic__item" }, [
              _c("img", {
                staticClass: "product__details__pic__item--large",
                attrs: { src: _vm.ProductMainImage, alt: _vm.Product.name }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "product__details__pic__slider owl-carousel" },
              [
                _c("img", {
                  attrs: {
                    "data-imgbigurl": _vm.ProductImages[0],
                    src: _vm.ProductImages[0],
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    "data-imgbigurl": _vm.ProductImages[1],
                    src: _vm.ProductImages[1],
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    "data-imgbigurl": _vm.ProductImages[2],
                    src: _vm.ProductImages[2],
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    "data-imgbigurl": _vm.ProductImages[3],
                    src: _vm.ProductImages[3],
                    alt: ""
                  }
                })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6" }, [
          _c("div", { staticClass: "product__details__text" }, [
            _c("h3", [_vm._v(_vm._s(_vm.Product.name))]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "product__details__price" }, [
              _vm._v(
                "$" +
                  _vm._s(
                    _vm.Product.sale_price
                      ? _vm.Product.sale_price
                      : this.Product.regular_price
                  )
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(_vm._s(_vm.Product.description.substring(0, 255) + "..."))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "product__details__quantity mt-5" }, [
              _c("div", { staticClass: "quantity" }, [
                _c("div", { staticClass: "pro-qty" }, [
                  _c(
                    "span",
                    {
                      staticClass: "qtybtn",
                      on: {
                        click: function($event) {
                          _vm.CartProduct.Qty--
                        }
                      }
                    },
                    [_vm._v("-")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.CartProduct.Qty,
                        expression: "CartProduct.Qty"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: _vm.CartProduct.Qty },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.CartProduct, "Qty", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "qtybtn",
                      on: {
                        click: function($event) {
                          _vm.CartProduct.Qty++
                        }
                      }
                    },
                    [_vm._v("+")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "primary-btn",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.AddToCart(_vm.CartProduct)
                  }
                }
              },
              [_vm._v("ADD TO CARD")]
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("b", [_vm._v("Availability")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(
                      _vm.ProductQuantity > 1
                        ? "In Stock (" + _vm.ProductQuantity + ")"
                        : "Out of Stock"
                    )
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("Weight")]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.Product.weight) + " kg")])
              ]),
              _vm._v(" "),
              _vm._m(3)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "product__details__tab" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "tab-content" }, [
              _c(
                "div",
                {
                  staticClass: "tab-pane active",
                  attrs: { id: "tabs-1", role: "tabpanel" }
                },
                [
                  _c("div", { staticClass: "product__details__tab__desc" }, [
                    _c("h6", [_vm._v("Products Description")]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.Product.description))])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6)
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product__details__rating" }, [
      _c("i", { staticClass: "fa fa-star" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-star-half-o" }),
      _vm._v(" "),
      _c("span", [_vm._v("(18 reviews)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "heart-icon", attrs: { href: "#" } }, [
      _c("span", { staticClass: "icon_heart_alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Shipping")]),
      _vm._v(" "),
      _c("span", [
        _vm._v("01 day shipping. "),
        _c("samp", [_vm._v("Free pickup today")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("b", [_vm._v("Share on")]),
      _vm._v(" "),
      _c("div", { staticClass: "share" }, [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-facebook" })
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-twitter" })
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-instagram" })
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-pinterest" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                "data-toggle": "tab",
                href: "#tabs-1",
                role: "tab",
                "aria-selected": "true"
              }
            },
            [_vm._v("Description")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                "data-toggle": "tab",
                href: "#tabs-2",
                role: "tab",
                "aria-selected": "false"
              }
            },
            [_vm._v("Information")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                "data-toggle": "tab",
                href: "#tabs-3",
                role: "tab",
                "aria-selected": "false"
              }
            },
            [_vm._v("Reviews "), _c("span", [_vm._v("(1)")])]
          )
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
      { staticClass: "tab-pane", attrs: { id: "tabs-2", role: "tabpanel" } },
      [
        _c("div", { staticClass: "product__details__tab__desc" }, [
          _c("h6", [_vm._v("Products Infomation")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.\n                                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.\n                                    Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam\n                                    sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo\n                                    eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.\n                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent\n                                    sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac\n                                    diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante\n                                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n                                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.\n                                    Proin eget tortor risus."
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
      { staticClass: "tab-pane", attrs: { id: "tabs-3", role: "tabpanel" } },
      [
        _c("div", { staticClass: "product__details__tab__desc" }, [
          _c("h6", [_vm._v("Products Reviews")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
            )
          ])
        ])
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

/***/ "./resources/js/Pages/Ecomerce/shop-details/product/Product.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/product/Product.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_63c41176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=63c41176& */ "./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=template&id=63c41176&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_63c41176___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_63c41176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop-details/product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=template&id=63c41176&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=template&id=63c41176& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_63c41176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=63c41176& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/product/Product.vue?vue&type=template&id=63c41176&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_63c41176___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_63c41176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);