<template>
    <div>
        <div class="tile">
            <h3 class="tile-title">variations</h3>
            <form @submit.prevent="store()">
                <div class="tile-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="parent">Select an Attribute <span class="m-l-5 text-danger"> *</span></label>
                                <multiselect  
                                    v-model="form.Attribute" 
                                    deselect-label="remove this value" 
                                    track-by="name" 
                                    :class="{'is-invalid': $page.errors.Attribute}"
                                    label="name" 
                                    placeholder="Select an Attribute" 
                                    :options="Attributes" 
                                    :searchable="true" 
                                    :allow-empty="true">
                                </multiselect>
                                <div class="invalid-feedback active">
                                    <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{ $page.errors.Attribute }}</span>
                                </div>                                
                            </div>
                        </div>
                        <div class="col-md-8" v-if="AttributesValues.length">
                            <div class="form-group">
                                <label for="parent">Add Attributes To Product <span class="m-l-5 text-danger"> *</span></label>
                                <multiselect   
                                    v-model="form.AttributeValues" 
                                    deselect-label="remove this value" 
                                    track-by="name" 
                                    :class="{'is-invalid': $page.errors.AttributeValues}"
                                    label="name" 
                                    placeholder="Add Attributes To Product" 
                                    :options="AttributesValues" 
                                    :searchable="true" 
                                    :multiple="true" 
                                    :close-on-select="false" 
                                    :clear-on-select="false"                                     
                                    :allow-empty="true">
                                </multiselect>
                                <div class="invalid-feedback active">
                                    <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{ $page.errors.AttributeValues }}</span>
                                </div>                                     
                                <small id="attrivalueHelp" class="form-text text-muted" v-if="!$page.errors.AttributeValues">choose from {{form.Attribute.name?form.Attribute.name:'attribute'}}</small>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="tile-footer">
                    <div class="row d-print-none mt-2">
                        <div class="col-12 text-right">
                            <loading-button :loading="sending" class="btn btn-info" type="submit">Add</loading-button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
 
        <div class="tile">
            <h3 class="tile-title">Product Attributes</h3>
            <div class="tile-body">
                <Attribute :ProductsAttribute="ProductsAttribute" v-for="(ProductsAttribute,Key) in ProductsAttributes" :key="(Key)"></Attribute>  
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Attribute from './Attribute/Attribute'
import LoadingButton from './../../Shared/LoadingButton'   


    export default {
        components:{
            Multiselect,
            Attribute,
            LoadingButton,
        },
        data() {
            return {
                form:{
                    Attribute:[],
                    AttributeValues:[],
                    ProductId:this.$page.Product?this.$page.Product.id:null,
                },
                sending: false,
            };
        },
        
        methods: {
            store(){ 
                const self = this
                self.$inertia.post(route('admin.product-attributes.store'), self.form, {
                    preserveState: true,
                    preserveScroll: true,                
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false,
                    onSuccess: () => {
                        if (Object.keys(this.$page.errors).length === 0) {
                            this.form.Attribute = null
                            this.form.AttributeValues = null              
                        }
                    },     
                                       
                })
            }, 
        },

        computed: {
            Attributes(){ 
                return this.$page.Attributes;
            },
            AttributesValues(){  
                this.form.AttributeValues = []
                return this.form.Attribute?this.form.Attribute.values:[];
            }, 
            ProductsAttributes(){   
                return this.$page.Product.product_attributes;
            }, 
        },
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>