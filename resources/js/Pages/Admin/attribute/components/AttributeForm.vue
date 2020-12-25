<template>
<form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="store" >

    <p class="pb-6 flex font-semibold text-xl text-gray-400">Attribute Edit</p>    

    <div class="w-full flex flex-wrap item-center md:justify-end py-2 px-2 ">

        <div class=" w-full md:w-1/2">
            <label for="is_required" class="flex items-center cursor-pointer">
                <div :class="{'text-green-400':form.is_required,'text-red-500':!form.is_required}" class=" px-2 font-semibold ">Required</div>
                <div class="relative">
                    <input id="is_required" type="checkbox" class="hidden" v-model="form.is_required" />
                    <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                    <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
            </label> 
            <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_required">{{$page.errors.is_required}}</p>                 
        </div>      


        <div class=" w-full md:w-1/2">
            <label for="is_filterable" class="flex items-center cursor-pointer">
                <div :class="{'text-green-400':form.is_filterable,'text-red-500':!form.is_filterable}" class="px-2 font-semibold ">Filterable</div>
                <div class="relative">
                    <input id="is_filterable" type="checkbox" class="hidden" v-model="form.is_filterable" />
                    <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                    <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
            </label>
            <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_filterable">{{$page.errors.is_filterable}}</p>                 
        </div>        

     
    </div>


    <text-input 
        id="name" 
        type="text" 
        class="w-full"  
        v-model="form.name"  
        :error="$page.errors.name"
        label='Name'    
        :labelRequire='true'    
        placeholder="Name"
    />                      

    <select-input 
        v-model="form.frontend_type" 
        class="w-full"  
        :fixedClasses="'right-3 z-50'"
        :error="$page.errors.frontend_type"
        label='Frontend Type'    
        :labelRequire='true'>
    <option v-for="(FrontEndType, index) in FrontEndTypes" :key="index" :value="index">{{ FrontEndType }}</option>                                                   
    </select-input>                          
  

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
import BackButton from './../../../Shared/BackButton'   
import TextInput from './../../../Shared/TextInput'   
import SelectInput from './../../../Shared/SelectInput' 
import LoadingButton from './../../../Shared/LoadingButton'   
import SectionBorder from './../../../Shared/SectionBorder'   

export default {     
    components:{
        TextInput,
        SelectInput,
        LoadingButton, 
        SectionBorder
    },    
    data() {
        return {
            form:{
                name:this.$page.attribute?this.$page.attribute.name:null,
                frontend_type:this.$page.attribute?this.$page.attribute.frontend_type:null,
                is_filterable:this.$page.attribute?this.$page.attribute.is_filterable:false,
                is_required:this.$page.attribute?this.$page.attribute.is_required:false, 
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
            formData.append("name", self.form.name || '');
            formData.append("frontend_type", self.form.frontend_type || '');
            formData.append("is_required", self.form.is_required?1:0 || '');
            formData.append("is_filterable", self.form.is_filterable?1:0 || '');
            if (self.$page.attribute) {
                formData.append('_method', 'put')
            }

            this.$inertia.post(self.$page.attribute?route('admin.attribute.update', self.$page.attribute.id):route('admin.attribute.store'), formData, {
                preserveState: true,
                preserveScroll: true,     
                onStart: () => self.sending = true,
                onFinish: () => self.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.name = null
                        this.form.frontend_type = null
                        this.form.is_required = false
                        this.form.is_filterable = false 
                    }
                },                   

            })

        }
    },  
    computed:{
        ButtonTitle(){ 
            return this.$page.attribute?'Update':'Save';
        },
        Editing(){
            return this.$page.attribute?true:false;
        },
    },
 
}
</script> 
 