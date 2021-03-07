(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop/components/ProductDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_Shared_Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Pages/Shared/Tab */ "./resources/js/Pages/Shared/Tab.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Tabs: function Tabs() {
      return __webpack_require__.e(/*! import() */ 201).then(__webpack_require__.bind(null, /*! @/Pages/Shared/Tabs */ "./resources/js/Pages/Shared/Tabs.vue"));
    },
    Tab: _Pages_Shared_Tab__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      activeTab: "description",
      form: {
        message: ''
      }
    };
  },
  methods: {
    postComment: function postComment() {
      var _this = this;

      var self = this;
      var formData = new FormData();
      formData.append('message', self.form.message || '');
      self.$inertia.post(route('product.comment.post', self.$page.Product.id), formData, {
        preserveState: true,
        onStart: function onStart() {
          return _this.sending = true;
        },
        onFinish: function onFinish() {
          return _this.sending = false;
        },
        onSuccess: function onSuccess() {
          if (Object.keys(_this.$page.errors).length === 0) {
            _this.form.message = null;
          }
        }
      });
    }
  },
  computed: {
    ProductDescription: function ProductDescription() {
      return this.$page.Product.description;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Tab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Tab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: {
      required: true
    },
    selected: {
      "default": false
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  computed: {
    href: function href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  mounted: function mounted() {
    this.isActive = this.selected;
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
    "tabs",
    [
      _c("tab", { attrs: { name: "Description", selected: true } }, [
        _c("div", {
          staticClass: "font-hkregular text-secondary text-base",
          domProps: { innerHTML: _vm._s(_vm.ProductDescription) }
        })
      ]),
      _vm._v(" "),
      _c("tab", { attrs: { name: "Additional Information" } }, [
        _c("div", { staticClass: "w-5/6 mx-auto" }, [
          _c(
            "div",
            { staticClass: "font-hkregular text-secondary text-base" },
            [
              _vm._v(
                "\n        On the main compartment has multiple pockets available for your tools,\n        chargers, make up, keys, etc. "
              ),
              _c("br"),
              _c("br"),
              _vm._v("\n        Size::13.4”Lx 6.5”W x 15.4”H. "),
              _c("br"),
              _vm._v("\n        Weight: 1.57pounds. "),
              _c("br"),
              _vm._v("\n        Color: light brown.\n      ")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("tab", { attrs: { name: "Reviews" } }, [
        _c(
          "div",
          {
            staticClass:
              "tab-pane bg-grey-light py-10 md:py-16 transition-opacity",
            class: { active: _vm.activeTab === "reviews" },
            attrs: { role: "tabpanel" }
          },
          [
            _c(
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
                _c(
                  "p",
                  { staticClass: "font-hkbold text-secondary text-lg pt-3" },
                  [_vm._v("\n          Perfect for everyday use\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
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
                      {
                        staticClass: "font-hkregular text-grey-darkest text-sm"
                      },
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
                      {
                        staticClass: "font-hkregular text-grey-darkest text-sm"
                      },
                      [_vm._v("6 days ago")]
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
                _c(
                  "p",
                  { staticClass: "font-hkbold text-secondary text-lg pt-3" },
                  [_vm._v("\n          Gift for my girlfriend\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"
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
                      {
                        staticClass: "font-hkregular text-grey-darkest text-sm"
                      },
                      [
                        _c("span", [_vm._v("By")]),
                        _vm._v(" Jake Houston\n          ")
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
                      {
                        staticClass: "font-hkregular text-grey-darkest text-sm"
                      },
                      [_vm._v("4 days ago")]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("form", { staticClass: "w-5/6 mx-auto" }, [
              _c("div", { staticClass: "sm:w-12/25 pt-10" }, [
                _c(
                  "label",
                  {
                    staticClass:
                      "font-hkregular text-secondary text-sm block mb-2",
                    attrs: { for: "message" }
                  },
                  [_vm._v("ReviewMessage")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.message,
                      expression: "form.message"
                    }
                  ],
                  staticClass: "form-textarea",
                  attrs: {
                    placeholder: "Give your review tittle w-full",
                    id: "message"
                  },
                  domProps: { value: _vm.form.message },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "message", $event.target.value)
                    }
                  }
                }),
                _vm._v(
                  "\n          " +
                    _vm._s(this.$page.errors.message) +
                    "\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left"
              },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      " bg-orange-500 py-2 px-1  rounded border-orange-400 text-white",
                    attrs: { type: "button" },
                    on: { click: _vm.postComment }
                  },
                  [_vm._v("Submit Review")]
                )
              ]
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Tab.vue?vue&type=template&id=2c913fb4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Tab.vue?vue&type=template&id=2c913fb4& ***!
  \********************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isActive,
          expression: "isActive"
        }
      ]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
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



/***/ }),

/***/ "./resources/js/Pages/Shared/Tab.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Shared/Tab.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_2c913fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=2c913fb4& */ "./resources/js/Pages/Shared/Tab.vue?vue&type=template&id=2c913fb4&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_2c913fb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tab_vue_vue_type_template_id_2c913fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Tab.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Shared/Tab.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Tab.vue?vue&type=template&id=2c913fb4&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Tab.vue?vue&type=template&id=2c913fb4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_2c913fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=template&id=2c913fb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Tab.vue?vue&type=template&id=2c913fb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_2c913fb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_2c913fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);