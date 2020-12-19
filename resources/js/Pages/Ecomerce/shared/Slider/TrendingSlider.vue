<template>
<div class="pb-20 md:pb-24 lg:pb-32">
    <div v-if="TrendingSliderProducts.length>0">
    
        <div class="flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0">
            <div class="text-center sm:text-left">
                <h2 class="font-regular text-gray-400 text-3xl md:text-4xl lg:text-7xl">Elyssi’s trends</h2>
                <p class="font-regular text-gray-400-lighter text-lg md:text-xl pt-2">Be styling, no matter the season!</p>
            </div>
            <inertia-link :href="route('shop.index')" class="flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-regular text-xl text-primary">
                Show more
                <i class="bx bx-chevron-right text-primary transition-colors group-hover:text-primary-light pl-3 pt-2 text-xl"></i>
            </inertia-link>
        </div>

        <vue-glide 
           :type="'carousel'" 
            :perView="4" 
            :hoverpause="true" 
            :bound="true" 
            :animationDuration="1000"
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
            
            <vue-glide-slide v-for="(Product, ProductIndex) in TrendingSliderProducts" :key="ProductIndex">
          
                <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30"></shop-product>
        
            </vue-glide-slide>  

            <template slot="control">
                <div class="transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group"  data-glide-dir="<"><i class="bx bx-chevron-left text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
                <div class="transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group" data-glide-dir=">"><i class="bx bx-chevron-right text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
            </template> 

        </vue-glide>
 

    </div>
    <div v-else class="flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg">
        <p class="text-6xl text-gray-50 uppercase animate-pulse bg-none ">Trending slider section</p>
    </div>            


</div>
</template>
<script>
import ShopProduct from './../Product/Product'
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        ShopProduct,
    },
    
    computed: {
      TrendingSliderProducts(){
          return this.$page.FeaturedSliders.trending_slider;
      },
    },
 
}
</script>
