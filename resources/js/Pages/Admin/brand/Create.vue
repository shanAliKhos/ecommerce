<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Create Brand</a>
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
    <p class="text-xl pb-6 flex items-center">Create Brand</p>        
    <div class="flex justify-center">
        <div class="w-full lg:w-1/2 pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form @submit.prevent="store"  class="p-10 bg-white rounded shadow-xl">
                    <p class="text-lg text-gray-800 font-medium pb-4">Brand information</p>


                    <div class="">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="Name">Name</label>
                        <input v-model="form.name" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text"  placeholder="Name" aria-label="Name">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>
                    </div>

                    <div class="mt-2">
                        <file-input 
                            v-model="form.logo" 
                            :error="$page.errors.logo" 
                            class="pr-6 pb-8 w-full w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" 
                            type="file" 
                            accept="image/*" 
                            label="MainImage" 
                            :preview="true"/>
                    </div>
                    
              
                    <div class="mt-6">

                        <loading-button :loading="sending" class="transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                            Save
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

export default {
    metaInfo: { title: 'Brand-create' },

    layout: AppLayout, 
    remember: 'form',
    components:{
        FileInput,
        LoadingButton,
    },
    data() {
        return {
            form: {
                name: null, 
                logo: null,
            },  
            sending:false,  
        }
    },

    methods: {
        store() {
  
            const self = this;
            let formData = new FormData();
            formData.append("name", self.form.name || ''); 
            formData.append("logo", self.form.logo || '');
            this.$inertia.post(this.route('admin.brand.store'), formData,{
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.name = null
                        this.form.logo = null
                    }
                },
                
            });
        },
  
    },  
 

}
 </script>
<style scoped>
img {
  width: 130%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}     
</style>