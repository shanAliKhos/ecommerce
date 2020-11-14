<template>
<header class="xxstheme-header">
    
    <div class="container py-10 relative">
        
        <div class="flex justify-between items-center">
            <div class="hidden lg:block">
                <div class="flex items-center">
                    <a href="/"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 mr-8 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon search" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/c129f8a9d735731b185257f43eb3fe5307d04286/e2915/assets/img/icons/icon-search-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon search hover" />
                    </a>

                    <a href="/account/wishlist/"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon heart" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/4e661f3e86fa0f4bfaa2c1e10374406c8e048056/e025f/assets/img/icons/icon-heart-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon heart hover" />
                    </a>
                </div>
            </div>
            <a href="/">
                <img src="https://d33wubrfki0l68.cloudfront.net/23b5f665f19d2465fb9751d325b522bda9614e53/c3543/assets/img/logo-elyssi.svg"
                    class="w-48 h-auto" alt="logo" />
            </a>
            <div class="hidden lg:block">
                <div class="flex items-center">
                    <a href="/account/dashboard"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/f7d761469bf66852487412569632673f9d21d1f8/5e821/assets/img/icons/icon-user.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon user" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/813133414c7aa22b471f0e3efbe3ddfc3600d77e/3dc2c/assets/img/icons/icon-user-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon user hover" />
                    </a>

                    <a href="/cart"
                        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 ml-8 group">
                        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg"
                            class="w-8 h-8 block group-hover:hidden" alt="icon cart" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg"
                            class="w-8 h-8 hidden group-hover:block" alt="icon cart hover" />
                    </a>
                </div>
            </div>
            <div class="block lg:hidden">
                <i class="bx bx-menu text-primary text-3xl" @click="mobileMenu = true"></i>
            </div>
        </div>
        <div class="flex justify-center lg:pt-8">
            <ul class="list-reset flex items-center">


                <li class=" mr-10 hidden lg:block">
                    <a href="/"
                        class="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Home</a>
                </li>



                <li class=" mr-10 hidden lg:block">
                    <a href="/about"
                        class="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">About</a>
                </li>



                <li class="mr-10 hidden lg:block group">
                    <div
                        class="border-b-2 border-white transition-colors group-hover:border-primary flex items-center">
                        <span
                            class="cursor-pointer text-lg font-hkregular group-hover:font-hkbold text-secondary group-hover:text-primary px-2 transition-all">Collections</span>
                        <i
                            class="bx bx-chevron-down text-secondary group-hover:text-primary pl-2 px-2 transition-colors"></i>
                    </div>
                    <div class="pt-10 absolute mt-40 top-0 left-0 right-0 -z-1 group-hover:z-50 w-2/3 mx-auto">
                        <div
                            class="opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto   transition-all flex bg-white shadow-lg p-8 rounded-b relative ">

                            <div class="flex-1 relative z-20">
                                <h4 class="font-hkbold text-base text-secondary mb-2">
                                    Man
                                </h4>
                                <ul>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Boots</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Blutcher
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Chelsea
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Chukka
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Dress
                                            Boot</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Work
                                            Boot</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="flex-1 relative z-20">
                                <h4 class="font-hkbold text-base text-secondary mb-2">
                                    Woman
                                </h4>
                                <ul>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Accessories</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Belts</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Caps</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Laces</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Socks</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="flex-1 relative z-20">
                                <h4 class="font-hkbold text-base text-secondary mb-2">
                                    Kids
                                </h4>
                                <ul>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Shoes</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Derby
                                            Shoes</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Belts</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Caps</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Laces</a>
                                    </li>

                                    <li>
                                        <a href="/collection-grid"
                                            class="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Socks</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="flex-1">
                                <div class="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0"
                                    style="background-image: url(./img/bg-mega-menu.png)">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>



                <li class=" mr-10 hidden lg:block">
                    <a href="/blog"
                        class="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Blog</a>
                </li>



                <li class=" mr-10 hidden lg:block">
                    <a href="/contact#faq"
                        class="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">FAQ</a>
                </li>



                <li class=" mr-10 hidden lg:block">
                    <a href="/contact"
                        class="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Contact</a>
                </li>


            </ul>
        </div>
    </div>

    <div class="fixed inset-0 flex z-50 justify-end opacity-0 pointer-events-none   transition-all"
        :class="{ 'opacity-100 pointer-events-auto': mobileMenu }">
        <div class="bg-black opacity-50 absolute inset-0 z-10" @click="mobileMenu = false"></div>
        <div class="w-2/3 md:w-1/2 z-20 h-full absolute shadow bg-primary-lightest overflow-auto flex flex-col">
            <span class=" ml-auto p-2" @click="mobileMenu = false"><i
                    class="bx bx-x text-secondary text-3xl"></i></span>
            <ul>


                <li>
                    <a href="/" class="p-3 uppercase text-secondary border-t border-grey-darker block">Home</a>
                </li>



                <li>
                    <a href="/about"
                        class="p-3 uppercase text-secondary border-t border-grey-darker block">About</a>
                </li>



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
                </li>
            </ul>
        </div>
    </div>   

</header>
</template>
<script> 
export default { 
    data() {
        return {
            mobileMenu:false,
            categories:false,
            subcategory:false,                  
        }
    },

}
</script>