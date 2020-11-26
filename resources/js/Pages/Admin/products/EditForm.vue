<template>
<form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="update">

    <p class="text-lg text-gray-800 font-medium pb-4">Product General information</p>

    <div class="flex flex-wrap -mx-3 mb-2">


        <div class="w-full md:w-1/2 px-3  md:mb-0">

            <div class="mt-2">
                <file-input 
                v-model="form.image" 
                :preview_img="form.image" 
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
                <label class=" z-20  absolute bottom-8  right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Product Attributes</label>
                <multiselect  
                    v-model="form.Attributes" 
                    deselect-label="remove this value" 
                    :multiple="true" 
                    :close-on-select="false" 
                    :clear-on-select="false"                                     
                    track-by="name" 
                    :class="{'is-invalid': $page.errors.Attributes}"
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
                <p class="text-lg text-gray-800 font-medium pb-4 md:text-right mx-5">Product Attributes Values </p>

                <div class="w-full px-3 md:mb-0 relative mt-5"   v-for="(Attribute, index) in form.Attributes" :key="index">
                    <label class=" z-20  absolute bottom-8  right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Attribute {{Attribute.name}}</label>
                    <multiselect   
                        v-model="form.AttributeValues[index]"
                        deselect-label="remove this value" 
                        :multiple="true" 
                        :close-on-select="false" 
                        :clear-on-select="false"                                     
                        track-by="name" 
                        :class="{'is-invalid': $page.errors.AttributeValues?$page.errors.AttributeValues[index]:''}"
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


    <div class="mt-6">
       

        <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
            <loading-button :loading="sending" class="transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                UPDATE PRODUCTS
                    <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>                
            </loading-button>        
        </div> 
    </div>

</form>      
</template>
<script>
import Multiselect from 'vue-multiselect'
import LoadingButton from './../../Shared/LoadingButton'   
import FileInput from './../../Shared/FileInput'   
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput'   
import SectionBorder from './../../Shared/SectionBorder'   

export default {
    props:['Product','Categories','Brands'],
    components:{
        Multiselect,
        LoadingButton,
        FileInput, 
        TextInput,
        SelectInput,        
        SectionBorder,        
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
                is_variable:(this.Product.variations.length>0)?1:0,
                Attributes:[],
                AttributeValues:[],                  
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
        },
        Attributes(){ 
            return this.$page.Attributes;
        },         
           
    },    
    mounted() {
        self = this;
        self.Product.variations.forEach(variation => {
            self.form.Attributes.push(variation.attribute);
            self.form.AttributeValues.push(variation.variant_options);
        });
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>