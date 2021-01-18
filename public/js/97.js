(window.webpackJsonp=window.webpackJsonp||[]).push([[97,140,156],{0:function(t,e,r){"use strict";function s(t,e,r,s,l,o,a,n){var i,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=r,d._compiled=!0),s&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),a?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=i):l&&(i=n?function(){l.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:l),i)if(d.functional){d._injectStyles=i;var c=d.render;d.render=function(t,e){return i.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,i):[i]}return{exports:t,options:d}}r.d(e,"a",(function(){return s}))},2:function(t,e,r){"use strict";r.r(e);var s={props:{loading:Boolean}},l=r(0),o=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",this._b({staticClass:"flex items-center uppercase z-40",attrs:{disabled:this.loading}},"button",this.$attrs,!1),[this.loading?e("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},77:function(t,e,r){"use strict";r.r(e);var s={props:["Customer","CustomerIndex"],components:{LoadingButton:r(2).default},data:function(){return{sending:!1}},methods:{destroy:function(){var t=this;t.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&t.$inertia.delete(t.route("admin.customer.destroy",t.Customer.id),{preserveState:!0,preserveScroll:!0,onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1}})}))},defaultPhotoUrl:function(t){return"https://ui-avatars.com/api/?name="+t+"&color=7F9CF5&background=EBF4FF"}},computed:{Image:function(){return self=this,self.Customer.profile_photo_url}}},l=r(0),o=Object(l.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"text-gray-400 font-semibold bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"},[r("td",{staticClass:"w-full lg:w-auto p-3  text-center border border-b border-gray-300 block lg:table-cell relative lg:static"},[r("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("#")]),t._v(" "),r("p",{staticClass:"py-5  lg:p-1"},[t._v("\r\n            "+t._s(t.CustomerIndex+1)+"\r\n        ")])]),t._v(" "),r("td",{staticClass:"w-full lg:w-auto p-3  text-center border border-b border-gray-300 block lg:table-cell relative lg:static"},[r("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("IMAGE")]),t._v(" "),r("div",{staticClass:"flex items-center py-5  lg:p-1 "},[r("div",{staticClass:"flex-shrink-0 h-full w-full "},[r("img",{staticClass:"h-full w-full sm:w-44 sm:h-44 lg:w-16 lg:h-16 rounded",attrs:{src:t.Image,alt:""}})])])]),t._v(" "),r("td",{staticClass:"w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[r("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("NAME")]),t._v(" "),r("p",{staticClass:"py-5  lg:p-1"},[t._v(t._s(t.Customer.name))])]),t._v(" "),r("td",{staticClass:"w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[r("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("Email")]),t._v(" "),r("p",{staticClass:"py-5  lg:p-1"},[t._v(t._s(t.Customer.email))])]),t._v(" "),r("td",{staticClass:"w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[r("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("Email Verified")]),t._v(" "),r("p",{staticClass:"py-5  lg:p-1"},[t.Customer.email_verified_at?r("span",{staticClass:"rounded bg-green-400 py-1 px-3 text-xs text-white"},[t._v("YES")]):r("span",{staticClass:"rounded bg-red-400 py-1 px-3 text-xs text-white"},[t._v("NO")])])]),t._v(" "),r("td",{staticClass:"w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[r("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("Actions")]),t._v(" "),r("div",{staticClass:"inline-flex py-5  lg:p-1"},[r("inertia-link",{staticClass:" transition duration-500 ease-in-out bg-transparent hover:bg-blue-300 text-blue-400 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3",attrs:{href:t.route("admin.customer.show",t.Customer.id)}},[r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}),t._v(" "),r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}})])]),t._v(" "),r("button",{staticClass:"transition duration-500 ease-in-out bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded inline-flex items-center",attrs:{type:"button"},on:{click:t.destroy}},[t.sending?r("svg",{staticClass:"animate-spin h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):r("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);