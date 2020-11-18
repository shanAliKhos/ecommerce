(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Shared/TextInput */ "./resources/js/Pages/Shared/TextInput.vue");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Shared/LoadingButton */ "./resources/js/Pages/Shared/LoadingButton.vue");
/* harmony import */ var _Shared_FormSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Shared/FormSection */ "./resources/js/Pages/Shared/FormSection.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_0__["default"],
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormSection: _Shared_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    settings: Object,
    sending: Boolean
  },
  data: function data() {
    return {
      form: {
        site_name: this.settings.site_name,
        site_title: this.settings.site_title,
        default_email_address: this.settings.default_email_address,
        currency_code: this.settings.currency_code,
        currency_symbol: this.settings.currency_symbol
      }
    };
  },
  methods: {
    update: function update() {
      var self = this;
      var formData = new FormData();
      formData.append("site_name", self.form.site_name || '');
      formData.append("site_title", self.form.site_title || '');
      formData.append("default_email_address", self.form.default_email_address || '');
      formData.append("currency_code", self.form.currency_code || '');
      formData.append("currency_symbol", self.form.currency_symbol || '');
      formData.append('_method', 'put');
      self.$emit('form-is-updated', formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=template&id=45b79986&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=template&id=45b79986& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("form-section", {
    on: { submitted: _vm.update },
    scopedSlots: _vm._u([
      {
        key: "title",
        fn: function() {
          return [_vm._v("\n        General\n    ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n        Update your account's General information and Option.\n    "
            )
          ]
        },
        proxy: true
      },
      {
        key: "form",
        fn: function() {
          return [
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4 mt-1 block w-full" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2",
                    attrs: { for: "site_name" }
                  },
                  [_vm._v("site_name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.site_name,
                      expression: "form.site_name"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "site_name",
                    name: "site_name",
                    type: "text",
                    placeholder: "site_name",
                    "aria-label": "site_name"
                  },
                  domProps: { value: _vm.form.site_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "site_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.site_name
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.site_name))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4 mt-1 block w-full" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2",
                    attrs: { for: "site_title" }
                  },
                  [_vm._v("site_title")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.site_title,
                      expression: "form.site_title"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "site_title",
                    name: "site_title",
                    type: "text",
                    placeholder: "site_title",
                    "aria-label": "site_title"
                  },
                  domProps: { value: _vm.form.site_title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "site_title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.site_title
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.site_title))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4 mt-1 block w-full" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2",
                    attrs: { for: "default_email_address" }
                  },
                  [_vm._v("default_email_address")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.default_email_address,
                      expression: "form.default_email_address"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "default_email_address",
                    name: "default_email_address",
                    type: "text",
                    placeholder: "default_email_address",
                    "aria-label": "default_email_address"
                  },
                  domProps: { value: _vm.form.default_email_address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "default_email_address",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.default_email_address
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.default_email_address))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4 mt-1 block w-full" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2",
                    attrs: { for: "currency_code" }
                  },
                  [_vm._v("currency_code")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.currency_code,
                      expression: "form.currency_code"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "currency_code",
                    name: "currency_code",
                    type: "text",
                    placeholder: "currency_code",
                    "aria-label": "currency_code"
                  },
                  domProps: { value: _vm.form.currency_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "currency_code", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.currency_code
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.currency_code))
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-6 sm:col-span-4 mt-1 block w-full" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2",
                    attrs: { for: "currency_symbol" }
                  },
                  [_vm._v("currency_symbol")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.currency_symbol,
                      expression: "form.currency_symbol"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "currency_symbol",
                    name: "currency_symbol",
                    type: "text",
                    placeholder: "currency_symbol",
                    "aria-label": "currency_symbol"
                  },
                  domProps: { value: _vm.form.currency_symbol },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "currency_symbol", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.currency_symbol
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.currency_symbol))
                    ])
                  : _vm._e()
              ]
            )
          ]
        },
        proxy: true
      },
      {
        key: "actions",
        fn: function() {
          return [
            _c(
              "loading-button",
              {
                staticClass:
                  "transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2",
                attrs: { loading: _vm.sending, type: "submit", as: "button" }
              },
              [
                _vm._v("\n            Save\n                "),
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
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/GeneralForm.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/GeneralForm.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralForm_vue_vue_type_template_id_45b79986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralForm.vue?vue&type=template&id=45b79986& */ "./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=template&id=45b79986&");
/* harmony import */ var _GeneralForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralForm_vue_vue_type_template_id_45b79986___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralForm_vue_vue_type_template_id_45b79986___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/settings/components/GeneralForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=template&id=45b79986&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=template&id=45b79986& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForm_vue_vue_type_template_id_45b79986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralForm.vue?vue&type=template&id=45b79986& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/GeneralForm.vue?vue&type=template&id=45b79986&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForm_vue_vue_type_template_id_45b79986___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralForm_vue_vue_type_template_id_45b79986___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);