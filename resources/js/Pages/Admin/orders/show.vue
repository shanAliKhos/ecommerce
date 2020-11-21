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
            :href="route('admin.order.index')" 
            class="transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>            
            <span>Back</span>            
       
        </inertia-link>                
    </nav>    

    <div class="my-8 p-10 bg-white rounded shadow-xl">
        <p class="text-xl pb-6 flex items-center">
            <span>Order # / {{ Order.OrderNumber}}</span>
        </p>    
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 md:mb-0">
                <div>
                    <span>
                        <span>Placed By</span>
                        <address>
                            <strong>Name:  {{ Order.user.name }}</strong>
                            <br>
                            <strong>Email:  {{ Order.user.email }}</strong> 
                        </address>
                        <address><strong>Created_at  - </strong>{{ Order.created_at }}</address>
                        <address><strong>Updated_at  - </strong>{{ Order.updated_at }}</address>    
                    </span>                 
                </div>
            
            </div>
             
            <div class="w-full md:w-1/3 px-3 md:mb-0">
                <span>
                    <span>Ship To </span>
                    <address>
                        <strong>{{ Order.CardHolderName }}</strong>
                        <br>{{ Order.Address }}<br>{{ Order.City }}, {{ Order.Country }} {{ Order.PostalCode }}<br>{{ Order.PhoneNumber }}<br>
                    </address>    
                </span>        
            </div>
        
            <div class="w-full md:w-1/3 px-3 md:mb-0">
                <span>
                    <b>Order ID:</b> {{ Order.OrderNumber }}<br>
                    <b>Order Status:</b>  
                    <i class="fa" :class="StatusIcon" aria-hidden="true"> <span> {{Order.Status}}</span> </i> 
                    <br>
                    <b>Amount:</b> ${{ Order.GrandTotal  }}<br> 
                    <b>Payment Method:</b> {{ Order.PaymentMethod }}<br>
                    <b>Payment Status:</b> {{ Order.PaymentStatus == 1 ? 'Completed' : 'Not Completed' }}<br>
                    <b>Payment Track:</b> {{ Order.PaymentToken }}<br>
                </span>            
            </div>
        </div>
  
    <!-- <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <h3 class="tile-title"><i class="fa fa-globe"></i> {{ Order.OrderNumber }}</h3>
                <div class="tile-body">
                    <section class="invoice"> 
                        <div class="invoice-info">
                            <div class="row">
                                <div class="col-12 col-md-4 sm-4">
                                    <span>
                                        Placed By
                                        <address><strong>{{ Order.user.name }}</strong><br>Email: {{ Order.user.email }}</address>
                                    </span>
                                    <span>
                                        <address><strong>Created_at  - </strong>{{ Order.created_at }}</address>
                                        <address><strong>Updated_at  - </strong>{{ Order.updated_at }}</address>
                                        
                                    </span> 

                                </div>
                                <div class="col-12 col-md-4 sm-4">Ship To
                                    <address>
                                        <strong>{{ Order.CardHolderName }}</strong>
                                        <br>{{ Order.Address }}<br>{{ Order.City }}, {{ Order.Country }} {{ Order.PostalCode }}<br>{{ Order.PhoneNumber }}<br>
                                    </address>
                                </div>
                                <div class="col-12 col-md-4 sm-4">
                                    <span>
                                    <b>Order ID:</b> {{ Order.OrderNumber }}<br>
                                    <b>Order Status:</b>  
                                    <i class="fa" :class="StatusIcon" aria-hidden="true"> <span> {{Order.Status}}</span> </i> 
                                    <br>
                                    <b>Amount:</b> ${{ Order.GrandTotal  }}<br> 
                                    <b>Payment Method:</b> {{ Order.PaymentMethod }}<br>
                                    <b>Payment Status:</b> {{ Order.PaymentStatus == 1 ? 'Completed' : 'Not Completed' }}<br>
                                    <b>Payment Track:</b> {{ Order.PaymentToken }}<br>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Product</th>
                                        <th>SKU #</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                    </tr>
                                    </thead>
                                    <tbody> 
                                        <tr v-for="(item, index) in Order.items" :key="index">
                                            <td>{{ item.id }}</td>
                                            <td>{{ item.product.name }}</td>
                                            <td>{{ item.product.sku }}</td>
                                            <td>{{ item.Quantity }}</td>
                                            <td>${{ item.Price }}</td>
                                        </tr> 
                                    </tbody> 
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tile-footer">
                    <div class="row"> 
                        <div class="btn-group" role="group">
                            
                            <inertia-link  class="btn btn-warning"
                                v-if="Order.Status !== 'pending'"
                                as="button" type="button" 
                                :data="{ Status: 'pending' }"  
                                method="put" preserve-scroll 
                                :href="route('admin.order.update', this.Order.id)"  
                                >
                                <i class="fa fa-fw fa-lg fa-circle-o-notch" ></i><span>Pending</span>
                            </inertia-link>
                            
                            <inertia-link  class="btn btn-info"
                                v-if="Order.Status !== 'processing'"
                                as="button" type="button" 
                                :data="{ Status: 'processing' }"  
                                method="put" preserve-scroll 
                                :href="route('admin.order.update', this.Order.id)"  
                                >
                                <i class="fa fa-fw fa-lg fa-circle-o-notch" ></i><span>Process</span>
                            </inertia-link>
                            
                            <inertia-link  class="btn btn-success"
                                v-if="Order.Status !== 'completed'"
                                as="button" type="button" 
                                method="put" preserve-scroll 
                                :data="{ Status: 'completed' }"  
                                :href="route('admin.order.update', this.Order.id)" 
                                >
                                <i class="fa fa-fw fa-lg fa-check-circle"></i><span>Completed</span>
                            </inertia-link>

                            <button type="button" 
                                v-if="Order.Status !== 'decline'"
                                :disabled="sending" 
                                class="flex items-center btn btn-danger" 
                                @click="cancel"
                                >
                                <div v-if="sending" class="btn-spinner mr-2" />
                                <i v-else class="fa fa-fw fa-lg fa-remove"></i>
                                Cancel
                            </button>        

                     
                        </div> 
                    </div>
                </div>                
            </div>
        </div>
    </div>   -->
    </div> 
</div>     
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import LoadingButton from './../../Shared/LoadingButton'   
 
export default {
    layout: AppLayout, 
    metaInfo: { title: 'Order-show' },
    components:{
        LoadingButton,
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
                    return 'fa-spinner badge badge-warning text-white p-2'
                    break;
             
                case 'processing':
                    return 'fa-circle-o-notch badge badge-info p-2'
                    break;
             
                case 'completed':
                    return 'fa-check-square-o badge badge-success p-2'
                    break;
             
                case 'decline':
                    return 'fa-times badge badge-danger p-2'
                    break;
             
            } 
        },
        Order(){
            return this.$page.Order;
        },
    }, 
}
</script>
 