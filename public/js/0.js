(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['href', 'active', 'atTopOfPage'],
  computed: {
    IsActiveLink: function IsActiveLink() {
      return this.active ? 'text-red-500 border-red-600 shadow-2xl border-b-4  scale-110 animate-pulse mb-3 mt-3 bg-white' : 'hover:text-red-500 hover:bg-white hover:shadow-2xl hover:border-red-500 border-b-4 mb-2 hover:scale-110 hover:animate-pulse ';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Shared/Logo */ "./resources/js/Pages/Shared/Logo.vue");
/* harmony import */ var _SideLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideLink */ "./resources/js/Pages/Admin/Layouts/partials/SideLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Sidebar',
  components: {
    SideLink: _SideLink__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sideBarOpen: false
    };
  },
  mounted: function mounted() {
    var self = this;
    self.$root.$on('toggle-sidebar', function () {
      self.sideBarOpen = !self.sideBarOpen;
    });
    self.$root.$on('sidebar-close', function () {
      self.sideBarOpen = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=template&id=d2a3d222&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=template&id=d2a3d222& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "inertia-link",
    {
      staticClass:
        "py-2 px-2 flex rounded-xl lg:cursor-pointer block font-semibold transition duration-500 ease-in-out transform  items-center hover:shadow",
      class: _vm.IsActiveLink,
      attrs: { href: _vm.href }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=template&id=518ff44e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=template&id=518ff44e& ***!
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
  return _c("div", { staticClass: "xx-sidebar h-full" }, [
    _vm.sideBarOpen
      ? _c("div", {
          staticClass:
            "bg-black opacity-50 fixed inset-0 md:top-0 md:left-0 h-screen lg:hidden z-50",
          on: {
            click: function($event) {
              _vm.sideBarOpen = false
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "w-4/5 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-full lg:block bg-gray-100 border-r border-gray-300 z-50",
        class: _vm.sideBarOpen ? "" : "hidden",
        attrs: { id: "main-nav" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "mx-3 py-4 h-full" }, [
          _c(
            "div",
            { staticClass: "py-1 pr-3" },
            [
              _c(
                "side-link",
                {
                  attrs: {
                    href: _vm.route("admin.dashboard"),
                    active: _vm.$page.currentRouteName == "admin.dashboard"
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6 fill-current mr-2",
                      attrs: { viewBox: "0 0 20 20" }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v("Dashboard")])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "overflow-y-auto overflow-x-hidden h-4/6" },
            [
              _c(
                "div",
                { staticClass: "mb-4 mt-4 px-1" },
                [
                  _c(
                    "p",
                    { staticClass: "text-sm font-semibold mb-1 text-blue-500" },
                    [_vm._v("BLOG")]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.blog.index"),
                        active: _vm.$page.currentRouteName == "admin.blog.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6  mr-2",
                          attrs: {
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Blog")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4 mt-4 px-1" },
                [
                  _c(
                    "p",
                    {
                      staticClass: "text-sm text-blue-500 font-semibold mb-1 "
                    },
                    [_vm._v("Shop")]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.order.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.order.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Orders")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.product.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.product.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6  mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "{2}",
                              d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Products")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.brand.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.brand.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: { viewBox: "0 0 20 20" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Brands")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.category.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.category.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Categories")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.attribute.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.attribute.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Attributes")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.attribute-option.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.attribute-option.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Attributes Options")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4 mt-4 px-1" },
                [
                  _c(
                    "p",
                    {
                      staticClass: "text-sm text-blue-500 font-semibold mb-1 "
                    },
                    [_vm._v("Sliders")]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.slider.hero.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.slider.hero.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Hero Slider")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.slider.sale.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.slider.sale.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6  mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Sale Slider")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.slider.trending.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.slider.trending.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6  mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Trending Slider")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.slider.hero.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.slider.hero.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("MultiSlider A")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.slider.hero.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.slider.hero.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("MultiSlider B")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.slider.hero.index"),
                        active:
                          _vm.$page.currentRouteName ==
                          "admin.slider.hero.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d:
                                "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("MultiSlider C")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4 mt-4 px-1" },
                [
                  _c(
                    "p",
                    {
                      staticClass: "text-sm text-blue-500 font-semibold mb-1 "
                    },
                    [_vm._v("Site")]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.customer.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.customer.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6  mr-2",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "{2}",
                              d:
                                "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Customers")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "side-link",
                    {
                      attrs: {
                        href: _vm.route("admin.setting.index"),
                        active:
                          _vm.$page.currentRouteName == "admin.setting.index"
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-6 w-6 fill-current mr-2",
                          attrs: { viewBox: "0 0 20 20" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v("Settings")])
                    ]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "py-1 pr-3" },
            [
              _c(
                "side-link",
                {
                  attrs: {
                    href: _vm.route("welcome"),
                    active: _vm.$page.currentRouteName == "welcome"
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6 fill-current mr-2",
                      attrs: { viewBox: "0 0 20 20" }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [_vm._v("Website")])
                ]
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "w-full h-20 border-b  border-gray-300 flex px-4 items-center "
      },
      [
        _c("p", { staticClass: "font-semibold text-3xl text-blue-400 pl-4" }, [
          _vm._v("LOGO")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Logo.vue?vue&type=template&id=17200b9c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Logo.vue?vue&type=template&id=17200b9c& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass:
      "bg-contain bg-center bg-no-repeat bg-application-logo w-20 h-20"
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/Layouts/partials/SideLink.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Layouts/partials/SideLink.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideLink_vue_vue_type_template_id_d2a3d222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideLink.vue?vue&type=template&id=d2a3d222& */ "./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=template&id=d2a3d222&");
/* harmony import */ var _SideLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideLink.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideLink_vue_vue_type_template_id_d2a3d222___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideLink_vue_vue_type_template_id_d2a3d222___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Layouts/partials/SideLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=template&id=d2a3d222&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=template&id=d2a3d222& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideLink_vue_vue_type_template_id_d2a3d222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideLink.vue?vue&type=template&id=d2a3d222& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/SideLink.vue?vue&type=template&id=d2a3d222&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideLink_vue_vue_type_template_id_d2a3d222___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideLink_vue_vue_type_template_id_d2a3d222___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_518ff44e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=518ff44e& */ "./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=template&id=518ff44e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_518ff44e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_518ff44e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Layouts/partials/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=template&id=518ff44e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=template&id=518ff44e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_518ff44e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=518ff44e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Layouts/partials/Sidebar.vue?vue&type=template&id=518ff44e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_518ff44e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_518ff44e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/Logo.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Shared/Logo.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_17200b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=17200b9c& */ "./resources/js/Pages/Shared/Logo.vue?vue&type=template&id=17200b9c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_17200b9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_17200b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Logo.vue?vue&type=template&id=17200b9c&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Logo.vue?vue&type=template&id=17200b9c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_17200b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=17200b9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Logo.vue?vue&type=template&id=17200b9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_17200b9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_17200b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);