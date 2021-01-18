(window.webpackJsonp=window.webpackJsonp||[]).push([[62,104,140,147,151,152,156],{0:function(t,e,s){"use strict";function n(t,e,s,n,i,a,o,l){var r,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=r):i&&(r=l?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),r)if(u.functional){u._injectStyles=r;var c=u.render;u.render=function(t,e){return r.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,r):[r]}return{exports:t,options:u}}s.d(e,"a",(function(){return n}))},17:function(t,e,s){"use strict";s.r(e);var n={components:{JetSectionTitle:s(42).default},computed:{hasActions:function(){return!!this.$slots.actions}}},i=s(0),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.$emit("submitted")}}},[s("div",{staticClass:"shadow overflow-hidden sm:rounded-md"},[s("div",{staticClass:"px-4 py-5 bg-white sm:p-6"},[s("div",{staticClass:"grid grid-cols-6 gap-6"},[t._t("form")],2)]),t._v(" "),t.hasActions?s("div",{staticClass:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"},[t._t("actions")],2):t._e()])])])],1)}),[],!1,null,null,null);e.default=a.exports},2:function(t,e,s){"use strict";s.r(e);var n={props:{loading:Boolean}},i=s(0),a=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",this._b({staticClass:"flex items-center uppercase z-40",attrs:{disabled:this.loading}},"button",this.$attrs,!1),[this.loading?e("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.default=a.exports},42:function(t,e,s){"use strict";s.r(e);var n=s(0),i=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-span-1"},[e("div",{staticClass:"px-4 sm:px-0"},[e("h3",{staticClass:"text-lg font-semibold text-gray-400 uppercase"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-semibold text-sm text-gray-400"},[this._t("description")],2)])])}),[],!1,null,null,null);e.default=i.exports},53:function(t,e,s){"use strict";s.r(e);var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"textarea-input-".concat(this._uid)}},value:String,label:String,error:String,labelRequire:Boolean},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()}}},i=s(0),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"control-label",attrs:{for:t.id}},[t._v(t._s(t.label)+": "),t.labelRequire?s("span",{staticClass:"m-l-5 text-danger"},[t._v(" *")]):t._e()]):t._e(),t._v(" "),s("textarea",t._b({ref:"input",class:{"is-invalid":t.error,"form-control":!0},attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"textarea",t.$attrs,!1)),t._v(" "),t.error?s("div",{staticClass:"invalid-feedback active"},[s("i",{staticClass:"fa fa-exclamation-circle fa-fw"}),t._v(" "),s("span",[t._v(t._s(t.error))])]):t._e()])}),[],!1,null,null,null);e.default=a.exports},6:function(t,e,s){"use strict";s.r(e);var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:null,label:String,error:String,labelRequire:{type:Boolean,default:!1},fixedClasses:{type:String,default:"right-0"}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},i=s(0),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-2 relative"},[t.label?s("label",{staticClass:"absolute rounded top-0  text-purple-600  px-1 text-xs font-semibold uppercase",class:t.fixedClasses,attrs:{for:t.id}},[t._v(t._s(t.label)),t.labelRequire?s("span",{staticClass:"text-red-500 text-xl"},[t._v(" *")]):t._e()]):t._e(),t._v(" "),s("input",t._b({ref:"input",staticClass:"transition duration-700 ease-in-out w-full px-4 py-2 bg-gray-50 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none  focus:border-purple-600 ",attrs:{id:t.id,type:t.type,"aria-label":t.label},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.error?s("p",{staticClass:"transition duration-700 ease-in-out absolute bottom-0 text-red-500 text-xs italic",class:t.fixedClasses},[t._v(t._s(t.error))]):t._e()])}),[],!1,null,null,null);e.default=a.exports},80:function(t,e,s){"use strict";s.r(e);var n=s(53),i=s(6),a=s(2),o=s(17),l={components:{TextareaInput:n.default,LoadingButton:a.default,FormSection:o.default,TextInput:i.default},props:{settings:Object},data:function(){return{form:{google_analytics:this.settings&&this.settings.google_analytics?this.google_analytics:null,facebook_pixels:this.settings&&this.settings.facebook_pixels?this.facebook_pixels:null},sending:!1}},methods:{update:function(){var t=new FormData;t.append("google_analytics",this.form.google_analytics||""),t.append("facebook_pixels",this.form.facebook_pixels||""),t.append("_method","put"),this.$emit("form-is-updated",t),this.sending=!0}},mounted:function(){var t=this;this.$root.$on("sending-finished",(function(){return t.sending=!1}))}},r=s(0),u=Object(r.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form-section",{on:{submitted:t.update},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Analytics\n    ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Update your account's Analytics information .\n    ")]},proxy:!0},{key:"form",fn:function(){return[s("text-input",{staticClass:"col-span-6 sm:col-span-6 mt-1 block w-full",attrs:{id:"google_analytics",type:"text",error:t.$page.errors.google_analytics,label:"google_analytics",labelRequire:!0,placeholder:"google_analytics","aria-label":"google_analytics"},model:{value:t.form.google_analytics,callback:function(e){t.$set(t.form,"google_analytics",e)},expression:"form.google_analytics"}}),t._v(" "),s("text-input",{staticClass:"col-span-6 sm:col-span-6 mt-1 block w-full",attrs:{id:"facebook_pixels",type:"text",error:t.$page.errors.facebook_pixels,label:"facebook_pixels",labelRequire:!0,placeholder:"facebook_pixels","aria-label":"facebook_pixels"},model:{value:t.form.facebook_pixels,callback:function(e){t.$set(t.form,"facebook_pixels",e)},expression:"form.facebook_pixels"}})]},proxy:!0},{key:"actions",fn:function(){return[s("loading-button",{staticClass:"transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2",attrs:{loading:t.sending,type:"submit",as:"button"}},[t._v("\n            Save\n                "),t.sending?t._e():s("svg",{staticClass:"transition duration-700 ease-in-out  h-5 w-5 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports}}]);