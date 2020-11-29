<template>
<div> 
    
    <app-header></app-header>
    
    <main>
        
        <transition enter-active-class="ease-out duration-400"
            enter-class="opacity-0 transform translate-y-6"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-500"
            leave-class="opacity-100"
            leave-to-class="opacity-0">       

                <slot></slot>

        </transition>    
        
    </main>        

    <app-footer></app-footer>

    <portal-target name="modal" multiple>
    </portal-target>

    <flash-message v-if="$page.flash"></flash-message> 

    <!-- <dialog-modal :show="LoginModal" @close="LoginModal = false">
        <template #title>
            Login
        </template>

        <template #content> -->

            <!-- <login-form></login-form>        -->
  
        <!-- </template>

        <template #footer>
            <secondary-button @click.native="LoginModal = false">
                Nevermind
            </secondary-button>
 
        </template>
    </dialog-modal> -->

</div> 
</template>

<script>  
    import AppHeader from './Partials/AppHeader' 
    import AppFooter from './Partials/AppFooter'  
    // import DialogModal from './../../Shared/DialogModal'  
    // import SecondaryButton from './../../Shared/SecondaryButton'  
    // import LoginForm from './../../Auth/Login'  
    // import FlashMessage from './Partials/components/FlashMessage'  
    import FlashMessage from './../../Shared/FlashMessage'  
 

    export default {
        components: {  
            AppHeader,
            AppFooter, 
            FlashMessage,
            // DialogModal,
            // LoginForm,
            // SecondaryButton,
        },  
        // data() {
        //     return {
        //         LoginModal:true,
        //     }
        // }, 
 

        
    }
</script>
<style scoped>
#nprogress .bar {
  background: #fb6d11; 
}
#nprogress .spinner-icon {
  border-top-color:#fb6d11;
  border-left-color: #fb6d11; 
}
#nprogress .peg { 
  box-shadow: 0 0 10px #fb6d11, 0 0 5px #fb6d11; 
}
</style>