<template>
 <div> 
     <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Order Listing</a>
            </li>
        </ol>
        <inertia-link 
            :href="route('admin.product.create')" 
            class="transition duration-700 ease-in-out bg-blue-400 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>            
            <span>Add New</span>                   
        </inertia-link>
                
         
    </nav>    

    <div class="my-8 p-2 pt-10 bg-white rounded shadow-xl">
        <p class="text-xl pb-6 flex items-center">
            Order Listing
        </p>    
        <table class="border-collapse w-full table-auto p-5">
            <thead>
                <tr>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">IMAGE</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">IMAGE</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">NAME</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">SKU</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Brand</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Categories</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ACTIONS</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(Product, ProductIndex) in Products" :key="ProductIndex" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#</p>
                        <p class="py-5  lg:p-1">
                            {{ (ProductIndex+1) }}
                        </p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">IMAGE</p>

                        <div class="flex items-center py-5  lg:p-1">
                            <div class="flex-shrink-0 h-full w-full">
                                <img class="h-full w-full rounded" :src="Image(Product)" alt="">
                            </div> 
                        </div>             
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAME</p>
                        <p class="py-5  lg:p-1">{{ Product.name }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">SKU</p>
                        <p class="py-5  lg:p-1">{{ Product.sku }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">BRAND</p>
                        <p class="py-5  lg:p-1" v-if="Product.brand">{{ Product.brand.name }}</p>
                        <p class="py-5  lg:p-1" v-else>N/A</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 border border-b md:text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">CATEGORY</p>
                        <div class="py-5 lg:py-0 lg:p-1 h-auto">
                            <p v-for="(Category, CategoryIndex) in Product.categories" :key="CategoryIndex" v-if="Category" class=" lg:py-0 lg:px-0 py-1 px-2 bg-yellow-100 text-xs font-bold "> {{(CategoryIndex+1)}} {{ Category.name }}</p>      
                        </div>
                        
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">PRICE</p>
                        <p class="py-5  lg:p-1">
                            ${{ (Product.sale_price)?Product.sale_price:Product.regular_price }}
                        </p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">STATUS</p>
                        <p class="py-5  lg:p-1">
                            <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold" v-if="Product.is_active">ACTIVE</span>
                            <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold" v-else>IN ACTIVE</span>
                        </p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTIONS</p>
                            <div class="inline-flex py-5  lg:p-1">

                                <inertia-link :href="route('admin.product.edit',Product.id)" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3">                                        
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </inertia-link>
 
                            </div>             
                        
                    </td>
                </tr>               
               
            </tbody>
        </table>    
    </div>



    <pagination :links="Links"></pagination>

 </div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout'  
import Pagination from './../../Shared/Pagination'  
export default {
    layout: AppLayout,  
    metaInfo: { title: 'Product' },
    components: {
        Pagination,
        // ItemPerPage,
    },
    methods: { 
        Image(item){
            self = this ;
            var  img = (item.image)?'/'+item.image.replace("public", "storage"):this.defaultPhotoUrl(item.name);
            return img;      
        },             
        defaultPhotoUrl(text)
        {
            return 'https://ui-avatars.com/api/?name='+text+'&color=7F9CF5&background=EBF4FF';
        },                  
    },    
    computed:{
        Products(){
            return this.$page.Products.data;
        },
        Links(){
            return this.$page.Products.links;
        },
    },

   
}
</script>
 