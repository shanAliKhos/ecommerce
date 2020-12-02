<template> 

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Verify Email</div>
 
    <div class="relative mt-10 h-px bg-gray-300 mb-15">
      <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span class="bg-white px-4 text-xs text-gray-500 uppercase">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.</span>
      </div>
    </div>
    <div class="mt-10">
      <form @submit.prevent="submit">    
          <div class="flex w-full mt-2 mb-2">
            <button :disabled="sending" type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
              <span class="mr-2 uppercase">Resend Verification Email</span>
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
          <div class="flex w-full mt-2 mb-2">

            <inertia-link 
                :href="route('logout')" 
                @click="sendinglogout = true"
                method="post"   
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in" 
                type="button">  
                <span class="mr-2 uppercase">LOGUOT</span>
                <svg v-if="sendinglogout" class="transition  ease-in-out  animate-spin h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                </svg>                
                <svg v-else class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </inertia-link>  


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
  metaInfo: { title: 'email verification' },
 
 
  data() {
    return {
      sending: false,
      sendinglogout: false,
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

      this.$inertia.post(route('verification.send'), data, {
        preserveState: true,
        preserveScroll: true,               
        onStart: () => this.sending = true,
        onFinish: () => {
          this.sending = false
        },
        onSuccess: () => {
          this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              icon: 'success',
              title: 'verification-link-sent',
          }) 
          setTimeout(() => {
            this.$inertia.get(route('welcome'))
          }, 2000);          
        },
      })
    },
  },
    
     mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },  
}
</script>
