<template>

    <form-section @submitted="update">
        <template #title>
            Footer &amp; SEO
        </template>

        <template #description>
            Update your account's Footer &amp; SEO information and Option.
        </template>

        <template #form>       


            <text-input 
                id="footer_copyright_text" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.footer_copyright_text" 
                autocomplete="footer_copyright_text" 
                :error="$page.errors.footer_copyright_text"
                label='footer_copyright_text'    
                :labelRequire='true'    
                placeholder="footer_copyright_text" 
            aria-label="footer_copyright_text"/>    

            <text-input 
                id="seo_meta_title" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.seo_meta_title" 
                autocomplete="seo_meta_title" 
                :error="$page.errors.seo_meta_title"
                label='seo_meta_title'    
                :labelRequire='true'    
                placeholder="seo_meta_title" 
            aria-label="seo_meta_title"/>    
            
            <text-input 
                id="seo_meta_description" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.seo_meta_description" 
                autocomplete="seo_meta_description" 
                :error="$page.errors.seo_meta_description"
                label='seo_meta_description'    
                :labelRequire='true'    
                placeholder="seo_meta_description" 
            aria-label="seo_meta_description"/>                            

 
 
        </template>


        <template #actions>
 
            <loading-button :loading="sending" class="transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                Save
                    <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>                
            </loading-button>                      
                        
       
 
        </template>
    </form-section>   
 
</template>
<script>
import TextInput from './../../../Shared/TextInput'   
import LoadingButton from './../../../Shared/LoadingButton' 
import FormSection from './../../../Shared/FormSection'   


export default {
    components:{
        TextInput,
        LoadingButton,
        FormSection
    },
    props:{
        settings:Object,  
    },    
    data() {
        return {
            form:{
                footer_copyright_text:this.settings?this.settings.footer_copyright_text:null,
                seo_meta_title:this.settings?this.settings.seo_meta_title:null,
                seo_meta_description:this.settings?this.settings.seo_meta_description:null, 
            },
            sending:false,

        };
    },
    methods: {
        update(){
            const self=this;
            let formData = new FormData()
            formData.append("footer_copyright_text", self.form.footer_copyright_text || '')
            formData.append("seo_meta_title", self.form.seo_meta_title || '')
            formData.append("seo_meta_description", self.form.seo_meta_description || '')
            formData.append('_method', 'put')
            self.$emit('form-is-updated',formData)
            this.sending=true;

        },
    },
    mounted() {
        this.$root.$on('sending-finished',()=>this.sending=false );
    },    
}
</script>

