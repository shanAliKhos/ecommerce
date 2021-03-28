(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {// AddToCart(Item){   
    //     this.$root.$emit('Add-To-Cart',{
    //         "id":(Item.id)?Item.id:'',
    //         "name":(Item.name)?Item.name:'',
    //         "slug":(Item.slug)?Item.slug:'',
    //         "Instock":(Item.quantity)?Item.quantity:'',
    //         "Qty":1,
    //         "price":Item.current_price,
    //         "image":this.Product.image?Item.image:'./img/shoes-4.png',
    //     });      
    // },        
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
      return this.Product.current_price;
    },
    ProductName: function ProductName() {
      return this.Product.name;
    },
    Currency: function Currency() {
      return this.$page.SiteOptions.Currency.Symbol;
    }
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ShopProduct: _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"](".posts-slider", {
      type: "carousel",
      animationDuration: 1000,
      hoverpause: true,
      autoplay: 3000,
      startAt: 0,
      perView: 2,
      gap: 0,
      peek: {
        before: 150,
        after: 150
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
  },
  computed: {
    RelatedBlogs: function RelatedBlogs() {
      return this.$page.RelatedBlogs;
    }
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
  return _c("div", { staticClass: "p-1  " }, [
    _c(
      "div",
      {
        staticClass:
          "product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "focus:outline-none",
            attrs: { href: _vm.route("shop.show", _vm.Product.slug) }
          },
          [
            _vm.Product.label.active
              ? _c(
                  "div",
                  {
                    staticClass:
                      "absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30"
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-semibold text-sm uppercase tracking-wide",
                        class: _vm.Product.label.text_color
                      },
                      [_vm._v(" " + _vm._s(_vm.Product.label.title))]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex justify-center items-center w-auto h-56 mb-1 bg-gray-100"
              },
              [
                _c("img", {
                  staticClass:
                    "w-auto h-full bg-center bg-no-repeat bg-cover transition transform duration-500 ease-in-out hover:shadow-lg rounded",
                  attrs: { src: _vm.ProductImage }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-wrap items-center px-4 py-2" },
              [
                _c(
                  "p",
                  {
                    staticClass:
                      "font-mono font-semibold text-normal text-red-700 capitalize  overflow-ellipsis truncate overflow-hidden",
                    attrs: { title: _vm.ProductName }
                  },
                  [_vm._v(_vm._s(_vm.ProductName))]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center  px-2" }, [
              _c(
                "div",
                { staticClass: "flex  items-center group text-text-sm" },
                _vm._l(5, function(n) {
                  return _c("i", {
                    key: n + 1,
                    staticClass: "bx text-yellow-300 border border-white",
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
            _c("div", { staticClass: "flex px-4" }, [
              _c(
                "p",
                { staticClass: "font-semibold text-red-500 text-normal" },
                [
                  _vm._v(
                    _vm._s(_vm.Currency) + " " + _vm._s(_vm.CurrentPrice) + " "
                  )
                ]
              ),
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
                        _vm._s(_vm.Currency) + _vm._s(_vm.RegularPrice) + " "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all",
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
      ],
      1
    )
  ])
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
  return _c("div", { staticClass: "posts-slider relative" }, [
    _c(
      "div",
      { staticClass: "glide__track", attrs: { "data-glide-el": "track" } },
      [
        _c(
          "div",
          { staticClass: "glide__slides" },
          _vm._l(_vm.RelatedBlogs, function(RelatedBlog, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "px-2 xl:px-4 glide__slide transition duration-500 ease-in-out transform  hover:-skew-y-6   origin-center "
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"
                  },
                  [
                    _c("div", {
                      staticClass:
                        "bg-no-repeat bg-cover bg-center w-full h-52",
                      style:
                        "background-image:url(" + RelatedBlog.photo_url + ")"
                    }),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass: "flex items-center group",
                        attrs: { href: _vm.route("blog.show", RelatedBlog.id) }
                      },
                      [
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
                                _c("span", { staticClass: "font-hkbold " }, [
                                  _vm._v(_vm._s(RelatedBlog.user.name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "px-3" }, [
                                _vm._v("|")
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(RelatedBlog.created_at))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "font-semibold text-gray-400 text-xl md:text-2xl pt-5 pb-8 truncate "
                            },
                            [_vm._v(_vm._s(RelatedBlog.title))]
                          ),
                          _vm._v(" "),
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
                                "font-semibold text-grey-darkest transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"
                            },
                            [_vm._v("Read more")]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { "data-glide-el": "controls" } }, [
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