(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partials/AppHeader */ "./resources/js/Pages/Ecomerce/shared/Partials/AppHeader.vue");
/* harmony import */ var _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/AppFooter */ "./resources/js/Pages/Ecomerce/shared/Partials/AppFooter.vue");
/* harmony import */ var _Shared_Flash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Shared/Flash */ "./resources/js/Pages/Shared/Flash.vue");
//
//
//
//
//
//
//
//
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
    AppHeader: _Partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppFooter: _Partials_AppFooter__WEBPACK_IMPORTED_MODULE_1__["default"],
    Flash: _Shared_Flash__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      categories: false,
      subcategory: false
    };
  },
  computed: {
    path: function path() {
      return window.location.pathname;
    }
  },
  methods: {
    logout: function logout() {
      axios.post('/logout').then(function (response) {
        window.location = '/';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Category */ "./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue");
//
//
//
//
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
    Category: _components_Category__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    Categories: function Categories() {
      return this.$page.Categories;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Product/Product */ "./resources/js/Pages/Ecomerce/shared/Product/Product.vue");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['ProductsOnSale', 'Items'],
  components: {
    SaleProduct: _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: {
    SaleProducts: function SaleProducts() {
      var SaleProduct = this.ProductsOnSale;

      if (this.$page.SaleProducts) {
        SaleProduct = this.$page.SaleProducts;
      }

      return SaleProduct;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['Category'],
  computed: {
    CategoryImage: function CategoryImage() {
      return this.Category.image.replace("public", "storage");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/AppLayout */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue");
/* harmony import */ var _shared_Slider_SaleProductsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Slider/SaleProductsSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue");
/* harmony import */ var _shared_Slider_CategoriesSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/Slider/CategoriesSlider */ "./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue");
/* harmony import */ var _components_FeaturedProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FeaturedProducts */ "./resources/js/Pages/Ecomerce/welcome/components/FeaturedProducts.vue");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Banner */ "./resources/js/Pages/Ecomerce/welcome/components/Banner.vue");
/* harmony import */ var _components_MultiProductsSliders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MultiProductsSliders */ "./resources/js/Pages/Ecomerce/welcome/components/MultiProductsSliders.vue");
/* harmony import */ var _components_BlogPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BlogPost */ "./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Welcome'
  },
  layout: _shared_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    // CategoriesSlider,
    SaleProductsSlider: _shared_Slider_SaleProductsSlider__WEBPACK_IMPORTED_MODULE_1__["default"],
    FeaturedProducts: _components_FeaturedProducts__WEBPACK_IMPORTED_MODULE_3__["default"],
    Banner: _components_Banner__WEBPACK_IMPORTED_MODULE_4__["default"],
    MultiProductsSliders: _components_MultiProductsSliders__WEBPACK_IMPORTED_MODULE_5__["default"],
    BlogPost: _components_BlogPost__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Flash.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Flash.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    Alert: function Alert() {
      if (this.$page.flash.success) {
        this.$toasted.success(this.$page.flash.success, {
          theme: "bubble",
          position: "bottom-center",
          duration: 2000
        });
      }

      if (this.$page.flash.error) {
        this.$toasted.error(this.$page.flash.error, {
          theme: "bubble",
          position: "bottom-center",
          duration: 2000
        });
      }

      if (this.$page.flash.info) {
        this.$toasted.info(this.$page.flash.info, {
          theme: "bubble",
          position: "bottom-center",
          duration: 2000
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("app-header"),
      _vm._v(" "),
      _c("main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("app-footer"),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modal", multiple: "" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=template&id=07b6e0e8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=template&id=07b6e0e8& ***!
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
  return _c("section", { staticClass: "categories" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "categories__slider owl-carousel" },
          _vm._l(_vm.Categories, function(Category, CategoryIndex) {
            return CategoryIndex > 0
              ? _c(
                  "div",
                  { key: CategoryIndex, staticClass: "col-lg-3" },
                  [_c("Category", { attrs: { Category: Category } })],
                  1
                )
              : _vm._e()
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=template&id=d4f3808a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=template&id=d4f3808a& ***!
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
  return _c(
    "div",
    { staticClass: "product__discount  " },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "Carousel",
        {
          attrs: {
            loop: true,
            margin: 10,
            items: _vm.Items ? _vm.Items : 3,
            dots: true,
            autoHeight: false,
            nav: false,
            autoplay: true
          }
        },
        _vm._l(_vm.SaleProducts, function(Product, index) {
          return _c("sale-product", { key: index, attrs: { Product: Product } })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "section-title product__discount__title" },
      [_c("h2", [_vm._v("Sale Off")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=template&id=6461fe78&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=template&id=6461fe78& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "categories__item",
      style:
        "background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('" +
        _vm.CategoryImage +
        "');"
    },
    [
      _c("img", { attrs: { src: _vm.CategoryImage } }),
      _vm._v(" "),
      _c("h5", [_vm._v("shan")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "main" } }, [
      _c(
        "div",
        {
          staticClass: "container",
          attrs: { "x-data": "", "x-init": "collectionSliders" }
        },
        [
          _c(
            "div",
            {
              staticClass: "hero-slider relative",
              attrs: {
                "x-data": "",
                "x-init":
                  "new Glide('.hero-slider', { autoplay: 3000, type: 'carousel' }).mount()"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "glide__track",
                  attrs: { "data-glide-el": "track" }
                },
                [
                  _c("div", { staticClass: "glide__slides" }, [
                    _c("div", { staticClass: "glide__slide" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-left sm:bg-center bg-no-repeat bg-cover",
                          staticStyle: {
                            "background-image": "url(./img/hero-slide-01.jpg)"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 "
                            },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Elyssi New Men’s Outdoor Collection\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-lg mt-8",
                                  attrs: { href: "/collection-grid" }
                                },
                                [_vm._v("Know more")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "glide__slide" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-left sm:bg-center bg-no-repeat bg-cover",
                          staticStyle: {
                            "background-image": "url(./img/hero-slide-02.jpg)"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 "
                            },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Blake by Elyssi "
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    " 30% off\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-lg mt-8",
                                  attrs: { href: "/collection-grid" }
                                },
                                [_vm._v("Know more")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "glide__slide" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-left sm:bg-center bg-no-repeat bg-cover",
                          staticStyle: {
                            "background-image": "url(./img/hero-slide-03.jpg)"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 "
                            },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Hoodie your way! "
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    " For Men\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-lg mt-8",
                                  attrs: { href: "/collection-grid" }
                                },
                                [_vm._v("Know more")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "glide__slide" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-left sm:bg-center bg-no-repeat bg-cover",
                          staticStyle: {
                            "background-image": "url(./img/hero-slide-04.jpg)"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 "
                            },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Match and play Women’s Dresses\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-lg mt-8",
                                  attrs: { href: "/collection-grid" }
                                },
                                [_vm._v("Know more")]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "glide__slide" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-left sm:bg-center bg-no-repeat bg-cover",
                          staticStyle: {
                            "background-image": "url(./img/hero-slide-05.jpg)"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 "
                            },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Back to school, "
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    " the stylish way\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-lg mt-8",
                                  attrs: { href: "/collection-grid" }
                                },
                                [_vm._v("Know more")]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "absolute bottom-0 inset-x-0 mb-6 z-30 text-center",
                  attrs: { "data-glide-el": "controls[nav]" }
                },
                [
                  _c("span", {
                    staticClass:
                      "inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer",
                    attrs: { "data-glide-dir": "=0" }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass:
                      "inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer",
                    attrs: { "data-glide-dir": "=1" }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass:
                      "inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer",
                    attrs: { "data-glide-dir": "=2" }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass:
                      "inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer",
                    attrs: { "data-glide-dir": "=3" }
                  }),
                  _vm._v(" "),
                  _c("span", {
                    staticClass:
                      "inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full focus:outline-none cursor-pointer",
                    attrs: { "data-glide-dir": "=4" }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-col md:flex-row py-20 md:py-24" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
                },
                [
                  _c("div", [
                    _c("img", {
                      staticClass: "w-auto h-12",
                      attrs: {
                        src:
                          "https://d33wubrfki0l68.cloudfront.net/3c5b77be07c217ce310e179b30e44da59d358fb8/1fd98/assets/img/icons/icon-shipping.svg",
                        alt: "icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
                    _c(
                      "h3",
                      {
                        staticClass:
                          "font-hksemibold text-primary text-xl tracking-wide"
                      },
                      [_vm._v("\n                        Free shipping")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-base tracking-wide"
                      },
                      [
                        _vm._v(
                          "\n                        On all orders over $30"
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
                },
                [
                  _c("div", [
                    _c("img", {
                      staticClass: "w-auto h-12",
                      attrs: {
                        src:
                          "https://d33wubrfki0l68.cloudfront.net/2e7e83f4e008c5efc2301e9ca7dde06e98c9a2b3/0b6dc/assets/img/icons/icon-support.svg",
                        alt: "icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
                    _c(
                      "h3",
                      {
                        staticClass:
                          "font-hksemibold text-primary text-xl tracking-wide"
                      },
                      [_vm._v("\n                        Always available")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-base tracking-wide"
                      },
                      [
                        _vm._v(
                          "\n                        24/7 call center available"
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
                },
                [
                  _c("div", [
                    _c("img", {
                      staticClass: "w-auto h-12",
                      attrs: {
                        src:
                          "https://d33wubrfki0l68.cloudfront.net/c5fe62fc1adbb5e1e57a703b0f916a2ff38b4f77/efebf/assets/img/icons/icon-return.svg",
                        alt: "icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ml-6 mt-3 lg:mt-0" }, [
                    _c(
                      "h3",
                      {
                        staticClass:
                          "font-hksemibold text-primary text-xl tracking-wide"
                      },
                      [_vm._v("\n                        Free returns")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-base tracking-wide"
                      },
                      [
                        _vm._v(
                          "\n                        30 days free return policy"
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "pb-20 md:pb-24 lg:pb-32 flex flex-wrap justify-between"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "lg:w-1/2 px-10 mx-auto lg:mx-0 text-center lg:text-left"
                },
                [
                  _c(
                    "div",
                    { staticClass: "lg:w-3/4 xl:w-2/3 lg:pt-10 pb-4 md:pb-10" },
                    [
                      _c(
                        "h1",
                        {
                          staticClass:
                            "font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"
                        },
                        [
                          _vm._v(
                            "\n                        Trending Elyssi Collections\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "font-hkregular text-secondary-lighter text-lg pt-4"
                        },
                        [
                          _vm._v(
                            "\n                        Checkout our newest trends this coming season\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full lg:w-1/2 mt-6 sm:mt-10 lg:mt-0" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "px-10 h-56 sm:h-76 bg-left sm:bg-center bg-no-repeat bg-cover relative",
                      staticStyle: {
                        "background-image": "url(./img/collection-01.jpg)"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-2/3 absolute inset-0 px-6 md:px-10 py-14 "
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl"
                            },
                            [
                              _vm._v(
                                "\n                            Passion Pearl "
                              ),
                              _c("br"),
                              _vm._v(" Collection\n                        ")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "flex items-center pt-5 group",
                              attrs: { href: "/collection-list" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "bg-white rounded-full h-8 w-8 flex items-center justify-center"
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "font-hksemibold transition-colors text-primary group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Get it now"
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full lg:w-1/2 lg:px-10 mt-8 sm:mt-10" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-left sm:bg-center bg-no-repeat bg-cover relative h-56 sm:h-76 lg:h-68",
                      staticStyle: {
                        "background-image": "url(./img/collection-02.jpg)"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "md:w-2/3 absolute inset-0 px-6 md:px-10 py-14"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl"
                            },
                            [
                              _vm._v(
                                "\n                            Hoodie your way! For Men\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "flex items-center pt-5 group",
                              attrs: { href: "/collection-list" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center"
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1"
                                },
                                [
                                  _vm._v(
                                    "\n                                Get it now"
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-left sm:bg-center bg-no-repeat bg-cover relative h-56 sm:h-76 lg:h-68 mt-8 sm:mt-10",
                      staticStyle: {
                        "background-image": "url(./img/collection-03.jpg)"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-2/3 absolute inset-0 px-6 md:px-10 py-14"
                        },
                        [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl"
                            },
                            [
                              _vm._v(
                                "\n                            Anabelle Purses by Elyssi\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "flex items-center pt-5 group",
                              attrs: { href: "/collection-list" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center"
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1"
                                },
                                [
                                  _vm._v(
                                    "\n                                Get it now"
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-full lg:w-1/2 px-10 h-82 sm:h-94 lg:h-96 bg-left sm:bg-center bg-no-repeat bg-cover relative mt-8 sm:mt-10",
                  staticStyle: {
                    "background-image": "url(./img/collection-shoes.jpg)"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-2/3 absolute inset-0 px-6 md:px-10 py-14 sm:py-16"
                    },
                    [
                      _c(
                        "h3",
                        {
                          staticClass:
                            "font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl"
                        },
                        [
                          _vm._v("\n                        W.W. Shoes "),
                          _c("br"),
                          _vm._v(" by Elyssi\n                    ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "flex items-center pt-5 group",
                          attrs: { href: "/collection-list" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center"
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1"
                            },
                            [_vm._v("\n                            Get it now")]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pb-20 md:pb-24 lg:pb-32" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0"
              },
              [
                _c("div", { staticClass: "text-center sm:text-left" }, [
                  _c(
                    "h2",
                    {
                      staticClass:
                        "font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"
                    },
                    [
                      _vm._v(
                        "\n                        Elyssi’s trends\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "font-hkregular text-secondary-lighter text-lg md:text-xl pt-2"
                    },
                    [
                      _vm._v(
                        "\n                        Be styling, no matter the season!\n                    "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-hkregular text-xl text-primary",
                    attrs: { href: "/collection-grid" }
                  },
                  [
                    _vm._v(
                      "\n                    Show more\n                    "
                    ),
                    _c("i", {
                      staticClass:
                        "bx bx-chevron-right text-primary transition-colors group-hover:text-primary-light pl-3 pt-2 text-xl"
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "product-slider relative",
                attrs: { "x-data": "", "x-init": "productSlider" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "glide__track",
                    attrs: { "data-glide-el": "track" }
                  },
                  [
                    _c("div", { staticClass: "pt-12 relative glide__slides" }, [
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image":
                                      "url(./img/backpack-2.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-v-green font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            New\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Woodie Blake"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$115.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/purse-1.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-v-blue font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            trend\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Beautiful Brown"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$55.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image":
                                      "url(./img/sunglass-3.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-primary-light font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            20%\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Coffee Cream"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$65.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/watch-1.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-v-red font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Hot\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Submarine Watch"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$120.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image":
                                      "url(./img/backpack-2.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-v-green font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            New\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Woodie Blake"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$115.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-1.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-v-blue font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            trend\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Cocktail Vans"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$33.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-4.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-primary-light font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            20%\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Siberian Boots"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$67.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative group glide__slide" },
                        [
                          _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "relative rounded flex justify-center items-center"
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/watch-3.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "text-v-red font-hkbold text-sm uppercase tracking-wide"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Hot\n                                        "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/cart" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/product" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                        attrs: { href: "/account/wishlist/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "flex justify-between items-center pt-6",
                                attrs: { href: "/product" }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h3",
                                    {
                                      staticClass:
                                        "font-hkregular text-base text-secondary"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Silver One"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "bx bxs-star text-primary"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$137.0")]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { attrs: { "data-glide-el": "controls" } }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
                      attrs: { "data-glide-dir": "<" }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
                      attrs: { "data-glide-dir": ">" }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
                      })
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-full relative" }, [
        _c("div", {
          staticClass:
            "absolute inset-y-0 right-0 w-13/14 bg-center bg-no-repeat bg-cover",
          staticStyle: { "background-image": "url(./img/bg-products.png)" }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-2/3 md:max-w-screen-sm lg:w-5/6 lg:max-w-full xl:w-5/6 xxl:max-w-screen-xxl mx-auto lg:ml-auto lg:mr-10 xl:mr-16 xxl:mx-auto relative z-10"
          },
          [
            _c("div", { staticClass: "py-16 flex" }, [
              _c(
                "div",
                {
                  staticClass:
                    "hidden lg:inline-block w-3/4 bg-white py-12 px-4"
                },
                [
                  _c("div", { staticClass: "collection-slider" }, [
                    _c(
                      "div",
                      {
                        staticClass: "glide__track",
                        attrs: { "data-glide-el": "track" }
                      },
                      [
                        _c("div", { staticClass: "glide__slides" }, [
                          _c(
                            "div",
                            { staticClass: "glide__slide relative group" },
                            [
                              _c("div", { staticClass: "relative rounded" }, [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-1.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [_vm._v("New")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between items-center pt-6"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-hkregular text-base text-secondary"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Cocktail Vans"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex items-center" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$33.0")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "glide__slide relative group" },
                            [
                              _c("div", { staticClass: "relative rounded" }, [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-4.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [_vm._v("Hot")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between items-center pt-6"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-hkregular text-base text-secondary"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Siberian Boots"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex items-center" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$67.0")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "glide__slide relative group" },
                            [
                              _c("div", { staticClass: "relative rounded" }, [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-2.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [_vm._v("Trend")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between items-center pt-6"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-hkregular text-base text-secondary"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                WW Vans"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex items-center" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$35.0")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "glide__slide relative group" },
                            [
                              _c("div", { staticClass: "relative rounded" }, [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-1.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [_vm._v("New")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between items-center pt-6"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-hkregular text-base text-secondary"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Cocktail Vans"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex items-center" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$33.0")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "glide__slide relative group" },
                            [
                              _c("div", { staticClass: "relative rounded" }, [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-4.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [_vm._v("Hot")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between items-center pt-6"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-hkregular text-base text-secondary"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Siberian Boots"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex items-center" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$67.0")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "glide__slide relative group" },
                            [
                              _c("div", { staticClass: "relative rounded" }, [
                                _c("div", {
                                  staticClass:
                                    "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                  staticStyle: {
                                    "background-image": "url(./img/shoes-2.png)"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [_vm._v("Trend")]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                            alt: "icon cart"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                            alt: "icon search"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ",
                                        attrs: { href: "/" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "h-6 w-6",
                                          attrs: {
                                            src:
                                              "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                            alt: "icon heart"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex justify-between items-center pt-6"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-hkregular text-base text-secondary"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                WW Vans"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex items-center" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            }),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "bx bxs-star text-primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "font-hkregular text-sm text-secondary ml-2"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    45"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-hkbold text-primary text-xl"
                                    },
                                    [_vm._v("$35.0")]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full lg:w-1/3 lg:pl-6 xl:pl-8" }, [
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "h2",
                    {
                      staticClass:
                        "font-hkbold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"
                    },
                    [
                      _vm._v(
                        "\n                            New season, matching shoes\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "font-hkregular text-secondary-lighter text-lg pt-1"
                    },
                    [
                      _vm._v(
                        "\n                            Featured Collection\n                        "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "relative group" }, [
                  _c("div", {
                    staticClass:
                      "h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14",
                    staticStyle: {
                      "background-image": "url(./img/collection-shoes.jpg)"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group transition-opacity"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide",
                          attrs: { href: "/" }
                        },
                        [
                          _vm._v(
                            "View\n                                All Product"
                          )
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pb-16" }, [
              _c("div", { staticClass: "ml-auto flex justify-between" }, [
                _c("div", { staticClass: "w-full lg:w-1/3 lg:pr-6 xl:pr-8" }, [
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "h2",
                      {
                        staticClass:
                          "font-hkbold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"
                      },
                      [
                        _vm._v(
                          "\n                                Stylish Backpacks, Only For You\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-lg pt-1"
                      },
                      [
                        _vm._v(
                          "\n                                Featured Collection\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative group" }, [
                    _c("div", {
                      staticClass:
                        "h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14 relative",
                      staticStyle: {
                        "background-image": "url(./img/backpack-image-04.jpg)"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden"
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide",
                            attrs: { href: "/" }
                          },
                          [
                            _vm._v(
                              "View\n                                    All Product"
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "hidden lg:block w-3/4 bg-white" }, [
                  _c("div", { staticClass: "py-12 px-4" }, [
                    _c("div", { staticClass: "collection-slider" }, [
                      _c(
                        "div",
                        {
                          staticClass: "glide__track",
                          attrs: { "data-glide-el": "track" }
                        },
                        [
                          _c("div", { staticClass: "glide__slides" }, [
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/backpack-4.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold\n                    text-sm uppercase tracking-wide "
                                    },
                                    [_vm._v("New")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Not Ballerina Blake"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$115.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/backpack-3.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold\n                    text-sm uppercase tracking-wide "
                                    },
                                    [_vm._v("Hot")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Party Blake"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$115.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/backpack-2.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold\n                    text-sm uppercase tracking-wide "
                                    },
                                    [_vm._v("Trend")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Woodie Blake"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$115.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/backpack-4.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold\n                    text-sm uppercase tracking-wide "
                                    },
                                    [_vm._v("New")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Not Ballerina Blake"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$115.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/backpack-3.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold\n                    text-sm uppercase tracking-wide "
                                    },
                                    [_vm._v("Hot")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Party Blake"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$115.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/backpack-2.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold\n                    text-sm uppercase tracking-wide "
                                    },
                                    [_vm._v("Trend")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Woodie Blake"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$115.0")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pb-16" }, [
              _c("div", { staticClass: "ml-0 flex justify-between" }, [
                _c("div", { staticClass: "hidden lg:block w-3/4 bg-white" }, [
                  _c("div", { staticClass: "py-12 px-4" }, [
                    _c("div", { staticClass: "collection-slider" }, [
                      _c(
                        "div",
                        {
                          staticClass: "glide__track",
                          attrs: { "data-glide-el": "track" }
                        },
                        [
                          _c("div", { staticClass: "glide__slides" }, [
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/sunglass-3.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-green font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                    },
                                    [_vm._v("New")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Coffee Cream"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$75.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/sunglass-2.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-red font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                    },
                                    [_vm._v("Hot")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Floral Chick"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$50.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/sunglass-1.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-blue font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                    },
                                    [_vm._v("Trend")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Cat eye"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$75.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/sunglass-3.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-green font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                    },
                                    [_vm._v("New")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Coffee Cream"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$75.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/sunglass-2.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-red font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                    },
                                    [_vm._v("Hot")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Floral Chick"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$50.0")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "glide__slide relative group" },
                              [
                                _c("div", { staticClass: "relative rounded" }, [
                                  _c("div", {
                                    staticClass:
                                      "w-68 h-68 bg-center bg-no-repeat bg-cover",
                                    staticStyle: {
                                      "background-image":
                                        "url(./img/sunglass-1.png)"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-v-blue font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                                    },
                                    [_vm._v("Trend")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass:
                                      "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                              alt: "icon cart"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                              alt: "icon search"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ",
                                          attrs: { href: "/" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "h-6 w-6",
                                            attrs: {
                                              src:
                                                "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                              alt: "icon heart"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-between items-center pt-6"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-hkregular text-base text-secondary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                        Cat eye"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex items-center" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "bx bxs-star text-primary"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "font-hkregular text-sm text-secondary ml-2"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            45\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-hkbold text-primary text-xl"
                                      },
                                      [_vm._v("$75.0")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-full lg:w-1/3 lg:pl-6 xl:pl-8" }, [
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "h2",
                      {
                        staticClass:
                          "font-hkbold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"
                      },
                      [
                        _vm._v(
                          "\n                                Summer? You need chick sunglasses\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "font-hkregular text-secondary-lighter text-lg pt-1"
                      },
                      [
                        _vm._v(
                          "\n                                Featured Collection\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative group" }, [
                    _c("div", {
                      staticClass:
                        "h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14",
                      staticStyle: {
                        "background-image": "url(./img/sunglass-image-03.jpg)"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass:
                        "absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide",
                            attrs: { href: "/" }
                          },
                          [
                            _vm._v(
                              "View\n                                    All Product"
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "pt-16 sm:pt-20 pb-5 sm:pb-12 border-b border-grey-dark"
          },
          [
            _c(
              "h4",
              {
                staticClass:
                  "font-hkregular text-xl text-secondary uppercase text-center"
              },
              [_vm._v("\n                Our community\n            ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex flex-wrap items-center justify-center pt-8 -mx-5"
              },
              [
                _c("div", {
                  staticClass:
                    "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
                  staticStyle: { "background-image": "url(./img/brand-01.png)" }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
                  staticStyle: { "background-image": "url(./img/brand-02.png)" }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
                  staticStyle: { "background-image": "url(./img/brand-03.png)" }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
                  staticStyle: { "background-image": "url(./img/brand-04.png)" }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
                  staticStyle: { "background-image": "url(./img/brand-05.png)" }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass:
                    "bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0",
                  staticStyle: { "background-image": "url(./img/brand-06.png)" }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "py-5 sm:py-16 mt-10 md:mt-16 mb-12 sm:mb-6 md:mb-12 lg:mb-28 relative w-full"
          },
          [
            _c("div", {
              staticClass:
                "bg-left bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 h-76 sm:h-82 md:h-86 lg:h-90 z-20 relative",
              staticStyle: { "background-image": "url(./img/coupon-image.jpg)" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "lg:absolute right-0 bottom-0 bg-right bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 ml-auto h-76 sm:h-82 md:h-86 lg:h-90",
                staticStyle: { "background-image": "url(./img/bg-coupon.png)" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "py-14 sm:py-20 xl:py-24 lg:pr-8 lg:pl-40 xl:pl-76 w-5/6 sm:w-3/5 lg:w-full mx-auto text-center lg:text-left"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "font-hkmedium text-white text-lg md:text-xl uppercase"
                      },
                      [_vm._v("New Arrivals")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h2",
                      {
                        staticClass:
                          "font-butlermedium text-white text-3xl sm:text-4xl md:text-7xl xl:text-5xl pt-5 leading-tight"
                      },
                      [
                        _vm._v(
                          "\n                        Blouses & Jeans Up to 70% Off\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-lg mt-8 md:mt-10",
                        attrs: { href: "/" }
                      },
                      [_vm._v("Get it now")]
                    )
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "pb-20 md:pb-32" }, [
          _c("div", { staticClass: "text-center pb-12 md:pb-0" }, [
            _c(
              "h2",
              {
                staticClass:
                  "font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"
              },
              [
                _vm._v(
                  "\n                    On sale, only today\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass:
                  "font-hkregular text-secondary-lighter text-lg md:text-xl"
              },
              [
                _vm._v(
                  "\n                    Get it while they last!\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "product-slider relative",
              attrs: { "x-data": "", "x-init": "productSlider" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "glide__track",
                  attrs: { "data-glide-el": "track" }
                },
                [
                  _c("div", { staticClass: "pt-12 relative glide__slides" }, [
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/backpack-2.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-v-green font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            New\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Woodie Blake"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$115.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/purse-1.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-v-blue font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            trend\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Beautiful Brown"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$55.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/sunglass-3.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary-light font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            20%\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Coffee Cream"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$65.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/watch-1.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-v-red font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Hot\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Submarine Watch"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$120.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/backpack-2.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-v-green font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            New\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Woodie Blake"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$115.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/shoes-1.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-v-blue font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            trend\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Cocktail Vans"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$33.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/shoes-4.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary-light font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            20%\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Siberian Boots"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$67.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "relative group glide__slide" }, [
                      _c("div", { staticClass: "sm:px-5 lg:px-4" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative rounded flex justify-center items-center"
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-68 h-68 bg-center bg-no-repeat bg-cover",
                              staticStyle: {
                                "background-image": "url(./img/watch-3.png)"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full"
                              },
                              [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-v-red font-hkbold text-sm uppercase tracking-wide"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Hot\n                                        "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "absolute opacity-0 group-hover:opacity-100 flex justify-center items-center"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/cart" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg ",
                                        alt: "icon cart"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3",
                                    attrs: { href: "/product" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg",
                                        alt: "icon search"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ",
                                    attrs: { href: "/account/wishlist/" }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "h-6 w-6",
                                      attrs: {
                                        src:
                                          "https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg",
                                        alt: "icon heart"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "flex justify-between items-center pt-6",
                            attrs: { href: "/product" }
                          },
                          [
                            _c("div", [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "font-hkregular text-base text-secondary"
                                },
                                [
                                  _vm._v(
                                    "\n                                            Silver One"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex items-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    }),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "bx bxs-star text-primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "font-hkregular text-sm text-secondary ml-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    45\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-hkbold text-primary text-xl"
                                },
                                [_vm._v("$137.0")]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { attrs: { "data-glide-el": "controls" } }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
                    attrs: { "data-glide-dir": "<" }
                  },
                  [
                    _c("i", {
                      staticClass:
                        "bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group",
                    attrs: { "data-glide-dir": ">" }
                  },
                  [
                    _c("i", {
                      staticClass:
                        "bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"
                    })
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/Banner.vue?vue&type=template&id=c1889bc6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/components/Banner.vue?vue&type=template&id=c1889bc6& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
            _c("div", { staticClass: "banner__pic shadow-2xl" }, [
              _c("img", { attrs: { src: "img/banner/banner-1.jpg", alt: "" } })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
            _c("div", { staticClass: "banner__pic shadow-2xl" }, [
              _c("img", { attrs: { src: "img/banner/banner-2.jpg", alt: "" } })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue?vue&type=template&id=5cac9113&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue?vue&type=template&id=5cac9113& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "from-blog spad" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "section-title from-blog__title" }, [
              _c("h2", [_vm._v("From The Blog")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row shadow p-2" }, [
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6 " }, [
            _c("div", { staticClass: "blog__item" }, [
              _c("div", { staticClass: "blog__item__pic " }, [
                _c("img", {
                  staticClass: "shadow ",
                  attrs: { src: "img/blog/blog-1.jpg", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog__item__text" }, [
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "fa fa-calendar-o" }),
                    _vm._v(" May 4,2019")
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "fa fa-comment-o" }),
                    _vm._v(" 5")
                  ])
                ]),
                _vm._v(" "),
                _c("h5", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Cooking tips make cooking simple")
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6 " }, [
            _c("div", { staticClass: "blog__item" }, [
              _c("div", { staticClass: "blog__item__pic" }, [
                _c("img", {
                  staticClass: "shadow ",
                  attrs: { src: "img/blog/blog-2.jpg", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog__item__text" }, [
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "fa fa-calendar-o" }),
                    _vm._v(" May 4,2019")
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "fa fa-comment-o" }),
                    _vm._v(" 5")
                  ])
                ]),
                _vm._v(" "),
                _c("h5", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("6 ways to prepare breakfast for 30")
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6 " }, [
            _c("div", { staticClass: "blog__item" }, [
              _c("div", { staticClass: "blog__item__pic" }, [
                _c("img", {
                  staticClass: "shadow",
                  attrs: { src: "img/blog/blog-3.jpg", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog__item__text" }, [
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "fa fa-calendar-o" }),
                    _vm._v(" May 4,2019")
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("i", { staticClass: "fa fa-comment-o" }),
                    _vm._v(" 5")
                  ])
                ]),
                _vm._v(" "),
                _c("h5", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Visit the clean farm in the US")
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat "
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Flash.vue?vue&type=template&id=2fbc3662&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Flash.vue?vue&type=template&id=2fbc3662& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._v("\n    " + _vm._s(_vm.Alert) + "\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=0b5ac64c& */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=template&id=0b5ac64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/AppLayout.vue?vue&type=template&id=0b5ac64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_0b5ac64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesSlider_vue_vue_type_template_id_07b6e0e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesSlider.vue?vue&type=template&id=07b6e0e8& */ "./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=template&id=07b6e0e8&");
/* harmony import */ var _CategoriesSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoriesSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriesSlider_vue_vue_type_template_id_07b6e0e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesSlider_vue_vue_type_template_id_07b6e0e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=template&id=07b6e0e8&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=template&id=07b6e0e8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesSlider_vue_vue_type_template_id_07b6e0e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesSlider.vue?vue&type=template&id=07b6e0e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/CategoriesSlider.vue?vue&type=template&id=07b6e0e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesSlider_vue_vue_type_template_id_07b6e0e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesSlider_vue_vue_type_template_id_07b6e0e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleProductsSlider_vue_vue_type_template_id_d4f3808a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleProductsSlider.vue?vue&type=template&id=d4f3808a& */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=template&id=d4f3808a&");
/* harmony import */ var _SaleProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleProductsSlider.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SaleProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleProductsSlider_vue_vue_type_template_id_d4f3808a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleProductsSlider_vue_vue_type_template_id_d4f3808a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleProductsSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleProductsSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=template&id=d4f3808a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=template&id=d4f3808a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleProductsSlider_vue_vue_type_template_id_d4f3808a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleProductsSlider.vue?vue&type=template&id=d4f3808a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/SaleProductsSlider.vue?vue&type=template&id=d4f3808a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleProductsSlider_vue_vue_type_template_id_d4f3808a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleProductsSlider_vue_vue_type_template_id_d4f3808a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_6461fe78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=6461fe78& */ "./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=template&id=6461fe78&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_6461fe78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_6461fe78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=template&id=6461fe78&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=template&id=6461fe78& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6461fe78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=6461fe78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/shared/Slider/components/Category.vue?vue&type=template&id=6461fe78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6461fe78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6461fe78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/Welcome.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=6974727a& */ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/welcome/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=6974727a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/Welcome.vue?vue&type=template&id=6974727a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_6974727a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/Banner.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/Banner.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banner_vue_vue_type_template_id_c1889bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=c1889bc6& */ "./resources/js/Pages/Ecomerce/welcome/components/Banner.vue?vue&type=template&id=c1889bc6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Banner_vue_vue_type_template_id_c1889bc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Banner_vue_vue_type_template_id_c1889bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/welcome/components/Banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/Banner.vue?vue&type=template&id=c1889bc6&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/Banner.vue?vue&type=template&id=c1889bc6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_c1889bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=template&id=c1889bc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/Banner.vue?vue&type=template&id=c1889bc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_c1889bc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_c1889bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogPost_vue_vue_type_template_id_5cac9113___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPost.vue?vue&type=template&id=5cac9113& */ "./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue?vue&type=template&id=5cac9113&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _BlogPost_vue_vue_type_template_id_5cac9113___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogPost_vue_vue_type_template_id_5cac9113___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue?vue&type=template&id=5cac9113&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue?vue&type=template&id=5cac9113& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_5cac9113___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPost.vue?vue&type=template&id=5cac9113& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Ecomerce/welcome/components/BlogPost.vue?vue&type=template&id=5cac9113&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_5cac9113___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_5cac9113___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/Flash.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Shared/Flash.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flash_vue_vue_type_template_id_2fbc3662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flash.vue?vue&type=template&id=2fbc3662& */ "./resources/js/Pages/Shared/Flash.vue?vue&type=template&id=2fbc3662&");
/* harmony import */ var _Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flash.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Flash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Flash_vue_vue_type_template_id_2fbc3662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Flash_vue_vue_type_template_id_2fbc3662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Flash.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Flash.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Shared/Flash.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Flash.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Flash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Flash.vue?vue&type=template&id=2fbc3662&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Flash.vue?vue&type=template&id=2fbc3662& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_template_id_2fbc3662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Flash.vue?vue&type=template&id=2fbc3662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Flash.vue?vue&type=template&id=2fbc3662&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_template_id_2fbc3662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Flash_vue_vue_type_template_id_2fbc3662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);