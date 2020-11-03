<template>
<div class="jumbotron text-center">
  <h1 class="display-3">Thank You!</h1>
  <p class="lead"><strong>Please check your email</strong> for further.</p>
  <hr>
  <p>
    Having trouble? <inertia-link :href="$route('contact')">Contact us</inertia-link>
  </p>
  <p class="lead">
    <inertia-link class="primary-btn" :href="$route('shop')" >Continue to shopping</inertia-link>
  </p>
</div>
</template>
<script>
import AppLayout from './../shared/AppLayout'  

export default {
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