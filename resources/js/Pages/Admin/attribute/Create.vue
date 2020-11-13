<template>
<div>
 
    <div class="app-title">
        <div>
            <h1><i class="fa fa-cogs"></i> Attribute </h1>
            <p>Create</p>

        </div>
    </div>
 
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
                               <text-input 
                                v-model="form.code" :error="$page.errors.code" 
                                class="form-group"  placeholder="Enter attribute code" />
                               
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
 
