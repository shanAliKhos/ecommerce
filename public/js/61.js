(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PaginationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PaginationLink */ "./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['Pagination'],
  components: {
    PaginationLink: _components_PaginationLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    Links: function Links() {
      return this.Pagination.links;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['Link'],
  computed: {
    Next: function Next() {
      return this.Link.label == "Next &raquo;" ? 'font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer' : '';
    },
    Previous: function Previous() {
      return this.Link.label == "&laquo; Previous" ? 'font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer' : '';
    }
  }
});

/***/ }),

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
    SetLable: function SetLable() {
      var lable;

      if (this.Product.sale_price > 0) {
        lable = {
          Color: 'text-orange-500',
          Title: '-' + Math.round((this.Product.regular_price - this.Product.sale_price) / this.Product.regular_price * 100) + '%',
          Active: true
        };
      } else if (this.Product.is_featured) {
        lable = {
          Color: 'text-blue-500',
          Title: 'Trend',
          Active: true
        };
      } else {
        lable = {
          Color: 'text-green-500',
          Title: 'new',
          Active: true
        };
      }

      return lable;
    },
    Currency: function Currency() {
      return this.$page.SiteOptions.Currency.Symbol;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _shared_Partials_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Partials/Pagination */ "./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue");
/* harmony import */ var _shared_Product_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Shop'
  },
  components: {
    ShopProduct: _shared_Product_Product__WEBPACK_IMPORTED_MODULE_2__["default"],
    Pagination: _shared_Partials_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sortBy: 'current_price',
      sortDirection: 'asc'
    };
  },
  methods: {
    sort: function sort(s) {
      if (s === this.sortBy) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      }

      this.sortBy = s;
    }
  },
  computed: {
    Products: function Products() {
      var _this = this;

      // return this.$page.Products.data;
      return this.$page.Products.data.sort(function (p1, p2) {
        var modifier = 1;
        if (_this.sortDirection === 'desc') modifier = -1;
        if (p1[_this.sortBy] < p2[_this.sortBy]) return -1 * modifier;
        if (p1[_this.sortBy] > p2[_this.sortBy]) return 1 * modifier;
        return 0;
      });
    },
    Pagination: function Pagination() {
      return {
        first_page_url: this.$page.Products.first_page_url,
        prev_page_url: this.$page.Products.prev_page_url,
        links: this.$page.Products.links,
        next_page_url: this.$page.Products.next_page_url,
        last_page_url: this.$page.Products.last_page_url
      };
    },
    CountTotalProducts: function CountTotalProducts() {
      return this.$page.Products.data.length;
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=template&id=1101b338&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=template&id=1101b338& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm.Links.length
    ? _c(
        "div",
        { staticClass: "pb-16 flex justify-center mx-auto" },
        [
          _vm.Pagination.prev_page_url
            ? _c(
                "span",
                {
                  staticClass:
                    "font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer"
                },
                [_vm._v("Previous")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.Links, function(Link, Linkindex) {
            return _c("pagination-link", {
              key: Linkindex,
              attrs: { Link: Link }
            })
          }),
          _vm._v(" "),
          _vm.Pagination.next_page_url
            ? _c(
                "span",
                {
                  staticClass:
                    "font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer"
                },
                [_vm._v("Next")]
              )
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=template&id=4cda6742&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=template&id=4cda6742& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.Link.url
    ? _c(
        "inertia-link",
        _vm._b(
          {
            staticClass:
              "font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer",
            class: { "bg-primary": _vm.Link.active },
            attrs: { href: _vm.Link.url }
          },
          "inertia-link",
          _vm.$attrs,
          false
        ),
        [_vm._v("\n    " + _vm._s(_vm.Link.label) + "\n")]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



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
  return _c("div", { staticClass: "p-2" }, [
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
            _vm.SetLable.Active
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
                        class: _vm.SetLable.Color
                      },
                      [_vm._v(" " + _vm._s(_vm.SetLable.Title))]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-center items-center h-64 pb-4 p-2" },
              [
                _c("img", {
                  staticClass:
                    "w-auto h-56 bg-center bg-no-repeat bg-cover transition transform hover:scale-105  duration-500 ease-in-out hover:shadow-lg rounded-lg",
                  attrs: { src: _vm.ProductImage }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center px-4 py-1" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-semibold text-xs text-gray-400 capitalize  overflow-ellipsis truncate overflow-hidden",
                  attrs: { title: _vm.ProductName }
                },
                [_vm._v(_vm._s(_vm.ProductName))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex px-4 py-1" }, [
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
            _c("div", { staticClass: "flex px-4" }, [
              _c("div", { staticClass: "flex items-center  " }, [
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
                { staticClass: "font-regular text-sm text-gray-500  ml-2" },
                [_vm._v("(45)")]
              )
            ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=template&id=19d9dcf8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=template&id=19d9dcf8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "shop-section" },
    [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "py-10 flex flex-col sm:flex-row justify-between" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex items-center justify-center sm:justify-end mt-6 sm:mt-0 w-76"
              },
              [
                _c(
                  "p",
                  {
                    staticClass:
                      "font-hkregular text-secondary md:text-lg mr-2 -mt-2"
                  },
                  [_vm._v("Sort by:\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.sortDirection,
                        expression: "sortDirection"
                      }
                    ],
                    staticClass: "w-2/3 form-select",
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
                        _vm.sortDirection = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "desc" } }, [
                      _vm._v("Price: Low - High")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "asc" } }, [
                      _vm._v("Price: High - Low")
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
          { staticClass: "flex flex-wrap justify-between pb-5 -mx-3" },
          _vm._l(_vm.Products, function(Product, index) {
            return _c("shop-product", {
              key: index,
              staticClass: "w-1/2 md:w-1/5 relative mt-2 mb-5 z-30",
              attrs: { Product: Product }
            })
          }),
          1
        )
      ]),
      _vm._v(" "),
      _c("pagination", { attrs: { Pagination: _vm.Pagination } })
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
      "div",
      { staticClass: "flex items-center justify-center sm:justify-start" },
      [
        _c("i", { staticClass: "bx bxs-filter-alt text-primary text-xl" }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "font-hkregular text-secondary md:text-lg px-2 leading-none block"
          },
          [_vm._v("\n                    Filter ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex items-center border border-grey-darker p-2 rounded"
          },
          [
            _c("a", { attrs: { href: "/collection-list" } }, [
              _c("i", {
                staticClass:
                  "bx bx-menu text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-px h-4 mx-2 bg-grey-darker" }),
            _vm._v(" "),
            _c("a", { attrs: { href: "/collection-grid" } }, [
              _c("i", {
                staticClass:
                  "bx bxs-grid text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"
              })
            ])
          ]
        )
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

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_1101b338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=1101b338& */ "./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=template&id=1101b338&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_1101b338___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_1101b338___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=template&id=1101b338&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=template&id=1101b338& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_1101b338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=1101b338& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/Pagination.vue?vue&type=template&id=1101b338&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_1101b338___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_1101b338___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationLink_vue_vue_type_template_id_4cda6742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationLink.vue?vue&type=template&id=4cda6742& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=template&id=4cda6742&");
/* harmony import */ var _PaginationLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationLink.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationLink_vue_vue_type_template_id_4cda6742___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationLink_vue_vue_type_template_id_4cda6742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=template&id=4cda6742&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=template&id=4cda6742& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationLink_vue_vue_type_template_id_4cda6742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationLink.vue?vue&type=template&id=4cda6742& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Partials/components/PaginationLink.vue?vue&type=template&id=4cda6742&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationLink_vue_vue_type_template_id_4cda6742___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationLink_vue_vue_type_template_id_4cda6742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/Pages/Ecomerce/shop/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_19d9dcf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=19d9dcf8& */ "./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=template&id=19d9dcf8&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_19d9dcf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_19d9dcf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=template&id=19d9dcf8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=template&id=19d9dcf8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19d9dcf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=19d9dcf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/Index.vue?vue&type=template&id=19d9dcf8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19d9dcf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19d9dcf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);