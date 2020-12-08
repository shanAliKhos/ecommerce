<template>
    <div class="container md:py-10 relative">
        
        <div class="flex justify-between items-center">
            <div class="hidden lg:block">
                <div class="flex items-center">
                    
                    <a href="javascript:;" class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 mr-8">
                        <span class="transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat w-8 h-8 block  bg-icon-search hover:bg-icon-search-hover"></span>
                    </a>

                    <a href="javascript:;"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
                        <span class="transition duration-500 ease-in-out  bg-contain bg-center bg-no-repeat  bg-icon-heart w-8 h-8 block hover:bg-icon-heart-hover"></span>
                    </a>

                </div>
            </div>
            <inertia-link :href="route('welcome')" preserve-scroll>
                <ApplicationLogo/> 
            </inertia-link>
            <div class="hidden lg:block">
                <div class="flex items-center">
                    
                    <inertia-link v-if="!$page.user" preserve-scroll :href="route('login')" class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group relative">
                        <span class="flex h-3 w-3 absolute right-5">
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>                        
                        <span class="transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat w-8 h-8 block bg-icon-user  hover:bg-icon-user-hover"></span>
                    </inertia-link>

                    <inertia-link v-if="$page.user?$page.user.is_admin:false" preserve-scroll :href="route('admin.dashboard')" class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group relative" >
                        <span class="flex h-3 w-3 absolute right-5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 "></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                        </span>                            
                        <span class="transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat w-8 h-8 block bg-icon-user  hover:bg-icon-user-hover" 
                            :class="{'bg-icon-user-hover':$page.currentRouteName == 'admin.dashboard'}"
                        ></span>
                    </inertia-link>

                    <inertia-link v-if="$page.user?!$page.user.is_admin:false" preserve-scroll :href="route('dashboard.index')" :class="{'border-green-400':$page.currentRouteName == 'dashboard.index'}" class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group relative">
                        <span class="flex h-3 w-3 absolute right-5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 "></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                        </span>                        
                        <span class="transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat w-8 h-8 block bg-icon-user hover:bg-icon-user-hover"
                            :class="{'bg-icon-user-hover':$page.currentRouteName == 'dashboard.index'}"

                        ></span>
                    </inertia-link>
                    
                    <nav-cart></nav-cart>

                </div>
            </div>
            <div class="block lg:hidden">
                <i class="bx bx-menu text-primary text-3xl" @click="$emit('mobile-menu-is-enabled')"></i>
            </div>
        </div>
        <div class="flex justify-center lg:pt-8">
            <ul class="list-reset flex items-center">
            
                <cus-nav-link 
                    :href="$route('welcome')" 
                    :active="$page.currentRouteName == 'welcome'" 
                >Home</cus-nav-link>

                <cus-nav-link  
                    :href="$route('shop.index')" 
                    :active="$page.currentRouteName == 'shop.index'" 
                >Shop</cus-nav-link>                     

                <cus-nav-link 
                    :href="$route('blog.index')" 
                    :active="$page.currentRouteName == 'blog.index'" 
                >Blog</cus-nav-link>                    

                <!-- <cus-nav-link 
                    :href="$route('blog.details')" 
                    :active="$page.currentRouteName == 'blog.details'" 
                >Blog Details</cus-nav-link>              -->

                <!-- <cus-nav-link 
                    :href="$route('contact.index')" 
                    :active="$page.currentRouteName == 'contact.index'"
                >Contact</cus-nav-link>                 -->
 
            </ul>
        </div>
    </div>
</template>
<script>
import ApplicationLogo from './ApplicationLogo'
import CusNavLink from './NavLink'
import NavCart from './../../../Cart/NavCart'
export default { 
    props:['mobileMenu','categories','subcategory'],
    components:{
        ApplicationLogo,
        CusNavLink,
        NavCart,
    },
  
}
</script>
 