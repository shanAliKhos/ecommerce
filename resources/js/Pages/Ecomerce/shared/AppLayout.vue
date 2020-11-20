<template>
<div> 
    
    <app-header></app-header>
    
    <main>
        <slot></slot>
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
    import FlashMessage from './Partials/components/FlashMessage'  
 

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
        created() {
            this.$root.$on('open-login-modal',()=>{

                this.LoginModal= true;

            });
        },
 

        
    }
</script>
