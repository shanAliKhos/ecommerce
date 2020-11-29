(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        price: this.Product.sale_price ? this.Product.sale_price : this.Product.regular_price,
        image: this.Product.image ? this.Product.image : './img/shoes-4.png'
      },
      Label: {
        Color: null,
        Title: null,
        Active: false
      },
      activeTab: 'description',
      selectedImage: null
    };
  },
  watch: {
    CartItemQty: function CartItemQty(newQty, oldQty) {
      if (newQty > this.ProductQuantity || newQty < 1) {
        this.CartItem.Qty = oldQty;
      }
    }
  },
  methods: {
    AddToCart: function AddToCart() {
      this.$root.$emit('Add-To-Cart', this.CartItem);
    },
    SetLable: function SetLable() {
      if (this.Product.sale_price > 0) {
        var RegualPrice = this.Product.regular_price;
        var SalePrice = this.Product.sale_price;
        var Discount = Math.round((RegualPrice - SalePrice) / RegualPrice * 100) + '%OFF';
        this.Label = {
          Color: 'bg-primary',
          Title: Discount,
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
    ProductImages: function ProductImages() {
      self = this;
      var img = './../../' + self.Product.image.replace("public", "storage");
      return img;
    },
    CurrentPrice: function CurrentPrice() {
      return this.$page.Product.sale_price ? this.$page.Product.sale_price : this.$page.Product.regular_price;
    },
    RegularPrice: function RegularPrice() {
      return this.$page.Product.regular_price;
    },
    ProductQuantity: function ProductQuantity() {
      return this.Product.quantity;
    },
    ProductDescription: function ProductDescription() {
      return this.Product.description;
    },
    IsOnSale: function IsOnSale() {
      return this.$page.Product.sale_price > 0;
    },
    CartItemQty: function CartItemQty() {
      self = this;
      return self.CartItem.Qty;
    }
  },
  mounted: function mounted() {
    this.SetLable();
  } // data() {
  //     return {
  //         ProductImages:[],
  //         CartProduct:{
  //             id:(this.Product.id)?this.Product.id:null,
  //             name:(this.Product.name)?this.Product.name:'',
  //             slug:(this.Product.slug)?this.Product.slug:'',
  //             Instock:(this.Product.quantity)?this.Product.quantity:'',
  //             Qty:1,
  //             price:(this.Product.sale_price)?this.Product.sale_price:this.Product.regular_price,
  //             image:(this.Product.image)?this.Product.image:'',
  //         }, 
  //     }
  // },
  // methods: {
  //     AddToCart(Item){ 
  //         this.$root.$emit('Add-To-Cart',Item);      
  //     },
  // },
  // watch: { 
  //     CartQty: function (newQty, oldQty) {  
  //         if(newQty > this.ProductQuantity || newQty < 1 ){
  //             this.CartProduct.Qty =  oldQty
  //         }
  //     }
  // },
  // computed: {
  // ProductMainImage(){
  //     self = this ;
  //     var  img = (this.Product.image)?'/'+this.Product.image.replace("public", "storage"):'/'+self.Product.image;
  //     return img;
  // },
  // ProductAttributes(){
  //     self = this ;  
  //     return self.Product.Attributes;
  // },
  // ProductPrice(){
  //     self = this ;
  //     return (self.Product.sale_price)?self.Product.sale_price:self.Product.regular_price;
  // },
  // CartQty(){
  //     self = this;
  //     return self.CartProduct.Qty;
  // },
  // },

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
                              "url(./../../img/backpack-1.png)"
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
                              "url(./../../img/backpack-2.png)"
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
                              "url(./../../img/backpack-3.png)"
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
                              "url(./../../img/backpack-4.png)"
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
        _c("div", { staticClass: "lg:w-1/2 pt-12 sm:pt-16 lg:pt-0 px-5" }, [
          _c("div", { staticClass: "product-title" }, [
            _c("div", { staticClass: "border-b border-grey-dark mb-8" }, [
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "h2",
                  {
                    staticClass:
                      "font-butlerregular text-3xl md:text-4xl lg:text-7xl"
                  },
                  [_vm._v(_vm._s(_vm.Product.name))]
                ),
                _vm._v(" "),
                _vm.Label.Active
                  ? _c(
                      "small",
                      {
                        staticClass:
                          "rounded-full font-hkbold text-white uppercase text-sm text-center px-4 py-2 m-2",
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
              _c("div", { staticClass: "flex items-center pt-3" }, [
                _c(
                  "span",
                  { staticClass: "font-hkregular text-secondary text-2xl" },
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
                          "font-hkregular text-grey-darker text-xl line-through pl-5"
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
              _vm._m(0)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-availablity" }, [
            _c("div", { staticClass: "flex pb-5" }, [
              _c("p", { staticClass: "font-hkregular text-secondary" }, [
                _vm._v("Availability:")
              ]),
              _vm._v(" "),
              _vm.ProductQuantity > 0
                ? _c("p", { staticClass: "font-hkbold text-v-green pl-3" }, [
                    _vm._v("In Stock " + _vm._s(_vm.ProductQuantity))
                  ])
                : _c("p", { staticClass: "font-hkbold text-v-red pl-3" }, [
                    _vm._v("Out of Stock " + _vm._s(_vm.ProductQuantity))
                  ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-center justify-between pb-8" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "w-2/3 sm:w-5/6 flex",
                attrs: { "x-data": "{ productQuantity: 1 }" }
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "block relative h-0 w-0 overflow-hidden",
                    attrs: { for: "quantity-form" }
                  },
                  [_vm._v("Quantity\n                        form")]
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
                    "form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center",
                  attrs: { type: "number", id: "quantity-form", min: "1" },
                  domProps: { value: _vm.CartItem.Qty },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.CartItem, "Qty", _vm._n($event.target.value))
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-col" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer",
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
                      _c("i", {
                        staticClass:
                          "bx bxs-down-arrow text-xs text-primary pointer-events-none"
                      })
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex pb-8 group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-outline mr-4 md:mr-6",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.AddToCart()
                  }
                }
              },
              [_vm._v("\n                    Add to cart\n                ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "btn btn-primary", attrs: { href: "/cart" } },
              [_vm._v("\n                    BUY NOW\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-short-description" }, [
            _c("p", { staticClass: "font-hkregular text-secondary pb-5" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.ProductDescription.substring(0, 70) + "...") +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3)
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
            [_vm._m(4)]
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
    return _c("div", { staticClass: "flex items-center pt-3 pb-8" }, [
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
      _c(
        "span",
        { staticClass: "font-hkregular text-sm text-secondary ml-2" },
        [_vm._v("(45)")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/3 sm:w-1/5" }, [
      _c("p", { staticClass: "font-hkregular text-secondary" }, [
        _vm._v("Quantity")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex pb-2" }, [
      _c("p", { staticClass: "font-hkregular text-secondary" }, [
        _vm._v("SKU:")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "font-hkbold text-secondary pl-3" }, [
        _vm._v("\n                    KH12345")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "font-hkregular text-secondary" }, [
      _c("span", { staticClass: "pr-2" }, [_vm._v("Categories:")]),
      _vm._v("Bag, Hand bag, Travel bag, Black\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-5/6 mx-auto text-center sm:text-left" },
      [
        _c("div", { staticClass: "font-hkregular text-secondary text-base" }, [
          _vm._v(
            "\n                        Versatile, comfortable, and chic! Three words that describe Blake by Elyssi. This\n                        backpack purse is A durable leather backpack with two large compartments and 2\n                        smaller compartments on the front and back of it so you can carry all your\n                        belongings.\n\n                    "
          )
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
          [_vm._v("Review\n                            Message")]
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
          _vm._v(
            "\n                        Submit Review\n                    "
          )
        ])
      ]
    )
  }
]
render._withStripped = true



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