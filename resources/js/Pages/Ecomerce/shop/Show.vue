<template>
    <div class="container">
        <shop-product-detail :Product="Product"></shop-product-detail>
        <related-products-slider></related-products-slider> 
    </div> 
</template>
<script>
import AppLayout from './../shared/AppLayout' 
import ProductAttributes from './components/ProductAttributes'  
import ShopProductDetail from './components/ShowProduct'  
import RelatedProductsSlider from './../shared/Slider/RelatedProductsSlider'

 
export default {
    layout: AppLayout,  
    metaInfo: { 
        title: 'Product',
    }, 
    components: {
        ShopProductDetail,
        ProductAttributes,
        RelatedProductsSlider,
    }, 

    computed: {
        Product(){
            return this.$page.Product;
        }, 
        
    },
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },    
  
}
</script>