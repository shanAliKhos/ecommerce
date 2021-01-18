(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hidden sm:block"},[t("div",{staticClass:"py-8"},[t("div",{staticClass:"border-t border-gray-200"})])])}],!1,null,null,null);t.default=s.exports},12:function(e,t,a){"use strict";a.r(t);var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"select-input-".concat(this._uid)}},value:[String,Number,Boolean],label:String,error:String,labelRequire:{type:Boolean,default:!1},fixedClasses:{type:String,default:"right-0"}},data:function(){return{selected:this.value}},watch:{selected:function(e){this.$emit("input",e)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()}}},s=a(0),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-2 relative"},[e.label?a("label",{staticClass:"absolute rounded-lg top-0  text-purple-700 px-1 text-xs font-semibold uppercase z-20",class:e.fixedClasses,attrs:{for:e.id}},[e._v(e._s(e.label)),e.labelRequire?a("span",{staticClass:"text-red-500"},[e._v(" *")]):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"relative"},[a("select",e._b({directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],ref:"input",staticClass:"transition duration-700 ease-in-out w-full px-4 py-2 text-gray-700 bg-gray-50 rounded appearance-none shadow-sm hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none  hover:bg-white hover:shadow-2xl focus:shadow-2xl focus:border-purple-600",attrs:{id:e.id},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?a:a[0]}}},"select",e.$attrs,!1),[e._t("default")],2),e._v(" "),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",class:{"mt-5":e.label}},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),e._v(" "),e.error?a("p",{staticClass:"transition duration-700 ease-in-out absolute bottom-0 text-red-500 text-xs italic",class:e.fixedClasses},[e._v(e._s(e.error))]):e._e()])}),[],!1,null,null,null);t.default=i.exports},14:function(e,t,a){"use strict";a.r(t);var r={props:{value:null,label:String,accept:String,preview:!1,preview_img:null,defualt_preview_img:String,error:String},data:function(){return{imagePreview:null,showPreview:!1}},watch:{value:function(e){e||(this.$refs.file.value="")},defualt_preview_img:function(){this.value||(this.imagePreview=this.defaultPhotoUrl())}},methods:{filesize:function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB","GB","TB"][t]},browse:function(){this.$refs.file.click()},change:function(e){var t=this;this.$emit("input",e.target.files[0]);var a=new FileReader;a.onload=function(e){t.imagePreview=e.target.result,t.showPreview=!0},a.readAsDataURL(this.$refs.file.files[0])},remove:function(){this.$emit("input",null),this.imagePreview=this.defaultPhotoUrl()},defaultPhotoUrl:function(){return"https://ui-avatars.com/api/?name="+this.defualt_preview_img+"&color=7F9CF5&background=EBF4FF"}},created:function(){this.preview_img?(this.imagePreview=this.preview_img.replace("public","storage"),this.showPreview=!0):(this.imagePreview=this.defaultPhotoUrl(),this.showPreview=!0)}},s=a(0),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-1 relative border-2 border-gray-200 bg-gray-50"},[a("input",{ref:"file",staticClass:"hidden",class:{"is-invalid":e.error},attrs:{type:"file",accept:e.accept},on:{change:e.change}}),e._v(" "),e.label?a("label",{staticClass:"absolute rounded-lg top-0 right-0  text-purple-700  px-1 text-xs font-semibold uppercase",attrs:{for:e.label}},[e._v(e._s(e.label))]):e._e(),e._v(" "),a("div",{staticClass:"mt-3"},[e.showPreview?a("img",{staticClass:"rounded h-auto w-auto md:w-52 object-cover",attrs:{src:e.imagePreview,alt:"Current Photo"}}):e._e()]),e._v(" "),a("div",{staticClass:"mt-2"},[a("button",{staticClass:"mt-1 mr-1 inline-flex items-center px-2 py-1 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:"button"},on:{click:e.browse}},[e._v("\n        New Photo\n      ")]),e._v(" "),e.value?a("button",{staticClass:"mt-1 inline-flex items-center px-2 py-1 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:"button"},on:{click:e.remove}},[e._v("\n        Remove Photo\n      ")]):e._e()]),e._v(" "),e.error?a("p",{staticClass:" text-red-500 text-xs italic"},[e._v(e._s(e.error))]):e._e()])}),[],!1,null,null,null);t.default=i.exports},2:function(e,t,a){"use strict";a.r(t);var r={props:{loading:Boolean}},s=a(0),i=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("button",this._b({staticClass:"flex items-center uppercase z-40",attrs:{disabled:this.loading}},"button",this.$attrs,!1),[this.loading?t("svg",{staticClass:"transition  ease-in-out  animate-spin h-5 w-5 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"}})]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.default=i.exports},261:function(e,t,a){var r=a(379);"string"==typeof r&&(r=[[e.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(9)(r,s);r.locals&&(e.exports=r.locals)},378:function(e,t,a){"use strict";a(261)},379:function(e,t,a){(e.exports=a(8)(!1)).push([e.i,".slide-fade-enter-active{transition:all .5s ease-in-out}.slide-fade-leave-active{transition:all .2s ease-in-out}.slide-fade-enter,.slide-fade-leave-to{transform:translateY(100px);opacity:0}#DescriptionEditor{height:270px!important}",""])},39:function(e,t,a){"use strict";a.r(t);var r=a(11),s=a.n(r),i=a(35),l=a(2),o=a(14),n=a(6),u=a(12),c=a(10);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={components:{Multiselect:s.a,LoadingButton:l.default,FileInput:o.default,TextInput:n.default,SelectInput:u.default,SectionBorder:c.default,VueEditor:i.a},remember:"form",data:function(){var e;return d(e={sending:!1,form:{name:this.$page.Product?this.$page.Product.name:null,sku:this.$page.Product?this.$page.Product.sku:null,brand:this.$page.Product?this.$page.Product.brand:null,categories:this.$page.Product?this.$page.Product.categories:[],regular_price:this.$page.Product?this.$page.Product.regular_price:null,sale_price:this.$page.Product?this.$page.Product.sale_price:null,quantity:this.$page.Product?this.$page.Product.quantity:null,weight:this.$page.Product?this.$page.Product.weight:null,description:this.$page.Product?this.$page.Product.description:null,is_active:!this.$page.Product||this.$page.Product.is_active,is_featured:!!this.$page.Product&&this.$page.Product.is_featured,image:this.$page.Product?this.$page.Product.mainphoto_url:null,is_variable:!!this.$page.Product&&this.$page.Product.variations.length>0,attributes:this.$page.Product?this.$page.Product.variations:null}},"sending",!1),d(e,"showAttr",!1),e},methods:{store:function(){var e=this;self=this;var t=new FormData;t.append("name",self.form.name||""),t.append("sku",self.form.sku||null),t.append("brand_id",self.form.brand?self.form.brand.id:""),t.append("categories",JSON.stringify(self.form.categories)||""),t.append("is_variable",self.form.is_variable?1:0),t.append("Attributes",JSON.stringify(self.form.attributes)||null),t.append("regular_price",self.form.regular_price||0),t.append("sale_price",self.form.sale_price||0),t.append("quantity",self.form.quantity||0),t.append("weight",self.form.weight||0),t.append("description",self.form.description||""),t.append("is_active",self.form.is_active?1:0),t.append("is_featured",self.form.is_featured?1:0),t.append("ProductSkus",JSON.stringify(self.ProductSkus)||""),t.append("image",self.form.image||""),self.$page.Product&&t.append("_method","put"),self.$inertia.post(self.$page.Product?route("admin.product.update",self.$page.Product.id):route("admin.product.store"),t,{preserveState:!0,onStart:function(){return e.sending=!0},onFinish:function(){return e.sending=!1},onSuccess:function(){0!==Object.keys(e.$page.errors).length||self.$page.Product||(e.form={name:null,sku:null,brand:null,categories:[],regular_price:.01,sale_price:0,quantity:1,is_variable:0,weight:0,description:null,is_active:1,is_featured:0,image:[],attributes:[]})}})}},computed:{CategoriesOption:function(){return self=this,self.$page.categories},Brands:function(){return this.$page.brands},Attributes:function(){return this.$page.attributes},ProductSkus:function(){return this.$page.Product?this.$page.Product.skus:[]},ProductStatus:function(){return this.form.is_active?"Active":"Deactive"},ProductIsFeatured:function(){return this.form.is_featured?"Featured":"Not Featured"}},mounted:function(){this.$root.$emit("sidebar-close")}},f=(a(378),a(0)),v=Object(f.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-center"},[a("div",{staticClass:"w-full pl-0 md:pl-2"},[a("div",{staticClass:"leading-loose"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.store(t)}}},[a("p",{staticClass:"pb-6 flex font-semibold text-xl text-gray-400"},[e._v("Product Create")]),e._v(" "),a("div",{staticClass:"flex flex-wrap  mb-2"},[a("div",{staticClass:"w-full md:w-1/3 px-2  md:mb-0"},[a("file-input",{staticClass:"pr-6 pb-8 w-full px-5 py-2 text-gray-700 rounded",attrs:{preview_img:e.form.image,defualt_preview_img:e.form.name,error:e.$page.errors.image,type:"file",accept:"image/*",label:"Photo",preview:!0},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}}),e._v(" "),a("div",{staticClass:"flex flex-wrap item-center md:justify-end  "},[a("div",{staticClass:" w-1/2 "},[a("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"is_active"}},[a("div",{staticClass:"px-2 font-semibold ",class:{"text-green-400":e.form.is_active,"text-red-500":!e.form.is_active}},[e._v("Active")]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_active,expression:"form.is_active"}],staticClass:"hidden",attrs:{id:"is_active",type:"checkbox"},domProps:{checked:Array.isArray(e.form.is_active)?e._i(e.form.is_active,null)>-1:e.form.is_active},on:{change:function(t){var a=e.form.is_active,r=t.target,s=!!r.checked;if(Array.isArray(a)){var i=e._i(a,null);r.checked?i<0&&e.$set(e.form,"is_active",a.concat([null])):i>-1&&e.$set(e.form,"is_active",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.form,"is_active",s)}}}),e._v(" "),a("div",{staticClass:"toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner"}),e._v(" "),a("div",{staticClass:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"})])]),e._v(" "),e.$page.errors.is_active?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.is_active))]):e._e()]),e._v(" "),a("div",{staticClass:"w-1/2"},[a("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"is_featured"}},[a("div",{staticClass:" px-2 font-semibold ",class:{"text-green-400":e.form.is_featured,"text-red-500":!e.form.is_featured}},[e._v("Featured")]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_featured,expression:"form.is_featured"}],staticClass:"hidden",attrs:{id:"is_featured",type:"checkbox"},domProps:{checked:Array.isArray(e.form.is_featured)?e._i(e.form.is_featured,null)>-1:e.form.is_featured},on:{change:function(t){var a=e.form.is_featured,r=t.target,s=!!r.checked;if(Array.isArray(a)){var i=e._i(a,null);r.checked?i<0&&e.$set(e.form,"is_featured",a.concat([null])):i>-1&&e.$set(e.form,"is_featured",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.form,"is_featured",s)}}}),e._v(" "),a("div",{staticClass:"toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner"}),e._v(" "),a("div",{staticClass:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"})])]),e._v(" "),e.$page.errors.is_featured?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.is_featured))]):e._e()])]),e._v(" "),e.form.is_variable?e._e():a("text-input",{staticClass:"w-full ",attrs:{id:"sku",type:"text",autocomplete:"sku",error:e.$page.errors.sku,label:"#SKU",placeholder:"SKU"},model:{value:e.form.sku,callback:function(t){e.$set(e.form,"sku",t)},expression:"form.sku"}}),e._v(" "),a("text-input",{staticClass:"w-full ",attrs:{id:"quantity",type:"text",autocomplete:"quantity",error:e.$page.errors.quantity,label:"#Quantity",labelRequire:!0,placeholder:"Quantity","aria-label":"quantity"},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}}),e._v(" "),a("text-input",{staticClass:"w-full ",attrs:{id:"regular_price",type:"text",autocomplete:"regular_price",error:e.$page.errors.regular_price,label:"$ RegularPrice",labelRequire:!0,placeholder:"RegularPrice","aria-label":"regular_price"},model:{value:e.form.regular_price,callback:function(t){e.$set(e.form,"regular_price",t)},expression:"form.regular_price"}}),e._v(" "),a("text-input",{staticClass:"w-full ",attrs:{id:"sale_price",type:"text",autocomplete:"sale_price",error:e.$page.errors.sale_price,label:"$ SalePrice",placeholder:"SalePrice","aria-label":"sale_price"},model:{value:e.form.sale_price,callback:function(t){e.$set(e.form,"sale_price",t)},expression:"form.sale_price"}}),e._v(" "),a("text-input",{staticClass:"w-full",attrs:{id:"weight",type:"text",autocomplete:"weight",error:e.$page.errors.weight,label:"Weight",placeholder:"Weight","aria-label":"weight"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),e._v(" "),a("div",{staticClass:"w-full md:w-2/3 px-2 md:mb-0"},[a("text-input",{staticClass:"w-full mb-2",attrs:{id:"name",type:"text",autocomplete:"name",error:e.$page.errors.name,label:"Product Name",labelRequire:!0,placeholder:"Product Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("div",{staticClass:"flex py-2"},[a("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"is_variable"}},[a("div",{staticClass:" px-2 font-semibold ",class:{"text-green-400":e.form.is_variable,"text-red-500":!e.form.is_variable}},[e._v("Variations")]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.is_variable,expression:"form.is_variable"}],staticClass:"hidden",attrs:{id:"is_variable",type:"checkbox"},domProps:{checked:Array.isArray(e.form.is_variable)?e._i(e.form.is_variable,null)>-1:e.form.is_variable},on:{change:function(t){var a=e.form.is_variable,r=t.target,s=!!r.checked;if(Array.isArray(a)){var i=e._i(a,null);r.checked?i<0&&e.$set(e.form,"is_variable",a.concat([null])):i>-1&&e.$set(e.form,"is_variable",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.form,"is_variable",s)}}}),e._v(" "),a("div",{staticClass:"toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner"}),e._v(" "),a("div",{staticClass:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"})])]),e._v(" "),e.$page.errors.is_variable?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.is_variable))]):e._e()]),e._v(" "),a("transition-group",{attrs:{name:"slide-fade"}},[e.form.is_variable?a("div",{key:"add-attribute-multiselect",staticClass:"relative "},[a("label",{staticClass:"z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase",attrs:{for:"weight"}},[e._v("Product Attributes")]),e._v(" "),a("multiselect",{attrs:{"deselect-label":"remove this value",multiple:!0,"close-on-select":!1,"clear-on-select":!1,"track-by":"name",label:"name",placeholder:"Select an Attribute",options:e.Attributes,searchable:!0,"allow-empty":!0},model:{value:e.form.attributes,callback:function(t){e.$set(e.form,"attributes",t)},expression:"form.attributes"}}),e._v(" "),e.$page.errors.attributes?a("p",{staticClass:"z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.attributes))]):e._e()],1):e._e(),e._v(" "),e.form.is_variable?a("div",{key:"add-attribute-section-opts"},[a("transition-group",{attrs:{name:"slide-fade"}},e._l(e.form.attributes,(function(t,r){return a("div",{key:"attribute_value"+r,staticClass:"w-full md:mb-0 relative mt-2"},[a("label",{staticClass:"z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase",attrs:{for:"weight"}},[e._v("Attribute "+e._s(t.name))]),e._v(" "),a("multiselect",{attrs:{"deselect-label":"remove this value",multiple:!0,"close-on-select":!1,"clear-on-select":!1,"track-by":"name",label:"name",placeholder:"select "+t.name,options:t.attribute_values,searchable:!0,"allow-empty":!1},model:{value:t.product_attribute_values,callback:function(a){e.$set(t,"product_attribute_values",a)},expression:"attribute.product_attribute_values"}})],1)})),0)],1):e._e(),e._v(" "),e.form.is_variable?a("SectionBorder",{key:"varitation-border-bottom"}):e._e()],1),e._v(" "),a("div",{staticClass:"w-full  md:mb-0 relative mt-2"},[a("label",{staticClass:"z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase",attrs:{for:"weight"}},[e._v("Brands")]),e._v(" "),a("multiselect",{attrs:{"deselect-label":"Can't remove this value","track-by":"name",label:"name",placeholder:"Select Brand",options:e.Brands,searchable:!1,"allow-empty":!1},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}}),e._v(" "),e.$page.errors.brand?a("p",{staticClass:"z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.brand))]):e._e()],1),e._v(" "),a("div",{staticClass:"w-full md:mb-0 relative mt-2"},[a("label",{staticClass:"z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase",attrs:{for:"Categories"}},[e._v("Categories")]),e._v(" "),a("multiselect",{attrs:{options:e.CategoriesOption,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:"Select categories",label:"name","track-by":"name"},model:{value:e.form.categories,callback:function(t){e.$set(e.form,"categories",t)},expression:"form.categories"}}),e._v(" "),e.$page.errors.categories?a("p",{staticClass:"z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.categories))]):e._e()],1),e._v(" "),a("div",{staticClass:"mt-5 mb-5 relative "},[a("label",{staticClass:"absolute top-0 right-3  text-purple-600 px-1 py-0 text-xs font-bold uppercase",attrs:{for:"weight"}},[e._v("Description")]),e._v(" "),a("vue-editor",{staticClass:"transition duration-700 ease-in-out w-full bg-gray-50 rounded-lg shadow-sm hover:bg-white hover:shadow-2xl focus:bg-white focus:shadow-2xl focus:outline-none focus:border-purple-600 border-2 border-gray-200 z-20",attrs:{id:"DescriptionEditor"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),e.$page.errors.description?a("p",{staticClass:"z-20 absolute bottom-0 right-3 text-red-500 text-xs italic"},[e._v(e._s(e.$page.errors.description))]):e._e()],1)],1)]),e._v(" "),e.form.is_variable?a("SectionBorder",{key:"varitation-border-bottom"}):e._e(),e._v(" "),e.form.is_variable&&e.ProductSkus.length>0?a("div",{staticClass:"product-variations"},[a("p",{staticClass:"pb-6 flex font-semibold text-xl text-gray-400"},[e._v("Product Possible variations")]),e._v(" "),a("div",{staticClass:"flex flex-wrap "},e._l(e.ProductSkus,(function(t,r){return a("div",{key:r,staticClass:"w-full md:w-1/2   bg-white   mb-4 rounded shadow"},[a("div",{staticClass:"px-2 py-2 rounded-lg bg-gray-50 text-blue-800 font-semibold"},[e._v(e._s(t.sku))]),e._v(" "),a("div",{staticClass:"flex flex-wrap mb-2 px-2 py-2"},[a("div",{staticClass:"w-1/2 md:w-1/3"},e._l(t.skus_options,(function(t,r){return a("p",{key:r,staticClass:"text-gray-600"},[a("span",{staticClass:"font-semibold"},[e._v(e._s(t.variant_option.attributes_option.attribute.name)+" -")]),e._v(" "+e._s(t.variant_option.attributes_option.name))])})),0),e._v(" "),a("div",{staticClass:"w-1/2 md:w-2/3 md:flex md:flex-wrap px-2 md:mb-0 relative"},[a("text-input",{staticClass:"w-full px-2",attrs:{type:"number",autocomplete:"SkuQuantity",error:e.$page.errors.ProductSku?t.quantity:"",label:"#SKU Quantity",labelRequire:!0,placeholder:"Sku Quantity","aria-label":"sku quantity"},model:{value:t.quantity,callback:function(a){e.$set(t,"quantity",a)},expression:"ProductSku.quantity"}}),e._v(" "),a("text-input",{staticClass:"w-full  px-2",attrs:{type:"number",autocomplete:"regular_price",error:e.$page.errors.ProductSku?t.regular_price:"",label:"$ regular_price",labelRequire:!0,placeholder:"Regular Price","aria-label":"regular_price"},model:{value:t.regular_price,callback:function(a){e.$set(t,"regular_price",a)},expression:"ProductSku.regular_price"}}),e._v(" "),a("text-input",{staticClass:"w-full px-2",attrs:{type:"number",autocomplete:"sale_price",error:e.$page.errors.ProductSku?t.sale_price:"",label:"$ sale_price",labelRequire:!0,placeholder:"Sale Price","aria-label":"sale_price"},model:{value:t.sale_price,callback:function(a){e.$set(t,"sale_price",a)},expression:"ProductSku.sale_price"}})],1)])])})),0)]):e._e(),e._v(" "),a("div",{staticClass:"md:flex-none flex fixed bottom-0 right-0 z-50"},[a("div",{staticClass:" flex items-center md:justify-end px-2 py-2"},[a("loading-button",{staticClass:"uppercase w-full flex items-center justify-center transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-2 py-1  text-white font-semibold shadow inline-flex",attrs:{loading:e.sending,type:"submit",as:"button"}},[e._v("\r\n                            "+e._s(e.$page.Product?"update":"save")+"\r\n                            "),e.sending?e._e():a("svg",{staticClass:"transition duration-700 ease-in-out  h-5 w-5 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])])],1)])],1)])])])}),[],!1,null,null,null);t.default=v.exports},6:function(e,t,a){"use strict";a.r(t);var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:null,label:String,error:String,labelRequire:{type:Boolean,default:!1},fixedClasses:{type:String,default:"right-0"}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)}}},s=a(0),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-2 relative"},[e.label?a("label",{staticClass:"absolute rounded top-0  text-purple-600  px-1 text-xs font-semibold uppercase",class:e.fixedClasses,attrs:{for:e.id}},[e._v(e._s(e.label)),e.labelRequire?a("span",{staticClass:"text-red-500 text-xl"},[e._v(" *")]):e._e()]):e._e(),e._v(" "),a("input",e._b({ref:"input",staticClass:"transition duration-700 ease-in-out w-full px-4 py-2 bg-gray-50 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none  focus:border-purple-600 ",attrs:{id:e.id,type:e.type,"aria-label":e.label},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"input",e.$attrs,!1)),e._v(" "),e.error?a("p",{staticClass:"transition duration-700 ease-in-out absolute bottom-0 text-red-500 text-xs italic",class:e.fixedClasses},[e._v(e._s(e.error))]):e._e()])}),[],!1,null,null,null);t.default=i.exports}}]);