(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        social_facebook: this.settings.social_facebook,
        social_twitter: this.settings.social_twitter,
        social_instagram: this.settings.social_instagram,
        social_linkedin: this.settings.social_linkedin
      }
    };
  },
  methods: {
    update: function update() {
      var self = this;
      var formData = new FormData();
      formData.append("social_facebook", self.form.social_facebook || '');
      formData.append("social_twitter", self.form.social_twitter || '');
      formData.append("social_instagram", self.form.social_instagram || '');
      formData.append("social_linkedin", self.form.social_linkedin || '');
      formData.append('_method', 'put');
      self.$emit('form-is-updated', formData);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=template&id=45cd202c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=template&id=45cd202c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
          return [_vm._v("\n            Social Links\n        ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n            Update your account's Social Links information .\n        "
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
                    attrs: { for: "social_facebook" }
                  },
                  [_vm._v("social_facebook")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.social_facebook,
                      expression: "form.social_facebook"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "social_facebook",
                    name: "social_facebook",
                    type: "text",
                    placeholder: "social_facebook",
                    "aria-label": "social_facebook"
                  },
                  domProps: { value: _vm.form.social_facebook },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "social_facebook", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.social_facebook
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.social_facebook))
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
                    attrs: { for: "social_twitter" }
                  },
                  [_vm._v("social_twitter")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.social_twitter,
                      expression: "form.social_twitter"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "social_twitter",
                    name: "social_twitter",
                    type: "text",
                    placeholder: "social_twitter",
                    "aria-label": "social_twitter"
                  },
                  domProps: { value: _vm.form.social_twitter },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "social_twitter", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.social_twitter
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.social_twitter))
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
                    attrs: { for: "social_instagram" }
                  },
                  [_vm._v("social_instagram")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.social_instagram,
                      expression: "form.social_instagram"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "social_instagram",
                    name: "social_instagram",
                    type: "text",
                    placeholder: "social_instagram",
                    "aria-label": "social_instagram"
                  },
                  domProps: { value: _vm.form.social_instagram },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "social_instagram",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.social_instagram
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.social_instagram))
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
                    attrs: { for: "social_linkedin" }
                  },
                  [_vm._v("social_linkedin")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.social_linkedin,
                      expression: "form.social_linkedin"
                    }
                  ],
                  staticClass:
                    "w-full px-5 py-2 text-gray-700 bg-gray-200 rounded",
                  attrs: {
                    id: "social_linkedin",
                    name: "social_linkedin",
                    type: "text",
                    placeholder: "social_linkedin",
                    "aria-label": "social_linkedin"
                  },
                  domProps: { value: _vm.form.social_linkedin },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "social_linkedin", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$page.errors.social_linkedin
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(_vm._s(_vm.$page.errors.social_linkedin))
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
                _vm._v("\n                Save\n                    "),
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

/***/ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialLinksForm_vue_vue_type_template_id_45cd202c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialLinksForm.vue?vue&type=template&id=45cd202c& */ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=template&id=45cd202c&");
/* harmony import */ var _SocialLinksForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialLinksForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialLinksForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialLinksForm_vue_vue_type_template_id_45cd202c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialLinksForm_vue_vue_type_template_id_45cd202c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/settings/components/SocialLinksForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinksForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialLinksForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinksForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=template&id=45cd202c&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=template&id=45cd202c& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinksForm_vue_vue_type_template_id_45cd202c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialLinksForm.vue?vue&type=template&id=45cd202c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue?vue&type=template&id=45cd202c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinksForm_vue_vue_type_template_id_45cd202c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinksForm_vue_vue_type_template_id_45cd202c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);