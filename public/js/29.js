(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['Product'],
  data: function data() {
    return {
      Label: {
        Color: null,
        Title: null,
        Active: false
      }
    };
  },
  methods: {
    AddToCart: function AddToCart(Item) {
      this.$root.$emit('Add-To-Cart', {
        "id": Item.id ? Item.id : '',
        "name": Item.name ? Item.name : '',
        "slug": Item.slug ? Item.slug : '',
        "Instock": Item.quantity ? Item.quantity : '',
        "Qty": 1,
        "price": Item.sale_price ? Item.sale_price : Item.regular_price,
        "image": this.Product.image ? Item.image : './img/shoes-4.png'
      });
    },
    SetLable: function SetLable() {
      if (this.Product.sale_price > 0) {
        var RegualPrice = this.Product.regular_price;
        var SalePrice = this.Product.sale_price;
        var Discount = Math.round((RegualPrice - SalePrice) / RegualPrice * 100) + '%';
        this.Label = {
          Color: 'text-primary-light',
          Title: Discount,
          Active: true
        };
      } else if (this.Product.is_featured) {
        this.Label = {
          Color: 'text-v-blue',
          Title: 'Trend',
          Active: true
        };
      } else {
        this.Label = {
          Color: 'text-v-green',
          Title: 'new',
          Active: true
        };
      }
    }
  },
  computed: {
    ProductImage: function ProductImage() {
      var img = this.Product.image ? this.Product.image.replace("public", "storage") : './img/shoes-4.png';
      return img;
    },
    RegularPrice: function RegularPrice() {
      return this.Product.regular_price;
    },
    SalePrice: function SalePrice() {
      return this.Product.sale_price;
    },
    CurrentPrice: function CurrentPrice() {
      return this.Product.sale_price ? this.Product.sale_price : this.Product.regular_price;
    },
    ProductName: function ProductName() {
      return this.Product.name;
    }
  },
  mounted: function mounted() {
    this.SetLable();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ShopProduct: _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.related-product-slider', {
      type: "carousel",
      startAt: 1,
      perView: 4,
      gap: 0,
      peek: {
        before: 50,
        after: 50
      },
      breakpoints: {
        1024: {
          perView: 3,
          peek: {
            before: 20,
            after: 20
          }
        },
        768: {
          perView: 2,
          peek: {
            before: 10,
            after: 10
          }
        },
        600: {
          perView: 1,
          peek: {
            before: 0,
            after: 0
          }
        }
      }
    }).mount();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "product-gird" },
    [
      _c(
        "div",
        { staticClass: "relative rounded flex justify-center items-center" },
        [
          _c("div", {
            staticClass: "w-full h-68 bg-center bg-no-repeat bg-cover",
            style: "background-image:url('" + _vm.ProductImage + "')"
          }),
          _vm._v(" "),
          _vm.Label.Active
            ? _c(
                "div",
                {
                  staticClass:
                    "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                },
                [
                  _c(
                    "p",
                    {
                      staticClass:
                        "font-hkbold text-sm uppercase tracking-wide",
                      class: _vm.Label.Color
                    },
                    [_vm._v(" " + _vm._s(_vm.Label.Title))]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group"
            },
            [
              _c(
                "a",
                {
                  staticClass:
                    "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3",
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      return _vm.AddToCart(_vm.Product)
                    }
                  }
                },
                [
                  _c("span", {
                    staticClass:
                      "bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"
                  })
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "inertia-link",
        { attrs: { href: _vm.route("shop.product", _vm.Product.slug) } },
        [
          _c("div", { staticClass: "flex justify-between items-center pt-6" }, [
            _c("div", [
              _c(
                "h3",
                {
                  staticClass: "font-hkregular text-base text-secondary",
                  attrs: { title: _vm.ProductName }
                },
                [_vm._v(_vm._s(_vm.ProductName.substring(0, 15) + "..."))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center" }, [
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
                  "p",
                  { staticClass: "font-hkregular text-sm text-secondary ml-2" },
                  [_vm._v("\r\n                        (45)")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "font-hkbold text-primary text-md" }, [
              _vm._v(
                "\r\n                " +
                  _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                  " " +
                  _vm._s(_vm.CurrentPrice) +
                  " \r\n            "
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ",
        attrs: { href: "javascript:;" }
      },
      [
        _c("span", {
          staticClass: "bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "pb-20 md:pb-32" }, [
      _c("div", { staticClass: "text-center" }, [
        _c(
          "h2",
          {
            staticClass:
              "font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"
          },
          [_vm._v("\n              Related Product")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "font-hkregular text-secondary-lighter text-lg md:text-xl pt-2 pb-6 sm:pb-8 lg:pb-0"
          },
          [_vm._v("\n              Get the latest news & updates from Ciloe")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "related-product-slider relative" }, [
        _c(
          "div",
          { staticClass: "glide__track", attrs: { "data-glide-el": "track" } },
          [
            _c("div", { staticClass: "pt-12 relative glide__slides" }, [
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/backpack-2.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-v-green font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      New\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Woodie Blake"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$115.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/purse-1.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-v-blue font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      trend\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Beautiful Brown"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$55.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/sunglass-3.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-primary-light font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      20%\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Coffee Cream"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$65.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/watch-1.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-v-red font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      Hot\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Submarine Watch"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$120.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/backpack-2.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-v-green font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      New\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Woodie Blake"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$115.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/shoes-1.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-v-blue font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      trend\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Cocktail Vans"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$33.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/shoes-4.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-primary-light font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      20%\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Siberian Boots"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$67.0")]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "relative group glide__slide" }, [
                _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative rounded flex justify-center items-center"
                    },
                    [
                      _c("div", {
                        staticClass:
                          "w-68 h-68 bg-center bg-no-repeat bg-cover",
                        staticStyle: {
                          "background-image": "url(./../../img/watch-3.png)"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-v-red font-hkbold text-sm uppercase tracking-wide"
                            },
                            [
                              _vm._v(
                                "\n                                      Hot\n                                  "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/cart" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                  alt: "icon cart"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                              attrs: { href: "/product" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                  alt: "icon search"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                              attrs: { href: "/account/wishlist/" }
                            },
                            [
                              _c("img", {
                                staticClass: "h-6 w-6",
                                attrs: {
                                  src:
                                    "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                  alt: "icon heart"
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
                    "a",
                    {
                      staticClass: "flex justify-between items-center pt-6",
                      attrs: { href: "/product" }
                    },
                    [
                      _c("div", [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "font-hkregular text-base text-secondary"
                          },
                          [
                            _vm._v(
                              "\n                                      Silver One"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "bx bxs-star text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bx bxs-star text-primary" })
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-hkregular text-sm text-secondary ml-2"
                              },
                              [
                                _vm._v(
                                  "\n                                              45\n                                          "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "font-hkbold text-primary text-xl" },
                          [_vm._v("$137.0")]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { attrs: { "data-glide-el": "controls" } }, [
          _c(
            "div",
            {
              staticClass:
                "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
              attrs: { "data-glide-dir": "<" }
            },
            [
              _c("i", {
                staticClass:
                  "bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
              attrs: { "data-glide-dir": ">" }
            },
            [
              _c("i", {
                staticClass:
                  "bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
              })
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Product/Product.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=0ee436e0& */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=0ee436e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Product/Product.vue?vue&type=template&id=0ee436e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0ee436e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelatedProductsSlider.vue?vue&type=template&id=6aef0811& */ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&");
/* harmony import */ var _RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedProductsSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProductsSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProductsSlider.vue?vue&type=template&id=6aef0811& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue?vue&type=template&id=6aef0811&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProductsSlider_vue_vue_type_template_id_6aef0811___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);