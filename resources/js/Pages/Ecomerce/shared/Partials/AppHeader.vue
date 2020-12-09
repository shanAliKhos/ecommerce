<template>
<header class="xxstheme-header fixed flex w-full bg-white items-center justify-between flex-wrap z-50 m-auto top-0 animated scroll:shadow"">
    
    <nav-bar
        :mobileMenu="mobileMenu"
        :categories="categories"
        :subcategory="subcategory"
        @mobile-menu-is-disabled="mobileMenu = false"
        @mobile-menu-is-enabled="mobileMenu = true"
    ></nav-bar>

    <mobile-navbar
        :mobileMenu="mobileMenu"
        :categories="categories"
        :subcategory="subcategory"    
        @mobile-menu-is-disabled="mobileMenu = false"    
    ></mobile-navbar>

</header>
</template>
<script> 
import NavBar from './components/NavBar'  
import MobileNavbar from './components/MobileNavbar'  
export default { 
    components: {
        NavBar,
        MobileNavbar,
    },
    data() {
        return {
            mobileMenu:false,
            categories:false,
            subcategory:false,                  
        }
    },
    mounted() {
      const self = this 

        self.$root.$on('sidebar-close',()=>{ 
            self.mobileMenu = false;
        });

    },    

}
</script>