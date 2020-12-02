<template>
    <div class="leading-normal tracking-normal" id="main-body">
    
        <div class="flex flex-wrap">
    
            <Sidebar />
            
    
            <div class="w-full bg-gray-100 pl-0 lg:pl-64 h-screen " >
    
                <Navbar />
    
                <div class="p-5 bg-gray-100 min-h-screen">

                <transition enter-active-class="transition duration-300 ease-out"
                    enter-class="transform opacity-0"
                    enter-to-class="transform delay-150 opacity-0"
                    leave-active-class="transition duration-200 ease-in"
                    leave-class="transform delay-75 opacity-0 "
                    leave-to-class="transform opacity-0">  

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
 