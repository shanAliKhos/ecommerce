(window.webpackJsonp=window.webpackJsonp||[]).push([[15,32,44,71,72,73,74,112,138,156],{0:function(t,e,s){"use strict";function a(t,e,s,a,i,n,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},116:function(t,e,s){var a=s(351);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},117:function(t,e,s){var a=s(353);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},118:function(t,e,s){var a=s(356);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},119:function(t,e,s){var a=s(358);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},121:function(t,e,s){var a=s(362);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},122:function(t,e,s){var a=s(364);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},264:function(t,e,s){var a=s(385);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},32:function(t,e,s){"use strict";s.r(e);var a={computed:{Alert:function(){this.$page.flash.success&&this.$swal({toast:!0,position:"top",showConfirmButton:!1,showCloseButton:!0,timer:7e3,timerProgressBar:!0,icon:"success",title:this.$page.flash.success}),this.$page.flash.error&&this.$swal({toast:!0,position:"top",showConfirmButton:!1,showCloseButton:!0,timer:7e3,timerProgressBar:!0,icon:"error",title:this.$page.flash.error})}}},i=s(0),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.Alert)+"\n")])}),[],!1,null,null,null);e.default=n.exports},324:function(t,e,s){"use strict";s.r(e);var a=s(4),i=s(96),n=s(95),o={layout:a.default,components:{Conversation:i.default,ContactsList:n.default},props:{user:{type:Object,required:!0}},data:function(){return{selectedContact:null,messages:[],contacts:[]}},methods:{startConversationWith:function(t){var e=this;this.updateUnreadCount(t,!0),axios.get("/conversation/".concat(t.id)).then((function(s){e.messages=s.data,e.selectedContact=t}))},saveNewMessage:function(t){this.messages.push(t)},hanleIncoming:function(t){if(this.selectedContact&&t.from==this.selectedContact.id)return this.saveNewMessage(t),void alert("ok");this.updateUnreadCount(t.from_contact,!1)},updateUnreadCount:function(t,e){this.contacts=this.contacts.map((function(s){return s.id!==t.id||(e?s.unread=0:s.unread+=1),s}))}},mounted:function(){var t=this;Echo.private("messages.".concat(this.user.id)).listen("NewMessage",(function(e){t.hanleIncoming(e.message)})),axios.get("/contacts").then((function(e){t.contacts=e.data}))}},r=(s(384),s(0)),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-app"},[e("ContactsList",{attrs:{contacts:this.contacts},on:{selected:this.startConversationWith}}),this._v(" "),e("Conversation",{attrs:{contact:this.selectedContact,messages:this.messages},on:{new:this.saveNewMessage}})],1)}),[],!1,null,"3ccfe7cf",null);e.default=l.exports},350:function(t,e,s){"use strict";s(116)},351:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".xxstheme-header.scrolled[data-v-5d7a8e5c]{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}",""])},352:function(t,e,s){"use strict";s(117)},353:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".slide-fade-enter-active[data-v-cda23f5e]{transition:all .5s ease-in-out}.slide-fade-leave-active[data-v-cda23f5e]{transition:all .3s ease-in-out}.slide-fade-enter[data-v-cda23f5e],.slide-fade-leave-to[data-v-cda23f5e]{transform:translateY(100px);opacity:0}",""])},355:function(t,e,s){"use strict";s(118)},356:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".feed[data-v-071c4446]{background:#f0f0f0;height:100%;max-height:470px;overflow:scroll;ul{list-style-type:none;padding:5px;li{&.message{margin:10px 0;width:100%;.text{max-width:200px;border-radius:5px;padding:12px;display:inline-block}&.received{text-align:right;.text{background:#fff}}&.sent{text-align:left;.text{background:#90e0b2}}}}}}",""])},357:function(t,e,s){"use strict";s(119)},358:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".composer textarea[data-v-15ad932b]{width:96%;margin:10px;resize:none;border-radius:3px;border:1px solid #d3d3d3;padding:6px}",""])},361:function(t,e,s){"use strict";s(121)},362:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".contacts-list[data-v-a600736a]{flex:2;max-height:100%;height:600px;overflow:scroll;border-left:1px solid #a6a6a6;ul{list-style-type:none;padding-left:0;li{display:flex;padding:2px;border-bottom:1px solid #aaa;height:80px;position:relative;cursor:pointer;&.selected{background:#81c4f9}span.unread{background:#82e0a8;color:#fff;position:absolute;right:11px;top:20px;font-weight:700;min-width:20px;justify-content:center;line-height:20px;font-size:12px;padding:0 4px;border-radius:3px}.avatar,span.unread{display:flex;align-items:center}.avatar{flex:1;img{width:35px;border-radius:50%;margin:0 auto}}.contact{flex:3;font-size:10px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;p{margin:0;&.name{font-weight:700}}}}}}",""])},363:function(t,e,s){"use strict";s(122)},364:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".conversation[data-v-afc8cc64]{flex:5;display:flex;flex-direction:column;justify-content:space-between;h1{font-size:20px;padding:10px;margin:0;border-bottom:1px dashed #d3d3d3}}",""])},384:function(t,e,s){"use strict";s(264)},385:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".chat-app[data-v-3ccfe7cf]{display:flex}",""])},4:function(t,e,s){"use strict";s.r(e);var a=s(40),i=s(41),n=s(32),o={components:{AppHeader:a.default,AppFooter:i.default,FlashMessage:n.default}},r=(s(352),s(0)),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-serif select-none text-gray-800"},[e("app-header"),this._v(" "),e("main",{staticClass:"container mx-auto my-auto "},[e("transition",{attrs:{name:"slide-fade"}},[this._t("default")],2)],1),this._v(" "),e("app-footer"),this._v(" "),e("portal-target",{attrs:{name:"modal",multiple:""}}),this._v(" "),this.$page.flash?e("flash-message"):this._e()],1)}),[],!1,null,"cda23f5e",null);e.default=l.exports},40:function(t,e,s){"use strict";s.r(e);var a={components:{NavBar:function(){return s.e(158).then(s.bind(null,271))},MobileNavbar:function(){return s.e(163).then(s.bind(null,270))}},data:function(){return{mobileMenu:!1,categories:!1,subcategory:!1,atTopOfPage:!0}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>600?this.atTopOfPage&&(this.atTopOfPage=!1):this.atTopOfPage||(this.atTopOfPage=!0)}},mounted:function(){var t=this;t.$root.$on("sidebar-close",(function(){t.mobileMenu=!1}))}},i=(s(350),s(0)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xxstheme-header transition duration-700 ease-in left-0 top-0  bg-white z-50 w-full px-2",class:{"fixed scrolled":!t.atTopOfPage}},[s("nav-bar",{staticClass:"z-50",attrs:{atTopOfPage:t.atTopOfPage,mobileMenu:t.mobileMenu,categories:t.categories,subcategory:t.subcategory},on:{"mobile-menu-is-disabled":function(e){t.mobileMenu=!1},"mobile-menu-is-enabled":function(e){t.mobileMenu=!0}}}),t._v(" "),s("mobile-navbar",{staticClass:"z-50",attrs:{mobileMenu:t.mobileMenu,categories:t.categories,subcategory:t.subcategory},on:{"mobile-menu-is-disabled":function(e){t.mobileMenu=!1}}})],1)}),[],!1,null,"5d7a8e5c",null);e.default=n.exports},41:function(t,e,s){"use strict";s.r(e);var a={components:{ApplicationLogo:function(){return s.e(161).then(s.bind(null,47))}},computed:{IsVisibleFooter:function(){switch(this.$page.currentRouteName){case"login":case"register":case"password.request":case"password.reset":case"verification.notice":case"cart.index":case"cart.CustomerInfomation":case"cart.ShippingMethod":case"cart.PaymentMethod":case"cart.success":return!1;default:return!0}}}},i=s(0),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.IsVisibleFooter?s("div",{staticClass:"xxstheme-footer bg-gray-200 "},[t._m(0),t._v(" "),s("div",{staticClass:"py-16 sm:py-20 md:py-24 text-gray-500"},[s("div",{staticClass:"flex flex-col lg:flex-row items-center justify-around lg:px-20"},[s("div",{staticClass:"lg:w-1/3 py-5 order-2 lg:order-1"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-start"},[t._v("Contact")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"mailto:test.email0123@elyssi.com"}},[t._v(t._s(t.$page.SiteOptions.Email))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("a",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:"tel:0123234222"}},[t._v(t._s(t.$page.SiteOptions.Phone))])]),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-start"},[s("inertia-link",{staticClass:"font-semibold  transition-colors hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v(" \r\n                            "+t._s(t.$page.SiteOptions.Title)+"\r\n                        ")])],1)])]),t._v(" "),s("div",{staticClass:"lg:w-1/3 py-5 order-1 lg:order-2"},[s("inertia-link",{staticClass:"font-semibold  text-4xl uppercase tracking-wider flex items-center justify-center",attrs:{href:t.route("welcome")}},[t._v("\r\n                    "+t._s(t.$page.SiteOptions.Title)+"\r\n                ")]),t._v(" "),s("div",{staticClass:"flex items-center justify-center pt-5"},[t.$page.SiteOptions.Social.Facebook?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Facebook,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Twitter?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Twitter,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Instagram?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Instagram,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(3)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.Pinterest?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.Pinterest,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(4)]):t._e(),t._v(" "),t.$page.SiteOptions.Social.LinkedIn?s("a",{staticClass:"group",attrs:{href:t.$page.SiteOptions.Social.LinkedIn,target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Social link")]),t._v(" "),t._m(5)]):t._e()])],1),t._v(" "),s("div",{staticClass:"w-1/3 py-5 order-3 lg:order-3"},[s("p",{staticClass:"font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-end"},[t._v("Link")]),t._v(" "),s("ul",[s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("welcome")}},[t._v("HOME")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("shop.index")}},[t._v("SHOP")])],1),t._v(" "),s("li",{staticClass:"pb-2 block flex items-center justify-center lg:justify-end"},[s("inertia-link",{staticClass:"font-semibold  hover:text-primary text-base tracking-wide",attrs:{href:t.route("blog.index")}},[t._v("BLOG")])],1)])])])]),t._v(" "),s("div",{staticClass:"hidden lg:block "},[s("div",{staticClass:"flex item-centen justify-center border-gray-50 border rounded"},[s("div",{staticClass:"font-semibold text-gray-400 text-base rounded bg-white py-1 px-5 mb-2"},[s("p",{staticClass:"flex transition duration-500 ease-in-out transform  hover:translate-x-2 hover:text-orange-500 "},[t._v(t._s(t.$page.SiteOptions.FooterCopyRightText))])])])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-50 lg:rounded-b-full rounded-b-xl"},[e("div",{staticClass:"py-10 text-center"},[e("p",{staticClass:"font-semibold text-primary text-3xl sm:text-4xl tracking-wide"},[this._v(" Let's keep in touch")]),this._v(" "),e("p",{staticClass:"font-regular  text-lg sm:text-xl pt-3 px-6"},[this._v(" Join our list and save 15% off your first order.")]),this._v(" "),e("form",{staticClass:"pt-10 sm:pt-12"},[e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center"},[e("input",{staticClass:"w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white",attrs:{type:"email",name:"cta_email",id:"cta_email",placeholder:"ENTER YOUR EMAIL"}})]),this._v(" "),e("div",{staticClass:"w-4/6 sm:w-3/4 lg:w-2/5  mx-auto my-2 flex flex-col sm:flex-row justify-center items-center"},[e("button",{staticClass:"flex flex-inline justify-center items-center transition duration-700 ease-in bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 shadow-lg hover:shadow-2xl shadow-lg hover:bg-gradient-to-l from-yellow-500 via-yellow-400 to-orange-500 focus:outline-none rounded px-2 py-3 text-white font-semibold shadow   uppercase w-full",attrs:{type:"button","aria-label":"Subscribe button"}},[this._v("SUBSCRIBE")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-facebook text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-twitter text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-instagram text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-pinterest text-secondary transition-colors group-hover:text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors"},[e("i",{staticClass:"bx bxl-linkedin text-secondary transition-colors group-hover:text-white"})])}],!1,null,null,null);e.default=n.exports},61:function(t,e,s){"use strict";s.r(e);var a={props:{contact:{type:Object},messages:{type:Array,required:!0}},methods:{scrollToBottom:function(){var t=this;setTimeout((function(){t.$refs.feed.scrollTop=t.$refs.feed.scrollHeight-t.$refs.feed.clientHeight}),50)}},watch:{contact:function(t){this.scrollToBottom()},messages:function(t){this.scrollToBottom()}}},i=(s(355),s(0)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"feed",staticClass:"feed"},[t.contact?s("ul",t._l(t.messages,(function(e){return s("li",{key:e.id,class:"message"+(e.to==t.contact.id?" sent":" received")},[s("div",{staticClass:"text"},[t._v("\n                "+t._s(e.text)+"\n            ")])])})),0):t._e()])}),[],!1,null,"071c4446",null);e.default=n.exports},62:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{message:""}},methods:{send:function(t){t.preventDefault(),""!=this.message&&(this.$emit("send",this.message),this.message="")}}},i=(s(357),s(0)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"composer"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"Message..."},domProps:{value:t.message},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}})])}),[],!1,null,"15ad932b",null);e.default=n.exports},95:function(t,e,s){"use strict";s.r(e);var a={props:{contacts:{type:Array,default:[]}},data:function(){return{selected:this.contacts.length?this.contacts[0]:null}},methods:{selectContact:function(t){this.selected=t,this.$emit("selected",t)}},computed:{sortedContacts:function(){var t=this;return _.sortBy(this.contacts,[function(e){return e==t.selected?1/0:e.unread}]).reverse()}}},i=(s(361),s(0)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contacts-list"},[s("ul",t._l(t.sortedContacts,(function(e){return s("li",{key:e.id,class:{selected:e==t.selected},on:{click:function(s){return t.selectContact(e)}}},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.profile_image,alt:e.name}})]),t._v(" "),s("div",{staticClass:"contact"},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"email"},[t._v(t._s(e.email))])]),t._v(" "),e.unread?s("span",{staticClass:"unread"},[t._v(t._s(e.unread))]):t._e()])})),0)])}),[],!1,null,"a600736a",null);e.default=n.exports},96:function(t,e,s){"use strict";s.r(e);var a=s(61),i=s(62),n={props:{contact:{type:Object,default:null},messages:{type:Array,default:[]}},methods:{sendMessage:function(t){var e=this;this.contact&&axios.post("/conversation/send",{contact_id:this.contact.id,text:t}).then((function(t){e.$emit("new",t.data)}))}},components:{MessagesFeed:a.default,MessageComposer:i.default}},o=(s(363),s(0)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"conversation"},[s("h1",[t._v(t._s(t.contact?t.contact.name:"Start Covesation by selecting contact"))]),t._v(" "),s("MessagesFeed",{attrs:{contact:t.contact,messages:t.messages}}),t._v(" "),t.contact?s("MessageComposer",{on:{send:t.sendMessage}}):t._e()],1)}),[],!1,null,"afc8cc64",null);e.default=r.exports}}]);