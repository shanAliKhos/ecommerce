<template>
<div> 
    <div class="app-title">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> Products - create </h1>
        </div>
    </div>
    <!-- @include('admin.partials.flash') -->
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <form> 
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
                                        v-model="Product.name"
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
                                                v-model="Product.sku"
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
                                                v-model="Product.brand" 
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
                                                v-model="Product.categories" 
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
                                                v-model.number="Product.regular_price"

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
                                                v-model.number="Product.sale_price"
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
                                                v-model.number="Product.quantity"
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
                                                v-model.number="Product.weight"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="description">Description</label>
                                    <textarea  v-model="Product.description" name="description" id="description" rows="8" class="form-control"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input"
                                                type="checkbox"
                                                id="status"
                                                name="is_active"
                                                v-model="Product.is_active"
                                                />Status : {{(Product.is_active)?"Active":"Disabled"}}
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
                                                v-model="Product.is_featured"
                                                />Featured 
                                        </label>
                                    </div>
                                </div>
                              
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <button type="button" class="btn btn-success" @click="Store()"><i class="fa fa-fw fa-lg fa-check-circle"></i>Save Product</button>
                                        <inertia-link class="btn btn-danger" :href="$route('admin.product.index')"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</inertia-link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import Multiselect from 'vue-multiselect'
  
export default { 
    layout: AppLayout,  
    metaInfo: { title: 'Product create' }, 
    components: { 
        Multiselect,
     
    },
    remember: 'form',

    data() {
        return  {              
            Product:{
                name:null,
                sku:null,
                brand:null,
                categories:[],
                regular_price:null,
                sale_price:0,
                quantity:null,
                weight:null,
                description:null,
                is_active:true,
                is_featured:false,
                images:[]
            },
        }
    }, 
    methods: {
        Store() {
            self = this;
            self.$inertia.post(route('admin.product.store'), self.Product);  
        },
 
    },
    computed: {
        CategoriesOption(){ 
            return this.$page.Categories.filter((category,key) => {
                if(key > 0){
                    return category;
                }
            });             
        }, 
        Brands(){
            return this.$page.Brands
        }
    }, 
 
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

