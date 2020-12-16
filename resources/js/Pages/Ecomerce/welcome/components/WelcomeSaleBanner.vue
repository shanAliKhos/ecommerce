<template>
<div class="py-5 sm:py-16 mt-10 md:mt-16 mb-12 sm:mb-6 md:mb-12 lg:mb-28 relative w-full">
    <div class="bg-left bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 h-76 sm:h-82 md:h-86 lg:h-90 z-20 relative shadow-2xl" style="background-image:url(./img/coupon-image.jpg)">
    </div>
    <div class="lg:absolute right-0 bottom-0  lg:w-6/11 xl:w-3/5 ml-auto h-76 sm:h-82 md:h-86 lg:h-90" :class="{'bg-gradient-to-l from-yellow-400 via-yellow-300 to-orange-500 shadow-lg hover:shadow-2xl':true}">
        <div
            class="py-14 sm:py-20 xl:py-24 lg:pr-8 lg:pl-40 xl:pl-76 w-5/6 sm:w-3/5 mx-auto text-center lg:text-left">
            <span class="font-medium text-white text-lg md:text-xl uppercase">New Arrivals</span>
            <p class="font-medium text-white text-3xl sm:text-4xl md:text-7xl xl:text-5xl pt-5 leading-tight">Blouses & Jeans Up to 70% Off</p>
            <a href="/" class="btn btn-primary btn-lg mt-8 md:mt-10">Get it now</a>
        </div>
    </div>
</div>
</template>