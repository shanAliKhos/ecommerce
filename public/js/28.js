(window.webpackJsonp=window.webpackJsonp||[]).push([[28,44,71,112,120,138,156,165],{0:function(t,e,s){"use strict";function a(t,e,s,a,r,i,l,o){var n,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),l?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=n):r&&(n=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),n)if(c.functional){c._injectStyles=n;var d=c.render;c.render=function(t,e){return n.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,n):[n]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},115:function(t,e,s){var a=s(351);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,r);a.locals&&(t.exports=a.locals)},116:function(t,e,s){var a=s(353);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,r);a.locals&&(t.exports=a.locals)},315:function(t,e,s){"use strict";s.r(e);var a=s(4),r=s(63),i={layout:a.default,metaInfo:{title:"Contact"},components:{WelcomeIcons:r.default},data:function(){return{form:{name:null,email:null,subject:null,message:null},faqIndex:null,sending:!1}},methods:{store:function(){var t=new FormData;t.append("name",this.form.name||""),t.append("email",this.form.email||""),t.append("subject",this.form.subject||""),t.append("message",this.form.message||"")}},mounted:function(){this.$root.$emit("sidebar-close")}},l=s(0),o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"pb-10 md:pb-10 lg:pb-10 flex flex-col lg:flex-row justify-between"},[s("div",{staticClass:"w-full lg:w-3/8 xl:w-1/3 mx-auto lg:mx-0 border border-grey-darker shadow px-6 xl:px-8 py-10 lg:py-8 text-center lg:text-left"},[s("h2",{staticClass:"font-butlerregular border-b border-grey-dark pb-6 text-secondary text-2xl sm:text-3xl md:text-4xl"},[t._v(" Quick contact")]),t._v(" "),s("h4",{staticClass:"font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"},[t._v(" Email")]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary"},[t._v(" "+t._s(t.$page.SiteOptions.Email)+" ")]),t._v(" "),s("h4",{staticClass:"font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"},[t._v(" Phone")]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary"},[t._v("+0 321-654-0987 ")]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"lg:w-3/5 border border-grey-darker shadow px-8 py-10 lg:py-8 mt-10 md:mt-12 lg:mt-0"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.store(e)}}},[s("p",{staticClass:"font-hkregular text-secondary text-lg pb-8"},[t._v(" Any questions? Contact us through whats app or on our contact from below.")]),t._v(" "),s("div",{staticClass:"flex flex-col sm:flex-row justify-between mb-5 -mx-5"},[s("div",{staticClass:"sm:w-1/2 px-5 mb-8 sm:mb-0"},[s("label",{staticClass:"font-hkregular text-secondary block mb-2",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Enter your name",id:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.$page.errors.name?s("p",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.$page.errors.name))]):t._e()]),t._v(" "),s("div",{staticClass:"sm:w-1/2 px-5"},[s("label",{staticClass:"font-hkregular text-secondary block mb-2",attrs:{for:"email"}},[t._v("Email address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Enter your email",id:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.$page.errors.email?s("p",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.$page.errors.email))]):t._e()])]),t._v(" "),s("div",{staticClass:"w-full mb-8"},[s("label",{staticClass:"font-hkregular text-secondary block mb-2",attrs:{for:"subject"}},[t._v("Subject*")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Enter your subject",id:"subject"},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}}),t._v(" "),t.$page.errors.subject?s("p",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.$page.errors.subject))]):t._e()]),t._v(" "),s("div",{staticClass:"w-full mb-8"},[s("label",{staticClass:"font-hkregular text-secondary block mb-2",attrs:{for:"message"}},[t._v("Message*")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-textarea",attrs:{rows:"5",placeholder:"Enter your message",id:"message"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),t.$page.errors.message?s("p",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.$page.errors.message))]):t._e()]),t._v(" "),s("div",{staticClass:"flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3"},[s("button",{staticClass:"flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full lg:w-1/2  ",attrs:{type:"submit"}},[t.sending?s("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):t._e(),t._v(" "),t.sending?t._e():s("svg",{staticClass:"transition duration-700 ease-in-out  h-5 w-5 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})]),t._v("                           \n                        SUBMIT\n                    ")])])])])]),t._v(" "),s("WelcomeIcons"),t._v(" "),s("div",{staticClass:"pb-16 md:pb-20 lg:pb-24",attrs:{id:"faq"}},[s("div",{staticClass:"text-center sm:w-5/6 md:w-full mx-auto md:mx-0"},[s("h2",{staticClass:"font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl"},[t._v("\n                Frequently Asked Questions")]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary-lighter text-lg md:text-xl pt-2"},[t._v("\n                Get the latest news & updates from Ciloe")]),t._v(" "),s("div",{staticClass:"pt-12",attrs:{"x-data":"{ faqIndex: null }"}},[s("div",{staticClass:"faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer"},[s("div",{staticClass:"faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary",class:{"border-b":1===t.faqIndex},on:{click:function(e){1===t.faqIndex?t.faqIndex=null:t.faqIndex=1}}},[t._m(1),t._v(" "),s("div",{staticClass:"w-1/6 text-right"},[s("i",{staticClass:"bx text-primary text-2xl",class:1===t.faqIndex?"bx-minus":"bx-plus"})])]),t._v(" "),s("div",{staticClass:"item-height   transition-all overflow-auto cursor-text",class:{active:1===t.faqIndex}},[t._m(2)])]),t._v(" "),s("div",{staticClass:"faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer"},[s("div",{staticClass:"faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary",class:{"border-b":2===t.faqIndex},on:{click:function(e){2===t.faqIndex?t.faqIndex=null:t.faqIndex=2}}},[s("div",{staticClass:"w-5/6 text-left"},[t._v('\n                        <   span class="font-hkmedium text-secondary md:text-lg uppercase">How much is shipping?')]),t._v(" "),s("div",{staticClass:"w-1/6 text-right"},[s("i",{staticClass:"bx text-primary text-2xl",class:2===t.faqIndex?"bx-minus":"bx-plus"})])]),t._v(" "),s("div",{staticClass:"item-height   transition-all overflow-auto cursor-text",class:{active:2===t.faqIndex}},[t._m(3)])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-8"},[e("h4",{staticClass:"font-hkbold text-secondary text-lg sm:text-xl uppercase"},[this._v(" Follow Us")]),this._v(" "),e("div",{staticClass:"flex justify-center lg:justify-start pt-3"},[e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl",attrs:{href:"/"}},[e("i",{staticClass:"bx bxl-facebook text-white"})]),this._v(" "),e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl",attrs:{href:"/"}},[e("i",{staticClass:"bx bxl-twitter text-white"})]),this._v(" "),e("a",{staticClass:"bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl",attrs:{href:"/"}},[e("i",{staticClass:"bx bxl-google text-white"})]),this._v(" "),e("a",{staticClass:"bg-secondary-lighter hover:bg-primary transition-colors p-3 rounded-full flex items-center text-xl",attrs:{href:"/"}},[e("i",{staticClass:"bx bxl-linkedin text-white"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-5/6 text-left"},[e("span",{staticClass:"font-hkmedium text-secondary md:text-lg uppercase"},[this._v("How many days does the product takes to arrive?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-5 md:px-8 py-5"},[e("p",{staticClass:"font-hkregular text-secondary text-sm leading-loose text-left"},[this._v("It depends on the product, but it can take 3-5 days max.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-5 md:px-8 py-5"},[e("p",{staticClass:"font-hkregular text-secondary text-sm leading-loose text-left"},[this._v("\n                                It depends on a lot of factors like where you're located and how many things you buy. We do have a free shipping special if you buy more than $50.\n                            ")])])}],!1,null,null,null);e.default=o.exports},32:function(t,e,s){"use strict";s.r(e);var a={computed:{Alert:function(){this.$page.flash.success&&this.$swal({toast:!0,position:"top",showConfirmButton:!1,showCloseButton:!0,timer:7e3,timerProgressBar:!0,icon:"success",title:this.$page.flash.success}),this.$page.flash.error&&this.$swal({toast:!0,position:"top",showConfirmButton:!1,showCloseButton:!0,timer:7e3,timerProgressBar:!0,icon:"error",title:this.$page.flash.error})}}},r=s(0),i=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.Alert)+"\n")])}),[],!1,null,null,null);e.default=i.exports},350:function(t,e,s){"use strict";s(115)},351:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".xxstheme-header.scrolled[data-v-5d7a8e5c]{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}",""])},352:function(t,e,s){"use strict";s(116)},353:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".slide-fade-enter-active[data-v-cda23f5e]{transition:all .5s ease-in-out}.slide-fade-leave-active[data-v-cda23f5e]{transition:all .3s ease-in-out}.slide-fade-enter[data-v-cda23f5e],.slide-fade-leave-to[data-v-cda23f5e]{transform:translateY(100px);opacity:0}",""])},4:function(t,e,s){"use strict";s.r(e);var a=s(40),r=s(41),i=s(32),l={components:{AppHeader:a.default,AppFooter:r.default,FlashMessage:i.default}},o=(s(352),s(0)),n=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-serif select-none text-gray-800"},[e("app-header"),this._v(" "),e("main",{staticClass:"container mx-auto my-auto "},[e("transition",{attrs:{name:"slide-fade"}},[this._t("default")],2)],1),this._v(" "),e("app-footer"),this._v(" "),e("portal-target",{attrs:{name:"modal",multiple:""}}),this._v(" "),this.$page.flash?e("flash-message"):this._e()],1)}),[],!1,null,"cda23f5e",null);e.default=n.exports},40:function(t,e,s){"use strict";s.r(e);var a={components:{NavBar:function(){return s.e(158).then(s.bind(null,270))},MobileNavbar:function(){return s.e(163).then(s.bind(null,269))}},data:function(){return{mobileMenu:!1,categories:!1,subcategory:!1,atTopOfPage:!0}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>600?this.atTopOfPage&&(this.atTopOfPage=!1):this.atTopOfPage||(this.atTopOfPage=!0)}},mounted:function(){var t=this;t.$root.$on("sidebar-close",(function(){t.mobileMenu=!1}))}},r=(s(350),s(0)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xxstheme-header transition duration-700 ease-in left-0 top-0  bg-white z-50 w-full px-2",class:{"fixed scrolled":!t.atTopOfPage}},[s("nav-bar",{staticClass:"z-50",attrs:{atTopOfPage:t.atTopOfPage,mobileMenu:t.mobileMenu,categories:t.categories,subcategory:t.subcategory},on:{"mobile-menu-is-disabled":function(e){t.mobileMenu=!1},"mobile-menu-is-enabled":function(e){t.mobileMenu=!0}}}),t._v(" "),s("mobile-navbar",{staticClass:"z-50",attrs:{mobileMenu:t.mobileMenu,categories:t.categories,subcategory:t.subcategory},on:{"mobile-menu-is-disabled":function(e){t.mobileMenu=!1}}})],1)}),[],!1,null,"5d7a8e5c",null);e.default=i.exports},41:function(t,e,s){"use strict";s.r(e);var a={components:{ApplicationLogo:function(){return s.e(161).then(s.bind(null,47))}},computed:{IsVisibleFooter:function(){switch(this.$page.currentRouteName){case"login":case"register":case"password.request":case"password.reset":case"verification.notice":case"cart.index":case"cart.CustomerInfomation":case"cart.ShippingMethod":case"cart.PaymentMethod":case"cart.success":return!1;default:return!0}}}},r=s(0),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.IsVisibleFooter?s("div",{staticClass:"xxstheme-footer bg-gray-200 "},[t._m(0),t._v(" "),s("div",{staticClass:"py-16 sm:py-20 md:py-24 text-gray-500"},[s("div",{staticClass:"flex flex-col lg:flex-row items-center justify-around lg:px-20"},[s("div",{staticClass:"lg:w-1/3 py-5 order-2 lg:order-1"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-start"},[t._v("Contact")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"mailto:test.email0123@elyssi.com"}},[t._v(t._s(t.$page.SiteOptions.Email))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"tel:0123234222"}},[t._v(t._s(t.$page.SiteOptions.Phone))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("inertia-link",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v(" \r\n                            "+t._s(t.$page.SiteOptions.Title)+"\r\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"lg:w-1/3 py-5 order-1 lg:order-2"},[s("inertia-link",{staticClass:"font-semibold  text-4xl uppercase tracking-wider flex items-center justify-center",attrs:{href:t.route("welcome")}},[t._v("\r\n                    "+t._s(t.$page.SiteOptions.Title)+"\r\n                ")]),t._v(" "),s("div",{staticClass:"flex items-center justify-center pt-5"},[t.$page.SiteOptions.Social.Facebook?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Facebook,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Twitter?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Twitter,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Instagram?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Instagram,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Pinterest?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Pinterest,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(4)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.LinkedIn?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.LinkedIn,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(5)]):t._e()])],1),t._v(" "),s("div",{staticClass:"w-1/3 py-5 order-3 lg:order-3"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-end"},[t._v("Link")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v("HOME")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("shop.index")}},[t._v("SHOP")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("blog.index")}},[t._v("BLOG")])],1)])])])]),t._v(" "),s("div",{staticClass:"hidden lg:block "},[s("div",{staticClass:"flex item-centen justify-center border-gray-50 border rounded"},[s("div",{staticClass:"font-semibold text-gray-400 text-base rounded bg-white py-1 px-5 mb-2"},[s("p",{staticClass:"flex transition duration-500 ease-in-out transform  hover:translate-x-2 hover:text-orange-500 "},[t._v(t._s(t.$page.SiteOptions.FooterCopyRightText))])])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-50 lg:rounded-b-full rounded-b-xl"},[e("div",{staticClass:"py-10 text-center"},[e("p",{staticClass:"font-semibold text-primary text-3xl sm:text-4xl tracking-wide"},[this._v(" Let's keep in touch")]),this._v(" "),e("p",{staticClass:"font-regular  text-lg sm:text-xl pt-3 px-6"},[this._v(" Join our list and save 15% off your first order.")]),this._v(" "),e("form",{staticClass:"pt-10 sm:pt-12"},[e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center"},[e("input",{staticClass:"w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white",attrs:{type:"email",name:"cta_email",id:"cta_email",placeholder:"ENTER YOUR EMAIL"}})]),this._v(" "),e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5  mx-auto my-2 flex flex-col sm:flex-row justify-center items-center"},[e("button",{staticClass:"flex flex-inline justify-center items-center transition duration-700 ease-in bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 shadow-lg hover:shadow-2xl shadow-lg hover:bg-gradient-to-l from-yellow-500 via-yellow-400 to-orange-500 focus:outline-none rounded px-2 py-3 text-white font-semibold shadow   uppercase w-full",attrs:{type:"button","aria-label":"Subscribe button"}},[this._v("SUBSCRIBE")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-facebook text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-twitter text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-instagram text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-pinterest text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-linkedin text-secondary transition-colors group-hover:text-white"})])}],!1,null,null,null);e.default=i.exports},63:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col md:flex-row py-20 md:py-24"},[s("div",{staticClass:"w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"},[s("span",{staticClass:"bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-shipping"}),t._v(" "),s("div",{staticClass:"ml-6 mt-3 lg:mt-0"},[s("p",{staticClass:"font-semibold text-orange-500 text-xl tracking-wide"},[t._v(" Free shipping")]),t._v(" "),s("p",{staticClass:"font-regular text-gray-500 text-base tracking-wide"},[t._v(" On all orders over only $50 ")])])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"},[s("span",{staticClass:"bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-support"}),t._v(" "),s("div",{staticClass:"ml-6 mt-3 lg:mt-0"},[s("p",{staticClass:"font-semibold text-orange-500 text-xl tracking-wide"},[t._v(" Always available")]),t._v(" "),s("p",{staticClass:"font-regular text-gray-500 text-base tracking-wide"},[t._v(" 24/7 call center availabl e")])])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left  pb-3 md:pb-0"},[s("span",{staticClass:"bg-contain bg-center bg-no-repeat h-12 w-12 bg-icon-return"}),t._v(" "),s("div",{staticClass:"ml-6 mt-3 lg:mt-0"},[s("p",{staticClass:"font-semibold text-orange-500 text-xl tracking-wide"},[t._v(" Free returns")]),t._v(" "),s("p",{staticClass:"font-regular text-gray-500 text-base tracking-wide"},[t._v(" 7 days free return policy")])])])])}],!1,null,null,null);e.default=r.exports}}]);