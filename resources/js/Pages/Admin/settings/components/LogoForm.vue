<template>

    <form-section @submitted="update">
        <template #title>
            Site Title & Icon
        </template>

        <template #description>
            Update your Site Title & Icon.
        </template>

        <template #form>       

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <file-input 
                    v-model="form.site_logo" 
                    :error="$page.errors.site_logo" 
                    class="pr-6 pb-8 w-full" 
                    type="file" 
                    accept="image/*" 
                    label="Site Favicon" 
                    :preview="true"
                    :preview_img="form.site_favicon" 
                />                 
                <p class="text-red-500 text-xs italic" v-if="$page.errors.site_name">{{$page.errors.site_name}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
               
                <file-input 
                    v-model="form.site_favicon" 
                    :error="$page.errors.site_favicon" 
                    class="pr-6 pb-8 w-full" 
                    type="file" 
                    accept="image/*" 
                    label="Site Favicon" 
                    :preview="true"
                    :preview_img="form.site_favicon" 
                />                 
                <p class="text-red-500 text-xs italic" v-if="$page.errors.site_name">{{$page.errors.site_name}}</p>
            </div>            

 
        </template>


        <template #actions>
 
            <loading-button :loading="sending" class="transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                Save Product
                    <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>                
            </loading-button>                      
                        
       
 
        </template>
    </form-section>   

 
</template>
<script> 
import TextInput from './../../../Shared/TextInput'   
import FileInput from './../../../Shared/FileInput'   
import LoadingButton from './../../../Shared/LoadingButton' 
import FormSection from './../../../Shared/FormSection'   


export default {
    components:{
        TextInput,
        FileInput,
        LoadingButton,
        FormSection,
    },
    props:{
        site_logo:String,
        site_favicon:String,
        sending:Boolean,
    },    
    data() {
        return {
            form:{ 
                site_logo:this.site_logo?this.site_logo:null,
                site_favicon:this.site_favicon?this.site_favicon:null, 
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

