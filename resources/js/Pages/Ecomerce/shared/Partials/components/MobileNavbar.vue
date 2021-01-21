<template> 
<div v-if="IsMenuVisible" class="z-50 bg-white block lg:hidden fixed bottom-0 right-0 left-0 border-t-2 border-gray-200 text-gray-700 px-2 py-1">
    <div class="flex justify-around"> 
        <MobileNavLink :active="$page.currentRouteName == 'welcome'" :href="route('welcome')">    
            <template #icon> 
                <svg class="pointer-events-none	 h-5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>                    
            </template>
            <span class="pointer-events-none">Home</span> 
        </MobileNavLink>         

        <MobileNavLink :active="$page.currentRouteName == 'shop.index'" :href="route('shop.index')">
            <template #icon> 
            <svg class="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>                    
            </template>

            <span >Shop</span>
        </MobileNavLink>         

        <MobileNavLink :active="$page.currentRouteName == 'cart.index'" :href="route('cart.index')"  class="group relative">
            <span v-if="CountCartItems>0" class="text-white border border-white shadow  absolute top-0 left-7 py-auto  px-2 rounded-full" :class="{'bg-green-400':CountCartItems>0}" >{{CountCartItems}}</span>
            <template #icon>  
                <svg  class="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg> 
            </template>
            <span>Cart</span>
        </MobileNavLink>    
                
        <!-- auth -->
        <MobileNavLink class="relative" :active="$page.currentRouteName == 'login'" v-if="!$page.user" :href="route('login')" > 
            <template #icon> 
            <svg class="flex justify-center transition duration-700 ease-in-out h-5 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>                                                      
            </template>
            <span >Login</span>
        </MobileNavLink>         

    
        <MobileNavLink class="relative" :active="$page.currentRouteName == 'admin.dashboard'" v-if="$page.user?$page.user.is_admin:false" :href="route('admin.dashboard')">
            <span class="flex h-5 w-auto absolute top-0 right-0 ">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>                                        
            <template #icon> 
            <svg class="flex justify-center transition duration-700 ease-in-out h-5 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>                                                      
            </template>                                                         
            <span >Account</span>
        </MobileNavLink>                   

        <MobileNavLink class="relative" :active="$page.currentRouteName == 'dashboard.index'" v-if="$page.user?!$page.user.is_admin:false"  :href="route('dashboard.index')" >
            <span class="flex h-5 w-auto absolute top-0 right-0 ">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>                  
            <template #icon> 
            <svg class="flex justify-center transition duration-700 ease-in-out h-5 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>                                                      
            </template>                             
            <span>Account</span>
        </MobileNavLink>       

    </div> 
</div>      
</template>
<script>
// import MobileNavLink from './MobileNavLink'
export default {
    props:['mobileMenu','categories','subcategory'],
    components:{
        MobileNavLink:() => import('./MobileNavLink'),
    }, 
    computed:{
        IsMenuVisible(){
            switch (this.$page.currentRouteName) {
         
                default:
                    return true;      
                break;
            }            
        },
        CountCartItems(){
            let Qty = this.$page.Cart.Items?this.$page.Cart.Items.reduce((TotalItems, Item) => TotalItems + Item.Qty , 0):0;
            return Qty;
        },           
    },
}
</script>
 