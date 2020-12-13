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

        <SaleSlider v-if="ProductsOnSale.length>0" :products="ProductsOnSale" />

    </div> 

</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'  

import HeroSlider from './../shared/Slider/HeroSlider'  
import TrendingCollection from './components/TrendingCollection'   
import TrendingSlider from './../shared/Slider/TrendingSlider'  

import WelcomeTrendingMultiSlider from './../shared/Slider/WelcomeTrendingMultiSlider'  
import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'  

import WelcomeSaleBanner from './components/WelcomeSaleBanner'   
import WelcomeBrands from './components/WelcomeBrands'   
 
import SaleSlider from './../shared/Slider/SaleSlider'  
 
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        HeroSlider,
        WelcomeIcons,
        TrendingCollection,
        TrendingSlider,
        WelcomeTrendingMultiSlider,
        WelcomeSaleBanner,
        WelcomeBrands,
        SaleSlider,
    },

    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },
    computed: {
        ProductsOnSale(){
            return this.$page.SaleProducts;
        }        
    },    

}
</script>
