<template>
<div class="pb-20 md:pb-32">
    <div v-if="SaleSliderProducts.length>0">
        <div class="text-center pb-12 md:pb-0">
            <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
                On sale, only today
            </h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl">
                Get it while they last!
            </p>
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
            
            <vue-glide-slide v-for="(Product, ProductIndex) in SaleSliderProducts" :key="ProductIndex" >
                
                <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30"></shop-product>
                
            </vue-glide-slide>  

            <template slot="control">
                <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group"  data-glide-dir="<"><i class="bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
                <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group" data-glide-dir=">"><i class="bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
            </template> 

        </vue-glide>
        
    </div>
    <div v-else class="flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg">
        <p class="text-6xl text-gray-50 uppercase animate-pulse bg-none ">Sale slider section</p>
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
          return this.$page.Slider?this.$page.Slider.sale_slider:[];
      },
    },    
 
    
} 
</script>