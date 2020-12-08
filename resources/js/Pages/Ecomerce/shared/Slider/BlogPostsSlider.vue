<template>
<div class="posts-slider relative">
    <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
 
            <div class="px-2 xl:px-4 glide__slide transition duration-500 ease-in-out transform  hover:-skew-y-6   origin-center " v-for="(RelatedBlog, index) in RelatedBlogs" :key="index">
                <div class="rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0">
                    <div class="bg-no-repeat bg-cover bg-center w-full h-52" :style="'background-image:url('+RelatedBlog.photo_url+')'"></div>
                    <inertia-link :href="route('blog.show',RelatedBlog.id)" class="flex items-center group">
                    <div class="pt-6 pb-5 md:pb-8 px-8">
                        <div
                            class="flex items-center font-hkregular text-sm md:text-base text-secondary">
                            <span>By <span class="font-hkbold ">{{RelatedBlog.user.name}}</span></span>
                            <span class="px-3">|</span>
                            <span>{{RelatedBlog.created_at}}</span>
                        </div>
                        <h4 class="font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8 truncate ">{{RelatedBlog.title}}</h4>
                            <span class="bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center">
                                <i class="bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"></i>
                            </span>
                            <span class="font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5">Read more</span>
                    </div>
                    </inertia-link>
                </div>
            </div>

        </div>
    </div>
    <div data-glide-el="controls">
        <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-ml-5 lg:-ml-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group" data-glide-dir="<">
            <i class="bx bx-chevron-left text-primary transition-colors group-hover:text-white md:text-2xl p-4"></i>
        </div>
        <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-mr-5 lg:-mr-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group" data-glide-dir=">">
            <i class="bx bx-chevron-right text-primary transition-colors group-hover:text-white md:text-2xl p-4"></i>
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
    mounted() {

        new Glide(".posts-slider", {
            type: "carousel",
            animationDuration:1000,            
            hoverpause:true,            
            autoplay:3000,            
            startAt: 0,
            perView: 2,
            gap: 0,
            peek: {
                before: 150,
                after: 150,
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

    computed:{
      RelatedBlogs(){  
          return this.$page.RelatedBlogs;
      },        
    }, 
}
</script>