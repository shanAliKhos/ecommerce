<template>
<div> 
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Attributes Index</a>
            </li>
        </ol>
   
    </nav>

    <div class="flex justify-center">
        <div class="w-full pl-0 lg:pl-2">
            <div class="leading-loose ">

                <p class="pb-6 flex font-semibold text-xl text-gray-400">Attributes</p> 
                <div class="flex flex-wrap -mx-3 mb-2">

                    <div class="w-full md:w-1/2 px-3  md:mb-0">
                       
                        <AttributeForm/>

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

 

    <pagination :links="Links" v-if="Links.length" ></pagination> 
 
</div>

</template>
<script>
import AppLayout from './../Layouts/AppLayout'   
import Listing from './components/Listing'   
import AttributeForm from './components/AttributeForm'   
import Pagination from './../../Shared/Pagination'  

export default { 
    metaInfo() {
        return { title: `Attributes` }
    },            
    layout: AppLayout,  
    components:{ 
        Listing,
        AttributeForm,
        Pagination,
    },

    computed: {
 
        Links(){
            return this.$page.attributes.links;
        },
    },
 
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
 

    
}
</script>
 