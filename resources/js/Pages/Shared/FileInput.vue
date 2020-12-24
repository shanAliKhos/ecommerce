<template>
  <div class="mt-1 relative border-2 border-gray-200 bg-gray-50">

    <input ref="file" type="file" :accept="accept" class="hidden" @change="change" :class="{'is-invalid': error}">
 
    <label v-if="label" class="absolute rounded-lg top-0 right-0  text-purple-700  px-1 text-xs font-semibold uppercase" :for="label">{{ label }}</label>
    
    <div class="mt-3"> 
        <img :src="imagePreview" alt="Current Photo" class="rounded h-auto w-auto md:w-52 object-cover" v-if="showPreview"/> 
    </div>         

    <div class="mt-2"> 
        <button type="button" class="mt-1 mr-1 inline-flex items-center px-2 py-1 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150" @click="browse">
          New Photo
        </button>  
        <!-- <div class="flex-1 pr-1" v-if="value.name">{{ value.name }} <span class="text-gray-500 text-xs">({{ filesize(value.size) }})</span></div>  -->
        <button v-if="value" type="button" class="mt-1 inline-flex items-center px-2 py-1 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150" @click="remove">
          Remove Photo
        </button> 
    </div>
    <p class=" text-red-500 text-xs italic" v-if="error">{{error}}</p>                        

  </div>
</template>

<script>
export default {
  props: {
    value: null,
    label: String,
    accept: String,
    preview: false,
    preview_img: null,
    defualt_preview_img: String,
    error:String,
  },
  data() {
    return {
      imagePreview:null,
      showPreview:false,
    }
  },
  watch: {
    value(value) {
      if (!value) {
        this.$refs.file.value = ''
      }
    },
    defualt_preview_img(){
      if (!this.value) {
        this.imagePreview = this.defaultPhotoUrl();
      }

    }    
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024))
      return (size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    },
    browse() {
      this.$refs.file.click()
    },
    change(e) {
      this.$emit('input', e.target.files[0])

      const reader = new FileReader();
      reader.onload = (e) => {
          this.imagePreview = e.target.result
          this.showPreview = true
      };
      reader.readAsDataURL(this.$refs.file.files[0]);      

    },
    remove() {
      this.$emit('input', null)
      this.imagePreview =  this.defaultPhotoUrl()
 
    },
    defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='+this.defualt_preview_img+'&color=7F9CF5&background=EBF4FF';
    },      
  },
  created() {
    if(this.preview_img){
      this.imagePreview = this.preview_img.replace("public", "storage");
      this.showPreview = true;
    }else{
      this.imagePreview = this.defaultPhotoUrl();
      this.showPreview = true;
    }


  },
}
</script>
 