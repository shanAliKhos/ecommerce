<template>
    <div>
    
        <div class="humberger__menu__overlay"></div>
    
        <div class="humberger__menu__wrapper">
    
            <jet-dropdown align="right" width="48" class="p-0" v-if="$page.user">
                <template #trigger>
                    <div class="flex justify-center">
                        <button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out text-center">
                            <img class="h-32 w-32 rounded-full object-center" :src="$page.user.profile_photo_url" :alt="$page.user.name" />
                        </button>
                    </div>
                </template>

                <template #content>
                    <!-- Account Management -->
                    <div class="block px-4 py-2 text-xs text-gray-400">
                        Manage Account
                    </div>
        

                    <jet-dropdown-link v-if="$page.user.is_admin" :href="$route('admin.dashboard')">
                        Dashboard
                    </jet-dropdown-link>                            

                    <jet-dropdown-link href="/user/profile">
                        Profile
                    </jet-dropdown-link>                            

                    <jet-dropdown-link href="/user/api-tokens" v-if="$page.jetstream.hasApiFeatures">
                        API Tokens
                    </jet-dropdown-link>
                    
                    <div class="border-t border-gray-100"></div>

        
                    <!-- Authentication --> 
                    <inertia-link 
                        :href="$route('logout')" 
                        method="post"  
                        as="button" 
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" 
                        type="button">Logout
                    </inertia-link>

                </template>
            </jet-dropdown>     
       
     
            <div class="humberger__menu__cart">
                <header-cart></header-cart> 
            </div> 

            <div class="humberger__menu__widget">
     
                <lang-section></lang-section>  

                <div class="header__top__right__auth" v-if="$page.user">
                    <inertia-link 
                        :href="$route('logout')" 
                        method="post"  
                        as="button" 
                        class="transition duration-500 ease-in-out bg-transparent hover:text-red-400 text-green-400 font-semibold py-1 px-3 border border-red-500 hover:border-transparent rounded" 
                        type="button"><i class="fa fa-sign-out"></i> Logout
                    </inertia-link>                    
                </div> 
                <div class="header__top__right__auth" v-else> 
                    <inertia-link 
                        class="transition duration-500 ease-in-out bg-transparent text-green-400 font-semibold hover:text-green-400 py-1 px-3 border border-blue-500 hover:border-transparent rounded" 
                        :href="$route('login')"><i class="fa fa-user"></i> Login
                    </inertia-link>
                </div>             
     
            </div>
    
            <div id="mobile-menu-wrap"></div>

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
    
   
     
    
        </div>
    
    </div>
</template>
<script>
import CusNavLink from './NavLink'
import ApplicationLogo from './Logo'  
import LangSection from './LangSection' 
import JetDropdown from './Dropdown'
import JetDropdownLink from './DropdownLink'  
import HeaderCart from './HeaderCart'   

export default {

    components: { 
        CusNavLink,
        ApplicationLogo,
        LangSection,
        JetDropdown,
        JetDropdownLink,    
        HeaderCart         
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
 