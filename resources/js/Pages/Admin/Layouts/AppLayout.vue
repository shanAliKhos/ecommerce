<template>
    <div class=" leading-normal tracking-normal" id="main-body" :class="{'bg-gray-800 text-gray-300':false}">
    
        <div class="flex w-full h-full">
    
            <Sidebar class="bg-gray-100 text-gray-400" />
            
    
            <div class="w-full bg-gray-100 pl-0 lg:pl-64" >
    
                <Navbar class="bg-gray-100"/>
    
                <div class="px-2 py-2 bg-gray-100 h-full">

                    <transition name="slide-fade">
 
                        <slot></slot> 
                            
                    </transition>
                </div>
    
                <Footer />
                <FlashMessage v-if="$page.flash"></FlashMessage>
                <portal-target name="modal" multiple>
                </portal-target>
    
            </div>
        </div>
    </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style> 

<script> 
    import Sidebar from './partials/Sidebar'
    import Navbar from './partials/Navbar'
    import Footer from './partials/Footer'
    import FlashMessage from './../../Shared/FlashMessage'   



    export default {
        name: 'Dashboard',
     
        components: {
            Sidebar,
            Navbar,
            Footer,
            FlashMessage,
        },
  
    }
</script>
<style scoped>
.slide-fade-enter-active {  
  transition:all 0.8s ease-in-out .2s; 

}
.slide-fade-leave-active {  
  transition:all 0.3s ease-in-out; 
}
 
.slide-fade-enter, .slide-fade-leave-to{
  transform: translate(200px); 
  opacity: 0;
} 
 
</style>