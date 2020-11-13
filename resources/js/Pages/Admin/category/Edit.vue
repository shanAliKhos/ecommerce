<template>
<div>
    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Category </h1>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="tile">
                <h3 class="tile-title">Edit</h3>
                <form @submit.prevent="update()">
                    <div class="tile-body">
                        <div class="form-group">
                            <label class="control-label" for="name">Name <span class="m-l-5 text-danger"> *</span></label>
                            <input 
                            :class="{'is-invalid': $page.errors.name ,'form-control':true}" 
                            type="text" name="name" id="name" 
                            v-model="form.name"/> 
                            <div class="invalid-feedback active">
                                <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.name }}</span> 
                            </div>                               
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="description">Description</label>
                           <textarea  v-model="form.description" placeholder="add multiple lines" class="form-control" rows="4" name="description" id="description"></textarea>                         
                        </div>
                        <div class="form-group">
                            <label for="parent">Parent Category <span class="m-l-5 text-danger"> *</span></label>
                            <multiselect 
                                v-model="form.parent" 
                                deselect-label="Can't remove this value" 
                                track-by="name" 
                                :class="{'is-invalid': $page.errors.parent}"
                                label="name" 
                                placeholder="Parent Category" 
                                :options="Categories" 
                                :searchable="false" 
                                :allow-empty="true">
                            </multiselect>  
                            <div class="invalid-feedback active">
                                <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.parent }}</span> 
                            </div>                                                                          
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="form.is_featured" class="form-check-input" type="checkbox" id="featured" name="featured"/>Featured Category
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="form.menu" class="form-check-input" type="checkbox" id="menu" name="menu"/>Show in Menu
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="form.is_active" 
                                    :class="{'is-invalid': $page.errors.is_active ,'form-check-input':true}"
                                    type="checkbox" id="is_active" name="is_active"/>Active
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label">Brand Logo</label>                          

                            <div class="col-12"> 

                                <input type="file" name="image"
                                :class="{'is-invalid': $page.errors.image }" 
                                id="image" @change="onFileChange">
                                <div class="invalid-feedback active">
                                    <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.image }}</span> 
                                </div>
                                
                                <a class="card-link float-right text-danger" href="javascript:;" @click="removeImage()" v-if="showPreview">
                                    <i class="fa fa-fw fa-lg fa-trash"></i>
                                </a> 
                                <img :src="imagePreview" width="100" height="100"  class="img-thumbnail" v-if="showPreview"/> 
                                <img :src="ProductImage($page.Category.image)" width="100" height="100"  class="img-thumbnail" v-else-if="($page.Category.image !== '' && !showPreview)"/> 
                            </div>
                        
                        </div>    

                
                    </div>
                    <div class="tile-footer">
                        <loading-button :loading="sending" class="btn btn-primary" type="submit">Update Category</loading-button>

                        <inertia-link class="btn btn-secondary" :href="$route('admin.category.index')"><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</inertia-link>
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
import Multiselect from 'vue-multiselect'

export default {
    layout: AppLayout, 
    components:{
        LoadingButton,
        Multiselect,
    },    
    metaInfo: { title: 'Category-edit' },
    remember: 'form',
    data() {
        return {
            form:{
                name:this.$page.Category.name,
                description:this.$page.Category.description,
                parent:this.$page.Category.parent, 
                is_featured:this.$page.Category.is_featured,
                menu:this.$page.Category.menu,
                image: this.$page.Category.image,
                is_active:this.$page.Category.is_active,
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
            data.append('name', self.form.name || '')
            data.append('description', self.form.description || '')
            data.append('parent_id', self.form.parent.id || '')
            data.append('menu', self.form.menu || '')
            data.append('image', self.form.image || '')
            data.append('is_active', self.form.is_active || '')
            data.append('_method', 'put')

            self.$inertia.post(route('admin.category.update', this.$page.Category.id), data, {
                preserveState: true,
                preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,                
            })

                                      
        },
        onFileChange(event){
            const self = this;
            if ( /\.(jpe?g|png|gif)$/i.test( event.target.files[0].name ) ) {
                self.form.image = event.target.files[0];
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
            if( self.form.image ){

                if ( /\.(jpe?g|png|gif)$/i.test( self.form.image.name ) ) {

                    console.log("here");
               
                    reader.readAsDataURL( self.form.image );
                }
            }
        },

        ProductImage(image){
            self = this ;
            var  img = (image)?'/'+image.replace("public", "storage"):'/'+image;
            return img;      
        },  
        removeImage: function (e) {
            const self = this;
            self.showPreview = false;
            self.form.image = '';
            self.imagePreview = '';

        }, 
    },
    computed: {
        Categories(){
            return this.$page.Categories;
        }        
    },      
}
</script>
 