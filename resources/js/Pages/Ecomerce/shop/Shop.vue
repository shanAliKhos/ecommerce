<template>
<div class="shop-section">
    <div class="container">
        
        <!-- <div class="flex relative">
            <div class="bg-no-repeat bg-cover bg-center w-3/4 ml-auto h-56 sm:h-64 md:h-68"
                style="background-image:url(./img/hero-image-04.jpg)">
            </div>
            <div class="w-full h-56 sm:h-64 md:h-68 bg-no-repeat bg-cover absolute top-0 left-0"
                style="background-image: linear-gradient(90deg, rgba(55,36,31,1) 40%, rgba(0,0,0,0) 100%)">
                <div class="py-20 px-6 sm:px-12 lg:px-20">
                    <h1 class="font-butlerregular text-white text-2xl sm:text-3xl md:text-7xl lg:text-5xl">Collection Grid</h1>
                    <div class="flex pt-2">
                        <a href="/" class="font-hkregular text-white text-base hover:text-primary transition-colors">Home</a>
                        <span class="font-hkregular text-white text-base px-2">.</span>
                        <span class="font-hkregular text-white text-base">Collection Grid</span>
                    </div>
                </div>
            </div>
        </div> -->

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

        <shop-products :Products="Products"></shop-products>   
        
        <pagination :Pagination="Pagination"></pagination>
 
    </div>
 
        
</div>
</template>

<script>
import AppLayout from './../shared/AppLayout'   
import Pagination from './../shared/Partials/Pagination' 
import ShopProducts from './components/ShopProducts' 
export default {
    layout: AppLayout,     
    metaInfo: { title: 'Shop' }, 
    components: {  
        ShopProducts, 
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
