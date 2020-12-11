(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selectedImage: null
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
    SetLable: function SetLable() {
      if (this.Product.sale_price > 0) {
        this.Label = {
          Color: 'bg-primary',
          Title: '-' + Math.round((this.Product.regular_price - this.Product.sale_price) / this.Product.regular_price * 100) + '%OFF',
          Active: true
        };
      } else if (this.Product.is_featured) {
        this.Label = {
          Color: 'bg-v-blue',
          Title: 'Trend',
          Active: true
        };
      } else {
        this.Label = {
          Color: 'bg-v-green',
          Title: 'new',
          Active: true
        };
      }
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
    CartQty: function CartQty() {
      self = this;
      return self.CartItem.Qty;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('item-is-added-to-cart', function () {
      _this.sending = false;
    });
    this.SetLable();
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
                _c(
                  "div",
                  {
                    staticClass:
                      "w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"
                      },
                      [
                        _c("div", {
                          staticClass:
                            "w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",
                          staticStyle: {
                            "background-image":
                              "url('./../../img/product/product (1).png')"
                          },
                          on: {
                            click: function($event) {
                              _vm.selectedImage =
                                $event.target.style.backgroundImage
                            }
                          }
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
                      "w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"
                      },
                      [
                        _c("div", {
                          staticClass:
                            "w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",
                          staticStyle: {
                            "background-image":
                              "url('./../../img/product/product (2).png')"
                          },
                          on: {
                            click: function($event) {
                              _vm.selectedImage =
                                $event.target.style.backgroundImage
                            }
                          }
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
                      "w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"
                      },
                      [
                        _c("div", {
                          staticClass:
                            "w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",
                          staticStyle: {
                            "background-image":
                              "url('./../../img/product/product (3).png')"
                          },
                          on: {
                            click: function($event) {
                              _vm.selectedImage =
                                $event.target.style.backgroundImage
                            }
                          }
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
                      "w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"
                      },
                      [
                        _c("div", {
                          staticClass:
                            "w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",
                          staticStyle: {
                            "background-image":
                              "url('./../../img/product/product (4).png')"
                          },
                          on: {
                            click: function($event) {
                              _vm.selectedImage =
                                $event.target.style.backgroundImage
                            }
                          }
                        })
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
                        "w-56 xl:w-64 h-76 sm:h-82 xl:h-86 my-6 sm:my-12 xl:my-24 bg-center bg-no-repeat bg-cover",
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
                _vm.Label.Active
                  ? _c(
                      "small",
                      {
                        staticClass:
                          "rounded-full  text-white uppercase text-sm text-center px-4 py-2 m-2",
                        class: _vm.Label.Color
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.Label.Title) +
                            "\n                        "
                        )
                      ]
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
                      "\n                            " +
                        _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                        " " +
                        _vm._s(_vm.CurrentPrice) +
                        " \n                        "
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
                          "\n                            " +
                            _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                            " " +
                            _vm._s(_vm.RegularPrice) +
                            " \n                        "
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
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "div",
                  { staticClass: " text-gray-400 mt-1 mb-1 text-xs" },
                  [
                    _c("span", { staticClass: "pr-2" }, [_vm._v("Brands:")]),
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
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-between pb-5 hidden lg:block"
                },
                [
                  _c("div", { staticClass: "w-full" }, [
                    _c("div", { staticClass: "flex" }, [
                      _c("p", { staticClass: "flex inline-flex flex-1" }, [
                        _vm._v("Quantity")
                      ]),
                      _vm._v(" "),
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
                          "form-input rounded-r-none  py-0 px-2 text-center flex inline-flex flex-1",
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
                        { staticClass: "flex flex-col   inline-flex " },
                        [
                          _c(
                            "span",
                            {
                              staticClass:
                                "px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer ",
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
                                "px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer",
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
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-between hidden lg:block"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "flex flex-inline  w-full justify-center   uppercase items-center uppercase transition duration-1000 ease-in-out bg-yellow-400 hover:bg-yellow-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2",
                      class: { "opacity-50": _vm.sending },
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
                      _c("span", { staticClass: " ml-2 pointer-events-none" }, [
                        _vm._v("Add to cart")
                      ])
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
              _c(
                "div",
                { staticClass: "grid grid-cols-4 gap-2 flex justify-around" },
                [
                  _c("div", { staticClass: "w-1/2 relative px-2 py-2" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "px-1 py-2 bg-white flex-1 border border-gray-200 rounded cursor-pointer",
                        on: {
                          click: function($event) {
                            _vm.CartItem.Qty--
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass:
                            "bx bxs-down-arrow text-xs text-primary pointer-events-none"
                        })
                      ]
                    ),
                    _vm._v(" "),
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
                        "form-input form-quantity rounded-r-none w-2/3 py-2 px-2 text-center",
                      attrs: { type: "number", id: "quantity-form", min: "1" },
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
                      "span",
                      {
                        staticClass:
                          "text-xs absolute text-semibold bottom-0 right-9 transition duration-500 ease-in-out ",
                        class: {
                          "text-green-400": _vm.ProductQuantity > 0,
                          "text-red-700": _vm.ProductQuantity < 1
                        }
                      },
                      [_vm._v("  stock " + _vm._s(_vm.ProductQuantity) + " ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "px-1 py-2 bg-white border  border-gray-200 flex-1 rounded cursor-pointer",
                        on: {
                          click: function($event) {
                            _vm.CartItem.Qty++
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass:
                            "bx bxs-up-arrow text-xs text-primary pointer-events-none"
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "flex justify-end w-1/2 relative px-2 py-2 "
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
                          attrs: { disabled: _vm.sending, type: "button" },
                          on: { click: _vm.AddToCart }
                        },
                        [
                          !_vm.sending
                            ? _c(
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
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "h-4 w-4 fill-current mr-2",
                                      attrs: { viewBox: "0 0 20 20" }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.sending
                            ? _c(
                                "svg",
                                {
                                  staticClass:
                                    "transition  ease-in-out  animate-spin h-5 w-auto mr-1",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "h-6 w-6 fill-current mr-2",
                                      attrs: { viewBox: "0 0 20 20" }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("span", { staticClass: "tracking-tighter" }, [
                            _vm._v("Add To Cart")
                          ])
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
              [_vm._v("\n                Description\n            ")]
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
              [_vm._v("\n                Additional Information\n            ")]
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
              [_vm._v("\n                Reviews\n            ")]
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
            [_vm._m(5)]
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
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _vm._m(9)
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
    return _c(
      "div",
      { staticClass: "flex items-center justify-between pb-4" },
      [
        _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
          _c("p", [_vm._v("Color")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3 sm:w-5/6 flex items-center" }, [
          _c("div", { staticClass: "bg-primary px-2 py-2 rounded-full mr-2" }),
          _vm._v(" "),
          _c("div", {
            staticClass: "bg-secondary-light px-2 py-2 rounded-full mr-2"
          }),
          _vm._v(" "),
          _c("div", { staticClass: "bg-v-green px-2 py-2 rounded-full mr-2" }),
          _vm._v(" "),
          _c("div", { staticClass: "bg-v-blue px-2 py-2 rounded-full" })
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
      { staticClass: "flex items-center justify-between pb-4" },
      [
        _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
          _c("p", [_vm._v("Size")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3 sm:w-5/6" }, [
          _c("select", { staticClass: "w-2/3 form-select" }, [
            _c("option", { attrs: { value: "0" } }, [_vm._v("Small")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "1" } }, [_vm._v("Medium")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Large")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-5/6 mx-auto" }, [
      _c("div", { staticClass: "font-hkregular text-secondary text-base" }, [
        _vm._v(
          "\n                        On the main compartment has multiple pockets available for your tools, chargers,\n                        make up, keys, etc. "
        ),
        _c("br"),
        _c("br"),
        _vm._v(" Size::13.4”Lx 6.5”W x 15.4”H. "),
        _c("br"),
        _vm._v(" Weight:\n                        1.57pounds. "),
        _c("br"),
        _vm._v(" Color: light brown.\n\n                    ")
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
          _vm._v("\n                        Perfect for everyday use")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
          },
          [
            _vm._v(
              "\n                        I loooveeeee this product!!! It feels so soft and smells like real leather!!! I\n                        ordered this fancy backpack looking for something that can be used at work and, at\n                        the same time, after work; and I found it. Honestly.. Amazing!!"
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
              [_vm._v("\n                            6 days ago")]
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
          _vm._v("\n                        Gift for my girlfriend")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
          },
          [
            _vm._v(
              "\n                        I paid this thing thinking about my girlfriend’s birthday present, however I had my\n                        doubts cuz’ she is kind of picky. But Seriously, from now on, Elyssi is my best\n                        friend! She loved it!! She’s crazy about it! DISCLAIMER: It is smaller than it\n                        appears. "
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
              [_vm._v("\n                            4 days ago")]
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
              [_vm._v("Email\n                                address")]
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
              [_vm._v("Review\n                                Title")]
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