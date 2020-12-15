<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Edit Blog</a>
            </li>
        </ol>

        <BackButton/>           
 
    </nav>
  
    <div class="flex justify-center">
        <div class="w-full pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-xl" @submit.prevent="store">
 
                    <p class="pb-6 flex font-semibold text-xl text-gray-400">Blog Edit</p>    


                    <div class="mt-2">
    
                        <file-input 
                        v-model="form.image" 
                        :preview_img="form.image" 
                        :defualt_preview_img="form.title" 
                        :error="$page.errors.image" 
                        class="pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded " 
                        type="file" 
                        accept="image/*" 
                        label="Hero Image" 
                        :preview="true"/>
                    </div>       


                    <text-input 
                        id="Title" 
                        type="text" 
                        class="col-span-8 mt-5 mb-5"  
                        v-model="form.title"  
                        :error="$page.errors.title"
                        label='Title'    
                        :labelRequire='true'    
                    placeholder="Title"  />       

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


                        <div class="w-full md:w-1/3  px-3  md:mb-0  mt-2 relative"> 
                            <label class="z-50 absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Category</label>
                            <multiselect    
                                :class="'py-2'"
                                v-model="form.category" 
                                deselect-label="Can't remove this value" 
                                track-by="name"  
                                label="name" 
                                placeholder="Select Category" 
                                :options="Categories" 
                                :searchable="false" 
                                :allow-empty="true">
                            </multiselect>   
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.category">{{$page.errors.category}}</p>
                        </div>                          

 
                    </div>    
                                                             

                    
                    <div class="mt-2 relative">

                        <label class="absolute top-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase right-0">Body <span class="text-red-500" > *</span></label>
                        <vue-editor v-model="form.body"></vue-editor>   
                        <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.body">{{$page.errors.body}}</p>

                    </div>                    

                    <div class="flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-4">
                         <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                            <span>Save</span>
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
import LoadingButton from './../../Shared/LoadingButton'   
import BackButton from './../../Shared/BackButton'   
import TextInput from './../../Shared/TextInput'   
import FileInput from './../../Shared/FileInput' 
import SelectInput from './../../Shared/SelectInput' 
import Multiselect from 'vue-multiselect'
import { VueEditor } from "vue2-editor";

export default { 
    metaInfo() {
        return { title: `${this.form.title} Edit` }
    },         
    layout:AppLayout,
    components: {
        VueEditor,
        LoadingButton,
        BackButton,
        TextInput,
        FileInput,
        SelectInput,
        Multiselect,


    },

    remeber:'form',

    data() {
        return {
            form:{
                title:this.$page.blog.title,
                body:this.$page.blog.body,
                image:this.$page.blog.photo_url,
                is_active:this.$page.blog.is_active,
                is_featured:this.$page.blog.is_featured,            
                category:this.$page.blog.category,                    
            },
            sending:false,
        };
    },

    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("title", self.form.title || '');
            formData.append("body", self.form.body || '');
            formData.append("image", self.form.image || '');
            formData.append("is_active", self.form.is_active || '');
            formData.append("is_featured", self.form.is_featured || '');
            formData.append("category_id", self.form.category?self.form.category.id:null || '');            
            formData.append('_method', 'put');
            
            self.$inertia.post(route('admin.blog.update',self.$page.blog.id), formData,{
                preserveState: true,           
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false, 
            });
        }, 
    },         
    computed: {
        Categories(){
            return this.$page.Categories;
        },        
    },



};
</script>