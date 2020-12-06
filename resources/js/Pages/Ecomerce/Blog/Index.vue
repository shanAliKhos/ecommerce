<template>
<div class="container"> 
    <div class="pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between">
        <div class="lg:w-2/3">
            <h2 class="font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl text-center lg:text-left"> Our Blog</h2>

            <inertia-link v-for="(Blog, Blogindex) in Blogs" :key="Blogindex" :href="route('blog.show',Blog.id)" class="block rounded-lg shadow border border-grey group mt-10 lg:mt-12">
                <div class="bg-no-repeat bg-cover bg-top w-full h-52 sm:h-64 lg:h-68" :style="'background-image:url('+Blog.photo_url+')'"> </div>
                <div class="pt-6 pb-5 md:pb-8 px-8">
                    <div class="bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5" :style="'background-image:url('+Blog.user.profile_photo_url+')'">
                    </div>
                    <div class="flex items-center font-hkregular text-sm md:text-base text-secondary">
                        <span>By <span class="font-hkbold">{{Blog.user.name}}</span></span>
                        <span class="px-3">|</span>
                        <span>{{Blog.created_at}}</span>
                    </div>
                    <div class="sm:w-5/6 lg:w-11/12 xl:w-3/4">
                        <h4 class="font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-5 "> {{Blog.title}}</h4>
                    </div>
                    <!-- <div class="sm:w-3/4 lg:w-5/6 xl:w-3/5">
                        <p class="font-hkregular text-secondary-lighter text-sm md:text-base pb-6 sm:pb-8 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div> -->
                    <div class="flex items-center">
                        <span
                            class="bg-white transition-colors group-hover:bg-primary border border-grey-darkest group-hover:border-primary rounded-full p-1 flex items-center">
                            <i
                                class="bx bx-chevron-right transition-colors text-grey-darkest group-hover:text-white text-xl"></i>
                        </span>
                        <span
                            class="font-hksemibold transition-colors text-grey-darkest group-hover:text-primary sm:text-lg pl-3 sm:pl-5">Read
                            more</span>
                    </div>
                </div>
            </inertia-link>

          

            <div class="pt-12 flex justify-center mx-auto">
                <span
                    class="font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer">Previous</span>
                <span
                    class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">1</span>
                <span class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">2</span>
                <span class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center cursor-pointer">3</span>
                <span
                    class=" font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer">Next</span>

            </div>
        </div>
        <div class="w-3/4 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0 mt-16 lg:mt-0">

            <Sidebar/>

        </div>
    </div>

    <div class="pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 xl:pb-16 border-b border-grey-dark">
        <h2 class="font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl text-center"> Top Feature Blog</h2>
        <div class="flex flex-col md:flex-row justify-between pt-12 lg:pt-16 -mx-2 xl:-mx-5">

            <div class="md:w-1/2 mx-auto md:mx-0 px-2 xl:px-5 mb-10" v-for="(FeaturedBlog, FeaturedBlogindex) in FeaturedBlogs" :key="FeaturedBlogindex">
                <inertia-link :href="route('blog.show',FeaturedBlog.id)" class="block rounded-lg shadow border border-grey group">
                    <div class="bg-no-repeat bg-cover bg-center w-full h-52 sm:h-64 lg:h-68" :style="'background-image:url('+FeaturedBlog.photo_url+')'"></div>
                    <div class="pt-6 pb-5 md:pb-8 px-8">
                        <div class="bg-no-repeat bg-cover bg-center rounded-full w-20 h-20 border-6 border-white -mt-16 mb-5" :style="'background-image:url('+FeaturedBlog.user.profile_photo_url+')'"></div>
                        <div class="flex items-center font-hkregular text-sm md:text-base text-secondary">
                            <span>By <span class="font-hkbold">{{FeaturedBlog.user.name}}</span></span>
                            <span class="px-3">|</span>
                            <span>{{FeaturedBlog.created_at}}</span>
                        </div>
                        <div class="sm:w-5/6 lg:w-full">
                            <h4 class="font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-5 ">{{FeaturedBlog.title}}</h4>
                        </div> 
                        <div class="flex items-center">
                            <span class="bg-white group-hover:bg-primary border border-grey-darkest group-hover:border-primary transition-colors   rounded-full h-8 w-8 flex items-center justify-center">
                                <i class="bx bx-chevron-right text-grey-darkest transition-colors group-hover:text-white text-xl"></i>
                            </span>
                            <span class="font-hksemibold text-grey-darkest transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5 -mt-1">Read more</span>
                        </div>
                    </div>
                </inertia-link>
            </div>

        </div>
    </div>    
</div>
</template>

<script>
import AppLayout from './../shared/AppLayout'   
import Sidebar from './Sidebar'  

export default {
    layout: AppLayout,     
    components:{
        Sidebar,
    },
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },

    computed:{
        Blogs(){
            return this.$page.Blogs;
        },
        FeaturedBlogs(){
            return this.$page.FeaturedBlogs;
        },
    }, 
}
</script>
