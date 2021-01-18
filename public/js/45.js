(window.webpackJsonp=window.webpackJsonp||[]).push([[45,156],{0:function(t,e,s){"use strict";function o(t,e,s,o,n,a,r,i){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=i?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return o}))},100:function(t,e,s){"use strict";s.r(e);var o=s(24),n=s(26),a=s(20),r=s(27),i=s(18),l=s(19),c=s(21),u={props:["sessions"],components:{JetActionMessage:o.a,JetActionSection:n.a,JetButton:a.a,JetDialogModal:r.a,JetInput:i.a,JetInputError:l.a,JetSecondaryButton:c.a},data:function(){return{confirmingLogout:!1,form:this.$inertia.form({_method:"DELETE",password:""},{bag:"logoutOtherBrowserSessions"})}},methods:{confirmLogout:function(){var t=this;this.form.password="",this.confirmingLogout=!0,setTimeout((function(){t.$refs.password.focus()}),250)},logoutOtherBrowserSessions:function(){var t=this;this.form.post(route("other-browser-sessions.destroy"),{preserveScroll:!0}).then((function(e){t.form.hasErrors()||(t.confirmingLogout=!1)}))}}},d=s(0),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-action-section",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Browser Sessions\n    ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Manage and logout your active sessions on other browsers and devices.\n    ")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"max-w-xl text-sm text-gray-600"},[t._v("\n            If necessary, you may logout of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.\n        ")]),t._v(" "),t.sessions.length>0?s("div",{staticClass:"mt-5 space-y-6"},t._l(t.sessions,(function(e,o){return s("div",{key:o,staticClass:"flex items-center"},[s("div",[e.agent.is_desktop?s("svg",{staticClass:"w-8 h-8 text-gray-500",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]):s("svg",{staticClass:"w-8 h-8 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M0 0h24v24H0z",stroke:"none"}}),s("rect",{attrs:{x:"7",y:"4",width:"10",height:"16",rx:"1"}}),s("path",{attrs:{d:"M11 5h2M12 17v.01"}})])]),t._v(" "),s("div",{staticClass:"ml-3"},[s("div",{staticClass:"text-sm text-gray-600"},[t._v("\n                        "+t._s(e.agent.platform)+" - "+t._s(e.agent.browser)+"\n                    ")]),t._v(" "),s("div",[s("div",{staticClass:"text-xs text-gray-500"},[t._v("\n                            "+t._s(e.ip_address)+",\n\n                            "),e.is_current_device?s("span",{staticClass:"text-green-500 font-semibold"},[t._v("This device")]):s("span",[t._v("Last active "+t._s(e.last_active))])])])])])})),0):t._e(),t._v(" "),s("div",{staticClass:"flex items-center mt-5"},[s("jet-button",{nativeOn:{click:function(e){return t.confirmLogout(e)}}},[t._v("\n                Logout Other Browser Sessions\n            ")]),t._v(" "),s("jet-action-message",{staticClass:"ml-3",attrs:{on:t.form.recentlySuccessful}},[t._v("\n                Done.\n            ")])],1),t._v(" "),s("jet-dialog-modal",{attrs:{show:t.confirmingLogout},on:{close:function(e){t.confirmingLogout=!1}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                Logout Other Browser Sessions\n            ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n                Please enter your password to confirm you would like to logout of your other browser sessions across all of your devices.\n\n                "),s("div",{staticClass:"mt-4"},[s("jet-input",{ref:"password",staticClass:"mt-1 block w-3/4",attrs:{type:"password",placeholder:"Password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.logoutOtherBrowserSessions(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error("password")}})],1)]},proxy:!0},{key:"footer",fn:function(){return[s("jet-secondary-button",{nativeOn:{click:function(e){t.confirmingLogout=!1}}},[t._v("\n                    Nevermind\n                ")]),t._v(" "),s("jet-button",{staticClass:"ml-2",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing},nativeOn:{click:function(e){return t.logoutOtherBrowserSessions(e)}}},[t._v("\n                    Logout Other Browser Sessions\n                ")])]},proxy:!0}])})]},proxy:!0}])})}),[],!1,null,null,null);e.default=f.exports},18:function(t,e,s){"use strict";var o={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}},n=s(0),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"form-input rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null);e.a=a.exports},19:function(t,e,s){"use strict";var o={props:["message"]},n=s(0),a=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.message,expression:"message"}]},[e("p",{staticClass:"text-sm text-red-600"},[this._v("\n        "+this._s(this.message)+"\n    ")])])}),[],!1,null,null,null);e.a=a.exports},20:function(t,e,s){"use strict";var o={props:{type:{type:String,default:"submit"}}},n=s(0),a=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},21:function(t,e,s){"use strict";var o={props:{type:{type:String,default:"button"}}},n=s(0),a=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},24:function(t,e,s){"use strict";var o={props:["on"]},n=s(0),a=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{"leave-active-class":"transition ease-in duration-1000","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.on,expression:"on"}],staticClass:"text-sm text-gray-600"},[this._t("default")],2)])],1)}),[],!1,null,null,null);e.a=a.exports},26:function(t,e,s){"use strict";var o={components:{JetSectionTitle:s(44).a}},n=s(0),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("div",{staticClass:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},[t._t("content")],2)])],1)}),[],!1,null,null,null);e.a=a.exports},27:function(t,e,s){"use strict";var o={components:{Modal:s(46).a},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}},n=s(0),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:t.show,"max-width":t.maxWidth,closeable:t.closeable},on:{close:t.close}},[s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"text-lg"},[t._t("title")],2),t._v(" "),s("div",{staticClass:"mt-4"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"px-6 py-4 bg-gray-100 text-right"},[t._t("footer")],2)])}),[],!1,null,null,null);e.a=a.exports},44:function(t,e,s){"use strict";var o=s(0),n=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-span-1"},[e("div",{staticClass:"px-4 sm:px-0"},[e("h3",{staticClass:"text-lg font-medium text-gray-900"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-600"},[this._t("description")],2)])])}),[],!1,null,null,null);e.a=n.exports},46:function(t,e,s){"use strict";var o={props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:function(t){document.body.style.overflow=t?"hidden":null}}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.show&&t.close()};document.addEventListener("keydown",e),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}},n=s(0),a=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("portal",{attrs:{to:"modal"}},[e("transition",{attrs:{"leave-active-class":"duration-200"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"fixed top-0 inset-x-0 px-4 pt-6 sm:px-0 sm:flex sm:items-top sm:justify-center"},[e("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"fixed inset-0 transform transition-all",on:{click:this.close}},[e("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])]),this._v(" "),e("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full",class:this.maxWidthClass},[this._t("default")],2)])],1)])],1)}),[],!1,null,null,null);e.a=a.exports}}]);