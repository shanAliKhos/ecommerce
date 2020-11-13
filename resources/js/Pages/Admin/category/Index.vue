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

                                <category-item v-for="(Category, CategoryIndex) in Categories" :key="CategoryIndex" v-if="(CategoryIndex > 0)" :CategoryIndex="CategoryIndex" :Category="Category"></category-item>
                            
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
import CategoryItem from './components/CategoryItem'   
export default {
    layout: AppLayout, 
    metaInfo: { title: 'Category' },
    components:{
        CategoryItem,
    },
    computed: {
        Categories(){
            return this.$page.Categories;
        }
    },
}
</script>
 