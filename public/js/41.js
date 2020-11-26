(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(t,e,s){var a=s(304);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(19)(a,r);a.locals&&(t.exports=a.locals)},277:function(t,e,s){"use strict";s.r(e);var a=s(2),r=s(79),i=s(35),l=s(93),n={layout:a.default,metaInfo:{title:"Product"},components:{ShopProductDetail:i.default,ProductAttributes:r.default,RelatedProductsSlider:l.default},computed:{Product:function(){return this.$page.Product}},mounted:function(){this.$root.$emit("sidebar-close")}},c=s(0),o=Object(c.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"flex relative"},[s("div",{staticClass:"bg-no-repeat bg-cover bg-center w-3/4 ml-auto h-56 sm:h-64 md:h-68",staticStyle:{"background-image":"url(./../../img/hero-image-04.jpg)"}}),t._v(" "),s("div",{staticClass:"w-full h-56 sm:h-64 md:h-68 bg-no-repeat bg-cover absolute top-0 left-0",staticStyle:{"background-image":"linear-gradient(90deg, rgba(55,36,31,1) 40%, rgba(0,0,0,0) 100%)"}},[s("div",{staticClass:"py-20 px-6 sm:px-12 lg:px-20"},[s("h1",{staticClass:"font-butlerregular text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl"},[t._v(t._s(t.Product.name))]),t._v(" "),s("div",{staticClass:"flex pt-2"},[s("inertia-link",{staticClass:"font-hkregular text-white text-base hover:text-primary transition-colors",attrs:{href:t.route("welcome")}},[t._v("Home")]),t._v(" "),s("span",{staticClass:"font-hkregular text-white text-base px-2"},[t._v(".")]),t._v(" "),s("inertia-link",{staticClass:"font-hkregular text-white text-base hover:text-primary transition-colors",attrs:{href:t.route("shop.index"),"preserce-scroll":""}},[t._v("shop")]),t._v(" "),s("span",{staticClass:"font-hkregular text-white text-base px-2"},[t._v(".")]),t._v(" "),s("span",{staticClass:"font-hkregular text-white text-base"},[t._v(t._s(t.Product.name))])],1)])])]),t._v(" "),s("shop-product-detail",{attrs:{Product:t.Product}}),t._v(" "),s("related-products-slider")],1)}),[],!1,null,null,null);e.default=o.exports},303:function(t,e,s){"use strict";s(100)},304:function(t,e,s){(t.exports=s(18)(!1)).push([t.i,".seleced{background-color:red}",""])},35:function(t,e,s){"use strict";s.r(e);var a={props:{Product:{type:Object,required:!0}},data:function(){return{CartItem:{id:this.Product.id?this.Product.id:null,name:this.Product.name?this.Product.name:"",slug:this.Product.slug?this.Product.slug:"",Instock:this.Product.quantity?this.Product.quantity:"",Qty:1,price:this.Product.sale_price?this.Product.sale_price:this.Product.regular_price,image:this.Product.image?this.Product.image:"./img/shoes-4.png"},Label:{Color:null,Title:null,Active:!1},activeTab:"description",selectedImage:null}},watch:{CartItemQty:function(t,e){(t>this.ProductQuantity||t<1)&&(this.CartItem.Qty=e)}},methods:{AddToCart:function(){this.$root.$emit("Add-To-Cart",this.CartItem)},SetLable:function(){if(this.Product.sale_price>0){var t=this.Product.regular_price,e=this.Product.sale_price,s=Math.round((t-e)/t*100)+"%OFF";this.Label={Color:"bg-primary",Title:s,Active:!0}}else this.Product.is_featured?this.Label={Color:"bg-v-blue",Title:"Trend",Active:!0}:this.Label={Color:"bg-v-green",Title:"new",Active:!0}}},computed:{ProductImages:function(){return self=this,"./../../"+self.Product.image.replace("public","storage")},CurrentPrice:function(){return this.$page.Product.sale_price?this.$page.Product.sale_price:this.$page.Product.regular_price},RegularPrice:function(){return this.$page.Product.regular_price},ProductQuantity:function(){return this.Product.quantity},ProductDescription:function(){return this.Product.description},IsOnSale:function(){return this.$page.Product.sale_price>0},CartItemQty:function(){return self=this,self.CartItem.Qty}},mounted:function(){this.SetLable()}},r=s(0),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"pt-16 pb-24 flex flex-col lg:flex-row justify-between -mx-5"},[s("div",{staticClass:"lg:1/2 flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between px-5"},[s("div",{staticClass:"sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col"},[s("div",{staticClass:"w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"},[s("div",{staticClass:"bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"},[s("div",{staticClass:"w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",staticStyle:{"background-image":"url(./../../img/backpack-1.png)"},on:{click:function(e){t.selectedImage=e.target.style.backgroundImage}}})])]),t._v(" "),s("div",{staticClass:"w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"},[s("div",{staticClass:"bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"},[s("div",{staticClass:"w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",staticStyle:{"background-image":"url(./../../img/backpack-2.png)"},on:{click:function(e){t.selectedImage=e.target.style.backgroundImage}}})])]),t._v(" "),s("div",{staticClass:"w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"},[s("div",{staticClass:"bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"},[s("div",{staticClass:"w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",staticStyle:{"background-image":"url(./../../img/backpack-3.png)"},on:{click:function(e){t.selectedImage=e.target.style.backgroundImage}}})])]),t._v(" "),s("div",{staticClass:"w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0"},[s("div",{staticClass:"bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center"},[s("div",{staticClass:"w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer",staticStyle:{"background-image":"url(./../../img/backpack-4.png)"},on:{click:function(e){t.selectedImage=e.target.style.backgroundImage}}})])])]),t._v(" "),s("div",{staticClass:"w-full sm:w-96 lg:w-80 xl:w-90 relative pb-5 sm:pb-0"},[s("div",{staticClass:"bg-v-pink border border-grey relative h-80 sm:h-94 xl:h-96 rounded flex items-center justify-center"},[s("div",{staticClass:"w-56 xl:w-64 h-76 sm:h-82 xl:h-86 my-6 sm:my-12 xl:my-24 bg-center bg-no-repeat bg-cover",style:"background-image:"+t.selectedImage})])])]),t._v(" "),s("div",{staticClass:"lg:w-1/2 pt-12 sm:pt-16 lg:pt-0 px-5"},[s("div",{staticClass:"product-title"},[s("div",{staticClass:"border-b border-grey-dark mb-8"},[s("div",{staticClass:"flex items-center"},[s("h2",{staticClass:"font-butlerregular text-3xl md:text-4xl lg:text-7xl"},[t._v(t._s(t.Product.name))]),t._v(" "),t.Label.Active?s("small",{staticClass:"rounded-full font-hkbold text-white uppercase text-sm text-center px-4 py-2 m-2",class:t.Label.Color},[t._v("\n                            "+t._s(t.Label.Title)+"\n                        ")]):t._e()]),t._v(" "),s("div",{staticClass:"flex items-center pt-3"},[s("span",{staticClass:"font-hkregular text-secondary text-2xl"},[t._v("\n                            "+t._s(t.$page.SiteOptions.Currency.Symbol)+" "+t._s(t.CurrentPrice)+" \n                        ")]),t._v(" "),t.IsOnSale?s("span",{staticClass:"font-hkregular text-grey-darker text-xl line-through pl-5"},[t._v("\n                            "+t._s(t.$page.SiteOptions.Currency.Symbol)+" "+t._s(t.RegularPrice)+" \n                        ")]):t._e()]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"product-availablity"},[s("div",{staticClass:"flex pb-5"},[s("p",{staticClass:"font-hkregular text-secondary"},[t._v("Availability:")]),t._v(" "),t.ProductQuantity>0?s("p",{staticClass:"font-hkbold text-v-green pl-3"},[t._v("In Stock "+t._s(t.ProductQuantity))]):s("p",{staticClass:"font-hkbold text-v-red pl-3"},[t._v("Out of Stock "+t._s(t.ProductQuantity))])])]),t._v(" "),s("div",{staticClass:"flex items-center justify-between pb-8"},[t._m(1),t._v(" "),s("div",{staticClass:"w-2/3 sm:w-5/6 flex",attrs:{"x-data":"{ productQuantity: 1 }"}},[s("label",{staticClass:"block relative h-0 w-0 overflow-hidden",attrs:{for:"quantity-form"}},[t._v("Quantity\n                        form")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.CartItem.Qty,expression:"CartItem.Qty",modifiers:{number:!0}}],staticClass:"form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center",attrs:{type:"number",id:"quantity-form",min:"1"},domProps:{value:t.CartItem.Qty},on:{input:function(e){e.target.composing||t.$set(t.CartItem,"Qty",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("div",{staticClass:"flex flex-col"},[s("span",{staticClass:"px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer",on:{click:function(e){t.CartItem.Qty++}}},[s("i",{staticClass:"bx bxs-up-arrow text-xs text-primary pointer-events-none"})]),t._v(" "),s("span",{staticClass:"px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer",on:{click:function(e){t.CartItem.Qty--}}},[s("i",{staticClass:"bx bxs-down-arrow text-xs text-primary pointer-events-none"})])])])]),t._v(" "),s("div",{staticClass:"flex pb-8 group"},[s("button",{staticClass:"btn btn-outline mr-4 md:mr-6",attrs:{type:"button"},on:{click:function(e){return t.AddToCart()}}},[t._v("\n                    Add to cart\n                ")]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"/cart"}},[t._v("\n                    BUY NOW\n                ")])]),t._v(" "),s("div",{staticClass:"product-short-description"},[s("p",{staticClass:"font-hkregular text-secondary pb-5"},[t._v("\n                    "+t._s(t.ProductDescription.substring(0,70)+"...")+"\n                ")])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),s("div",{staticClass:"pb-16 sm:pb-20 md:pb-24",attrs:{"x-data":"{ activeTab: 'description' }"}},[s("div",{staticClass:"tabs flex flex-col sm:flex-row",attrs:{role:"tablist"}},[s("span",{staticClass:"tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors",class:{active:"description"===t.activeTab},on:{click:function(e){t.activeTab="description"}}},[t._v("\n                Description\n            ")]),t._v(" "),s("span",{staticClass:"tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors",class:{active:"additional-information"===t.activeTab},on:{click:function(e){t.activeTab="additional-information"}}},[t._v("\n                Additional Information\n            ")]),t._v(" "),s("span",{staticClass:"tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors",class:{active:"reviews"===t.activeTab},on:{click:function(e){t.activeTab="reviews"}}},[t._v("\n                Reviews\n            ")])]),t._v(" "),s("div",{staticClass:"tab-content relative"},[s("div",{staticClass:"tab-pane bg-grey-light py-10 md:py-16   transition-opacity",class:{active:"description"===t.activeTab},attrs:{role:"tabpanel"}},[t._m(4)]),t._v(" "),s("div",{staticClass:"tab-pane bg-grey-light py-10 md:py-16   transition-opacity",class:{active:"additional-information"===t.activeTab},attrs:{role:"tabpanel"}},[t._m(5)]),t._v(" "),s("div",{staticClass:"tab-pane bg-grey-light py-10 md:py-16   transition-opacity",class:{active:"reviews"===t.activeTab},attrs:{role:"tabpanel"}},[t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center pt-3 pb-8"},[e("div",{staticClass:"flex items-center"},[e("i",{staticClass:"bx bxs-star text-primary"}),this._v(" "),e("i",{staticClass:"bx bxs-star text-primary"}),this._v(" "),e("i",{staticClass:"bx bxs-star text-primary"}),this._v(" "),e("i",{staticClass:"bx bxs-star text-primary"}),this._v(" "),e("i",{staticClass:"bx bxs-star text-primary"})]),this._v(" "),e("span",{staticClass:"font-hkregular text-sm text-secondary ml-2"},[this._v("(45)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/3 sm:w-1/5"},[e("p",{staticClass:"font-hkregular text-secondary"},[this._v("Quantity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex pb-2"},[e("p",{staticClass:"font-hkregular text-secondary"},[this._v("SKU:")]),this._v(" "),e("p",{staticClass:"font-hkbold text-secondary pl-3"},[this._v("\n                    KH12345")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"font-hkregular text-secondary"},[e("span",{staticClass:"pr-2"},[this._v("Categories:")]),this._v("Bag, Hand bag, Travel bag, Black\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-5/6 mx-auto text-center sm:text-left"},[e("div",{staticClass:"font-hkregular text-secondary text-base"},[this._v("\n                        Versatile, comfortable, and chic! Three words that describe Blake by Elyssi. This\n                        backpack purse is A durable leather backpack with two large compartments and 2\n                        smaller compartments on the front and back of it so you can carry all your\n                        belongings.\n\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-5/6 mx-auto"},[e("div",{staticClass:"font-hkregular text-secondary text-base"},[this._v("\n                        On the main compartment has multiple pockets available for your tools, chargers,\n                        make up, keys, etc. "),e("br"),e("br"),this._v(" Size::13.4”Lx 6.5”W x 15.4”H. "),e("br"),this._v(" Weight:\n                        1.57pounds. "),e("br"),this._v(" Color: light brown.\n\n                    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-5/6 mx-auto border-b border-grey-darker pb-8 text-center sm:text-left"},[s("div",{staticClass:"flex justify-center sm:justify-start items-center pt-3 xl:pt-5"},[s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"})]),t._v(" "),s("p",{staticClass:"font-hkbold text-secondary text-lg pt-3"},[t._v("\n                        Perfect for everyday use")]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"},[t._v("\n                        I loooveeeee this product!!! It feels so soft and smells like real leather!!! I\n                        ordered this fancy backpack looking for something that can be used at work and, at\n                        the same time, after work; and I found it. Honestly.. Amazing!!")]),t._v(" "),s("div",{staticClass:"flex justify-center sm:justify-start items-center pt-3"},[s("p",{staticClass:"font-hkregular text-grey-darkest text-sm"},[s("span",[t._v("By")]),t._v(" Melanie Ashwood")]),t._v(" "),s("span",{staticClass:"font-hkregular text-grey-darkest text-sm block px-4"},[t._v(".")]),t._v(" "),s("p",{staticClass:"font-hkregular text-grey-darkest text-sm"},[t._v("\n                            6 days ago")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-5/6 mx-auto border-b border-transparent pb-8 text-center sm:text-left"},[s("div",{staticClass:"flex justify-center sm:justify-start items-center pt-3 xl:pt-5"},[s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-primary"})]),t._v(" "),s("p",{staticClass:"font-hkbold text-secondary text-lg pt-3"},[t._v("\n                        Gift for my girlfriend")]),t._v(" "),s("p",{staticClass:"font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3"},[t._v("\n                        I paid this thing thinking about my girlfriend’s birthday present, however I had my\n                        doubts cuz’ she is kind of picky. But Seriously, from now on, Elyssi is my best\n                        friend! She loved it!! She’s crazy about it! DISCLAIMER: It is smaller than it\n                        appears. ")]),t._v(" "),s("div",{staticClass:"flex justify-center sm:justify-start items-center pt-3"},[s("p",{staticClass:"font-hkregular text-grey-darkest text-sm"},[s("span",[t._v("By")]),t._v(" Jake Houston")]),t._v(" "),s("span",{staticClass:"font-hkregular text-grey-darkest text-sm block px-4"},[t._v(".")]),t._v(" "),s("p",{staticClass:"font-hkregular text-grey-darkest text-sm"},[t._v("\n                            4 days ago")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"w-5/6 mx-auto"},[s("div",{staticClass:"flex flex-col sm:flex-row justify-between pt-10 -mx-5"},[s("div",{staticClass:"sm:w-1/2 px-5"},[s("label",{staticClass:"font-hkregular text-secondary text-sm block mb-2",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Enter your Name",id:"name"}})]),t._v(" "),s("div",{staticClass:"sm:w-1/2 px-5 pt-10 sm:pt-0"},[s("label",{staticClass:"font-hkregular text-secondary text-sm block mb-2",attrs:{for:"email"}},[t._v("Email\n                                address")]),t._v(" "),s("input",{staticClass:"form-input ",attrs:{type:"email",placeholder:"Enter your email",id:"email"}})])]),t._v(" "),s("div",{staticClass:"flex flex-col sm:flex-row justify-between pt-10 -mx-5"},[s("div",{staticClass:"sm:w-1/2 px-5"},[s("label",{staticClass:"font-hkregular text-secondary text-sm block mb-2",attrs:{for:"review_title"}},[t._v("Review\n                                Title")]),t._v(" "),s("input",{staticClass:"form-input ",attrs:{type:"text",placeholder:"Enter your review title",id:"review_title"}})]),t._v(" "),s("div",{staticClass:"sm:w-1/2 px-5 pt-10 sm:pt-0"},[s("label",{staticClass:"font-hkregular text-secondary text-sm block mb-2"},[t._v("Rating")]),t._v(" "),s("div",{staticClass:"flex pt-4"},[s("i",{staticClass:"bx bxs-star text-grey-darker text-xl pr-1"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-grey-darker text-xl pr-1"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-grey-darker text-xl pr-1"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-grey-darker text-xl pr-1"}),t._v(" "),s("i",{staticClass:"bx bxs-star text-grey-darker text-xl"})])])]),t._v(" "),s("div",{staticClass:"sm:w-12/25 pt-10"},[s("label",{staticClass:"font-hkregular text-secondary text-sm block mb-2",attrs:{for:"message"}},[t._v("Review\n                            Message")]),t._v(" "),s("textarea",{staticClass:"form-textarea",attrs:{placeholder:"Give your review tittle",id:"message"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"/"}},[this._v("\n                        Submit Review\n                    ")])])}],!1,null,null,null);e.default=i.exports},79:function(t,e,s){"use strict";s.r(e);var a={props:["Attributes"],data:function(){return{SelectedAttribute:{}}},mounted:function(){},methods:{SelectProduct:function(t){self=this,console.log(this.SelectedAttribute.length)}}},r=(s(303),s(0)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-attributes mt-2"},t._l(t.Attributes,(function(e,a){return s("div",{key:a,staticClass:"product-attribute mb-3"},[s("h5",[t._v(t._s(a))]),t._v(" "),s("div",{staticClass:"btn-group btn-group-xs mt-1 ",attrs:{role:"group","aria-label":"..."}},t._l(e,(function(e,r){return s("button",{key:r,staticClass:"btn btn-outline-primary btn-sm ml-1",class:{seleced:t.SelectedAttribute.id===e.id},on:{click:function(s){return t.SelectProduct(e)}}},[s("span","Size"===a?[t._v(t._s(e.AttributeValue.charAt(0).toUpperCase()))]:[t._v(t._s(e.AttributeValue)+" ")])])})),0),t._v(" "),s("hr")])})),0)}),[],!1,null,null,null);e.default=i.exports}}]);