<template>
<div class="tile">
    <form @submit.prevent="update()">    
        <h3 class="tile-title">Social Links</h3>
        <hr>
        <div class="tile-body">

            <text-input 
            v-model="form.social_facebook" :error="$page.errors.social_facebook" 
            class="form-group" label="Facebook Profile" placeholder="Enter facebook profile link" />        
     
            <text-input 
            v-model="form.social_twitter" :error="$page.errors.social_twitter" 
            class="form-group" label="Twitter Profile" placeholder="Enter twitter profile link" />        
             
            <text-input 
            v-model="form.social_instagram" :error="$page.errors.social_instagram" 
            class="form-group" label="Instagram Profile" placeholder="Enter instagram profile link" />        
      
            <text-input 
            v-model="form.social_linkedin" :error="$page.errors.social_linkedin" 
            class="form-group" label="LinkedIn Profile" placeholder="Enter linkedin profile link" />        
         
        </div>
        <div class="tile-footer">
            <div class="row d-print-none mt-2">
                <div class="col-12 text-right">
                    <loading-button :loading="sending" class="btn btn-primary" type="submit">Update Settings</loading-button>
                </div>
            </div>
        </div>
    </form>
</div>
</template>
<script> 
import TextInput from './../../../Shared/TextInput'   
import LoadingButton from './../../../Shared/LoadingButton' 

export default {
    components:{
        TextInput,
        LoadingButton
    },
    props:{
        settings:Object,
        sending:Boolean,
    },    
    data() {
        return {
            form:{
                social_facebook:this.settings.social_facebook,
                social_twitter:this.settings.social_twitter,
                social_instagram:this.settings.social_instagram,
                social_linkedin:this.settings.social_linkedin, 
            }
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
        },
    },
}
</script>

