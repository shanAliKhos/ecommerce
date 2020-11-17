<template>
<div>
    <nav class="text-sm font-semibold mb-5" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
            <li class="flex items-center text-blue-500"> 
                <inertia-link :href="route('admin.dashboard')" class="text-gray-700">Home</inertia-link>        
                <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li class="flex items-center">
                <a href="#" class="text-gray-600">Create Category</a>
            </li>
        </ol>
        <inertia-link 
            :href="route('admin.category.index')" 
            class="transition duration-700 ease-in-out bg-red-400 hover:bg-red-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center float-right"
            >  
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>            
            <span>Back</span>            
       
        </inertia-link>        
    </nav>
    <p class="text-xl pb-6 flex items-center">Create Category</p>        
    <div class="flex justify-center">
        <div class="w-full lg:w-1/2 pl-0 lg:pl-2">
            <div class="leading-loose ">

                <form class="p-10 bg-white rounded shadow-xl"  @submit.prevent="store">

                    <p class="text-lg text-gray-800 font-medium pb-4">Category information</p>
                    
                    <div class="">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="cus_name">Name</label>
                        <input v-model="form.name" class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text"  placeholder="Name" aria-label="Name">
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>
                    </div>

                    <div class="mt-2"> 
                        <textarea v-model="form.description" class="resize-none border w-full py-5 px-5 text-gray-700 bg-gray-200  rounded focus:outline-none focus:shadow-outline"
                            placeholder="Category Description here ... "
                        ></textarea> 
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.description">{{$page.errors.description}}</p>
                    </div>

                    <div class="mt-2"> 
                        <multiselect 
                            v-model="form.parent" 
                            deselect-label="Can't remove this value" 
                            track-by="name"  
                            label="name" 
                            placeholder="Parent Category" 
                            :options="Categories" 
                            :searchable="false" 
                            :allow-empty="true">
                        </multiselect>   
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.parent">{{$page.errors.parent}}</p>
                    </div>
                    
                    <div class="mt-2"> 
                        <file-input v-model="form.image" :error="$page.errors.image" class="pr-6 pb-8 w-full w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" type="file" accept="image/*" label="Photo" :preview="true"/>
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.parent">{{$page.errors.parent}}</p>
                    </div>
                    
                    <div class="flex flex-wrap -mx-3 mb-2">
    
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" 
                                for="featured">
                                Is Featured ?
                            </label>
                            <div class="relative">
                                <select v-model="form.is_featured" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  > 
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
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="MENU">
                                MENU ?
                            </label>
                            <div class="relative">
                                <select v-model="form.menu" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                    <option :value="true">YES</option>
                                    <option :value="false">No</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.menu">{{$page.errors.menu}}</p>                        
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-state">
                                Status
                            </label>
                            <div class="relative">
                                <select v-model="form.is_active" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option :value="false">Disable</option>
                                    <option :value="true">Active</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <p class="text-red-500 text-xs italic" v-if="$page.errors.is_active">{{$page.errors.is_active}}</p>                        
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
import FileInput from './../../Shared/FileInput'        
import TextInput from './../../Shared/TextInput'   
import SelectInput from './../../Shared/SelectInput'   
import LoadingButton from './../../Shared/LoadingButton'   
import Multiselect from 'vue-multiselect'

export default {
    metaInfo: { title: 'Category-create' },
    layout: AppLayout, 
    components:{
        FileInput,
        TextInput,
        SelectInput,
        LoadingButton,
        Multiselect,
    },
   
    data() {
        return {
            form:{
                name:null,
                description:null,
                parent:null,
                is_featured:false,
                menu:true,
                image: null,
                is_active:true,
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
            data.append('parent_id', self.form.parent?self.form.parent.id:null || '')
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
 