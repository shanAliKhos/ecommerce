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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      CartItem: {
        id: this.$page.Product ? this.$page.Product.id : null,
        name: this.$page.Product ? this.$page.Product.name : '',
        slug: this.$page.Product ? this.$page.Product.slug : '',
        Instock: this.$page.Product ? this.$page.Product.quantity : '',
        Qty: 1,
        price: this.$page.Product ? this.$page.Product.current_price : 0,
        image: this.$page.Product ? this.$page.Product.mainphoto_url : ''
      },
      form: {},
      sending: false,
      activeTab: 'description',
      selectedImage: "url('".concat(this.$page.Product.mainphoto_url, "')")
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
      return "bg-".concat(clr, "-400 text-").concat(clr, "-400");
    }
  },
  computed: {
    Product: function Product() {
      return this.$page.Product;
    },
    ProductImage: function ProductImage() {
      return this.$page.Product.mainphoto_url;
    },
    RegularPrice: function RegularPrice() {
      return this.$page.Product.regular_price;
    },
    SalePrice: function SalePrice() {
      return this.$page.Product.sale_price;
    },
    CurrentPrice: function CurrentPrice() {
      return this.$page.Product.current_price;
    },
    ProductName: function ProductName() {
      return this.$page.Product.name;
    },
    ProductQuantity: function ProductQuantity() {
      return this.$page.Product.quantity - this.CartItem.Qty;
    },
    ProductDescription: function ProductDescription() {
      return this.$page.Product.description;
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
      button = 'Add to cart';

      if (this.$page.Cart.Items) {
        this.$page.Cart.Items.filter(function (Item) {
          if (Item.id == _this.$page.Product.id) {
            button = 'Update to cart';
            _this.CartItem.Qty = Item.Qty;
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
  return _c("div", { staticClass: "px-2 py-2" }, [
    _c(
      "div",
      {
        staticClass:
          "flex flex-col lg:flex-row justify-between md:mx-5 md:py-5 md:mt-5"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "lg:w-1/2 flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-around"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col justify-between "
              },
              [
                _c("div", {
                  staticClass:
                    "w-20 h-20 bg-center bg-no-repeat bg-cover cursor-pointer border-2 border-gray-300 bg-gray-50 mt-2 md:mt-0",
                  style:
                    "background-image:url('" +
                    this.$page.Product.mainphoto_url +
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
                      "w-20 h-20  bg-center bg-no-repeat bg-cover cursor-pointer  border-2 border-gray-300 bg-gray-50 mt-2 ",
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
                  "w-full relative bg-pink-100 border border-grey md:mr-5 flex items-center justify-center"
              },
              [
                _c("div", {
                  staticClass:
                    "flex items-center justify-between w-96 h-96 bg-center bg-no-repeat bg-cover",
                  style: "background-image:" + _vm.selectedImage + ""
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "lg:w-1/2 pt-5 lg:pt-0" }, [
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
                          "rounded-full text-white uppercase text-sm text-center px-4 py-2 m-2",
                        class: _vm.Product.label.bg_scolor
                      },
                      [_vm._v(_vm._s(_vm.Product.label.title))]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center pt-2" }, [
                _c(
                  "div",
                  { staticClass: "flex items-center" },
                  _vm._l(5, function(n) {
                    return _c("i", {
                      key: n,
                      staticClass:
                        "bx text-yellow-300 border border-white text-lg",
                      class: {
                        "bxs-star": n <= _vm.Product.rating,
                        "bx-star": n > _vm.Product.rating
                      }
                    })
                  }),
                  0
                )
              ]),
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
                        "\r\n                        "
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
                            "\r\n                        "
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
                                ? _c("span", [_vm._v(", ")])
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
                          _vm._v(_vm._s(_vm.ProductBrand.name) + " ")
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
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-3/4 flex flex-wrap items-center" },
                    [_c("p", [_vm._v(_vm._s(_vm.SkuCode))])]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-between pb-4 block lg:hidden"
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-3/4 flex flex-wrap items-center" },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "font-semibold w-3/4",
                          class: {
                            "text-green-400": _vm.ProductQuantity > 0,
                            "text-red-400": _vm.ProductQuantity < 1
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.ProductQuantity > 0 ? "In Stock" : "OutStock"
                            ) +
                              " " +
                              _vm._s(_vm.ProductQuantity)
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
                    staticClass:
                      "flex flex-wrap items-center justify-between pb-4"
                  },
                  [
                    _c("div", { staticClass: "flex flex-wrap w-1/4" }, [
                      _c("p", [_vm._v(_vm._s(ProductVariation.attribute.name))])
                    ]),
                    _vm._v(" "),
                    ProductVariation.attribute.name == "Color"
                      ? _c(
                          "div",
                          { staticClass: "w-3/4 flex flex-wrap items-center" },
                          _vm._l(ProductVariation.attribute_options, function(
                            attribute_option,
                            attribute_option_index
                          ) {
                            return _c(
                              "label",
                              {
                                key: attribute_option_index,
                                staticClass:
                                  "w-1/2 md:w-1/3 flex inline-flex items-center mt-3"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.selectedSku,
                                      expression: "form.selectedSku"
                                    }
                                  ],
                                  key: attribute_option_index,
                                  staticClass:
                                    "form-radio px-3 py-3 rounded focus:outline-red ",
                                  class: _vm.AttrColor(
                                    attribute_option.name.toLowerCase()
                                  ),
                                  attrs: { type: "radio" },
                                  domProps: {
                                    value: attribute_option.id,
                                    checked: _vm._q(
                                      _vm.form.selectedSku,
                                      attribute_option.id
                                    )
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "selectedSku",
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
                      : _c("div", { staticClass: "w-3/4" }, [
                          _c(
                            "select",
                            {
                              staticClass:
                                "w-2/3 transition duration-700 ease-in-out px-4 py-2 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none  focus:border-purple-600"
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
                                [_vm._v(_vm._s(attribute_option.name))]
                              )
                            }),
                            0
                          )
                        ])
                  ]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "text-xs fixed bottom-0 right-1 flex flex-wrap justify-end items-center hidden lg:block py-3 px-3 z-50 bg-white shadow-2xl border border-gray-200 rounded-lg  "
            },
            [
              _c("p", { staticClass: "text-red-700 font-semibold flex" }, [
                _vm._v("SKU : " + _vm._s(_vm.SkuCode))
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap items-center bg-white py-1 w-full transition duration-700 ease-in-out ",
                  class: {
                    "text-green-400": _vm.ProductQuantity > 0,
                    "text-red-400": _vm.ProductQuantity < 1
                  }
                },
                [
                  _c("p", { staticClass: "font-semibold w-3/4" }, [
                    _vm._v(
                      _vm._s(
                        _vm.ProductQuantity > 0 ? "In Stock" : "OutStock"
                      ) +
                        " " +
                        _vm._s(_vm.ProductQuantity)
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: " font-semibold flex justify-center w-1/4" },
                    [_vm._v("Qty")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap items-center  pb-2 bg-white" },
                [
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
                      "text-red-600  font-semibold text-center w-4/5 transition duration-700 ease-in-out px-4 py-3 rounded  shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-r-0 border-2 border-gray-200 focus:outline-none  ",
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
                    { staticClass: "flex flex-col inline-flex w-1/5" },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "transition transform duration-500 focus:scale-105 flex flex-1 item-center justify-center text-white  bg-green-400 border focus:border-white focus:bg-green-600 rounded-tr px-1 cursor-pointer focus:outline-none",
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
                              staticClass: "h-6 w-6 focus:",
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
                        "button",
                        {
                          staticClass:
                            "transition transform duration-500 focus:scale-105 flex flex-1 item-center justify-center text-white  bg-red-400 border focus:border-white focus:bg-red-600 rounded-tr px-1 cursor-pointer focus:outline-none",
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
                              staticClass: "pointer-events-none h-6 w-6",
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
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap  items-center  bg-white" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "group w-full flex flex-inline justify-center items-center transition transform duration-500 ease-in bg-red-500  hover:bg-red-600 focus:outline-none cursor-pointer rounded px-4 py-3 text-white font-semibold shadow uppercase focus:scale-105",
                      class: { "opacity-50 pointer-events-none": _vm.sending },
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
                        { staticClass: "  ml-2 pointer-events-none" },
                        [_vm._v(_vm._s(_vm.CartButtonName))]
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
                "mobile-addtocart-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 "
            },
            [
              _c("div", { staticClass: "flex justify-around" }, [
                _c("div", { staticClass: "w-1/2 relative px-2 py-2" }, [
                  _c("button", {
                    staticClass:
                      "transition transform duration-500 ease-in focus:outline-none focus:scale-105 px-2 py-2 text-red-400 transition duration-700 ease-in-out transform focus:text-green-500 bg-white bx bx-minus bx-border font-semibold",
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
                        "px-5 py-4 bg-gray-50 text-green-500 cursor-pointer font-semibold"
                    },
                    [_vm._v(_vm._s(_vm.CartItem.Qty))]
                  ),
                  _vm._v(" "),
                  _c("button", {
                    staticClass:
                      "transition transform duration-300 ease-in focus:outline-none focus:scale-105 px-2 py-2 text-green-400 transition duration-700 ease-in-out transform focus:text-green-500 bg-white bx bx-plus bx-border font-semibold",
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
                          "group text-xs px-2 flex items-center transition transform  duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none focus:scale-105   rounded text-white font-normal tracking-wide cursor-pointer",
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
                                  " transition transform  duration-700 ease-in-out  h-4 w-4 group-hover:scale-105",
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
                              "tracking-tighter pointer-events-none ml-2"
                          },
                          [_vm._v(_vm._s(_vm.CartButtonName))]
                        )
                      ]
                    )
                  ]
                )
              ])
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
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors",
                class: { active: _vm.activeTab === "additional-information" },
                on: {
                  click: function($event) {
                    _vm.activeTab = "additional-information"
                  }
                }
              },
              [
                _vm._v(
                  "\r\n                Additional Information\r\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors",
                class: { active: _vm.activeTab === "reviews" },
                on: {
                  click: function($event) {
                    _vm.activeTab = "reviews"
                  }
                }
              },
              [_vm._v("\r\n                Reviews\r\n            ")]
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
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "tab-pane bg-grey-light py-10 md:py-16   transition-opacity",
              class: { active: _vm.activeTab === "additional-information" },
              attrs: { role: "tabpanel" }
            },
            [_vm._m(2)]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "tab-pane bg-grey-light py-10 md:py-16   transition-opacity",
              class: { active: _vm.activeTab === "reviews" },
              attrs: { role: "tabpanel" }
            },
            [
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6)
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
    return _c("div", { staticClass: "w-1/4 flex flex-wrap items-center" }, [
      _c("p", [_vm._v("SKU ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/4 flex flex-wrap items-center" }, [
      _c("p", [_vm._v("Availablity")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-5/6 mx-auto" }, [
      _c("div", { staticClass: "font-hkregular text-secondary text-base" }, [
        _vm._v(
          "\r\n                        On the main compartment has multiple pockets available for your tools, chargers,\r\n                        make up, keys, etc. "
        ),
        _c("br"),
        _c("br"),
        _vm._v(" Size::13.4”Lx 6.5”W x 15.4”H. "),
        _c("br"),
        _vm._v(" Weight:\r\n                        1.57pounds. "),
        _c("br"),
        _vm._v(" Color: light brown.\r\n\r\n                    ")
      ])
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
          "w-5/6 mx-auto border-b border-grey-darker pb-8 text-center sm:text-left"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex justify-center sm:justify-start items-center pt-3 xl:pt-5"
          },
          [
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" })
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "font-hkbold text-secondary text-lg pt-3" }, [
          _vm._v("\r\n                        Perfect for everyday use")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
          },
          [
            _vm._v(
              "\r\n                        I loooveeeee this product!!! It feels so soft and smells like real leather!!! I\r\n                        ordered this fancy backpack looking for something that can be used at work and, at\r\n                        the same time, after work; and I found it. Honestly.. Amazing!!"
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex justify-center sm:justify-start items-center pt-3"
          },
          [
            _c(
              "p",
              { staticClass: "font-hkregular text-grey-darkest text-sm" },
              [_c("span", [_vm._v("By")]), _vm._v(" Melanie Ashwood")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "font-hkregular text-grey-darkest text-sm block px-4"
              },
              [_vm._v(".")]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "font-hkregular text-grey-darkest text-sm" },
              [_vm._v("\r\n                            6 days ago")]
            )
          ]
        )
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
          "w-5/6 mx-auto border-b border-transparent pb-8 text-center sm:text-left"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "flex justify-center sm:justify-start items-center pt-3 xl:pt-5"
          },
          [
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" }),
            _vm._v(" "),
            _c("i", { staticClass: "bx bxs-star text-primary" })
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "font-hkbold text-secondary text-lg pt-3" }, [
          _vm._v("\r\n                        Gift for my girlfriend")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
          },
          [
            _vm._v(
              "\r\n                        I paid this thing thinking about my girlfriend’s birthday present, however I had my\r\n                        doubts cuz’ she is kind of picky. But Seriously, from now on, Elyssi is my best\r\n                        friend! She loved it!! She’s crazy about it! DISCLAIMER: It is smaller than it\r\n                        appears. "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex justify-center sm:justify-start items-center pt-3"
          },
          [
            _c(
              "p",
              { staticClass: "font-hkregular text-grey-darkest text-sm" },
              [_c("span", [_vm._v("By")]), _vm._v(" Jake Houston")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "font-hkregular text-grey-darkest text-sm block px-4"
              },
              [_vm._v(".")]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "font-hkregular text-grey-darkest text-sm" },
              [_vm._v("\r\n                            4 days ago")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "w-5/6 mx-auto" }, [
      _c(
        "div",
        {
          staticClass: "flex flex-col sm:flex-row justify-between pt-10 -mx-5"
        },
        [
          _c("div", { staticClass: "sm:w-1/2 px-5" }, [
            _c(
              "label",
              {
                staticClass: "font-hkregular text-secondary text-sm block mb-2",
                attrs: { for: "name" }
              },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input",
              attrs: {
                type: "text",
                placeholder: "Enter your Name",
                id: "name"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sm:w-1/2 px-5 pt-10 sm:pt-0" }, [
            _c(
              "label",
              {
                staticClass: "font-hkregular text-secondary text-sm block mb-2",
                attrs: { for: "email" }
              },
              [_vm._v("Email\r\n                                address")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input ",
              attrs: {
                type: "email",
                placeholder: "Enter your email",
                id: "email"
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex flex-col sm:flex-row justify-between pt-10 -mx-5"
        },
        [
          _c("div", { staticClass: "sm:w-1/2 px-5" }, [
            _c(
              "label",
              {
                staticClass: "font-hkregular text-secondary text-sm block mb-2",
                attrs: { for: "review_title" }
              },
              [_vm._v("Review\r\n                                Title")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input ",
              attrs: {
                type: "text",
                placeholder: "Enter your review title",
                id: "review_title"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sm:w-1/2 px-5 pt-10 sm:pt-0" }, [
            _c(
              "label",
              {
                staticClass: "font-hkregular text-secondary text-sm block mb-2"
              },
              [_vm._v("Rating")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex pt-4" }, [
              _c("i", {
                staticClass: "bx bxs-star text-grey-darker text-xl pr-1"
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "bx bxs-star text-grey-darker text-xl pr-1"
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "bx bxs-star text-grey-darker text-xl pr-1"
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "bx bxs-star text-grey-darker text-xl pr-1"
              }),
              _vm._v(" "),
              _c("i", { staticClass: "bx bxs-star text-grey-darker text-xl" })
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "sm:w-12/25 pt-10" }, [
        _c(
          "label",
          {
            staticClass: "font-hkregular text-secondary text-sm block mb-2",
            attrs: { for: "message" }
          },
          [_vm._v("ReviewMessage")]
        ),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-textarea",
          attrs: { placeholder: "Give your review tittle", id: "message" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left"
      },
      [
        _c("a", { staticClass: "btn btn-primary", attrs: { href: "/" } }, [
          _vm._v("Submit Review")
        ])
      ]
    )
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