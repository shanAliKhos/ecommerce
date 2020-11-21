<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">
    
            <Sidebar />
    
            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">
    
                <Navbar />
    
                <div class="p-6 bg-gray-100 mb-10">
                    <slot class="py-5"></slot> 
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
    import { mapState } from 'vuex'
    import Sidebar from './partials/Sidebar'
    import Navbar from './partials/Navbar'
    import Footer from './partials/Footer'
    import FlashMessage from './../../Shared/FlashMessage'   



    export default {
        name: 'Dashboard',
        computed: {
            ...mapState(['sideBarOpen'])
        },
        components: {
            Sidebar,
            Navbar,
            Footer,
            FlashMessage,
        }
    }
</script>
