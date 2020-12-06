<template>

    <form-section @submitted="update">
        <template #title>
            General
        </template>

        <template #description>
            Update your account's General information and Option.
        </template>

        <template #form>       
             
            <div class="col-span-6 sm:col-span-3 mt-1 block w-full">
                <file-input 
                    v-model="form.site_logo" 
                    :error="$page.errors.site_logo" 
                    class="pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded" 
                    type="file" 
                    accept="image/*" 
                    label="Site Logo" 
                    :preview="true"
                    :preview_img="form.site_logo" 
                    :defualt_preview_img="'Site Logo'" 
                />                        
            </div>            

            <div class="col-span-6 sm:col-span-3 mt-1 block w-full">
                <file-input 
                    v-model="form.site_favicon" 
                    :error="$page.errors.site_favicon" 
                    class="pr-6 pb-8 w-full w-full px-5 py-4 text-gray-700 bg-gray-100 rounded" 
                    type="file" 
                    accept="image/*" 
                    label="Site Favicon" 
                    :preview="true"
                    :preview_img="form.site_favicon" 
                    :defualt_preview_img="'Site Favicon'" 

                />                                
            </div>      

            <text-input 
                id="site_name" 
                type="text" 
                class="col-span-6 sm:col-span-3 mt-1 block w-full" 
                v-model="form.site_name" 
                autocomplete="site_name" 
                :error="$page.errors.site_name"
                label='site_name'    
                :labelRequire='true'    
                placeholder="site_name" 
            aria-label="site_name"/>       

            <text-input 
                id="site_title" 
                type="text" 
                class="col-span-6 sm:col-span-3 mt-1 block w-full" 
                v-model="form.site_title" 
                autocomplete="site_title" 
                :error="$page.errors.site_title"
                label='site_title'    
                :labelRequire='true'    
                placeholder="site_title" 
            aria-label="site_title"/>                        

            <text-input 
                id="currency_code" 
                type="text" 
                class="col-span-6 sm:col-span-3 mt-1 block w-full" 
                v-model="form.currency_code" 
                autocomplete="currency_codeite_name" 
                :error="$page.errors.currency_codename"
                label='currency_code'    
                :labelRequire='true'    
                placeholder="currency_codename" 
            aria-label="currency_code"/>            

            <text-input 
                id="currency_symbol" 
                type="text" 
                class="col-span-6 sm:col-span-3 mt-1 block w-full" 
                v-model="form.currency_symbol" 
                autocomplete="currency_symbole_name" 
                :error="$page.errors.currency_symbolme"
                label='currency_symbol'    
                :labelRequire='true'    
                placeholder="currency_symbolme" 
            aria-label="currency_symbol"/>            

            <text-input 
                id="default_email_address" 
                type="email" 
                class="col-span-6 sm:col-span-3 mt-1 block w-full py-3" 
                v-model="form.default_email_address" 
                autocomplete="default_email_address" 
                :error="$page.errors.default_email_address"
                label='default_email_address'    
                :labelRequire='true'    
                placeholder="default_email_address" 
            aria-label="default_email_address"/>            

            <text-input 
                id="phone" 
                type="number" 
                class="col-span-6 sm:col-span-3 mt-1 block w-full py-3" 
                v-model="form.phone"  
                :error="$page.errors.phone"
                label='Phone'    
                :labelRequire='true'    
            placeholder="Phone no"/>            

     
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
import FormSection from './../../../Shared/FormSection'   
import FileInput from './../../../Shared/FileInput'   
import TextInput from './../../../Shared/TextInput'   
import LoadingButton from './../../../Shared/LoadingButton' 

export default {
    components:{
        FormSection,
        FileInput,
        TextInput,
        LoadingButton,
    },
    props:{
        settings:Object,
    },    
    data() {
        return {
            form:{
                site_name:this.settings?this.settings.site_name:null,
                site_title:this.settings?this.settings.site_title:null,
                default_email_address:this.settings?this.settings.default_email_address:null,
                currency_code:this.settings?this.settings.currency_code:null,
                currency_symbol:this.settings?this.settings.currency_symbol:null,
                site_logo:this.settings?this.settings.site_logo:null,
                site_favicon:this.settings?this.settings.site_favicon:null,                 
                phone:this.settings?this.settings.phone:null,                 
            },
            sending:false,
        };
    },
    methods: {
        update(){
            const self=this;
            let formData = new FormData()
            formData.append("site_name", self.form.site_name || '')
            formData.append("site_title", self.form.site_title || '')
            formData.append("default_email_address", self.form.default_email_address || '')
            formData.append("currency_code", self.form.currency_code || '')
            formData.append("currency_symbol", self.form.currency_symbol || '')
            formData.append('site_logo', self.form.site_logo || '')
            formData.append('site_favicon', self.form.site_favicon || '')            
            formData.append('phone', self.form.phone || '')            
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
