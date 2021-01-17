(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeTab: "description"
    };
  },
  computed: {
    ProductDescription: function ProductDescription() {
      return this.$page.Product.description;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=template&id=0d11cd44&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=template&id=0d11cd44& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            [_vm._v("\n      Description\n    ")]
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
            [_vm._v("\n      Additional Information\n    ")]
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
            [_vm._v("\n      Reviews\n    ")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content relative" }, [
        _c(
          "div",
          {
            staticClass:
              "tab-pane bg-grey-light py-10 md:py-16 transition-opacity",
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
              "tab-pane bg-grey-light py-10 md:py-16 transition-opacity",
            class: { active: _vm.activeTab === "additional-information" },
            attrs: { role: "tabpanel" }
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "tab-pane bg-grey-light py-10 md:py-16 transition-opacity",
            class: { active: _vm.activeTab === "reviews" },
            attrs: { role: "tabpanel" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4)
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-5/6 mx-auto" }, [
      _c("div", { staticClass: "font-hkregular text-secondary text-base" }, [
        _vm._v(
          "\n          On the main compartment has multiple pockets available for your\n          tools, chargers, make up, keys, etc. "
        ),
        _c("br"),
        _c("br"),
        _vm._v("\n          Size::13.4”Lx 6.5”W x 15.4”H. "),
        _c("br"),
        _vm._v("\n          Weight: 1.57pounds. "),
        _c("br"),
        _vm._v("\n          Color: light brown.\n        ")
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
          _vm._v("\n          Perfect for everyday use\n        ")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
          },
          [
            _vm._v(
              "\n          I loooveeeee this product!!! It feels so soft and smells like real\n          leather!!! I ordered this fancy backpack looking for something that\n          can be used at work and, at the same time, after work; and I found\n          it. Honestly.. Amazing!!\n        "
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
              [
                _c("span", [_vm._v("By")]),
                _vm._v(" Melanie Ashwood\n          ")
              ]
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
              [_vm._v("6 days ago")]
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
          _vm._v("\n          Gift for my girlfriend\n        ")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
          },
          [
            _vm._v(
              "\n          I paid this thing thinking about my girlfriend’s birthday present,\n          however I had my doubts cuz’ she is kind of picky. But Seriously,\n          from now on, Elyssi is my best friend! She loved it!! She’s crazy\n          about it! DISCLAIMER: It is smaller than it appears.\n        "
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
              [_c("span", [_vm._v("By")]), _vm._v(" Jake Houston\n          ")]
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
              [_vm._v("4 days ago")]
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
              [_vm._v("Email address")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input",
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
              [_vm._v("Review Title")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-input",
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

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetails_vue_vue_type_template_id_0d11cd44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=template&id=0d11cd44& */ "./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=template&id=0d11cd44&");
/* harmony import */ var _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetails_vue_vue_type_template_id_0d11cd44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetails_vue_vue_type_template_id_0d11cd44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=template&id=0d11cd44&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=template&id=0d11cd44& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_0d11cd44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=template&id=0d11cd44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=template&id=0d11cd44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_0d11cd44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_0d11cd44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);