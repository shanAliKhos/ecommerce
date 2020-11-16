<template>
<div>
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="  w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Edit Brand</a>
            </li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="tile">
                <h3 class="tile-title">Edit</h3>
                 <form @submit.prevent="update()" id="myForm">
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
                            <label class="control-label" for="name">Slug <span class="m-l-5 text-danger"> *</span></label>
                            <input 
                            type="text" 
                            name="slug"
                            id="slug"
                            :class="{'is-invalid': $page.errors.slug ,'form-control':true}" 
                            v-model="form.slug"
                            />
                            <div class="invalid-feedback active">
                                <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.slug }}</span> 
                            </div>                           
                        </div>
                        <div class="form-group">
                            <label class="control-label">Brand Logo</label>                          

                            <div class="col-12"> 

                                <input type="file" name="logo"
                                :class="{'is-invalid': $page.errors.logo }" 
                                id="logo" @change="onFileChange">
                                
                                <a class="card-link float-right text-danger" href="javascript:;" @click="removeImage()" v-if="showPreview">
                                    <i class="fa fa-fw fa-lg fa-trash"></i>
                                </a> 
                                <img :src="imagePreview" width="100" height="100"  class="img-thumbnail" v-if="showPreview"/> 
                                <img :src="ProductImage($page.brand.logo)" width="100" height="100"  class="img-thumbnail" v-else-if="($page.brand.logo !== '' && !showPreview)"/> 
                            </div>
                        
                            <div class="invalid-feedback active">
                                <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.logo }}</span> 
                            </div>
                        </div>                        
                    </div>
                    <div class="tile-footer">
            
                    <loading-button :loading="sending" class="btn btn-primary" type="submit">Update Brand</loading-button>
                    
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
import LoadingButton from './../../Shared/LoadingButton'   

export default {
    metaInfo: { title: 'Brand-edit' },
    components:{
        LoadingButton,
    },
    layout: AppLayout, 
    remember: 'form',
    data() {
        return {
            form: {
                name: this.$page.brand.name,
                slug: this.$page.brand.slug,
                logo: this.$page.brand.logo,
            },     
            imagePreview:'',
            showPreview: false,            
            sending:false,
         
        }
    },

    methods: {
        update() {
            const self = this; 
            let data = new FormData()
            data.append('name', this.form.name || '')
            data.append('slug', this.form.slug || '')
            data.append('logo', this.form.logo || '')
            data.append('_method', 'put')

            this.$inertia.post(route('admin.brand.update', this.$page.brand.id), data, {
                preserveState: true,
                preserveScroll: true,             
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,           
            })

                                      
        },
        onFileChange(event){
            const self = this;
            if ( /\.(jpe?g|png|gif)$/i.test( event.target.files[0].name ) ) {
                self.form.logo = event.target.files[0];
                self.ShowImage();
            }else{
                self.$toasted.error('Fail ! invaild file'); 
                self.showPreview = false;
            }
            
        }, 
        ShowImage() {
            const self = this;
            let reader  = new FileReader();
            reader.addEventListener("load", function () {

                self.showPreview = true;
                self.imagePreview = reader.result;

            }.bind(self), false); 
            if( self.form.logo ){

                if ( /\.(jpe?g|png|gif)$/i.test( self.form.logo.name ) ) {
 
                    reader.readAsDataURL( self.form.logo );
                }
            }
        },

        ProductImage(image){
            self = this ;
            var  img ;
            if(image){
                img = (image)?'/'+image.replace("public", "storage"):'/'+image;
            }
            return img;      
        }, 

        removeImage: function (e) {
            const self = this;
            self.showPreview = false;
            self.form.logo = '';
            self.imagePreview = '';

        },
 
   
    },  
 

}
 </script>
<style scoped>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}     
</style>