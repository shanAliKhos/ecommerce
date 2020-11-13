<template>
<div class="tile">
    <form @submit.prevent="update()"> 
        <h3 class="tile-title">Site Logo</h3>
        <hr>
        <div class="tile-body">
            <div class="row">
                <div class="col-3"> 
                </div>
                <div class="col-9">
                    <div class="form-group"> 
                        <file-input 
                            v-model="form.site_logo" 
                            :error="$page.errors.site_logo" 
                            class="pr-6 pb-8 w-full" 
                            type="file" 
                            accept="image/*" 
                            label="Site Logo" 
                            :preview="true"
                            :preview_img="site_logo"
                            />
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-3">
                 </div>
                <div class="col-9">
                    <div class="form-group"> 
                        <file-input 
                        v-model="form.site_favicon" 
                        :error="$page.errors.site_favicon" 
                        class="pr-6 pb-8 w-full" 
                        type="file" 
                        accept="image/*" 
                        label="Site Favicon" 
                        :preview="true"
                        :preview_img="site_favicon" 
                        />      
                    </div>
                </div>
            </div>
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
import FileInput from './../../../Shared/FileInput'   
import LoadingButton from './../../../Shared/LoadingButton' 

export default {
    components:{
        TextInput,
        FileInput,
        LoadingButton
    },
    props:{
        site_logo:String,
        site_favicon:String,
        sending:Boolean,
    },    
    data() {
        return {
            form:{ 
                site_logo:null,
                site_favicon:null, 
            }
        };
    },
    methods: {
        update(){
            const self = this; 
            let formData = new FormData() 
            formData.append('site_logo', self.form.site_logo || '')
            formData.append('site_favicon', self.form.site_favicon || '')
            formData.append('_method', 'put')
            self.$emit('form-is-updated',formData)
        },
       
         
    },
}
</script>

