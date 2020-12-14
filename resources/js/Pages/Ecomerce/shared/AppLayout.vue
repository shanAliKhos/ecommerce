<template>
<div class="font-serif"> 
    
    <app-header></app-header>
    
    <main class="lg:mt-40 mt-20 ">

        <transition name="slide-fade">

            <slot></slot>

        </transition>    
        
    </main>         
    <!-- <div v-if="Authenticated">
        <Support></Support>
    </div> -->

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
    import Support from './../../Messenger/Support'  
 

    export default {
        components: {  
            AppHeader,
            AppFooter, 
            FlashMessage,
            Support,
 
        },  

        computed: {
            Authenticated(){
                if(this.$page.user){
                    return true
                }
                return false
                
            },
        },

        
    }
</script>
<style scoped>
.slide-fade-enter-active {  
  transition: .8s cubic-bezier(.8, .1, 1, .04); 

}
.slide-fade-leave-active {  
  transition: .3s cubic-bezier(.8, .1, 1, .04); 
}
 
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(500px);
  opacity: 0;
} 
 
</style>