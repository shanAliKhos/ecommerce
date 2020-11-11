<template>
<div>
    <div class="app-title">
        <div>
            <h1><i class="fa fa-briefcase"></i> Brand </h1>
            <p>Listing</p>
        </div>
        <inertia-link :href="$route('admin.brand.create') " class="btn btn-primary pull-right">Add Brand</inertia-link>
    </div>
     
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered" id="sampleTable">
                            <thead>
                            <tr>
                                <th> # </th>
                                <th> Name </th>
                                <th> Slug </th>
                                <th> img </th>
                                <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                            </tr>
                            </thead>
                            <tbody> 
                                <tr v-for="(Brand, index) in Brands" :key="index">
                                    <td>{{ Brand.id }}</td>
                                    <td>{{ Brand.name }}</td>
                                    <td>{{ Brand.slug }}</td>
                                    <td class="text-center">
                                        <img class="img-thumbnail" :src="ProductImage(Brand.logo)">
                                    </td>
                                    <td class="text-center">
                                        <div class="btn-group" role="group" aria-label="Second group">
                                            <inertia-link :href="$route('admin.brand.edit', Brand.id)" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                                            <inertia-link :href="$route('admin.brand.destroy', Brand.id)" method="delete"  preserve-scroll class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></inertia-link> 
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
         
</div>
 </template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import Pagination from './../Layouts/partials/Pagination' 
export default {
    metaInfo: { title: 'Brand' },
    layout: AppLayout,
    methods: {
        destroy(id){
            const self = this;
            self.$inertia.delete(route('admin.brand.destroy',id),{
                preserveState: true,
                preserveScroll: true
            })             
        },   
        ProductImage(image){
            self = this ;
            var  img = (image)?'/'+image.replace("public", "storage"):'/'+image;
            return img;      
        },             
    },
    computed: {
        Brands(){
            return this.$page.Brands;
        }
    },

}
 </script>
<style scoped>
.img-thumbnail{
    max-width:90px;
}
    
</style>