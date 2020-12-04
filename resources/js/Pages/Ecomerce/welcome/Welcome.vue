<template>
<div id="main">
    
    <div class="container" >
        
        <hero-slider></hero-slider>

        <welcome-icons></welcome-icons>

        <trending-collection></trending-collection> 

        <trending-slider v-if="this.$page.FeatureProducts.length>0"></trending-slider>
          
 
    </div>

    <welcome-trending-multi-slider></welcome-trending-multi-slider>
 
    <div class="container">
  
        <welcome-brands></welcome-brands>

        <welcome-sale-banner></welcome-sale-banner>

        <welcome-sale-slider v-if="this.$page.SaleProducts.length>0"></welcome-sale-slider>

    </div> 

</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'  

import HeroSlider from './../shared/Slider/HeroSlider'  
import TrendingCollection from './components/TrendingCollection'   
import TrendingSlider from './../shared/Slider/TrendingSlider'  

import WelcomeSaleSlider from './../shared/Slider/WelcomeSaleSlider'  
import WelcomeTrendingMultiSlider from './../shared/Slider/WelcomeTrendingMultiSlider'  
import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'  

import WelcomeSaleBanner from './components/WelcomeSaleBanner'   
import WelcomeBrands from './components/WelcomeBrands'   
 
 
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        HeroSlider,
        WelcomeIcons,
        TrendingCollection,
        TrendingSlider,
        WelcomeTrendingMultiSlider,
        WelcomeSaleSlider,
        WelcomeSaleBanner,
        WelcomeBrands,
    },

    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },

}
</script>
