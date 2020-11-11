<template>
<div>
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Attribute </h1>
            <p>Listing</p>
        </div>
        <inertia-link :href="$route('admin.attribute.create')" class="btn btn-primary pull-right Addnew">Add Attribute</inertia-link>
    </div>
   
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                    <div class="table-responsive">
                        <table class="table table-condensed table-striped ">
                            <thead>
                            <tr>
                                <th> Code </th>
                                <th> Name </th>
                                <th class="text-center"> Frontend Type </th>
                                <th class="text-center"> Filterable </th>
                                <th class="text-center"> Required </th>
                                <th style="width:100px; min-width:100px;" class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                            </tr>
                            </thead>
                            <tbody>
                            
                                    <tr v-for="(Attribute, AttributeIndex) in Attributes" :key="AttributeIndex">
                                        <td>{{ Attribute.code }}</td>
                                        <td>{{ Attribute.name }}</td>
                                        <td>{{ Attribute.frontend_type }}</td>
                                        <td class="text-center">
                                            <span v-if="Attribute.is_filterable" class="badge badge-success">Yes</span>
                                            <span v-else class="badge badge-danger">No</span>
                                        </td>
                                        <td class="text-center"> 
                                            <span v-if="Attribute.is_required" class="badge badge-success">Yes</span> 
                                            <span v-else class="badge badge-danger">No</span> 
                                        </td>
                                        <td class="text-center">
                                            <div class="btn-group" role="group" aria-label="Second group">
                                                <inertia-link :href="$route('admin.attribute.edit', Attribute.id)" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                                                <inertia-link :href="$route('admin.attribute.destroy', Attribute.id)" method="delete" preserve-scroll class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></inertia-link>
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
    metaInfo: { title: 'Attribute' },
    layout: AppLayout,  
    computed: {
        Attributes(){
            return this.$page.Attributes;
        }
    },
    
}
</script>
 