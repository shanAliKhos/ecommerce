<template>
<tr class=" text-gray-500 bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#</p>
        <p class="py-5  lg:p-1 font-semibold ">
            {{ (ProductIndex+1) }}
        </p>
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">IMAGE</p>

        <div class="flex items-center py-5  lg:p-1">
            <div class="flex-shrink-0 h-full w-full">
                <img class="h-full w-full sm:w-44 sm:h-44 lg:w-20 lg:h-20 rounded" :src="Product.mainphoto_url" alt="">
            </div> 
        </div>             
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">NAME</p>
        <p class="py-5  lg:p-1 font-semibold ">{{ Product.name }}</p>
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">SKU</p>
        <p class="py-5  lg:p-1 font-semibold ">{{ Product.sku }}</p>
    </td> 
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">PRICE</p>
        <p class="py-5  lg:p-1 font-semibold ">
            ${{ (Product.sale_price>0)?Product.sale_price:Product.regular_price }}
        </p>
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">STATUS</p>
        <p class="py-5  lg:p-1 font-semibold ">
            <span class="rounded bg-green-400 text-white py-1 px-3 text-xs font-bold" v-if="Product.is_active">ACTIVE</span>
            <span class="rounded bg-red-400 text-white py-1 px-3 text-xs font-bold" v-else>IN ACTIVE</span>
        </p>
    </td>
    <td class="w-full lg:w-auto p-3  text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTIONS</p>
        <div class="inline-flex py-5  lg:p-1">

            <inertia-link :href="route('admin.product.edit',Product.id)" class="transition duration-500 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3">                                        
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </inertia-link>

        </div>             
    
    </td>
</tr>   
</template>
<script>
import LoadingButton from './../../../Shared/LoadingButton'   
export default {
    props:['Product','ProductIndex'],
    components:{
        LoadingButton,
    },    
    data() {
        return {
            sending:false,
        }
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
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    self.$inertia.delete(self.route('admin.product.destroy', self.Product.id), {
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