(window.webpackJsonp=window.webpackJsonp||[]).push([[52,156],{0:function(t,s,e){"use strict";function r(t,s,e,r,n,a,o,i){var c,l="function"==typeof t?t.options:t;if(s&&(l.render=s,l.staticRenderFns=e,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=i?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,s){return c.call(s),u(t,s)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}e.d(s,"a",(function(){return r}))},101:function(t,s,e){"use strict";e.r(s);var r=e(24),n=e(20),a=e(33),o=e(18),i=e(19),c=e(34),l={components:{JetActionMessage:r.a,JetButton:n.a,JetFormSection:a.a,JetInput:o.a,JetInputError:i.a,JetLabel:c.a},data:function(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""},{bag:"updatePassword"})}},methods:{updatePassword:function(){var t=this;this.form.put(route("user-password.update"),{preserveScroll:!0}).then((function(){t.$refs.current_password.focus()}))}}},u=e(0),p=Object(u.a)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("jet-form-section",{on:{submitted:t.updatePassword},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Update Password\n    ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Ensure your account is using a long, random password to stay secure.\n    ")]},proxy:!0},{key:"form",fn:function(){return[e("div",{staticClass:"col-span-6 sm:col-span-4"},[e("jet-label",{attrs:{for:"current_password",value:"Current Password"}}),t._v(" "),e("jet-input",{ref:"current_password",staticClass:"mt-1 block w-full",attrs:{id:"current_password",type:"password",autocomplete:"current-password"},model:{value:t.form.current_password,callback:function(s){t.$set(t.form,"current_password",s)},expression:"form.current_password"}}),t._v(" "),e("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error("current_password")}})],1),t._v(" "),e("div",{staticClass:"col-span-6 sm:col-span-4"},[e("jet-label",{attrs:{for:"password",value:"New Password"}}),t._v(" "),e("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"password",type:"password",autocomplete:"new-password"},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}}),t._v(" "),e("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error("password")}})],1),t._v(" "),e("div",{staticClass:"col-span-6 sm:col-span-4"},[e("jet-label",{attrs:{for:"password_confirmation",value:"Confirm Password"}}),t._v(" "),e("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"password_confirmation",type:"password",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(s){t.$set(t.form,"password_confirmation",s)},expression:"form.password_confirmation"}}),t._v(" "),e("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error("password_confirmation")}})],1)]},proxy:!0},{key:"actions",fn:function(){return[e("jet-action-message",{staticClass:"mr-3",attrs:{on:t.form.recentlySuccessful}},[t._v("\n            Saved.\n        ")]),t._v(" "),e("jet-button",{class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing}},[t._v("\n            Save\n        ")])]},proxy:!0}])})}),[],!1,null,null,null);s.default=p.exports},18:function(t,s,e){"use strict";var r={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}},n=e(0),a=Object(n.a)(r,(function(){var t=this,s=t.$createElement;return(t._self._c||s)("input",{ref:"input",staticClass:"form-input rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(s){return t.$emit("input",s.target.value)}}})}),[],!1,null,null,null);s.a=a.exports},19:function(t,s,e){"use strict";var r={props:["message"]},n=e(0),a=Object(n.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.message,expression:"message"}]},[s("p",{staticClass:"text-sm text-red-600"},[this._v("\n        "+this._s(this.message)+"\n    ")])])}),[],!1,null,null,null);s.a=a.exports},20:function(t,s,e){"use strict";var r={props:{type:{type:String,default:"submit"}}},n=e(0),a=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:this.type}},[this._t("default")],2)}),[],!1,null,null,null);s.a=a.exports},24:function(t,s,e){"use strict";var r={props:["on"]},n=e(0),a=Object(n.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("transition",{attrs:{"leave-active-class":"transition ease-in duration-1000","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.on,expression:"on"}],staticClass:"text-sm text-gray-600"},[this._t("default")],2)])],1)}),[],!1,null,null,null);s.a=a.exports},33:function(t,s,e){"use strict";var r={components:{JetSectionTitle:e(44).a},computed:{hasActions:function(){return!!this.$slots.actions}}},n=e(0),a=Object(n.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[e("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),e("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.$emit("submitted")}}},[e("div",{staticClass:"shadow overflow-hidden sm:rounded-md"},[e("div",{staticClass:"px-4 py-5 bg-white sm:p-6"},[e("div",{staticClass:"grid grid-cols-6 gap-6"},[t._t("form")],2)]),t._v(" "),t.hasActions?e("div",{staticClass:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"},[t._t("actions")],2):t._e()])])])],1)}),[],!1,null,null,null);s.a=a.exports},34:function(t,s,e){"use strict";var r={props:["value"]},n=e(0),a=Object(n.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"block font-medium text-sm text-gray-700"},[this.value?s("span",[this._v(this._s(this.value))]):s("span",[this._t("default")],2)])}),[],!1,null,null,null);s.a=a.exports},44:function(t,s,e){"use strict";var r=e(0),n=Object(r.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"md:col-span-1"},[s("div",{staticClass:"px-4 sm:px-0"},[s("h3",{staticClass:"text-lg font-medium text-gray-900"},[this._t("title")],2),this._v(" "),s("p",{staticClass:"mt-1 text-sm text-gray-600"},[this._t("description")],2)])])}),[],!1,null,null,null);s.a=n.exports}}]);