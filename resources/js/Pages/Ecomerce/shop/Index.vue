<template>
<div class="shop-section "> 

   
        <div class="py-4 flex flex-col sm:flex-row justify-between">
            <div class="flex items-center justify-center sm:justify-start">
                <!-- <i class="bx bxs-filter-alt text-primary text-xl"></i>
                <p class="font-hkregular text-secondary md:text-lg px-2 leading-none block">Filter </p>  -->
                <!-- <div class="flex items-center border border-grey-darker p-2 rounded">
                    <a href="/collection-list"><i
                            class="bx bx-menu text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i></a>
                    <div class="w-px h-4 mx-2 bg-grey-darker"></div>
                    <a href="/collection-grid"><i
                            class="bx bxs-grid text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i></a>
                </div> -->
            </div>
            <div class="flex items-center justify-center sm:justify-end mt-6 sm:mt-0 w-76">
                <p class="font-hkregular text-secondary md:text-lg mr-2 -mt-2">Sort by:
                </p>

                <select v-model="sortDirection" class="w-2/3 form-select">
                    <!-- <option value="0">Best Match</option> -->
                    <option :value="'asc'">Price: Low - High</option>
                    <option :value="'desc'">Price: High - Low</option>
                </select>
            </div>
        </div>

        <div class="flex flex-wrap justify-between mb-2">
 
           <shop-product v-for="(Product, index) in Products" :key="index" :Product="Product" class="w-1/2 md:w-1/6 relative mt-2 mb-5 z-30"></shop-product>

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
    data() {
        return {
            sortBy: 'current_price',
            sortDirection: 'desc',            
        };
    },
    // remember:'sortDirection',
    // methods: {
        // sort(s){ 
            // if(s === this.sortBy) {
            //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            // }
    //         this.sortBy = s;
    //     }        
    // },
 

     computed: {
        Products(){
            // return this.$page.Products.data;
            return this.$page.Products.data.sort((p1,p2) => {
                let modifier = 1;
                if(this.sortDirection === 'desc') modifier = -1;
                if(p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier; if(p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                return 0;
            });             
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
