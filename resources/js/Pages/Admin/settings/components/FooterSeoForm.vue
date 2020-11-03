<template>
<div class="tile">
    <form @submit.prevent="update()" id="FooterSeoForm"> 
        <h3 class="tile-title">Footer &amp; SEO</h3>
        <hr>
        <div class="tile-body">

            <text-input 
            v-model="form.footer_copyright_text" :error="$page.errors.footer_copyright_text" 
            class="form-group" label="Footer Copyright Text" placeholder="Enter footer copyright text" />        
            
            <text-input 
            v-model="form.seo_meta_title" :error="$page.errors.seo_meta_title" 
            class="form-group" label="SEO Meta Title" placeholder="Enter seo meta title for store" />        
            
            <text-input 
            v-model="form.seo_meta_description" :error="$page.errors.seo_meta_description" 
            class="form-group" label="SEO Meta Description" placeholder="Enter seo meta description for store" />        
 
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
                footer_copyright_text:this.settings.footer_copyright_text,
                seo_meta_title:this.settings.seo_meta_title,
                seo_meta_description:this.settings.seo_meta_description, 
            }
        };
    },
    methods: {
        update(){
            const self=this;
            let formData = new FormData()
            formData.append("footer_copyright_text", self.form.footer_copyright_text || '')
            formData.append("seo_meta_title", self.form.seo_meta_title || '')
            formData.append("seo_meta_description", self.form.seo_meta_description || '')
            formData.append('_method', 'put')
            self.$emit('form-is-updated',formData)
        },
    },
}
</script>

