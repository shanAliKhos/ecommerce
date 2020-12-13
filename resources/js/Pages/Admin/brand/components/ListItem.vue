<template>
<tr class="text-gray-500 font-semibold bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#</p>
        <p class="py-5  lg:p-1 ">{{ (brandIndex+1) }}</p>
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">IMAGE</p>

        <div class="flex items-center py-5  lg:p-1">
            <div class="flex-shrink-0 h-full w-full">
                <img class="h-full w-full sm:w-44 sm:h-44 lg:w-20 lg:h-20 rounded" :src="brand.photo_url" alt="">
            </div> 
        </div>             
    </td>                     
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAME</p>
            <p class="py-5 lg:p-1 ">{{ brand.name }}</p>
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">SLUG</p>
            <p class="py-5  lg:p-1 ">{{ brand.slug  }}</p>
    </td> 
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTIONS</p>
        <div class="inline-flex py-5  lg:p-1 ">

            <inertia-link :href="route('admin.brand.edit', brand.id)" class="transition duration-500 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3">                                        
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </inertia-link>

            <form @submit.prevent="destroy(brand.id)">
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
</template>
<script>
import LoadingButton from './../../../Shared/LoadingButton'   
export default {
    props:['brand','brandIndex'],
    data() {
        return {
            sending:false,
        }
    },
    components:{
        LoadingButton,
    }, 
    methods: {
        destroy(){
            const self= this;
            self.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, cancel it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    self.$inertia.delete(self.route('admin.brand.destroy', self.brand.id), {
                        preserveState: true,
                        preserveScroll: true,  
                        onStart: () => self.sending = true,
                        onFinish: () => self.sending = false,                                    
                    })                    
                }
            })                   
        },        
             
    },  


}
</script>