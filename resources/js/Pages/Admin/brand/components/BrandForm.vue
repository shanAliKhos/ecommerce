<template>
<form @submit.prevent="update"  class="p-10 bg-white rounded shadow-xl"> 
    <p class="pb-6 flex font-semibold text-xl text-gray-400">Brand Edit</p>    

    <div class="flex flex-wrap -mx-3 mb-2">

        <div class="w-full mt-2">
            <file-input 
                v-model="form.logo" 
                :preview_img="form.logo" 
                :defualt_preview_img="form.name"  
                :error="$page.errors.logo" 
                class=" pb-5 w-full  px-2 py-2 text-gray-700 bg-gray-50 rounded" 
                type="file" 
                accept="image/*" 
                label="Photo" 
            :preview="true"/>
        </div>                                  

        <text-input 
            id="name" 
            type="text" 
            class="w-full " 
            v-model="form.name" 
            :error="$page.errors.name"
            label='Name'    
            :labelRequire='true'    
        placeholder="Name"/>
                    
    </div>                       
    
    <SectionBorder/>

    <div class="flex items-center justify-end px-4 py-3  text-right sm:px-6">
        <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
            <span>{{ButtonTitle}}</span>
            <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>                
        </loading-button>          
    </div>
    
</form> 
</template>
<script>    
import FileInput from './../../../Shared/FileInput'   
import LoadingButton from './../../../Shared/LoadingButton'   
import TextInput from './../../../Shared/TextInput'   
import SectionBorder from './../../../Shared/SectionBorder'   
 
export default { 
    components:{
        FileInput,
        LoadingButton,
        TextInput,
        SectionBorder 
    },     
    remember: 'form',
    data() {
        return {
            form: {
                name: this.$page.brand?this.$page.brand.name:null,
                slug: this.$page.brand?this.$page.brand.slug:null,
                logo: this.$page.brand?this.$page.brand.photo_url:null,
            },     
            imagePreview:'',
            showPreview: false,            
            sending:false, 
        }
    },

    methods: {
        update() {
            const self = this; 
            let formData = new FormData()
            formData.append('name', this.form.name || '')
            // formData.append('slug', this.form.slug || '')
            formData.append('logo', this.form.logo || '')
            if (self.$page.brand) {
                formData.append('_method', 'put')
            }

            this.$inertia.post(self.$page.brand?route('admin.brand.update', self.$page.brand.id):route('admin.brand.store'), formData, {
                preserveState: true,
                preserveScroll: true,             
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.name = null
                        // this.form.slug = null
                        this.form.logo = null
                    }
                },                           
            })
                      
        },
          
    },  
    computed:{
        ButtonTitle(){ 
            return this.$page.brand?'Update':'Save';
        },
        Editing(){
            return this.$page.brand?true:false;
        },
    },
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
 
  
}
</script>
 