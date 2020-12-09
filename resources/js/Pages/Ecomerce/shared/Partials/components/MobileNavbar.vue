<template>
<div>
    <div class="fixed inset-0 flex z-50 justify-end opacity-0 pointer-events-none   transition-all"
        :class="{ 'opacity-100 pointer-events-auto': mobileMenu }">
        <div class="bg-black opacity-50 absolute inset-0 z-10" @click="$emit('mobile-menu-is-disabled')"></div>
        <div class="w-2/3 md:w-1/2 z-20 h-full absolute shadow bg-primary-lightest overflow-auto flex flex-col">
            <span class=" ml-auto p-2" @click="$emit('mobile-menu-is-disabled')"><i
                    class="bx bx-x text-secondary text-3xl"></i></span>
            <ul> 
                <li>
                    <inertia-link 
                        class="p-3 uppercase text-primary border-t border-grey-darker block"
                        :href="route('blog.index')" 
                        :active="$page.currentRouteName == 'blog.index'" 
                    >Blog</inertia-link>                    
                </li>                
                 
 
            </ul>
        </div>
    </div>   
    <div v-if="IsMenuVisible" class="z-50 bg-white  block md:hidden fixed bottom-0 right-0 left-0 shadow-lg  border-t-2 border-gray-200 text-gray-500">
        <div class="grid grid-cols-4 gap-2 flex justify-around mt-1"> 
 
                <MobileNavLink :active="$page.currentRouteName == 'welcome'" :href="route('welcome')" class="appearance-none focus:outline-none">    
                    <svg class="ml-1 transition duration-700 ease-in-out h-7 w-auto fill-current appearance-none focus:outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>                    
                    <span class="appearance-none focus:outline-none">Home</span>
                </MobileNavLink>         
        
                <MobileNavLink :active="$page.currentRouteName == 'shop.index'" :href="route('shop.index')">
                    <svg class="ml-1 transition duration-700 ease-in-out h-7 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>                    
                    <span >Shop</span>
                </MobileNavLink>         
        
                <MobileNavLink :active="$page.currentRouteName == 'cart.index'" :href="route('cart.index')">
                    <svg  class="ml-1 transition duration-700 ease-in-out h-7 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg> 
                    <span >Cart</span>
                </MobileNavLink>    
                     
                <!-- auth -->
                <MobileNavLink :active="$page.currentRouteName == 'login'" v-if="!$page.user" :href="route('login')" > 
                    <svg class="ml-3 transition duration-700 ease-in-out h-7 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>                                                      
                    <span >Account</span>
                </MobileNavLink>         

         
                <MobileNavLink :active="$page.currentRouteName == 'admin.dashboard'" v-if="$page.user?$page.user.is_admin:false" :href="route('admin.dashboard')"  >
                    <svg class="ml-3 transition duration-700 ease-in-out h-7 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>              
                                                            
                    <span >Account</span>
                </MobileNavLink>                   
     
                <MobileNavLink :active="$page.currentRouteName == 'dashboard.index'" v-if="$page.user?!$page.user.is_admin:false"  :href="route('dashboard.index')" >
                    <svg class="ml-3 transition duration-700 ease-in-out h-8 w-auto " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>                                  
                    <span>Account</span>
                </MobileNavLink>       

        </div> 
    </div>        
</div>        
</template>
<script>
import MobileNavLink from './MobileNavLink'
export default {
    props:['mobileMenu','categories','subcategory'],
    components:{
        MobileNavLink
    }, 
    computed:{
        IsMenuVisible(){
            switch (this.$page.currentRouteName) {
                case 'shop.show':
                    return false;       
                break;
            
                default:
                    return true;      
                break;
            }            
        },
    },
}
</script>
 