<template>
    <div>
        <!-- Breadcrumb Section -->
 
        <!-- Product Details Section Begin -->
        <Product :Product="Product"></Product>
  

        <!-- Related Product -->
        <related-products></related-products> 
        
    </div>
</template>

<script>
import AppLayout from './../shared/AppLayout' 
import ProductAttributes from './components/ProductAttributes' 
import RelatedProducts from './components/RelatedProducts' 
import Product from './product/Product' 

export default {
    layout: AppLayout,  
    metaInfo: { title: 'Product' },
    components: {
        ProductAttributes,RelatedProducts,Product
    },
    props:{
        Product:{
            type:Object,
            required:true,
        },
    }, 
    created(){   
        setTimeout(function(){  
            $('.set-bg').each(function() {
                var bg = $(this).data('setbg')
                $(this).css('background-image', 'url(''/'+ bg + ')');
            });  
        }, 1200);
    }      
}
</script>