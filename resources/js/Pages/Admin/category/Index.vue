<template>
<div>
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Category </h1>
            <p>Listing</p>
        </div>
        <inertia-link :href="$route('admin.category.create') " class="btn btn-primary pull-right Addnew">Add Category</inertia-link>
    </div>
 
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <div class="table-responsive">
                        <table class="table table-condensed table-striped">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> Name </th>
                                    <th> Slug </th>
                                    <!-- <th class="text-center"> Parent </th> -->
                                    <th class="text-center"> Featured </th>
                                    <th class="text-center"> Menu </th>
                                    <!-- <th class="text-center"> Order </th> -->
                                    <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                                </tr>
                            </thead>
                            <tbody>  
                                <tr v-for="(Category, CategoryIndex) in Categories" :key="CategoryIndex" v-if="(CategoryIndex > 0)">
                                    <td>{{ CategoryIndex }}</td>
                                    <td>{{ Category.name }}</td>
                                    <td>{{ Category.slug }}</td>
                                    <!-- <td>{{ Category.parent }}</td> -->
                                    <td class="text-center"> 
                                        <span v-if="Category.is_featured" class="badge badge-success">Yes</span>
                                        <span v-else class="badge badge-danger">No</span>
                                    </td>
                                    <td class="text-center">
                                        <span v-if="Category.menu" class="badge badge-success">Yes</span>
                                        <span v-else class="badge badge-danger">No</span>
                                    </td>
                                    <!-- <td class="text-center">
                                            Category.order 
                                    </td> -->
                                    <td class="text-center">
                                        <div class="btn-group" role="group" aria-label="Second group">
                                            <inertia-link :href="$route('admin.category.edit', Category.id)" preserve-scroll class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                                            <inertia-link :href="$route('admin.category.destroy', Category.id)" method="delete"  preserve-scroll class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></inertia-link>
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
export default {
    layout: AppLayout, 
    metaInfo: { title: 'Category' },
    computed: {
        Categories(){
            return this.$page.Categories;
        }
    },
}
</script>
 