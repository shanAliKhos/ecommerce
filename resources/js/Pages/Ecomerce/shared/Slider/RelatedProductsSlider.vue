<template>
    <div class="pb-20 md:pb-32">
        <div class="text-center">
            <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">Related Product</h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2 pb-6 sm:pb-8 lg:pb-0"> Get the latest news & updates from store</p>
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
            
            <vue-glide-slide v-for="(Product, ProductIndex) in Products" :key="ProductIndex">
                
                <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30"></shop-product>

                
            </vue-glide-slide>  

            <template slot="control">
                <div class="transition duration-300 ease-in-out transform  hover:-translate-x-2 hover:scale-125 shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group"  data-glide-dir="<"><i class="bx bx-chevron-left text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
                <div class="transition duration-300 ease-in-out transform  hover:translate-x-2 hover:scale-125 shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-40 transform -translate-y-1/2 bg-gray-50 hover:bg-orange-500 border border-gray-200 z-10 cursor-pointer group" data-glide-dir=">"><i class="bx bx-chevron-right text-orange-500 transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
            </template> 

        </vue-glide>

     

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
        Products(){
            return this.$page.RelatedProducts;
        },
    },      
  
}
</script>