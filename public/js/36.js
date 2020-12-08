(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

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
      var img = this.Product.mainphoto_url;
      return img;
    },
    RegularPrice: function RegularPrice() {
      return this.Product.regular_price;
    },
    SalePrice: function SalePrice() {
      return this.Product.sale_price;
    },
    CurrentPrice: function CurrentPrice() {
      return this.Product.sale_price > 0 ? this.Product.sale_price : this.Product.regular_price;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ShopProduct: _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"](".posts-slider", {
      type: "carousel",
      startAt: 1,
      perView: 3,
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
    "inertia-link",
    {
      staticClass: "z-30",
      attrs: { href: _vm.route("shop.show", _vm.Product.slug) }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "product-gird transition duration-500 ease-in-out transform motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 shadow-sm hover:shadow-md"
        },
        [
          _c(
            "div",
            { staticClass: " rounded flex justify-center items-center p-2" },
            [
              _c("div", {
                staticClass:
                  "w-full h-68 bg-center bg-no-repeat bg-cover shadow-md hover:shadow-lg",
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
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "p-2 relative h-28 " }, [
            _c(
              "div",
              { staticClass: "flex items-center content-center py-2" },
              [
                _c(
                  "h3",
                  {
                    staticClass:
                      "font-semibold text-xs text-gray-400 capitalize",
                    attrs: { title: _vm.ProductName }
                  },
                  [_vm._v(_vm._s(_vm.ProductName.substring(0, 65) + "..."))]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex  absolute bottom-7" }, [
              _c("p", { staticClass: "font-semibold text-red-400 text-sm" }, [
                _vm._v(
                  _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                    _vm._s(_vm.CurrentPrice) +
                    " "
                )
              ]),
              _vm._v(" "),
              _vm.SalePrice > 0
                ? _c(
                    "p",
                    {
                      staticClass:
                        "font-semibold line-through text-gray-400 text-xs ml-3"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$page.SiteOptions.Currency.Symbol) +
                          _vm._s(_vm.RegularPrice) +
                          " "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex absolute bottom-2" }, [
              _c("div", { staticClass: "flex items-center text-xs" }, [
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" }),
                _vm._v(" "),
                _c("i", { staticClass: "bx bxs-star text-yellow-300" })
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "font-hkregular text-sm text-secondary  ml-2" },
                [_vm._v("(45)")]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "posts-slider relative" }, [
      _c(
        "div",
        { staticClass: "glide__track", attrs: { "data-glide-el": "track" } },
        [
          _c("div", { staticClass: "glide__slides" }, [
            _c("div", { staticClass: "px-2 xl:px-4 glide__slide" }, [
              _c(
                "div",
                {
                  staticClass:
                    "rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"
                },
                [
                  _c("div", {
                    staticClass: "bg-no-repeat bg-cover bg-center w-full h-52",
                    staticStyle: {
                      "background-image": "url(./img/post-01.jpg)"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center font-hkregular text-sm md:text-base text-secondary"
                      },
                      [
                        _c("span", [
                          _vm._v("By "),
                          _c("span", { staticClass: "font-hkbold" }, [
                            _vm._v("Abdullah")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("02 May 2019")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8"
                      },
                      [
                        _vm._v(
                          "\r\n                            Increasing Prosperity With Positive Thinking\r\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "flex items-center group",
                        attrs: { href: "/post" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"
                          },
                          [
                            _vm._v(
                              "\r\n                                Read more\r\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "px-2 xl:px-4 glide__slide" }, [
              _c(
                "div",
                {
                  staticClass:
                    "rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"
                },
                [
                  _c("div", {
                    staticClass: "bg-no-repeat bg-cover bg-center w-full h-52",
                    staticStyle: {
                      "background-image": "url(./img/post-02.jpg)"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center font-hkregular text-sm md:text-base text-secondary"
                      },
                      [
                        _c("span", [
                          _vm._v("By "),
                          _c("span", { staticClass: "font-hkbold" }, [
                            _vm._v("Abdullah")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("03 May 2019")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8"
                      },
                      [
                        _vm._v(
                          "\r\n                            Increasing Prosperity With Positive Thinking\r\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "flex items-center group",
                        attrs: { href: "/post" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"
                          },
                          [
                            _vm._v(
                              "\r\n                                Read more\r\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "px-2 xl:px-4 glide__slide" }, [
              _c(
                "div",
                {
                  staticClass:
                    "rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"
                },
                [
                  _c("div", {
                    staticClass: "bg-no-repeat bg-cover bg-center w-full h-52",
                    staticStyle: {
                      "background-image": "url(./img/post-03.jpg)"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "pt-6 pb-5 md:pb-8 px-8" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center font-hkregular text-sm md:text-base text-secondary"
                      },
                      [
                        _c("span", [
                          _vm._v("By "),
                          _c("span", { staticClass: "font-hkbold" }, [
                            _vm._v("Abdullah")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "px-3" }, [_vm._v("|")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("04 May 2019")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8"
                      },
                      [
                        _vm._v(
                          "\r\n                            Increasing Prosperity With Positive Thinking\r\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "flex items-center group",
                        attrs: { href: "/post" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center"
                          },
                          [
                            _c("i", {
                              staticClass:
                                "bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"
                          },
                          [
                            _vm._v(
                              "\r\n                                Read more\r\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
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
              "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-ml-5 lg:-ml-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",
            attrs: { "data-glide-dir": "<" }
          },
          [
            _c("i", {
              staticClass:
                "bx bx-chevron-left text-primary transition-colors group-hover:text-white md:text-2xl p-4"
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-mr-5 lg:-mr-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",
            attrs: { "data-glide-dir": ">" }
          },
          [
            _c("i", {
              staticClass:
                "bx bx-chevron-right text-primary transition-colors group-hover:text-white md:text-2xl p-4"
            })
          ]
        )
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

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&");
/* harmony import */ var _BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPostsSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostsSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostsSlider.vue?vue&type=template&id=fbda8a1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/BlogPostsSlider.vue?vue&type=template&id=fbda8a1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostsSlider_vue_vue_type_template_id_fbda8a1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);