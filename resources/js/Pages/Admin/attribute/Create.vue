<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
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
    <div class="w-full mt-5 pl-0 lg:p-8 flex items-center  justify-center">

        <div class="my-8 p-10 bg-white rounded shadow-xl">
            <p class="text-xl pb-6 flex items-center">Attributes Create</p>        
            <form @submit.prevent="store()" class="w-full max-w-lg">  
                
                <div class="flex flex-wrap -mx-3 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Code
                        </label>
                        <input v-model="form.code" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Code">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.code">{{$page.errors.code}}</p>

                    </div>

                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Name
                        </label>
                        <input v-model="form.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Name">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>

                    </div>

                </div>
 
                <div class="flex flex-wrap -mx-3 mb-2">
 

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
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
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            IS Required ?
                        </label>
                        <div class="relative">
                            <select v-model="form.frontend_type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option :value="true">YES</option>
                                <option :value="false">No</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.frontend_type">{{$page.errors.frontend_type}}</p>                        
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
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
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.frontend_type">{{$page.errors.frontend_type}}</p>                        
                    </div>
 
 

                </div> 
            </form>
        </div>
      
    </div>
<!--  
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                         <form @submit.prevent="store()">
                            <h3 class="tile-title">Attribute Information</h3>
                            <hr>
                            <div class="tile-body">
                    
                       
                                <div class="form-group">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input 
                                            :class="{'is-invalid': $page.errors.is_required ,'form-check-input':true}"  
                                            v-model="form.is_required"
                                            type="checkbox" id="is_required" name="is_required"/>Required
                                        </label>
                                    </div>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.is_required }}</span> 
                                    </div>                                          
                                </div>
                            </div>
                            <div class="tile-footer">
                                <div class="row d-print-none mt-2">
                                    <div class="col-12 text-right">
                                        <loading-button :loading="sending" class="btn btn-primary" type="submit">Save Attribute</loading-button> 
                                        <inertia-link class="btn btn-danger" :href="route('admin.attributes.index')"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</inertia-link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  -->
    
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
 
