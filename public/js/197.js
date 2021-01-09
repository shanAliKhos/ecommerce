(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Conversation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessagesFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessagesFeed */ "./resources/js/Pages/Messenger/MessagesFeed.vue");
/* harmony import */ var _MessageComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageComposer */ "./resources/js/Pages/Messenger/MessageComposer.vue");
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
  props: {
    contact: {
      type: Object,
      "default": null
    },
    messages: {
      type: Array,
      "default": []
    }
  },
  methods: {
    sendMessage: function sendMessage(text) {
      var _this = this;

      if (!this.contact) {
        return;
      }

      axios.post('/conversation/send', {
        contact_id: this.contact.id,
        text: text
      }).then(function (response) {
        _this.$emit('new', response.data);
      });
    }
  },
  components: {
    MessagesFeed: _MessagesFeed__WEBPACK_IMPORTED_MODULE_0__["default"],
    MessageComposer: _MessageComposer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nSyntaxError: Unexpected token (37:38)\n    at _class.pp$4.raise (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2927:15)\n    at _class.pp.unexpected (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:698:10)\n    at _class.pp$3.parseIdent (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2878:12)\n    at _class.parseIdent (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\class-fields\\index.js:63:47)\n    at _class.parseIdent (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\static-class-features\\index.js:132:55)\n    at _class.pp$2.parseBindingAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1776:17)\n    at _class.pp$2.parseMaybeDefault (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1811:25)\n    at _class.pp$2.parseBindingList (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1796:25)\n    at _class.pp$3.parseMethod (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2714:24)\n    at _class.pp$3.parsePropertyValue (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2636:25)\n    at _class.pp$3.parseProperty (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2621:10)\n    at _class.pp$3.parseObj (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2567:23)\n    at _class.pp$3.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2302:19)\n    at _class.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\dynamic-import\\index.js:77:117)\n    at _class.pp$3.parseExprSubscripts (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2129:21)\n    at _class.pp$3.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2106:19)\n    at _class.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\private-class-elements\\index.js:122:54)\n    at _class.pp$3.parseExprOps (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2041:21)\n    at _class.pp$3.parseMaybeConditional (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2024:21)\n    at _class.pp$3.parseMaybeAssign (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1997:21)\n    at _class.pp$3.parsePropertyValue (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2630:89)\n    at _class.pp$3.parseProperty (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2621:10)\n    at _class.pp$3.parseObj (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2567:23)\n    at _class.pp$3.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2302:19)\n    at _class.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\dynamic-import\\index.js:77:117)\n    at _class.pp$3.parseExprSubscripts (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2129:21)\n    at _class.pp$3.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2106:19)\n    at _class.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\private-class-elements\\index.js:122:54)\n    at _class.pp$3.parseExprOps (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2041:21)\n    at _class.pp$3.parseMaybeConditional (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2024:21)\n    at _class.pp$3.parseMaybeAssign (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1997:21)\n    at _class.pp$3.parsePropertyValue (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2630:89)\n    at _class.pp$3.parseProperty (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2621:10)\n    at _class.pp$3.parseObj (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2567:23)\n    at _class.pp$3.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2302:19)\n    at _class.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\dynamic-import\\index.js:77:117)");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=template&id=f519a8f0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/Conversation.vue?vue&type=template&id=f519a8f0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "conversation" },
    [
      _c("h1", [
        _vm._v(
          _vm._s(
            _vm.contact
              ? _vm.contact.name
              : "Start Covesation by selecting contact"
          )
        )
      ]),
      _vm._v(" "),
      _c("MessagesFeed", {
        attrs: { contact: _vm.contact, messages: _vm.messages }
      }),
      _vm._v(" "),
      _vm.contact
        ? _c("MessageComposer", { on: { send: _vm.sendMessage } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Messenger/Conversation.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Messenger/Conversation.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Conversation_vue_vue_type_template_id_f519a8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conversation.vue?vue&type=template&id=f519a8f0&scoped=true& */ "./resources/js/Pages/Messenger/Conversation.vue?vue&type=template&id=f519a8f0&scoped=true&");
/* harmony import */ var _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Messenger/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Conversation_vue_vue_type_style_index_0_id_f519a8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css& */ "./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conversation_vue_vue_type_template_id_f519a8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Conversation_vue_vue_type_template_id_f519a8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f519a8f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Messenger/Conversation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Messenger/Conversation.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/Conversation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_id_f519a8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=style&index=0&id=f519a8f0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_id_f519a8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_id_f519a8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_id_f519a8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_id_f519a8f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Messenger/Conversation.vue?vue&type=template&id=f519a8f0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/Conversation.vue?vue&type=template&id=f519a8f0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_f519a8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=template&id=f519a8f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/Conversation.vue?vue&type=template&id=f519a8f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_f519a8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_f519a8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);