<template>
    <div class="container">

        <shop-product></shop-product>
        <related-products-slider></related-products-slider> 
        
    </div> 
</template>
<script>
import AppLayout from './../shared/AppLayout' 
// import ProductAttributes from './components/ProductAttributes'  
import ShopProduct from './components/ShowProduct'  
import RelatedProductsSlider from './../shared/Slider/RelatedProductsSlider'
 
export default {
    layout: AppLayout,   
    metaInfo() { 
        return {title: `${this.$page.Product.name}`}
    }, 
    components: { 
        ShopProduct,
        RelatedProductsSlider,
    },  
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');      
    },     
}
</script>