<template>
<div class="font-serif"> 
    
    <app-header></app-header>
    
    <main class=" md:mt-40 mt-20 ">

        <transition name="slide-fade">

            <slot></slot>

        </transition>    
        
    </main>         

    <app-footer></app-footer>

    <portal-target name="modal" multiple>
    </portal-target>

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
  transition:all .8s cubic-bezier(.2, .1, .8, .04); 

}
.slide-fade-leave-active {  
  transition:all .3s cubic-bezier(.2, .1, .8, .04); 
}
 
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-100%); 
  opacity: 0;
} 
 
 
</style>