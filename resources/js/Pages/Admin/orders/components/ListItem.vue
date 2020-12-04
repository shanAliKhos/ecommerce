<template>
<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static ">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">#</p>
        <p class="py-5  lg:p-1 ">{{ (OrderIndex+1) }}</p>
    </td>
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static ">
        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ORDER NUMBER</p>
        <p class="py-5 lg:p-1 text-sm">{{ Order.OrderNumber }}</p>
    </td>
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">PLACED BY</span>
            <p class="py-5  lg:p-1 ">{{ Order.user.name }}</p>
    </td>
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">TOTAL PRICE</span>
            <p class="py-5  lg:p-1 "> {{Currency.Symbol}}{{ Order.GrandTotal }}</p>
    </td>
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ITEAMS QTY</span>
            <p class="py-5  lg:p-1 ">{{ Order.ItemCount }}</p>
    </td>
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ORDER STATUS</span>
            <p class="py-5 lg:p-1 ">
                
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold" v-if="Order.PaymentStatus">Paid</span>
                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold" v-else>Not-Paid</span>                                 
                <br>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold" :class="StatusColor(Order.Status)">{{Order.Status}}</span>
            </p>
    </td>
    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTIONS</span>
        <div class="inline-flex py-5  lg:p-1 ">

            <inertia-link :href="route('admin.order.show', Order.id )" class="transition duration-500 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3">                                        
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
    props:['Order','OrderIndex'],
    components:{
        LoadingButton,
    }, 
    methods: {
        // destroy(){
        //     const self= this;
        //     self.$swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     }).then((result) => {
        //         if (result.isConfirmed) { 
        //             self.$inertia.delete(self.route('admin.customer.destroy',self.Customer.id), {
        //                 preserveState: true,
        //                 preserveScroll: true,  
        //                 onStart: () => self.sending = true,
        //                 onFinish: () => self.sending = false,                                    

        //             })                    
        //         }
        //     })                   
        // },                
               
    },     
 
}
</script>