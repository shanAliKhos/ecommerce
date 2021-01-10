<template>
<div class="font-serif select-none text-gray-600"> 
    
    <app-header></app-header>
     
    <main class="container mx-auto my-auto "> 
        <transition name="slide-fade">

            <slot></slot>

        </transition>     
    </main>         

    <app-footer></app-footer>

    <portal-target name="modal" multiple></portal-target>

    <flash-message v-if="$page.flash"></flash-message> 
 

</div> 
</template>

<script>  
    import AppHeader from './Partials/AppHeader' 
    import AppFooter from './Partials/AppFooter'  
    import FlashMessage from './../../Shared/FlashMessage'  
  

    export default {
        components: {  
            AppHeader,
            AppFooter, 
            FlashMessage, 
        },  

 

        
    }
</script>
<style scoped>
.slide-fade-enter-active {  
  transition:all 0.5s ease-in-out; 

}
.slide-fade-leave-active {  
  transition:all 0.3s ease-in-out; 
}
 
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(100px); 
  opacity: 0;
} 
 
 
</style>