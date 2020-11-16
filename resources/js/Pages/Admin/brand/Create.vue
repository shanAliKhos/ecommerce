<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Brand Listing</a>
            </li>
        </ol>
 
    </nav>
  
    <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="tile">
            <form @submit.prevent="store()">
            
                <h3 class="tile-title">Create</h3>
                <div class="tile-body">
                    <div class="form-group">
                        <label class="control-label" for="name">Name <span class="m-l-5 text-danger"> *</span></label>
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        :class="{'is-invalid': $page.errors.name ,'form-control':true}" 
                        v-model="form.name"
                        />
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.name }}</span> 
                        </div>                        
                    </div>
                   
                    <div class="form-group">    

                        <file-input v-model="form.logo" :error="$page.errors.logo" class="pr-6 pb-8 w-full" type="file" accept="image/*" label="Photo" :preview="true"/>
                        
                    </div>
                </div>
                <div class="tile-footer">
                    <!-- <button class="btn btn-primary" type="button" @click="store()"><i class="fa fa-fw fa-lg fa-check-circle"></i>Save Brand</button> -->
                    <loading-button :loading="sending" class="btn btn-primary" type="submit">Save Brand</loading-button>
                    
                    <inertia-link class="btn btn-secondary" :href="$route('admin.brand.index')"><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</inertia-link>
                </div>
                     
            </form>
            </div>
        </div>
    </div>
 
</div>
</template>
<script>
import AppLayout from './../Layouts/AppLayout'   
import FileInput from './../../Shared/FileInput'   
import LoadingButton from './../../Shared/LoadingButton'   

export default {
    metaInfo: { title: 'Brand-create' },

    layout: AppLayout, 
    remember: 'form',
    components:{
        FileInput,
        LoadingButton,
    },
    data() {
        return {
            form: {
                name: null, 
                logo: null,
            },  
            sending:false,  
        }
    },

    methods: {
        store() {
  
            const self = this;
            let formData = new FormData();
            formData.append("name", self.form.name || ''); 
            formData.append("logo", self.form.logo || '');
            this.$inertia.post(this.route('admin.brand.store'), formData,{
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
<style scoped>
img {
  width: 130%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}     
</style>