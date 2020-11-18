(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[170],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Layouts/AppLayout */ "./resources/js/Pages/Admin/Layouts/AppLayout.vue");
/* harmony import */ var _Shared_SectionBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Shared/SectionBorder */ "./resources/js/Pages/Shared/SectionBorder.vue");
/* harmony import */ var _components_AnalyticsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AnalyticsForm */ "./resources/js/Pages/Admin/settings/components/AnalyticsForm.vue");
/* harmony import */ var _components_FooterSeoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FooterSeoForm */ "./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue");
/* harmony import */ var _components_GeneralForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/GeneralForm */ "./resources/js/Pages/Admin/settings/components/GeneralForm.vue");
/* harmony import */ var _components_LogoForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LogoForm */ "./resources/js/Pages/Admin/settings/components/LogoForm.vue");
/* harmony import */ var _components_PaymentsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PaymentsForm */ "./resources/js/Pages/Admin/settings/components/PaymentsForm.vue");
/* harmony import */ var _components_SocialLinksForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SocialLinksForm */ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: 'Setting'
  },
  layout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    AnalyticsForm: _components_AnalyticsForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    FooterSeoForm: _components_FooterSeoForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    GeneralForm: _components_GeneralForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    LogoForm: _components_LogoForm__WEBPACK_IMPORTED_MODULE_5__["default"],
    PaymentsForm: _components_PaymentsForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    SocialLinksForm: _components_SocialLinksForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    SectionBorder: _Shared_SectionBorder__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sending: false
    };
  },
  methods: {
    update: function update(formData) {
      var _this = this;

      this.$inertia.post(route('admin.setting.update'), formData, {
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
    settings: function settings() {
      return this.$page.settings;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/Index.vue?vue&type=template&id=055becaf&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/Index.vue?vue&type=template&id=055becaf& ***!
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
  return _c(
    "div",
    [
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
              attrs: { href: _vm.route("admin.dashboard") }
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
      _c("SectionBorder"),
      _vm._v(" "),
      _c("p", { staticClass: "text-xl pb-6 flex items-center" }, [
        _vm._v("Setting")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex justify-center" }, [
        _c("div", { staticClass: "w-full pl-0 lg:pl-2" }, [
          _c(
            "div",
            { staticClass: "leading-loose " },
            [
              _c("general-form", {
                attrs: { sending: _vm.sending, settings: _vm.settings },
                on: { "form-is-updated": _vm.update }
              }),
              _vm._v(" "),
              _c("SectionBorder"),
              _vm._v(" "),
              _c("logo-form", {
                attrs: {
                  sending: _vm.sending,
                  site_logo: _vm.settings.site_logo,
                  site_favicon: _vm.settings.site_favicon
                },
                on: { "form-is-updated": _vm.update }
              }),
              _vm._v(" "),
              _c("SectionBorder"),
              _vm._v(" "),
              _c("footer-seo-form", {
                attrs: { sending: _vm.sending, settings: _vm.settings },
                on: { "form-is-updated": _vm.update }
              }),
              _vm._v(" "),
              _c("SectionBorder"),
              _vm._v(" "),
              _c("social-links-form", {
                attrs: { sending: _vm.sending, settings: _vm.settings },
                on: { "form-is-updated": _vm.update }
              }),
              _vm._v(" "),
              _c("SectionBorder"),
              _vm._v(" "),
              _c("analytics-form", {
                attrs: {
                  sending: _vm.sending,
                  google_analytics: _vm.settings.google_analytics,
                  facebook_pixels: _vm.settings.facebook_pixels
                },
                on: { "form-is-updated": _vm.update }
              }),
              _vm._v(" "),
              _c("SectionBorder"),
              _vm._v(" "),
              _c("payments-form", {
                attrs: { sending: _vm.sending, settings: _vm.settings },
                on: { "form-is-updated": _vm.update }
              }),
              _vm._v(" "),
              _c("SectionBorder")
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "flex items-center" }, [
      _c("a", { staticClass: "text-gray-600", attrs: { href: "#" } }, [
        _vm._v("Setting")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/settings/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/Index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_055becaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=055becaf& */ "./resources/js/Pages/Admin/settings/Index.vue?vue&type=template&id=055becaf&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_055becaf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_055becaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/settings/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/Index.vue?vue&type=template&id=055becaf&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/Index.vue?vue&type=template&id=055becaf& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_055becaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=055becaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/Index.vue?vue&type=template&id=055becaf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_055becaf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_055becaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);