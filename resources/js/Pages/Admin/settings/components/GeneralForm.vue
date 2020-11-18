<template>

    <form-section @submitted="update">
        <template #title>
            General
        </template>

        <template #description>
            Update your account's General information and Option.
        </template>

        <template #form>       

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="site_name">site_name</label>
                <input v-model="form.site_name" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="site_name" name="site_name" type="text"  placeholder="site_name" aria-label="site_name">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.site_name">{{$page.errors.site_name}}</p>
            </div>
            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="site_title">site_title</label>
                <input v-model="form.site_title" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="site_title" name="site_title" type="text"  placeholder="site_title" aria-label="site_title">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.site_title">{{$page.errors.site_title}}</p>
            </div>
            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="default_email_address">default_email_address</label>
                <input v-model="form.default_email_address" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="default_email_address" name="default_email_address" type="text"  placeholder="default_email_address" aria-label="default_email_address">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.default_email_address">{{$page.errors.default_email_address}}</p>
            </div>
            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="currency_code">currency_code</label>
                <input v-model="form.currency_code" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="currency_code" name="currency_code" type="text"  placeholder="currency_code" aria-label="currency_code">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.currency_code">{{$page.errors.currency_code}}</p>
            </div>
            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="currency_symbol">currency_symbol</label>
                <input v-model="form.currency_symbol" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="currency_symbol" name="currency_symbol" type="text"  placeholder="currency_symbol" aria-label="currency_symbol">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.currency_symbol">{{$page.errors.currency_symbol}}</p>
            </div>
 
 
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
        sending:Boolean,

    },    
    data() {
        return {
            form:{
                site_name:this.settings.site_name,
                site_title:this.settings.site_title,
                default_email_address:this.settings.default_email_address,
                currency_code:this.settings.currency_code,
                currency_symbol:this.settings.currency_symbol,
            }
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
            formData.append('_method', 'put')
            self.$emit('form-is-updated',formData)
        },
    },
}
</script>
