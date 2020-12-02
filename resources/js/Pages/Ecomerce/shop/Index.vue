<template>
<div class="shop-section">

    <div class="container"> 

        <div class="py-10 flex flex-col sm:flex-row justify-between">
            <div class="flex items-center justify-center sm:justify-start">
                <i class="bx bxs-filter-alt text-primary text-xl"></i>
                <p class="font-hkregular text-secondary md:text-lg px-2 leading-none block">
                    Filter </p>
                <div class="flex items-center border border-grey-darker p-2 rounded">
                    <a href="/collection-list"><i
                            class="bx bx-menu text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i></a>
                    <div class="w-px h-4 mx-2 bg-grey-darker"></div>
                    <a href="/collection-grid"><i
                            class="bx bxs-grid text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i></a>
                </div>
            </div>
            <div class="flex items-center justify-center sm:justify-end mt-6 sm:mt-0 w-76">
                <p class="font-hkregular text-secondary md:text-lg mr-2 -mt-2">Sort by:
                </p>

                <select class="w-2/3 form-select">
                    <option value="0">Best Match</option>
                    <option value="1">Price: Low - High</option>
                    <option value="2">Price: High - Low</option>
                </select>
            </div>
        </div>

        <div class="flex flex-wrap justify-between pb-6 lg:pb-10 xl:pb-12 sm:-px-3 md:-mx-5 -mx-4">

            <div v-for="(Product, index) in Products" :key="index" class="w-1/2 lg:w-1/5 xl:w-1/5 relative group pb-12 lg:last:hidden xl:last:block">

                <div class="px-2 md:px-2">

                    <shop-product :Product="Product"></shop-product>

                </div>

            </div> 
            
        </div>  
 
    </div> 
    
    <pagination :Pagination="Pagination"></pagination>

</div>
</template>

<script>
import AppLayout from './../shared/AppLayout'   
import Pagination from './../shared/Partials/Pagination'  
import ShopProduct from './../shared/Product/Product'

export default {
    layout: AppLayout,     
    metaInfo: { title: 'Shop' }, 
    components: {   
        ShopProduct,
        Pagination, 
    },
     

     computed: {
        Products(){
            return this.$page.Products.data;
        },  
        Pagination(){
            return {
                first_page_url:this.$page.Products.first_page_url,
                prev_page_url:this.$page.Products.prev_page_url,
                links:this.$page.Products.links,
                next_page_url:this.$page.Products.next_page_url,
                last_page_url:this.$page.Products.last_page_url,
            };
        },  
        CountTotalProducts(){ 
            return this.$page.Products.data.length;
        } 
     },
    
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },    

}
</script>
