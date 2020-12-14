<template>
<div id="main">
    
    <div class="container" >
        
        <hero-slider></hero-slider>

        <welcome-icons></welcome-icons>

        <trending-collection></trending-collection> 

        <TrendingSlider/>
          
 
    </div>

    <welcome-trending-multi-slider></welcome-trending-multi-slider>
 
    <div class="container">
  
        <welcome-brands></welcome-brands>

        <welcome-sale-banner></welcome-sale-banner>

        <!-- <SaleSlider v-if="ProductsOnSale.length>0" :products="ProductsOnSale" /> -->
        
        <SaleSlider/>

    </div> 

</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'  

// import HeroSlider from './../shared/Slider/HeroSlider'  
// import TrendingCollection from './components/TrendingCollection'   
// import TrendingSlider from './../shared/Slider/TrendingSlider'  

// import WelcomeTrendingMultiSlider from './../shared/Slider/WelcomeTrendingMultiSlider'  
// import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'  

// import WelcomeSaleBanner from './components/WelcomeSaleBanner'   
// import WelcomeBrands from './components/WelcomeBrands'   
 
// import SaleSlider from './../shared/Slider/SaleSlider'  
 
export default { 
    metaInfo: { title: 'Welcome' },
    layout: AppLayout, 
    components:{
        HeroSlider:() => import('./../shared/Slider/HeroSlider'),
        WelcomeIcons:() => import('./../shared/Partials/components/WelcomeIcons'),
        TrendingCollection:() => import('./components/TrendingCollection'),
        TrendingSlider:() => import('./../shared/Slider/TrendingSlider'),
        WelcomeTrendingMultiSlider:() => import('./../shared/Slider/WelcomeTrendingMultiSlider'),
        WelcomeSaleBanner:() => import('./components/WelcomeSaleBanner'),
        WelcomeBrands:() => import('./components/WelcomeBrands'),
        SaleSlider:() => import('./../shared/Slider/SaleSlider'),
    },

    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },
 

}
</script>
