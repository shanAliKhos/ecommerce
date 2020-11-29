<template>
    <div class="leading-normal tracking-normal" id="main-body">
    
        <div class="flex flex-wrap">
    
            <Sidebar />
            
    
            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen " >
    
                <Navbar />
    
                <div class="p-6 bg-gray-100 mb-10">
                    <transition enter-active-class="ease-out duration-400"
                                enter-class="opacity-0 transform translate-y-6"
                                enter-to-class="opacity-100"
                                leave-active-class="ease-in duration-500"
                                leave-class="opacity-100"
                                leave-to-class="opacity-0">                

                        <slot class="py-5"></slot> 
                            
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
