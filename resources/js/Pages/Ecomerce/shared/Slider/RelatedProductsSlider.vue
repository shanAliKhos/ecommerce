<template>
    <div class="pb-20 md:pb-32">
        <div class="text-center">
            <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">Related Product</h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2 pb-6 sm:pb-8 lg:pb-0"> Get the latest news & updates from store</p>
        </div>
        <div class="related-product-slider relative">
            <div class="glide__track" data-glide-el="track">
                <div class="pt-12 relative glide__slides">

                    <div class="relative group glide__slide" v-for="(Product, ProductIndex) in Products" :key="ProductIndex">
                        <div class="sm:px-5 lg:px-4">
                            <shop-product :Product="Product"></shop-product>
                        </div>
                    </div> 
                </div>
            </div>

            <div data-glide-el="controls">
                <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group"
                    data-glide-dir="<">
                    <i
                        class="bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i>
                </div>
                <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-10 cursor-pointer group"
                    data-glide-dir=">">
                    <i
                        class="bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import ShopProduct from './../Product/Product'
import Glide from '@glidejs/glide'

export default {
    components: {
        ShopProduct,
    },
    computed: {
        Products(){
            return this.$page.RelatedProducts;
        },
    },      
    mounted() {
        new Glide('.related-product-slider',{
            type: "carousel",
            animationDuration:1000,            
            hoverpause:true,            
            autoplay:3000,
            startAt: 0,
            perView: 4,
            gap: 0,
            peek: {
                before: 50,
                after: 50,
            },
            breakpoints: {
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
            },    
        }).mount()     
    },    
}
</script>