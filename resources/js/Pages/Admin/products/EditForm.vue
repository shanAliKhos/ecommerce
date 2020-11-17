<template>
<form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="update">

    <p class="text-lg text-gray-800 font-medium pb-4">Product information</p>
        
    <div class="flex flex-wrap -mx-3 mb-2">
        
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="Name">Name</label>
            <input v-model="form.name" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="Name" name="Name" type="text"  placeholder="Name" aria-label="Name">
            <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>
            
        </div>  

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="SKU"># SKU</label>
            <input v-model="form.sku" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="sku" name="sku" type="text"  placeholder="SKU" aria-label="SKU">
            <p class="text-red-500 text-xs italic" v-if="$page.errors.sku">{{$page.errors.sku}}</p>                                                
        </div>  

    </div>                            

    
    <div class="flex flex-wrap -mx-3 mb-2">

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-state">
                Status
            </label>
            <div class="relative">
                <select v-model="form.is_active" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option :value="0">Disable</option>
                    <option :value="1">Active</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <p class="text-red-500 text-xs italic" v-if="$page.errors.is_active">{{$page.errors.is_active}}</p>                        
        </div>              


        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" 
                for="featured">
                Is Featured ?
            </label>
            <div class="relative">
                <select v-model="form.is_featured" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  > 
                    <option :value="0">No</option>                                
                    <option :value="1">YES</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <p class="text-red-500 text-xs italic" v-if="$page.errors.frontend_type">{{$page.errors.frontend_type}}</p>                        
        </div>
                                

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="weight">Weight
            </label>
            <input v-model.number="form.weight" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="weight" name="weight" type="number"  placeholder="Wieght" aria-label="Weight">
            <p class="text-red-500 text-xs italic" v-if="$page.errors.weight">{{$page.errors.weight}}</p>                        
        </div>                     


    </div>                

    <div class="flex flex-wrap -mx-3 mb-2">

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="quantity">Quantity</label>
            <input v-model.number="form.quantity" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="quantity" name="quantity" type="number"  placeholder="Quantity" aria-label="quantity">
            <p class="text-red-500 text-xs italic" v-if="$page.errors.quantity">{{$page.errors.quantity}}</p>                        
        </div> 

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="Regular-Price">$ RegularPrice</label>
            <input v-model.number="form.regular_price" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="regular_price" name="regular_price" type="number"  placeholder="Regular Price" aria-label="regular_price">
            <p class="text-red-500 text-xs italic" v-if="$page.errors.regular_price">{{$page.errors.regular_price}}</p>                                                
        </div> 

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="Sale-Price">$ SalePrice</label>
            <input v-model.number="form.sale_price" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="sale_price" name="sale_price" type="number"  placeholder="Sale Price" aria-label="sale_price">
            <p class="text-red-500 text-xs italic" v-if="$page.errors.sale_price">{{$page.errors.sale_price}}</p>                                                
        </div> 

    </div>              

    <div class="mt-2"> 
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="weight">Description</label>
        <textarea v-model="form.description" class="resize-none border w-full py-5 px-5 text-gray-700 bg-gray-200  rounded focus:outline-none focus:shadow-outline"
            placeholder="Product Description here ... "
        ></textarea>                     
        <p class="text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
    </div>     

    <div class="flex flex-wrap -mx-3 mb-2">

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="weight">Brands</label>
            <multiselect 
                v-model="form.brand" 
                deselect-label="Can't remove this value" 
                track-by="name"  
                label="name" 
                placeholder="Select Brand" 
                :options="Brands" 
                :searchable="false" 
                :allow-empty="false">
            </multiselect>             
            <p class="text-red-500 text-xs italic" v-if="$page.errors.brand">{{$page.errors.brand}}</p>

        </div>            

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="weight">Categories</label>
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
            <p class="text-red-500 text-xs italic" v-if="$page.errors.categories">{{$page.errors.categories}}</p>

        </div>         

    </div>         


    <div class="mt-2">
        <file-input v-model="form.image" :preview_img="form.image"  :error="$page.errors.image" class="pr-6 pb-8 w-full w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" type="file" accept="image/*" label="Photo" :preview="true"/>
    </div>

    <div class="mt-6">
        <loading-button :loading="sending" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit" as="button">
            Save Product
        </loading-button>                      
    </div>

</form>      
</template>
<script>
import Multiselect from 'vue-multiselect'
import LoadingButton from './../../Shared/LoadingButton'   
import FileInput from './../../Shared/FileInput'   

export default {
    props:['Product','Categories','Brands'],
    components:{
        Multiselect,
        LoadingButton,
        FileInput,
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
                is_active: this.Product.is_active?1:0,
                is_featured: this.Product.is_featured?1:0,
                image: this.Product.image?this.Product.image:null,
            },    
            sending:false,
        }
    },

    methods: {
        update(){
            self = this; 

            let formData = new FormData();
            formData.append("name", self.form.name || '');
            formData.append("sku", self.form.sku || '');
            formData.append("brand_id", self.form.brand?self.form.brand.id:null || '');
            formData.append("categories", JSON.stringify(self.form.categories) || '');
            formData.append("regular_price", self.form.regular_price || 0);
            formData.append("sale_price", self.form.sale_price || 0);
            formData.append("quantity", self.form.quantity || 0);
            formData.append("weight", self.form.weight || 0);
            formData.append("description", self.form.description || '' );
            formData.append("is_active", self.form.is_active || 0);
            formData.append("is_featured", self.form.is_featured || 0);
            formData.append("image", self.form.image || '');            
            formData.append('_method', 'put')
            
            self.$inertia.post(route('admin.product.update', self.Product.id), formData,{
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