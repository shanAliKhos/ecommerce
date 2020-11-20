<template>
<div id="main">
    
    <div class="container" >
       
        <welcome-slider></welcome-slider>

        <welcome-icons></welcome-icons>

        <welcome-trending-collection></welcome-trending-collection>

        <welcome-trending-slider></welcome-trending-slider>
 
 
    </div>

    <welcome-trending-multi-slider></welcome-trending-multi-slider>
 
    <div class="container">
  

        <welcome-brands></welcome-brands>

        <welcome-sale-banner></welcome-sale-banner>

        <welcome-sale-slider></welcome-sale-slider>

    </div> 

</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'  
import WelcomeSlider from './../shared/Slider/WelcomeMainSlider'  
import WelcomeSaleSlider from './../shared/Slider/WelcomeSaleSlider'  
import WelcomeTrendingSlider from './../shared/Slider/WelcomeTrendingSlider'  
import WelcomeTrendingMultiSlider from './../shared/Slider/WelcomeTrendingMultiSlider'  
import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'  

import WelcomeTrendingCollection from './components/WelcomeTrendingCollection'   
import WelcomeSaleBanner from './components/WelcomeSaleBanner'   
import WelcomeBrands from './components/WelcomeBrands'   
 
 
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        WelcomeSlider,
        WelcomeIcons,
        WelcomeTrendingCollection,
        WelcomeTrendingSlider,
        WelcomeTrendingMultiSlider,
        WelcomeSaleSlider,
        WelcomeSaleBanner,
        WelcomeBrands,
    },

 

}
</script>
