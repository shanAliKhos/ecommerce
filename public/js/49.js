(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      CartItem: {
        id: this.Product.id ? this.Product.id : null,
        name: this.Product.name ? this.Product.name : '',
        slug: this.Product.slug ? this.Product.slug : '',
        Instock: this.Product.quantity ? this.Product.quantity : '',
        Qty: 1,
        price: this.Product ? this.Product.current_price : 0,
        image: this.Product ? this.Product.mainphoto_url : ''
      },
      Label: {
        Color: null,
        Title: null,
        Active: false
      },
      sending: false,
      activeTab: 'description',
      selectedImage: "url('".concat(this.Product.mainphoto_url, "')")
    };
  },
  watch: {
    CartQty: function CartQty(newQty, oldQty) {
      if (newQty > this.CartItem.Instock || newQty < 1) {
        this.CartItem.Qty = oldQty;
      }
    }
  },
  methods: {
    AddToCart: function AddToCart() {
      this.sending = true;
      this.$root.$emit('Add-To-Cart', this.CartItem);
    },
    AttrColor: function AttrColor(clr) {
      return "bg-".concat(clr, "-500");
    }
  },
  computed: {
    ProductImage: function ProductImage() {
      return this.Product.mainphoto_url;
    },
    RegularPrice: function RegularPrice() {
      return this.Product.regular_price;
    },
    SalePrice: function SalePrice() {
      return this.Product.sale_price;
    },
    CurrentPrice: function CurrentPrice() {
      return this.Product.current_price;
    },
    ProductName: function ProductName() {
      return this.Product.name;
    },
    ProductQuantity: function ProductQuantity() {
      return this.Product.quantity - this.CartItem.Qty;
    },
    ProductDescription: function ProductDescription() {
      return this.Product.description;
    },
    IsOnSale: function IsOnSale() {
      return this.$page.Product.sale_price > 0;
    },
    SkuCode: function SkuCode() {
      return this.$page.Product.sku ? this.$page.Product.sku : 'N/A';
    },
    ProductCategories: function ProductCategories() {
      return this.$page.Product.categories;
    },
    ProductBrand: function ProductBrand() {
      return this.$page.Product.brand;
    },
    CartQty: function CartQty() {
      self = this;
      return self.CartItem.Qty;
    },
    ProductVariations: function ProductVariations() {
      return this.$page.Product.variations;
    },
    CartButtonName: function CartButtonName() {
      var _this = this;

      var button;
      button = 'Add';

      if (this.$page.Cart.Items) {
        this.$page.Cart.Items.filter(function (Item) {
          if (Item.id == _this.$page.Product.id) {
            button = 'Update';
          }
        });
      }

      return button;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$root.$on('item-is-added-to-cart', function () {
      _this2.sending = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=template&id=fa5c7892&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=template&id=fa5c7892& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass:
          "pt-16 pb-24 flex flex-col lg:flex-row justify-between -mx-5"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "lg:1/2 flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between px-5"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col"
              },
              [
                _c("div", {
                  staticClass:
                    "w-28 h-28 my-3 bg-center bg-no-repeat bg-cover cursor-pointer  pb-5 mr-3 sm:pr-0 border-2 border-gray-300 bg-gray-50",
                  style:
                    "background-image:url('" +
                    this.Product.mainphoto_url +
                    "')",
                  on: {
                    click: function($event) {
                      _vm.selectedImage = $event.target.style.backgroundImage
                    }
                  }
                }),
                _vm._v(" "),
                _vm._l(3, function(n) {
                  return _c("div", {
                    key: n + 1,
                    staticClass:
                      "w-28 h-28 my-3 bg-center bg-no-repeat bg-cover cursor-pointer pb-5 mr-3 sm:pr-0 border-2 border-gray-300 bg-gray-50",
                    style:
                      "background-image:url('./../../img/product/product (" +
                      Math.floor(Math.random() * 40) +
                      ").jpg')",
                    on: {
                      click: function($event) {
                        _vm.selectedImage = $event.target.style.backgroundImage
                      }
                    }
                  })
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full sm:w-96 lg:w-80 xl:w-90 relative pb-5 sm:pb-0"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-v-pink border border-grey relative h-80 sm:h-94 xl:h-96 rounded flex items-center justify-center"
                  },
                  [
                    _c("div", {
                      staticClass:
                        "w-full h-full my-6  bg-center bg-no-repeat bg-cover",
                      style: "background-image:" + _vm.selectedImage + ""
                    })
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "lg:w-1/2 pt-5 lg:pt-0 px-5" }, [
          _c("div", { staticClass: "product-title" }, [
            _c("div", { staticClass: "border-b border-grey-dark mb-8" }, [
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "p",
                  {
                    staticClass:
                      "font-mono text-3xl capitalize text-gray-900 overflow-ellipsis overflow-hidden"
                  },
                  [_vm._v(_vm._s(_vm.Product.name))]
                ),
                _vm._v(" "),
                _vm.Product.label.active
                  ? _c(
                      "small",
                      {
                        staticClass:
                          "rounded-full  text-white uppercase text-sm text-center px-4 py-2 m-2",
                        class: _vm.Product.label.color
                      },
                      [_vm._v(_vm._s(_vm.Product.label.title))]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center pt-2" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "font-semibold text-red-600 text-2xl text-red-600"
                  },
                  [
                    _vm._v(
                      "\r\n                            " +
                        _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                        " " +
                        _vm._s(_vm.CurrentPrice) +
                        " \r\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.IsOnSale
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "font-semibold text-grey-darker text-xl line-through pl-5"
                      },
                      [
                        _vm._v(
                          "\r\n                            " +
                            _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                            " " +
                            _vm._s(_vm.RegularPrice) +
                            " \r\n                        "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.ProductCategories.length > 0
                ? _c("div", { staticClass: "flex items-center " }, [
                    _c(
                      "div",
                      { staticClass: " text-gray-400 mt-2 mb-1 text-xs" },
                      [
                        _c("span", { staticClass: "pr-2" }, [
                          _vm._v("Categories:")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.ProductCategories, function(
                          ProductCategory,
                          index
                        ) {
                          return _c(
                            "span",
                            { key: index, staticClass: "capitalize " },
                            [
                              _vm._v(_vm._s(ProductCategory.name) + " "),
                              _vm.ProductCategories.length > index + 1
                                ? _c("span", [_vm._v(",  ")])
                                : _vm._e()
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.ProductBrand
                ? _c("div", { staticClass: "flex items-center" }, [
                    _c(
                      "div",
                      { staticClass: " text-gray-400 mt-1 mb-1 text-xs" },
                      [
                        _c("span", { staticClass: "pr-2" }, [
                          _vm._v("Brands:")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "capitalize " }, [
                          _vm._v(_vm._s(_vm.ProductBrand.name) + "  ")
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "product-attrbute-variation text-gray-500" },
            [
              _c(
                "div",
                { staticClass: "flex items-center justify-between pb-4" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-2/3 sm:w-5/6 flex items-center" },
                    [_c("p", [_vm._v(_vm._s(_vm.SkuCode))])]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center justify-between pb-4" },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-2/3 sm:w-5/6 flex items-center" },
                    [
                      _vm.ProductQuantity > 0
                        ? _c(
                            "p",
                            { staticClass: "font-semibold text-v-green" },
                            [_vm._v("In Stock " + _vm._s(_vm.ProductQuantity))]
                          )
                        : _c(
                            "p",
                            { staticClass: "font-semibold text-v-red " },
                            [
                              _vm._v(
                                "Out of Stock " + _vm._s(_vm.ProductQuantity)
                              )
                            ]
                          )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.ProductVariations, function(
                ProductVariation,
                ProductVariationIndex
              ) {
                return _c(
                  "div",
                  {
                    key: ProductVariationIndex,
                    staticClass: "flex items-center justify-between pb-4"
                  },
                  [
                    _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
                      _c("p", [_vm._v(_vm._s(ProductVariation.attribute.name))])
                    ]),
                    _vm._v(" "),
                    ProductVariation.attribute.name == "Color"
                      ? _c(
                          "div",
                          { staticClass: "w-2/3 sm:w-5/6 flex items-center" },
                          _vm._l(ProductVariation.attribute_options, function(
                            attribute_option,
                            attribute_option_index
                          ) {
                            return _c("button", {
                              key: attribute_option_index,
                              staticClass:
                                "px-2 py-2 rounded-full focus:outline-red  mr-2 ",
                              class: _vm.AttrColor(
                                attribute_option.name.toLowerCase()
                              ),
                              attrs: { type: "button" }
                            })
                          }),
                          0
                        )
                      : _c("div", { staticClass: "w-2/3 sm:w-5/6" }, [
                          _c(
                            "select",
                            { staticClass: "w-2/3 form-select" },
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
                                [_vm._v(_vm._s(attribute_option.name))]
                              )
                            }),
                            0
                          )
                        ])
                  ]
                )
              }),
              _vm._v(" "),
              _c("div", { staticClass: "hidden lg:block" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between pb-5" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-2/3 sm:w-5/6 flex" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.number",
                            value: _vm.CartItem.Qty,
                            expression: "CartItem.Qty",
                            modifiers: { number: true }
                          }
                        ],
                        staticClass:
                          "form-input rounded-r-none  w-2/3 py-0 px-2 text-center ",
                        attrs: { type: "number", min: "1" },
                        domProps: { value: _vm.CartItem.Qty },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.CartItem,
                              "Qty",
                              _vm._n($event.target.value)
                            )
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-col inline-flex ml-2" },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "px-1 bg-white border border-grey-darker flex-1 rounded-tr cursor-pointer ",
                              on: {
                                click: function($event) {
                                  _vm.CartItem.Qty++
                                }
                              }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "text-primary pointer-events-none h-5 w-5",
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
                                      d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "px-1 bg-white flex-1 border rounded-br border-grey-darker cursor-pointer mt-1",
                              on: {
                                click: function($event) {
                                  _vm.CartItem.Qty--
                                }
                              }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "text-primary pointer-events-none h-5 w-5",
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
                                      d: "M20 12H4"
                                    }
                                  })
                                ]
                              )
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
                  {
                    staticClass:
                      "flex items-center  justify-end hidden lg:block "
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex flex-inline justify-center items-center transition duration-1000 ease-in bg-yellow-400 hover:bg-yellow-600 focus:outline-none cursor-pointer rounded-lg px-4 py-3 text-white font-semibold shadow uppercase",
                        class: {
                          "opacity-50 pointer-events-none": _vm.sending
                        },
                        attrs: { disabled: _vm.sending, type: "button" },
                        on: { click: _vm.AddToCart }
                      },
                      [
                        !_vm.sending
                          ? _c(
                              "svg",
                              {
                                staticClass:
                                  " transition duration-700 ease-in-out  h-5 w-5 ",
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
                                      "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.sending
                          ? _c(
                              "svg",
                              {
                                staticClass:
                                  "transition  ease-in-out  animate-spin h-5 w-5",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d:
                                      "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              " ml-2 pointer-events-none pointer-events-none"
                          },
                          [_vm._v(_vm._s(_vm.CartButtonName))]
                        )
                      ]
                    )
                  ]
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mobile-addtocart-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 "
            },
            [
              _c(
                "div",
                { staticClass: "grid grid-cols-4 gap-2 flex justify-around" },
                [
                  _c("div", { staticClass: "w-1/2 relative px-2 py-2" }, [
                    _c("button", {
                      staticClass:
                        "transition transform duration-500 ease-in focus:outline-none focus:scale-125 px-2 py-2 text-primary transition duration-700 ease-in-out transform focus:text-green-500 bg-white bx bx-minus bx-border font-semibold",
                      on: {
                        click: function($event) {
                          _vm.CartItem.Qty--
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "px-5 py-4 bg-gray-50 text-red-500 cursor-pointer font-semibold"
                      },
                      [_vm._v(_vm._s(_vm.CartItem.Qty))]
                    ),
                    _vm._v(" "),
                    _c("button", {
                      staticClass:
                        "transition transform duration-300 ease-in focus:outline-none focus:scale-125 px-2 py-2 text-primary transition duration-700 ease-in-out transform focus:text-green-500 bg-white bx bx-plus bx-border font-semibold",
                      on: {
                        click: function($event) {
                          _vm.CartItem.Qty++
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "flex justify-end w-1/2 relative  px-2 py-2 "
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "text-xs px-2 flex items-center transition transform  duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none focus:scale-125   rounded text-white font-normal tracking-wide cursor-pointer",
                          class: {
                            "opacity-50 pointer-events-none": _vm.sending
                          },
                          attrs: { disabled: _vm.sending, type: "button" },
                          on: { click: _vm.AddToCart }
                        },
                        [
                          !_vm.sending
                            ? _c(
                                "svg",
                                {
                                  staticClass:
                                    "pointer-events-none transition duration-700 ease-in-out  h-4 w-4 ",
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
                                        "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.sending
                            ? _c(
                                "svg",
                                {
                                  staticClass:
                                    "pointer-events-none transition  ease-in-out  animate-spin h-4 w-4",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d:
                                        "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "tracking-tighter pointer-events-none"
                            },
                            [_vm._v(_vm._s(_vm.CartButtonName))]
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
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "pb-16 sm:pb-20 md:pb-24",
        attrs: { "x-data": "{ activeTab: 'description' }" }
      },
      [
        _c(
          "div",
          {
            staticClass: "tabs flex flex-col sm:flex-row",
            attrs: { role: "tablist" }
          },
          [
            _c(
              "span",
              {
                staticClass:
                  "tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors",
                class: { active: _vm.activeTab === "description" },
                on: {
                  click: function($event) {
                    _vm.activeTab = "description"
                  }
                }
              },
              [_vm._v("\r\n                Description\r\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tab-content relative" }, [
          _c(
            "div",
            {
              staticClass:
                "tab-pane bg-grey-light py-10 md:py-16   transition-opacity",
              class: { active: _vm.activeTab === "description" },
              attrs: { role: "tabpanel" }
            },
            [
              _c(
                "div",
                { staticClass: "w-5/6 mx-auto text-center sm:text-left" },
                [
                  _c("div", {
                    staticClass: "font-hkregular text-secondary text-base",
                    domProps: { innerHTML: _vm._s(_vm.ProductDescription) }
                  })
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center pt-2" }, [
      _c("div", { staticClass: "flex items-center" }, [
        _c("i", { staticClass: "bx bxs-star text-primary" }),
        _vm._v(" "),
        _c("i", { staticClass: "bx bxs-star text-primary" }),
        _vm._v(" "),
        _c("i", { staticClass: "bx bxs-star text-primary" }),
        _vm._v(" "),
        _c("i", { staticClass: "bx bxs-star text-primary" }),
        _vm._v(" "),
        _c("i", { staticClass: "bx bxs-star text-primary" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "font-semibold text-sm text-gray-400 ml-2" }, [
        _vm._v("(45)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
      _c("p", [_vm._v("SKU ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
      _c("p", [_vm._v("Availability ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
      _c("p", [_vm._v("Quantity")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowProduct_vue_vue_type_template_id_fa5c7892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowProduct.vue?vue&type=template&id=fa5c7892& */ "./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=template&id=fa5c7892&");
/* harmony import */ var _ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowProduct.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowProduct_vue_vue_type_template_id_fa5c7892___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowProduct_vue_vue_type_template_id_fa5c7892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=template&id=fa5c7892&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=template&id=fa5c7892& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_template_id_fa5c7892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowProduct.vue?vue&type=template&id=fa5c7892& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ShowProduct.vue?vue&type=template&id=fa5c7892&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_template_id_fa5c7892___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_template_id_fa5c7892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);