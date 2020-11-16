<template>
    <div class="container py-10 relative">
        
        <div class="flex justify-between items-center">
            <div class="hidden lg:block">
                <div class="flex items-center">
                    <a href="javascript:;"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 mr-8 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon search" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/c129f8a9d735731b185257f43eb3fe5307d04286/e2915/assets/img/icons/icon-search-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon search hover" />
                    </a>

                    <a href="javascript:;"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon heart" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/4e661f3e86fa0f4bfaa2c1e10374406c8e048056/e025f/assets/img/icons/icon-heart-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon heart hover" />
                    </a>
                </div>
            </div>
            <inertia-link :href="route('welcome')" preserve-scroll>
                <img src="https://d33wubrfki0l68.cloudfront.net/23b5f665f19d2465fb9751d325b522bda9614e53/c3543/assets/img/logo-elyssi.svg"
                    class="w-48 h-auto" alt="logo" />
            </inertia-link>
            <div class="hidden lg:block">
                <div class="flex items-center">
                    <inertia-link preserve-scroll :href="route('dashboard')"

                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/f7d761469bf66852487412569632673f9d21d1f8/5e821/assets/img/icons/icon-user.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon user" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/813133414c7aa22b471f0e3efbe3ddfc3600d77e/3dc2c/assets/img/icons/icon-user-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon user hover" />
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
        </div>
    </div>
</template>
<script>
import CusNavLink from './NavLink'
import NavCart from './../Cart/NavCart'
export default { 
    props:['mobileMenu','categories','subcategory'],
    components:{
        CusNavLink,
        NavCart,
    },
  
}
</script>
 