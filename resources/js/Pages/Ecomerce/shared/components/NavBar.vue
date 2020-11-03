<template>
<nav class="header__menu">
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
</template>
<script>
import CusNavLink from './NavLink'
export default {
    components:{CusNavLink},
    computed: {
        path() {
            return window.location.pathname
        }
    },
}
</script>

 