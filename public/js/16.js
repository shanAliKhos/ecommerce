(window.webpackJsonp=window.webpackJsonp||[]).push([[16,60,61,129],{0:function(e,t,s){"use strict";function n(e,t,s,n,o,a,i,r){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=s,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):o&&(c=r?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}s.d(t,"a",(function(){return n}))},108:function(e,t,s){var n=s(321);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(12)(n,o);n.locals&&(e.exports=n.locals)},109:function(e,t,s){var n=s(323);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(12)(n,o);n.locals&&(e.exports=n.locals)},113:function(e,t,s){var n=s(331);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(12)(n,o);n.locals&&(e.exports=n.locals)},320:function(e,t,s){"use strict";s(108)},321:function(e,t,s){(e.exports=s(11)(!1)).push([e.i,".feed[data-v-071c4446]{background:#f0f0f0;height:100%;max-height:470px;overflow:scroll;ul{list-style-type:none;padding:5px;li{&.message{margin:10px 0;width:100%;.text{max-width:200px;border-radius:5px;padding:12px;display:inline-block}&.received{text-align:right;.text{background:#fff}}&.sent{text-align:left;.text{background:#90e0b2}}}}}}",""])},322:function(e,t,s){"use strict";s(109)},323:function(e,t,s){(e.exports=s(11)(!1)).push([e.i,".composer textarea[data-v-15ad932b]{width:96%;margin:10px;resize:none;border-radius:3px;border:1px solid #d3d3d3;padding:6px}",""])},330:function(e,t,s){"use strict";s(113)},331:function(e,t,s){(e.exports=s(11)(!1)).push([e.i,".conversation[data-v-afc8cc64]{flex:5;display:flex;flex-direction:column;justify-content:space-between;h1{font-size:20px;padding:10px;margin:0;border-bottom:1px dashed #d3d3d3}}",""])},53:function(e,t,s){"use strict";s.r(t);var n={props:{contact:{type:Object},messages:{type:Array,required:!0}},methods:{scrollToBottom:function(){var e=this;setTimeout((function(){e.$refs.feed.scrollTop=e.$refs.feed.scrollHeight-e.$refs.feed.clientHeight}),50)}},watch:{contact:function(e){this.scrollToBottom()},messages:function(e){this.scrollToBottom()}}},o=(s(320),s(0)),a=Object(o.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"feed",staticClass:"feed"},[e.contact?s("ul",e._l(e.messages,(function(t){return s("li",{key:t.id,class:"message"+(t.to==e.contact.id?" sent":" received")},[s("div",{staticClass:"text"},[e._v("\n                "+e._s(t.text)+"\n            ")])])})),0):e._e()])}),[],!1,null,"071c4446",null);t.default=a.exports},54:function(e,t,s){"use strict";s.r(t);var n={data:function(){return{message:""}},methods:{send:function(e){e.preventDefault(),""!=this.message&&(this.$emit("send",this.message),this.message="")}}},o=(s(322),s(0)),a=Object(o.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"composer"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"Message..."},domProps:{value:e.message},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}})])}),[],!1,null,"15ad932b",null);t.default=a.exports},87:function(e,t,s){"use strict";s.r(t);var n=s(53),o=s(54),a={props:{contact:{type:Object,default:null},messages:{type:Array,default:[]}},methods:{sendMessage:function(e){var t=this;this.contact&&axios.post("/conversation/send",{contact_id:this.contact.id,text:e}).then((function(e){t.$emit("new",e.data)}))}},components:{MessagesFeed:n.default,MessageComposer:o.default}},i=(s(330),s(0)),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"conversation"},[s("h1",[e._v(e._s(e.contact?e.contact.name:"Start Covesation by selecting contact"))]),e._v(" "),s("MessagesFeed",{attrs:{contact:e.contact,messages:e.messages}}),e._v(" "),e.contact?s("MessageComposer",{on:{send:e.sendMessage}}):e._e()],1)}),[],!1,null,"afc8cc64",null);t.default=r.exports}}]);