<template>
<div class="flex flex-col items-center justify-center ">
  <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10  rounded-md w-full max-w-md mt-20 py-10">
    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-orange-500">Thank You For Shopping !</div> 
    <div class="mt-10">
        <p class="lead p-10 text-gray-500"><strong>Please check your email</strong> for further.</p> 
    </div>

    <div class="py-2 shadow hover:shadow-2xl hover:border-gray-200 flex justify-center items-center mt-6">
      <inertia-link preserve-scroll  :href="route('shop.index')" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
        <span> 
        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>          
        </span>
        <span class="ml-2">Continue to shopping </span>
      </inertia-link>
    </div>    
 
      
  </div>
</div>
</template>
<script>
import AppLayout from './../shared/AppLayout'    
export default {
  metaInfo: { title: 'Thanks for shopping' },   
  layout: AppLayout,   
}
</script>
<style scoped>
.display-3{
    color:#7fad39 !important;
    font-size: 4.5rem !important;
    font-weight: 500 !important;
    line-height: 1.5 !important;    
}
    
</style>