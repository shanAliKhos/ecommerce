<template>
<div> 
    
    <app-header></app-header>
    
    <main>

        <transition enter-active-class="transition duration-300 ease-out"
            enter-class="transform opacity-0"
            enter-to-class="transform delay-150 opacity-0"
            leave-active-class="transition duration-200 ease-in"
            leave-class="transform delay-75 opacity-0 "
            leave-to-class="transform opacity-0">  


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
 