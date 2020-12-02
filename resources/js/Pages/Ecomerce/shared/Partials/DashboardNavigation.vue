<template>
    <div class="lg:w-1/4">
        <p class="font-butlerregular text-secondary text-2xl sm:text-3xl lg:text-4xl pb-6">My Account</p>
        <div class="pl-3 flex flex-col"> 

           <inertia-link 
                v-if="$page.user.is_admin"
                :href="route('admin.dashboard')"  
                as="button" 
                class="transition-all hover:font-hkbold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary inline-flex items-center" 
                :class="{'text-primary border-primary':($page.currentRouteName == 'admin.dashboard'),'font-hkregular text-grey-darkest':($page.currentRouteName != 'admin.dashboard')}" 
                type="button"> 
                <svg class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/></svg>                 
            Adminstration
            </inertia-link>    
            <div class="divide-y divide-blue-300">
            <div class="text-center py-2"></div> 
            </div>

            <inertia-link 
                v-if="$page?!$page.user.is_admin:false"
                :href="route('dashboard.index')"  
                preserve-scroll
                preserve-state
                as="button" 
                class="transition-all hover:font-hkbold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary inline-flex items-center" 
                :class="{'text-primary border-primary':($page.currentRouteName == 'dashboard.index'),'font-hkregular text-grey-darkest':($page.currentRouteName != 'dashboard.index')}" 
                type="button">
                <svg  class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"/></svg>
            Dashboard
            </inertia-link>                       
 
            <inertia-link 
                :href="route('dashboard.order')"  
                class="transition-all hover:font-hkbold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary inline-flex items-center" 
                :class="{'text-primary border-primary':($page.currentRouteName == 'dashboard.order'),'font-hkregular text-grey-darkest':($page.currentRouteName != 'dashboard.order')}" 
                preserve-scroll
                preserve-state
                as="button" 
                type="button">
                <svg class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"/>
                </svg>            

            Orders
            </inertia-link>   

            <inertia-link 
                :href="route('dashboard.wishlist')"  
                :class="{'text-primary border-primary':($page.currentRouteName == 'dashboard.wishlist'),'font-hkregular text-grey-darkest':($page.currentRouteName != 'dashboard.wishlist')}" 
                preserve-scroll
                preserve-state
                as="button" 
                class="transition-all hover:font-hkbold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary inline-flex items-center" 
                type="button">
                    <svg class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>                
            Wishlist
            </inertia-link>               

            <inertia-link 
                :href="route('profile.show')"  
                :class="{'text-primary border-primary':($page.currentRouteName == 'profile.show'),'font-hkregular text-grey-darkest':($page.currentRouteName != 'profile.show')}" 
                preserve-scroll
                preserve-state
                as="button" 
                class="transition-all hover:font-hkbold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary inline-flex items-center" 
                type="button">
                <svg class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>                
            Account Details
            </inertia-link>  
                         
            <inertia-link 
                :href="route('logout')" 
                method="post"  
                as="button" 
                class="font-hkregular text-grey-darkest transition-all hover:font-hkbold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary inline-flex items-center" 
                type="button"> 
                <svg class="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
                </svg>                 
            Logout
            </inertia-link>  

        </div> 

    </div>
</template>