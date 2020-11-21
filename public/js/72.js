(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

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
/* harmony import */ var _components_PaymentsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PaymentsForm */ "./resources/js/Pages/Admin/settings/components/PaymentsForm.vue");
/* harmony import */ var _components_SocialLinksForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SocialLinksForm */ "./resources/js/Pages/Admin/settings/components/SocialLinksForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PaymentsForm: _components_PaymentsForm__WEBPACK_IMPORTED_MODULE_5__["default"],
    SocialLinksForm: _components_SocialLinksForm__WEBPACK_IMPORTED_MODULE_6__["default"],
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
        onFinish: function onFinish() {
          return _this.$root.$emit('sending-finished');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_0__["default"],
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormSection: _Shared_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    settings: Object
  },
  data: function data() {
    return {
      form: {
        footer_copyright_text: this.settings.footer_copyright_text,
        seo_meta_title: this.settings.seo_meta_title,
        seo_meta_description: this.settings.seo_meta_description
      },
      sending: false
    };
  },
  methods: {
    update: function update() {
      var self = this;
      var formData = new FormData();
      formData.append("footer_copyright_text", self.form.footer_copyright_text || '');
      formData.append("seo_meta_title", self.form.seo_meta_title || '');
      formData.append("seo_meta_description", self.form.seo_meta_description || '');
      formData.append('_method', 'put');
      self.$emit('form-is-updated', formData);
      this.sending = true;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('sending-finished', function () {
      return _this.sending = false;
    });
  }
});

/***/ }),

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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_0__["default"],
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormSection: _Shared_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    settings: Object
  },
  data: function data() {
    return {
      form: {
        social_facebook: this.settings.social_facebook,
        social_twitter: this.settings.social_twitter,
        social_instagram: this.settings.social_instagram,
        social_linkedin: this.settings.social_linkedin
      },
      sending: false
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
      this.sending = true;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('sending-finished', function () {
      return _this.sending = false;
    });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=template&id=3e51bae0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=template&id=3e51bae0& ***!
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
  return _c("form-section", {
    on: { submitted: _vm.update },
    scopedSlots: _vm._u([
      {
        key: "title",
        fn: function() {
          return [_vm._v("\n        Footer & SEO\n    ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n        Update your account's Footer & SEO information and Option.\n    "
            )
          ]
        },
        proxy: true
      },
      {
        key: "form",
        fn: function() {
          return [
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "footer_copyright_text",
                type: "text",
                autocomplete: "footer_copyright_text",
                error: _vm.$page.errors.footer_copyright_text,
                label: "footer_copyright_text",
                labelRequire: true,
                placeholder: "footer_copyright_text",
                "aria-label": "footer_copyright_text"
              },
              model: {
                value: _vm.form.footer_copyright_text,
                callback: function($$v) {
                  _vm.$set(_vm.form, "footer_copyright_text", $$v)
                },
                expression: "form.footer_copyright_text"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "seo_meta_title",
                type: "text",
                autocomplete: "seo_meta_title",
                error: _vm.$page.errors.seo_meta_title,
                label: "seo_meta_title",
                labelRequire: true,
                placeholder: "seo_meta_title",
                "aria-label": "seo_meta_title"
              },
              model: {
                value: _vm.form.seo_meta_title,
                callback: function($$v) {
                  _vm.$set(_vm.form, "seo_meta_title", $$v)
                },
                expression: "form.seo_meta_title"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "seo_meta_description",
                type: "text",
                autocomplete: "seo_meta_description",
                error: _vm.$page.errors.seo_meta_description,
                label: "seo_meta_description",
                labelRequire: true,
                placeholder: "seo_meta_description",
                "aria-label": "seo_meta_description"
              },
              model: {
                value: _vm.form.seo_meta_description,
                callback: function($$v) {
                  _vm.$set(_vm.form, "seo_meta_description", $$v)
                },
                expression: "form.seo_meta_description"
              }
            })
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
          return [_vm._v("\n        Social Links\n    ")]
        },
        proxy: true
      },
      {
        key: "description",
        fn: function() {
          return [
            _vm._v(
              "\n        Update your account's Social Links information .\n    "
            )
          ]
        },
        proxy: true
      },
      {
        key: "form",
        fn: function() {
          return [
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "social_facebook",
                type: "text",
                autocomplete: "social_facebook",
                error: _vm.$page.errors.social_facebook,
                label: "social_facebook",
                labelRequire: true,
                placeholder: "social_facebook",
                "aria-label": "social_facebook"
              },
              model: {
                value: _vm.form.social_facebook,
                callback: function($$v) {
                  _vm.$set(_vm.form, "social_facebook", $$v)
                },
                expression: "form.social_facebook"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "social_twitter",
                type: "text",
                autocomplete: "social_twitter",
                error: _vm.$page.errors.social_twitter,
                label: "social_twitter",
                labelRequire: true,
                placeholder: "social_twitter",
                "aria-label": "social_twitter"
              },
              model: {
                value: _vm.form.social_twitter,
                callback: function($$v) {
                  _vm.$set(_vm.form, "social_twitter", $$v)
                },
                expression: "form.social_twitter"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "social_instagram",
                type: "text",
                autocomplete: "social_instagram",
                error: _vm.$page.errors.social_instagram,
                label: "social_instagram",
                labelRequire: true,
                placeholder: "social_instagram",
                "aria-label": "social_instagram"
              },
              model: {
                value: _vm.form.social_instagram,
                callback: function($$v) {
                  _vm.$set(_vm.form, "social_instagram", $$v)
                },
                expression: "form.social_instagram"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "col-span-6 sm:col-span-6 mt-1 block w-full",
              attrs: {
                id: "social_linkedin",
                type: "text",
                autocomplete: "social_linkedin",
                error: _vm.$page.errors.social_linkedin,
                label: "social_linkedin",
                labelRequire: true,
                placeholder: "social_linkedin",
                "aria-label": "social_linkedin"
              },
              model: {
                value: _vm.form.social_linkedin,
                callback: function($$v) {
                  _vm.$set(_vm.form, "social_linkedin", $$v)
                },
                expression: "form.social_linkedin"
              }
            })
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



/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterSeoForm_vue_vue_type_template_id_3e51bae0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterSeoForm.vue?vue&type=template&id=3e51bae0& */ "./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=template&id=3e51bae0&");
/* harmony import */ var _FooterSeoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterSeoForm.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FooterSeoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterSeoForm_vue_vue_type_template_id_3e51bae0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterSeoForm_vue_vue_type_template_id_3e51bae0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/settings/components/FooterSeoForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSeoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterSeoForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSeoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=template&id=3e51bae0&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=template&id=3e51bae0& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSeoForm_vue_vue_type_template_id_3e51bae0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterSeoForm.vue?vue&type=template&id=3e51bae0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/settings/components/FooterSeoForm.vue?vue&type=template&id=3e51bae0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSeoForm_vue_vue_type_template_id_3e51bae0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSeoForm_vue_vue_type_template_id_3e51bae0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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