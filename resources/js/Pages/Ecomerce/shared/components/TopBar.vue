<template>
    <div class="header__top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="header__top__right p-1">
           
                        <div class="header__top__right__language">
 
                                <LangImage></LangImage> 
                                <div>English</div>
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>

                        </div>
                        <div class="header__top__right__auth" v-if="$page.user">
                            <jet-dropdown align="right" width="48" class="p-0">
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
                        </div> 
                        <div class="header__top__right__auth" v-else> 
                            <inertia-link 
                            class="transition duration-500 ease-in-out bg-transparent hover:text-green-400 text-green-400 font-semibold hover:text-green-400 py-1 px-3 border border-blue-500 hover:border-transparent rounded" 
                            :href="$route('login')"><i class="fa fa-user"></i> Login</inertia-link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>

import LangImage from './LangImage'  
import JetDropdown from './Dropdown'
import JetDropdownLink from './DropdownLink'   

export default {
    components:{ 
        LangImage,
        JetDropdown,
        JetDropdownLink,                    
    },
    methods: {
        switchToTeam(team) {
            this.$inertia.put('/current-team', {
                'team_id': team.id
            }, {
                preserveState: false
            })
        },
 
    },    

    computed: {
        path() {
            return window.location.pathname
        }
    },

 
}
</script>