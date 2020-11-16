<template>
    <div class="flex flex-wrap justify-between pb-6 lg:pb-10 xl:pb-12 sm:-px-3 md:-mx-5">

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block"
        v-for="(Product, index) in Products" :key="index"
        >
            <div class="sm:px-3 md:px-5">
                <shop-product :Product="Product"></shop-product>
                <!-- <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/sunglass-1.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-green text-sm uppercase tracking-wide">
                        New
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Cat eye</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$75.0</span>
                </div> -->
            </div>
        </div>

        <!-- <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/sunglass-2.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-blue text-sm uppercase tracking-wide">
                        trend
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Floral Chick</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$50.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/sunglass-3.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-primary-light text-sm uppercase tracking-wide">
                        25%
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
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
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$65.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/backpack-1.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-red text-sm uppercase tracking-wide">
                        Hot
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Black Blake</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$115.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/backpack-2.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-green text-sm uppercase tracking-wide">
                        New
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Woody Blake</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$110.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/backpack-3.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-blue text-sm uppercase tracking-wide">
                        Trend
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Party Blake</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$130.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/backpack-4.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-primary-light text-sm uppercase tracking-wide">
                        25%
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Not Ballerina Blake</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$115.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/shoes-1.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-red text-sm uppercase tracking-wide">
                        Hot
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
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
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$33.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/shoes-2.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-green text-sm uppercase tracking-wide">
                        New
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            WW Vans</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$35.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/shoes-3.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-blue text-sm uppercase tracking-wide">
                        trend
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Classic Beige</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$30.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/shoes-4.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-primary-light text-sm uppercase tracking-wide">
                        25%
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
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
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$67.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/watch-1.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-red text-sm uppercase tracking-wide">
                        Hot
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
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
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$120.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/watch-2.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-green text-sm uppercase tracking-wide">
                        New
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Rose Gold Watch</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$135.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/watch-3.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-blue text-sm uppercase tracking-wide">
                        Trend
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Silver One Watch</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$137.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/watch-4.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-primary-light text-sm uppercase tracking-wide">
                        25%
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Princess</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$145.0</span>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative group pb-12 lg:last:hidden xl:last:block">
            <div class="sm:px-3 md:px-5">
                <div class="relative rounded flex justify-center items-center">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                        style="background-image:url(./img/watch-4.png)">
                    </div>
                    <span
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-red text-sm uppercase tracking-wide">
                        Hot
                    </span>
                    <div
                        class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
                    </div>
                    <div
                        class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                class="h-6 w-6" alt="icon cart" />
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                class="h-6 w-6" alt="icon search" />
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                class="h-6 w-6" alt="icon heart" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <div>
                        <h3 class="font-hkregular text-base text-secondary">
                            Silver One for Men</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <p class="font-hkregular text-sm text-secondary ml-2">
                                (45)</p>
                        </div>
                    </div>
                    <span class="font-hkbold text-primary text-xl">$140.0</span>
                </div>
            </div>
        </div> -->

    </div>
 
    <!-- <div class="row"> 
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2 " v-for="(Product, index) in Products" :key="index">
            <shop-product :Product="Product">
            </shop-product>
        </div>
    </div> -->
    <!-- <div v-else>
        <h2>No Item Available</h2>
    </div>
     --> 
</template>
<script>
import ShopProduct from './../../shared/Product/Product'
 
export default {
    components:{ 
        ShopProduct,
    },
    props:['Products'], 
}
</script>