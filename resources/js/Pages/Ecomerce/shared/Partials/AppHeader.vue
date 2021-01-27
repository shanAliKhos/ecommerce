<template>
<div class="xxstheme-header transition duration-700 ease-in left-0 top-0  bg-white z-50 w-full px-2" 
    :class="{ 'fixed scrolled': !atTopOfPage }" >
    
    <nav-bar    
        class="z-50"
        :atTopOfPage="atTopOfPage"
        :mobileMenu="mobileMenu"
        :categories="categories"
        :subcategory="subcategory"
        @mobile-menu-is-disabled="mobileMenu = false"
        @mobile-menu-is-enabled="mobileMenu = true"
    ></nav-bar>

    <mobile-navbar
        class="z-50"
        :mobileMenu="mobileMenu"
        :categories="categories"
        :subcategory="subcategory"    
        @mobile-menu-is-disabled="mobileMenu = false"    
    ></mobile-navbar>

</div>
</template>
<script> 
// import NavBar from './components/NavBar'  
// import MobileNavbar from './components/MobileNavbar'  
 
export default { 
    components: {
        NavBar:() => import('./components/NavBar'),
        MobileNavbar:() => import('./components/MobileNavbar'),
    },
    data() {
        return {
            mobileMenu:false,
            categories:false,
            subcategory:false,     
            atTopOfPage: true,
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: { 
        handleScroll(){ 
            if(window.pageYOffset>600){ 
                if(this.atTopOfPage) this.atTopOfPage = false
            }else{ 
                if(!this.atTopOfPage) this.atTopOfPage = true
            }
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
<style scoped>
.xxstheme-header.scrolled {
    @apply shadow-2xl; 
}
</style>