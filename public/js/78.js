(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "attribute-values",
  props: ['attributeid'],
  data: function data() {
    return {
      values: [],
      value: '',
      price: '',
      currentId: '',
      addValue: true,
      key: 0
    };
  },
  created: function created() {
    this.loadValues();
  },
  methods: {
    loadValues: function loadValues() {
      var attributeId = this.attributeid;

      var _this = this;

      axios.post('/admin/attributes/get-values', {
        id: attributeId
      }).then(function (response) {
        _this.values = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveValue: function saveValue() {
      if (this.value === '') {
        this.$swal("Error, Value for attribute is required.", {
          icon: "error"
        });
      } else {
        var attributeId = this.attributeid;

        var _this = this;

        axios.post('/admin/attributes/add-values', {
          id: attributeId,
          value: _this.value,
          price: _this.price
        }).then(function (response) {
          _this.values.push(response.data);

          _this.resetValue();

          _this.$swal("Success! Value added successfully!", {
            icon: "success"
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    editAttributeValue: function editAttributeValue(value) {
      this.addValue = false;
      this.value = value.value;
      this.price = value.price;
      this.currentId = value.id;
      this.key = this.values.indexOf(value);
    },
    updateValue: function updateValue() {
      if (this.value === '') {
        this.$swal("Error, Value for attribute is required.", {
          icon: "error"
        });
      } else {
        var attributeId = this.attributeid;

        var _this = this;

        axios.post('/admin/attributes/update-values', {
          id: attributeId,
          value: _this.value,
          price: _this.price,
          valueId: _this.currentId
        }).then(function (response) {
          _this.values.splice(_this.key, 1);

          _this.resetValue();

          _this.values.push(response.data);

          _this.$swal("Success! Value updated successfully!", {
            icon: "success"
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    deleteAttributeValue: function deleteAttributeValue(value) {
      var _this2 = this;

      this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this attribute value!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          _this2.currentId = value.id;
          _this2.key = _this2.values.indexOf(value);
          var _this = _this2;
          axios.post('/admin/attributes/delete-values', {
            id: _this.currentId
          }).then(function (response) {
            if (response.data.status === 'success') {
              _this.values.splice(_this.key, 1);

              _this.resetValue();

              _this.$swal("Success! Attribute value has been deleted!", {
                icon: "success"
              });
            } else {
              _this.$swal("Your attribute value not deleted!");
            }
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          _this2.$swal("Your option value not deleted!");
        }
      });
    },
    resetValue: function resetValue() {
      this.value = '';
      this.price = '';
    },
    reset: function reset() {
      this.addValue = true;
      this.resetValue();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=template&id=7190453c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=template&id=7190453c& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "" } }, [
    _c("div", { staticClass: "tile" }, [
      _c("h3", { staticClass: "tile-title" }, [_vm._v("Attribute Values")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "tile-body" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "control-label", attrs: { for: "value" } },
            [_vm._v("Value")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "Enter attribute value",
              id: "value",
              name: "value"
            },
            domProps: { value: _vm.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "control-label", attrs: { for: "price" } },
            [_vm._v("Price")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.price,
                expression: "price"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "number",
              placeholder: "Enter attribute value price",
              id: "price",
              name: "price"
            },
            domProps: { value: _vm.price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.price = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tile-footer" }, [
        _c("div", { staticClass: "row d-print-none mt-2" }, [
          _c("div", { staticClass: "col-12 text-right" }, [
            _vm.addValue
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.saveValue()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-lg fa-check-circle" }),
                    _vm._v("Save\n                    ")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.addValue
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.updateValue()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-lg fa-check-circle" }),
                    _vm._v("Update\n                    ")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.addValue
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.reset()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-lg fa-check-circle" }),
                    _vm._v("Reset\n                    ")
                  ]
                )
              : _vm._e()
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tile" }, [
      _c("h3", { staticClass: "tile-title" }, [_vm._v("Option Values")]),
      _vm._v(" "),
      _c("div", { staticClass: "tile-body" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-sm" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.values, function(value) {
                return _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(value.id))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(value.value))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [_vm._v(_vm._s(value.price))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "text-center",
                      staticStyle: { width: "25%" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-primary",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.editAttributeValue(value)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.deleteAttributeValue(value)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      )
                    ]
                  )
                ])
              }),
              0
            )
          ])
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
    return _c("thead", [
      _c("tr", { staticClass: "text-center" }, [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Value")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
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

/***/ "./resources/js/Pages/Admin/products/AttributeValues.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/AttributeValues.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttributeValues_vue_vue_type_template_id_7190453c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributeValues.vue?vue&type=template&id=7190453c& */ "./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=template&id=7190453c&");
/* harmony import */ var _AttributeValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributeValues.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttributeValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttributeValues_vue_vue_type_template_id_7190453c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttributeValues_vue_vue_type_template_id_7190453c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/products/AttributeValues.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttributeValues.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeValues_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=template&id=7190453c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=template&id=7190453c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeValues_vue_vue_type_template_id_7190453c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttributeValues.vue?vue&type=template&id=7190453c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/products/AttributeValues.vue?vue&type=template&id=7190453c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeValues_vue_vue_type_template_id_7190453c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributeValues_vue_vue_type_template_id_7190453c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);