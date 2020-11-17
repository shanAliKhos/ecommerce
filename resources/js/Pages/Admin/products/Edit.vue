<template>
 <div> 
    <nav class="text-sm font-semibold mb-5" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Create Product</a>
            </li>
        </ol>
    </nav>
    <p class="text-xl pb-6 flex items-center">Create Product</p>        
    <div class="flex justify-center lg:px-20">
        <div class="w-full  pl-0 lg:pl-2">
            <div class="leading-loose">

                <edit-form :Product="Product" :Categories="Categories" :Brands="Brands"></edit-form>

            </div>
        </div>    
    </div>               
        
        <!-- <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#images" data-toggle="tab">Images</a></li>
                    <li class="nav-item"><a class="nav-link" href="#attributes" data-toggle="tab">Attributes</a></li>
                </ul>
            </div>
        </div> -->

        <!-- <div class="col-md-9">
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
        </div> -->
 
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

