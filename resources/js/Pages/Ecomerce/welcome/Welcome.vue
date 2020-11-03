<template>
    <div>
        
        <!-- Categories Section Begin -->
        <!-- <categories-slider></categories-slider> -->
  
        <div class="container shadow-2xl p-2">
            <sale-products-slider :Items="4"></sale-products-slider>
        </div>        
                  
        
        <!-- Featured Section Begin -->
        <featured-products></featured-products>

        <!-- Banner Begin -->
        <banner></banner>

        <!-- Products  Multi Sliders Section Begin -->
        <multi-products-sliders></multi-products-sliders>
       
        <!-- Blog Section Begin -->
        <blog-post></blog-post> 
        
    </div>
</template>

<script>
    import AppLayout from './../shared/AppLayout'  
    import SaleProductsSlider from './../shared/Slider/SaleProductsSlider'  
    import CategoriesSlider from './../shared/Slider/CategoriesSlider'  
    import FeaturedProducts from './components/FeaturedProducts'      
    import Banner from './components/Banner'      
    import MultiProductsSliders from './components/MultiProductsSliders'  
    import BlogPost from './components/BlogPost'  

    export default { 
        metaInfo: { title: 'Welcome' },
        layout: AppLayout, 
        components: {
            // CategoriesSlider,
            SaleProductsSlider,
            FeaturedProducts,
            Banner,
            MultiProductsSliders,
            BlogPost
        },

   
    }
</script>
