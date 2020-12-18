<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Hero Slider</a>
            </li>
        </ol>
 
        <BackButton/>
    </nav> 
    <div class="flex justify-center">
        <div class="w-full pl-0 lg:pl-2">
            <div class="leading-loose ">


                    <p class="pb-6 flex font-semibold text-xl text-gray-400">Hero Slider</p> 

                    <div class="flex flex-wrap -mx-3 mb-2">

    
                        <div class="w-full md:w-1/2 px-3  md:mb-0">
                            <form class="p-10 bg-white rounded shadow-2xl" @submit.prevent="store">
                       
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
                                
                                <div class="mt-2">
                                    <text-input  
                                        type="text" 
                                        class="w-full " 
                                        v-model="form.title" 
                                        autocomplete="title" 
                                        :error="$page.errors.title"
                                        label='Title'    
                                        :labelRequire='true'    
                                        placeholder="Title"
                                    />
                                </div>                                                              

                                <div class="mt-2">
                                    <text-input  
                                        type="text" 
                                        class="w-full " 
                                        v-model="form.button_url" 
                                        autocomplete="button_url" 
                                        :error="$page.errors.button_url"
                                        label='Button url'    
                                        :labelRequire='true'    
                                        placeholder="button url"
                                    />
                                </div>            
                                                                                
                                <div class="mt-2">
                                    <text-input  
                                        type="text" 
                                        class="w-full " 
                                        v-model="form.button_title"  
                                        :error="$page.errors.button_title"
                                        label='Button Title'    
                                        :labelRequire='true'    
                                        placeholder="Button Title"
                                    />
                                </div>    

                                <div class="flex items-center justify-end px-1 py-3 text-right  mt-4">
                                    <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                                        <span>Save</span>
                                        <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>                
                                    </loading-button>     
                                </div>           

                             </form>                                                                                   
                            
                        </div>  

                        <div class="w-full md:w-1/2 px-3 md:mb-0">
                            <div class="p-10 bg-white rounded shadow-2xl">
                                <p class="pb-6 flex font-semibold text-xl text-gray-400">Slide</p>    
                                <table class="border-collapse w-full table-auto ">
                                    <thead>
                                        <tr>
                                            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">#</th>
                                            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">IMAGE</th>
                                            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">TITLE</th>
                                            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">SKU</th> 
                                            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody> 
                                        <!-- <list-item v-for="(Product, ProductIndex) in Products" :key="ProductIndex" :ProductIndex="ProductIndex" :Product="Product" ></list-item>
                                
                                        <tr v-if="(!Products.length > 0)" class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                            <td colspan="7" class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-gray-300 block lg:table-cell relative lg:static ">
                                                <p class="py-5 lg:p-1 text-lg text-gray-300 text-semibold uppercase inline-flex items-center"> 
                                                    <svg class="h-10 w-10 mr-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                        
                                                    <span>No Record Found !  </span>
                                                </p>
                                            </td> 
                                        </tr>                                    -->

                                    </tbody>
                                </table>    
                            </div>                         
                        
                        </div>    


                    </div>                                                

 

                       
 

        
            </div>

      
        </div>    
    </div>            
</div>
</template>
<script>
import AppLayout from './../Layouts/AppLayout'   
import LoadingButton from './../../Shared/LoadingButton'   
import BackButton from './../../Shared/BackButton'   
import FileInput from './../../Shared/FileInput'   
import TextInput from './../../Shared/TextInput'   
 

export default {
    metaInfo: { title: 'Blog Create' },
    layout:AppLayout,
    components: {
        LoadingButton,
        BackButton,
        FileInput,
        TextInput,        
    },

    data() {
        return {
            form:{
                title:null,        
                image:null,        
                button_url:null,        
                button_title:null,        
            },
            sending:false,
        };
    },

    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("title", self.form.title || '');
            formData.append("image", self.form.image || '');
            formData.append("button_url", self.form.button_url || '');
            formData.append("button_title", self.form.button_title || '');

            self.$inertia.post(route('admin.slider.hero.store'), formData,{
                preserveState: true,           
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.title = null
                        this.form.body = null
                        this.form.image = null
                    }
                },             
            });
        }, 
    },   
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },            
 
};
</script>