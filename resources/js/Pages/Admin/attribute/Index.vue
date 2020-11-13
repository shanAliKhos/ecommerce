<template>
<div>
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Attribute </h1>
            <p>Listing</p>
        </div>
        <inertia-link :href="route('admin.attribute.create')" class="btn btn-primary pull-right Addnew">Add Attribute</inertia-link>
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
                                <attribute-item v-for="(Attribute, AttributeIndex) in Attributes" :key="AttributeIndex" :Attribute='Attribute' ></attribute-item>
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
import AttributeItem from './components/AttributeItem'   

export default {
    metaInfo: { title: 'Attribute' },
    layout: AppLayout,  
    components:{ 
        AttributeItem,
    },

    computed: {
        Attributes(){
            return this.$page.Attributes;
        }
    },
    
}
</script>
 