<template> 
<div class="container" >
    
    <HeroSlider/> 

    <WelcomeIcons/>

    <TrendingCollection/> 

    <TrendingSlider/>
        
    <TrendingMultiSlider/> 

    <WelcomeBrands/> 

    <WelcomeSaleBanner/>
    
    <SaleSlider/>

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
import WelcomeSaleBanner from './components/WelcomeSaleBanner'
import SaleSlider from './../shared/Slider/SaleSlider'
  
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        HeroSlider,
        WelcomeIcons ,
        TrendingCollection,
        TrendingSlider,
        TrendingMultiSlider,
        WelcomeSaleBanner,
        WelcomeBrands ,
        SaleSlider,
    },

    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },
 

}
</script>
