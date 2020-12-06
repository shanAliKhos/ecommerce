(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Layouts/AppLayout */ "./resources/js/Pages/Admin/Layouts/AppLayout.vue");
/* harmony import */ var _ProductImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImages */ "./resources/js/Pages/Admin/products/ProductImages.vue");
/* harmony import */ var _EditForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditForm */ "./resources/js/Pages/Admin/products/EditForm.vue");
/* harmony import */ var _ProductAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductAttributes */ "./resources/js/Pages/Admin/products/ProductAttributes.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  metaInfo: {
    title: 'Product Edit'
  },
  layout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    ProductImages: _ProductImages__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditForm: _EditForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductAttributes: _ProductAttributes__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      Images: this.$page.Product.images
    };
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$on('image-upload-success', function () {
      axios.get(route('admin.product.images.index', self.Product.id)).then(function (response) {
        self.Images = response.data;
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$root.$off('image-upload-success');
  },
  computed: {
    Product: function Product() {
      return this.$page.Product;
    },
    ProductImages: function ProductImages() {
      return this.$page.Product.images;
    },
    Categories: function Categories() {
      return this.$page.Categories;
    },
    Brands: function Brands() {
      return this.$page.Brands;
    }
  }
}, "mounted", function mounted() {
  var self = this;
  self.$root.$emit('sidebar-close');
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['id', 'Images'],
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      dropzoneOptions: {
        url: route('admin.product.images.upload', this.id),
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "X-CSRF-TOKEN": this.$page.__csrf_token
        }
      },
      sending: false
    };
  },
  methods: {
    UploadSuccess: function UploadSuccess() {
      var self = this;
      self.$root.$emit('image-upload-success');
      setTimeout(function () {
        self.$root.$emit('image-upload-success');
      }, 500);
    },
    destroy: function destroy(id) {
      var self = this;
      self.$inertia["delete"](route('admin.product.images.destroy', id), {
        preserveState: true,
        preserveScroll: true
      });
      setTimeout(function () {
        self.$root.$emit('image-upload-success');
      }, 500);
    },
    ProductImage: function ProductImage(image) {
      self = this;
      var img = image ? '/' + image.replace("public", "storage") : '/' + image;
      return img;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Edit.vue?vue&type=template&id=75cca89c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/Edit.vue?vue&type=template&id=75cca89c& ***!
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
  return _c("div", [
    _c(
      "nav",
      {
        staticClass: "text-sm font-semibold mb-5",
        attrs: { "aria-label": "Breadcrumb" }
      },
      [
        _c("ol", { staticClass: "list-none p-0 inline-flex" }, [
          _c(
            "li",
            { staticClass: "flex items-center text-blue-500" },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "text-gray-700",
                  attrs: { href: _vm.route("admin.dashboard") }
                },
                [_vm._v("Home")]
              ),
              _vm._v(" "),
              _c(
                "svg",
                {
                  staticClass: "fill-current w-3 h-3 mx-3",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 320 512"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    }
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c(
          "inertia-link",
          {
            staticClass:
              "transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right",
            attrs: { href: _vm.route("admin.product.index") }
          },
          [
            _c(
              "svg",
              {
                staticClass: "fill-current w-4 h-4 mr-2",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    d:
                      "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
                    "clip-rule": "evenodd"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Back")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("p", { staticClass: "text-xl pb-6 flex items-center" }, [
      _vm._v("Create Product")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex justify-center" }, [
      _c("div", { staticClass: "w-full  pl-0 lg:pl-2" }, [
        _c(
          "div",
          { staticClass: "leading-loose" },
          [
            _c("edit-form", {
              attrs: {
                Product: _vm.Product,
                Categories: _vm.Categories,
                Brands: _vm.Brands
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "flex items-center" }, [
      _c("a", { staticClass: "text-gray-600", attrs: { href: "#" } }, [
        _vm._v("Create Product")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=template&id=2d53c0b6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=template&id=2d53c0b6& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-image-section" }, [
    _c("h3", { staticClass: "tile-title" }, [_vm._v("Upload Image")]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "tile-body" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _c(
              "vue-dropzone",
              {
                ref: "myVueDropzone",
                attrs: {
                  options: _vm.dropzoneOptions,
                  useCustomSlot: true,
                  id: "dropzone"
                },
                on: { "vdropzone-success": _vm.UploadSuccess }
              },
              [
                _c("div", { staticClass: "dropzone-custom-content" }, [
                  _c("h3", { staticClass: "dropzone-custom-title" }, [
                    _vm._v("Drag and drop to upload content!")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "subtitle" }, [
                    _vm._v("...or click to select a file from your computer")
                  ])
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.Images, function(Image, index) {
          return _c("div", { key: index, staticClass: "col-md-3" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: _vm.ProductImage(Image.image),
                    id: "brandLogo",
                    alt: "img"
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "card-link float-right text-danger",
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        return _vm.destroy(Image.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-fw fa-lg fa-trash" })]
                )
              ])
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/products/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Admin/products/Edit.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_75cca89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=75cca89c& */ "./resources/js/Pages/Admin/products/Edit.vue?vue&type=template&id=75cca89c&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/products/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_75cca89c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_75cca89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/products/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/products/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/products/Edit.vue?vue&type=template&id=75cca89c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/Edit.vue?vue&type=template&id=75cca89c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_75cca89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=75cca89c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Edit.vue?vue&type=template&id=75cca89c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_75cca89c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_75cca89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/products/ProductImages.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/ProductImages.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductImages_vue_vue_type_template_id_2d53c0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductImages.vue?vue&type=template&id=2d53c0b6& */ "./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=template&id=2d53c0b6&");
/* harmony import */ var _ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImages.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductImages_vue_vue_type_template_id_2d53c0b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductImages_vue_vue_type_template_id_2d53c0b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/products/ProductImages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=template&id=2d53c0b6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=template&id=2d53c0b6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_template_id_2d53c0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductImages.vue?vue&type=template&id=2d53c0b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/ProductImages.vue?vue&type=template&id=2d53c0b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_template_id_2d53c0b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductImages_vue_vue_type_template_id_2d53c0b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);