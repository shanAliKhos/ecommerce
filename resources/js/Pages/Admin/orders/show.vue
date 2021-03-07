<template>
 <div class="font-semibold  text-gray-800">  
     <nav class="text-sm  mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="">Home</inertia-link>              
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="">Order Show</a>
            </li>
        </ol>
        <BackButton/>  
    </nav>    
 
     
    <div class="my-8 p-10  rounded shadow-xl">
        <p class="pb-6 flex  text-xl font-bold">Order#  <span class="text-blue-700"> {{ Order.OrderNumber}} </span></p>     

        <div class="flex flex-wrap -mx-3 mb-5 ">
            
            <div class="w-full md:w-1/3 px-3 md:mb-0">
                <div class="transition ease-in-out duration-700 transform transform-gpu  shadow h-60 hover:bg-white hover:shadow-2xl hover:scale-105 border border-gray-200 px-5 py-5 mr-2">
                    <p class="pb-6 flex  text-lg text-blue-700 uppercase">Placed by</p>  
                    <p class="flex  text-sm  uppercase"> Name : {{ Order.user.name }}</p>    
                    <p class="flex  text-sm  uppercase"> Email : <span class="lowercase pl-2">{{ Order.user.email }}</span></p>    
                    <p class="flex  text-sm "> created_at : <br> {{ Order.created_at }}</p>    
                    <p class="flex  text-sm "> updated_at : <br> {{ Order.updated_at }}</p>                   
                </div>
            
            </div>
               
            <div class="w-full md:w-1/3 px-3 md:mb-0 mt-5 md:mt-0">
                <div class="transition ease-in-out duration-700 transform transform-gpu  shadow h-60 hover:bg-white hover:shadow-2xl hover:scale-105 border border-gray-200 px-5 py-5 mr-2 shadow h-60">
                    <p class="pb-6 flex  text-lg text-blue-700 uppercase">Ship To</p>    
                    <p class="flex  text-sm  uppercase"> {{Order.CardHolderName}}</p>    
                    <p class="flex  text-sm  uppercase"> {{Order.Address}} </p>    
                    <p class="flex  text-sm  uppercase"> {{Order.City}} , {{Order.Country}} ,{{Order.PostalCode}}</p>     
                    <p class="flex  text-sm  uppercase"> {{ Order.PhoneNumber }}</p>     
                </div>        
            </div> 

            <div class="w-full md:w-1/3 px-3 md:mb-0 mt-5 md:mt-0">
                <div class="transition ease-in-out duration-700 transform transform-gpu  shadow h-60 hover:bg-white hover:shadow-2xl hover:scale-105 border border-gray-200 px-5 py-5 mr-2 shadow h-60 ">
                    <p class="pb-6 flex  text-lg text-blue-700 uppercase">Details</p>    
                    <p class=" text-sm  uppercase">Status : <span :class="StatusIcon">{{Order.Status}} </span> </p> 
                    <p class=" text-sm  uppercase">Amount : <span class="text-red-500"> ${{ Order.GrandTotal }}</span> </p> 
                    <p class=" text-sm  uppercase">Payment Method : <span class="text-red-400"> {{ Order.PaymentMethod }}</span></p>
                    <p class=" text-sm  uppercase">Payment Status : 
                        <span :class="{'text-green-500':Order.PaymentStatus == 1,'text-red-500':Order.PaymentStatus !== 1}">
                            {{ Order.PaymentStatus == 1 ? 'Completed' : 'Not Completed' }}  
                        </span> 
                    </p>
                    <p class=" text-sm  uppercase">Payment Track : {{ Order.PaymentToken }} </p>
                </div>            
            </div> 

        </div>
        
   
        <div class="flex flex-wrap mx-3 mb-10 mt-10">
            <p class="text-xl font-bold text-blue-700 flex text-center justify-center w-full mb-5"> Items </p>     
 
            <table class="border-collapse w-full table-auto shadow">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="p-3  uppercase text-gray-600 border border-gray-300 hidden  lg:table-cell">#</th> 
                        <th class="p-3  uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">PRODUCT</th>
                        <th class="p-3  uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">SKU</th>
                        <th class="p-3  uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">QTY</th>
                        <th class="p-3  uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">SUBTOTAL</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(OrderItem, OrderItemIndex) in Order.items" :key="OrderItemIndex" class="transition ease-in-out duration-700 transform transform-gpu  hover:bg-white hover:shadow-2xl flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 font-semibold">
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static">
                            <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs  uppercase">#</p>
                            <p class="py-5  lg:p-1 ">{{ (OrderItemIndex+1) }}</p>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static ">
                            <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs  uppercase">PRODUCT</p>
                            <p class="py-5  lg:p-1 ">{{ OrderItem.product.name }}</p>
                            <div class="py-5 lg:p-1 text-sm"> <span v-for="(variation,variationIndex) in JSON.parse(OrderItem.variation)" :key="( variationIndex)"> {{ variationIndex }} : {{ variation }} </span> </div>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs  uppercase">SKU</span>
                            <p class="py-5  lg:p-1 ">{{ OrderItem.product.sku }}</p>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs  uppercase">QTY</span>
                            <p class="py-5  lg:p-1 ">{{ OrderItem.Quantity }}</p>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs  uppercase">SUBTOTAL</span>
                            <p class="py-5  lg:p-1 ">{{  OrderItem.Price }}</p>
                        </td>
                    
                    </tr>               
                </tbody>
            </table>    
        </div>         
 
        <div class="lg:flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-5 mb-5">

            <inertia-link class="mt-2 flex items-center uppercase justify-center transition duration-700 ease-in-out bg-yellow-400 hover:bg-yellow-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2"
                v-if="Order.Status !== 'pending'"
                as="button" type="button" 
                :data="{ Status: 'pending' }"  
                method="put" preserve-scroll 
                :href="route('admin.order.update', this.Order.id)"  
                >
                <i class="fa fa-fw fa-lg fa-circle-o-notch" ></i><span>Pending</span>
            </inertia-link>
            
            <inertia-link class="mt-2 flex items-center uppercase justify-center transition duration-700 ease-in-out bg-blue-400 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2"
                v-if="Order.Status !== 'processing'"
                as="button" type="button" 
                :data="{ Status: 'processing' }"  
                method="put" preserve-scroll 
                :href="route('admin.order.update', this.Order.id)"  
                >
                <i class="fa fa-fw fa-lg fa-circle-o-notch" ></i><span>Process</span>
            </inertia-link>
            
            <inertia-link class="mt-2 flex items-center uppercase justify-center transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2"
                v-if="Order.Status !== 'completed'"
                as="button" type="button" 
                method="put" preserve-scroll 
                :data="{ Status: 'completed' }"  
                :href="route('admin.order.update', this.Order.id)" 
                >
                <i class="fa fa-fw fa-lg fa-check-circle"></i><span>Completed</span>
            </inertia-link>

            <button class="mt-2 w-full lg:w-auto  flex items-center uppercase justify-center transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex lg:mr-2"
                v-if="Order.Status !== 'decline'"
                as="button" type="button" 
                :disabled="sending" 
                @click="cancel" 
                >
                <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                </svg>                  
                <i v-else class="fa fa-fw fa-lg fa-remove"></i>
                Cancel
            </button>        

        </div>        
 
    </div> 
</div>     
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import LoadingButton from './../../Shared/LoadingButton'   
import BackButton from './../../Shared/BackButton'   

 
export default {
    metaInfo() {
        return { title: `${this.$page.Order.OrderNumber} show` }
    },       
    layout: AppLayout,  
    components:{
        LoadingButton,
        BackButton,
    },
    data() {
        return {
            sending:false,
        }
    },
    methods: {
        cancel(){
            const self= this;
            self.$swal.fire({
                title: 'Are you sure?',
                text: "You will be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, cancel it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    self.$inertia.delete(self.route('admin.order.destroy', self.Order.id), {
                        preserveState: true,
                        preserveScroll: true,  
                        onStart: () => this.sending = true,
                        onFinish: () => this.sending = false,                                    
     
                    })                    
                }
            })                   
        },
    },
 
    computed: {
        StatusIcon(){
            switch (this.$page.Order.Status) {
                case 'pending':
                    // return 'fa-spinner badge badge-warning text-white p-2'
                    return 'text-yellow-600 text-bold uppercase'
                    break;
             
                case 'processing':
                    // return 'fa-circle-o-notch badge badge-info p-2'
                    return 'text-blue-600 text-bold uppercase'
                    break;
             
                case 'completed':
                    // return 'fa-check-square-o badge badge-success p-2'
                    return 'text-green-600 text-bold uppercase'

                    break;
             
                case 'decline':
                    // return 'fa-times badge badge-danger p-2'
                    return 'text-red-600 text-bold uppercase'

                    break;
             
            } 
        },
        Order(){
            return this.$page.Order;
        },
    }, 
 
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
     
}
</script>
 