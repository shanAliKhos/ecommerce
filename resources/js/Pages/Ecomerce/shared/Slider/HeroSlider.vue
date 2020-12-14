<template>
       <vue-glide 
            :type="'carousel'" 
            :perView="1" 
            :hoverpause="true" 
            :bound="true" 
            :animationDuration="1000"
            :autoplay="3000"> 
            
            <vue-glide-slide>
                <div class="sm:bg-center bg-no-repeat bg-object lg:bg-right bg-gray-50" style="background-image:url('./img/product/product (1).png')">
                    <div class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                        <h3 class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            Store New Men’s Outdoor Collection
                        </h3>
                        <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                    </div>
                </div>            
            </vue-glide-slide>  
            <vue-glide-slide>
                <div class="sm:bg-center bg-no-repeat bg-object lg:bg-right bg-gray-50" style="background-image:url('./img/product/product (2).png')">
                    <div class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                        <h3 class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Hoodie your way! <br /> For Men</h3>
                        <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                    </div>
                </div>       
            </vue-glide-slide>  
            <vue-glide-slide>
                <div class="sm:bg-center bg-no-repeat bg-object lg:bg-right bg-gray-50"
                    style="background-image:url('./img/product/product (3).png')">
                    <div class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 bg-gray">
                        <h3 class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"> Match and play Women’s Dresses </h3>
                        <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                    </div>
                </div>       
            </vue-glide-slide>  
            <vue-glide-slide>
                <div class="sm:bg-center bg-no-repeat bg-object lg:bg-right bg-gray-50" style="background-image:url('./img/product/product (4).png')">
                    <div class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                        <h3 class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Back to school, <br /> the stylish way</h3>
                        <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                    </div>
                </div>         
            </vue-glide-slide>  
            <!-- <vue-glide-slide v-for="(Product, ProductIndex) in TrendingSliderProducts" :key="ProductIndex">
                <div class="sm:px-5 lg:px-4">
                    <shop-product :Product="Product"></shop-product>
                </div>
            </vue-glide-slide>   -->
 

        </vue-glide>
 
</template>
<script>
import { Glide, GlideSlide } from 'vue-glide-js'
export default {
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide, 
    },    
}
</script>