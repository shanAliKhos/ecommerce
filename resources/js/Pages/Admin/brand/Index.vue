<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <p class="text-gray-600">Brand Listing</p>
            </li>
        </ol>
        
        <!-- <inertia-link 
            :href="route('admin.brand.create')" 
            class="transition duration-700 ease-in-out bg-blue-400 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>            
            <span>Add New</span>            
       
        </inertia-link> -->
    </nav>

    <div class="flex justify-center">
        <div class="w-full pl-0 lg:pl-2">
            <div class="leading-loose ">

                <p class="pb-6 flex font-semibold text-xl text-gray-400">Brands</p> 
                <div class="flex flex-wrap -mx-3 mb-2">

                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                       
                        <BrandForm/>

                    </div>  
 

                    <div class="w-full md:w-1/2 px-3 md:mb-0">
                        <div class="py-5 px-5 bg-white rounded-lg shadow-2xl">
                            <p class="pb-6 flex font-semibold text-xl text-gray-400">Listing</p>    

                            <Listing />
                            
                        </div>        
                    </div>    
                    
                </div>                                                
        
            </div> 
        </div>    
    </div>   


    <!-- <div class="py-5 px-5 bg-white rounded shadow-2xl">
        <p class="pb-6 flex font-semibold text-xl text-gray-400">Brand Listing</p>    
        <table class="border-collapse w-full table-auto">
            <thead>
                <tr> 
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">#</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">IMAGE</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">NAME</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">SLUG</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <list-item v-for="(Brand, BrandIndex) in Brands" :key="BrandIndex" :brandIndex="BrandIndex" :brand='Brand' class="font-bold" ></list-item>
                <tr v-if="(!Brands.length > 0)" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td colspan="7" class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static ">
                        <p class="py-5 lg:p-1 text-lg text-gray-300 text-semibold uppercase inline-flex items-center"> 
                            <svg class="h-10 w-10 mr-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>                        
                            <span>No Record Found !  </span>
                        </p>
                    </td> 
                </tr>
            </tbody>
        </table>    
    </div>
  -->
     <pagination :links="Links"></pagination>


</div>
 </template>
<script>
import AppLayout from './../Layouts/AppLayout'  
import Pagination from './../../Shared/Pagination'  
import Listing from './components/Listing'   
import BrandForm from './components/BrandForm'   

export default {
    metaInfo: { title: 'Brands' },
    layout: AppLayout,
    data() {
        return {
            sending:false,
        }
    },
    components:{
        Pagination,        
        Listing,
        BrandForm,
    },

    computed: {

        Links(){
            return this.$page.brands.links;
        },
           
    },
     
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
 

}
 </script>
<style scoped>
.img-thumbnail{
    max-width:90px;
}
    
</style>