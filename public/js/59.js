(window.webpackJsonp=window.webpackJsonp||[]).push([[59,129],{0:function(t,e,n){"use strict";function s(t,e,n,s,a,i,o,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):a&&(c=r?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return s}))},112:function(t,e,n){var s=n(329);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(12)(s,a);s.locals&&(t.exports=s.locals)},328:function(t,e,n){"use strict";n(112)},329:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".contacts-list[data-v-a600736a]{flex:2;max-height:100%;height:600px;overflow:scroll;border-left:1px solid #a6a6a6;ul{list-style-type:none;padding-left:0;li{display:flex;padding:2px;border-bottom:1px solid #aaa;height:80px;position:relative;cursor:pointer;&.selected{background:#81c4f9}span.unread{background:#82e0a8;color:#fff;position:absolute;right:11px;top:20px;font-weight:700;min-width:20px;justify-content:center;line-height:20px;font-size:12px;padding:0 4px;border-radius:3px}.avatar,span.unread{display:flex;align-items:center}.avatar{flex:1;img{width:35px;border-radius:50%;margin:0 auto}}.contact{flex:3;font-size:10px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;p{margin:0;&.name{font-weight:700}}}}}}",""])},86:function(t,e,n){"use strict";n.r(e);var s={props:{contacts:{type:Array,default:[]}},data:function(){return{selected:this.contacts.length?this.contacts[0]:null}},methods:{selectContact:function(t){this.selected=t,this.$emit("selected",t)}},computed:{sortedContacts:function(){var t=this;return _.sortBy(this.contacts,[function(e){return e==t.selected?1/0:e.unread}]).reverse()}}},a=(n(328),n(0)),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts-list"},[n("ul",t._l(t.sortedContacts,(function(e){return n("li",{key:e.id,class:{selected:e==t.selected},on:{click:function(n){return t.selectContact(e)}}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.profile_image,alt:e.name}})]),t._v(" "),n("div",{staticClass:"contact"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"email"},[t._v(t._s(e.email))])]),t._v(" "),e.unread?n("span",{staticClass:"unread"},[t._v(t._s(e.unread))]):t._e()])})),0)])}),[],!1,null,"a600736a",null);e.default=i.exports}}]);