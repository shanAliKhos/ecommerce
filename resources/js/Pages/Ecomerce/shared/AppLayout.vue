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

</div> 
</template>

<script>  
    import AppHeader from './Partials/AppHeader' 
    import AppFooter from './Partials/AppFooter'  
    import FlashMessage from './Partials/components/FlashMessage'  
 

    export default {
        components: {  
            AppHeader,
            AppFooter, 
            FlashMessage,

        },         
 

        
    }
</script>
