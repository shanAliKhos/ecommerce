<template>
    <div v-if="HeroSliders.length>0">
        <vue-glide 
            :type="'carousel'" 
            :perView="1" 
            :hoverpause="true" 
            :bound="true" 
            :navigation="true" 
            :animationDuration="1000"
            :autoplay="3000"> 
            
            <vue-glide-slide v-for="(HeroSlide, HeroSlideIndex) in HeroSliders" :key="HeroSlideIndex" >
                <div class="bg-left sm:bg-center bg-no-repeat bg-cover" :style="'background-image:url(\'' + HeroSlide.photo_url + '\')'">
                    <div class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                        <h3 class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{{HeroSlide.title}}</h3>
                        <inertia-link class="btn btn-primary btn-lg mt-8" :href="HeroSlide.button_url"  draggable="true">{{HeroSlide.button_title}}</inertia-link>
                    </div>
                </div>        
            </vue-glide-slide>   
        </vue-glide>
    </div>
    <div v-else class="h-screen p-10 flex item-center justify-center border-dashed border-4 border-gray-50 py-24 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 relative shadow-lg">
        <div class="flex-row group animate-pulse">
            <p class="flex item-center justify-center text-6xl text-gray-50 uppercase">EMPTY SLIDER</p>
            <p class="flex item-center justify-center text-2xl text-gray-200 uppercase">add some slide to see slider</p>
        </div>        
    </div>    
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
          return this.$page.HeroSliders?this.$page.HeroSliders.hero_slider:[];
      },
    },    
}
</script>