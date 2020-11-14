<template>
<div id="main">
    
    <div class="container" x-data x-init="collectionSliders">
        <div class="hero-slider relative" x-data
            x-init="new Glide('.hero-slider', { autoplay: 3000, type: 'carousel' }).mount()">
            <div class="glide__track" data-glide-el="track">
                <div class="glide__slides">

                    <div class="glide__slide">
                        <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                            style="background-image:url(./img/hero-slide-01.jpg)">
                            <div
                                class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                                <h3
                                    class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                    Elyssi New Men’s Outdoor Collection
                                </h3>
                                <a href="/collection-grid" class="btn btn-primary btn-lg mt-8">Know more</a>
                            </div>
                        </div>
                    </div>

                    <div class="glide__slide">
                        <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                            style="background-image:url(./img/hero-slide-02.jpg)">
                            <div
                                class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                                <h3
                                    class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                    Blake by Elyssi <br /> 30% off
                                </h3>
                                <a href="/collection-grid" class="btn btn-primary btn-lg mt-8">Know more</a>
                            </div>
                        </div>
                    </div>

                    <div class="glide__slide">
                        <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                            style="background-image:url(./img/hero-slide-03.jpg)">
                            <div
                                class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                                <h3
                                    class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                    Hoodie your way! <br /> For Men
                                </h3>
                                <a href="/collection-grid" class="btn btn-primary btn-lg mt-8">Know more</a>
                            </div>
                        </div>
                    </div>

                    <div class="glide__slide">
                        <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                            style="background-image:url(./img/hero-slide-04.jpg)">
                            <div
                                class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                                <h3
                                    class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                    Match and play Women’s Dresses
                                </h3>
                                <a href="/collection-grid" class="btn btn-primary btn-lg mt-8">Know more</a>
                            </div>
                        </div>
                    </div>

                    <div class="glide__slide">
                        <div class="bg-left sm:bg-center bg-no-repeat bg-cover"
                            style="background-image:url(./img/hero-slide-05.jpg)">
                            <div
                                class="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
                                <h3
                                    class="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                    Back to school, <br /> the stylish way
                                </h3>
                                <a href="/collection-grid" class="btn btn-primary btn-lg mt-8">Know more</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="absolute bottom-0 inset-x-0 mb-6 z-30 text-center" data-glide-el="controls[nav]">
                <span
                    class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer"
                    data-glide-dir="=0"></span>
                <span
                    class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer"
                    data-glide-dir="=1"></span>
                <span
                    class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer"
                    data-glide-dir="=2"></span>
                <span
                    class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer"
                    data-glide-dir="=3"></span>
                <span
                    class="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full focus:outline-none cursor-pointer"
                    data-glide-dir="=4"></span>
            </div>
        </div>

        <div class="flex flex-col md:flex-row py-20 md:py-24">

            <div
                class="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
                <div>
                    <img src="https://d33wubrfki0l68.cloudfront.net/3c5b77be07c217ce310e179b30e44da59d358fb8/1fd98/assets/img/icons/icon-shipping.svg"
                        class="w-auto h-12" alt="icon" />
                </div>
                <div class="ml-6 mt-3 lg:mt-0">
                    <h3 class="font-hksemibold text-primary text-xl tracking-wide">
                        Free shipping</h3>
                    <p class="font-hkregular text-secondary-lighter text-base tracking-wide">
                        On all orders over $30</p>
                </div>
            </div>

            <div
                class="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
                <div>
                    <img src="https://d33wubrfki0l68.cloudfront.net/2e7e83f4e008c5efc2301e9ca7dde06e98c9a2b3/0b6dc/assets/img/icons/icon-support.svg"
                        class="w-auto h-12" alt="icon" />
                </div>
                <div class="ml-6 mt-3 lg:mt-0">
                    <h3 class="font-hksemibold text-primary text-xl tracking-wide">
                        Always available</h3>
                    <p class="font-hkregular text-secondary-lighter text-base tracking-wide">
                        24/7 call center available</p>
                </div>
            </div>

            <div
                class="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
                <div>
                    <img src="https://d33wubrfki0l68.cloudfront.net/c5fe62fc1adbb5e1e57a703b0f916a2ff38b4f77/efebf/assets/img/icons/icon-return.svg"
                        class="w-auto h-12" alt="icon" />
                </div>
                <div class="ml-6 mt-3 lg:mt-0">
                    <h3 class="font-hksemibold text-primary text-xl tracking-wide">
                        Free returns</h3>
                    <p class="font-hkregular text-secondary-lighter text-base tracking-wide">
                        30 days free return policy</p>
                </div>
            </div>

        </div>


        <div class="pb-20 md:pb-24 lg:pb-32 flex flex-wrap justify-between">
            <div class="lg:w-1/2 px-10 mx-auto lg:mx-0 text-center lg:text-left">
                <div class="lg:w-3/4 xl:w-2/3 lg:pt-10 pb-4 md:pb-10">
                    <h1 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
                        Trending Elyssi Collections
                    </h1>
                    <p class="font-hkregular text-secondary-lighter text-lg pt-4">
                        Checkout our newest trends this coming season
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 mt-6 sm:mt-10 lg:mt-0">
                <div class="px-10 h-56 sm:h-76 bg-left sm:bg-center bg-no-repeat bg-cover relative"
                    style="background-image:url(./img/collection-01.jpg)">
                    <div class="w-2/3 absolute inset-0 px-6 md:px-10 py-14 ">
                        <h3 class="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
                            Passion Pearl <br /> Collection
                        </h3>
                        <a href="/collection-list" class="flex items-center pt-5 group">
                            <div class="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                                <i
                                    class="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"></i>
                            </div>
                            <span>
                                <p
                                    class="font-hksemibold transition-colors text-primary group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
                                    Get it now</p>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 lg:px-10 mt-8 sm:mt-10">
                <div class="bg-left sm:bg-center bg-no-repeat bg-cover relative h-56 sm:h-76 lg:h-68"
                    style="background-image:url(./img/collection-02.jpg)">
                    <div class="md:w-2/3 absolute inset-0 px-6 md:px-10 py-14">
                        <h3 class="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
                            Hoodie your way! For Men
                        </h3>
                        <a href="/collection-list" class="flex items-center pt-5 group">
                            <div class="bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center">
                                <i
                                    class="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"></i>
                            </div>
                            <p
                                class="font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
                                Get it now</p>
                        </a>
                    </div>
                </div>
                <div class="bg-left sm:bg-center bg-no-repeat bg-cover relative h-56 sm:h-76 lg:h-68 mt-8 sm:mt-10"
                    style="background-image:url(./img/collection-03.jpg)">
                    <div class="w-2/3 absolute inset-0 px-6 md:px-10 py-14">
                        <h3 class="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
                            Anabelle Purses by Elyssi
                        </h3>
                        <a href="/collection-list" class="flex items-center pt-5 group">
                            <div class="bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center">
                                <i
                                    class="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"></i>
                            </div>
                            <p
                                class="font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
                                Get it now</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 px-10 h-82 sm:h-94 lg:h-96 bg-left sm:bg-center bg-no-repeat bg-cover relative mt-8 sm:mt-10"
                style="background-image:url(./img/collection-shoes.jpg)">
                <div class="w-2/3 absolute inset-0 px-6 md:px-10 py-14 sm:py-16">
                    <h3 class="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
                        W.W. Shoes <br /> by Elyssi
                    </h3>
                    <a href="/collection-list" class="flex items-center pt-5 group">
                        <div class="bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center">
                            <i
                                class="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors"></i>
                        </div>
                        <p
                            class="font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
                            Get it now</p>
                    </a>
                </div>
            </div>
        </div>

        <div class="pb-20 md:pb-24 lg:pb-32">
            <div
                class="flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0">
                <div class="text-center sm:text-left">
                    <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
                        Elyssi’s trends
                    </h2>
                    <p class="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2">
                        Be styling, no matter the season!
                    </p>
                </div>
                <a href="/collection-grid"
                    class="flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-hkregular text-xl text-primary">
                    Show more
                    <i
                        class="bx bx-chevron-right text-primary transition-colors group-hover:text-primary-light pl-3 pt-2 text-xl"></i>
                </a>
            </div>
            <div class="product-slider relative" x-data x-init="productSlider">
                <div class="glide__track" data-glide-el="track">
                    <div class="pt-12 relative glide__slides">

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/backpack-2.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-green font-hkbold text-sm uppercase tracking-wide">
                                            New
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Woodie Blake</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$115.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/purse-1.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-blue font-hkbold text-sm uppercase tracking-wide">
                                            trend
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Beautiful Brown</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$55.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/sunglass-3.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p
                                            class="text-primary-light font-hkbold text-sm uppercase tracking-wide">
                                            20%
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Coffee Cream</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$65.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/watch-1.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-red font-hkbold text-sm uppercase tracking-wide">
                                            Hot
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Submarine Watch</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$120.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/backpack-2.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-green font-hkbold text-sm uppercase tracking-wide">
                                            New
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Woodie Blake</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$115.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/shoes-1.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-blue font-hkbold text-sm uppercase tracking-wide">
                                            trend
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Cocktail Vans</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$33.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/shoes-4.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p
                                            class="text-primary-light font-hkbold text-sm uppercase tracking-wide">
                                            20%
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Siberian Boots</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$67.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/watch-3.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-red font-hkbold text-sm uppercase tracking-wide">
                                            Hot
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Silver One</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$137.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div data-glide-el="controls">
                    <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group"
                        data-glide-dir="<">
                        <i
                            class="bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i>
                    </div>
                    <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group"
                        data-glide-dir=">">
                        <i
                            class="bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="w-full relative">
        <div class="absolute inset-y-0 right-0 w-13/14 bg-center bg-no-repeat bg-cover"
            style="background-image:url(./img/bg-products.png)"></div>
        <div
            class="w-2/3 md:max-w-screen-sm lg:w-5/6 lg:max-w-full xl:w-5/6 xxl:max-w-screen-xxl mx-auto lg:ml-auto lg:mr-10 xl:mr-16 xxl:mx-auto relative z-10">
            <div class="py-16 flex">
                <div class="hidden lg:inline-block w-3/4 bg-white py-12 px-4">
                    <div class="collection-slider">
                        <div class="glide__track" data-glide-el="track">
                            <div class="glide__slides">

                                <div class="glide__slide relative group">
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url(./img/shoes-1.png)">
                                        </div>
                                        <span
                                            class="text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide">New</span>
                                        <div
                                            class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                        </div>
                                        <div
                                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                    class="h-6 w-6" alt="icon cart" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                    class="h-6 w-6" alt="icon search" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                    class="h-6 w-6" alt="icon heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-hkregular text-base text-secondary">
                                                Cocktail Vans</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45</p>
                                            </div>
                                        </div>
                                        <span class="font-hkbold text-primary text-xl">$33.0</span>
                                    </div>
                                </div>

                                <div class="glide__slide relative group">
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url(./img/shoes-4.png)">
                                        </div>
                                        <span
                                            class="text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide">Hot</span>
                                        <div
                                            class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                        </div>
                                        <div
                                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                    class="h-6 w-6" alt="icon cart" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                    class="h-6 w-6" alt="icon search" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                    class="h-6 w-6" alt="icon heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-hkregular text-base text-secondary">
                                                Siberian Boots</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45</p>
                                            </div>
                                        </div>
                                        <span class="font-hkbold text-primary text-xl">$67.0</span>
                                    </div>
                                </div>

                                <div class="glide__slide relative group">
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url(./img/shoes-2.png)">
                                        </div>
                                        <span
                                            class="text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide">Trend</span>
                                        <div
                                            class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                        </div>
                                        <div
                                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                    class="h-6 w-6" alt="icon cart" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                    class="h-6 w-6" alt="icon search" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                    class="h-6 w-6" alt="icon heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-hkregular text-base text-secondary">
                                                WW Vans</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45</p>
                                            </div>
                                        </div>
                                        <span class="font-hkbold text-primary text-xl">$35.0</span>
                                    </div>
                                </div>

                                <div class="glide__slide relative group">
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url(./img/shoes-1.png)">
                                        </div>
                                        <span
                                            class="text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide">New</span>
                                        <div
                                            class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                        </div>
                                        <div
                                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                    class="h-6 w-6" alt="icon cart" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                    class="h-6 w-6" alt="icon search" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                    class="h-6 w-6" alt="icon heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-hkregular text-base text-secondary">
                                                Cocktail Vans</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45</p>
                                            </div>
                                        </div>
                                        <span class="font-hkbold text-primary text-xl">$33.0</span>
                                    </div>
                                </div>

                                <div class="glide__slide relative group">
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url(./img/shoes-4.png)">
                                        </div>
                                        <span
                                            class="text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide">Hot</span>
                                        <div
                                            class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                        </div>
                                        <div
                                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                    class="h-6 w-6" alt="icon cart" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                    class="h-6 w-6" alt="icon search" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                    class="h-6 w-6" alt="icon heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-hkregular text-base text-secondary">
                                                Siberian Boots</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45</p>
                                            </div>
                                        </div>
                                        <span class="font-hkbold text-primary text-xl">$67.0</span>
                                    </div>
                                </div>

                                <div class="glide__slide relative group">
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url(./img/shoes-2.png)">
                                        </div>
                                        <span
                                            class="text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold text-sm uppercase tracking-wide">Trend</span>
                                        <div
                                            class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                        </div>
                                        <div
                                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                    class="h-6 w-6" alt="icon cart" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light rounded-full p-3 flex items-center transition-all   mr-3">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                    class="h-6 w-6" alt="icon search" />
                                            </a>
                                            <a href="/"
                                                class="bg-white hover:bg-primary-light  rounded-full p-3 flex items-center transition-all  ">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                    class="h-6 w-6" alt="icon heart" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-hkregular text-base text-secondary">
                                                WW Vans</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45</p>
                                            </div>
                                        </div>
                                        <span class="font-hkbold text-primary text-xl">$35.0</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/3 lg:pl-6 xl:pl-8">
                    <div class="text-right">
                        <h2
                            class="font-hkbold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide">
                            New season, matching shoes
                        </h2>
                        <p class="font-hkregular text-secondary-lighter text-lg pt-1">
                            Featured Collection
                        </p>
                    </div>
                    <div class="relative group">
                        <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14"
                            style="background-image:url(./img/collection-shoes.jpg)">
                        </div>
                        <div
                            class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden">
                        </div>
                        <div
                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group transition-opacity">
                            <a href="/"
                                class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View
                                All Product</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-16">
                <div class="ml-auto flex justify-between">
                    <div class="w-full lg:w-1/3 lg:pr-6 xl:pr-8">
                        <div class="text-left">
                            <h2
                                class="font-hkbold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide">
                                Stylish Backpacks, Only For You
                            </h2>
                            <p class="font-hkregular text-secondary-lighter text-lg pt-1">
                                Featured Collection
                            </p>
                        </div>
                        <div class="relative group">
                            <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14 relative"
                                style="background-image:url(./img/backpack-image-04.jpg)">
                            </div>
                            <div
                                class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden">
                            </div>
                            <div
                                class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group">
                                <a href="/"
                                    class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View
                                    All Product</a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block w-3/4 bg-white">
                        <div class="py-12 px-4">
                            <div class="collection-slider">
                                <div class="glide__track" data-glide-el="track">
                                    <div class="glide__slides">

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/backpack-4.png)">
                                                </div>
                                                <span class="text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold
                    text-sm uppercase tracking-wide ">New</span>
                                                <div
                                                    class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Not Ballerina Blake</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$115.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/backpack-3.png)">
                                                </div>
                                                <span class="text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold
                    text-sm uppercase tracking-wide ">Hot</span>
                                                <div
                                                    class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Party Blake</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$115.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/backpack-2.png)">
                                                </div>
                                                <span class="text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold
                    text-sm uppercase tracking-wide ">Trend</span>
                                                <div
                                                    class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Woodie Blake</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$115.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/backpack-4.png)">
                                                </div>
                                                <span class="text-v-green absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold
                    text-sm uppercase tracking-wide ">New</span>
                                                <div
                                                    class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Not Ballerina Blake</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$115.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/backpack-3.png)">
                                                </div>
                                                <span class="text-v-red absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold
                    text-sm uppercase tracking-wide ">Hot</span>
                                                <div
                                                    class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Party Blake</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$115.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/backpack-2.png)">
                                                </div>
                                                <span class="text-v-blue absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full font-hkbold
                    text-sm uppercase tracking-wide ">Trend</span>
                                                <div
                                                    class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Woodie Blake</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$115.0</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-16">
                <div class="ml-0 flex justify-between">
                    <div class="hidden lg:block w-3/4 bg-white">
                        <div class="py-12 px-4">
                            <div class="collection-slider">
                                <div class="glide__track" data-glide-el="track">
                                    <div class="glide__slides">

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/sunglass-3.png)">
                                                </div>
                                                <span
                                                    class="text-v-green font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Coffee Cream</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$75.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/sunglass-2.png)">
                                                </div>
                                                <span
                                                    class="text-v-red font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Floral Chick</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$50.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/sunglass-1.png)">
                                                </div>
                                                <span
                                                    class="text-v-blue font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Cat eye</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$75.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/sunglass-3.png)">
                                                </div>
                                                <span
                                                    class="text-v-green font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Coffee Cream</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$75.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/sunglass-2.png)">
                                                </div>
                                                <span
                                                    class="text-v-red font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Floral Chick</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$50.0</span>
                                            </div>
                                        </div>

                                        <div class="glide__slide relative group">
                                            <div class="relative rounded">
                                                <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                                    style="background-image:url(./img/sunglass-1.png)">
                                                </div>
                                                <span
                                                    class="text-v-blue font-hkbold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                                <div
                                                    class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                                </div>
                                                <div
                                                    class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                            class="h-6 w-6" alt="icon cart" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                            class="h-6 w-6" alt="icon search" />
                                                    </a>
                                                    <a href="/"
                                                        class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all  ">
                                                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                            class="h-6 w-6" alt="icon heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center pt-6">
                                                <div>
                                                    <p class="font-hkregular text-base text-secondary">
                                                        Cat eye</p>
                                                    <div class="flex items-center">
                                                        <div class="flex items-center">
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                            <i class="bx bxs-star text-primary"></i>
                                                        </div>
                                                        <p class="font-hkregular text-sm text-secondary ml-2">
                                                            45
                                                        </p>
                                                    </div>
                                                </div>
                                                <span class="font-hkbold text-primary text-xl">$75.0</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 lg:pl-6 xl:pl-8">
                        <div class="text-right">
                            <h2
                                class="font-hkbold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide">
                                Summer? You need chick sunglasses
                            </h2>
                            <p class="font-hkregular text-secondary-lighter text-lg pt-1">
                                Featured Collection
                            </p>
                        </div>
                        <div class="relative group">
                            <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14"
                                style="background-image:url(./img/sunglass-image-03.jpg)">
                            </div>
                            <div
                                class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden">
                            </div>
                            <div
                                class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group">
                                <a href="/"
                                    class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View
                                    All Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="pt-16 sm:pt-20 pb-5 sm:pb-12 border-b border-grey-dark">
            <h4 class="font-hkregular text-xl text-secondary uppercase text-center">
                Our community
            </h4>
            <div class="flex flex-wrap items-center justify-center pt-8 -mx-5">

                <div class="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
                    style="background-image:url(./img/brand-01.png)">
                </div>

                <div class="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
                    style="background-image:url(./img/brand-02.png)">
                </div>

                <div class="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
                    style="background-image:url(./img/brand-03.png)">
                </div>

                <div class="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
                    style="background-image:url(./img/brand-04.png)">
                </div>

                <div class="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
                    style="background-image:url(./img/brand-05.png)">
                </div>

                <div class="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
                    style="background-image:url(./img/brand-06.png)">
                </div>

            </div>
        </div>

        <div class="py-5 sm:py-16 mt-10 md:mt-16 mb-12 sm:mb-6 md:mb-12 lg:mb-28 relative w-full">
            <div class="bg-left bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 h-76 sm:h-82 md:h-86 lg:h-90 z-20 relative"
                style="background-image:url(./img/coupon-image.jpg)">
            </div>
            <div class="lg:absolute right-0 bottom-0 bg-right bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 ml-auto h-76 sm:h-82 md:h-86 lg:h-90"
                style="background-image:url(./img/bg-coupon.png)">
                <div
                    class="py-14 sm:py-20 xl:py-24 lg:pr-8 lg:pl-40 xl:pl-76 w-5/6 sm:w-3/5 lg:w-full mx-auto text-center lg:text-left">
                    <span class="font-hkmedium text-white text-lg md:text-xl uppercase">New Arrivals</span>
                    <h2
                        class="font-butlermedium text-white text-3xl sm:text-4xl md:text-7xl xl:text-5xl pt-5 leading-tight">
                        Blouses & Jeans Up to 70% Off
                    </h2>
                    <a href="/" class="btn btn-primary btn-lg mt-8 md:mt-10">Get it now</a>
                </div>
            </div>
        </div>

        <div class="pb-20 md:pb-32">
            <div class="text-center pb-12 md:pb-0">
                <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
                    On sale, only today
                </h2>
                <p class="font-hkregular text-secondary-lighter text-lg md:text-xl">
                    Get it while they last!
                </p>
            </div>
            <div class="product-slider relative" x-data x-init="productSlider">
                <div class="glide__track" data-glide-el="track">
                    <div class="pt-12 relative glide__slides">

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/backpack-2.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-green font-hkbold text-sm uppercase tracking-wide">
                                            New
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Woodie Blake</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$115.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/purse-1.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-blue font-hkbold text-sm uppercase tracking-wide">
                                            trend
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Beautiful Brown</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$55.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/sunglass-3.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p
                                            class="text-primary-light font-hkbold text-sm uppercase tracking-wide">
                                            20%
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Coffee Cream</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$65.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/watch-1.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-red font-hkbold text-sm uppercase tracking-wide">
                                            Hot
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Submarine Watch</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$120.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/backpack-2.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-green font-hkbold text-sm uppercase tracking-wide">
                                            New
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Woodie Blake</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$115.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/shoes-1.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-blue font-hkbold text-sm uppercase tracking-wide">
                                            trend
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Cocktail Vans</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$33.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/shoes-4.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p
                                            class="text-primary-light font-hkbold text-sm uppercase tracking-wide">
                                            20%
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Siberian Boots</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$67.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="relative group glide__slide">
                            <div class="sm:px-5 lg:px-4">
                                <div class="relative rounded flex justify-center items-center">
                                    <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                        style="background-image:url(./img/watch-3.png)">
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
                                        <p class="text-v-red font-hkbold text-sm uppercase tracking-wide">
                                            Hot
                                        </p>
                                    </div>
                                    <div
                                        class="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded">
                                    </div>
                                    <div
                                        class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <a href="/cart"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                                class="h-6 w-6" alt="icon cart" />
                                        </a>
                                        <a href="/product"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all   mr-3">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                                class="h-6 w-6" alt="icon search" />
                                        </a>
                                        <a href="/account/wishlist/"
                                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all  ">
                                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                                class="h-6 w-6" alt="icon heart" />
                                        </a>
                                    </div>
                                </div>
                                <a href="/product" class="flex justify-between items-center pt-6">
                                    <div>
                                        <h3 class="font-hkregular text-base text-secondary">
                                            Silver One</h3>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                                <i class="bx bxs-star text-primary"></i>
                                            </div>
                                            <div>
                                                <p class="font-hkregular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-hkbold text-primary text-xl">$137.0</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div data-glide-el="controls">
                    <div class="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group"
                        data-glide-dir="<">
                        <i
                            class="bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i>
                    </div>
                    <div class="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group"
                        data-glide-dir=">">
                        <i
                            class="bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4"></i>
                    </div>
                </div>
            </div>

        </div>
    </div> 

</div> 
</template>

<script>
    import AppLayout from './../shared/AppLayout'  
    import SaleProductsSlider from './../shared/Slider/SaleProductsSlider'  
    import CategoriesSlider from './../shared/Slider/CategoriesSlider'  
    import FeaturedProducts from './components/FeaturedProducts'      
    import Banner from './components/Banner'      
    import MultiProductsSliders from './components/MultiProductsSliders'  
    import BlogPost from './components/BlogPost'  

    export default { 
        metaInfo: { title: 'Welcome' },
        layout: AppLayout, 
        components: {
            // CategoriesSlider,
            SaleProductsSlider,
            FeaturedProducts,
            Banner,
            MultiProductsSliders,
            BlogPost
        },

   
    }
</script>
