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
                    <form class="flex items-center w-full mb-16 relative">
                        <label for="search_form" class="block relative h-0 w-0 overflow-hidden">Search</label>
                        <input type="text" id="search_form" placeholder="Search the Blog"
                            class="form-input   transition-all pr-10 text-grey-darkest text-base" />
                        <button class="focus:outline-none absolute right-0 top-0 mt-4 mr-3"
                            aria-label="Search button">
                            <i class="bx bx-search text-2xl"></i>
                        </button>
                    </form>
                    <div class="mb-16 text-center sm:text-left">
                        <h4 class="font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark">Recent Post</h4>

                        <a href="/post" class="block mt-8 border-b border-grey-dark pb-5 group">
                            <p class="font-hkregular text-secondary text-base transition-colors group-hover:text-primary"> How to make the most of the rest of the year</p>
                            <p class="font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"> 02 May 2019</p>
                        </a>

                    </div>
                    <div class="mb-16">
                        <h4 class="font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark text-center sm:text-left"> Categories</h4>

                        <a href="#" class="flex justify-between group pb-4 border-b border-grey-dark mt-8">
                            <p class="font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base capitalize"> Stylish Fashion </p>
                            <span class="font-hkregular transition-colors group-hover:font-hkbold text-secondary group-hover:text-primary text-base">5</span>
                        </a>
 
                    </div>
                    <div class="text-center sm:text-left">
                        <h4
                            class="font-butlerregular text-secondary text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark">
                            Follow Us</h4>
                        <div class="flex justify-center sm:justify-start pt-8">

                            <a href="https://www.google.com"
                                class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"><i
                                    class="bx bxl-facebook text-white"></i></a>

                            <a href="https://www.google.com"
                                class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"><i
                                    class="bx bxl-twitter text-white"></i></a>

                            <a href="https://www.google.com"
                                class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"><i
                                    class="bx bxl-instagram text-white"></i></a>

                            <a href="https://www.google.com"
                                class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"><i
                                    class="bx bxl-pinterest text-white"></i></a>

                        </div>
                    </div>
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
export default {
    layout: AppLayout,  
    metaInfo: { 
        title: 'Blog-details' 
    },
    components: {
        BlogPostsSlider,
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
