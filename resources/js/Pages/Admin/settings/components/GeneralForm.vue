<template>
<div class="tile">
    <form @submit.prevent="update()">         
        <h3 class="tile-title">General Settings</h3>
        <hr>
        <div class="tile-body">

            <text-input 
            v-model="form.site_name" :error="$page.errors.site_name" 
            class="form-group" label="Site Name" placeholder="Enter site name" />        

            <text-input 
            v-model="form.site_title" :error="$page.errors.site_title" 
            class="form-group" label="Site Title" placeholder="Enter site title" />        

            <text-input 
            type="email"
            v-model="form.default_email_address" :error="$page.errors.default_email_address" 
            class="form-group" label="Default Email Address" placeholder="Enter store default email address"" />        

            <text-input 
            v-model="form.currency_code" :error="$page.errors.currency_code" 
            class="form-group" label="Currency Code" placeholder="Enter store currency code" />        

            <text-input 
            v-model="form.currency_symbol" :error="$page.errors.currency_symbol" 
            class="form-group" label="Currency Symbol" placeholder="Enter store currency symbol" />        
 
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
export default {
    components:{
        TextInput,
    },
    props:{
        settings:Object,
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
