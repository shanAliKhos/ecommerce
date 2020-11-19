<template>

    <form-section @submitted="update">
        <template #title>
            Social Links
        </template>

        <template #description>
            Update your account's Social Links information .
        </template>

        <template #form>       


            <text-input 
                id="social_facebook" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.social_facebook" 
                autocomplete="social_facebook" 
                :error="$page.errors.social_facebook"
                label='social_facebook'    
                :labelRequire='true'    
                placeholder="social_facebook" 
            aria-label="social_facebook"/>                            


            <text-input 
                id="social_twitter" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.social_twitter" 
                autocomplete="social_twitter" 
                :error="$page.errors.social_twitter"
                label='social_twitter'    
                :labelRequire='true'    
                placeholder="social_twitter" 
            aria-label="social_twitter"/>                            


            <text-input 
                id="social_instagram" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.social_instagram" 
                autocomplete="social_instagram" 
                :error="$page.errors.social_instagram"
                label='social_instagram'    
                :labelRequire='true'    
                placeholder="social_instagram" 
            aria-label="social_instagram"/>                            


            <text-input 
                id="social_linkedin" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.social_linkedin" 
                autocomplete="social_linkedin" 
                :error="$page.errors.social_linkedin"
                label='social_linkedin'    
                :labelRequire='true'    
                placeholder="social_linkedin" 
            aria-label="social_linkedin"/>                            


 
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
        FormSection,
    },
    props:{
        settings:Object, 
    },    
    data() {
        return {
            form:{
                social_facebook:this.settings.social_facebook,
                social_twitter:this.settings.social_twitter,
                social_instagram:this.settings.social_instagram,
                social_linkedin:this.settings.social_linkedin, 
            },
            sending:false,

        };
    },
    methods: {
        update(){
            const self=this;
            
            let formData = new FormData()
            formData.append("social_facebook", self.form.social_facebook || '')
            formData.append("social_twitter", self.form.social_twitter || '')
            formData.append("social_instagram", self.form.social_instagram || '')
            formData.append("social_linkedin", self.form.social_linkedin || '')
            formData.append('_method', 'put');

            self.$emit('form-is-updated',formData)
            this.sending=true;

        },
    },
    mounted() {
        this.$root.$on('sending-finished',()=>this.sending=false );
    },    
}
</script>

