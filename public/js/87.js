(window.webpackJsonp=window.webpackJsonp||[]).push([[87,115],{0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},53:function(t,e,n){"use strict";n.r(e);var r={props:["Link"],computed:{Next:function(){return"Next &raquo;"==this.Link.label?"font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer":""},Previous:function(){return"&laquo; Previous"==this.Link.label?"font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer":""}}},o=n(0),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.Link.url?n("inertia-link",t._b({staticClass:"font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer",class:{"bg-primary":t.Link.active},attrs:{href:t.Link.url,"preserve-scroll":""}},"inertia-link",t.$attrs,!1),[t._v("\n    "+t._s(t.Link.label)+"\n")]):t._e()}),[],!1,null,null,null);e.default=i.exports}}]);