<template>
<div class="tile">
    <form @submit.prevent="update()"> 
        <h3 class="tile-title">Payment Settings</h3>
        <hr>
        <div class="tile-body">
            <div class="stripe-section-payments">
           
                <h3 class="tile-title">Stripe</h3>
                <select-input 
                    v-model="form.stripe_payment_method" :error="$page.errors.stripe_payment_method" 
                    class="form-group" label="Stripe Payment Method">
                    <option :value="0" :selected="(form.stripe_payment_method == 0)">Disabled</option>
                    <option :value="1" :selected="(form.stripe_payment_method == 1)" >Enabled</option>
                </select-input>             
                
                <text-input 
                v-model="form.stripe_key" :error="$page.errors.stripe_key" 
                class="form-group" label="Stripe Key" placeholder="Enter site name" />  
            
                <text-input 
                v-model="form.stripe_secret_key" :error="$page.errors.stripe_secret_key" 
                class="form-group" label="Stripe Secret Key" placeholder="Enter site name" />  

            </div>
            
            <hr>

            <div class="paypal-section-payments">

                <h3 class="tile-title">PayPal</h3>
                <select-input 
                    v-model="form.paypal_payment_method" :error="$page.errors.paypal_payment_method" 
                    class="form-group" label="PayPal Payment Method">
                    <option :value="0" :selected="(form.paypal_payment_method == 0)">Disabled</option>
                    <option :value="1" :selected="(form.paypal_payment_method == 1)" >Enabled</option>
                </select-input>                         

                <text-input 
                v-model="form.paypal_client_id" :error="$page.errors.paypal_client_id" 
                class="form-group" label="Client ID" placeholder="Enter paypal client Id" />  
    
                <text-input 
                v-model="form.paypal_secret_id" :error="$page.errors.paypal_secret_id" 
                class="form-group" label="Secret ID" placeholder="Enter paypal secret id" />  

            </div>

             
        </div>
        <div class="tile-footer">
            <div class="row d-print-none mt-2">
                <div class="col-12 text-right">
                    <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                </div>
            </div>
        </div>
    </form>
</div>
</template>
<script> 
import TextInput from './../../../Shared/TextInput'   
import SelectInput from './../../../Shared/SelectInput'   
export default { 
    components:{
        TextInput,
        SelectInput,
    },
    props:{
        settings:Object,
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
        },
  
    },        

}
</script>
 