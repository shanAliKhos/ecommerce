<template>

    <form-section @submitted="update">
        <template #title>
            Footer &amp; SEO
        </template>

        <template #description>
            Update your account's Footer &amp; SEO information and Option.
        </template>

        <template #form>       

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="footer_copyright_text">footer_copyright_text</label>
                <input v-model="form.footer_copyright_text" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="footer_copyright_text" name="footer_copyright_text" type="text"  placeholder="footer copyright text" aria-label="footer_copyright_text">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.footer_copyright_text">{{$page.errors.footer_copyright_text}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="seo_meta_title">seo_meta_title</label>
                <input v-model="form.seo_meta_title" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="seo_meta_title" name="seo_meta_title" type="text"  placeholder="seo_meta_title" aria-label="seo_meta_title">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.seo_meta_title">{{$page.errors.seo_meta_title}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="seo_meta_description">seo_meta_description</label>
                <input v-model="form.seo_meta_description" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="seo_meta_description" name="seo_meta_description" type="text"  placeholder="seo_meta_description" aria-label="seo_meta_description">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.seo_meta_description">{{$page.errors.seo_meta_description}}</p>
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
        FormSection
    },
    props:{
        settings:Object,
        sending:Boolean,

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

