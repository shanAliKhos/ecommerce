<template>
    <div class="pb-20 md:pb-32">
        <div class="text-center pb-12 md:pb-0">
            <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
                On sale, only today
            </h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl">
                Get it while they last!
            </p>
        </div>
      
        <vue-glide 
            :type="'slider'" 
            :perView="4" 
            :hoverpause="true" 
            :bound="true" 
            :animationDuration="1000"
            :peek="{ before: 100, after: 100 }"
            :autoplay="1000"> 
            
            <vue-glide-slide v-for="(Product, ProductIndex) in ProductsOnSale" :key="ProductIndex">
                <div class="sm:px-5 lg:px-4">
                    <shop-product :Product="Product"></shop-product>
                </div>
            </vue-glide-slide>  

            <template slot="control">
                <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group"  data-glide-dir="<"><i class="bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
                <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group" data-glide-dir=">"><i class="bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i></div>
            </template> 

        </vue-glide>
        
    </div>
</template>
<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import ShopProduct from './../Product/Product' 
export default {
    props:['products'],
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        ShopProduct,
    },
    computed: {
        ProductsOnSale(){
            return this.products;
        }        
    },    
    
} 
</script>