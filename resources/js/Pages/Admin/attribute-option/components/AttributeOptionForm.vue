<template>
<form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="store" >

    <p class="pb-6 flex font-semibold text-xl text-gray-400">Attribute Option Edit</p>                        

    <div class="flex flex-wrap -mx-3 mb-2">

        <div class="w-full relative mt-2">
            <label class="z-20 absolute top-0 right-3 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" for="weight">Attribute</label>
            <multiselect 
                v-model="form.attribute" 
                deselect-label="Can't remove this value" 
                track-by="name"  
                label="name" 
                placeholder="Select Brand" 
                :options="Attributes" 
                :searchable="false" 
                :allow-empty="false">
            </multiselect>             
            <p class="z-20 absolute bottom-0 right-3 text-red-500 text-xs italic" v-if="$page.errors.attribute_id">{{$page.errors.attribute_id}}</p>
        </div>    

        <text-input 
            id="name" 
            type="text" 
            class="w-full  mt-2"  
            :fixedClasses="'right-3 z-50'"
            v-model="form.name"  
            :error="$page.errors.name"
            label='Name'    
            :labelRequire='true'    
        placeholder="Name"  />     
    
        <text-input 
            id="code" 
            type="text" 
            class="w-full  mt-2"  
            :fixedClasses="'right-3 z-50'"
            v-model="form.code"  
            :error="$page.errors.code"
            label='Code'    
            :labelRequire='true'    
        placeholder="eg: S, M, L | R, G, B"  /> 

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
import Multiselect from 'vue-multiselect'
import TextInput from './../../../Shared/TextInput'   
import SelectInput from './../../../Shared/SelectInput' 
import LoadingButton from './../../../Shared/LoadingButton'   
import BackButton from './../../../Shared/BackButton'   
import SectionBorder from './../../../Shared/SectionBorder'   

export default { 
   
    components:{
        TextInput,
        SelectInput,
        LoadingButton,
        BackButton,
        SectionBorder,
        Multiselect
    },    
    data() {
        return {
            form:{
                code:this.$page.attribute_option?this.$page.attribute_option.code:null,
                name:this.$page.attribute_option?this.$page.attribute_option.name:null, 
                attribute:this.$page.attribute_option?this.$page.attribute_option.attribute:null,  
            },
            FrontEndTypes:{
                select:'Select Box', 
                radio:'Radio Button',
                text:'Text Field', 
                text_area:'Text Area'
            },            
            sending:false,  

        }
    }, 
    methods: {
        store(){
            const self = this; 
            let formData = new FormData()
            formData.append("code", self.form.code || '');
            formData.append("name", self.form.name || '');
            formData.append("attribute_id", self.form.attribute?self.form.attribute.id:'' || '');    
            if (self.$page.attribute_option) {
                formData.append('_method', 'put')
            }         

            self.$inertia.post(self.$page.attribute_option?route('admin.attribute-option.update', self.$page.attribute_option.id):route('admin.attribute-option.store'), formData, {
                preserveState: true,    
                onStart: () => self.sending = true,
                onFinish: () => self.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.code = null
                        this.form.name = null
                        this.form.attribute = null
                    }
                },                             
            })

        }
    },   
 
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
     
    computed: {
        Attributes(){
            return this.$page.attributes;
        },
        ButtonTitle(){ 
            return this.$page.attribute_option?'Update':'Save';
        },
        Editing(){
            return this.$page.attribute_option?true:false;
        },
    }      
}
</script>