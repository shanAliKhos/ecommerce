(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{13:function(t,e,r){"use strict";r.r(e);var s={props:["Product"],methods:{},computed:{ProductImage:function(){return this.Product.mainphoto_url},RegularPrice:function(){return this.Product.regular_price},SalePrice:function(){return this.Product.sale_price},CurrentPrice:function(){return this.Product.current_price},ProductName:function(){return this.Product.name},SetLable:function(){return this.Product.sale_price>0?{Color:"text-orange-500",Title:"-"+Math.round((this.Product.regular_price-this.Product.sale_price)/this.Product.regular_price*100)+"%",Active:!0}:this.Product.is_featured?{Color:"text-blue-500",Title:"Trend",Active:!0}:{Color:"text-green-500",Title:"new",Active:!0}},Currency:function(){return this.$page.SiteOptions.Currency.Symbol}}},i=r(0),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-2"},[r("div",{staticClass:"product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4"},[r("inertia-link",{staticClass:"focus:outline-none",attrs:{href:t.route("shop.show",t.Product.slug)}},[t.SetLable.Active?r("div",{staticClass:"absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30"},[r("p",{staticClass:"font-semibold text-sm uppercase tracking-wide",class:t.SetLable.Color},[t._v(" "+t._s(t.SetLable.Title))])]):t._e(),t._v(" "),r("div",{staticClass:"flex justify-center items-center h-64 pb-4 p-2"},[r("img",{staticClass:"w-auto h-56 bg-center bg-no-repeat bg-cover transition transform hover:scale-105  duration-500 ease-in-out hover:shadow-lg rounded-lg",attrs:{src:t.ProductImage}})]),t._v(" "),r("div",{staticClass:"flex items-center px-4 py-1"},[r("p",{staticClass:"font-semibold text-xs text-gray-400 capitalize  overflow-ellipsis truncate overflow-hidden",attrs:{title:t.ProductName}},[t._v(t._s(t.ProductName))])]),t._v(" "),r("div",{staticClass:"flex px-4 py-1"},[r("p",{staticClass:"font-semibold text-red-500 text-normal"},[t._v(t._s(t.Currency)+" "+t._s(t.CurrentPrice)+" ")]),t._v(" "),t.SalePrice>0?r("p",{staticClass:"font-semibold line-through text-gray-400 text-xs ml-3"},[t._v(t._s(t.Currency)+t._s(t.RegularPrice)+" ")]):t._e()]),t._v(" "),r("div",{staticClass:"flex px-4"},[r("div",{staticClass:"flex items-center  "},[r("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),r("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),r("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),r("i",{staticClass:"bx bxs-star text-yellow-300"}),t._v(" "),r("i",{staticClass:"bx bxs-star text-yellow-300"})]),t._v(" "),r("p",{staticClass:"font-regular text-sm text-gray-500  ml-2"},[t._v("(45)")])])])],1)])}),[],!1,null,null,null);e.default=a.exports},97:function(t,e,r){"use strict";r.r(e);var s,i=r(13),a=r(7);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={components:(s={},o(s,a.Glide.name,a.Glide),o(s,a.GlideSlide.name,a.GlideSlide),o(s,"ShopProduct",i.default),s),computed:{TrendingSliderProducts:function(){return this.$page.FeaturedSliders?this.$page.FeaturedSliders.trending_slider:[]}}},n=r(0),c=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.TrendingSliderProducts.length>0?e("div",[e("vue-glide",{attrs:{type:"carousel",perView:4,hoverpause:!0,bound:!0,animationDuration:200,peek:{before:100,after:100},breakpoints:{1024:{perView:3,peek:{before:20,after:20}},768:{perView:2,peek:{before:10,after:10}},600:{perView:1,peek:{before:0,after:0}}},autoplay:2e3}},[this._l(this.TrendingSliderProducts,(function(t,r){return e("vue-glide-slide",{key:r},[e("shop-product",{staticClass:"relative mt-2 mb-5 pb-2 z-30",attrs:{Product:t}})],1)})),this._v(" "),e("template",{slot:"control"},[e("div",{staticClass:"transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25  left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 md:cursor-pointer group",attrs:{"data-glide-dir":"<"}},[e("i",{staticClass:"bx bx-chevron-left text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"})]),this._v(" "),e("div",{staticClass:"transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 md:cursor-pointer group",attrs:{"data-glide-dir":">"}},[e("i",{staticClass:"bx bx-chevron-right text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"})])])],2)],1):e("div",{staticClass:"p-10 flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg"},[this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-row group animate-pulse"},[e("p",{staticClass:"flex item-center justify-center text-6xl text-gray-50 uppercase"},[this._v("EMPTY SLIDER")]),this._v(" "),e("p",{staticClass:"flex item-center justify-center text-2xl text-gray-200 uppercase"},[this._v("add some slide to see slider")])])}],!1,null,null,null);e.default=c.exports}}]);