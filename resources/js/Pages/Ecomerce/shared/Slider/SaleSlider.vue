<template>
<div>
    <div v-if="SaleSliderProducts.length>0">       
        <vue-glide 
            :type="'carousel'" 
            :perView="4" 
            :hoverpause="true" 
            :bound="true" 
            :animationDuration="200"
            :peek="{ before: 100, after: 100 }"
            :breakpoints="{
                1024: {
                    perView: 3,
                    peek: {
                        before: 20,
                        after: 20,
                    },
                },
                768: {
                    perView: 2,
                    peek: {
                        before: 10,
                        after: 10,
                    },
                },
                600: {
                    perView: 1,
                    peek: {
                        before: 0,
                        after: 0,
                    },
                },
            }"
            :autoplay="2000"> 
            
            <vue-glide-slide v-for="(Product, ProductIndex) in SaleSliderProducts" :key="ProductIndex" >
                
                <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30"></shop-product>
                
            </vue-glide-slide>  

            <template slot="control">
                <div class="transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25 left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 md:cursor-pointer group"  data-glide-dir="<"><i class="bx bx-chevron-left text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
                <div class="transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 md:cursor-pointer group" data-glide-dir=">"><i class="bx bx-chevron-right text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
            </template> 


        </vue-glide>
    </div>
    <div v-else class="p-10 flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg">
        <div class="flex-row group animate-pulse">
            <p class="flex item-center justify-center text-6xl text-gray-50 uppercase">EMPTY SLIDER</p>
            <p class="flex item-center justify-center text-2xl text-gray-200 uppercase">add some slide to see slider</p>
        </div>        
    </div>  
</div>
</template>
<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import ShopProduct from './../Product/Product' 
export default { 
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        ShopProduct,
    },
 
    computed: {
      SaleSliderProducts(){
          return this.$page.SaleSliders?this.$page.SaleSliders.sale_slider:[];
      },
    },    
 
    
} 
</script>