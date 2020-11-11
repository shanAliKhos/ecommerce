<template>
  <div>  
    <Header></Header>

    <SideBar></SideBar>
   
    <main class="app-content">
        <Flash v-if="$page.flash"></Flash> 
        <slot></slot>     
    </main> 
    <!-- Modal Portal -->
    <portal-target name="modal" multiple>
    </portal-target>

  </div>
</template>

<script>   
    import Header from './partials/Header' 
    import SideBar from './partials/SideBar' 
    import Flash from './../../Shared/Flash' 

    export default {
        components: {  
            Header,
            SideBar,
            Flash,
        },        

   
 
        
    }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>