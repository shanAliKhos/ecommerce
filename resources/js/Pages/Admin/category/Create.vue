<template>
    <div>
        <div class="app-title">
            <div>
                <h1><i class="fa fa-tags"></i>  Categories </h1>
            </div>
        </div>
    
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="tile">
                    <h3 class="tile-title"> Create </h3>
                    <form @submit.prevent="store()">
                        <div class="tile-body">
                            <text-input  
                            v-model="form.name" :error="$page.errors.name" 
                            class="form-group" label="Name" labelRequire="true" placeholder="Enter Name" />                        
 
                            <!-- <div class="form-group">
                                <label class="control-label" for="name">Name <span class="m-l-5 text-danger"> *</span></label>
                                <input 
                                :class="{'is-invalid': $page.errors.name ,'form-control':true}"
                                type="text" name="name" id="name" 
                                v-model="form.name" />
                                <div class="invalid-feedback active">
                                    <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.name }}</span> 
                                </div>                                                        
                            </div> -->

                            <div class="form-group">
                                <label class="control-label" for="description">Description</label>
                                <textarea  v-model="form.description" placeholder="add multiple lines" class="form-control" rows="4" name="description" id="description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="parent">Parent Category <span class="m-l-5 text-danger"> *</span></label>
                                <select 
                                    v-model="form.parent_id"
                                    :class="{'is-invalid': $page.errors.parent_id ,'form-control custom-select mt-15':true}" 
                                    name="parent_id"
                                    >
                                    <option>Select a parent category</option>
                                    <option v-for="(Category, CategoryIndex) in Categories" :key="CategoryIndex" :value="Category.id"> {{ Category.name }} </option>
                                </select> 
                                <div class="invalid-feedback active">
                                    <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ $page.errors.parent_id }}</span> 
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
                                <file-input v-model="form.image" :error="$page.errors.image" class="pr-6 pb-8 w-full" type="file" accept="image/*" label="Photo" :preview="true"/>
                            </div>
                        </div>
                        <div class="tile-footer">
                            <loading-button :loading="sending" class="btn btn-primary" type="submit">Save Category</loading-button>

                            <inertia-link class="btn btn-secondary" :href="$route('admin.category.index') "><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</inertia-link>
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
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput'   
import LoadingButton from './../../Shared/LoadingButton'   

export default {
    metaInfo: { title: 'Category-create' },
    layout: AppLayout, 
    components:{
        FileInput,
        TextInput,
        SelectInput,
        LoadingButton,

    },
   
    data() {
        return {
            form:{
                name:null,
                description:null,
                parent_id:null,
                is_featured:false,
                menu:null,
                image: null,
                is_active:false,
            },
            sending:false,
        }
    },
    methods: {
        store() {
            const self = this
            const data = new FormData()
            data.append('name', self.form.name || '')
            data.append('description', self.form.description || '')
            data.append('parent_id', self.form.parent_id || '')
            data.append('is_featured', self.form.is_featured || '')
            data.append('menu', self.form.menu || '')
            data.append('image', self.form.image || null) 
            data.append('is_active', self.form.is_active || '') 

            self.$inertia.post(route('admin.category.store'), data, {
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
            })
        },
    },  
    computed: {
        Categories(){
            return this.$page.Categories;
        }
    },  
}
</script>
 