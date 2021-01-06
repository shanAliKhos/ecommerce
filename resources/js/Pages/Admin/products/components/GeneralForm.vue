<template>
<div class="flex justify-center">
    <div class="w-full pl-0 lg:pl-2">
        <div class="leading-loose">
            <form   @submit.prevent="store">

                <p class="pb-6 flex font-semibold text-xl text-gray-400">Product Create</p>     

                <div class="flex flex-wrap  mb-2">
                
                    <div class="w-full md:w-1/3 px-2  md:mb-0">

                        <file-input 
                            v-model="form.image" 
                            :preview_img="form.image" 
                            :defualt_preview_img="form.name" 
                            :error="$page.errors.image" 
                            class="pr-6 pb-8 w-full px-5 py-2 text-gray-700 rounded" 
                            type="file" 
                            accept="image/*" 
                            label="Photo" 
                        :preview="true"/>
                        
                        <transition-group name="slide-fade">
  
                            <div class="w-full md:mb-0 relative mt-5" v-if="form.is_variable" :key="'add-attribute-multiselect'"> 
                                <label class="z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="weight">Product Attributes</label>
                                <multiselect  
                                    v-model="form.attributes" 
                                    deselect-label="remove this value" 
                                    :multiple="true" 
                                    class="mb-10"
                                    :close-on-select="false" 
                                    :clear-on-select="false"                                     
                                    track-by="name"  
                                    label="name" 
                                    placeholder="Select an Attribute" 
                                    :options="Attributes" 
                                    :searchable="true" 
                                    :allow-empty="true">
                                </multiselect>                                   
                                <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.attributes">{{$page.errors.attributes}}</p>             
                            </div>     

                            <div  v-if="form.is_variable " :key="'add-attribute-section-opts'">  
                                <transition-group name="slide-fade"> 
                                <div class="w-full md:mb-0 relative mt-2" v-for="(attribute, index) in form.attributes" :key="'attribute_value'+index">
                                    <label class="z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="weight">Attribute {{attribute.name}}</label>
                                    <multiselect   
                                        v-model="attribute.product_attribute_values"
                                        deselect-label="remove this value" 
                                        :multiple="true" 
                                        :close-on-select="false" 
                                        :clear-on-select="false"                                     
                                        track-by="name"  
                                        label="name" 
                                        :placeholder="`select ${attribute.name}`" 
                                        :options="attribute.attribute_values" 
                                        :searchable="true" 
                                        :allow-empty="false">
                                    </multiselect>     
                                </div>                 
                                </transition-group>        
                            </div>

                            <SectionBorder v-if="form.is_variable" :key="'varitation-border-bottom'" />

                             
                        </transition-group>  
                                                     
                        <div class="w-full  md:mb-0 relative mt-2">
                            <label class="z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="weight">Brands</label>
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
                
                        <div class="w-full md:mb-0 relative mt-2"> 
                            <label class="z-20 absolute top-0 right-3 text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="Categories">Categories</label>
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

                    <div class="w-full md:w-2/3 px-2 md:mb-0">

                        <text-input 
                            id="name" 
                            type="text" 
                            class="w-full mb-2" 
                            v-model="form.name" 
                            autocomplete="name" 
                            :error="$page.errors.name"
                            label='Name'    
                            :labelRequire='true'    
                            placeholder="Name" 
                        aria-label="Name"/>
                        
                        <div class="w-full flex flex-wrap item-center md:justify-end py-2 px-2 ">
                    
                            <div class=" w-full md:w-1/3">
                                <label for="is_active" class="flex items-center cursor-pointer">
                                    <div :class="{'text-green-400':form.is_active,'text-red-500':!form.is_active}" class="px-2 font-semibold ">Status</div>
                                    <div class="relative">
                                        <input id="is_active" type="checkbox" class="hidden" v-model="form.is_active" />
                                        <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                                        <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                    </div>
                                </label>
                                <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_active">{{$page.errors.is_active}}</p>                 
                            </div>        

                            <div class=" w-full md:w-1/3">
                                <label for="is_featured" class="flex items-center cursor-pointer">
                                    <div :class="{'text-green-400':form.is_featured,'text-red-500':!form.is_featured}" class=" px-2 font-semibold ">Featured</div>
                                    <div class="relative">
                                        <input id="is_featured" type="checkbox" class="hidden" v-model="form.is_featured" />
                                        <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                                        <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                    </div>
                                </label> 
                                <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_featured">{{$page.errors.is_featured}}</p>                 
                            </div>        

                            <div class="w-full md:w-1/3">
                                <label for="is_variable" class="flex items-center cursor-pointer">
                                    <div :class="{'text-green-400':form.is_variable,'text-red-500':!form.is_variable}" class=" px-2 font-semibold ">Variations</div>
                                    <div class="relative">
                                        <input id="is_variable" type="checkbox" class="hidden" v-model="form.is_variable" />
                                        <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                                        <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                    </div>
                                </label> 
                                <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_variable">{{$page.errors.is_variable}}</p>                 
                            </div>        

                        </div>
 
                        <SectionBorder/>

                        <div class="mt-5 mb-5 px-2 relative h-full"> 
                            <label class="absolute top-0 right-3  text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="weight">Description</label>
                            <vue-editor v-model="form.description" class="transition duration-700 ease-in-out w-full   bg-gray-50 rounded-lg shadow-sm hover:bg-white hover:shadow-2xl focus:bg-white focus:shadow-2xl focus:outline-none focus:border-purple-600 border-2 border-gray-200 z-20 overflow-auto h-64"></vue-editor>        
                            <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
                        </div>    
                        
                        <SectionBorder/>
   
                    </div>    

                </div>      


                <div class="mt-5 lg:flex lg:item-center lg:justify-around fixes bottom-0"> 

                    <div v-if="$page.Product" class="w-full md:w-1/2 flex items-center lg:justify-start  sm:px-6 mt-2">
                        <inertia-link :href="route('shop.show',$page.Product.slug)" class="w-full flex items-center justify-center transition duration-700 ease-in-out bg-yellow-400 hover:bg-yellow-600 focus:outline-none rounded-lg px-2 py-2 text-white font-semibold shadow inline-flex mr-2" type="button" as="button">
                            SHOW PRODUCTS
                            <svg class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>                 
                        </inertia-link >        
                    </div>                 

                    <div class="w-full md:w-1/2 flex items-center lg:justify-end  sm:px-6 mt-2">
                        <loading-button :loading="sending" class="uppercase w-full flex items-center justify-center transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-2 py-2 text-white font-semibold shadow inline-flex  mr-2" type="submit" as="button">
                            {{ $page.Product?'update':'save'}}
                            <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>                
                        </loading-button>        
                    </div> 
                    
                </div> 

                <SectionBorder/>
                 
                <div class="product-variations" v-if="form.is_variable && ProductSkus.length>0">   
                    <p class="text-lg text-gray-800 font-medium pb-4">Product Possible variations</p>

                    <div class="flex flex-wrap">
                        <div class="py-2 px-2 w-full bg-gray-100" v-for="(ProductSku, ProductSkuIndex) in ProductSkus" :key="ProductSkuIndex">
                            <div class="bg-white text-blue-500">{{ProductSku.sku}}</div>


                            <div class="flex flex-wrap  mb-2">
                
                                <div class="w-full md:w-1/2 " v-for="(skus_option, skus_option_index) in ProductSku.skus_options" :key="skus_option_index">
                                    <p>{{skus_option.variant_option.attributes_option.attribute.name}} - {{skus_option.variant_option.attributes_option.name}}</p>
                                </div>

                                <div class="w-full md:w-1/2 px-2 md:mb-0 relative">

                                    <text-input  
                                        type="text"  
                                        class="w-full" 
                                        v-model="ProductSku.qty" 
                                        autocomplete="sku Quantity" 
                                        :error="$page.errors.sku_qty"
                                        label='#SKU Quantity'    
                                        :labelRequire='true'    
                                        placeholder="Sku Quantity" 
                                    aria-label="sku quantity"/>

                                    <text-input   
                                        type="text"  
                                        class="w-full" 
                                        v-model="ProductSku.price" 
                                        autocomplete="price" 
                                        :error="$page.errors.sku_price"
                                        label='$ Price'    
                                        :labelRequire='true'    
                                        placeholder="Sku Price" 
                                    aria-label="price"/>

                                </div>
                            </div>
                
                        </div>
                    </div> 
                </div> 


                <SectionBorder/>                      

            </form>    
        </div>
    </div>    
</div>     
</template>
<script>
import Multiselect from 'vue-multiselect'
import { VueEditor } from "vue2-editor";
import LoadingButton from './../../../Shared/LoadingButton'   
import FileInput from './../../../Shared/FileInput'   
import TextInput from './../../../Shared/TextInput'     
import SelectInput from './../../../Shared/SelectInput'   
import SectionBorder from './../../../Shared/SectionBorder'   

export default { 
    components:{
        Multiselect,
        LoadingButton,
        FileInput,  
        TextInput,
        SelectInput,        
        SectionBorder,        
        VueEditor,        
    }, 


    remember: 'form',
    data () {
        return {
            sending: false,
            form: {
                name: this.$page.Product?this.$page.Product.name:null,
                sku: this.$page.Product?this.$page.Product.sku:null,
                brand: this.$page.Product?this.$page.Product.brand:null,
                categories: this.$page.Product?this.$page.Product.categories:[],
                regular_price: this.$page.Product?this.$page.Product.regular_price:null,
                sale_price: this.$page.Product?this.$page.Product.sale_price:null,
                quantity: this.$page.Product?this.$page.Product.quantity:null,
                weight: this.$page.Product?this.$page.Product.weight:null,
                description: this.$page.Product?this.$page.Product.description:null,
                is_active: this.$page.Product?this.$page.Product.is_active:true,
                is_featured: this.$page.Product?this.$page.Product.is_featured:false,
                image: this.$page.Product?this.$page.Product.mainphoto_url:null,
                is_variable:this.$page.Product?this.$page.Product.variations.length>0?true:false:false,
                attributes:this.$page.Product?this.$page.Product.variations:null,                
            },    
            sending:false,
        }
    },
  
    methods: {
        store(){
            self = this; 
            let formData = new FormData()
            formData.append("name", self.form.name || '')
            formData.append("sku", self.form.sku || '')
            formData.append("brand_id", self.form.brand?self.form.brand.id:null || '')
            formData.append("categories", JSON.stringify(self.form.categories) || '')
            formData.append("is_variable", self.form.is_variable?1:0 || 0)
            formData.append("Attributes", JSON.stringify(self.form.attributes) || '')
            formData.append("regular_price", self.form.regular_price || 0)
            formData.append("sale_price", self.form.sale_price || 0)
            formData.append("quantity", self.form.quantity || 0)
            formData.append("weight", self.form.weight || 0)
            formData.append("description", self.form.description || '' )
            formData.append("is_active", self.form.is_active?1:0 || 0)
            formData.append("is_featured", self.form.is_featured?1:0 || 0)
            formData.append("image", self.form.image || '')
            
            if(self.$page.Product){
                formData.append('_method', 'put')
            }     

            
            self.$inertia.post(self.$page.Product?route('admin.product.update', self.$page.Product.id):route('admin.product.store'), formData,{
                preserveState: true,
                // preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,   
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0 && !self.$page.Product) {
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
                            attributes:[], 
                        };
                    }
                },                           
            })
        },
    },
  
    computed: {
        CategoriesOption(){
            self = this;
            return self.$page.categories; 
        },  
        Brands(){
            return this.$page.brands
        },        
     
        Attributes(){ 
            return this.$page.attributes;
        }, 
        ProductSkus(){ 
            return this.$page.Product?this.$page.Product.skus:[];
        }, 
        ProductStatus(){ 
            return this.form.is_active?'Active':'Deactive';
        }, 
        ProductIsFeatured(){ 
            return this.form.is_featured?'Featured':'Not Featured';
        }, 
        
    },
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },    

}
</script>

<style scoped>

    .slide-fade-enter-active {  
        transition: all 0.5s ease-in-out;
    }
    .slide-fade-leave-active {  
        transition: all 0.2s ease-in-out;
    } 
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateY(100px); 
        opacity: 0;
    }   
</style>