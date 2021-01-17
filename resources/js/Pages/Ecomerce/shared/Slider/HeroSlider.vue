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
            
            <vue-glide-slide v-for="(HeroSlide, HeroSlideIndex) in HeroSliders" :key="HeroSlideIndex">
                <div class="rounded md:bg-left bg-center bg-no-repeat bg-cover h-full w-full flex-col item-center justify-center" :style="'background-image:url(\'' + HeroSlide.photo_url + '\')'">
                    <div class="py-36 px-10 md:px-12 xl:px-24 text-left w-5/6 lg:w-2/4 xl:w-2/3">
                    
                        <h3 class="font-medium   text-4xl md:text-5xl lg:text-6xl lg:w-2/3">{{HeroSlide.title}}</h3> 
                        <div class="flex items-center justify-center lg:justify-start mt-5 lg:mt-2">
                            <inertia-link :href="HeroSlide.button_url" class="w-full lg:w-2/3 flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none rounded-lg px-2 py-2 text-white font-semibold shadow inline-flex " type="button" as="button">
                                {{HeroSlide.button_title}}
                            </inertia-link>          
                        </div>                          
                         
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