<template>
 <div> 
    <div class="app-title sec">
        <div>
            <h1><i class="fa fa-shopping-bag"></i> Products - {{Product.name}}</h1>
        </div>
    </div> 
    <div class="row user sec">
        
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#images" data-toggle="tab">Images</a></li>
                    <li class="nav-item"><a class="nav-link" href="#attributes" data-toggle="tab">Attributes</a></li>
                </ul>
            </div>
        </div>

        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <edit-form :Product="Product" :Categories="Categories" :Brands="Brands"></edit-form>
                    </div>
                </div>
                <div class="tab-pane" id="images">
                    <div class="tile">
                        <product-images :id="Product.id" :Images="Images" ></product-images>
                    </div>
                </div> 
                <div class="tab-pane" id="attributes">
                    <div class="tile">
                        <product-attributes></product-attributes> 
                    </div>
                </div> 
            </div>
        </div>
      
    </div>
  </div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import ProductImages from './ProductImages' 
import EditForm from './EditForm' 
import ProductAttributes from './ProductAttributes' 
 
export default {
    metaInfo: { title: 'Product edit' },
    layout: AppLayout,       
    components: { 
        ProductImages,
        EditForm,
        ProductAttributes
    },

    data () {
        return {
            Images:this.$page.Product.images,
        }
    },
  
    mounted() {
        const self = this;
        self.$root.$on('image-upload-success',() => { 
            axios.get(route('admin.product.images.index',self.Product.id)).then (function(response){
                self.Images = response.data;
            });                        
        })
    },
    beforeDestroy () {
        this.$root.$off('image-upload-success');  
    }, 

    computed: {
        Product(){
            return this.$page.Product
        },
        ProductImages(){
            return this.$page.Product.images;
        },
        Categories(){
            return this.$page.Categories
        },
        Brands(){
            return this.$page.Brands
        },
    },
 
}
</script>

