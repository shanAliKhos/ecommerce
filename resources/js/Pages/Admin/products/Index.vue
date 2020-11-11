<template>
 <div> 
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i>  Products </h1>
            <p>Lisiting</p>
        </div>
        <inertia-link :href="$route('admin.product.create')" class="btn btn-primary pull-right">Add Product</inertia-link>
    </div>
    <!-- @include('admin.partials.flash') -->
    <div class="row">
        <div class="col-md-12"> 
            <div class="tile">
                <div class="tile-body pb-5">
                    <!-- <ItemPerPage></ItemPerPage> -->
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th> # </th>
                                <th> SKU </th>
                                <th> Name </th>
                                <th class="text-center"> Brand </th>
                                <th class="text-center"> Categories </th>
                                <th class="text-center"> Price </th>
                                <th class="text-center"> Status </th>
                                <th class="text-center"> Image </th>
                                <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                            </tr>
                            </thead>
                            <tbody> 
                                <tr v-for="(Product, ProductIndex) in Products" :key="ProductIndex">
                                    <td>{{ Product.id }}</td>
                                    <td>{{ Product.sku }}</td>
                                    <td>{{ Product.name }}</td>
                                    <td>{{ Product.brand.name }}</td>
                                    <td> 
                                        <span v-for="(Category, CategoryIndex) in Product.categories" :key="CategoryIndex" class="badge badge-info">{{ Category.name }}</span>     
                                    </td>
                                        
                                    <td>${{ (Product.sale_price)?Product.sale_price:Product.regular_price }}</td>
                                    <!-- <td>{{ config('settings.currency_symbol') }}{{ (Product->sale_price)?Product->sale_price:Product->regular_price }}</td> -->
                                    <td class="text-center">
                                        <span v-if="Product.is_active" class="badge badge-success">Active</span>
                                        <span v-else class="badge badge-danger">Not Active</span>
                                    </td>
                                    <td>
                                        <img class="img-thumbnail" :src="ProductImage(Product.image)">
                                    </td>
                                    <td class="text-center">
                                        <div class="btn-group" role="group" aria-label="Second group">
                                            <inertia-link :href="$route('admin.product.edit',Product.id)" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                                            <!-- <inertia-link :href="$route('admin.product.destroy',Product.id)" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></inertia-link> -->
                                        </div>
                                        
                                    </td>
                                </tr> 
                            </tbody>                         
                        </table>                 
                    </div> 
                    <pagination :links="Links" v-if="Links.length" class="pull-right"></pagination> 
                </div>
            </div>
        </div>
    </div>
 </div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import Pagination from './../Layouts/partials/Pagination' 
import ItemPerPage from './../Layouts/partials/ItemPerPage' 

 
export default {
    layout: AppLayout,  
    metaInfo: { title: 'Product' },
    components: {
        Pagination,ItemPerPage
    },
    methods: {
        ProductImage(image){
            self = this ;
            var  img = (image)?'/'+image.replace("public", "storage"):'/'+image;
            return img;      
        },        
    },    
    computed:{
        Products(){
            return this.$page.Products;
        },
        Links(){
            return this.$page.Links;
        },
    },

   
}
</script>