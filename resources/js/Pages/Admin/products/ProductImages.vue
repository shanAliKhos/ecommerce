<template>
    <div class="product-image-section">
        <h3 class="tile-title">Upload Image</h3>
        <hr>
        <div class="tile-body" >
            
            <div class="row">
                <div class="col-12">
                    <!-- <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true"   ref="myVueDropzone" id="dropzone"> -->
                    <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true" @vdropzone-success="UploadSuccess" ref="myVueDropzone" id="dropzone">
                        <div class="dropzone-custom-content">
                            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                            <div class="subtitle">...or click to select a file from your computer</div>
                        </div>
                    </vue-dropzone>  
                </div> 
            </div> 
             
            <hr>
        
            <div class="row"> 
                <div class="col-md-3" v-for="(Image, index) in Images" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <img :src="ProductImage(Image.image)" id="brandLogo" class="img-fluid" alt="img">
                            <a class="card-link float-right text-danger" href="javascript:;" @click="destroy(Image.id)">
                                <i class="fa fa-fw fa-lg fa-trash"></i>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
              
        </div>
    </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    props:['id','Images'],
    components:{
        vueDropzone: vue2Dropzone,
    },
    data() {
        return {
            dropzoneOptions: {
                url: route('admin.product.images.upload',this.id),
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { 
                  "X-CSRF-TOKEN" : this.$page.__csrf_token
                },
              
            },
            sending:false,
        }
    }, 

    methods: {
        UploadSuccess(){   
            const self = this;
            self.$root.$emit('image-upload-success')
            setTimeout(() => {
                self.$root.$emit('image-upload-success');
            }, 500);            
        }, 
        destroy(id) {
            const self = this;
            self.$inertia.delete(route('admin.product.images.destroy',id),{
                preserveState: true,
                preserveScroll: true
            }) 
            setTimeout(() => {
                self.$root.$emit('image-upload-success');
            }, 500);
        }, 
        ProductImage(image){
            self = this ;
            var  img = (image)?APP_URL+'/'+image.replace("public", "storage"):APP_URL+'/'+image;
            return img;      
        },  
    },
  
}
</script>