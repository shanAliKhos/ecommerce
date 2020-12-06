<template>
    <div class="hero-slider relative shadow-lg">
        <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">

                <div class="glide__slide">
                    <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/main-slider/hero-slide-01.jpg)">
                        <div
                            class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                            <h3
                                class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Store New Men’s Outdoor Collection
                            </h3>
                            <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                        </div>
                    </div>
                </div>

                <div class="glide__slide">
                    <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/main-slider/hero-slide-02.jpg)">
                        <div
                            class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                            <h3
                                class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Blake by Store <br /> 30% off
                            </h3>
                            <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                        </div>
                    </div>
                </div>

                <div class="glide__slide">
                    <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/main-slider/hero-slide-03.jpg)">
                        <div
                            class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                            <h3
                                class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Hoodie your way! <br /> For Men
                            </h3>
                            <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                        </div>
                    </div>
                </div>

                <div class="glide__slide">
                    <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/main-slider/hero-slide-04.jpg)">
                        <div
                            class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                            <h3
                                class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Match and play Women’s Dresses
                            </h3>
                            <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                        </div>
                    </div>
                </div>

                <div class="glide__slide">
                    <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/main-slider/hero-slide-05.jpg)">
                        <div
                            class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                            <h3
                                class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Back to school, <br /> the stylish way
                            </h3>
                            <a href="javascript:;" class="btn btn-primary btn-lg mt-8">Know more</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="absolute bottom-0 inset-x-0 mb-6 z-10 text-center" data-glide-el="controls[nav]">
            <span class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer" data-glide-dir="=0"></span>
            <span class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer" data-glide-dir="=1"></span>
            <span class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer" data-glide-dir="=2"></span>
            <span class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer" data-glide-dir="=3"></span>
            <span class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full focus:outline-none cursor-pointer" data-glide-dir="=4"></span>
        </div>
    </div>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
    mounted() {
        new Glide('.hero-slider', { autoplay: 3000, type: 'carousel' }).mount();
    },
}
</script>