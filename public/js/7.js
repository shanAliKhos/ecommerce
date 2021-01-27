(window.webpackJsonp=window.webpackJsonp||[]).push([[7,158],{0:function(t,e,s){"use strict";function n(t,e,s,n,o,a,r,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=i?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}s.d(e,"a",(function(){return n}))},104:function(t,e,s){"use strict";s.r(e);var n=s(28),o=s(17),a=s(29),r=s(15),i=s(16),c=s(18),l={props:{title:{default:"Confirm Password"},content:{default:"For your security, please confirm your password to continue."},button:{default:"Confirm"}},components:{JetButton:o.a,JetDialogModal:a.a,JetInput:r.a,JetInputError:i.a,JetSecondaryButton:c.a},data:function(){return{confirmingPassword:!1,form:this.$inertia.form({password:"",error:""},{bag:"confirmPassword"})}},methods:{startConfirmingPassword:function(){var t=this;this.form.error="",axios.get(route("password.confirmation").url()).then((function(e){e.data.confirmed?t.$emit("confirmed"):(t.confirmingPassword=!0,t.form.password="",setTimeout((function(){t.$refs.password.focus()}),250))}))},confirmPassword:function(){var t=this;this.form.processing=!0,axios.post(route("password.confirm").url(),{password:this.form.password}).then((function(e){t.confirmingPassword=!1,t.form.password="",t.form.error="",t.form.processing=!1,t.$nextTick((function(){return t.$emit("confirmed")}))})).catch((function(e){t.form.processing=!1,t.form.error=e.response.data.errors.password[0]}))}}},u=s(0),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("span",{on:{click:t.startConfirmingPassword}},[t._t("default")],2),t._v(" "),s("jet-dialog-modal",{attrs:{show:t.confirmingPassword},on:{close:function(e){t.confirmingPassword=!1}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            "+t._s(t.title)+"\n        ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n            "+t._s(t.content)+"\n\n            "),s("div",{staticClass:"mt-4"},[s("jet-input",{ref:"password",staticClass:"mt-1 block w-3/4",attrs:{type:"password",placeholder:"Password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirmPassword(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error}})],1)]},proxy:!0},{key:"footer",fn:function(){return[s("jet-secondary-button",{nativeOn:{click:function(e){t.confirmingPassword=!1}}},[t._v("\n                Nevermind\n            ")]),t._v(" "),s("jet-button",{staticClass:"ml-2",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing},nativeOn:{click:function(e){return t.confirmPassword(e)}}},[t._v("\n                "+t._s(t.button)+"\n            ")])]},proxy:!0}])})],1)}),[],!1,null,null,null).exports,f=s(36),m={components:{JetActionSection:n.a,JetButton:o.a,JetConfirmsPassword:d,JetDangerButton:f.a,JetSecondaryButton:c.a},data:function(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication:function(){var t=this;this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0}).then((function(){return Promise.all([t.showQrCode(),t.showRecoveryCodes()])})).then((function(){t.enabling=!1}))},showQrCode:function(){var t=this;return axios.get("/user/two-factor-qr-code").then((function(e){t.qrCode=e.data.svg}))},showRecoveryCodes:function(){var t=this;return axios.get("/user/two-factor-recovery-codes").then((function(e){t.recoveryCodes=e.data}))},regenerateRecoveryCodes:function(){var t=this;axios.post("/user/two-factor-recovery-codes").then((function(e){t.showRecoveryCodes()}))},disableTwoFactorAuthentication:function(){var t=this;this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0}).then((function(){t.disabling=!1}))}},computed:{twoFactorEnabled:function(){return!this.enabling&&this.$page.user.two_factor_enabled}}},p=Object(u.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-action-section",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Two Factor Authentication\n    ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Add additional security to your account using two factor authentication.\n    ")]},proxy:!0},{key:"content",fn:function(){return[t.twoFactorEnabled?s("h3",{staticClass:"text-lg font-medium text-gray-900"},[t._v("\n            You have enabled two factor authentication.\n        ")]):s("h3",{staticClass:"text-lg font-medium text-gray-900"},[t._v("\n            You have not enabled two factor authentication.\n        ")]),t._v(" "),s("div",{staticClass:"mt-3 max-w-xl text-sm text-gray-600"},[s("p",[t._v("\n                When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.\n            ")])]),t._v(" "),t.twoFactorEnabled?s("div",[t.qrCode?s("div",[s("div",{staticClass:"mt-4 max-w-xl text-sm text-gray-600"},[s("p",{staticClass:"font-semibold"},[t._v("\n                        Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.\n                    ")])]),t._v(" "),s("div",{staticClass:"mt-4 dark:p-4 dark:w-56 dark:bg-white",domProps:{innerHTML:t._s(t.qrCode)}})]):t._e(),t._v(" "),t.recoveryCodes.length>0?s("div",[s("div",{staticClass:"mt-4 max-w-xl text-sm text-gray-600"},[s("p",{staticClass:"font-semibold"},[t._v("\n                        Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.\n                    ")])]),t._v(" "),s("div",{staticClass:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},t._l(t.recoveryCodes,(function(e){return s("div",{key:e},[t._v("\n                        "+t._s(e)+"\n                    ")])})),0)]):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"mt-5"},[t.twoFactorEnabled?s("div",[s("jet-confirms-password",{on:{confirmed:t.regenerateRecoveryCodes}},[t.recoveryCodes.length>0?s("jet-secondary-button",{staticClass:"mr-3"},[t._v("\n                        Regenerate Recovery Codes\n                    ")]):t._e()],1),t._v(" "),s("jet-confirms-password",{on:{confirmed:t.showRecoveryCodes}},[0==t.recoveryCodes.length?s("jet-secondary-button",{staticClass:"mr-3"},[t._v("\n                        Show Recovery Codes\n                    ")]):t._e()],1),t._v(" "),s("jet-confirms-password",{on:{confirmed:t.disableTwoFactorAuthentication}},[s("jet-danger-button",{class:{"opacity-25":t.disabling},attrs:{disabled:t.disabling}},[t._v("\n                        Disable\n                    ")])],1)],1):s("div",[s("jet-confirms-password",{on:{confirmed:t.enableTwoFactorAuthentication}},[s("jet-button",{class:{"opacity-25":t.enabling},attrs:{type:"button",disabled:t.enabling}},[t._v("\n                        Enable\n                    ")])],1)],1)])]},proxy:!0}])})}),[],!1,null,null,null);e.default=p.exports},15:function(t,e,s){"use strict";var n={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}},o=s(0),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"form-input rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null);e.a=a.exports},16:function(t,e,s){"use strict";var n={props:["message"]},o=s(0),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.message,expression:"message"}]},[e("p",{staticClass:"text-sm text-red-600"},[this._v("\n        "+this._s(this.message)+"\n    ")])])}),[],!1,null,null,null);e.a=a.exports},17:function(t,e,s){"use strict";var n={props:{type:{type:String,default:"submit"}}},o=s(0),a=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},18:function(t,e,s){"use strict";var n={props:{type:{type:String,default:"button"}}},o=s(0),a=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},28:function(t,e,s){"use strict";var n={components:{JetSectionTitle:s(43).a}},o=s(0),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("div",{staticClass:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},[t._t("content")],2)])],1)}),[],!1,null,null,null);e.a=a.exports},29:function(t,e,s){"use strict";var n={components:{Modal:s(45).a},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}},o=s(0),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:t.show,"max-width":t.maxWidth,closeable:t.closeable},on:{close:t.close}},[s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"text-lg"},[t._t("title")],2),t._v(" "),s("div",{staticClass:"mt-4"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"px-6 py-4 bg-gray-100 text-right"},[t._t("footer")],2)])}),[],!1,null,null,null);e.a=a.exports},36:function(t,e,s){"use strict";var n={props:{type:{type:String,default:"button"}}},o=s(0),a=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},43:function(t,e,s){"use strict";var n=s(0),o=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-span-1"},[e("div",{staticClass:"px-4 sm:px-0"},[e("h3",{staticClass:"text-lg font-medium text-gray-900"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-600"},[this._t("description")],2)])])}),[],!1,null,null,null);e.a=o.exports},45:function(t,e,s){"use strict";var n={props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:function(t){document.body.style.overflow=t?"hidden":null}}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.show&&t.close()};document.addEventListener("keydown",e),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}},o=s(0),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("portal",{attrs:{to:"modal"}},[e("transition",{attrs:{"leave-active-class":"duration-200"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"fixed top-0 inset-x-0 px-4 pt-6 sm:px-0 sm:flex sm:items-top sm:justify-center"},[e("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"fixed inset-0 transform transition-all",on:{click:this.close}},[e("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])]),this._v(" "),e("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full",class:this.maxWidthClass},[this._t("default")],2)])],1)])],1)}),[],!1,null,null,null);e.a=a.exports}}]);