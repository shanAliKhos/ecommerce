(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _components_ProductAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProductAttributes */ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/Product */ "./resources/js/Pages/Ecomerce/shop-details/product/Product.vue");
/* harmony import */ var _shared_Slider_RelatedProductsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/Slider/RelatedProductsSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/RelatedProductsSlider.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Product'
  },
  components: {
    ShopProductDetail: _product_Product__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductAttributes: _components_ProductAttributes__WEBPACK_IMPORTED_MODULE_1__["default"],
    RelatedProductsSlider: _shared_Slider_RelatedProductsSlider__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    Product: function Product() {
      return this.$page.Product;
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=script&lang=js& ***!
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['Attributes'],
  data: function data() {
    return {
      SelectedAttribute: {}
    };
  },
  mounted: function mounted() {},
  methods: {
    SelectProduct: function SelectProduct(attrbute) {
      self = this;
      console.log(this.SelectedAttribute.length); // this.SelectedAttribute = this.Attributes.Color[0]?this.Attributes.Color[0]:this.Attributes.Size[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".seleced{\n  background-color:red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=template&id=4b1f5dda&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=template&id=4b1f5dda& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c("div", { staticClass: "flex relative" }, [
        _c("div", {
          staticClass:
            "bg-no-repeat bg-cover bg-center w-3/4 ml-auto h-56 sm:h-64 md:h-68",
          staticStyle: {
            "background-image": "url(./../../img/hero-image-04.jpg)"
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full h-56 sm:h-64 md:h-68 bg-no-repeat bg-cover absolute top-0 left-0",
            staticStyle: {
              "background-image":
                "linear-gradient(90deg, rgba(55,36,31,1) 40%, rgba(0,0,0,0) 100%)"
            }
          },
          [
            _c("div", { staticClass: "py-20 px-6 sm:px-12 lg:px-20" }, [
              _c(
                "h1",
                {
                  staticClass:
                    "font-butlerregular text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl"
                },
                [_vm._v(_vm._s(_vm.Product.name))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex pt-2" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "font-hkregular text-white text-base hover:text-primary transition-colors",
                      attrs: { href: _vm.route("welcome") }
                    },
                    [_vm._v("Home")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "font-hkregular text-white text-base px-2" },
                    [_vm._v(".")]
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "font-hkregular text-white text-base hover:text-primary transition-colors",
                      attrs: {
                        href: _vm.route("shop.index"),
                        "preserce-scroll": ""
                      }
                    },
                    [_vm._v("shop")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "font-hkregular text-white text-base px-2" },
                    [_vm._v(".")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "font-hkregular text-white text-base" },
                    [_vm._v(_vm._s(_vm.Product.name))]
                  )
                ],
                1
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("shop-product-detail", { attrs: { Product: _vm.Product } }),
      _vm._v(" "),
      _c("related-products-slider")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=template&id=1ed50ad4&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=template&id=1ed50ad4& ***!
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
  return _c(
    "div",
    { staticClass: "product-attributes mt-2" },
    _vm._l(_vm.Attributes, function(ProductAttribute, index) {
      return _c("div", { key: index, staticClass: "product-attribute mb-3" }, [
        _c("h5", [_vm._v(_vm._s(index))]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "btn-group btn-group-xs mt-1 ",
            attrs: { role: "group", "aria-label": "..." }
          },
          _vm._l(ProductAttribute, function(Attribute, Attributeindex) {
            return _c(
              "button",
              {
                key: Attributeindex,
                staticClass: "btn btn-outline-primary btn-sm ml-1",
                class: { seleced: _vm.SelectedAttribute.id === Attribute.id },
                on: {
                  click: function($event) {
                    return _vm.SelectProduct(Attribute)
                  }
                }
              },
              [
                index === "Size"
                  ? _c("span", [
                      _vm._v(
                        _vm._s(Attribute.AttributeValue.charAt(0).toUpperCase())
                      )
                    ])
                  : _c("span", [_vm._v(_vm._s(Attribute.AttributeValue) + " ")])
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("hr")
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopDetails_vue_vue_type_template_id_4b1f5dda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopDetails.vue?vue&type=template&id=4b1f5dda& */ "./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=template&id=4b1f5dda&");
/* harmony import */ var _ShopDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopDetails.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopDetails_vue_vue_type_template_id_4b1f5dda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopDetails_vue_vue_type_template_id_4b1f5dda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=template&id=4b1f5dda&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=template&id=4b1f5dda& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDetails_vue_vue_type_template_id_4b1f5dda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopDetails.vue?vue&type=template&id=4b1f5dda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/ShopDetails.vue?vue&type=template&id=4b1f5dda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDetails_vue_vue_type_template_id_4b1f5dda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopDetails_vue_vue_type_template_id_4b1f5dda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAttributes_vue_vue_type_template_id_1ed50ad4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAttributes.vue?vue&type=template&id=1ed50ad4& */ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=template&id=1ed50ad4&");
/* harmony import */ var _ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAttributes.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductAttributes_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css& */ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAttributes_vue_vue_type_template_id_1ed50ad4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductAttributes_vue_vue_type_template_id_1ed50ad4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=template&id=1ed50ad4&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=template&id=1ed50ad4& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_template_id_1ed50ad4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributes.vue?vue&type=template&id=1ed50ad4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shop-details/components/ProductAttributes.vue?vue&type=template&id=1ed50ad4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_template_id_1ed50ad4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributes_vue_vue_type_template_id_1ed50ad4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);