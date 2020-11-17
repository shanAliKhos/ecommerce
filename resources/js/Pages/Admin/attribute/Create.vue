<template>
<div>
    <nav class="text-sm font-semibold mb-5" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500"> 
            <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </li>
        <li class="flex items-center">
            <a href="#" class="text-gray-600">Create Attribute</a>
        </li>
        </ol>
    </nav>
    <p class="text-xl pb-6 flex items-center">Create Attributes</p>        
    <div class="flex justify-center">
        <div class="w-full lg:w-1/2 pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="store">

                    <p class="text-lg text-gray-800 font-medium pb-4">Attribute information</p>
                    
                    <div class="">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="cus_name">Name</label>
                        <input v-model="form.name" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text"  placeholder="Name" aria-label="Name">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>
                    </div>

                    <div class="mt-2">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="code">code</label>
                        <input v-model="form.code" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="code" name="code" type="text"  placeholder="code" aria-label="code">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.code">{{$page.errors.code}}</p>
                    </div>
                    
                    <div class="flex flex-wrap -mx-3 mb-2">
    
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" 
                                for="grid-state">
                                Frontend Type
                            </label>
                            <div class="relative">
                                <select v-model="form.frontend_type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option v-for="(FrontEndType, index) in FrontEndTypes" :key="index" :value="index">{{ FrontEndType }}</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.frontend_type">{{$page.errors.frontend_type}}</p>                        
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-state">
                                IS Required ?
                            </label>
                            <div class="relative">
                                <select v-model="form.is_required" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option :value="true">YES</option>
                                    <option :value="false">No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.is_required">{{$page.errors.is_required}}</p>                        
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-state">
                                Filterable
                            </label>
                            <div class="relative">
                                <select v-model="form.is_filterable" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option :value="true">YES</option>
                                    <option :value="false">No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.is_filterable">{{$page.errors.is_filterable}}</p>                        
                        </div> 

                    </div>                     
              
                    <div class="mt-6">
                        <loading-button :loading="sending" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit" as="button">
                            
                            Save Attribute
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
    metaInfo: { title: 'Attribute-create' },

    layout: AppLayout,  
    components:{
        TextInput,
        SelectInput,
        LoadingButton,
    },
    data() {
        return {
            form:{
                code:'',
                name:'',
                frontend_type:'',
                is_filterable:false,
                is_required:false, 
            },
            FrontEndTypes:{
                select:'Select Box', 
                radio:'Radio Button',
                text:'Text Field', 
                text_area:'Text Area'
            },
            sending:false,  
        };
    }, 
    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("code", self.form.code || '');
            formData.append("name", self.form.name || '');
            formData.append("frontend_type", self.form.frontend_type || '');
            formData.append("is_required", self.form.is_required || '');
            formData.append("is_filterable", self.form.is_filterable || '');

            self.$inertia.post(route('admin.attribute.store'), formData,{
                preserveState: true,
                preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.name = null
                        this.form.logo = null
                    }
                },             
            });
        },
  
    },        

}
</script>
 
