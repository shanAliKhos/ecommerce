(window.webpackJsonp=window.webpackJsonp||[]).push([[24,13,121],{116:function(t,e,s){var r=s(351);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(9)(r,a);r.locals&&(t.exports=r.locals)},117:function(t,e,s){var r=s(353);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(9)(r,a);r.locals&&(t.exports=r.locals)},25:function(t,e,s){"use strict";s.r(e);var r={props:["Product"],methods:{},computed:{ProductImage:function(){return this.Product.mainphoto_url},RegularPrice:function(){return this.Product.regular_price},SalePrice:function(){return this.Product.sale_price},CurrentPrice:function(){return this.Product.current_price},ProductName:function(){return this.Product.name},Currency:function(){return this.$page.SiteOptions.Currency.Symbol}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-1  "},[s("div",{staticClass:"product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4"},[s("inertia-link",{staticClass:"focus:outline-none",attrs:{href:t.route("shop.show",t.Product.slug)}},[t.Product.label.active?s("div",{staticClass:"absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30"},[s("p",{staticClass:"font-semibold text-sm uppercase tracking-wide",class:t.Product.label.text_color},[t._v(" "+t._s(t.Product.label.title))])]):t._e(),t._v(" "),s("div",{staticClass:"flex justify-center items-center w-auto h-56 mb-1 bg-gray-100"},[s("img",{staticClass:"w-auto h-full bg-center bg-no-repeat bg-cover transition transform duration-500 ease-in-out hover:shadow-lg rounded",attrs:{src:t.ProductImage}})]),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center px-4 py-2"},[s("p",{staticClass:"font-mono font-semibold text-normal text-red-700 capitalize  overflow-ellipsis truncate overflow-hidden",attrs:{title:t.ProductName}},[t._v(t._s(t.ProductName))])]),t._v(" "),s("div",{staticClass:"flex items-center  px-2"},[s("div",{staticClass:"flex  items-center group text-text-sm"},t._l(5,(function(e){return s("i",{key:e+1,staticClass:"bx text-yellow-300 border border-white",class:{"bxs-star":e<=t.Product.rating,"bx-star":e>t.Product.rating}})})),0)]),t._v(" "),s("div",{staticClass:"flex px-4"},[s("p",{staticClass:"font-semibold text-red-500 text-normal"},[t._v(t._s(t.Currency)+" "+t._s(t.CurrentPrice)+" ")]),t._v(" "),t.SalePrice>0?s("p",{staticClass:"font-semibold line-through text-gray-400 text-xs ml-3"},[t._v(t._s(t.Currency)+t._s(t.RegularPrice)+" ")]):t._e()])])],1)])}),[],!1,null,null,null);e.default=i.exports},309:function(t,e,s){"use strict";s.r(e);var r=s(4),a=s(38),i=s(88),o={metaInfo:function(){return{title:"".concat(this.$page.blog.title)}},layout:r.default,components:{BlogPostsSlider:i.default,Sidebar:a.default},mounted:function(){this.$root.$emit("sidebar-close")},computed:{Blog:function(){return this.$page.blog},Title:function(){return this.$page.blog.title}}},l=s(0),n=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"bg-no-repeat bg-cover bg-center w-full h-64 sm:h-76 md:h-90 xl:h-96",style:"background-image:url("+t.Blog.photo_url+")"}),t._v(" "),s("div",{staticClass:"flex flex-col sm:flex-row"},[s("div",{staticClass:"bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 -mt-10 ml-5 md:ml-8",style:"background-image:url("+t.Blog.user.profile_photo_url+")"}),t._v(" "),s("div",{staticClass:"flex justify-center items-center sm:pl-10 md:pl-12 py-3 sm:py-4 md:py-6 font-hkregular text-base text-secondary"},[s("span",[t._v("By\n                "),s("span",{staticClass:"font-hkbold"},[t._v(t._s(t.Blog.user.name))])]),t._v(" "),s("span",{staticClass:"px-3"},[t._v("|")]),t._v(" "),s("span",[t._v("03 May 2019")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"border-b border-grey-dark"},[s("div",{staticClass:"xl:w-11/12 pt-10 pb-20 flex flex-col lg:flex-row justify-between"},[s("div",{staticClass:"lg:w-2/3 text-center sm:text-left content"},[s("h1",{staticClass:"pb-3 md:pb-5"},[t._v(t._s(t.Blog.title))]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.Blog.body)}})]),t._v(" "),s("div",{staticClass:"w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0"},[s("Sidebar")],1)])]),t._v(" "),s("div",{staticClass:"pt-16 pb-16 sm:pb-20"},[s("h2",{staticClass:"font-butlerregular text-secondary text-3xl sm:text-4xl md:text-7xl lg:text-5xl pb-2 md:pb-3 text-center"},[t._v(" Related Blogs ")]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary-lighter text-base md:text-lg text-center pb-5 sm:pb-12 md:pb-2 mb-5"},[t._v(" For powerful features, great design and support from the developer.")]),t._v(" "),s("blog-posts-slider")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6"},[e("span",{staticClass:"font-hkbold text-base text-secondary"},[this._v("678")]),this._v(" "),e("span",{staticClass:"font-hkregular text-base text-secondary pl-3 sm:pl-0 md:pl-3"},[this._v("Share")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6"},[e("span",{staticClass:"font-hkbold text-base text-secondary"},[this._v("30")]),this._v(" "),e("span",{staticClass:"font-hkregular text-base text-secondary pl-3 sm:pl-3"},[this._v("Comments")])])}],!1,null,null,null);e.default=n.exports},32:function(t,e,s){"use strict";s.r(e);var r={computed:{Alert:function(){this.$page.flash.success&&this.$swal({toast:!0,position:"top",showConfirmButton:!1,showCloseButton:!0,timer:7e3,timerProgressBar:!0,icon:"success",title:this.$page.flash.success}),this.$page.flash.error&&this.$swal({toast:!0,position:"top",showConfirmButton:!1,showCloseButton:!0,timer:7e3,timerProgressBar:!0,icon:"error",title:this.$page.flash.error})}}},a=s(0),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.Alert)+"\n")])}),[],!1,null,null,null);e.default=i.exports},350:function(t,e,s){"use strict";s(116)},351:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".xxstheme-header.scrolled[data-v-5d7a8e5c]{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}",""])},352:function(t,e,s){"use strict";s(117)},353:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".slide-fade-enter-active[data-v-cda23f5e]{transition:all .5s ease-in-out}.slide-fade-leave-active[data-v-cda23f5e]{transition:all .3s ease-in-out}.slide-fade-enter[data-v-cda23f5e],.slide-fade-leave-to[data-v-cda23f5e]{transform:translateY(100px);opacity:0}",""])},38:function(t,e,s){"use strict";s.r(e);var r={computed:{Categories:function(){return this.$page.Categories}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-sidebar"},[t._m(0),t._v(" "),s("div",{staticClass:"mb-16"},[s("p",{staticClass:"font-regular text-gray-400 text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark text-center sm:text-left"},[t._v(" Categories")]),t._v(" "),t._l(t.Categories,(function(e,r){return s("inertia-link",{key:r,staticClass:"flex justify-between group pb-4 border-b border-grey-dark mt-8",attrs:{href:t.route("blog.by-category",e.slug)}},[s("p",{staticClass:"font-hkregular transition-colors group-hover:font-hkbold text-gray-400 group-hover:text-primary text-base capitalize"},[t._v(" "+t._s(e.name)+" ")])])}))],2),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"flex items-center w-full mb-16 relative"},[e("label",{staticClass:"block relative h-0 w-0 overflow-hidden",attrs:{for:"search_form"}},[this._v("Search")]),this._v(" "),e("input",{staticClass:"form-input   transition-all pr-10 text-grey-darkest text-base",attrs:{type:"text",id:"search_form",placeholder:"Search the Blog"}}),this._v(" "),e("button",{staticClass:"focus:outline-none absolute right-0 top-0 mt-4 mr-3",attrs:{"aria-label":"Search button"}},[e("i",{staticClass:"bx bx-search text-2xl"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center sm:text-left"},[e("p",{staticClass:"font-regular text-gray-400 text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"},[this._v("\n            Follow Us")]),this._v(" "),e("div",{staticClass:"flex justify-center sm:justify-start pt-8"},[e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"bx bxl-facebook text-white"})]),this._v(" "),e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"bx bxl-twitter text-white"})]),this._v(" "),e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"bx bxl-instagram text-white"})]),this._v(" "),e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center",attrs:{href:"https://www.google.com"}},[e("i",{staticClass:"bx bxl-pinterest text-white"})])])])}],!1,null,null,null);e.default=i.exports},4:function(t,e,s){"use strict";s.r(e);var r=s(40),a=s(41),i=s(32),o={components:{AppHeader:r.default,AppFooter:a.default,FlashMessage:i.default}},l=(s(352),s(0)),n=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-serif select-none text-gray-800"},[e("app-header"),this._v(" "),e("main",{staticClass:"container mx-auto my-auto "},[e("transition",{attrs:{name:"slide-fade"}},[this._t("default")],2)],1),this._v(" "),e("app-footer"),this._v(" "),e("portal-target",{attrs:{name:"modal",multiple:""}}),this._v(" "),this.$page.flash?e("flash-message"):this._e()],1)}),[],!1,null,"cda23f5e",null);e.default=n.exports},40:function(t,e,s){"use strict";s.r(e);var r={components:{NavBar:function(){return s.e(158).then(s.bind(null,271))},MobileNavbar:function(){return s.e(163).then(s.bind(null,270))}},data:function(){return{mobileMenu:!1,categories:!1,subcategory:!1,atTopOfPage:!0}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>600?this.atTopOfPage&&(this.atTopOfPage=!1):this.atTopOfPage||(this.atTopOfPage=!0)}},mounted:function(){var t=this;t.$root.$on("sidebar-close",(function(){t.mobileMenu=!1}))}},a=(s(350),s(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xxstheme-header transition duration-700 ease-in left-0 top-0  bg-white z-50 w-full px-2",class:{"fixed scrolled":!t.atTopOfPage}},[s("nav-bar",{staticClass:"z-50",attrs:{atTopOfPage:t.atTopOfPage,mobileMenu:t.mobileMenu,categories:t.categories,subcategory:t.subcategory},on:{"mobile-menu-is-disabled":function(e){t.mobileMenu=!1},"mobile-menu-is-enabled":function(e){t.mobileMenu=!0}}}),t._v(" "),s("mobile-navbar",{staticClass:"z-50",attrs:{mobileMenu:t.mobileMenu,categories:t.categories,subcategory:t.subcategory},on:{"mobile-menu-is-disabled":function(e){t.mobileMenu=!1}}})],1)}),[],!1,null,"5d7a8e5c",null);e.default=i.exports},41:function(t,e,s){"use strict";s.r(e);var r={components:{ApplicationLogo:function(){return s.e(161).then(s.bind(null,47))}},computed:{IsVisibleFooter:function(){switch(this.$page.currentRouteName){case"login":case"register":case"password.request":case"password.reset":case"verification.notice":case"cart.index":case"cart.CustomerInfomation":case"cart.ShippingMethod":case"cart.PaymentMethod":case"cart.success":return!1;default:return!0}}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.IsVisibleFooter?s("div",{staticClass:"xxstheme-footer bg-gray-200 "},[t._m(0),t._v(" "),s("div",{staticClass:"py-16 sm:py-20 md:py-24 text-gray-500"},[s("div",{staticClass:"flex flex-col lg:flex-row items-center justify-around lg:px-20"},[s("div",{staticClass:"lg:w-1/3 py-5 order-2 lg:order-1"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-start"},[t._v("Contact")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"mailto:test.email0123@elyssi.com"}},[t._v(t._s(t.$page.SiteOptions.Email))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"tel:0123234222"}},[t._v(t._s(t.$page.SiteOptions.Phone))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("inertia-link",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v(" \r\n                            "+t._s(t.$page.SiteOptions.Title)+"\r\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"lg:w-1/3 py-5 order-1 lg:order-2"},[s("inertia-link",{staticClass:"font-semibold  text-4xl uppercase tracking-wider flex items-center justify-center",attrs:{href:t.route("welcome")}},[t._v("\r\n                    "+t._s(t.$page.SiteOptions.Title)+"\r\n                ")]),t._v(" "),s("div",{staticClass:"flex items-center justify-center pt-5"},[t.$page.SiteOptions.Social.Facebook?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Facebook,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Twitter?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Twitter,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Instagram?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Instagram,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Pinterest?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Pinterest,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(4)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.LinkedIn?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.LinkedIn,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(5)]):t._e()])],1),t._v(" "),s("div",{staticClass:"w-1/3 py-5 order-3 lg:order-3"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-end"},[t._v("Link")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v("HOME")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("shop.index")}},[t._v("SHOP")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("blog.index")}},[t._v("BLOG")])],1)])])])]),t._v(" "),s("div",{staticClass:"hidden lg:block "},[s("div",{staticClass:"flex item-centen justify-center border-gray-50 border rounded"},[s("div",{staticClass:"font-semibold text-gray-400 text-base rounded bg-white py-1 px-5 mb-2"},[s("p",{staticClass:"flex transition duration-500 ease-in-out transform  hover:translate-x-2 hover:text-orange-500 "},[t._v(t._s(t.$page.SiteOptions.FooterCopyRightText))])])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-50 lg:rounded-b-full rounded-b-xl"},[e("div",{staticClass:"py-10 text-center"},[e("p",{staticClass:"font-semibold text-primary text-3xl sm:text-4xl tracking-wide"},[this._v(" Let's keep in touch")]),this._v(" "),e("p",{staticClass:"font-regular  text-lg sm:text-xl pt-3 px-6"},[this._v(" Join our list and save 15% off your first order.")]),this._v(" "),e("form",{staticClass:"pt-10 sm:pt-12"},[e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center"},[e("input",{staticClass:"w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white",attrs:{type:"email",name:"cta_email",id:"cta_email",placeholder:"ENTER YOUR EMAIL"}})]),this._v(" "),e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5  mx-auto my-2 flex flex-col sm:flex-row justify-center items-center"},[e("button",{staticClass:"flex flex-inline justify-center items-center transition duration-700 ease-in bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 shadow-lg hover:shadow-2xl shadow-lg hover:bg-gradient-to-l from-yellow-500 via-yellow-400 to-orange-500 focus:outline-none rounded px-2 py-3 text-white font-semibold shadow   uppercase w-full",attrs:{type:"button","aria-label":"Subscribe button"}},[this._v("SUBSCRIBE")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-facebook text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-twitter text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-instagram text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-pinterest text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-linkedin text-secondary transition-colors group-hover:text-white"})])}],!1,null,null,null);e.default=i.exports},88:function(t,e,s){"use strict";s.r(e);var r=s(25),a=s(267),i={components:{ShopProduct:r.default},mounted:function(){new a.a(".posts-slider",{type:"carousel",animationDuration:1e3,hoverpause:!0,autoplay:3e3,startAt:0,perView:2,gap:0,peek:{before:150,after:150},breakpoints:{1024:{perView:3,peek:{before:20,after:20}},768:{perView:2,peek:{before:10,after:10}},600:{perView:1,peek:{before:0,after:0}}}}).mount()},computed:{RelatedBlogs:function(){return this.$page.RelatedBlogs}}},o=s(0),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"posts-slider relative"},[s("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[s("div",{staticClass:"glide__slides"},t._l(t.RelatedBlogs,(function(e,r){return s("div",{key:r,staticClass:"px-2 xl:px-4 glide__slide transition duration-500 ease-in-out transform  hover:-skew-y-6   origin-center "},[s("div",{staticClass:"rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"},[s("div",{staticClass:"bg-no-repeat bg-cover bg-center w-full h-52",style:"background-image:url("+e.photo_url+")"}),t._v(" "),s("inertia-link",{staticClass:"flex items-center group",attrs:{href:t.route("blog.show",e.id)}},[s("div",{staticClass:"pt-6 pb-5 md:pb-8 px-8"},[s("div",{staticClass:"flex items-center font-hkregular text-sm md:text-base text-secondary"},[s("span",[t._v("By "),s("span",{staticClass:"font-hkbold "},[t._v(t._s(e.user.name))])]),t._v(" "),s("span",{staticClass:"px-3"},[t._v("|")]),t._v(" "),s("span",[t._v(t._s(e.created_at))])]),t._v(" "),s("p",{staticClass:"font-semibold text-gray-400 text-xl md:text-2xl pt-5 pb-8 truncate "},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center"},[s("i",{staticClass:"bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"})]),t._v(" "),s("span",{staticClass:"font-semibold text-grey-darkest transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"},[t._v("Read more")])])])],1)])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{"data-glide-el":"controls"}},[e("div",{staticClass:"transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-ml-5 lg:-ml-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",attrs:{"data-glide-dir":"<"}},[e("i",{staticClass:"bx bx-chevron-left text-primary transition-colors group-hover:text-white md:text-2xl p-4"})]),this._v(" "),e("div",{staticClass:"transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-mr-5 lg:-mr-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",attrs:{"data-glide-dir":">"}},[e("i",{staticClass:"bx bx-chevron-right text-primary transition-colors group-hover:text-white md:text-2xl p-4"})])])}],!1,null,null,null);e.default=l.exports}}]);