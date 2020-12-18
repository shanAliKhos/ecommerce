(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Layouts/AppLayout */ "./resources/js/Pages/Admin/Layouts/AppLayout.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Shared/LoadingButton */ "./resources/js/Pages/Shared/LoadingButton.vue");
/* harmony import */ var _Shared_BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Shared/BackButton */ "./resources/js/Pages/Shared/BackButton.vue");
/* harmony import */ var _Shared_FileInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Shared/FileInput */ "./resources/js/Pages/Shared/FileInput.vue");
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Shared/TextInput */ "./resources/js/Pages/Shared/TextInput.vue");
/* harmony import */ var _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Shared/SelectInput */ "./resources/js/Pages/Shared/SelectInput.vue");
/* harmony import */ var _Shared_SectionBorder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Shared/SectionBorder */ "./resources/js/Pages/Shared/SectionBorder.vue");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  metaInfo: {
    title: 'Product Create'
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a,
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    BackButton: _Shared_BackButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileInput: _Shared_FileInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    SelectInput: _Shared_SelectInput__WEBPACK_IMPORTED_MODULE_6__["default"],
    SectionBorder: _Shared_SectionBorder__WEBPACK_IMPORTED_MODULE_7__["default"],
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_8__["VueEditor"]
  },
  remember: 'form',
  data: function data() {
    return {
      form: {
        name: null,
        sku: null,
        brand: null,
        categories: [],
        regular_price: null,
        sale_price: null,
        quantity: null,
        weight: null,
        description: null,
        is_active: 1,
        is_featured: 0,
        image: null,
        is_variable: 0,
        attributes: null
      },
      sending: false
    };
  },
  watch: {
    IsVariable: function IsVariable(val) {
      if (!val) {
        this.form.attributes = null;
      }
    }
  },
  methods: {
    store: function store() {
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
      formData.append("image", self.form.image || null);
      self.$inertia.post(route('admin.product.store'), formData, {
        preserveState: true,
        preserveScroll: true,
        onStart: function onStart() {
          return _this.sending = true;
        },
        onFinish: function onFinish() {
          return _this.sending = false;
        },
        onSuccess: function onSuccess() {
          if (Object.keys(_this.$page.errors).length === 0) {
            _this.form = {
              name: null,
              sku: null,
              brand: null,
              categories: [],
              regular_price: 0.01,
              sale_price: 0.00,
              quantity: 1,
              is_variable: 0,
              weight: 0.00,
              description: null,
              is_active: 1,
              is_featured: 0,
              image: [],
              attributes: []
            };
          }
        }
      });
    }
  },
  computed: {
    CategoriesOption: function CategoriesOption() {
      return this.$page.categories.filter(function (category, key) {
        // if(key > 0){
        return category; // }
      });
    },
    Brands: function Brands() {
      return this.$page.brands;
    },
    Attributes: function Attributes() {
      return this.$page.attributes;
    },
    ProductAttributes: function ProductAttributes() {
      return this.form.attributes;
    },
    IsVariable: function IsVariable() {
      return this.form.is_variable;
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$emit('sidebar-close');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/BackButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/BackButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    back: function back() {
      return window.history.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Create.vue?vue&type=template&id=5238bc0e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/Create.vue?vue&type=template&id=5238bc0e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        _c("BackButton")
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "flex justify-center" }, [
      _c("div", { staticClass: "w-full pl-0 lg:pl-2" }, [
        _c("div", { staticClass: "leading-loose" }, [
          _c(
            "form",
            {
              staticClass: "p-10 bg-white rounded shadow-xl",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.store($event)
                }
              }
            },
            [
              _c(
                "p",
                {
                  staticClass: "pb-6 flex font-semibold text-xl text-gray-400"
                },
                [_vm._v("Product Create")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "general-section mb-20 " },
                [
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/2 px-3  md:mb-0" },
                      [
                        _c(
                          "div",
                          { staticClass: "mt-2" },
                          [
                            _c("file-input", {
                              staticClass:
                                "pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded",
                              attrs: {
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
                      ]
                    ),
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
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-2" }, [
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
                      {
                        staticClass:
                          "w-full md:w-1/2 px-3 md:mb-0 relative mt-2"
                      },
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
                          _c("option", { domProps: { value: 0 } }, [
                            _vm._v("Disable")
                          ]),
                          _vm._v(" "),
                          _c("option", { domProps: { value: 1 } }, [
                            _vm._v("Active")
                          ])
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
                          _c("option", { domProps: { value: 0 } }, [
                            _vm._v("No")
                          ]),
                          _vm._v(" "),
                          _c("option", { domProps: { value: 1 } }, [
                            _vm._v("YES")
                          ])
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
                          _c("option", { domProps: { value: 0 } }, [
                            _vm._v("Simple")
                          ]),
                          _vm._v(" "),
                          _c("option", { domProps: { value: 1 } }, [
                            _vm._v("Variable")
                          ])
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
                            {
                              staticClass:
                                "text-lg text-gray-800 font-medium pb-4"
                            },
                            [_vm._v("Product Attributes information")]
                          ),
                          _vm._v(" "),
                          _vm.form.is_variable
                            ? _c(
                                "div",
                                { staticClass: "flex flex-wrap -mx-3 mb-2" },
                                [
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
                                            " z-20  absolute bottom-8 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
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
                                            _vm.$set(
                                              _vm.form,
                                              "attributes",
                                              $$v
                                            )
                                          },
                                          expression: "form.attributes"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.$page.errors.Attribute
                                        ? _c(
                                            "p",
                                            {
                                              staticClass:
                                                "z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$page.errors.Attribute
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.is_variable && _vm.form.attributes
                            ? _c(
                                "div",
                                { staticClass: "flex flex-wrap -mx-3 mb-2" },
                                [
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
                                            "text-lg text-gray-800 font-medium pb-4 md:text-right"
                                        },
                                        [_vm._v("Product Attributes Values ")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.form.attributes, function(
                                        attribute,
                                        index
                                      ) {
                                        return _c(
                                          "div",
                                          {
                                            key: index,
                                            staticClass:
                                              "w-full px-3 md:mb-0 relative mt-5"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "z-20 absolute bottom-8 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",
                                                attrs: { for: "weight" }
                                              },
                                              [
                                                _vm._v(
                                                  "Attribute " +
                                                    _vm._s(attribute.name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("multiselect", {
                                              attrs: {
                                                "deselect-label":
                                                  "remove this value",
                                                multiple: true,
                                                "close-on-select": false,
                                                "clear-on-select": false,
                                                "track-by": "name",
                                                label: "name",
                                                placeholder:
                                                  "Select an Attribute",
                                                options:
                                                  attribute.attribute_values,
                                                searchable: true,
                                                "allow-empty": true
                                              },
                                              model: {
                                                value:
                                                  attribute.product_attribute_values,
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
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("SectionBorder"),
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
                  _c("SectionBorder")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mt-5 flex items-center justify-end   text-right"
                },
                [
                  _c(
                    "loading-button",
                    {
                      staticClass:
                        "transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2",
                      attrs: {
                        loading: _vm.sending,
                        type: "submit",
                        as: "button"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            SAVE PRODUCTS\n                                "
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
            ]
          )
        ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/BackButton.vue?vue&type=template&id=066db72a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/BackButton.vue?vue&type=template&id=066db72a& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "button",
    _vm._b(
      {
        staticClass:
          "transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right",
        on: { click: _vm.back }
      },
      "button",
      _vm.$attrs,
      false
    ),
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
      _vm._t("default"),
      _vm._v(" "),
      _c("span", [_vm._v("Back.")])
    ],
    2
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

/***/ "./resources/js/Pages/Admin/products/Create.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Admin/products/Create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_5238bc0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=5238bc0e& */ "./resources/js/Pages/Admin/products/Create.vue?vue&type=template&id=5238bc0e&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/products/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_5238bc0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_5238bc0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/products/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/products/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/products/Create.vue?vue&type=template&id=5238bc0e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/Create.vue?vue&type=template&id=5238bc0e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_5238bc0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=5238bc0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/Create.vue?vue&type=template&id=5238bc0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_5238bc0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_5238bc0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/BackButton.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Shared/BackButton.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackButton_vue_vue_type_template_id_066db72a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton.vue?vue&type=template&id=066db72a& */ "./resources/js/Pages/Shared/BackButton.vue?vue&type=template&id=066db72a&");
/* harmony import */ var _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/BackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackButton_vue_vue_type_template_id_066db72a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackButton_vue_vue_type_template_id_066db72a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/BackButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/BackButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Shared/BackButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/BackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/BackButton.vue?vue&type=template&id=066db72a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/BackButton.vue?vue&type=template&id=066db72a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_066db72a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BackButton.vue?vue&type=template&id=066db72a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/BackButton.vue?vue&type=template&id=066db72a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_066db72a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_066db72a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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