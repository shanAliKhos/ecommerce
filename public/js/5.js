(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Support.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      message: null
    };
  },
  methods: {
    send: function send(e) {
      alert('ok'); // e.preventDefault();
      // if (this.message == '') {
      //     return;
      // }
      // this.$emit('send', this.message);
      // this.message = '';
    }
  },
  mounted: function mounted() {
    var chatModal = document.querySelector('.chat-modal');
    var chatServices = document.querySelector('.chat-services');
    var showChat = document.querySelector('.show-chat');
    var closeChat = document.querySelector('.close-chat');
    showChat.addEventListener('click', function () {
      chatModal.classList.add('show');
      showChat.classList.add('hidden');
      setTimeout(function () {
        chatServices.classList.add('expand');
      }, 500);
    });
    closeChat.addEventListener('click', function () {
      setTimeout(function () {
        showChat.classList.remove('hidden');
      }, 820);
      chatServices.classList.remove('expand');
      setTimeout(function () {
        chatModal.classList.remove('show');
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-services[data-v-0b6b5cda]{\n  transition: .5s;\n  max-height: 0;\n}\n.chat-services.expand[data-v-0b6b5cda]{\n  max-height: 350px;\n}\n.message[data-v-0b6b5cda] {\n  max-width: 250px;\n}\n.chat-modal[data-v-0b6b5cda]{\n  transition: .5s;\n  opacity: 0;\n  transform: translateX(500px);\n}\n.chat-modal.show[data-v-0b6b5cda]{\n  opacity: 1;\n  transform: translateX(0);\n}\n@-webkit-keyframes animateModal-data-v-0b6b5cda {\nfrom{\n    transform: translateX(200px) opacity(0);\n}\nto{\n    transform: translateX(0) opacity(1);\n}\n}\n@keyframes animateModal-data-v-0b6b5cda {\nfrom{\n    transform: translateX(200px) opacity(0);\n}\nto{\n    transform: translateX(0) opacity(1);\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=template&id=0b6b5cda&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Support.vue?vue&type=template&id=0b6b5cda&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "fixed bottom-0 right-0 flex flex-col items-end z-30 w-auto"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "chat-modal mr-5 flex flex-col mb-5 shadow-lg  w-full  z-0"
        },
        [
          _c(
            "div",
            {
              staticClass:
                " z-30  close-chat bg-red-500 hover:bg-red-600 text-white mb-1 w-10 flex justify-center items-center px-2 py-1 rounded self-end cursor-pointer"
            },
            [
              _c(
                "svg",
                {
                  staticClass: "bi bi-x",
                  attrs: {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      d:
                        "M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      "fill-rule": "evenodd",
                      d:
                        "M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: " z-30 relative bg-white" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.message,
                  expression: "message"
                }
              ],
              staticClass:
                "pl-4 pr-16 py-2 border border-green-500 focus:outline-none w-full",
              attrs: {
                type: "text",
                name: "message",
                placeholder: "ketik pesan anda"
              },
              domProps: { value: _vm.message },
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.send($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.message = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "absolute right-0 bottom-0 text-green-600 bg-white hover:text-green-500 m-1 px-3 py-1 w-auto transistion-color duration-100 focus:outline-none",
                on: { click: _vm.send }
              },
              [_vm._v("Send")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            " z-30 show-chat mx-10 mb-6 mt-4 text-green-500 hover:text-green-600 flex justify-center items-center cursor-pointer "
        },
        [
          _c(
            "svg",
            {
              staticClass: "bi bi-chat-text-fill",
              attrs: {
                width: "3em",
                height: "3em",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  d:
                    "M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"
                }
              })
            ]
          )
        ]
      )
    ]
  )
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
          " z-30 flex justify-between items-center text-white p-2 bg-green-500 border shadow-lg mr-5 w-full"
      },
      [
        _c("div", { staticClass: "flex items-center" }, [
          _c("img", {
            staticClass: "rounded-full w-8 h-8 mr-1",
            attrs: {
              src:
                "https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png",
              alt: "picture"
            }
          }),
          _vm._v(" "),
          _c("h2", { staticClass: "font-semibold tracking-wider" }, [
            _vm._v("HartDev")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center justify-center" }, [
          _c("small", { staticClass: "mr-1" }, [_vm._v("online")]),
          _vm._v(" "),
          _c("div", { staticClass: "rounded-full w-2 h-2 bg-white" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          " z-30 flex flex-col bg-gray-200 px-2 chat-services overflow-auto"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "chat bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3"
          },
          [_vm._v("\r\n          apa ada yang bisa saya bantu ?\r\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3"
          },
          [
            _vm._v(
              "\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ratione!\r\n        "
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Messenger/Support.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Messenger/Support.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Support_vue_vue_type_template_id_0b6b5cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Support.vue?vue&type=template&id=0b6b5cda&scoped=true& */ "./resources/js/Pages/Messenger/Support.vue?vue&type=template&id=0b6b5cda&scoped=true&");
/* harmony import */ var _Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Support.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Messenger/Support.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Support_vue_vue_type_style_index_0_id_0b6b5cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css& */ "./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Support_vue_vue_type_template_id_0b6b5cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Support_vue_vue_type_template_id_0b6b5cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b6b5cda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Messenger/Support.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Messenger/Support.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/Support.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Support.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_style_index_0_id_0b6b5cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=style&index=0&id=0b6b5cda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_style_index_0_id_0b6b5cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_style_index_0_id_0b6b5cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_style_index_0_id_0b6b5cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_style_index_0_id_0b6b5cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Messenger/Support.vue?vue&type=template&id=0b6b5cda&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/Support.vue?vue&type=template&id=0b6b5cda&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_template_id_0b6b5cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Support.vue?vue&type=template&id=0b6b5cda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Support.vue?vue&type=template&id=0b6b5cda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_template_id_0b6b5cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_template_id_0b6b5cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);