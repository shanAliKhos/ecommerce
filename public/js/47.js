(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{251:function(e,t,a){"use strict";a.r(t);var i=a(4),s=a(7),r=a(5),l=a(6),n=a(3),o=a(16),u=a.n(o),c={layout:i.default,components:{FileInput:s.default,TextInput:r.default,SelectInput:l.default,LoadingButton:n.default,Multiselect:u.a},metaInfo:{title:"Category-edit"},remember:"form",data:function(){return{form:{name:this.$page.Category.name?this.$page.Category.name:null,description:this.$page.Category.description?this.$page.Category.description:null,parent:this.$page.Category.parent?this.$page.Category.parent:null,is_featured:this.$page.Category.is_featured?this.$page.Category.is_featured:0,menu:this.$page.Category.menu?this.$page.Category.menu:0,image:this.$page.Category.image?this.$page.Category.image:null,is_active:this.$page.Category.is_active?this.$page.Category.is_active:0},imagePreview:"",showPreview:!1,sending:!1}},methods:{update:function(){var e=this,t=new FormData;t.append("name",this.form.name||""),t.append("description",this.form.description||""),t.append("parent_id",this.form.parent?this.form.parent.id:""),t.append("menu",this.form.menu||""),t.append("image",this.form.image||""),t.append("is_active",this.form.is_active||""),t.append("_method","put"),this.$inertia.post(route("admin.category.update",this.$page.Category.id),t,{preserveState:!0,preserveScroll:!0,onStart:function(){return e.sending=!0},onFinish:function(){return e.sending=!1}})},onFileChange:function(e){/\.(jpe?g|png|gif)$/i.test(e.target.files[0].name)?(this.form.image=e.target.files[0],this.ShowImage()):(this.$toasted.error("Fail ! invaild file"),this.showPreview=!1)},ShowImage:function(){var e=this,t=new FileReader;t.addEventListener("load",function(){e.showPreview=!0,e.imagePreview=t.result}.bind(e),!1),e.form.image&&/\.(jpe?g|png|gif)$/i.test(e.form.image.name)&&(console.log("here"),t.readAsDataURL(e.form.image))},ProductImage:function(e){return self=this,e?"/"+e.replace("public","storage"):"/"+e},removeImage:function(e){this.showPreview=!1,this.form.image="",this.imagePreview=""}},computed:{Categories:function(){return this.$page.Categories}}},p=a(0),d=Object(p.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"text-sm font-semibold mb-5",attrs:{"aria-label":"Breadcrumb"}},[a("ol",{staticClass:"list-none p-0 inline-flex"},[a("li",{staticClass:"flex items-center text-blue-500"},[a("inertia-link",{staticClass:"text-gray-700",attrs:{href:e.route("admin.dashboard")}},[e._v("Home")]),e._v(" "),a("svg",{staticClass:"fill-current w-3 h-3 mx-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[a("path",{attrs:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])],1),e._v(" "),e._m(0)]),e._v(" "),a("inertia-link",{staticClass:"transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right",attrs:{href:e.route("admin.category.index")}},[a("svg",{staticClass:"fill-current w-4 h-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule":"evenodd"}})]),e._v(" "),a("span",[e._v("Back")])])],1),e._v(" "),a("p",{staticClass:"text-xl pb-6 flex items-center"},[e._v("Edit Category")]),e._v(" "),a("div",{staticClass:"flex justify-center"},[a("div",{staticClass:"w-full pl-0 lg:pl-2"},[a("div",{staticClass:"leading-loose "},[a("form",{staticClass:"p-10 bg-white rounded shadow-xl",on:{submit:function(t){return t.preventDefault(),e.update(t)}}},[a("p",{staticClass:"text-lg text-gray-800 font-medium pb-4"},[e._v("Category information")]),e._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[a("div",{staticClass:"w-full md:w-1/2 px-3  md:mb-0"},[a("div",{staticClass:"mt-2"},[a("file-input",{staticClass:"pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded",attrs:{defualt_preview_img:e.form.name,preview_img:e.form.image,error:e.$page.errors.image,type:"file",accept:"image/*",label:"Image",preview:!0},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1)]),e._v(" "),a("div",{staticClass:"w-full md:w-1/2 px-3  md:mb-0"},[a("text-input",{staticClass:"w-full px-3  md:mb-0",attrs:{id:"name",type:"text",fixedClasses:"right-3 z-50",autocomplete:"name",error:e.$page.errors.name,label:"Name",labelRequire:!0,placeholder:"Name","aria-label":"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("select-input",{staticClass:"w-full px-3  md:mb-0  ",attrs:{fixedClasses:"right-3 z-50",error:e.$page.errors.is_featured,label:"Featured",labelRequire:!0},model:{value:e.form.is_featured,callback:function(t){e.$set(e.form,"is_featured",t)},expression:"form.is_featured"}},[a("option",{domProps:{value:0}},[e._v("YES")]),e._v(" "),a("option",{domProps:{value:1}},[e._v("No")])]),e._v(" "),a("select-input",{staticClass:"w-full px-3  md:mb-0 ",attrs:{fixedClasses:"right-3 z-50",error:e.$page.errors.menu,label:"Menu",labelRequire:!0},model:{value:e.form.menu,callback:function(t){e.$set(e.form,"menu",t)},expression:"form.menu"}},[a("option",{domProps:{value:0}},[e._v("No")]),e._v(" "),a("option",{domProps:{value:1}},[e._v("YES")])]),e._v(" "),a("select-input",{staticClass:"w-full  px-3  md:mb-0 ",attrs:{fixedClasses:"right-3 z-50",error:e.$page.errors.is_active,label:"Status",labelRequire:!0},model:{value:e.form.is_active,callback:function(t){e.$set(e.form,"is_active",t)},expression:"form.is_active"}},[a("option",{domProps:{value:0}},[e._v("Disable")]),e._v(" "),a("option",{domProps:{value:1}},[e._v("Active")])]),e._v(" "),a("div",{staticClass:"w-full px-3  md:mb-0  mt-2 relative"},[a("label",{staticClass:"z-50 absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",attrs:{for:"weight"}},[e._v("Parent Category")]),e._v(" "),a("multiselect",{attrs:{"deselect-label":"Can't remove this value","track-by":"name",label:"name",placeholder:"Parent Category",options:e.Categories,searchable:!1,"allow-empty":!0},model:{value:e.form.parent,callback:function(t){e.$set(e.form,"parent",t)},expression:"form.parent"}}),e._v(" "),e.$page.errors.parent?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.parent))]):e._e()],1)],1)]),e._v(" "),a("div",{staticClass:"mt-2"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"}],staticClass:"resize-none border w-full py-5 px-5 text-gray-700 bg-gray-200  rounded focus:outline-none focus:shadow-outline",attrs:{placeholder:"Category Description here ... "},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}}),e._v(" "),e.$page.errors.description?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.description))]):e._e()]),e._v(" "),a("div",{staticClass:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"},[a("loading-button",{staticClass:"flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2",attrs:{loading:e.sending,type:"submit",as:"button"}},[a("span",[e._v("Update")]),e._v(" "),e.sending?e._e():a("svg",{staticClass:"transition duration-700 ease-in-out  h-5 w-5 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])])],1)])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"flex items-center"},[t("a",{staticClass:"text-gray-600",attrs:{href:"#"}},[this._v("Edit Category")])])}],!1,null,null,null);t.default=d.exports},3:function(e,t,a){"use strict";a.r(t);var i={props:{loading:Boolean}},s=a(0),r=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("button",this._b({staticClass:"flex items-center uppercase",attrs:{disabled:this.loading}},"button",this.$attrs,!1),[this.loading?t("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},5:function(e,t,a){"use strict";a.r(t);var i={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:null,label:String,error:String,labelRequire:{type:Boolean,default:!1},fixedClasses:{type:String,default:"right-0"}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)}}},s=a(0),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-2 relative"},[e.label?a("label",{staticClass:"absolute top-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",class:e.fixedClasses,attrs:{for:e.id}},[e._v(e._s(e.label)),e.labelRequire?a("span",{staticClass:"text-red-500"},[e._v(" *")]):e._e()]):e._e(),e._v(" "),a("input",e._b({ref:"input",staticClass:"w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white",attrs:{id:e.id,type:e.type,"aria-label":e.label},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"input",e.$attrs,!1)),e._v(" "),e.error?a("p",{staticClass:"absolute bottom-0 text-red-500 text-xs italic",class:e.fixedClasses},[e._v(e._s(e.error))]):e._e()])}),[],!1,null,null,null);t.default=r.exports},6:function(e,t,a){"use strict";a.r(t);var i={inheritAttrs:!1,props:{id:{type:String,default:function(){return"select-input-".concat(this._uid)}},value:[String,Number,Boolean],label:String,error:String,labelRequire:{type:Boolean,default:!1},fixedClasses:{type:String,default:"right-0"}},data:function(){return{selected:this.value}},watch:{selected:function(e){this.$emit("input",e)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()}}},s=a(0),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-2 relative"},[e.label?a("label",{staticClass:"absolute top-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",class:e.fixedClasses,attrs:{for:e.id}},[e._v(e._s(e.label)),e.labelRequire?a("span",{staticClass:"text-red-500"},[e._v(" *")]):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"relative"},[a("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],ref:"input",staticClass:"focus:bg-white block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-4 px-4 pr-8 rounded leading-tight shadow focus:outline-none focus:shadow-outline",attrs:{id:e.id},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?a:a[0]}}},"select",e.$attrs,!1),[e._t("default")],2),e._v(" "),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",class:{"mt-5":e.label}},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),e._v(" "),e.error?a("p",{staticClass:"absolute bottom-0 text-red-500 text-xs italic",class:e.fixedClasses},[e._v(e._s(e.error))]):e._e()])}),[],!1,null,null,null);t.default=r.exports},7:function(e,t,a){"use strict";a.r(t);var i={props:{value:null,label:String,accept:String,preview:!1,preview_img:null,defualt_preview_img:String,error:String},data:function(){return{imagePreview:null,showPreview:!1}},watch:{value:function(e){e||(this.$refs.file.value="")},defualt_preview_img:function(){this.value||(this.imagePreview=this.defaultPhotoUrl())}},methods:{filesize:function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]},browse:function(){this.$refs.file.click()},change:function(e){var t=this;this.$emit("input",e.target.files[0]);var a=new FileReader;a.onload=function(e){t.imagePreview=e.target.result,t.showPreview=!0},a.readAsDataURL(this.$refs.file.files[0])},remove:function(){this.$emit("input",null),this.imagePreview=this.defaultPhotoUrl()},defaultPhotoUrl:function(){return"https://ui-avatars.com/api/?name="+this.defualt_preview_img+"&color=7F9CF5&background=EBF4FF"}},created:function(){this.preview_img?(this.imagePreview="/"+this.preview_img.replace("public","storage"),this.showPreview=!0):(this.imagePreview=this.defaultPhotoUrl(),this.showPreview=!0)}},s=a(0),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-2 relative"},[a("input",{ref:"file",staticClass:"hidden",class:{"is-invalid":e.error},attrs:{type:"file",accept:e.accept},on:{change:e.change}}),e._v(" "),e.label?a("label",{staticClass:"absolute top-0 right-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase",attrs:{for:e.label}},[e._v(e._s(e.label))]):e._e(),e._v(" "),a("div",{staticClass:"mt-2"},[e.showPreview?a("img",{staticClass:"rounded h-52 w-52 object-cover",attrs:{src:e.imagePreview,width:"100",height:"100",alt:"Current Photo"}}):e._e()]),e._v(" "),a("div",{staticClass:"p-1"},[a("button",{staticClass:"mt-2 mr-2 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:"button"},on:{click:e.browse}},[e._v("\n        New Photo\n      ")]),e._v(" "),e.value?a("button",{staticClass:"mt-2 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:"button"},on:{click:e.remove}},[e._v("\n        Remove Photo\n      ")]):e._e()]),e._v(" "),e.error?a("p",{staticClass:" text-red-500 text-xs italic"},[e._v(e._s(e.error))]):e._e()])}),[],!1,null,null,null);t.default=r.exports}}]);