(window.webpackJsonp=window.webpackJsonp||[]).push([[30,54,104,118,124,133,149],{0:function(t,e,s){"use strict";function i(t,e,s,i,r,a,o,n){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=n?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return i}))},122:function(t,e,s){var i=s(347);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(9)(i,r);i.locals&&(t.exports=i.locals)},13:function(t,e,s){"use strict";s.r(e);var i={props:["Product"],methods:{},computed:{ProductImage:function(){return this.Product.mainphoto_url},RegularPrice:function(){return this.Product.regular_price},SalePrice:function(){return this.Product.sale_price},CurrentPrice:function(){return this.Product.current_price},ProductName:function(){return this.Product.name},SetLable:function(){return this.Product.sale_price>0?{Color:"text-orange-500",Title:"-"+Math.round((this.Product.regular_price-this.Product.sale_price)/this.Product.regular_price*100)+"%",Active:!0}:this.Product.is_featured?{Color:"text-blue-500",Title:"Trend",Active:!0}:{Color:"text-green-500",Title:"new",Active:!0}},Currency:function(){return this.$page.SiteOptions.Currency.Symbol}}},r=s(0),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-2"},[s("div",{staticClass:"product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4"},[s("inertia-link",{staticClass:"focus:outline-none",attrs:{href:t.route("shop.show",t.Product.slug)}},[t.SetLable.Active?s("div",{staticClass:"absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30"},[s("p",{staticClass:"font-semibold text-sm uppercase tracking-wide",class:t.SetLable.Color},[t._v(" "+t._s(t.SetLable.Title))])]):t._e(),t._v(" "),s("div",{staticClass:"flex justify-center items-center h-64 pb-4 p-2"},[s("img",{staticClass:"w-auto h-56 bg-center bg-no-repeat bg-cover transition transform hover:scale-105  duration-500 ease-in-out hover:shadow-lg rounded-lg",attrs:{src:t.ProductImage}})]),t._v(" "),s("div",{staticClass:"flex items-center px-4 py-1"},[s("p",{staticClass:"font-semibold text-xs text-gray-400 capitalize  overflow-ellipsis truncate overflow-hidden",attrs:{title:t.ProductName}},[t._v(t._s(t.ProductName))])]),t._v(" "),s("div",{staticClass:"flex px-4 py-1"},[s("p",{staticClass:"font-semibold text-red-500 text-normal"},[t._v(t._s(t.Currency)+" "+t._s(t.CurrentPrice)+" ")]),t._v(" "),t.SalePrice>0?s("p",{staticClass:"font-semibold line-through text-gray-400 text-xs ml-3"},[t._v(t._s(t.Currency)+t._s(t.RegularPrice)+" ")]):t._e()]),t._v(" "),s("div",{staticClass:"flex px-4"},[s("div",{staticClass:"flex items-center  "},[s("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-yellow-300"})]),t._v(" "),s("p",{staticClass:"font-regular text-sm text-gray-500  ml-2"},[t._v("(45)")])])])],1)])}),[],!1,null,null,null);e.default=a.exports},31:function(t,e,s){"use strict";s.r(e);var i={computed:{Alert:function(){this.$page.flash.success&&this.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,icon:"success",title:this.$page.flash.success}),this.$page.flash.error&&this.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,icon:"error",title:this.$page.flash.error})}}},r=s(0),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.Alert)+"\n")])}),[],!1,null,null,null);e.default=a.exports},315:function(t,e,s){"use strict";s.r(e);var i=s(4),r=s(93),a=s(13),o={layout:i.default,metaInfo:{title:"Shop"},components:{ShopProduct:a.default,Pagination:r.default},data:function(){return{sortBy:"current_price",sortDirection:"desc"}},computed:{Products:function(){var t=this;return this.$page.Products.data.sort((function(e,s){var i=1;return"desc"===t.sortDirection&&(i=-1),e[t.sortBy]<s[t.sortBy]?-1*i:e[t.sortBy]>s[t.sortBy]?1*i:0}))},Pagination:function(){return{first_page_url:this.$page.Products.first_page_url,prev_page_url:this.$page.Products.prev_page_url,links:this.$page.Products.links,next_page_url:this.$page.Products.next_page_url,last_page_url:this.$page.Products.last_page_url}},CountTotalProducts:function(){return this.$page.Products.data.length}},mounted:function(){this.$root.$emit("sidebar-close")}},n=s(0),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"py-10 flex flex-col sm:flex-row justify-between"},[s("div",{staticClass:"flex items-center justify-center sm:justify-start"}),t._v(" "),s("div",{staticClass:"flex items-center justify-center sm:justify-end mt-6 sm:mt-0 w-76"},[s("p",{staticClass:"font-hkregular text-secondary md:text-lg mr-2 -mt-2"},[t._v("Sort by:\n                ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.sortDirection,expression:"sortDirection"}],staticClass:"w-2/3 form-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortDirection=e.target.multiple?s:s[0]}}},[s("option",{domProps:{value:"asc"}},[t._v("Price: Low - High")]),t._v(" "),s("option",{domProps:{value:"desc"}},[t._v("Price: High - Low")])])])]),t._v(" "),s("div",{staticClass:"flex flex-wrap justify-between pb-5 -mx-3"},t._l(t.Products,(function(t,e){return s("shop-product",{key:e,staticClass:"w-1/2 md:w-1/5 relative mt-2 mb-5 z-30",attrs:{Product:t}})})),1)]),t._v(" "),s("pagination",{attrs:{Pagination:t.Pagination}})],1)}),[],!1,null,null,null);e.default=l.exports},346:function(t,e,s){"use strict";s(122)},347:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".slide-fade-enter-active[data-v-016d11a2]{transition:all .5s ease-in-out}.slide-fade-leave-active[data-v-016d11a2]{transition:all .3s ease-in-out}.slide-fade-enter[data-v-016d11a2],.slide-fade-leave-to[data-v-016d11a2]{transform:translateY(100px);opacity:0}",""])},4:function(t,e,s){"use strict";s.r(e);var i=s(44),r=s(43),a=s(31),o={components:{AppHeader:i.default,AppFooter:r.default,FlashMessage:a.default}},n=(s(346),s(0)),l=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-serif"},[e("app-header"),this._v(" "),e("main",{staticClass:"lg:mt-2 mt-2"},[e("transition",{attrs:{name:"slide-fade"}},[this._t("default")],2)],1),this._v(" "),e("app-footer"),this._v(" "),e("portal-target",{attrs:{name:"modal",multiple:""}}),this._v(" "),this.$page.flash?e("flash-message"):this._e()],1)}),[],!1,null,"016d11a2",null);e.default=l.exports},43:function(t,e,s){"use strict";s.r(e);var i={components:{ApplicationLogo:s(32).default},computed:{IsVisibleFooter:function(){switch(this.$page.currentRouteName){case"login":case"register":case"password.request":case"password.reset":case"verification.notice":case"cart.index":case"cart.CustomerInfomation":case"cart.ShippingMethod":case"cart.PaymentMethod":case"cart.success":return!1;default:return!0}}}},r=s(0),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.IsVisibleFooter?s("div",{staticClass:"xxstheme-footer bg-gray-200 "},[t._m(0),t._v(" "),s("div",{staticClass:"py-16 sm:py-20 md:py-24 text-gray-500"},[s("div",{staticClass:"flex flex-col lg:flex-row items-center justify-around lg:px-20"},[s("div",{staticClass:"lg:w-1/3 py-5 order-2 lg:order-1"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-start"},[t._v("Contact")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"mailto:test.email0123@elyssi.com"}},[t._v(t._s(t.$page.SiteOptions.Email))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"tel:0123234222"}},[t._v(t._s(t.$page.SiteOptions.Phone))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("inertia-link",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v(" \r\n                            "+t._s(t.$page.SiteOptions.Title)+"\r\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"lg:w-1/3 py-5 order-1 lg:order-2"},[s("inertia-link",{staticClass:"font-semibold  text-4xl uppercase tracking-wider flex items-center justify-center",attrs:{href:t.route("welcome")}},[t._v("\r\n                    "+t._s(t.$page.SiteOptions.Title)+"\r\n                ")]),t._v(" "),s("div",{staticClass:"flex items-center justify-center pt-5"},[t.$page.SiteOptions.Social.Facebook?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Facebook,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Twitter?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Twitter,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Instagram?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Instagram,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Pinterest?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Pinterest,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(4)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.LinkedIn?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.LinkedIn,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(5)]):t._e()])],1),t._v(" "),s("div",{staticClass:"w-1/3 py-5 order-3 lg:order-3"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-end"},[t._v("Link")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v("HOME")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("shop.index")}},[t._v("SHOP")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("blog.index")}},[t._v("BLOG")])],1)])])])]),t._v(" "),s("div",{staticClass:"hidden lg:block "},[s("div",{staticClass:"flex item-centen justify-center border-gray-50 border rounded"},[s("div",{staticClass:"font-semibold text-gray-400 text-base rounded bg-white py-1 px-5 mb-2"},[s("p",{staticClass:"flex transition duration-500 ease-in-out transform  hover:translate-x-2 hover:text-orange-500 "},[t._v(t._s(t.$page.SiteOptions.FooterCopyRightText))])])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-50 lg:rounded-b-full rounded-b-xl"},[e("div",{staticClass:"py-10 text-center"},[e("p",{staticClass:"font-semibold text-primary text-3xl sm:text-4xl tracking-wide"},[this._v(" Let's keep in touch")]),this._v(" "),e("p",{staticClass:"font-regular  text-lg sm:text-xl pt-3 px-6"},[this._v(" Join our list and save 15% off your first order.")]),this._v(" "),e("form",{staticClass:"pt-10 sm:pt-12"},[e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center"},[e("input",{staticClass:"w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white",attrs:{type:"email",name:"cta_email",id:"cta_email",placeholder:"ENTER YOUR EMAIL"}})]),this._v(" "),e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5  mx-auto my-2 flex flex-col sm:flex-row justify-center items-center"},[e("button",{staticClass:"flex flex-inline justify-center items-center transition duration-700 ease-in bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 shadow-lg hover:shadow-2xl shadow-lg hover:bg-gradient-to-l from-yellow-500 via-yellow-400 to-orange-500 focus:outline-none rounded px-2 py-3 text-white font-semibold shadow   uppercase w-full",attrs:{type:"button","aria-label":"Subscribe button"}},[this._v("SUBSCRIBE")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-facebook text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-twitter text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-instagram text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-pinterest text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-linkedin text-secondary transition-colors group-hover:text-white"})])}],!1,null,null,null);e.default=a.exports},63:function(t,e,s){"use strict";s.r(e);var i={props:["Link"],computed:{Next:function(){return"Next &raquo;"==this.Link.label?"font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer":""},Previous:function(){return"&laquo; Previous"==this.Link.label?"font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer":""}}},r=s(0),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.Link.url?s("inertia-link",t._b({staticClass:"font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer",class:{"bg-primary":t.Link.active},attrs:{href:t.Link.url}},"inertia-link",t.$attrs,!1),[t._v("\n    "+t._s(t.Link.label)+"\n")]):t._e()}),[],!1,null,null,null);e.default=a.exports},93:function(t,e,s){"use strict";s.r(e);var i={props:["Pagination"],components:{PaginationLink:s(63).default},computed:{Links:function(){return this.Pagination.links}}},r=s(0),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.Links.length?s("div",{staticClass:"pb-16 flex justify-center mx-auto"},[t.Pagination.prev_page_url?s("span",{staticClass:"font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer"},[t._v("Previous")]):t._e(),t._v(" "),t._l(t.Links,(function(t,e){return s("pagination-link",{key:e,attrs:{Link:t}})})),t._v(" "),t.Pagination.next_page_url?s("span",{staticClass:"font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer"},[t._v("Next")]):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports}}]);