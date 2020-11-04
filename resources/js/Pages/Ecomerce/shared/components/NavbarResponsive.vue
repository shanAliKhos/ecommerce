<template>
    <div>
    
        <div class="humberger__menu__overlay"></div>
    
        <div class="humberger__menu__wrapper">
    
            <div class="humberger__menu__logo">
     
                <ApplicationLogo></ApplicationLogo>
    
            </div>
    
            <div class="humberger__menu__cart">
    
                <ul>
    
                    <li>
                        <a href="#">
                            <i class="fa fa-heart"></i> <span>1</span>
                        </a>
                    </li>
    
                    <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
    
                </ul>
    
                <div class="header__cart__price">item: <span>$150.00</span></div>
    
            </div>
    
            <div class="humberger__menu__widget">
    
                <div class="header__top__right__language">
    
                    <LangImage></LangImage> 
    
                    <div>English</div>
    
                    <span class="arrow_carrot-down"></span>
    
                    <ul>
    
                        <li><a href="#">Spanis</a></li>
    
                        <li><a href="#">English</a></li>
    
                    </ul>
    
                </div>
    
                <div class="header__top__right__auth">
    
                    <a href="#"><i class="fa fa-user"></i> Login</a>
    
                </div>
    
            </div>
    
            <nav class="slicknav_nav slicknav_hidden mobile-menu">
    
                <ul>
                
                    <cus-nav-link 
                        :href="$route('welcome')" 
                        :active="$page.currentRouteName == 'welcome'" 
                    >Home</cus-nav-link>

                    <cus-nav-link  
                        :href="$route('shop')" 
                        :active="$page.currentRouteName == 'shop'" 
                    >Shop</cus-nav-link>                     

                    <cus-nav-link 
                        :href="$route('blog')" 
                        :active="$page.currentRouteName == 'blog'" 
                    >Blog</cus-nav-link>                    

                    <cus-nav-link 
                        :href="$route('blog.details')" 
                        :active="$page.currentRouteName == 'blog.details'" 
                    >Blog Details</cus-nav-link>             

                    <cus-nav-link 
                        :href="$route('contact')" 
                        :active="$page.currentRouteName == 'contact'"
                    >Contact</cus-nav-link>              

 
                </ul>
    
            </nav>
    
            <div id="mobile-menu-wrap"></div>
    
            <div class="header__top__right__social">
    
                <a href="#"><i class="fa fa-facebook"></i></a>
    
                <a href="#"><i class="fa fa-twitter"></i></a>
    
                <a href="#"><i class="fa fa-linkedin"></i></a>
    
                <a href="#"><i class="fa fa-pinterest-p"></i></a>
    
            </div>
    
            <div class="humberger__menu__contact">
    
                <ul>
    
                    <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
    
                    <li>Free Shipping for all Order of $99</li>
    
                </ul>
    
            </div>
    
        </div>
    
    </div>
</template>
<script>
import CusNavLink from './NavLink'
import ApplicationLogo from './Logo'  
import LangImage from './LangImage'  
export default {

    components: { CusNavLink,ApplicationLogo,LangImage },
    computed: {
        path() {
            return window.location.pathname
        }
    },

    mounted() {

        $(".humberger__open").on('click', function() {
            $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").addClass("active");
            $("body").addClass("over_hid");
        });

        $(".humberger__menu__overlay").on('click', function() {
            $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
            $(".humberger__menu__overlay").removeClass("active");
            $("body").removeClass("over_hid");
        });

        $(".mobile-menu>ul li").click(function() {
            $('body').removeClass('over_hid');
        });

    },
}
</script>
 