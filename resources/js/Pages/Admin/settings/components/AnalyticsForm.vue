<template> 

    <form-section @submitted="update">
        <template #title>
            Analytics
        </template>

        <template #description>
            Update your account's Analytics information .
        </template>

        <template #form>       

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="site_name">google_analytics</label>
                <input v-model="form.google_analytics" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="google_analytics" name="google_analytics" type="text"  placeholder="Enter google analytics code" aria-label="google_analytics">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.google_analytics">{{$page.errors.google_analytics}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="site_name">facebook_pixels</label>
                <input v-model="form.facebook_pixels" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="facebook_pixels" name="facebook_pixels" type="text"  placeholder="Enter facebook pixel code" aria-label="facebook_pixels">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.facebook_pixels">{{$page.errors.facebook_pixels}}</p>
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

    <!-- <div class="tile">
        <form @submit.prevent="update()"> 
            <h3 class="tile-title">Analytics</h3>
            <hr>
            <div class="tile-body">

       
     
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
    </div>  -->
</template>
<script> 
import TextareaInput from './../../../Shared/TextareaInput'   
import LoadingButton from './../../../Shared/LoadingButton' 
import FormSection from './../../../Shared/FormSection'   

export default { 
    components:{
        TextareaInput,
        LoadingButton,
        FormSection,
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

