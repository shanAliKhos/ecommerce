(window.webpackJsonp=window.webpackJsonp||[]).push([[110,156],{0:function(t,e,s){"use strict";function r(t,e,s,r,n,a,i,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=o?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,"a",(function(){return r}))},28:function(t,e,s){"use strict";s.r(e);var r={computed:{CountCartItems:function(){var t=0;return this.$page.Cart.Items.length>0&&(t=this.$page.Cart.Items.reduce((function(t,e){return t+e.Qty}),0)),t},CartTotalPrice:function(){var t=0;return this.$page.Cart.Items.length>0&&(t=this.$page.Cart.Items.reduce((function(t,e){return t+e.Qty*e.price}),0)),t},CartItems:function(){return this.$page.Cart.Items}}},n=s(0),a=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0"},[s("div",{staticClass:"p-8"},[s("h4",{staticClass:"font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left"},[t._v(" Your Order ")]),t._v(" "),s("p",{staticClass:"font-hkbold text-secondary uppercase text-center sm:text-left"},[t._v(" PRODUCTS ("+t._s(t.CountCartItems)+")")]),t._v(" "),s("div",{staticClass:"mt-5 mb-8"},t._l(t.CartItems,(function(e,r){return s("div",{key:r,staticClass:"flex items-center mb-5"},[s("div",{staticClass:"w-20 relative mr-3 sm:pr-0"},[s("div",{staticClass:"h-20 rounded flex items-center justify-center"},[s("div",{staticClass:"w-12 h-16 bg-center bg-no-repeat bg-cover",style:"background-image:url('"+e.image+"')"}),t._v(" "),s("span",{staticClass:"font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6"},[t._v("2")])])]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary text-md",attrs:{title:e.name}},[t._v(t._s(e.name.substring(0,12)+"..")+" $"+t._s(e.price)+" ")])])})),0),t._v(" "),s("p",{staticClass:"font-hkbold text-secondary pt-1 pb-2"},[t._v("Cart Totals")]),t._v(" "),s("div",{staticClass:"border-b border-grey-darker pb-1 flex justify-between"},[s("span",{staticClass:"font-hkregular text-secondary"},[t._v("Subtotal")]),t._v(" "),s("span",{staticClass:"font-hkregular text-secondary"},[t._v("$"+t._s(t.CartTotalPrice))])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"pt-3 flex justify-between"},[s("span",{staticClass:"font-hkbold text-secondary"},[t._v("Total")]),t._v(" "),s("span",{staticClass:"font-hkbold text-secondary"},[t._v("$"+t._s(t.CartTotalPrice))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border-b border-grey-darker pt-2 pb-1 flex justify-between"},[e("span",{staticClass:"font-hkregular text-secondary"},[this._v("Coupon apply")]),this._v(" "),e("span",{staticClass:"font-hkregular text-secondary"},[this._v("-$0")])])}],!1,null,null,null);e.default=a.exports}}]);