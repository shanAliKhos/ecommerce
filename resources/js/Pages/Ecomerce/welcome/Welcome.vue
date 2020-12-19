<template> 
<div class="container" >
    
    <HeroSlider/> 

    <WelcomeIcons/>

    <div class="pb-20 md:pb-32">

        <div class="text-center pb-12 md:pb-5">
            <h2 class="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">On sale</h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl">Get it while they last!</p>
        </div>    
        
        <SaleSlider/>

    </div>

    <TrendingCollection/> 

    <TrendingSlider/>
        
    <TrendingMultiSlider/> 

    <WelcomeBrands/> 

    <SaleBanner/>
    

</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'  

import HeroSlider from './../shared/Slider/HeroSlider'
import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'
import TrendingCollection from './components/TrendingCollection'
import TrendingSlider from './../shared/Slider/TrendingSlider'
import TrendingMultiSlider from './../shared/Slider/TrendingMultiSlider'
import WelcomeBrands from './components/WelcomeBrands'
import SaleBanner from './components/SaleBanner'
import SaleSlider from './../shared/Slider/SaleSlider'
  
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        HeroSlider,
        WelcomeIcons ,
        SaleSlider,
        TrendingCollection,
        TrendingSlider,
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
