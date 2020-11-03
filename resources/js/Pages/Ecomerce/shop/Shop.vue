<template>
<div>
     
    <!-- <BreadCrumb>
        <template #CurrentPage>
            Shop
        </template>
    </BreadCrumb> --> 

    <!-- Product Section Begin -->
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5 ">
                    <shop-sidebar class="shadow"></shop-sidebar>
                </div>
                <div class="col-lg-9 col-md-7">
                    
                    <sale-slider v-if="path == '/shop'" :ProductsOnSale="ProductsOnSaleListing"></sale-slider>

                    <fliter-options :TotalProducts="CountTotalProducts"></fliter-options>   

                    <shop-products :Products="Products" ></shop-products> 

                    <pagination :links="links" v-if="links.length"></pagination> 

                </div>
            </div>
        </div>
    </section>
    <!-- Product Section End -->
        
</div>
</template>

<script>
import AppLayout from './../shared/AppLayout'  
import SaleSlider from './../shared/Slider/SaleProductsSlider'
import BreadCrumb from './../shared/components/BreadCrumb'
import Pagination from './../shared/components/Pagination'

import ShopSidebar from './components/ShopSidebar'
import ShopProducts from './components/ShopProducts'
import FliterOptions from './components/FliterOptions'
export default {
    layout: AppLayout,     
    metaInfo: { title: 'Shop' },
    props:['Products','links'],
    components: {  
        ShopSidebar, 
        BreadCrumb,
        ShopProducts,
        SaleSlider,
        Pagination,
        FliterOptions
    },
     

     computed: {
        path() {
            return window.location.pathname
        },
        ProductsOnSaleListing(){
            return this.$page.SaleProducts;
        },
        CountTotalProducts(){
            self = this;
            return self.Products.length;
        }
    

     },
    

}
</script>
