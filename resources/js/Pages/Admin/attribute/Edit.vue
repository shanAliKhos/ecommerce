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
    </nav>

    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#values" data-toggle="tab">Attribute Values</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <div class="tile">
                        <form @submit.prevent="update()"> 
                            <h3 class="tile-title">Attribute Information</h3>
                            <hr>
                            <div class="tile-body">
                               <text-input 
                                v-model="form.code" :error="$page.errors.code" 
                                class="form-group" label="Code" placeholder="Enter attribute code" />
                               
                               <text-input 
                               v-model="form.name" :error="$page.errors.name" 
                               class="form-group" label="Name" placeholder="Enter attribute name" />
 
                                <select-input 
                                    v-model="form.frontend_type" :error="$page.errors.frontend_type" 
                                    class="form-group" label="Frontend Type">
                                    <option :value="null" />
                                    <option v-for="(FrontEndType, index) in FrontEndTypes" :key="index" :value="index">{{ FrontEndType }}</option>
                                </select-input>        

                                <div class="form-group">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input 
                                            :class="{'is-invalid': $page.errors.is_filterable ,'form-check-input':true}"   
                                            v-model="form.is_filterable"
                                            type="checkbox" id="is_filterable" name="is_filterable" />Filterable
                                        </label>
                                    </div>
                                    <div class="invalid-feedback active">
                                        <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.is_filterable }}</span> 
                                    </div>  
                                </div>
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
                                        <loading-button :loading="sending" class="btn btn-primary" type="submit">Update Attribute</loading-button>
                                        <inertia-link class="btn btn-danger" :href="route('admin.attributes.index')"><i class="fa fa-fw fa-lg fa-arrow-left"></i>Go Back</inertia-link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane" id="values">
                    <!-- <attribute-values :attributeid="{{ $attribute->id }}"></attribute-values> -->
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
// import AppLayout from './../Layouts/AppLayout'    
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput' 
import LoadingButton from './../../Shared/LoadingButton'   

export default {
    metaInfo: { title: 'Attribute-edit' },
    // layout: AppLayout,  
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
                is_filterable:this.$page.Attribute.is_filterable,
                is_required:this.$page.Attribute.is_required, 
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
 
 
 