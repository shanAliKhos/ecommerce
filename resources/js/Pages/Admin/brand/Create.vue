<template>
<div>
    <div class="app-title">
        <div>
            <h1><i class="fa fa-briefcase"></i> Brand </h1>
        </div>
    </div>
  
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
                    <button class="btn btn-primary" type="submit"> 
                        <span v-show="sending" class="btn-spinner mr-2" /></span>
                        <i  class="fa fa-fw fa-lg fa-check-circle"></i>
                        Save Brand
                    </button>
                    
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

export default {
    metaInfo: { title: 'Brand-create' },

    layout: AppLayout, 
    remember: 'form',
    components:{
        FileInput,
    },
    data() {
        return {
            form: {
                name: '', 
                logo: null,
            },  
            sending:false,  
        }
    },

    methods: {
        store() {
  
            const self = this;
            let formData = new FormData();
            formData.append("name", self.form.name); 
            formData.append("logo", self.form.logo);
            this.$inertia.post(route('admin.brand.store'), formData,{
                preserveState: true,
                preserveScroll: true,               
                onBefore: () => confirm('Are you sure you want to delete this user?'), 
                onStart: () => alert('onStart'),
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