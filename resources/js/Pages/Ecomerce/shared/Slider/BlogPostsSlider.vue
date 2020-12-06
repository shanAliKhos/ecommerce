<template>
<div class="posts-slider flex flex-col sm:flex-row items-center justify-between mt-6 md:mt-12 relative">
    <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">

            <div class="px-2 xl:px-4 glide__slide">
                <div class="rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0">
                    <div class="bg-no-repeat bg-cover bg-center w-full h-52"
                        style="background-image:url(./img/post-01.jpg)">
                    </div>
                    <div class="pt-6 pb-5 md:pb-8 px-8">
                        <div
                            class="flex items-center font-hkregular text-sm md:text-base text-secondary">
                            <span>By <span class="font-hkbold">Abdullah</span></span>
                            <span class="px-3">|</span>
                            <span>02 May 2019</span>
                        </div>
                        <h4 class="font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8">
                            Increasing Prosperity With Positive Thinking
                        </h4>
                        <a href="/post" class="flex items-center group">
                            <span
                                class="bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center">
                                <i
                                    class="bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"></i>
                            </span>
                            <span
                                class="font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5">
                                Read more
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="px-2 xl:px-4 glide__slide">
                <div class="rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0">
                    <div class="bg-no-repeat bg-cover bg-center w-full h-52"
                        style="background-image:url(./img/post-02.jpg)">
                    </div>
                    <div class="pt-6 pb-5 md:pb-8 px-8">
                        <div
                            class="flex items-center font-hkregular text-sm md:text-base text-secondary">
                            <span>By <span class="font-hkbold">Abdullah</span></span>
                            <span class="px-3">|</span>
                            <span>03 May 2019</span>
                        </div>
                        <h4 class="font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8">
                            Increasing Prosperity With Positive Thinking
                        </h4>
                        <a href="/post" class="flex items-center group">
                            <span
                                class="bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center">
                                <i
                                    class="bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"></i>
                            </span>
                            <span
                                class="font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5">
                                Read more
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="px-2 xl:px-4 glide__slide">
                <div class="rounded-lg shadow border border-grey mt-12 sm:mt-3 md:mt-0">
                    <div class="bg-no-repeat bg-cover bg-center w-full h-52"
                        style="background-image:url(./img/post-03.jpg)">
                    </div>
                    <div class="pt-6 pb-5 md:pb-8 px-8">
                        <div
                            class="flex items-center font-hkregular text-sm md:text-base text-secondary">
                            <span>By <span class="font-hkbold">Abdullah</span></span>
                            <span class="px-3">|</span>
                            <span>04 May 2019</span>
                        </div>
                        <h4 class="font-butlermedium text-secondary text-xl md:text-2xl pt-5 pb-8">
                            Increasing Prosperity With Positive Thinking
                        </h4>
                        <a href="/post" class="flex items-center group">
                            <span
                                class="bg-white group-hover:bg-primary border transition-colors border-grey-darkest group-hover:border-primary rounded-full h-8 w-8 flex items-center justify-center">
                                <i
                                    class="bx bx-chevron-right text-grey-darkest group-hover:text-white text-xl"></i>
                            </span>
                            <span
                                class="font-hksemibold text-grey-darkest  transition-colors group-hover:text-primary sm:text-lg pl-3 sm:pl-5">
                                Read more
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div data-glide-el="controls">
        <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-ml-5 lg:-ml-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group"
            data-glide-dir="<">
            <i
                class="bx bx-chevron-left text-primary transition-colors group-hover:text-white md:text-2xl p-4"></i>
        </div>
        <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform sm:-translate-y-1/2 md:-mr-5 lg:-mr-8 bg-grey-light hover:bg-primary z-10 cursor-pointer group"
            data-glide-dir=">">
            <i
                class="bx bx-chevron-right text-primary transition-colors group-hover:text-white md:text-2xl p-4"></i>
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
            startAt: 1,
            perView: 3,
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