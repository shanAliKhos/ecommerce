<template>
<div> 
    
    <app-header></app-header>
    
    <main>
        <slot></slot>
    </main>        

    <app-footer></app-footer>

    <portal-target name="modal" multiple>
    </portal-target>

</div> 
</template>

<script>  
    import AppHeader from './Partials/AppHeader' 
    import AppFooter from './Partials/AppFooter'  
    import Flash from './../../Shared/Flash'  
 

    export default {
        components: {  
            AppHeader,
            AppFooter, 
            Flash,

        },         
 

        
    }
</script>
