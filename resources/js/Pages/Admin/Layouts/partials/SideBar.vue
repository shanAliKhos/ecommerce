<template>
    <div>
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
        
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

            <hr class="mb-2">
            <ul class="app-menu">
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.dashboard','app-menu__item':true}" @click="SidebarToggle('admin.dashboard')" :href="$route('admin.dashboard')">
                        <i class="app-menu__icon fa fa-dashboard"></i>
                        <span class="app-menu__label">Dashboard</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.order.index','app-menu__item':true}" @click="SidebarToggle('admin.order.index')" :href="$route('admin.order.index')">
                        <i class="app-menu__icon fa fa-bar-chart"></i>
                        <span class="app-menu__label">Orders</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.product.index','app-menu__item':true}" @click="SidebarToggle('admin.product.index')" :href="$route('admin.product.index') ">
                        <i class="app-menu__icon fa fa-shopping-bag"></i>
                        <span class="app-menu__label">Products</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.brand.index','app-menu__item':true}" @click="SidebarToggle('admin.brand.index')" :href="$route('admin.brand.index') ">
                        <i class="app-menu__icon fa fa-briefcase"></i>
                        <span class="app-menu__label">Brands</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.category.index','app-menu__item':true}"  @click="SidebarToggle('admin.category.index')" :href="$route('admin.category.index') ">
                        <i class="app-menu__icon fa fa-tags"></i>
                        <span class="app-menu__label">Categories</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.attribute.index','app-menu__item':true}"  @click="SidebarToggle('admin.attribute.index')" :href="$route('admin.attribute.index') ">
                        <i class="app-menu__icon fa fa-th"></i>
                        <span class="app-menu__label">Attributes</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.setting','app-menu__item':true}" @click="SidebarToggle('admin.setting')" :href="$route('admin.setting') ">
                        <i class="app-menu__icon fa fa-cogs"></i>
                        <span class="app-menu__label">Settings</span>
                    </inertia-link>
                </li>
            </ul>
        </aside>
        
    </div>
</template>
<script>    
    import JetDropdown from './../../../../Jetstream/Dropdown'
    import JetDropdownLink from './../../../../Jetstream/DropdownLink'

    export default { 
        components:{
            JetDropdown,
            JetDropdownLink
        },
        methods: {
            SidebarToggle(current){
                if(current !== this.$page.currentRouteName){
                    $('body').toggleClass('sidenav-toggled');  
                }
            },        
        },          
      
        
    }
</script>
 