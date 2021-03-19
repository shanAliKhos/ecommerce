<template>
    <div class="w-full relative" :class="{'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 ':true}"> 
        
            <div class="w-2/3 md:max-w-screen-sm lg:w-5/6 lg:max-w-full xl:w-5/6 xxl:max-w-screen-xxl mx-auto lg:ml-auto lg:mr-10 xl:mr-16 xxl:mx-auto relative z-10">
            
                <div class="py-16">
                    <div class="ml-0 flex justify-between">

                        <div class="hidden lg:block w-3/4 bg-white shadow-2xl">
                            <div class="py-12 px-4  ">

                                <vue-glide 
                                    :type="'carousel'" 
                                    :perView="3" 
                                    :hoverpause="true"  
                                    :gap="30"
                                    :animationDuration="1000" 
                                    :breakpoints="{
                                        1024: {
                                            perView: 2,
                                        },                                  
                                    }"
                                    :autoplay="2000"> 
                                        
                                    <vue-glide-slide v-for="(Product, ProductIndex) in SaleSliderProducts" :key="ProductIndex" >

                                        <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30 "></shop-product>

                                    </vue-glide-slide>   

                                </vue-glide>
                                
                            </div>
                        </div>

                        <div class="w-full lg:w-1/3 lg:pl-6 xl:pl-8">
                            <div class="text-right">
                                <h2 class="font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"> New season, matching shoes </h2>
                                <p class="font-regular text-gray-50 text-lg pt-1"> Featured Collection </p>
                            </div>
                            <div class="relative group shadow-2xl">
                                <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14" style="background-image:url('/img/product/product (14).jpg')"></div>
                                <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"></div>
                                <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group transition-opacity">
                                    <a href="/" class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View All Product</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="pb-16"> 
                    <div class="ml-auto flex justify-between">

                        <div class="w-full lg:w-1/3 lg:pr-6 xl:pr-8 ">
                            <div class="text-left">
                                <h2 class="font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"> Stylish Backpacks, Only For You</h2>
                                <p class="font-regular text-gray-50 text-lg pt-1">Featured Collection</p>
                            </div>
                            <div class="relative group shadow-2xl">
                                <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14 relative" style="background-image:url('/img/product/product (21).jpg')"></div>
                                <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden"> </div>
                                <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group">
                                    <a href="/" class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View All Product</a>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:block w-3/4 bg-white shadow-2xl">
                            <div class="py-12 px-4">
                        
                                <vue-glide 
                                    :type="'carousel'" 
                                    :perView="3" 
                                    :hoverpause="true"  
                                    :gap="30"
                                    :animationDuration="1000" 
                                    :breakpoints="{
                                        1024: {
                                            perView: 2,
                                        },                                  
                                    }"
                                    :autoplay="2000"> 
                                    
                            
                                    <vue-glide-slide v-for="(Product, ProductIndex) in TrendingSliderProducts" :key="ProductIndex" >
                                        
                                        <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30 "></shop-product>
                                        
                                    </vue-glide-slide>  
                                  

                
                                </vue-glide>
                                
                            </div>
                        </div>

                    </div>
                </div>

                <div class="pb-16">
                    <div class="ml-0 flex justify-between">
                        
                        <div class="hidden lg:block w-3/4 bg-white shadow-2xl">
                            <div class="py-12 px-4  ">
                                
                                <vue-glide 
                                    :type="'carousel'" 
                                    :perView="3" 
                                    :hoverpause="true"  
                                    :gap="30"
                                    :animationDuration="1000" 
                                    :breakpoints="{
                                        1024: {
                                            perView: 2,
                                        },                                  
                                    }"
                                    :autoplay="2000"> 
                                    
                                    <vue-glide-slide v-for="(Product, ProductIndex) in SaleSliderProducts" :key="ProductIndex" >
                                        
                                        <shop-product :Product="Product" class="relative mt-2 mb-5 pb-2 z-30 "></shop-product>
                                        
                                    </vue-glide-slide>  
                
                                </vue-glide>
                                
                            </div>
                        </div>

                        <div class="w-full lg:w-1/3 lg:pl-6 xl:pl-8">
                            <div class="text-right">
                                <h2 class="font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide">Summer? You need chick sunglasses</h2>
                                <p class="font-regular text-gray-50 text-lg pt-1">Featured Collection</p>
                            </div>
                            <div class="relative group shadow-2xl">
                                <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14" style="background-image:url('/img/product/product (22).jpg')"></div>
                                <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"></div>
                                <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group">
                                    <a href="/" class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View All Product</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
 
    </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
export default {
  
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide, 
        ShopProduct:() => import('./../Product/Product'),

    },

        
    computed: {
      TrendingSliderProducts(){
          return this.$page.FeaturedSliders?this.$page.FeaturedSliders.trending_slider:[];
      },
      SaleSliderProducts(){
          return this.$page.SaleSliders?this.$page.SaleSliders.sale_slider:[];
      },
    },
      
}
</script>