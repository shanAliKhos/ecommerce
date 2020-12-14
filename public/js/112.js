(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['IsAtTop'],
  data: function data() {
    return {
      CartTotalPricess: 0
    };
  },
  methods: {
    store: function store(Item) {
      var _this = this;

      var self = this;
      self.$inertia.post(route('cart.store'), Item, {
        // preserveState: true,
        // preserveScroll: true, 
        onSuccess: function onSuccess() {
          if (Object.keys(_this.$page.errors).length === 0) {
            _this.$root.$emit('item-is-added-to-cart');
          }
        }
      });
    },
    update: function update(Items) {
      self = this;
      this.$inertia.put(route('cart.update', 'update'), Items, {
        preserveState: true,
        preserveScroll: true
      });
    },
    destory: function destory(Index) {
      var self = this;
      self.$swal.fire({
        title: 'Are you sure?',
        text: "You will be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          self.$inertia["delete"](route('cart.destroy', Index), {
            preserveState: true,
            preserveScroll: true
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    self = this;
    this.$root.$on('Add-To-Cart', function (Item) {
      _this2.store(Item);
    });
    this.$root.$on('destory-this-item', function (Item) {
      _this2.destory(Item);
    });
    this.$root.$on('update-cart', function (Items) {
      _this2.update(Items);
    });
  },
  computed: {
    CountCartItems: function CountCartItems() {
      var Qty = this.$page.Cart.Items ? this.$page.Cart.Items.reduce(function (TotalItems, Item) {
        return TotalItems + Item.Qty;
      }, 0) : 0;
      return Qty;
    },
    CartTotalPrice: function CartTotalPrice() {
      var sum = this.$page.Cart.Items ? this.$page.Cart.Items.reduce(function (TotalPrice, Item) {
        return TotalPrice + Item.Qty * Item.price;
      }, 0) : 0;
      return sum;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=template&id=22b94442&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=template&id=22b94442& ***!
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
  return _c(
    "inertia-link",
    {
      staticClass:
        "border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 ml-8 group",
      attrs: { "preserve-scroll": "", href: _vm.route("cart.index") }
    },
    [
      _c("span", {
        staticClass:
          "transition duration-500 ease-in-out  bg-icon-cart bg-contain bg-center bg-no-repeat  block hover:bg-icon-cart-hover",
        class: _vm.IsAtTop
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass:
            "text-white border-2 border-white shadow  absolute py-auto  px-2 my-0 mx-1 rounded-full",
          class: {
            "bg-v-green": _vm.CountCartItems > 0,
            "bg-red-400": _vm.CountCartItems === 0
          }
        },
        [_vm._v(_vm._s(_vm.CountCartItems))]
      )
    ]
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/Pages/Ecomerce/Cart/NavCart.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/NavCart.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavCart_vue_vue_type_template_id_22b94442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavCart.vue?vue&type=template&id=22b94442& */ "./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=template&id=22b94442&");
/* harmony import */ var _NavCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavCart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavCart_vue_vue_type_template_id_22b94442___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavCart_vue_vue_type_template_id_22b94442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/Cart/NavCart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavCart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=template&id=22b94442&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=template&id=22b94442& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCart_vue_vue_type_template_id_22b94442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavCart.vue?vue&type=template&id=22b94442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/Cart/NavCart.vue?vue&type=template&id=22b94442&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCart_vue_vue_type_template_id_22b94442___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavCart_vue_vue_type_template_id_22b94442___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);