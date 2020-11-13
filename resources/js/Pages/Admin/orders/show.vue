<template>
 <div> 
    <div class="app-title">
        <div>
            <h1><i class="fa fa-bar-chart"></i>Order</h1>
            <p>Show </p>
        </div>
        <inertia-link class="btn btn-danger pull-right Addnew" :href="route('admin.order.index')" as="button" type="button"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</inertia-link>

    </div>
    <div class="row">
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
                                    <!-- <b>Amount:</b> {{ config('settings.currency_symbol') }}{{ round(Order.grand_total, 2) }}<br> -->
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

                            <inertia-link   class="btn btn-danger"
                                v-if="Order.Status !== 'decline'"
                                as="button" type="button"
                                method="delete" preserve-scroll  
                                :href="route('admin.order.destroy', this.Order.id)" 
                                >
                                <i class="fa fa-fw fa-lg fa-remove"></i> <span>Cancell</span>
                            </inertia-link>

                        </div> 
                    </div>
                </div>                
            </div>
        </div>
    </div>

 
    
</div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
 
export default {
    layout: AppLayout, 
    metaInfo: { title: 'Order-show' },
 
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
 