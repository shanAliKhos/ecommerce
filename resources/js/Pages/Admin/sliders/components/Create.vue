<template>
<form class="p-10 bg-white rounded shadow-2xl" @submit.prevent="store">

    <div class="mt-2">
        <file-input 
            v-model="form.image" 
            :preview_img="form.image" 
            :defualt_preview_img="form.title" 
            :error="$page.errors.image" 
            class="pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded " 
            type="file" 
            accept="image/*" 
            label="Image" 
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

    <div class="md:flex lg:justify-end">
        <div class="flex items-center justify-end px-1 py-3 text-right  mt-4" v-if="Editing">
            <inertia-link :href="route('admin.slider.hero.index')" class="flex items-center uppercase transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                <span>cancel</span>
                <svg class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>                                          
            </inertia-link>     
        </div>           
        <div class="flex items-center justify-end px-1 py-3 text-right  mt-4">
            <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                <span>{{Editing?'update':'save'}}</span>
                <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>                
            </loading-button>     
        </div>           
    </div>           

</form>  
</template>
<script> 
import LoadingButton from './../../../Shared/LoadingButton'  
import FileInput from './../../../Shared/FileInput'   
import TextInput from './../../../Shared/TextInput'  
 

export default {  
    components: {
        LoadingButton, 
        FileInput,
        TextInput,    
    },

    data() {
        return {
            form:{
                title:this.$page.hero_slide?this.$page.hero_slide.title:null,        
                image:this.$page.hero_slide?this.$page.hero_slide.photo_url:null,        
                button_url:this.$page.hero_slide?this.$page.hero_slide.button_url:null,        
                button_title:this.$page.hero_slide?this.$page.hero_slide.button_title:null,        
            },
            sending:false,
        };
    },
    remember: 'form',

    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("title", self.form.title || '');
            formData.append("image", self.form.image || '');
            formData.append("button_url", self.form.button_url || '');
            formData.append("button_title", self.form.button_title || '');
            if (self.$page.hero_slide) {
                formData.append('_method', 'put');
            }

            self.$inertia.post(self.$page.hero_slide?route('admin.slider.hero.update',self.$page.hero_slide.id):route('admin.slider.hero.store'), formData,{
                preserveState: true,           
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.title = null
                        this.form.image = null
                        this.form.button_url = null
                        this.form.button_title = null 
                    }
                },             
            });
        }, 
    },   
    computed:{
   
        Editing(){ 
            return this.$page.hero_slide?true:false;
        },        
            
    },    
       
};
</script>