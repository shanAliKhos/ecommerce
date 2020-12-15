<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Trending Slider</a>
            </li>
        </ol>

        <BackButton/>           
 
    </nav> 
    <div class="flex justify-center">
        <div class="w-full pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-2xl" @submit.prevent="store">

                    <p class="pb-6 flex font-semibold text-xl text-gray-400">Trending Slider</p>                        

 
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
import BackButton from './../../Shared/BackButton'   
import LoadingButton from './../../Shared/LoadingButton'   

// import TextInput from './../../Shared/TextInput'   
// import FileInput from './../../Shared/FileInput' 
// import SelectInput from './../../Shared/SelectInput' 
// import Multiselect from 'vue-multiselect'

// import { VueEditor } from "vue2-editor";

export default {
    metaInfo: { title: 'Blog Create' },
    layout:AppLayout,
    components: {
        LoadingButton,
        BackButton,
        // VueEditor,
        // TextInput,
        // FileInput,
        // SelectInput,
        // Multiselect,
    },

    data() {
        return {
            form:{
                title:null,
                body:null,
                image:null,
                is_active:1,
                is_featured:0,            
                category:null,            
            },
            sending:false,
        };
    },

    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            // formData.append("title", self.form.title || '');
            // formData.append("body", self.form.body || '');
            // formData.append("image", self.form.image || '');
            // formData.append("is_active", self.form.is_active || 0);
            // formData.append("is_featured", self.form.is_featured || 0);
            // formData.append("category_id", self.form.category?self.form.category.id:null || '');
 
            // self.$inertia.post(route('admin.blog.store'), formData,{
            //     preserveState: true,           
            //     onStart: () => this.sending = true,
            //     onFinish: () => this.sending = false,
            //     onSuccess: () => {
            //         if (Object.keys(this.$page.errors).length === 0) {
            //             this.form.title = null
            //             this.form.body = null
            //             this.form.image = null
            //         }
            //     },             
            // });
        }, 
    },           
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },

};
</script>