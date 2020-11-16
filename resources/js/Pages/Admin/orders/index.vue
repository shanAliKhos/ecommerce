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
         
    </nav>    

    <div class="my-8 p-10 bg-white rounded shadow-xl">
        <p class="text-xl pb-6 flex items-center">
            Order Listing
        </p>    
        <table class="border-collapse w-full table-auto">
            <thead>
                <tr>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ORDER NUMBER</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">PLACED BY</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">TOTAL PRICE</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ITEAMS QTY</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">PAYMENT STATUS</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ORDER STATUS</th>
                    <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Order, OrderIndex) in Orders" :key="OrderIndex" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static ">
                        <p class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ORDER NUMBER</p>
                        <p class="py-5  lg:p-1 ">{{ Order.OrderNumber }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">PLACED BY</span>
                         <p class="py-5  lg:p-1 ">{{ Order.user.name }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">TOTAL PRICE</span>
                         <p class="py-5  lg:p-1 ">{{ Order.GrandTotal }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ITEAMS QTY</span>
                         <p class="py-5  lg:p-1 ">{{  Order.ItemCount }}</p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">PAYMENT STATUS</span>
                        <p class="py-5  lg:p-1 ">
                            <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold" v-if="Order.PaymentMethod">{{Order.PaymentMethod}}</span>
                            <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold" v-if="Order.PaymentStatus">Completed</span>
                            <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold" v-else>Not</span>
                        </p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ORDER STATUS</span>
                            <p class="py-5  lg:p-1 ">
                                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold" :class="StatusColor(Order.Status)">{{Order.Status}}</span> 
                            </p>
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTIONS</span>
                        <div class="inline-flex py-5  lg:p-1 ">

                            <inertia-link :href="route('admin.order.show', Order.id )" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded inline-flex items-center mr-3">                                        
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




    <!-- <div class="app-title">
        <div>
            <h1><i class="fa fa-bar-chart"></i> Orders </h1>
            <p> Listing </p>
        </div>
        <inertia-link class="btn btn-danger pull-right Addnew" :href="$route('admin.dashboard')" as="button" type="button"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</inertia-link>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body table-responsive">
                    <table class="table table-condensed table-striped">
                        <thead>
                        <tr>
                            <th> Order Number </th>
                            <th> Placed By </th>
                            <th class="text-center"> Total Amount </th>
                            <th class="text-center"> Items Qty </th>
                            <th class="text-center"> Payment </th>
                            <th class="text-center"> Status </th>
                            <th class="text-center"> Created At </th>
                            <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                        </tr>
                        </thead>
                        <tbody>
                      
                            <tr v-for="(Order, OrderIndex) in Orders" :key="OrderIndex">
                                <td>{{ Order.OrderNumber }}</td>
                                <td>{{ Order.user.name }}</td>
                                <td class="text-center"> {{ Order.GrandTotal }}</td>
                                <td class="text-center">{{ Order.ItemCount }}</td>
                                <td class="text-center">

                                    <span v-if="Order.PaymentMethod" class="badge badge-success">{{Order.PaymentMethod }}</span>
                                    <span v-if="Order.PaymentStatus" class="badge badge-success">Completed</span>
                                    <span v-else class="badge badge-danger">Not Completed</span>
                                </td>
                                <td class="text-center">
                                    <span class="badge" :class="StatusColor(Order.Status)">{{ Order.Status }}</span>
                                </td>
                                <td class="text-center">
                                    <span>{{ Order.created_at }}</span>
                                </td>
                                <td class="text-center">
                                    <div class="btn-group" role="group" aria-label="Second group">
                                        <inertia-link :href="$route('admin.order.show', Order.id )" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                                    </div>
                                </td>
                            </tr>
                       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div> -->
</div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
 
export default {
    metaInfo: { title: 'Order' }, 
    layout: AppLayout, 
    methods: {
        StatusColor(Status){
            switch (Status) {
                case 'pending':
                    return 'badge-warning'
                    break;
                
                case 'processing':
                    return 'badge-info'
                    break;
                
                case 'completed':
                    return 'badge-success'
                    break;
                
                case 'decline':
                    return 'badge-danger'
                    break; 
            } 
        }    
    },    
    computed: {
        Orders(){
            return this.$page.Orders.data;
        },
    },
}
</script>
 