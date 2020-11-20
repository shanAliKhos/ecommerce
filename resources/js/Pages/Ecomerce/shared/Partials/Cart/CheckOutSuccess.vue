<template>
   <div class="container border-t border-grey-dark">
  <h1 class="display-3">Thank You!</h1>
  <p class="lead"><strong>Please check your email</strong> for further.</p>
  <hr>
  <p>
    Having trouble? <inertia-link :href="$route('contact')">Contact us</inertia-link>
  </p>
  <p class="lead">
    <inertia-link class="primary-btn" :href="$route('shop.index')" >Continue to shopping</inertia-link>
  </p>
</div>
</template>
<script>
import AppLayout from './../../AppLayout'  
   
export default {
    layout: AppLayout,  

    mounted() {
      setTimeout(() => { 
        this.$inertia.get(route('shop.index'))
      }, 15000);
    },
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