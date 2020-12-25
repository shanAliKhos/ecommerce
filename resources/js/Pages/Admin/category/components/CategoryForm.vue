<template>
<form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="store">

    <p class="pb-6 flex font-semibold text-xl text-gray-400">Category Edit</p>    

    
    <div class="flex flex-wrap  mb-2">
 
        <div class=" w-full md:w-1/3">
            <label for="is_active" class="flex items-center cursor-pointer">
                <div :class="{'text-green-400':form.is_active,'text-red-500':!form.is_active}" class="px-2 font-semibold ">Active</div>
                <div class="relative">
                    <input id="is_active" type="checkbox" class="hidden" v-model="form.is_active" />
                    <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                    <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
            </label>
            <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_active">{{$page.errors.is_active}}</p>
        </div>      

        <div class=" w-full md:w-1/3">
            <label for="is_featured" class="flex items-center cursor-pointer">
                <div :class="{'text-green-400':form.is_featured,'text-red-500':!form.is_featured}" class=" px-2 font-semibold ">Featured</div>
                <div class="relative">
                    <input id="is_featured" type="checkbox" class="hidden" v-model="form.is_featured" />
                    <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                    <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
            </label> 
            <p class="text-red-500 text-xs italic"  v-if="$page.errors.is_featured">{{$page.errors.is_featured}}</p>
        </div>      

        <div class="w-full md:w-1/3">
            <label for="menu" class="flex items-center cursor-pointer">
                <div :class="{'text-green-400':form.menu,'text-red-500':!form.menu}" class="px-2 font-semibold ">InMenu</div>
                <div class="relative">
                    <input id="menu" type="checkbox" class="hidden" v-model="form.menu" />
                    <div class="toggle-path bg-red-400 w-9 h-5 rounded-full shadow-inner" ></div>
                    <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
            </label>
            <p class="text-red-500 text-xs italic"  v-if="$page.errors.menu">{{$page.errors.menu}}</p>
        </div>        

        <div class="w-full  mt-2 ">
            <file-input 
            v-model="form.image" 
            :defualt_preview_img="form.name" 
            :preview_img="form.image" 
            :error="$page.errors.image" 
            class="pb-8 w-full  px-5 py-2 text-gray-700 rounded" 
            type="file" 
            accept="image/*" 
            label="Image" 
            :preview="true"/>
        </div>                                  
            
        <text-input 
            id="name" 
            type="text" 
            class="w-full md:mb-0" 
            :fixedClasses="'right-3 z-50'" 
            v-model="form.name"  
            :error="$page.errors.name"
            label='Name'    
            :labelRequire='true'    
        placeholder="Name"  /> 

    
        <div class="w-full  md:mb-0  mt-2 relative"> 
            <label class="z-20 absolute top-0 right-0 text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="weight">Parent Category</label>
            <multiselect 
                v-model="form.parent" 
                deselect-label="Can't remove this value" 
                track-by="name"  
                label="name" 
                placeholder="Parent Category" 
                :options="CategoriesOptions" 
                :searchable="false" 
                :allow-empty="true">
            </multiselect>   
            <p class="text-red-500 text-xs italic" v-if="$page.errors.parent">{{$page.errors.parent}}</p>
        </div>                             

                    
  

    </div>  

    <div class="mt-2 relative"> 
        <label class="z-20 absolute top-0 right-0 text-purple-600 px-1 py-0 text-xs font-bold uppercase" for="weight">Description</label>
        <vue-editor v-model="form.description"></vue-editor>    
        <p class="text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
    </div>

    <SectionBorder/>

    <div class="flex items-center justify-end px-4 py-3  text-right sm:px-6">
        <loading-button :loading="sending" class="flex items-center uppercase transition duration-700 ease-in-out bg-green-400 hover:bg-green-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center mr-2" type="submit" as="button">
            <span>Update</span>
            <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>                
        </loading-button>          
    </div>    

</form>   
</template>
<script>   
import Multiselect from 'vue-multiselect'
import { VueEditor } from "vue2-editor";
import FileInput from './../../../Shared/FileInput'        
import TextInput from './../../../Shared/TextInput'   
import SelectInput from './../../../Shared/SelectInput'   
import LoadingButton from './../../../Shared/LoadingButton'   
import BackButton from './../../../Shared/BackButton'   
import SectionBorder from './../../../Shared/SectionBorder'   

export default { 
    components:{
        FileInput,
        TextInput,
        SelectInput,
        LoadingButton,
        BackButton,
        Multiselect,
        VueEditor,
        SectionBorder,
    },     
    remember: 'form',
    data() {
        return {
            form:{
                name:this.$page.category?this.$page.category.name:null,
                description:this.$page.category?this.$page.category.description:null,
                parent:this.$page.category?this.$page.category.parent:null, 
                is_featured:this.$page.category?this.$page.category.is_featured:false,
                menu:this.$page.category?this.$page.category.menu:false,
                image: this.$page.category?this.$page.category.photo_url:null,
                is_active:this.$page.category?this.$page.category.is_active:false,
            }, 
            imagePreview:'',
            showPreview: false,            
            sending:false,
         
        }
    },
    methods: {
        store() {
            const self = this; 
            let formData = new FormData()
            formData.append('name', self.form.name || '')
            formData.append('description', self.form.description || '')
            formData.append('parent_id', self.form.parent?self.form.parent.id:null || '')
            formData.append('menu', self.form.menu || '')
            formData.append('image', self.form.image || '')
            formData.append('is_active', self.form.is_active || '')
            if (self.$page.category) {
                formData.append('_method', 'put')
                
            }

            self.$inertia.post(self.$page.category?route('admin.category.update', self.$page.category.id):route('admin.category.index'), formData, {
                preserveState: true,        
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,                
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.name = null
                        this.form.description = null
                        this.form.parent = null
                        this.form.menu = null
                        this.form.image = null
                        this.form.is_active = null
                    }
                },                  
            })

                                      
        },
        
        
    },
    computed: {
        CategoriesOptions(){
            return this.$page.CategoriesOptions;
        },
        ButtonTitle(){ 
            return this.$page.attribute?'Update':'Save';
        },
        Editing(){
            return this.$page.attribute?true:false;
        },              
    },     
     
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
  
}
</script>
 