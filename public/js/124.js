(window.webpackJsonp=window.webpackJsonp||[]).push([[124,156],{0:function(t,e,r){"use strict";function o(t,e,r,o,n,s,a,i){var l,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=r,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=l):n&&(l=i?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(t,e){return l.call(e),u(t,e)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:d}}r.d(e,"a",(function(){return o}))},89:function(t,e,r){"use strict";r.r(e);var o,n=r(7);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={components:(o={},s(o,n.Glide.name,n.Glide),s(o,n.GlideSlide.name,n.GlideSlide),s(o,"ShopProduct",(function(){return r.e(13).then(r.bind(null,25))})),o),computed:{Products:function(){return this.$page.RelatedProducts}}},i=r(0),l=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pb-20 md:pb-32"},[this._m(0),this._v(" "),e("vue-glide",{attrs:{type:"carousel",perView:4,hoverpause:!0,bound:!0,animationDuration:1e3,peek:{before:100,after:100},breakpoints:{1024:{perView:3,peek:{before:20,after:20}},768:{perView:2,peek:{before:10,after:10}},600:{perView:1,peek:{before:0,after:0}}},autoplay:2e3}},[this._l(this.Products,(function(t,r){return e("vue-glide-slide",{key:r},[e("shop-product",{staticClass:"relative mt-2 mb-5 pb-2 z-30",attrs:{Product:t}})],1)})),this._v(" "),e("template",{slot:"control"},[e("div",{staticClass:"transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group",attrs:{"data-glide-dir":"<"}},[e("i",{staticClass:"bx bx-chevron-left text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"})]),this._v(" "),e("div",{staticClass:"transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group",attrs:{"data-glide-dir":">"}},[e("i",{staticClass:"bx bx-chevron-right text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"})])])],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h2",{staticClass:"font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl"},[this._v("Related Product")]),this._v(" "),e("p",{staticClass:"font-hkregular text-secondary-lighter text-lg md:text-xl pt-2 pb-6 sm:pb-8 lg:pb-0"},[this._v(" Get the latest news & updates from store")])])}],!1,null,null,null);e.default=l.exports}}]);