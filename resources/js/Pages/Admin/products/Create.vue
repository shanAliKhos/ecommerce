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
        <inertia-link 
            :href="route('admin.product.index')" 
            class="transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>            
            <span>Back</span>            
       
        </inertia-link>                   
    </nav>
    <p class="text-xl pb-6 flex items-center">Create Product</p>        
    <div class="flex justify-center lg:px-20">
        <div class="w-full  pl-0 lg:pl-2">
            <div class="leading-loose">

                <form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="store">

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
                        <file-input v-model="form.image" :error="$page.errors.image" class="pr-6 pb-8 w-full w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" type="file" accept="image/*" label="Photo" :preview="true"/>
                    </div>
              
                    <div class="mt-6">

                        <loading-button :loading="sending" class="transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                            SAVE PRODUCTS
                                <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>                
                        </loading-button>                       
                    </div>

                </form>       

            </div>
        </div>    
    </div>   
</div> 
</template>
<script>
import AppLayout from './../Layouts/AppLayout' 
import Multiselect from 'vue-multiselect'
import LoadingButton from './../../Shared/LoadingButton'   
import FileInput from './../../Shared/FileInput'   
export default { 
    layout: AppLayout,  
    metaInfo: { title: 'Product create' }, 
    components: { 
        Multiselect,
        LoadingButton,
        FileInput,
     
    },
    remember: 'form',

    data() {
        return  {              
            form:{
                name:null,
                sku:null,
                brand:null,
                categories:[],
                regular_price:'1.00',
                sale_price:'0.00',
                quantity:1,
                weight:'0.00',
                description:null,
                is_active:1,
                is_featured:0,
                image:null,
            },
            sending:false,
        }
    }, 
    methods: {
        store() {
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
            formData.append("image", self.form.image || null);
 
            self.$inertia.post(route('admin.product.store'), formData, {
                preserveState: true,
                preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                       this.form={
                                name:null,
                                sku:null,
                                brand:null,
                                categories:[],
                                regular_price:0.01,
                                sale_price:0.00,
                                quantity:1,
                                weight:0.00,
                                description:null,
                                is_active:1,
                                is_featured:0,
                                image:[]
                            };
                    }
                },             
            });  
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
 

