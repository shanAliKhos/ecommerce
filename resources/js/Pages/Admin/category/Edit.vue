<template>
<div>
    <nav class="text-sm font-semibold mb-5" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500"> 
            <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </li>
        <li class="flex items-center">
            <a href="#" class="text-gray-600">Edit Category</a>
        </li>
        </ol>
        <inertia-link 
            :href="route('admin.category.index')" 
            class="transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>            
            <span>Back</span>            
       
        </inertia-link>                
    </nav>
    <p class="text-xl pb-6 flex items-center">Edit Category</p>        
    <div class="flex justify-center">
        <div class="w-full pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="update">

                    <p class="text-lg text-gray-800 font-medium pb-4">Category information</p>
                    
                    <div class="flex flex-wrap -mx-3 mb-2">
             
                        <div class="w-full md:w-1/2 px-3  md:mb-0">

                            <div class="mt-2">
                                <file-input 
                                v-model="form.image" 
                                :defualt_preview_img="form.name" 
                                :preview_img="form.image" 
                                :error="$page.errors.image" 
                                class="pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded" 
                                type="file" 
                                accept="image/*" 
                                label="Image" 
                                :preview="true"/>
                            </div>                                  
                            
                        </div>  

                        <div class="w-full md:w-1/2 px-3  md:mb-0">
                        
                            <text-input 
                                id="name" 
                                type="text" 
                                class="w-full px-3  md:mb-0" 
                                :fixedClasses="'right-3 z-50'"

                                v-model="form.name" 
                                autocomplete="name" 
                                :error="$page.errors.name"
                                label='Name'    
                                :labelRequire='true'    
                                 placeholder="Name" 
                            aria-label="Name"/> 

                            <select-input 
                                v-model="form.is_featured" 
                                class="w-full px-3  md:mb-0  "  
                                :fixedClasses="'right-3 z-50'"
                                :error="$page.errors.is_featured"
                                label='Featured'    
                                :labelRequire='true'>
                            <option :value="0">YES</option>
                            <option :value="1">No</option>                       
                            </select-input>  

                            <select-input 
                                v-model="form.menu" 
                                class="w-full px-3  md:mb-0 "  
                                :fixedClasses="'right-3 z-50'"
                                :error="$page.errors.menu"
                                label='Menu'    
                                :labelRequire='true'>
                            <option :value="0">No</option>                                                                     
                            <option :value="1">YES</option>
                            </select-input>  

                            <select-input 
                                v-model="form.is_active" 
                                class="w-full  px-3  md:mb-0 "  
                                :fixedClasses="'right-3 z-50'"
                                :error="$page.errors.is_active"
                                label='Status'    
                                :labelRequire='true'>
                            <option :value="0">Disable</option>
                            <option :value="1">Active</option>                        
                            </select-input>      

                            <div class="w-full px-3  md:mb-0  mt-2 relative"> 
                                <label class="z-50 absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Parent Category</label>
                                <multiselect 
                                    v-model="form.parent" 
                                    deselect-label="Can't remove this value" 
                                    track-by="name"  
                                    label="name" 
                                    placeholder="Parent Category" 
                                    :options="Categories" 
                                    :searchable="false" 
                                    :allow-empty="true">
                                </multiselect>   
                                <p class="text-red-500 text-xs italic" v-if="$page.errors.parent">{{$page.errors.parent}}</p>
                            </div>                             
                                   
                        </div>      

                    </div>  

                    <div class="mt-2"> 
                        <textarea v-model="form.description" class="resize-none border w-full py-5 px-5 text-gray-700 bg-gray-200  rounded focus:outline-none focus:shadow-outline"
                            placeholder="Category Description here ... "
                        ></textarea> 
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
                    </div>
 
                    <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                            <span>Update</span>
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
import FileInput from './../../Shared/FileInput'        
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput'   
import LoadingButton from './../../Shared/LoadingButton'   
import Multiselect from 'vue-multiselect'

export default {
    layout: AppLayout, 
    components:{
        FileInput,
        TextInput,
        SelectInput,
        LoadingButton,
        Multiselect,
    },    
    metaInfo: { title: 'Category-edit' },
    remember: 'form',
    data() {
        return {
            form:{
                name:this.$page.Category.name?this.$page.Category.name:null,
                description:this.$page.Category.description?this.$page.Category.description:null,
                parent:this.$page.Category.parent?this.$page.Category.parent:null, 
                is_featured:this.$page.Category.is_featured?this.$page.Category.is_featured:0,
                menu:this.$page.Category.menu?this.$page.Category.menu:0,
                image: this.$page.Category.image?this.$page.Category.image:null,
                is_active:this.$page.Category.is_active?this.$page.Category.is_active:0,
            }, 
            imagePreview:'',
            showPreview: false,            
            sending:false,
         
        }
    },
    methods: {
        update() {
            const self = this; 
            let data = new FormData()
            data.append('name', self.form.name || '')
            data.append('description', self.form.description || '')
            data.append('parent_id', self.form.parent?self.form.parent.id:null || '')
            data.append('menu', self.form.menu || '')
            data.append('image', self.form.image || '')
            data.append('is_active', self.form.is_active || '')
            data.append('_method', 'put')

            self.$inertia.post(route('admin.category.update', this.$page.Category.id), data, {
                preserveState: true,
                preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,                
            })

                                      
        },
        onFileChange(event){
            const self = this;
            if ( /\.(jpe?g|png|gif)$/i.test( event.target.files[0].name ) ) {
                self.form.image = event.target.files[0];
                self.ShowImage();
            }else{
                self.$toasted.error('Fail ! invaild file'); 
                self.showPreview = false;
            }
            
        }, 
        ShowImage() {
            const self = this;
            let reader  = new FileReader();
            reader.addEventListener("load", function () {

                self.showPreview = true;
                self.imagePreview = reader.result;

            }.bind(self), false); 
            if( self.form.image ){

                if ( /\.(jpe?g|png|gif)$/i.test( self.form.image.name ) ) {

                    console.log("here");
               
                    reader.readAsDataURL( self.form.image );
                }
            }
        },

        ProductImage(image){
            self = this ;
            var  img = (image)?'/'+image.replace("public", "storage"):'/'+image;
            return img;      
        },  
        removeImage: function (e) {
            const self = this;
            self.showPreview = false;
            self.form.image = '';
            self.imagePreview = '';

        }, 
    },
    computed: {
        Categories(){
            return this.$page.Categories;
        }        
    },     
     
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
  
}
</script>
 