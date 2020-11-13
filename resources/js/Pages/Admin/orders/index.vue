<template>
 <div> 
    <div class="app-title">
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
    </div>
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
 