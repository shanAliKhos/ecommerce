<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Edit Attributes</a>
            </li>
        </ol>
        <inertia-link 
            :href="route('admin.attribute.index')" 
            class="transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>            
            <span>Back</span>            
       
        </inertia-link>            
    </nav>
    <p class="text-xl pb-6 flex items-center">Edit Attributes</p>        
    <div class="flex justify-center">
        <div class="w-full  pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="update" >
 
                    <p class="text-lg text-gray-800 font-medium pb-4">Attribute information</p>
 
                       <text-input 
                        id="name" 
                        type="text" 
                        class="col-span-8"  
                        v-model="form.name" 
                        autocomplete="name" 
                        :error="$page.errors.name"
                        label='Name'    
                        :labelRequire='true'    
                        placeholder="Name" 
                    aria-label="Name"/>                     
                    
                    <div class="flex flex-wrap -mx-3 mb-2">
 
                        <text-input 
                            id="code" 
                            type="text" 
                            class="w-full md:w-1/2 px-3  md:mb-0"  
                            :fixedClasses="'right-3 z-50'" 
                            v-model="form.code" 
                            autocomplete="code" 
                            :error="$page.errors.code"
                            label='Code'    
                            :labelRequire='true'    
                            placeholder="eg: S, M, L | R, G, B" 
                        aria-label="code"/> 


                        <select-input 
                            v-model="form.frontend_type" 
                            class="w-full md:w-1/2 px-3  md:mb-0 "  
                            :fixedClasses="'right-3 z-50'"
                            :error="$page.errors.frontend_type"
                            label='Frontend Type'    
                            :labelRequire='true'>
                        <option v-for="(FrontEndType, index) in FrontEndTypes" :key="index" :value="index">{{ FrontEndType }}</option>                                                   
                        </select-input>                         

                    </div>
 
                    <div class="flex flex-wrap -mx-3 mb-2">
 
                        <select-input 
                            v-model="form.is_required" 
                            class="w-full md:w-1/2 px-3  md:mb-0 "  
                            :fixedClasses="'right-3 z-50'"
                            :error="$page.errors.is_required"
                            label='Required'    
                            :labelRequire='true'>
                        <option :value="0">No</option>
                        <option :value="1">YES</option>                        
                        </select-input> 

                        <select-input 
                            v-model="form.is_filterable" 
                            class="w-full md:w-1/2 px-3  md:mb-0 "  
                            :fixedClasses="'right-3 z-50'"
                            :error="$page.errors.is_filterable"
                            label='Filterable'    
                            :labelRequire='true'>
                        <option :value="0">No</option>
                        <option :value="1">YES</option>                        
                        </select-input> 
 
                    </div>   

                    <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
                            <span>UPDATE</span>
                            <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>                
                        </loading-button>          
                    </div>         

                </form>

            </div>
        </div>    
    </div>    
</div>
</template>
<script>
import AppLayout from './../Layouts/AppLayout'    
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput' 
import LoadingButton from './../../Shared/LoadingButton'   

export default {
    metaInfo: { 
        title: 'Attribute-edit' 
    },
    layout: AppLayout,  
    components:{
        TextInput,
        SelectInput,
        LoadingButton,
    },    
    data() {
        return {
            form:{
                code:this.$page.Attribute.code,
                name:this.$page.Attribute.name,
                frontend_type:this.$page.Attribute.frontend_type,
                is_filterable:this.$page.Attribute.is_filterable?1:0,
                is_required:this.$page.Attribute.is_required?1:0, 
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
        update(){
            const self = this; 
            let formData = new FormData()
            formData.append("code", self.form.code || '');
            formData.append("name", self.form.name || '');
            formData.append("frontend_type", self.form.frontend_type || '');
            formData.append("is_required", self.form.is_required || '');
            formData.append("is_filterable", self.form.is_filterable || '');
            formData.append('_method', 'put')

            this.$inertia.post(route('admin.attribute.update', this.$page.Attribute.id), formData, {
                preserveState: true,
                preserveScroll: true,     
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,

            })

        }
    },   
}
</script>
 
 
 