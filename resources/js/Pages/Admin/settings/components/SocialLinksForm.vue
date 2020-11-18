<template>

    <form-section @submitted="update">
        <template #title>
            Social Links
        </template>

        <template #description>
            Update your account's Social Links information .
        </template>

        <template #form>       

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="social_facebook">social_facebook</label>
                <input v-model="form.social_facebook" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="social_facebook" name="social_facebook" type="text"  placeholder="social_facebook" aria-label="social_facebook">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.social_facebook">{{$page.errors.social_facebook}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="social_twitter">social_twitter</label>
                <input v-model="form.social_twitter" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="social_twitter" name="social_twitter" type="text"  placeholder="social_twitter" aria-label="social_twitter">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.social_twitter">{{$page.errors.social_twitter}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="social_instagram">social_instagram</label>
                <input v-model="form.social_instagram" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="social_instagram" name="social_instagram" type="text"  placeholder="social_instagram" aria-label="social_instagram">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.social_instagram">{{$page.errors.social_instagram}}</p>
            </div>

            <div class="col-span-6 sm:col-span-4 mt-1 block w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="social_linkedin">social_linkedin</label>
                <input v-model="form.social_linkedin" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="social_linkedin" name="social_linkedin" type="text"  placeholder="social_linkedin" aria-label="social_linkedin">
                <p class="text-red-500 text-xs italic" v-if="$page.errors.social_linkedin">{{$page.errors.social_linkedin}}</p>
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
</div> -->
</template>
<script> 
import TextInput from './../../../Shared/TextInput'   
import LoadingButton from './../../../Shared/LoadingButton' 
import FormSection from './../../../Shared/FormSection'   


export default {
    components:{
        TextInput,
        LoadingButton,
        FormSection,
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

