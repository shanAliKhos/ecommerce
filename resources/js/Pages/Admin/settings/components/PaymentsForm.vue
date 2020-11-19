<template>

    <form-section @submitted="update">
        <template #title>
            PAYMENTS
        </template>

        <template #description>
            Update your Paymeny account's General information and Option.
        </template>

        <template #form>       
   
            <p class="text-lg text-gray-800 font-bold pb-4 col-span-6">Stripe</p>

            <select-input 
                v-model="form.stripe_payment_method" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full"  
                :fixedClasses="'right-0 z-50'"
                :error="$page.errors.stripe_payment_method"
                label='stripe_payment_method'    
                :labelRequire='true'>
            <option :value="0">Disable</option>
            <option :value="1">Active</option>                        
            </select-input>             
      
            <text-input 
                id="stripe_key" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full p-1" 
                v-model="form.stripe_key"  
                :error="$page.errors.stripe_key"
                label='stripe_key'    
                :labelRequire='true'    
                placeholder="stripe_key" 
            aria-label="stripe_key"/>                              

            <text-input 
                id="stripe_secret_key" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full p-1" 
                v-model="form.stripe_secret_key"  
                :error="$page.errors.stripe_secret_key"
                label='stripe_secret_key'    
                :labelRequire='true'    
                placeholder="stripe_secret_key" 
            aria-label="stripe_secret_key"/>         


            <SectionBorder class="col-span-6"/>
            

            <p class="text-lg text-gray-800 font-bold pb-4 col-span-6">PayPal</p>

       
            <select-input 
                v-model="form.paypal_payment_method" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full"  
                :fixedClasses="'right-0 z-50'"
                :error="$page.errors.paypal_payment_method"
                label='paypal_payment_method'    
                :labelRequire='true'>
            <option :value="0">Disable</option>
            <option :value="1">Active</option>                        
            </select-input>            


            <text-input 
                id="paypal_client_id" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.paypal_client_id"  
                :error="$page.errors.paypal_client_id"
                label='paypal_client_id'    
                :labelRequire='true'    
                placeholder="paypal_client_id" 
            aria-label="paypal_client_id"/>                              
 

            <text-input 
                id="paypal_secret_id" 
                type="text" 
                class="col-span-6 sm:col-span-6 mt-1 block w-full" 
                v-model="form.paypal_secret_id"  
                :error="$page.errors.paypal_secret_id"
                label='paypal_secret_id'    
                :labelRequire='true'    
                placeholder="paypal_secret_id" 
            aria-label="paypal_secret_id"/>                  

   


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
   

    },     
    data() {
        return {
            form:{
                stripe_payment_method:this.settings.stripe_payment_method?this.settings.stripe_payment_method:0,
                stripe_key: this.settings.stripe_key,
                stripe_secret_key: this.settings.stripe_secret_key,
                paypal_payment_method:this.settings.paypal_payment_method?this.settings.paypal_payment_method:0,
                paypal_client_id: this.settings.paypal_client_id,
                paypal_secret_id: this.settings.paypal_secret_id,               
            }, 
            sending:false,

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
            this.sending=true;

        },
  
    },      
    mounted() {
        this.$root.$on('sending-finished',()=>this.sending=false );
    },         

}
</script>
 