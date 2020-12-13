<template>
    <div class="transform-gpu leading-normal tracking-normal" id="main-body">
    
        <div class="flex flex-wrap">
    
            <Sidebar />
            
    
            <div class="w-full bg-gray-100 pl-0 lg:pl-64 h-screen " >
    
                <Navbar />
    
                <div class="p-5 bg-gray-100 min-h-screen">

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
  transition: .8s cubic-bezier(.8, .1, 1, .04); 

}
.slide-fade-leave-active {  
  transition: .3s cubic-bezier(.8, .1, 1, .04); 
}
 
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(500px);
  opacity: 0;
} 
 
</style>