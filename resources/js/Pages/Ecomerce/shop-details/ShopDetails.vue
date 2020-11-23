<template>
    <div class="container">
        <div class="flex relative">
            <div class="bg-no-repeat bg-cover bg-center w-3/4 ml-auto h-56 sm:h-64 md:h-68"
                style="background-image:url(./../../img/hero-image-04.jpg)">
            </div>
            <div class="w-full h-56 sm:h-64 md:h-68 bg-no-repeat bg-cover absolute top-0 left-0"
                style="background-image: linear-gradient(90deg, rgba(55,36,31,1) 40%, rgba(0,0,0,0) 100%)">
                <div class="py-20 px-6 sm:px-12 lg:px-20">
                    <h1 class="font-butlerregular text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl">{{Product.name}}</h1>
                    <div class="flex pt-2">
                        <inertia-link :href="route('welcome')" class="font-hkregular text-white text-base hover:text-primary transition-colors">Home</inertia-link>
                        <span class="font-hkregular text-white text-base px-2">.</span>
                        <inertia-link :href="route('shop.index')" class="font-hkregular text-white text-base hover:text-primary transition-colors" preserce-scroll>shop</inertia-link>
                        <span class="font-hkregular text-white text-base px-2">.</span>
                        <span class="font-hkregular text-white text-base">{{Product.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <shop-product-detail :Product="Product"></shop-product-detail>
        <related-products-slider></related-products-slider> 
    </div> 
</template>
<script>
import AppLayout from './../shared/AppLayout' 
import ProductAttributes from './components/ProductAttributes'  
import ShopProductDetail from './product/Product'  
import RelatedProductsSlider from './../shared/Slider/RelatedProductsSlider'

import Product from './product/Product' 

export default {
    layout: AppLayout,  
    metaInfo: { 
        title: 'Product',
    }, 
    components: {
        ShopProductDetail,
        ProductAttributes,
        RelatedProductsSlider,
    }, 

    computed: {
        Product(){
            return this.$page.Product;
        }, 
    },
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },    
  
}
</script>