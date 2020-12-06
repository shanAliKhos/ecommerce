<template>
 
 

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md z-20">
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-primary">Forget Password</div>
    <!-- <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
      <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-facebook-f"></i></span>
      <span>Login with Facebook</span>
    </button> -->
    <div class="relative mt-10 h-px bg-gray-300 mb-15">
      <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span class="bg-white px-4 text-xs text-gray-400 uppercase">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</span>
      </div>
    </div>
    <div class="mt-10">
      <form @submit.prevent="submit">
        <div class="flex flex-col mb-6">
          <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div class="relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
              <input v-model="form.email" id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address"   autofocus/>
              <p class=" text-red-500 text-xs italic" v-if="$page.errors.email">{{$page.errors.email}}</p>
          </div>
        </div>
   
        <div class="flex w-full">
          <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-red-600 rounded py-2 w-full transition duration-150 ease-in">
            <span class="mr-2 uppercase">Email Password Reset Link</span>
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
 
  </div>
</div>

</template>
<script>
import AppLayout from './../Ecomerce/shared/AppLayout'  
 

export default {
  layout:AppLayout,
  metaInfo: { title: 'forger-password' },
 
 
  data() {
    return {
      sending: false,
      form: {
        email: null, 
      },

    }
  },
  methods: {
    submit() {
      const data = {
        email: this.form.email, 
      }

      this.$inertia.post(route('password.email'), data, {
        preserveState: true,
        preserveScroll: true,               
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
