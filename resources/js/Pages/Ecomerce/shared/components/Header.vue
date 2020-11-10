<template>

    <header class="header"> 
        
        <top-bar></top-bar> 
        
        <div class="container">

            <div class="row">

                <div class="col-lg-3">
                    <div class="header__logo">
                        <ApplicationLogo></ApplicationLogo> 
                    </div> 
                </div>

                <div class="col-lg-6">
                    <nav-bar></nav-bar>
                </div>

                <div class="col-lg-3">
                    <header-cart></header-cart>
                </div>

            </div>

            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>

        </div>
        
    </header>

</template>

<script> 
import TopBar from './TopBar'
import NavBar from './NavBar'
import ApplicationLogo from './Logo'   
import HeaderCart from './HeaderCart'   

export default {
    components:{
        NavBar,
        TopBar,
        ApplicationLogo,
        HeaderCart
    },

    computed: {
        path() {
            return window.location.pathname
        }
    },


    mounted() {
 
        $(".humberger__open").on('click', function () {
            $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").addClass("active");
            $("body").addClass("over_hid");
        });        
    },



}
</script>>
