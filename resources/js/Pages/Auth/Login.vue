<template> 
<div class="flex flex-col items-center justify-center px-5">

  <div class="flex flex-col bg-white shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md z-20">
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-primary">Login To Your Account</div>
    <!-- <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
      <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-facebook-f"></i></span>
      <span>Login with Facebook</span>
    </button> -->
    <div class="relative  h-px bg-gray-300">
      <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span class="bg-white px-4 text-xs text-gray-500 uppercase">Login With Email</span>
      </div>
    </div>
    <div class="mt-10">
      <form @submit.prevent="submit">
        <div class="flex flex-col py-2">
          <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
              <input v-model="form.email" id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
              <p class=" text-red-500 text-xs italic" v-if="$page.errors.email">{{$page.errors.email}}</p>
          </div>
        </div>
        <div class="flex flex-col py-2">
          <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>
            <input v-model="form.password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password"/> 
            <p class=" text-red-500 text-xs italic" v-if="$page.errors.password">{{$page.errors.password}}</p>

          </div>
        </div>

        <div class="flex items-center py-2">
          <div class="flex ml-auto">
            <inertia-link preserve-scroll :href="route('password.request')" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</inertia-link>
          </div>
        </div>

        <div class="flex w-full py-2">
          <button type="submit" :disabled="sending" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-orange-400 hover:bg-red-600 rounded py-2 w-full transition duration-150 ease-in ">
            <span class="mr-2 uppercase">Login</span>
            <span class="relative">
              <svg v-if="sending" class="transition  ease-in-out  animate-spin h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>                
              <svg v-else class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
    <div class="flex justify-center items-center py-2">
   
      <inertia-link preserve-scroll  :href="route('register')" target="_blank" class="flex w-full items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded py-2 w-full transition duration-150 ease-in ">
        <span>
          <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </span>
        <span class="ml-2">You don't have an account?</span>
      </inertia-link>
    </div>
  </div>
</div>

</template>
<script>
import AppLayout from './../Ecomerce/shared/AppLayout'  
// import LoadingButton from './../Shared/LoadingButton'
// import DialogModal from './../Shared/DialogModal'  
// import SecondaryButton from './../Shared/SecondaryButton'  
// import TextInput from './../Shared/TextInput'

export default {
  layout:AppLayout,
  metaInfo: { title: 'Login' },
  // components: {
  //   LoadingButton, 
  //   TextInput,
  //   DialogModal, 
  //   SecondaryButton,    
  // },
 
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        remember: null,
      },
      LoginModal:true,

    }
  },
  methods: {
    submit() {
      const data = {
        email: this.form.email,
        password: this.form.password,
        remember: this.form.remember,
      }

      this.$inertia.post(route('login'), data, {
        preserveState: true,
        // preserveScroll: true,             
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false,
      })
    },
  },
      
     mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },
}
</script>
