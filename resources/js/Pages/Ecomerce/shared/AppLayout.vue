<template>
  <div> 
    <!-- Humberger Begin -->
    <navbar-responsive></navbar-responsive>
     
    <Header></Header>

    <!-- Hero Section Begin -->
    <Hero></Hero>
    
    <main>
        <Flash v-if="$page.flash"></Flash> 

        <slot></slot>
    </main>
 
    <Footer></Footer>

    <!-- Page Preloder -->
    <Loader></Loader>

    <!-- Modal Portal -->
    <portal-target name="modal" multiple>
    </portal-target>

  </div>
</template>

<script> 
    import Hero from './components/Hero' 
    import NavbarResponsive from './components/NavbarResponsive'  
    import Loader from './components/Loader'  
    import Header from './components/Header' 
    import Footer from './components/Footer'  
    import Flash from './../../Shared/Flash'  
 

    export default {
        components: {
            NavbarResponsive,
            Loader,
            Header,
            Footer,
            Hero,
            Flash,

        },        

        computed: {
            path() {
                return window.location.pathname
            }
        },   
        methods: {
            
            logout() {
                axios.post('/logout').then(response => {
                    window.location = '/';
                })
            },
        },     

        
    }
</script>
