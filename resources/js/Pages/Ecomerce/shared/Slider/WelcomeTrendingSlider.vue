<template>
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
            <div class="tranding-slider relative" x-data >
                <div class="glide__track" data-glide-el="track">
                    <div class="pt-12 relative glide__slides">

                        <div class="relative group glide__slide" v-for="(Product, ProductIndex) in FeaturedProducts" :key="ProductIndex"
                        >
                            <div class="sm:px-5 lg:px-4">
                                <shop-product :Product="Product"></shop-product>
                            </div>
                        </div>

                        <!-- <div class="relative group glide__slide">
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
                        </div> -->

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

</template>

<script>
import ShopProduct from './../Product/Product'
import Glide from '@glidejs/glide'

export default {
    components: {
        ShopProduct,
    },
    computed: {
        FeaturedProducts(){
            return this.$page.FeatureProducts;
        }        
    },   
    mounted() {

        new Glide('.tranding-slider',{
            type: "carousel",
            startAt: 1,
            perView: 4,
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
