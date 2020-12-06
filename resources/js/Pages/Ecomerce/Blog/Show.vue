<template>
    <div class="container">
        <div class="bg-no-repeat bg-cover bg-center w-full h-64 sm:h-76 md:h-90 xl:h-96" :style="'background-image:url('+Blog.photo_url+')'"> 
        </div>

        <div class="flex flex-col sm:flex-row">
            <div class="bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 -mt-10 ml-5 md:ml-8"
                :style="'background-image:url('+Blog.user.profile_photo_url+')'">
            </div>
            <div
                class="flex justify-center items-center sm:pl-10 md:pl-12 py-3 sm:py-4 md:py-6 font-hkregular text-base text-secondary">
                <span>By
                    <span class="font-hkbold">{{Blog.user.name}}</span></span>
                <span class="px-3">|</span>
                <span>03 May 2019</span>
            </div>
            <div
                class="flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6">
                <span class="font-hkbold text-base text-secondary">678</span>
                <span class="font-hkregular text-base text-secondary pl-3 sm:pl-0 md:pl-3">Share</span>
            </div>
            <div
                class="flex sm:flex-col md:flex-row justify-center items-center sm:pl-10 md:pl-16 py-3 sm:py-4 md:py-6">
                <span class="font-hkbold text-base text-secondary">30</span>
                <span class="font-hkregular text-base text-secondary pl-3 sm:pl-3">Comments</span>
            </div>
        </div>

        <div class="border-b border-grey-dark">
            <div class="xl:w-11/12 pt-10 pb-20 flex flex-col lg:flex-row justify-between">
                
                <div class="lg:w-2/3 text-center sm:text-left content">
                    <h1 class="pb-3 md:pb-5">{{Blog.title}}</h1>
                    <div class="content" v-html="Blog.body"></div>

                </div>

                <div class="w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0">

                    <Sidebar/>

                </div>

            </div>
        </div>

        <div class="pt-16 pb-16 sm:pb-20">
            <h2 class="font-butlerregular text-secondary text-3xl sm:text-4xl md:text-7xl lg:text-5xl pb-2 md:pb-3 text-center"> Related Post </h2>
            <p class="font-hkregular text-secondary-lighter text-base md:text-lg text-center pb-5 sm:pb-12 md:pb-0"> For powerful features, great design and support from the developer.</p>
  
            <blog-posts-slider></blog-posts-slider>
 
        </div>
    </div>
</template>

<script>
import BlogPostsSlider from './../shared/Slider/BlogPostsSlider'  
import AppLayout from './../shared/AppLayout'  
import Sidebar from './Sidebar'  
export default {
    layout: AppLayout,  
    metaInfo: { 
        title: 'Blog-details' 
    },
    components: {
        BlogPostsSlider,
        Sidebar,
    },
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },    
    computed: {
      Blog(){
          return this.$page.blog;
      },
    },
   
}
 
</script>
