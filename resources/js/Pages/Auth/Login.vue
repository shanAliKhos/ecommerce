<template>
  <div class="bg-white min-h-screen flex justify-center">
    <div class="w-full max-w-md">  
      <form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden" @submit.prevent="submit">
        <div class="px-10 py-12"> 
          <h1 class="text-center font-bold text-3xl">LOGIN</h1>
          <div class="mx-auto mt-6 w-24 border-b-2" />
          <text-input v-model="form.email" :error="errors.email" class="mt-10" label="Email" type="email" autofocus autocapitalize="off" />
          <text-input v-model="form.password" class="mt-6" label="Password" type="password" :readonly="true"/>
          <label class="mt-6 select-none flex items-center" for="remember">
            <input id="remember" v-model="form.remember"  class="mr-1" type="checkbox">
            <span class="text-sm">Remember Me</span>
          </label>
        </div>
        <div class="px-10 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
          <a class="hover:underline" tabindex="-1" :href="$route('password.request')">Forget password?</a>
          <loading-button :loading="sending" class="btn btn-info" type="submit">Login</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppLayout from './../Ecomerce/shared/AppLayout'  
import LoadingButton from './../Shared/LoadingButton'
import TextInput from './../Shared/TextInput'

export default {
  layout:AppLayout,
  metaInfo: { title: 'Login' },
  components: {
    LoadingButton, 
    TextInput,
  },
  props: {
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: {
        email: 'user@shopping.com',
        password: 'password',
        remember: null,
      },
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
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false,
      })
    },
  },
}
</script>
