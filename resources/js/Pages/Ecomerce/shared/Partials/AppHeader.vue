<template>
<header class="xxstheme-header fixed flex w-full bg-white items-center justify-between flex-wrap z-50 m-auto top-0 animated" 
    :class="{ 'scrolled': !view.atTopOfPage }" >
    
    <nav-bar
        :atTopOfPage="view.atTopOfPage"
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
     
            if(window.pageYOffset>0){
                
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
    border-bottom: 0px;
}
</style>