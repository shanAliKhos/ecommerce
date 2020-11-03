<template>
<header class="app-header">
    <!-- <a class="app-header__logo" href="#">{{ config('app.name') }}</a> -->
    <a class="app-header__logo" href="#">Adminsitration</a>
    <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
    <ul class="app-nav">
        <li class="app-search">
            <input class="app-search__input" type="search" placeholder="Search" />
            <button class="app-search__button">
                <i class="fa fa-search"></i>
            </button>
        </li>
        <!-- <li class="dropdown">
            <a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i class="fa fa-bell-o fa-lg"></i></a>
            <ul class="app-notification dropdown-menu dropdown-menu-right">
                <li class="app-notification__title">
                    You have 4 new notifications.
                </li>
                <div class="app-notification__content">
                    <li>
                        <a class="app-notification__item" href="javascript:;">
                            <span class="app-notification__icon">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i>
                                </span>
                            </span>
                            <div>
                                <p class="app-notification__message">
                                    Mail server not working
                                </p>
                                <p class="app-notification__meta">5 min ago</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="app-notification__item" href="javascript:;">
                            <span class="app-notification__icon">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x text-success"></i>
                                    <i class="fa fa-money fa-stack-1x fa-inverse"></i>
                                </span>
                            </span>
                            <div>
                                <p class="app-notification__message">
                                    Transaction complete
                                </p>
                                <p class="app-notification__meta">2 days ago</p>
                            </div>
                        </a>
                    </li>
                </div>
                <li class="app-notification__footer">
                    <a href="#">See all notifications.</a>
                </li>
            </ul>
        </li> -->
 
        <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="ml-3 relative">
                <jet-dropdown align="right" width="56">
                    <template #trigger>
                        <i class="fa fa-bell-o fa-lg"></i>
                    </template>

                    <template #content>
                        <!-- Account Management -->
                        <div class="block px-4 py-2 text-xs text-gray-400">
                            You have 4 new notifications.
                        </div>
                        <div class="app-notification__content">
                            <li>
                                <a class="app-notification__item" href="javascript:;">
                                    <span class="app-notification__icon">
                                        <span class="fa-stack fa-lg">
                                            <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                            <i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </span>
                                    <div>
                                        <p class="app-notification__message">
                                            Mail server not working
                                        </p>
                                        <p class="app-notification__meta">5 min ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="app-notification__item" href="javascript:;">
                                    <span class="app-notification__icon">
                                        <span class="fa-stack fa-lg">
                                            <i class="fa fa-circle fa-stack-2x text-success"></i>
                                            <i class="fa fa-money fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </span>
                                    <div>
                                        <p class="app-notification__message">
                                            Transaction complete
                                        </p>
                                        <p class="app-notification__meta">2 days ago</p>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <li class="app-notification__footer">
                            <a href="#">See all notifications.</a>
                        </li>             
                        <div class="border-t border-gray-100"></div>
  
                    </template>
                </jet-dropdown>
            </div>
        </div>        
 
        <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="ml-3 relative">
                <jet-dropdown align="right" width="48">
                    <template #trigger>
                        <button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                            <img class="h-8 w-8 rounded-full object-cover" :src="$page.user.profile_photo_url" :alt="$page.user.name" />
                        </button>
                    </template>

                    <template #content>
                        <!-- Account Management -->
                        <div class="block px-4 py-2 text-xs text-gray-400">
                            Manage Account
                        </div>
                         

                        <jet-dropdown-link :href="$route('welcome')">
                            Website
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
            </div>
        </div>        

    </ul>
</header>
</template>
<script>    
    import JetDropdown from './../../../../Jetstream/Dropdown'
    import JetDropdownLink from './../../../../Jetstream/DropdownLink'

    export default { 
        components:{
            JetDropdown,
            JetDropdownLink
        },
        computed: {
            path() {
                return window.location.pathname
            }
        },   
        methods: {
            logout() {
                axios.post('/logout').then(response => {
                    window.location = '/';
                })
            },
        },    
  
        
    }
</script>
 