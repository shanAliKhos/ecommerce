(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[240],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ecomerce_shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Ecomerce/shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation */ "./resources/js/Pages/Messenger/Conversation.vue");
/* harmony import */ var _ContactsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactsList */ "./resources/js/Pages/Messenger/ContactsList.vue");
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Ecomerce_shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    Conversation: _Conversation__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContactsList: _ContactsList__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      selectedContact: null,
      messages: [],
      contacts: []
    };
  },
  methods: {
    startConversationWith: function startConversationWith(contact) {
      var _this = this;

      this.updateUnreadCount(contact, true);
      axios.get("/conversation/".concat(contact.id)).then(function (response) {
        _this.messages = response.data;
        _this.selectedContact = contact;
      });
    },
    saveNewMessage: function saveNewMessage(message) {
      this.messages.push(message);
    },
    hanleIncoming: function hanleIncoming(message) {
      if (this.selectedContact && message.from == this.selectedContact.id) {
        this.saveNewMessage(message);
        alert('ok');
        return;
      }

      this.updateUnreadCount(message.from_contact, false);
    },
    updateUnreadCount: function updateUnreadCount(contact, reset) {
      this.contacts = this.contacts.map(function (single) {
        if (single.id !== contact.id) {
          return single;
        }

        if (reset) single.unread = 0;else single.unread += 1;
        return single;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    Echo["private"]("messages.".concat(this.user.id)).listen('NewMessage', function (e) {
      _this2.hanleIncoming(e.message);
    });
    axios.get('/contacts').then(function (response) {
      _this2.contacts = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nSyntaxError: Unexpected token (60:8)\n    at _class.pp$4.raise (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2927:15)\n    at _class.pp.unexpected (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:698:10)\n    at _class.pp.expect (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:692:28)\n    at _class.pp$3.parseObj (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2563:14)\n    at _class.pp$3.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2302:19)\n    at _class.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\dynamic-import\\index.js:77:117)\n    at _class.pp$3.parseExprSubscripts (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2129:21)\n    at _class.pp$3.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2106:19)\n    at _class.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\private-class-elements\\index.js:122:54)\n    at _class.pp$3.parseExprOps (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2041:21)\n    at _class.pp$3.parseMaybeConditional (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2024:21)\n    at _class.pp$3.parseMaybeAssign (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1997:21)\n    at _class.pp$3.parsePropertyValue (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2630:89)\n    at _class.pp$3.parseProperty (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2621:10)\n    at _class.pp$3.parseObj (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2567:23)\n    at _class.pp$3.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2302:19)\n    at _class.parseExprAtom (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\dynamic-import\\index.js:77:117)\n    at _class.pp$3.parseExprSubscripts (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2129:21)\n    at _class.pp$3.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2106:19)\n    at _class.parseMaybeUnary (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\private-class-elements\\index.js:122:54)\n    at _class.pp$3.parseExprOps (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2041:21)\n    at _class.pp$3.parseMaybeConditional (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2024:21)\n    at _class.pp$3.parseMaybeAssign (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1997:21)\n    at _class.pp$3.parseMaybeAssign (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:2010:25)\n    at _class.pp$3.parseExpression (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:1963:21)\n    at _class.pp$1.parseStatement (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:886:47)\n    at _class.parseStatement (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\lib\\dynamic-import\\index.js:65:118)\n    at _class.pp$1.parseTopLevel (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:755:23)\n    at _class.parse (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:555:17)\n    at Function.parse (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\node_modules\\acorn\\dist\\acorn.js:578:37)\n    at Object.parse (C:\\laragon\\www\\ecommerce\\node_modules\\acorn-node\\index.js:30:28)\n    at parse (C:\\laragon\\www\\ecommerce\\node_modules\\detective\\index.js:22:18)\n    at Function.exports.find (C:\\laragon\\www\\ecommerce\\node_modules\\detective\\index.js:47:15)\n    at module.exports (C:\\laragon\\www\\ecommerce\\node_modules\\detective\\index.js:26:20)\n    at createModule (C:\\laragon\\www\\ecommerce\\node_modules\\tailwindcss\\lib\\lib\\getModuleDependencies.js:21:43)\n    at getModuleDependencies (C:\\laragon\\www\\ecommerce\\node_modules\\tailwindcss\\lib\\lib\\getModuleDependencies.js:29:22)");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true& ***!
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
    { staticClass: "chat-app" },
    [
      _c("ContactsList", {
        attrs: { contacts: _vm.contacts },
        on: { selected: _vm.startConversationWith }
      }),
      _vm._v(" "),
      _c("Conversation", {
        attrs: { contact: _vm.selectedContact, messages: _vm.messages },
        on: { new: _vm.saveNewMessage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Messenger/MessengerApp.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Messenger/MessengerApp.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessengerApp_vue_vue_type_template_id_2efac8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true& */ "./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true&");
/* harmony import */ var _MessengerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessengerApp.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MessengerApp_vue_vue_type_style_index_0_id_2efac8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css& */ "./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MessengerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessengerApp_vue_vue_type_template_id_2efac8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MessengerApp_vue_vue_type_template_id_2efac8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2efac8da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Messenger/MessengerApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessengerApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_style_index_0_id_2efac8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=style&index=0&id=2efac8da&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_style_index_0_id_2efac8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_style_index_0_id_2efac8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_style_index_0_id_2efac8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_style_index_0_id_2efac8da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_template_id_2efac8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Messenger/MessengerApp.vue?vue&type=template&id=2efac8da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_template_id_2efac8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessengerApp_vue_vue_type_template_id_2efac8da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);