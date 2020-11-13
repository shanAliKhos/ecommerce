<template> 
    <div class="tile">
        <form @submit.prevent="update()"> 
            <h3 class="tile-title">Analytics</h3>
            <hr>
            <div class="tile-body">

                <textarea-input 
                v-model="form.google_analytics" :error="$page.errors.google_analytics"
                class="form-group" label="Google Analytics Code" placeholder="Enter google analytics code" />        
     
                <textarea-input 
                v-model="form.facebook_pixels" :error="$page.errors.facebook_pixels"
                class="form-group" label="Facebook Pixel Code" placeholder="Enter facebook pixel code" />        
            
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
import TextareaInput from './../../../Shared/TextareaInput'   
import LoadingButton from './../../../Shared/LoadingButton' 
export default { 
    components:{
        TextareaInput,
        LoadingButton,
    },
    props:{
        google_analytics:String, 
        facebook_pixels:String, 
        sending:Boolean,

    },    
    data() {
        return {
            form:{
                google_analytics:this.google_analytics,
                facebook_pixels:this.facebook_pixels, 
            }
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
        },
    },
}
</script>

