<template>
    <div class="sticky top-0 z-40">

            <div class="w-full h-20 px-6 bg-gray-100 border-b border-gray-300 flex items-center justify-between">

              <!-- left navbar -->
              <div class="flex">

                <!-- mobile hamburger -->
                <div class="inline-block lg:hidden flex items-center mr-4">
                  <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger" @click="toggleSidebar()" >
                    <svg class="h-5 w-5" v-bind:style="{ fill: 'black' }" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>

                <!-- search bar -->
                <!-- <div class="relative text-gray-600">
                  <input type="text" 
                    name="search" 
                    placeholder="Search products..." 
                    class="transition duration-500 ease-in-out bg-gray-100  px-5 py-2 rounded-lg border  text-sm focus:outline-none focus:shadow  border-gray-200 hover:shadow  focus:placeholder-green-400">
                    <button name="searchbtn" type="button" class="absolute right-0 top-0 mt-3 mr-4 transition duration-500 ease-in-out text-gray-300 hover:text-blue-400 focus:outline-none focus:text-blue-500">
                      <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                      </svg>
                    </button>
                </div> -->
              </div> 
              
              <!-- right navbar -->
              <div class="ml-3 relative">
                  <button class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true"  @click="dropDownOpen = !dropDownOpen">
                    <img class="w-12 h-12 rounded-full shadow-lg" :src="UserProdileImage" alt="">
                  </button> 
                  <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" :class="dropDownOpen ? '' : 'hidden'">


                    <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                      <h2 class="block px-4 py-2 text-sm text-gray-300 ">{{AuthUser.name}}</h2>

                      <inertia-link 
                       :href="route('profile.show')" 
                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                       role="menuitem"
                       preserve-scroll
                       >Your Profile</inertia-link>

                      <inertia-link 
                          :href="route('logout')" 
                          method="post"   
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                          type="button">  
                          <span>Logout</span>
                      </inertia-link>  


                      
                    </div>
                  </div>
              </div>        

   
            </div>
 

    </div>
</template>

<script> 

export default {
    name: 'Navbar',
    data() {
        return {
            dropDownOpen: false
        }
    },
    methods: {
        toggleSidebar() {
            this.$root.$emit('toggle-sidebar')
        }
    },
    computed: {
      UserProdileImage(){
        return this.$page.user.profile_photo_url;
      },
      AuthUser(){
        return this.$page.user;
      },
    }
}
</script>