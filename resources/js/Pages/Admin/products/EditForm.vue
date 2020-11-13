<template>
    <form @submit.prevent="update"> 
        <h3 class="tile-title">Product Information</h3>
        <hr>
        <div class="tile-body">
            <div class="form-group">
                <label class="control-label" for="name">Name</label>
                <input
                    :class="{'is-invalid': $page.errors.name ,'form-control':true}" 
                    type="text"
                    placeholder="Enter attribute name"
                    id="name"
                    name="name" 
                    v-model="form.name"
                />
                <div class="invalid-feedback active">
                    <i class="fa fa-exclamation-circle fa-fw"></i>  <span> {{$page.errors.name}} </span>
                </div>
            </div>
            <div class="row"> 
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label" for="sku">SKU</label>
                        <input
                            :class="{'form-control':true,'is-invalid':$page.errors.sku}"
                            type="text"
                            placeholder="Enter product sku"
                            id="sku"
                            name="sku" 
                            v-model="form.sku"
                        />
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{$page.errors.sku}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="control-label" for="brand_id">Brand</label>
                        <multiselect 
                            v-model="form.brand" 
                            deselect-label="Can't remove this value" 
                            track-by="name" 
                            :class="{'is-invalid': $page.errors.regular_price}"
                            label="name" 
                            placeholder="Select Brand" 
                            :options="Brands" 
                            :searchable="false" 
                            :allow-empty="false">
                        </multiselect>                                            
                    
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{ $page.errors.brand }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="control-label" for="categories">Categories</label>
                        <multiselect 
                            v-model="form.categories" 
                            :options="CategoriesOption" 
                            :multiple="true" 
                            :close-on-select="false" 
                            :clear-on-select="false" 
                            :preserve-search="true" 
                            placeholder="Select categories" 
                            label="name" 
                            track-by="name"  
                        > 
                        </multiselect>
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{ $page.errors.categories }}</span>
                        </div>                                            
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="form-group">
                        <label class="control-label" for="price">Price</label>
                        <input
                            :class="{'is-invalid': $page.errors.regular_price ,'form-control':true}" 
                            type="text"
                            placeholder="Enter product price"
                            id="price"
                            name="price" 
                            v-model.number="form.regular_price"

                        />
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{ $page.errors.regular_price }}</span> 
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="form-group">
                        <label class="control-label" for="special_price">Sale Price</label>
                        <input
                            :class="{'form-control':true,'is-invalid':$page.errors.sale_price}"
                            type="text"
                            placeholder="Enter product sale price"
                            id="special_price"
                            name="special_price" 
                            v-model.number="form.sale_price"
                        />
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> <span>{{ $page.errors.sale_price }}</span> 
                        </div>                                            
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="form-group">
                        <label class="control-label" for="quantity">Quantity</label>
                        <input
                            :class="{'is-invalid': $page.errors.quantity ,'form-control':true}" 
                            type="number"
                            placeholder="Enter product quantity"
                            id="quantity"
                            name="quantity" 
                            v-model.number="form.quantity"
                        />
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.quantity }}</span> 
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="form-group">
                        <label class="control-label" for="weight">Weight</label>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Enter product weight"
                            id="weight"
                            name="weight" 
                            v-model.number="form.weight"
                        />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label" for="description">Description</label>
                <textarea  v-model="form.description" name="description" id="description" rows="8" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input"
                                type="checkbox"
                                id="status"
                                name="is_active"
                                v-model="form.is_active"
                            />Status : {{(form.is_active)?"Active":"Disabled"}}
                    </label>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input"
                                type="checkbox"
                                id="featured"
                                name="featured"
                                v-model="form.is_featured"
                            />Featured 
                    </label>
                </div>
            </div>
        </div>
        <div class="tile-footer">
            <div class="row d-print-none mt-2">
                <div class="col-12 text-right">
                    <loading-button :loading="sending" class="btn btn-primary" type="submit">Update Product</loading-button>
                    <inertia-link class="btn btn-danger" :href="$route('admin.product.index')"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</inertia-link>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import Multiselect from 'vue-multiselect'
import LoadingButton from './../../Shared/LoadingButton'   

export default {
    props:['Product','Categories','Brands'],
    components:{
        Multiselect,
        LoadingButton,
    }, 
    remember: 'form',

    data () {
        return {
            sending: false,
            form: {
                name: this.Product.name,
                sku: this.Product.sku,
                brand: this.Product.brand,
                categories: this.Product.categories,
                regular_price: this.Product.regular_price,
                sale_price: this.Product.sale_price,
                quantity: this.Product.quantity,
                weight: this.Product.weight,
                description: this.Product.description,
                is_active: this.Product.is_active,
                is_featured: this.Product.is_featured,
            },    
            sending:false,
        }
    },

    methods: {
        update(){
            self = this; 
            self.$inertia.put(route('admin.product.update', self.Product.id), self.form,{
                preserveState: true,
                preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,             
            }); 
        },
    },
  
    computed: {
        CategoriesOption(){
            self = this;
            return self.Categories.filter((category,key) => {
                if(key > 0){
                    return category;
                }
            });             
        }        
    },    
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>