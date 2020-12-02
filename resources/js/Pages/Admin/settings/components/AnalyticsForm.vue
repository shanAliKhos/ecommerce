<template> 

    <form-section @submitted="update">
        <template #title>
            Analytics
        </template>

        <template #description>
            Update your account's Analytics information .
        </template>

        <template #form>       



            <text-input 
                id="google_analytics" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.google_analytics"  
                :error="$page.errors.google_analytics"
                label='google_analytics'    
                :labelRequire='true'    
                placeholder="google_analytics" 
            aria-label="google_analytics"/>       



            <text-input 
                id="facebook_pixels" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.facebook_pixels"  
                :error="$page.errors.facebook_pixels"
                label='facebook_pixels'    
                :labelRequire='true'    
                placeholder="facebook_pixels" 
            aria-label="facebook_pixels"/>       

 
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
import TextareaInput from './../../../Shared/TextareaInput'   
import TextInput from './../../../Shared/TextInput'   

import LoadingButton from './../../../Shared/LoadingButton' 
import FormSection from './../../../Shared/FormSection'   

export default { 
    components:{
        TextareaInput,
        LoadingButton,
        FormSection,
        TextInput,
    },
    props:{
        settings:Object,
    },    
    data() {
        return {
            form:{
                google_analytics:this.settings?this.settings.google_analytics?this.google_analytics:null:null,
                facebook_pixels:this.settings?this.settings.facebook_pixels?this.facebook_pixels:null:null, 
            },
            sending:false,
        };
    },
    methods: {
        update(){
            const self=this;
            let formData = new FormData()
            formData.append("google_analytics", self.form.google_analytics || '')
            formData.append("facebook_pixels", self.form.facebook_pixels || '') 
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

