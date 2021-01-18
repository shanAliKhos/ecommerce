(window.webpackJsonp=window.webpackJsonp||[]).push([[56,83,134,140,156],{0:function(t,e,i){"use strict";function l(t,e,i,l,s,r,a,o){var n,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),l&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=n):s&&(n=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),n)if(c.functional){c._injectStyles=n;var d=c.render;c.render=function(t,e){return n.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,n):[n]}return{exports:t,options:c}}i.d(e,"a",(function(){return l}))},115:function(t,e,i){var l=i(349);"string"==typeof l&&(l=[[t.i,l,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(9)(l,s);l.locals&&(t.exports=l.locals)},2:function(t,e,i){"use strict";i.r(e);var l={props:{loading:Boolean}},s=i(0),r=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",this._b({staticClass:"flex items-center uppercase z-40",attrs:{disabled:this.loading}},"button",this.$attrs,!1),[this.loading?e("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},292:function(t,e,i){"use strict";i.r(e);var l=i(3),s=i(2),r=i(5),a={metaInfo:function(){return{title:"".concat(this.$page.Order.OrderNumber," show")}},layout:l.default,components:{LoadingButton:s.default,BackButton:r.default},data:function(){return{sending:!1}},methods:{cancel:function(){var t=this,e=this;e.$swal.fire({title:"Are you sure?",text:"You will be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, cancel it!"}).then((function(i){i.isConfirmed&&e.$inertia.delete(e.route("admin.order.destroy",e.Order.id),{preserveState:!0,preserveScroll:!0,onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1}})}))}},computed:{StatusIcon:function(){switch(this.$page.Order.Status){case"pending":return"text-yellow-600 text-bold uppercase";case"processing":return"text-blue-600 text-bold uppercase";case"completed":return"text-green-600 text-bold uppercase";case"decline":return"text-red-600 text-bold uppercase"}},Order:function(){return this.$page.Order}},mounted:function(){this.$root.$emit("sidebar-close")}},o=i(0),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"text-sm font-semibold mb-6",attrs:{"aria-label":"Breadcrumb"}},[i("ol",{staticClass:"list-none p-0 inline-flex"},[i("li",{staticClass:"flex items-center text-blue-500"},[i("inertia-link",{staticClass:"text-gray-500",attrs:{href:t.route("admin.dashboard")}},[t._v("Home")]),t._v(" "),i("svg",{staticClass:"  w-3 h-3 mx-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[i("path",{attrs:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])],1),t._v(" "),t._m(0)]),t._v(" "),i("BackButton")],1),t._v(" "),i("div",{staticClass:"my-8 p-10 bg-white rounded shadow-xl"},[i("p",{staticClass:"pb-6 flex font-semibold text-xl text-gray-400"},[t._v("Order# "+t._s(t.Order.OrderNumber))]),t._v(" "),i("div",{staticClass:"flex flex-wrap -mx-3 mb-5 "},[i("div",{staticClass:"w-full md:w-1/3 px-3 md:mb-0"},[i("div",{staticClass:"border border-gray-200 px-5 py-5 mr-2 shadow h-60"},[i("p",{staticClass:"pb-6 flex font-semibold text-lg text-blue-400 uppercase"},[t._v("Placed by")]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400 uppercase"},[t._v(" Name : "+t._s(t.Order.user.name))]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400 uppercase"},[t._v(" Email : "),i("span",{staticClass:"lowercase pl-2"},[t._v(t._s(t.Order.user.email))])]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400"},[t._v(" created_at : "),i("br"),t._v(" "+t._s(t.Order.created_at))]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400"},[t._v(" updated_at : "),i("br"),t._v(" "+t._s(t.Order.updated_at))])])]),t._v(" "),i("div",{staticClass:"w-full md:w-1/3 px-3 md:mb-0 mt-5 md:mt-0"},[i("div",{staticClass:"border border-gray-200 px-5 py-5 mr-2 shadow h-60"},[i("p",{staticClass:"pb-6 flex font-semibold text-lg text-blue-400 uppercase"},[t._v("Ship To")]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400 uppercase"},[t._v(" "+t._s(t.Order.CardHolderName))]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400 uppercase"},[t._v(" "+t._s(t.Order.Address)+" ")]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400 uppercase"},[t._v(" "+t._s(t.Order.City)+" , "+t._s(t.Order.Country)+" ,"+t._s(t.Order.PostalCode))]),t._v(" "),i("p",{staticClass:"flex font-semibold text-sm text-gray-400 uppercase"},[t._v(" "+t._s(t.Order.PhoneNumber))])])]),t._v(" "),i("div",{staticClass:"w-full md:w-1/3 px-3 md:mb-0 mt-5 md:mt-0"},[i("div",{staticClass:"border border-gray-200 px-5 py-5 mr-2 shadow h-60 "},[i("p",{staticClass:"pb-6 flex font-semibold text-lg text-blue-400 uppercase"},[t._v("Details")]),t._v(" "),i("p",{staticClass:"font-semibold text-sm text-gray-400 uppercase"},[t._v("Status : "),i("span",{class:t.StatusIcon},[t._v(t._s(t.Order.Status)+" ")])]),t._v(" "),i("p",{staticClass:"font-semibold text-sm text-gray-400 uppercase"},[t._v("Amount : "),i("span",{staticClass:"text-red-500"},[t._v(" $"+t._s(t.Order.GrandTotal))])]),t._v(" "),i("p",{staticClass:"font-semibold text-sm text-gray-400 uppercase"},[t._v("Payment Method : "),i("span",{staticClass:"text-red-400"},[t._v(" "+t._s(t.Order.PaymentMethod))])]),t._v(" "),i("p",{staticClass:"font-semibold text-sm text-gray-400 uppercase"},[t._v("Payment Status : \n                        "),i("span",{class:{"text-green-500":1==t.Order.PaymentStatus,"text-red-500":1!==t.Order.PaymentStatus}},[t._v("\n                            "+t._s(1==t.Order.PaymentStatus?"Completed":"Not Completed")+"  \n                        ")])]),t._v(" "),i("p",{staticClass:"font-semibold text-sm text-gray-400 uppercase"},[t._v("Payment Track : "+t._s(t.Order.PaymentToken)+" ")])])])]),t._v(" "),i("div",{staticClass:"flex flex-wrap mx-3 mb-10 mt-10 "},[i("p",{staticClass:"pb-6 flex font-semibold text-lg text-blue-400 uppercase"},[t._v("Items")]),t._v(" "),i("table",{staticClass:"border-collapse w-full table-auto shadow"},[t._m(1),t._v(" "),i("tbody",t._l(t.Order.items,(function(e,l){return i("tr",{key:l,staticClass:"bg-white lg:hover:bg-gray-50 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"},[i("td",{staticClass:"w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static "},[i("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("#")]),t._v(" "),i("p",{staticClass:"py-5  lg:p-1 "},[t._v(t._s(l+1))])]),t._v(" "),i("td",{staticClass:"w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static "},[i("p",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("PRODUCT")]),t._v(" "),i("p",{staticClass:"py-5  lg:p-1 "},[t._v(t._s(e.product.name))])]),t._v(" "),i("td",{staticClass:"w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[i("span",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("SKU")]),t._v(" "),i("p",{staticClass:"py-5  lg:p-1 "},[t._v(t._s(e.product.sku))])]),t._v(" "),i("td",{staticClass:"w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[i("span",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("QTY")]),t._v(" "),i("p",{staticClass:"py-5  lg:p-1 "},[t._v(t._s(e.Quantity))])]),t._v(" "),i("td",{staticClass:"w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static"},[i("span",{staticClass:"lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"},[t._v("SUBTOTAL")]),t._v(" "),i("p",{staticClass:"py-5  lg:p-1 "},[t._v(t._s(e.Price))])])])})),0)])]),t._v(" "),i("div",{staticClass:"lg:flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-5 mb-5"},["pending"!==t.Order.Status?i("inertia-link",{staticClass:"mt-2 flex items-center uppercase justify-center transition duration-700 ease-in-out bg-yellow-400 hover:bg-yellow-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2",attrs:{as:"button",type:"button",data:{Status:"pending"},method:"put","preserve-scroll":"",href:t.route("admin.order.update",this.Order.id)}},[i("i",{staticClass:"fa fa-fw fa-lg fa-circle-o-notch"}),i("span",[t._v("Pending")])]):t._e(),t._v(" "),"processing"!==t.Order.Status?i("inertia-link",{staticClass:"mt-2 flex items-center uppercase justify-center transition duration-700 ease-in-out bg-blue-400 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2",attrs:{as:"button",type:"button",data:{Status:"processing"},method:"put","preserve-scroll":"",href:t.route("admin.order.update",this.Order.id)}},[i("i",{staticClass:"fa fa-fw fa-lg fa-circle-o-notch"}),i("span",[t._v("Process")])]):t._e(),t._v(" "),"completed"!==t.Order.Status?i("inertia-link",{staticClass:"mt-2 flex items-center uppercase justify-center transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2",attrs:{as:"button",type:"button",method:"put","preserve-scroll":"",data:{Status:"completed"},href:t.route("admin.order.update",this.Order.id)}},[i("i",{staticClass:"fa fa-fw fa-lg fa-check-circle"}),i("span",[t._v("Completed")])]):t._e(),t._v(" "),"decline"!==t.Order.Status?i("button",{staticClass:"mt-2 w-full lg:w-auto  flex items-center uppercase justify-center transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2",attrs:{as:"button",type:"button",disabled:t.sending},on:{click:t.cancel}},[t.sending?i("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):i("i",{staticClass:"fa fa-fw fa-lg fa-remove"}),t._v("\n                Cancel\n            ")]):t._e()],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"flex items-center"},[e("a",{staticClass:"text-gray-400",attrs:{href:"#"}},[this._v("Order Show")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",{staticClass:"bg-gray-100"},[i("th",{staticClass:"p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden  lg:table-cell"},[t._v("#")]),t._v(" "),i("th",{staticClass:"p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell"},[t._v("PRODUCT")]),t._v(" "),i("th",{staticClass:"p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell"},[t._v("SKU")]),t._v(" "),i("th",{staticClass:"p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell"},[t._v("QTY")]),t._v(" "),i("th",{staticClass:"p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell"},[t._v("SUBTOTAL")])])])}],!1,null,null,null);e.default=n.exports},349:function(t,e,i){(t.exports=i(8)(!1)).push([t.i,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""])},354:function(t,e,i){"use strict";i(115)},5:function(t,e,i){"use strict";i.r(e);var l={methods:{back:function(){return window.history.back()}}},s=i(0),r=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",this._b({staticClass:"transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right",on:{click:this.back}},"button",this.$attrs,!1),[e("svg",{staticClass:"fill-current w-4 h-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule":"evenodd"}})]),this._v(" "),this._t("default"),this._v(" "),e("span",[this._v("Back.")])],2)}),[],!1,null,null,null);e.default=r.exports}}]);