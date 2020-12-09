<template>
<div> 
    
    <app-header></app-header>
    
    <main class="lg:mt-40">

        <transition enter-active-class="transition duration-300 ease-out"
            enter-class="transform opacity-0"
            enter-to-class="transform delay-150 opacity-0"
            leave-active-class="transition duration-200 ease-in"
            leave-class="transform delay-75 opacity-0 "
            leave-to-class="transform opacity-0">  


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
 