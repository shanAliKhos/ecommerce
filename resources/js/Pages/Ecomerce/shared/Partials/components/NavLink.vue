<template>
<li >
  <div
    :disabled="loading"
    v-bind="$attrs"
    @click="send"
    class="flex justify-center items-center cursor-pointer flex-inline transition duration-500 ease-in-out transform w-full px-5 w-full" :class="classes"
  >
    <svg
      :class="{ 'animate-spin': loading }"
      class="transition ease-in-out pointer-events-none h-7 w-auto fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        v-if="loading"
        fill-rule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clip-rule="evenodd"
      />
      <slot name="icon" v-else></slot>
    </svg>
    <slot />
  </div>    
    <!-- <inertia-link :href="href" class="transition duration-500 ease-in-out transform  px-2" :class="classes"> -->
        <!-- <slot></slot> -->
    <!-- </inertia-link>      -->
</li> 
</template>

<script>
    export default {
        props: ['href', 'active','atTopOfPage'],  
        data() {
            return {
                loading:false,
            }
        },        
        methods: {
          send(){  
            const self=this;
            self.$inertia.visit(this.href, {
                method: 'get', 
                onStart:  () => self.loading = true,  
                onSuccess:  () => self.loading = false,  
                onCancel: () => self.loading = false,
            })            
 
             
          },
        },        
        computed: { 
            classes(){
                let is_active = this.active? 'text-center block font-semibold text-orange-500 border-b-4 border-orange-500 px-2':'hover:-translate-x-1 block font-semibold  hover:text-orange-300  border-b-4 hover:border-orange-300 px-2';
                let is_atTop = this.atTopOfPage ? 'scale-100 md:scale-100': 'fixed top-0 scale-75 md:scale-75'; 
                return is_active.concat(is_atTop);
            }, 
             
            IsAtTop(){
                this.atTopOfPage?true:false;
            }

        }
    }
</script> 