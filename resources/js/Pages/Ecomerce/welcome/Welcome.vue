<template> 
<div>
    <HeroSlider /> 
    <WelcomeIcons/>

 
        <div class="pb-20 md:pb-32">

            <div class="text-center pb-12 md:pb-5">
                <h2 class="font-regular text-gray-600 text-3xl md:text-4xl lg:text-7xl uppercase">On sale</h2>
                <p class="font-regular text-gray-500 text-lg md:text-xl">Get it while they last!</p>
            </div>     

            <SaleSlider/> 
        </div>
        <TrendingCollection/> 
        <div class="pb-20 md:pb-24 lg:pb-32">

            <div class="flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0">
                <div class="text-center sm:text-left">
                    <h2 class="font-regular text-gray-500 text-3xl md:text-4xl lg:text-7xl">Store trends</h2>
                    <p class="font-regular text-gray-400 text-lg md:text-xl pt-2">Be styling, no matter the season!</p>
                </div>
                <inertia-link :href="route('shop.index')" 
                    class="flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-regular text-xl text-primary">
                    Show more
                    <i class="bx bx-chevron-right text-orange-500 transition-colors group-hover:text-orange-400 pl-3 pt-2 text-xl"></i>
                </inertia-link>
            </div>  

            <TrendingSlider/>

        </div>
        <TrendingMultiSlider/> 
        <WelcomeBrands/> 
        <!-- <SaleBanner/> -->
 

</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'  

// import HeroSlider from './../shared/Slider/HeroSlider'
import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'
import TrendingCollection from './components/TrendingCollection'
// import TrendingSlider from './../shared/Slider/TrendingSlider'
import TrendingMultiSlider from './../shared/Slider/TrendingMultiSlider'
import WelcomeBrands from './components/WelcomeBrands'
import SaleBanner from './components/SaleBanner'
// import SaleSlider from './../shared/Slider/SaleSlider'
  
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        HeroSlider :() => import('./../shared/Slider/HeroSlider'),
        WelcomeIcons ,
        SaleSlider :() => import('./../shared/Slider/SaleSlider'),
        TrendingCollection,
        TrendingSlider :() => import('./../shared/Slider/TrendingSlider'),
        TrendingMultiSlider,
        WelcomeBrands ,
        SaleBanner,
    },

    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },
 

}
</script>
