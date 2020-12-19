<template>
       <vue-glide 
            :type="'carousel'" 
            :perView="1" 
            :hoverpause="true" 
            :bound="true" 
            :animationDuration="1000"
            :autoplay="3000"> 
            
            <vue-glide-slide v-for="(HeroSlide, HeroSlideIndex) in HeroSliders" :key="HeroSlideIndex" >
                <div class="sm:bg-center bg-no-repeat bg-object lg:bg-right bg-gray-50" 
                    :style="'background-image:url(\'' + HeroSlide.photo_url + '\')'">
                    <div class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                        <p class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            {{HeroSlide.title}}
                        </p>
                        <inertia-link :href="HeroSlide.button_url" class="btn btn-primary btn-lg mt-8">{{HeroSlide.button_title}}</inertia-link>
                    </div>
                </div>            
            </vue-glide-slide>  
 


        </vue-glide>
 
</template>
<script>
import { Glide, GlideSlide } from 'vue-glide-js'
export default {
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide, 
    },    

    computed: {
      HeroSliders(){
          return this.$page.HeroSliders.hero_slider;
      },
    },    
}
</script>