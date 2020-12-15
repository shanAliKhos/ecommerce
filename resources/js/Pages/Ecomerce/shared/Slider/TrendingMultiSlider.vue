<template>
    <div class="w-full relative">
        <div class="absolute inset-y-0 right-0 w-13/14 bg-center bg-no-repeat bg-cover bg-products-bg"></div>
        <div class="w-2/3 md:max-w-screen-sm lg:w-5/6 lg:max-w-full xl:w-5/6 xxl:max-w-screen-xxl mx-auto lg:ml-auto lg:mr-10 xl:mr-16 xxl:mx-auto relative z-10">
          
            <div class="py-16">
                <div class="ml-0 flex justify-between">

                    <div class="hidden lg:block w-3/4 bg-white">
                        <div class="py-12 px-4">

                            <vue-glide 
                                :type="'carousel'" 
                                :perView="3" 
                                :hoverpause="true"  
                                :gap="30"
                                :animationDuration="1000" 
                                :breakpoints="{
                                    1024: {
                                        perView: 2,
                                    },                                  
                                }"
                                :autoplay="2000"> 
                                
                           
                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (14).jpg')"> </div>
                                        <span class="text-v-green font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"> </div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary"> Coffee Cream</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2"> 45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                                

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (16).jpg')"></div>
                                        <span class="text-v-red font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">
                                                Floral Chick</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$50.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                            

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (18).jpg')"></div>
                                        <span class="text-v-blue font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Cat eye</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                                

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (20).jpg')"></div>
                                        <span class="text-v-green font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Coffee Cream</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                        

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (25).jpg')"></div>
                                        <span class="text-v-red font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary"> Floral Chick</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$50.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                            

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (14).jpg')"></div>
                                        <span class="text-v-blue font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Cat eye</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                     

               
                            </vue-glide>
                             
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 lg:pl-6 xl:pl-8">
                        <div class="text-right">
                            <h2 class="font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"> New season, matching shoes </h2>
                            <p class="font-regular text-gray-400 text-lg pt-1"> Featured Collection </p>
                        </div>
                        <div class="relative group">
                            <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14" style="background-image:url('/img/product/product (14).jpg')"></div>
                            <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"></div>
                            <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group transition-opacity">
                                <a href="/" class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View All Product</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="pb-16"> 
                <div class="ml-auto flex justify-between">

                    <div class="w-full lg:w-1/3 lg:pr-6 xl:pr-8">
                        <div class="text-left">
                            <h2 class="font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide"> Stylish Backpacks, Only For You</h2>
                            <p class="font-regular text-gray-400 text-lg pt-1">Featured Collection</p>
                        </div>
                        <div class="relative group">
                            <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14 relative" style="background-image:url('/img/product/product (21).jpg')"></div>
                            <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden"> </div>
                            <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group">
                                <a href="/" class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View All Product</a>
                            </div>
                        </div>
                    </div>

                    <div class="hidden lg:block w-3/4 bg-white">
                        <div class="py-12 px-4">
                       
                            <vue-glide 
                                :type="'carousel'" 
                                :perView="3" 
                                :hoverpause="true"  
                                :gap="30"
                                :animationDuration="1000" 
                                :breakpoints="{
                                    1024: {
                                        perView: 2,
                                    },                                  
                                }"
                                :autoplay="2000"> 
                                
                           
                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (21).jpg')"> </div>
                                        <span class="text-v-green font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"> </div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary"> Coffee Cream</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2"> 45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                                

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (10).jpg')"></div>
                                        <span class="text-v-red font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">
                                                Floral Chick</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$50.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                            

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (8).jpg')"></div>
                                        <span class="text-v-blue font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Cat eye</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                                

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url('/img/product/product (12).jpg')">
                                        </div>
                                        <span class="text-v-green font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Coffee Cream</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                        

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (10).jpg')"></div>
                                        <span class="text-v-red font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary"> Floral Chick</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$50.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                            

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (6).jpg')"></div>
                                        <span class="text-v-blue font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Cat eye</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                     

               
                            </vue-glide>
                             
                        </div>
                    </div>

                </div>
            </div>

            <div class="pb-16">
                <div class="ml-0 flex justify-between">
                    
                    <div class="hidden lg:block w-3/4 bg-white">
                        <div class="py-12 px-4">
                            
                            <vue-glide 
                                :type="'carousel'" 
                                :perView="3" 
                                :hoverpause="true"  
                                :gap="30"
                                :animationDuration="1000" 
                                :breakpoints="{
                                    1024: {
                                        perView: 2,
                                    },                                  
                                }"
                             :autoplay="2000"> 
                                
                           
                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (23).jpg')"> </div>
                                        <span class="text-v-green font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"> </div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary"> Coffee Cream</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2"> 45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                                

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (22).jpg')"></div>
                                        <span class="text-v-red font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">
                                                Floral Chick</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">
                                                    45
                                                </p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$50.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                            

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (24).jpg')"></div>
                                        <span class="text-v-blue font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Cat eye</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                                

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover"
                                            style="background-image:url('/img/product/product (27).jpg')">
                                        </div>
                                        <span class="text-v-green font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">New</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Coffee Cream</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                        

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (29).jpg')"></div>
                                        <span class="text-v-red font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Hot</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary"> Floral Chick</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$50.0</span>
                                    </div>
                                </vue-glide-slide>                                              
                            

                                <vue-glide-slide> 
                                    <div class="relative rounded">
                                        <div class="w-68 h-68 bg-center bg-no-repeat bg-cover" style="background-image:url('/img/product/product (36).jpg')"></div>
                                        <span class="text-v-blue font-bold text-sm uppercase tracking-wide absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">Trend</span>
                                        <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden rounded"></div>
                                        <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 group transition-opacity">
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
                                            </a>
                                            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                                                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
                                            </a>                                                    
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6">
                                        <div>
                                            <p class="font-regular text-base text-secondary">Cat eye</p>
                                            <div class="flex items-center">
                                                <div class="flex items-center">
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                    <i class="bx bxs-star text-primary"></i>
                                                </div>
                                                <p class="font-regular text-sm text-secondary ml-2">45</p>
                                            </div>
                                        </div>
                                        <span class="font-bold text-primary text-xl">$75.0</span>
                                    </div>
                                </vue-glide-slide>                                     

               
                            </vue-glide>
                             
                        </div>
                    </div>

                    <div class="w-full lg:w-1/3 lg:pl-6 xl:pl-8">
                        <div class="text-right">
                            <h2 class="font-bold text-white text-2xl lg:text-xl xl:text-2xl xxl:text-3xl tracking-wide">Summer? You need chick sunglasses</h2>
                            <p class="font-regular text-gray-400 text-lg pt-1">Featured Collection</p>
                        </div>
                        <div class="relative group">
                            <div class="h-80 sm:h-90 lg:h-76 ml-auto mb-auto bg-center bg-no-repeat bg-cover mt-14" style="background-image:url('/img/product/product (22).jpg')"></div>
                            <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-75 pointer-events-none group-hover:pointer-events-auto   transition-all overflow-hidden"></div>
                            <div class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 mx-auto group">
                                <a href="/" class="bg-primary hover:bg-primary-light font-hksemibold transition-colors text-sm text-white px-5 md:px-8 py-4 md:py-5 rounded uppercase focus:outline-none inline-block tracking-wide">View All Product</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

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
      
}
</script>