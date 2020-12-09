(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/EditForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/EditForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Shared/LoadingButton */ "./resources/js/Pages/Shared/LoadingButton.vue");
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Shared/FileInput */ "./resources/js/Pages/Shared/FileInput.vue");
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Shared/TextInput */ "./resources/js/Pages/Shared/TextInput.vue");
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Shared/SelectInput */ "./resources/js/Pages/Shared/SelectInput.vue");
/* harmony import */ var _Shared_SectionBorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Shared/SectionBorder */ "./resources/js/Pages/Shared/SectionBorder.vue");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['Product', 'Categories', 'Brands'],
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a,
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    FileInput: _Shared_FileInput__WEBPACK_IMPORTED_MODULE_2__["default"],
    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectInput: _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    SectionBorder: _Shared_SectionBorder__WEBPACK_IMPORTED_MODULE_5__["default"],
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_6__["VueEditor"]
  },
  remember: 'form',
  data: function data() {
    return _defineProperty({
      sending: false,
      form: {
        name: this.Product.name,
        sku: this.Product.sku,
        brand: this.Product.brand,
        categories: this.Product.categories,
        regular_price: this.Product.regular_price,
        sale_price: this.Product.sale_price,
        quantity: this.Product.quantity,
        weight: this.Product.weight,
        description: this.Product.description,
        is_active: this.Product.is_active ? 1 : 0,
        is_featured: this.Product.is_featured ? 1 : 0,
        image: this.Product.mainphoto_url,
        is_variable: this.Product.variations.length ? 1 : 0,
        attributes: this.Product.variations
      }
    }, "sending", false);
  },
  methods: {
    update: function update() {
      var _this = this;

      self = this;
      var formData = new FormData();
      formData.append("name", self.form.name || '');
      formData.append("sku", self.form.sku || '');
      formData.append("brand_id", self.form.brand ? self.form.brand.id :  false || '');
      formData.append("categories", JSON.stringify(self.form.categories) || '');
      formData.append("is_variable", self.form.is_variable || 0);
      formData.append("Attributes", JSON.stringify(self.form.attributes) || '');
      formData.append("regular_price", self.form.regular_price || 0);
      formData.append("sale_price", self.form.sale_price || 0);
      formData.append("quantity", self.form.quantity || 0);
      formData.append("weight", self.form.weight || 0);
      formData.append("description", self.form.description || '');
      formData.append("is_active", self.form.is_active || 0);
      formData.append("is_featured", self.form.is_featured || 0);
      formData.append("image", self.form.image || '');
      formData.append('_method', 'put');
      self.$inertia.post(route('admin.product.update', self.Product.id), formData, {
        preserveState: true,
        preserveScroll: true,
        onStart: function onStart() {
          return _this.sending = true;
        },
        onFinish: function onFinish() {
          return _this.sending = false;
        }
      });
    }
  },
  computed: {
    CategoriesOption: function CategoriesOption() {
      self = this;
      return self.Categories; // return self.Categories.filter((category,key) => {
      //     if(key > 0){
      //         return category;
      //     }
      // });             
    },
    Attributes: function Attributes() {
      return this.$page.attributes;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/EditForm.vue?vue&type=template&id=3e087580&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/EditForm.vue?vue&type=template&id=3e087580& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "p-10 bg-white rounded shadow-xl",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.update($event)
        }
      }
    },
    [
      _c("p", { staticClass: "text-lg text-gray-800 font-medium pb-4" }, [
        _vm._v("Product General information")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
        _c("div", { staticClass: "w-full md:w-1/2 px-3  md:mb-0" }, [
          _c(
            "div",
            { staticClass: "mt-2" },
            [
              _c("file-input", {
                staticClass:
                  "pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded",
                attrs: {
                  preview_img: _vm.form.image,
                  defualt_preview_img: _vm.form.name,
                  error: _vm.$page.errors.image,
                  type: "file",
                  accept: "image/*",
                  label: "Photo",
                  preview: true
                },
                model: {
                  value: _vm.form.image,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "image", $$v)
                  },
                  expression: "form.image"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-full md:w-1/2 px-3 md:mb-0" },
          [
            _c("text-input", {
              staticClass: "w-full ",
              attrs: {
                id: "name",
                type: "text",
                autocomplete: "name",
                error: _vm.$page.errors.name,
                label: "Name",
                labelRequire: true,
                placeholder: "Name",
                "aria-label": "Name"
              },
              model: {
                value: _vm.form.name,
                callback: function($$v) {
                  _vm.$set(_vm.form, "name", $$v)
                },
                expression: "form.name"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "w-full ",
              attrs: {
                id: "sku",
                type: "text",
                autocomplete: "sku",
                error: _vm.$page.errors.sku,
                label: "#SKU",
                labelRequire: true,
                placeholder: "SKU",
                "aria-label": "SKU"
              },
              model: {
                value: _vm.form.sku,
                callback: function($$v) {
                  _vm.$set(_vm.form, "sku", $$v)
                },
                expression: "form.sku"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "w-full ",
              attrs: {
                id: "quantity",
                type: "text",
                autocomplete: "quantity",
                error: _vm.$page.errors.quantity,
                label: "#Quantity",
                labelRequire: true,
                placeholder: "Quantity",
                "aria-label": "quantity"
              },
              model: {
                value: _vm.form.quantity,
                callback: function($$v) {
                  _vm.$set(_vm.form, "quantity", $$v)
                },
                expression: "form.quantity"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "w-full ",
              attrs: {
                id: "regular_price",
                type: "text",
                autocomplete: "regular_price",
                error: _vm.$page.errors.regular_price,
                label: "$ RegularPrice",
                labelRequire: true,
                placeholder: "RegularPrice",
                "aria-label": "regular_price"
              },
              model: {
                value: _vm.form.regular_price,
                callback: function($$v) {
                  _vm.$set(_vm.form, "regular_price", $$v)
                },
                expression: "form.regular_price"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "w-full ",
              attrs: {
                id: "sale_price",
                type: "text",
                autocomplete: "sale_price",
                error: _vm.$page.errors.sale_price,
                label: "$ SalePrice",
                placeholder: "SalePrice",
                "aria-label": "sale_price"
              },
              model: {
                value: _vm.form.sale_price,
                callback: function($$v) {
                  _vm.$set(_vm.form, "sale_price", $$v)
                },
                expression: "form.sale_price"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "w-full",
              attrs: {
                id: "weight",
                type: "text",
                autocomplete: "weight",
                error: _vm.$page.errors.weight,
                label: "Weight",
                placeholder: "Weight",
                "aria-label": "weight"
              },
              model: {
                value: _vm.form.weight,
                callback: function($$v) {
                  _vm.$set(_vm.form, "weight", $$v)
                },
                expression: "form.weight"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-2 mb-10 relative" },
        [
          _c(
            "label",
            {
              staticClass:
                "absolute top-0 right-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
              attrs: { for: "weight" }
            },
            [_vm._v("Description")]
          ),
          _vm._v(" "),
          _c("vue-editor", {
            model: {
              value: _vm.form.description,
              callback: function($$v) {
                _vm.$set(_vm.form, "description", $$v)
              },
              expression: "form.description"
            }
          }),
          _vm._v(" "),
          _vm.$page.errors.description
            ? _c(
                "p",
                {
                  staticClass:
                    "z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"
                },
                [_vm._v(_vm._s(_vm.$page.errors.description))]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
        _c(
          "div",
          { staticClass: "w-full md:w-1/2 px-3 md:mb-0 relative mt-2" },
          [
            _c(
              "label",
              {
                staticClass:
                  "z-20 absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
                attrs: { for: "weight" }
              },
              [_vm._v("Brands")]
            ),
            _vm._v(" "),
            _c("multiselect", {
              attrs: {
                "deselect-label": "Can't remove this value",
                "track-by": "name",
                label: "name",
                placeholder: "Select Brand",
                options: _vm.Brands,
                searchable: false,
                "allow-empty": false
              },
              model: {
                value: _vm.form.brand,
                callback: function($$v) {
                  _vm.$set(_vm.form, "brand", $$v)
                },
                expression: "form.brand"
              }
            }),
            _vm._v(" "),
            _vm.$page.errors.brand
              ? _c(
                  "p",
                  {
                    staticClass:
                      "z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"
                  },
                  [_vm._v(_vm._s(_vm.$page.errors.brand))]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-full md:w-1/2 px-3 md:mb-0 relative mt-2" },
          [
            _c(
              "label",
              {
                staticClass:
                  " z-20  absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
                attrs: { for: "weight" }
              },
              [_vm._v("Categories")]
            ),
            _vm._v(" "),
            _c("multiselect", {
              attrs: {
                options: _vm.CategoriesOption,
                multiple: true,
                "close-on-select": false,
                "clear-on-select": false,
                "preserve-search": true,
                placeholder: "Select categories",
                label: "name",
                "track-by": "name"
              },
              model: {
                value: _vm.form.categories,
                callback: function($$v) {
                  _vm.$set(_vm.form, "categories", $$v)
                },
                expression: "form.categories"
              }
            }),
            _vm._v(" "),
            _vm.$page.errors.categories
              ? _c(
                  "p",
                  {
                    staticClass:
                      "z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"
                  },
                  [_vm._v(_vm._s(_vm.$page.errors.categories))]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap -mx-3 mb-2" },
        [
          _c(
            "select-input",
            {
              staticClass: "w-full md:w-1/3 px-3  md:mb-0 ",
              attrs: {
                fixedClasses: "right-3 z-20",
                error: _vm.$page.errors.is_active,
                label: "Status",
                labelRequire: true
              },
              model: {
                value: _vm.form.is_active,
                callback: function($$v) {
                  _vm.$set(_vm.form, "is_active", $$v)
                },
                expression: "form.is_active"
              }
            },
            [
              _c("option", { domProps: { value: 0 } }, [_vm._v("Disable")]),
              _vm._v(" "),
              _c("option", { domProps: { value: 1 } }, [_vm._v("Active")])
            ]
          ),
          _vm._v(" "),
          _c(
            "select-input",
            {
              staticClass: "w-full md:w-1/3 px-3  md:mb-0 ",
              attrs: {
                fixedClasses: "right-3 z-20",
                error: _vm.$page.errors.is_featured,
                label: "Featured",
                labelRequire: true
              },
              model: {
                value: _vm.form.is_featured,
                callback: function($$v) {
                  _vm.$set(_vm.form, "is_featured", $$v)
                },
                expression: "form.is_featured"
              }
            },
            [
              _c("option", { domProps: { value: 0 } }, [_vm._v("No")]),
              _vm._v(" "),
              _c("option", { domProps: { value: 1 } }, [_vm._v("YES")])
            ]
          ),
          _vm._v(" "),
          _c(
            "select-input",
            {
              staticClass: "w-full md:w-1/3 px-3  md:mb-0 ",
              attrs: {
                fixedClasses: "right-3 z-20",
                error: _vm.$page.errors.is_variable,
                label: "Type",
                labelRequire: true
              },
              model: {
                value: _vm.form.is_variable,
                callback: function($$v) {
                  _vm.$set(_vm.form, "is_variable", $$v)
                },
                expression: "form.is_variable"
              }
            },
            [
              _c("option", { domProps: { value: 0 } }, [_vm._v("Simple")]),
              _vm._v(" "),
              _c("option", { domProps: { value: 1 } }, [_vm._v("Variable")])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.form.is_variable
        ? _c(
            "div",
            { staticClass: "product-attributes" },
            [
              _c("SectionBorder"),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "text-lg text-gray-800 font-medium pb-4" },
                [_vm._v("Product Attributes information")]
              ),
              _vm._v(" "),
              _vm.form.is_variable
                ? _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-full md:w-1/2 px-3 md:mb-0 relative mt-2"
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              " z-20  absolute bottom-8  right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
                            attrs: { for: "weight" }
                          },
                          [_vm._v("Product Attributes")]
                        ),
                        _vm._v(" "),
                        _c("multiselect", {
                          attrs: {
                            "deselect-label": "remove this value",
                            multiple: true,
                            "close-on-select": false,
                            "clear-on-select": false,
                            "track-by": "name",
                            label: "name",
                            placeholder: "Select an Attribute",
                            options: _vm.Attributes,
                            searchable: true,
                            "allow-empty": true
                          },
                          model: {
                            value: _vm.form.attributes,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "attributes", $$v)
                            },
                            expression: "form.attributes"
                          }
                        }),
                        _vm._v(" "),
                        _vm.$page.errors.attributes
                          ? _c(
                              "p",
                              {
                                staticClass:
                                  "z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"
                              },
                              [_vm._v(_vm._s(_vm.$page.errors.attributes))]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.form.is_variable && _vm.form.attributes
                ? _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                    _c("div", { staticClass: "w-full md:w-1/2" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/2" },
                      [
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-lg text-gray-800 font-medium pb-4 md:text-right mx-5"
                          },
                          [_vm._v("Product Attributes Values ")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.form.attributes, function(attribute, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                              staticClass: "w-full px-3 md:mb-0 relative mt-5"
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    " z-20  absolute bottom-8  right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
                                  attrs: { for: "weight" }
                                },
                                [_vm._v("Attribute " + _vm._s(attribute.name))]
                              ),
                              _vm._v(" "),
                              _c("multiselect", {
                                attrs: {
                                  "deselect-label": "remove this value",
                                  multiple: true,
                                  "close-on-select": false,
                                  "clear-on-select": false,
                                  "track-by": "name",
                                  label: "name",
                                  placeholder: "Select an Attribute",
                                  options: attribute.attribute_values,
                                  searchable: true,
                                  "allow-empty": true
                                },
                                model: {
                                  value: attribute.product_attribute_values,
                                  callback: function($$v) {
                                    _vm.$set(
                                      attribute,
                                      "product_attribute_values",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "attribute.product_attribute_values"
                                }
                              })
                            ],
                            1
                          )
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.form.is_variable
        ? _c(
            "div",
            { staticClass: "product-variations" },
            [
              _c("SectionBorder"),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "text-lg text-gray-800 font-medium pb-4" },
                [_vm._v("Product Possible variations")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("SectionBorder"),
      _vm._v(" "),
      _c("div", { staticClass: "mt-6" }, [
        _c(
          "div",
          {
            staticClass:
              "flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"
          },
          [
            _c(
              "loading-button",
              {
                staticClass:
                  "transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2",
                attrs: { loading: _vm.sending, type: "submit", as: "button" }
              },
              [
                _vm._v(
                  "\r\n                UPDATE PRODUCTS\r\n                    "
                ),
                !_vm.sending
                  ? _c(
                      "svg",
                      {
                        staticClass:
                          "transition duration-700 ease-in-out  h-5 w-5 ml-2",
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
                              "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                            "clip-rule": "evenodd"
                          }
                        })
                      ]
                    )
                  : _vm._e()
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/SectionBorder.vue?vue&type=template&id=ea0b1660&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/SectionBorder.vue?vue&type=template&id=ea0b1660& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "hidden sm:block" }, [
      _c("div", { staticClass: "py-8" }, [
        _c("div", { staticClass: "border-t border-gray-200" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/products/EditForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Admin/products/EditForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditForm_vue_vue_type_template_id_3e087580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditForm.vue?vue&type=template&id=3e087580& */ "./resources/js/Pages/Admin/products/EditForm.vue?vue&type=template&id=3e087580&");
/* harmony import */ var _EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/products/EditForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditForm_vue_vue_type_template_id_3e087580___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditForm_vue_vue_type_template_id_3e087580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/products/EditForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/products/EditForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/EditForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/EditForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/products/EditForm.vue?vue&type=template&id=3e087580&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/EditForm.vue?vue&type=template&id=3e087580& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_template_id_3e087580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditForm.vue?vue&type=template&id=3e087580& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/EditForm.vue?vue&type=template&id=3e087580&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_template_id_3e087580___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditForm_vue_vue_type_template_id_3e087580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/SectionBorder.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Shared/SectionBorder.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionBorder_vue_vue_type_template_id_ea0b1660___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionBorder.vue?vue&type=template&id=ea0b1660& */ "./resources/js/Pages/Shared/SectionBorder.vue?vue&type=template&id=ea0b1660&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _SectionBorder_vue_vue_type_template_id_ea0b1660___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionBorder_vue_vue_type_template_id_ea0b1660___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/SectionBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/SectionBorder.vue?vue&type=template&id=ea0b1660&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/SectionBorder.vue?vue&type=template&id=ea0b1660& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionBorder_vue_vue_type_template_id_ea0b1660___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionBorder.vue?vue&type=template&id=ea0b1660& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/SectionBorder.vue?vue&type=template&id=ea0b1660&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionBorder_vue_vue_type_template_id_ea0b1660___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionBorder_vue_vue_type_template_id_ea0b1660___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);