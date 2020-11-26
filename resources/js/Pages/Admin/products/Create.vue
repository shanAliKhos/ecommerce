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
                    
                    <div class="general-section mb-20 ">
                        
                        <div class="flex flex-wrap -mx-3 mb-2">
                
                            <div class="w-full md:w-1/2 px-3  md:mb-0">

                                <div class="mt-2">
                                    
                                    <file-input 
                                    v-model="form.image" 
                                    :defualt_preview_img="form.name" 
                                    :error="$page.errors.image" 
                                    class="pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded" 
                                    type="file" 
                                    accept="image/*" 
                                    label="Photo" 
                                    :preview="true"/>

                                </div>                                  
                                
                            </div>  

                            <div class="w-full md:w-1/2 px-3 md:mb-0">
                            
                                <text-input 
                                    id="name" 
                                    type="text" 
                                    class="w-full " 
                                    v-model="form.name" 
                                    autocomplete="name" 
                                    :error="$page.errors.name"
                                    label='Name'    
                                    :labelRequire='true'    
                                    placeholder="Name" 
                                aria-label="Name"/>
    
                                <text-input 
                                    id="sku" 
                                    type="text"  
                                    class="w-full " 
                                    v-model="form.sku" 
                                    autocomplete="sku" 
                                    :error="$page.errors.sku"
                                    label='#SKU'    
                                    :labelRequire='true'    
                                    placeholder="SKU" 
                                aria-label="SKU"/>

                                <text-input 
                                    id="quantity" 
                                    type="text"  
                                    class="w-full " 
                                    v-model="form.quantity" 
                                    autocomplete="quantity" 
                                    :error="$page.errors.quantity"
                                    label='#Quantity'    
                                    :labelRequire='true'    
                                    placeholder="Quantity" 
                                aria-label="quantity"/>
    
                                <text-input 
                                    id="regular_price" 
                                    type="text"  
                                    class="w-full " 
                                    v-model="form.regular_price" 
                                    autocomplete="regular_price" 
                                    :error="$page.errors.regular_price"
                                    label='$ RegularPrice'    
                                    :labelRequire='true'    
                                    placeholder="RegularPrice" 
                                aria-label="regular_price"/>

                                <text-input 
                                    id="sale_price" 
                                    type="text"  
                                    class="w-full "  
                                    v-model="form.sale_price" 
                                    autocomplete="sale_price" 
                                    :error="$page.errors.sale_price"
                                    label='$ SalePrice'      
                                    placeholder="SalePrice" 
                                aria-label="sale_price"/>

                                <text-input 
                                    id="weight" 
                                    type="text"  
                                    class="w-full"  
                                    v-model="form.weight" 
                                    autocomplete="weight" 
                                    :error="$page.errors.weight"
                                    label='Weight'       
                                    placeholder="Weight" 
                                aria-label="weight"/>
                                
                            </div>      

                        </div>          
    
                        <div class="mt-2 relative"> 
                            <label class="absolute top-0 right-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Description</label>
                            <textarea v-model="form.description" class="focus:bg-white resize-none w-full px-5 py-2 text-gray-700 bg-gray-100 rounded  appearance-none shadow focus:outline-none focus:shadow-outline"
                                placeholder="Product Description here ... "
                            ></textarea>                     
                            <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
                        </div>      

                        <div class="flex flex-wrap -mx-3 mb-2">

                            <div class="w-full md:w-1/2 px-3 md:mb-0 relative mt-2">
                                <label class="z-20 absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Brands</label>
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
                                <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.brand">{{$page.errors.brand}}</p>
                            </div>            

                            <div class="w-full md:w-1/2 px-3 md:mb-0 relative mt-2">
                                <label class=" z-20  absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Categories</label>
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
                                <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.categories">{{$page.errors.categories}}</p>
                            </div>         

                        </div>      

                        <div class="flex flex-wrap -mx-3 mb-2">

                            <select-input 
                                v-model="form.is_active" 
                                class="w-full md:w-1/3 px-3  md:mb-0 "  
                                :fixedClasses="'right-3 z-20'"
                                :error="$page.errors.is_active"
                                label='Status'    
                                :labelRequire='true'>
                            <option :value="0">Disable</option>
                            <option :value="1">Active</option>                        
                            </select-input> 

                            <select-input 
                                v-model="form.is_featured" 
                                class="w-full md:w-1/3 px-3  md:mb-0 "  
                                :fixedClasses="'right-3 z-20'"
                                :error="$page.errors.is_featured"
                                label='Featured'    
                                :labelRequire='true'>
                            <option :value="0">No</option>
                            <option :value="1">YES</option>                        
                            </select-input> 


                            <select-input 
                                v-model="form.is_variable" 
                                class="w-full md:w-1/3 px-3  md:mb-0 "  
                                :fixedClasses="'right-3 z-20'"
                                :error="$page.errors.is_variable"
                                label='Type'    
                                :labelRequire='true'>
                            <option :value="0">Simple</option>
                            <option :value="1">Variable</option>                        
                            </select-input>                             
 
                        </div>                          

                        <div class="product-attributes" v-if="form.is_variable">
                            <SectionBorder/>

                            <p class="text-lg text-gray-800 font-medium pb-4">Product Attributes information</p>

                            <div class="flex flex-wrap -mx-3 mb-2" v-if="form.is_variable">

                                <div class="w-full md:w-1/2 px-3 md:mb-0 relative mt-2">
                                    <label class=" z-20  absolute bottom-8 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Product Attributes</label>
                                    <multiselect  
                                        v-model="form.Attributes" 
                                        deselect-label="remove this value" 
                                        :multiple="true" 
                                        :close-on-select="false" 
                                        :clear-on-select="false"                                     
                                        track-by="name" 
                                        label="name" 
                                        placeholder="Select an Attribute" 
                                        :options="Attributes" 
                                        :searchable="true" 
                                        :allow-empty="true">
                                    </multiselect>                                   
                                    <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.Attributes">{{$page.errors.Attributes}}</p>
                                </div>         
                                
                            </div>                 

                            <div class="flex flex-wrap -mx-3 mb-2" v-if="form.is_variable && (form.Attributes.length>0)">

                                <div class="w-full md:w-1/2">
                                </div>

                                <div class="w-full md:w-1/2">
                                    <p class="text-lg text-gray-800 font-medium pb-4 md:text-right">Product Attributes Values </p>
                                    
                                    <div class="w-full px-3 md:mb-0 relative mt-5" v-for="(Attribute, index) in form.Attributes" :key="index">
                                        <label class="z-20 absolute bottom-8 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Attribute {{Attribute.name}}</label>
                                        <multiselect   
                                            v-model="form.AttributeValues"
                                            deselect-label="remove this value" 
                                            :multiple="true" 
                                            :close-on-select="false" 
                                            :clear-on-select="false"                                     
                                            track-by="name" 
                                            label="name" 
                                            placeholder="Select an Attribute" 
                                            :options="Attribute.attribute_values" 
                                            :searchable="true" 
                                            :allow-empty="true">
                                        </multiselect>                                   
                                        <!-- <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.categories">{{$page.errors.categories}}</p> -->
                                    </div>       

                                </div>       
                            </div>                                                       

                    
                        </div>         
                        
                        <SectionBorder/>
                        
                    </div>
                    
                     
                
                    <div class="mt-5 flex items-center justify-end   text-right"> 
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
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput'   
import SectionBorder from './../../Shared/SectionBorder'   

export default { 
    layout: AppLayout,  
    metaInfo: { title: 'Product create' }, 
    components: { 
        Multiselect,
        LoadingButton,
        FileInput,
        TextInput,
        SelectInput,
        SectionBorder,
    },
    remember: 'form',

    data() {
        return  {              
            form:{
                name:null,
                sku:null,
                brand:null,
                categories:[],
                regular_price:null,
                sale_price:null,
                quantity:null,
                weight:null,
                description:null,
                is_active:1,
                is_featured:0,
                image:null,
                is_variable:0,
                Attributes:[],
                AttributeValues:[],                
            },
            sending:false,
        }
    }, 

    watch: { 
        IsVariable(val){ 
            if(!val){
                this.form.Attributes = [];
                this.form.AttributeValues = []; 
            }
        },
    },
    methods: {
        store() {
            self = this;
            let formData = new FormData();
            formData.append("name", self.form.name || '');
            formData.append("sku", self.form.sku || '');
            formData.append("brand_id", self.form.brand?self.form.brand.id:null || '');
            formData.append("categories", JSON.stringify(self.form.categories) || '');
            formData.append("is_variable", self.form.is_variable || 0);
            formData.append("Attributes", JSON.stringify(self.form.Attributes) || '');
            formData.append("AttributeValues", JSON.stringify(self.form.AttributeValues) || '');
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
                            is_variable:0,
                            weight:0.00,
                            description:null,
                            is_active:1,
                            is_featured:0,
                            image:[],
                            Attributes:[],
                            AttributeValues:[],
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
        },
        Attributes(){ 
            return this.$page.Attributes;
        },
        ProductAttributes(){
            return this.form.Attributes;
        },
        IsVariable(){ 
            return this.form.is_variable;
        },
      
    }, 
 
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
     
 
}
</script>
 

