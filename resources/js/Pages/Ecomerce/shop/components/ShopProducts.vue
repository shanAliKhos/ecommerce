<template>
 
    <div class="row"> 
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-2 " v-for="(Product, index) in Products" :key="index">
            <shop-product :Product="Product">
            </shop-product>
        </div>
    </div>
    <!-- <div v-else>
        <h2>No Item Available</h2>
    </div>
     --> 
</template>
<script>
import ShopProduct from './../../shared/Product/Product'
 
export default {
    components:{ 
        ShopProduct,
    },
    props:['Products'], 
}
</script>