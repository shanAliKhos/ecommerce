<template>
<div>
  <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex text-blue-400">
          <li class="flex items-center"> 
              <inertia-link :href="route('admin.dashboard')">Home</inertia-link>        
              <svg class="w-3 h-3 mx-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li class="flex items-center">
              <a href="#">Customer Listing</a>
          </li>
      </ol>

      <BackButton/>        

  </nav>    
  <div class="my-8 p-10 bg-white rounded shadow-2xl">
    <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
      <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" > 
        <div class="flex flex-col justify-center items-center relative h-full bg-profile-bg bg-opacity-50 text-white">
          <img :src="Image" class="h-24 w-24 object-cover rounded-full">
          <h1 class="text-2xl font-semibold">{{Customer.name}}</h1>
          <h4 class="text-sm font-semibold">Joined Since {{CreatedAt}}</h4>
        </div>
      </div>
      <div class="grid grid-cols-12 bg-white ">

        <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

          <a href="#" class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</a>
    
        </div>

        <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
          <div class="px-4 pt-4">
            <form action="#" class="flex flex-col space-y-8">

              <div>
                <h3 class="text-2xl font-semibold">Basic Information</h3>
                <hr>
              </div>

              <div class="form-item">
                <label class="text-xl ">Full Name</label>
                <div  class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">{{Customer.name}}</div>
              </div>
              <div class="form-item">
                <label class="text-xl ">Email</label>
                <div  class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">{{Customer.email}}</div>
              </div>

    
              <!-- <div>
                <h3 class="text-2xl font-semibold ">More About Me</h3>
                <hr>
              </div>

              <div class="form-item w-full">
                <label class="text-xl ">Biography</label>
                <textarea cols="30" rows="10" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
              </div>

              <div>
                <h3 class="text-2xl font-semibold">My Social Media</h3>
                <hr>
              </div>

              <div class="form-item">
                <label class="text-xl ">Instagram</label>
                <input type="text" value="https://instagram.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>
              </div>
              <div class="form-item">
                <label class="text-xl ">Facebook</label>
                <input type="text" value="https://facebook.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>
              </div>
              <div class="form-item">
                <label class="text-xl ">Twitter</label>
                <input type="text" value="https://twitter.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled>
              </div> -->

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
import BackButton from './../../Shared/BackButton'    

export default {
    metaInfo() {
        return { title: `${this.$page.customer.name} show` }
    },        
    components:{
      BackButton,
    },
    layout: AppLayout,  
    computed: {
        Customer(){
            return this.$page.customer;
        }, 
        Image(){
            return this.$page.customer.profile_photo_url;
        }, 
        CreatedAt(){
            return this.$page.customer.created_at;
        }, 
    },    
 
    mounted() { 
        const self = this
        self.$root.$emit('sidebar-close');
    },
     
}
</script>