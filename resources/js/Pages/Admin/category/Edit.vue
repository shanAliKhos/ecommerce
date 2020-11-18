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
        <div class="w-full lg:w-1/2 pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="update">

                    <p class="text-lg text-gray-800 font-medium pb-4">Category information</p>
                    
                    <div class="">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="cus_name">Name</label>
                        <input v-model="form.name" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text"  placeholder="Name" aria-label="Name">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>
                    </div>

                    <div class="mt-2"> 
                        <textarea v-model="form.description" class="resize-none border w-full py-5 px-5 text-gray-700 bg-gray-200  rounded focus:outline-none focus:shadow-outline"
                            placeholder="Category Description here ... "
                        ></textarea> 
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
                    </div>

                    <div class="mt-2"> 
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
                    
                    <div class="mt-2"> 
                        <file-input v-model="form.image" :preview_img="form.image" :error="$page.errors.image" class="pr-6 pb-8 w-full w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" type="file" accept="image/*" label="Photo" :preview="true"/>
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.parent">{{$page.errors.parent}}</p>
                    </div>
                    
                    <div class="flex flex-wrap -mx-3 mb-2">
    
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" 
                                for="featured">
                                Is Featured ?
                            </label>
                            <div class="relative">
                                <select v-model="form.is_featured" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  > 
                                    <option :value="true" >YES</option>
                                    <option :value="false">No</option>                                
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.frontend_type">{{$page.errors.frontend_type}}</p>                        
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="MENU">
                                MENU ?
                            </label>
                            <div class="relative">
                                <select v-model="form.menu" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                    <option :value="true">YES</option>
                                    <option :value="false">No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.menu">{{$page.errors.menu}}</p>                        
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-state">
                                Status
                            </label>
                            <div class="relative">
                                <select v-model="form.is_active" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option :value="false">Disable</option>
                                    <option :value="true">Active</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.is_active">{{$page.errors.is_active}}</p>                        
                        </div> 

                    </div>                     
              
                    <div class="mt-6">
 
                        <loading-button :loading="sending" class="transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                            Update
                                <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>                
                        </loading-button>                                                
                    </div>

                </form>

                <!-- <form @submit.prevent="store()">
                    <div class="tile-body">
                          
 
                        <div class="form-group">
                            <file-input v-model="form.image" :error="$page.errors.image" class="pr-6 pb-8 w-full" type="file" accept="image/*" label="Photo" :preview="true"/>
                        </div>
                    </div>
                    <div class="tile-footer">
                        <loading-button :loading="sending" class="btn btn-primary" type="submit">Save Category</loading-button>

                        <inertia-link class="btn btn-secondary" :href="$route('admin.category.index') "><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</inertia-link>
                    </div>
                </form> -->

                
            </div>
        </div>    
    </div>    
</div>
</template> 
<script>
import AppLayout from './../Layouts/AppLayout'   
import LoadingButton from './../../Shared/LoadingButton'   
import Multiselect from 'vue-multiselect'
import FileInput from './../../Shared/FileInput'        

export default {
    layout: AppLayout, 
    components:{
        LoadingButton,
        Multiselect,
        FileInput,
    },    
    metaInfo: { title: 'Category-edit' },
    remember: 'form',
    data() {
        return {
            form:{
                name:this.$page.Category.name?this.$page.Category.name:null,
                description:this.$page.Category.description?this.$page.Category.description:null,
                parent:this.$page.Category.parent?this.$page.Category.parent:null, 
                is_featured:this.$page.Category.is_featured?this.$page.Category.is_featured:false,
                menu:this.$page.Category.menu?this.$page.Category.menu:false,
                image: this.$page.Category.image?this.$page.Category.image:null,
                is_active:this.$page.Category.is_active?this.$page.Category.is_active:false,
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
}
</script>
 