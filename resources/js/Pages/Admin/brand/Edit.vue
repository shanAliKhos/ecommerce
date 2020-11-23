<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Edit Brand</a>
            </li>
        </ol>
        <inertia-link 
            :href="route('admin.brand.index')" 
            class="transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>            
            <span>Back</span>            
       
        </inertia-link>                
 
    </nav>
    <p class="text-xl pb-6 flex items-center">Edit Brand</p>        
    <div class="flex justify-center">
        <div class="w-full   pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form @submit.prevent="update"  class="p-10 bg-white rounded shadow-xl">
                    <p class="text-lg text-gray-800 font-medium pb-4">Brand information</p>

        
                    <div class="flex flex-wrap -mx-3 mb-2">
             
                        <div class="w-full md:w-1/2 px-3  md:mb-0">

                            <div class="mt-2">
                                <file-input 
                                    v-model="form.logo" 
                                    :preview_img="form.logo" 
                                    :defualt_preview_img="form.name"  
                                    :error="$page.errors.logo" 
                                    class="pr-6 pb-8 w-full w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" 
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
 
                        </div>      

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
import LoadingButton from './../../Shared/LoadingButton'   
import TextInput from './../../Shared/TextInput'   

export default {
    metaInfo: { title: 'Brand-edit' },
    components:{
        LoadingButton,
        FileInput,
        TextInput
    },
    layout: AppLayout, 
    remember: 'form',
    data() {
        return {
            form: {
                name: this.$page.brand.name,
                slug: this.$page.brand.slug,
                logo: this.$page.brand.logo,
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
            data.append('name', this.form.name || '')
            data.append('slug', this.form.slug || '')
            data.append('logo', this.form.logo || '')
            data.append('_method', 'put')

            this.$inertia.post(route('admin.brand.update', this.$page.brand.id), data, {
                preserveState: true,
                preserveScroll: true,             
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,           
            })

                                      
        },
        onFileChange(event){
            const self = this;
            if ( /\.(jpe?g|png|gif)$/i.test( event.target.files[0].name ) ) {
                self.form.logo = event.target.files[0];
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
            if( self.form.logo ){

                if ( /\.(jpe?g|png|gif)$/i.test( self.form.logo.name ) ) {
 
                    reader.readAsDataURL( self.form.logo );
                }
            }
        },
  
        removeImage: function (e) {
            const self = this;
            self.showPreview = false;
            self.form.logo = '';
            self.imagePreview = '';

        }, 

    },  

 
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
     
 

}
 </script>
<style scoped>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}     
</style>