<template>
    <div class="fixed inset-0 flex z-50 justify-end opacity-0 pointer-events-none   transition-all"
        :class="{ 'opacity-100 pointer-events-auto': mobileMenu }">
        <div class="bg-black opacity-50 absolute inset-0 z-10" @click="$emit('mobile-menu-is-disabled')"></div>
        <div class="w-2/3 md:w-1/2 z-20 h-full absolute shadow bg-primary-lightest overflow-auto flex flex-col">
            <span class=" ml-auto p-2" @click="$emit('mobile-menu-is-disabled')"><i
                    class="bx bx-x text-secondary text-3xl"></i></span>
            <ul> 
                <MobileNavLink 
                    :href="route('welcome')" 
                    :active="$page.currentRouteName == 'welcome'" 
                >Home</MobileNavLink>

                <MobileNavLink  
                    :href="route('shop.index')" 
                    :active="$page.currentRouteName == 'shop.index'" 
                >Shop</MobileNavLink>                     

                <MobileNavLink 
                    :href="route('blog')" 
                    :active="$page.currentRouteName == 'blog'" 
                >Blog</MobileNavLink>                    

                <MobileNavLink 
                    :href="route('blog.details')" 
                    :active="$page.currentRouteName == 'blog.details'" 
                >Blog Details</MobileNavLink>             

                <MobileNavLink 
                    :href="route('contact')" 
                    :active="$page.currentRouteName == 'contact'"
                >Contact</MobileNavLink>              

                <MobileNavLink 
                    :href="route('dashboard')" 
                    :active="$page.currentRouteName == 'dashboard'"
                >Account</MobileNavLink>              
                <!--  
                <li class="flex justify-between flex-col" x-data="{ categories: false }"
                    @blur="categories=false ">
                    <div class="flex justify-between border-t border-grey-darker">
                        <span class="p-3 uppercase text-secondary  block">Categories</span>
                        <span class="p-3 border-l border-grey-darker" @click="categories = !categories">
                            <i class="mt-1 bx bxs-down-arrow text-secondary text-sm pointer-events-none"
                                :class="{ 'bxs-up-arrow': categories }"></i></span>
                    </div>
                    <div class="bg-primary-lighter overflow-hidden   transition-all item-height"
                        :class="{ 'active': categories }">

                        <div x-data="{ subcategory: false }" @blur="subcategory=false">
                            <div class="flex justify-between border-t border-grey-darker">
                                <span class="p-3 uppercase text-secondary  block">Man</span>
                                <span class="p-3 border-l border-grey-darker" @click="subcategory = !subcategory"><i
                                        class="mt-1 bx bxs-down-arrow text-secondary text-sm pointer-events-none"></i></span>
                            </div>
                            <div class="mobile-menu-categories bg-v-v-pink max-h-0 overflow-hidden   transition-all item-height"
                                :class="{ 'active': subcategory }">
                                <ul>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Boots</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Blutcher
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Chelsea
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Chukka
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Dress
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Work
                                            Boot</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div x-data="{ subcategory: false }" @blur="subcategory=false">
                            <div class="flex justify-between border-t border-grey-darker">
                                <span class="p-3 uppercase text-secondary  block">Woman</span>
                                <span class="p-3 border-l border-grey-darker" @click="subcategory = !subcategory"><i
                                        class="mt-1 bx bxs-down-arrow text-secondary text-sm pointer-events-none"></i></span>
                            </div>
                            <div class="mobile-menu-categories bg-v-v-pink max-h-0 overflow-hidden   transition-all item-height"
                                :class="{ 'active': subcategory }">
                                <ul>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Accessories</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Belts</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Caps</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Laces</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Socks</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div x-data="{ subcategory: false }" @blur="subcategory=false">
                            <div class="flex justify-between border-t border-grey-darker">
                                <span class="p-3 uppercase text-secondary  block">Kids</span>
                                <span class="p-3 border-l border-grey-darker" @click="subcategory = !subcategory"><i
                                        class="mt-1 bx bxs-down-arrow text-secondary text-sm pointer-events-none"></i></span>
                            </div>
                            <div class="mobile-menu-categories bg-v-v-pink max-h-0 overflow-hidden   transition-all item-height"
                                :class="{ 'active': subcategory }">
                                <ul>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Shoes</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Derby
                                            Shoes</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Belts</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Caps</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Laces</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="p-3 uppercase text-secondary border-t border-grey-darker block">Socks</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </li> 
                <li>
                    <a href="/blog" class="p-3 uppercase text-secondary border-t border-grey-darker block">Blog</a>
                </li> 
                <li>
                    <a href="/contact#faq"
                        class="p-3 uppercase text-secondary border-t border-grey-darker block">FAQ</a>
                </li> 
                <li>
                    <a href="/contact"
                        class="p-3 uppercase text-secondary border-t border-grey-darker block">Contact</a>
                </li> 
                <li>
                    <a href="/account/dashboard"
                        class="p-3 uppercase text-secondary border-t border-grey-darker block">Account</a>
                </li>
                <li>
                    <a href="/cart"
                        class="p-3 uppercase text-secondary border-t border-b border-grey-darker block">Cart</a>
                </li> -->
            </ul>
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
}
</script>
 