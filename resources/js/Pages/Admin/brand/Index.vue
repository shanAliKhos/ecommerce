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
        
        <inertia-link 
            :href="route('admin.brand.create')" 
            class="transition duration-700 ease-in-out bg-blue-400 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>            
            <span>Add New</span>            
       
        </inertia-link>
    </nav>


    <div class="my-8 p-10 bg-white rounded shadow-xl">
        <p class="text-xl pb-6 flex items-center">
            Brand Listing
        </p>    
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
                
                <tr v-for="(Brand, index) in Brands" :key="index" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#</p>
                         <p class="py-5  lg:p-1 ">{{ (index+1) }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">IMAGE</p>

                        <div class="flex items-center py-5  lg:p-1">
                            <div class="flex-shrink-0 h-full w-full">
                                <img class="h-full w-full sm:w-44 sm:h-44 lg:w-20 lg:h-20 rounded" :src="Image(Brand)" alt="">
                            </div> 
                        </div>             
                    </td>                     
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAME</p>
                         <p class="py-5  lg:p-1 ">{{ Brand.name }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">SLUG</p>
                         <p class="py-5  lg:p-1 ">{{ Brand.slug  }}</p>
                    </td> 
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTIONS</p>
                        <div class="inline-flex py-5  lg:p-1 ">

                            <inertia-link :href="route('admin.brand.edit', Brand.id)" class="transition duration-500 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3">                                        
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </inertia-link>

                            <form @submit.prevent="destroy(Brand.id)">
                                <button class="transition duration-500 ease-in-out bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded inline-flex items-center" type="submit">
                                    <svg v-if="sending"  class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                                    </svg>                       
                                    <svg v-else class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>                                       
                                </button> 
                            </form>   
                        </div>             
                    
                    </td>
                </tr>                        
                
            </tbody>
        </table>    
    </div>
 
 
</div>
 </template>
<script>
import AppLayout from './../Layouts/AppLayout'  
export default {
    metaInfo: { title: 'Brand' },
    layout: AppLayout,
    data() {
        return {
            sending:false,
        }
    },
    methods: {
        destroy(id){
            const self = this; 
            self.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    self.$inertia.delete(route('admin.brand.destroy',id),{
                        preserveState: true,
                        preserveScroll: true,
                        onStart: () => self.sending = true,
                        onFinish: () => self.sending = false,                           
                    })    
                }
            })                
         
        },   
        Image(item){
            self = this ;
            var  img = (item.logo)?'/'+item.logo.replace("public", "storage"):this.defaultPhotoUrl(item.name);
            return img;      
        },             
        defaultPhotoUrl(text)
        {
            return 'https://ui-avatars.com/api/?name='+text+'&color=7F9CF5&background=EBF4FF';
        },        
    },
    computed: {
        Brands(){
            return this.$page.Brands.data;
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