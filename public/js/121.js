(window.webpackJsonp=window.webpackJsonp||[]).push([[121,13],{25:function(t,e,r){"use strict";r.r(e);var s={props:["Product"],methods:{},computed:{ProductImage:function(){return this.Product.mainphoto_url},RegularPrice:function(){return this.Product.regular_price},SalePrice:function(){return this.Product.sale_price},CurrentPrice:function(){return this.Product.current_price},ProductName:function(){return this.Product.name},Currency:function(){return this.$page.SiteOptions.Currency.Symbol}}},a=r(0),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-1  "},[r("div",{staticClass:"product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4"},[r("inertia-link",{staticClass:"focus:outline-none",attrs:{href:t.route("shop.show",t.Product.slug)}},[t.Product.label.active?r("div",{staticClass:"absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30"},[r("p",{staticClass:"font-semibold text-sm uppercase tracking-wide",class:t.Product.label.text_color},[t._v(" "+t._s(t.Product.label.title))])]):t._e(),t._v(" "),r("div",{staticClass:"flex justify-center items-center w-auto h-56 mb-1 bg-gray-100"},[r("img",{staticClass:"w-auto h-full bg-center bg-no-repeat bg-cover transition transform duration-500 ease-in-out hover:shadow-lg rounded",attrs:{src:t.ProductImage}})]),t._v(" "),r("div",{staticClass:"flex flex-wrap items-center px-4 py-2"},[r("p",{staticClass:"font-mono font-semibold text-normal text-red-700 capitalize  overflow-ellipsis truncate overflow-hidden",attrs:{title:t.ProductName}},[t._v(t._s(t.ProductName))])]),t._v(" "),r("div",{staticClass:"flex items-center  px-2"},[r("div",{staticClass:"flex  items-center group text-text-sm"},t._l(5,(function(e){return r("i",{key:e+1,staticClass:"bx text-yellow-300 border border-white",class:{"bxs-star":e<=t.Product.rating,"bx-star":e>t.Product.rating}})})),0)]),t._v(" "),r("div",{staticClass:"flex px-4"},[r("p",{staticClass:"font-semibold text-red-500 text-normal"},[t._v(t._s(t.Currency)+" "+t._s(t.CurrentPrice)+" ")]),t._v(" "),t.SalePrice>0?r("p",{staticClass:"font-semibold line-through text-gray-400 text-xs ml-3"},[t._v(t._s(t.Currency)+t._s(t.RegularPrice)+" ")]):t._e()])])],1)])}),[],!1,null,null,null);e.default=i.exports},88:function(t,e,r){"use strict";r.r(e);var s=r(25),a=r(267),i={components:{ShopProduct:s.default},mounted:function(){new a.a(".posts-slider",{type:"carousel",animationDuration:1e3,hoverpause:!0,autoplay:3e3,startAt:0,perView:2,gap:0,peek:{before:150,after:150},breakpoints:{1024:{perView:3,peek:{before:20,after:20}},768:{perView:2,peek:{before:10,after:10}},600:{perView:1,peek:{before:0,after:0}}}}).mount()},computed:{RelatedBlogs:function(){return this.$page.RelatedBlogs}}},o=r(0),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"posts-slider relative"},[r("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[r("div",{staticClass:"glide__slides"},t._l(t.RelatedBlogs,(function(e,s){return r("div",{key:s,staticClass:"px-2 xl:px-4 glide__slide transition duration-500 ease-in-out transform  hover:-skew-y-6   origin-center "},[r("div",{staticClass:"rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0"},[r("div",{staticClass:"bg-no-repeat bg-cover bg-center w-full h-52",style:"background-image:url("+e.photo_url+")"}),t._v(" "),r("inertia-link",{staticClass:"flex items-center group",attrs:{href:t.route("blog.show",e.id)}},[r("div",{staticClass:"pt-6 pb-5 md:pb-8 px-8"},[r("div",{staticClass:"flex items-center font-hkregular text-sm md:text-base text-secondary"},[r("span",[t._v("By "),r("span",{staticClass:"font-hkbold "},[t._v(t._s(e.user.name))])]),t._v(" "),r("span",{staticClass:"px-3"},[t._v("|")]),t._v(" "),r("span",[t._v(t._s(e.created_at))])]),t._v(" "),r("p",{staticClass:"font-semibold text-gray-400 text-xl md:text-2xl pt-5 pb-8 truncate "},[t._v(t._s(e.title))]),t._v(" "),r("span",{staticClass:"bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center"},[r("i",{staticClass:"bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"})]),t._v(" "),r("span",{staticClass:"font-semibold text-grey-darkest transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5"},[t._v("Read more")])])])],1)])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{"data-glide-el":"controls"}},[e("div",{staticClass:"transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-ml-5 lg:-ml-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",attrs:{"data-glide-dir":"<"}},[e("i",{staticClass:"bx bx-chevron-left text-primary transition-colors group-hover:text-white md:text-2xl p-4"})]),this._v(" "),e("div",{staticClass:"transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-mr-5 lg:-mr-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group",attrs:{"data-glide-dir":">"}},[e("i",{staticClass:"bx bx-chevron-right text-primary transition-colors group-hover:text-white md:text-2xl p-4"})])])}],!1,null,null,null);e.default=l.exports}}]);