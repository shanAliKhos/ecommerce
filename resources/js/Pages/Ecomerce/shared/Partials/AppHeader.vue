<template>
<div class="xxstheme-header transition duration-700 ease-in left-0 top-0  bg-white z-50 w-full" 
    :class="{ 'fixed scrolled': !view.atTopOfPage }" >
    
    <nav-bar    
        class="z-50"
        :atTopOfPage="view.atTopOfPage"
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
            view: {
                atTopOfPage: true
            }                         
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: { 
        handleScroll(){ 
            // alert(window.pageYOffset);
            if(window.pageYOffset>400){ 
                if(this.view.atTopOfPage) this.view.atTopOfPage = false
            }else{ 
                if(!this.view.atTopOfPage) this.view.atTopOfPage = true
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