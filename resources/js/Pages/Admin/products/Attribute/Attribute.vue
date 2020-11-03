<template>
<div>
    <!-- <td style="width: 25%" class="text-center">{{ ProductsAttribute.value}}</td> 
    <td v-for="ProductAttributeValue in ProductsAttribute.product_attribute_values" style="width: 25%" class="text-center" >
        {{ ProductAttributeValue.attribute_values.name }}
    </td>     -->
    
    <div class="row">
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="parent">Select an Attribute <span class="m-l-5 text-danger"> *</span></label>
                        <multiselect  
                            :disabled="!ShowEdit"
                            v-model="form.Attribute" 
                            deselect-label="remove this value" 
                            track-by="name" 
                            :class="{'is-invalid': $page.errors.Attribute}"
                            label="name" 
                            placeholder="Select an Attribute" 
                            :options="Attributes" 
                            :searchable="true" 
                            :allow-empty="false">
                        </multiselect>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="form-group">
                        <label for="parent">Add Attributes To Product <span class="m-l-5 text-danger"> *</span></label>
                        <multiselect   
                            :disabled="!ShowEdit"
                            v-model="form.AttributeValues" 
                            deselect-label="remove this value" 
                            track-by="name" 
                            :class="{'is-invalid': $page.errors.AttributesValues}"
                            label="name" 
                            placeholder="Add Attributes To Product" 
                            :options="AttributesValues" 
                            :searchable="true" 
                            :multiple="true" 
                            :close-on-select="false" 
                            :clear-on-select="false"                                     
                            :allow-empty="false">
                        </multiselect>
                        <small id="attrivalueHelp" class="form-text text-muted">choose from {{form.Attribute.name?form.Attribute.name:'attribute'}}</small>
                    </div> 
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="row d-print-none mt-4">
                <div class="col-12 text-right">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" v-if="!ShowEdit" class="btn btn-sm btn-warning" @click="AttributeEdit()" title="Edit"><i class="fa fa-fw fa-lg fa-edit" ></i></button>
                        <button type="button" v-else class="btn btn-sm btn-info" @click="AttributeUpdate()" title="Update"><i class="fa fa-fw fa-lg fa-check" ></i>  </button>
                        <inertia-link :href="$route('admin.product-attributes.destroy',ProductsAttribute.id)" preserve-scroll preserve-state method="delete" type="button" as="button"  class="btn btn-sm btn-danger" title="Remove"><i class="fa fa-fw fa-lg fa-remove" ></i></inertia-link>
 
                    </div>                
                </div>
            </div>
        </div>
    </div>
 
</div> 
 
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
    props:['ProductsAttribute'],
    components:{
        Multiselect,
    },
    data() {
        return {
            ShowEdit:false,  
            form:{
                Attribute:this.ProductsAttribute.attribute,
                AttributeValues:[],
            },
        }
    }, 
    methods: {
        AttributeEdit(){
            const self= this;
            self.ShowEdit = true; 
        },         
        AttributeUpdate(){
            const self= this;
            self.$inertia.put(route('admin.product-attributes.update',self.ProductsAttribute.id), self.form, {
                preserveScroll: true,
            })            
            self.ShowEdit = false; 
        },         
    },
    computed:{ 
        Attributes(){ 
            return this.$page.Attributes;
        },
        AttributesValues(){  
            this.form.AttributeValues = []
            return this.form.Attribute.values?this.form.Attribute.values:[];
        },  
    },
    mounted() {
        self = this;
        this.ProductsAttribute.product_attribute_values.forEach(ProductsAttributeValue => {
            self.form.AttributeValues.push(ProductsAttributeValue.attribute_values);
        });         
    },

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
