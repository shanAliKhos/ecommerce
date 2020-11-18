<template>

    <form-section @submitted="update">
        <template #title>
            PAYMENTS
        </template>

        <template #description>
            Update your Paymeny account's General information and Option.
        </template>

        <template #form>       
  
            
            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-stripe_payment_method">stripe_payment_method</label>
                <div class="relative">
                    <select v-model="form.stripe_payment_method" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option :value="0">Disable</option>
                        <option :value="1">Active</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <p class="text-red-500 text-xs italic" v-if="$page.errors.stripe_payment_method">{{$page.errors.stripe_payment_method}}</p>    
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="stripe_key">stripe_key</label>
                <input v-model="form.stripe_key" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="stripe_key" name="stripe_key" type="text"  placeholder="stripe_key" aria-label="stripe_key">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.stripe_key">{{$page.errors.stripe_key}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="stripe_secret_key">stripe_secret_key</label>
                <input v-model="form.stripe_secret_key" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="stripe_secret_key" name="stripe_secret_key" type="text"  placeholder="stripe_secret_key" aria-label="stripe_secret_key">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.stripe_secret_key">{{$page.errors.stripe_secret_key}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-stripe_payment_method">paypal_payment_method</label>
                <div class="relative">
                    <select v-model="form.paypal_payment_method" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option :value="0">Disable</option>
                        <option :value="1">Active</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <p class="text-red-500 text-xs italic" v-if="$page.errors.paypal_payment_method">{{$page.errors.paypal_payment_method}}</p>    
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="paypal_client_id">paypal_client_id</label>
                <input v-model="form.paypal_client_id" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="paypal_client_id" name="paypal_client_id" type="text"  placeholder="paypal_client_id" aria-label="paypal_client_id">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.paypal_client_id">{{$page.errors.paypal_client_id}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="paypal_secret_id">paypal_secret_id</label>
                <input v-model="form.paypal_secret_id" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="paypal_secret_id" name="paypal_secret_id" type="text"  placeholder="paypal_secret_id" aria-label="paypal_secret_id">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.paypal_secret_id">{{$page.errors.paypal_secret_id}}</p>
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
import SelectInput from './../../../Shared/SelectInput'   
import LoadingButton from './../../../Shared/LoadingButton' 
import FormSection from './../../../Shared/FormSection'   
import SectionBorder from './../../../Shared/SectionBorder' 



export default { 
    components:{
        TextInput,
        SelectInput,
        LoadingButton,
        FormSection,
        SectionBorder,
    },
    props:{
        settings:Object,
        sending:Boolean,

    },     
    data() {
        return {
            form:{
                stripe_payment_method:this.settings.stripe_payment_method,
                stripe_key: this.settings.stripe_key,
                stripe_secret_key: this.settings.stripe_secret_key,
                paypal_payment_method:this.settings.paypal_payment_method,
                paypal_client_id: this.settings.paypal_client_id,
                paypal_secret_id: this.settings.paypal_secret_id,               
            }, 
        };
    }, 
    methods: {
        update() {
            const self=this;
            let formData = new FormData()
            formData.append("stripe_payment_method", self.form.stripe_payment_method || '')
            formData.append("stripe_key", self.form.stripe_key || '')
            formData.append("stripe_secret_key", self.form.stripe_secret_key || '')
            formData.append("paypal_payment_method", self.form.paypal_payment_method || '')
            formData.append("paypal_client_id", self.form.paypal_client_id || '')
            formData.append("paypal_secret_id", self.form.paypal_secret_id || '')
            formData.append('_method', 'put')
            self.$emit('form-is-updated',formData)
        },
  
    },        

}
</script>
 