<template>
    <div class="product__discount  ">
        <div class="section-title product__discount__title">
            <h2>Sale Off</h2>
        </div>
   
        <Carousel  
            :loop="true" 
            :margin="10"  
            :items="Items?Items:3" 
            :dots="true"  
            :autoHeight="false" 
            :nav="false" 
            :autoplay="true"   
            >
            <sale-product v-for="(Product, index) in SaleProducts" :key="index" :Product="Product"></sale-product> 
        </Carousel>
       
    </div>
</template>
<script>
import SaleProduct from './../Product/Product' 
import Carousel from "vue-owl-carousel";
export default {
    props:['ProductsOnSale','Items'],
    components:{
        SaleProduct,
        Carousel  
    },
    computed: {
        SaleProducts(){
            var SaleProduct =  this.ProductsOnSale;
            if(this.$page.SaleProducts){
                 SaleProduct = this.$page.SaleProducts;
            }
            return SaleProduct;
        }
    },
 
}
</script>