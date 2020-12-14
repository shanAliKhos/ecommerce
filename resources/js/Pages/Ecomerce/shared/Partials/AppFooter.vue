<template>
<footer class="xxstheme-footer" v-if="IsVisibleFooter">
 
    <div class="container text-center pt-20 md:pt-28 lg:pt-32">
        <!-- <span class="font-hkregular md:text-lg text-secondary uppercase pb-1 md:pb-2 block">Follow US</span>
        <h4 class="font-butlermedium text-3xl text-secondary pb-8 md:pb-10 lg:pb-12"> Instagram Feed </h4>

        <div id="instafeed" x-data x-init="instagramGallery"></div> -->

    </div>

    <div class="bg-center bg-no-repeat bg-cover bg-footer-bg">

        <div class="container">
            <div class="bg-gray-50 lg:rounded-b-full rounded-b-xl">
                <div class="py-10 text-center">
                    <h3 class="font-semibold text-primary text-3xl sm:text-4xl tracking-wide"> Let's keep in touch</h3>
                    <p class="font-hkregular text-gray-300 text-lg sm:text-xl pt-3 px-6"> Join our list and save 15% off your first order.</p>
                    <form class="pt-10 sm:pt-12">
                        <div class="w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center">
                            <!-- <label for="cta_email" class="block relative h-0 w-0 overflow-hidden text-gray-300">Email</label> -->
                            <input 
                                type="email" 
                                name="cta_email" 
                                id="cta_email" 
                                placeholder="ENTER YOUR EMAIL"
                                class="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white" 
                            />
                        </div>
                        <div class="w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center">
                            <button type="button" class="btn btn-primary mt-4  w-full shadow" aria-label="Subscribe button">SUBSCRIBE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="container py-16 sm:py-20 md:py-24">
            <div class="w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div class="text-center lg:text-left">
                    <h4 class="font-semibold text-gray-300 text-2xl pb-8">Contact</h4>
                    <ul class="list-reset">

                        <li class="pb-2 block">
                            <a href="mailto:test.email0123@elyssi.com" class="font-semibold text-gray-300 transition-colors hover:text-primary text-base tracking-wide">{{$page.SiteOptions.Email}}</a>
                        </li>

                        <li class="pb-2 block">
                            <a href="tel:0123234222" class="font-semibold text-gray-300 transition-colors hover:text-primary text-base tracking-wide">{{$page.SiteOptions.Phone}}</a>
                        </li>

                        <li class="pb-2 block">
                            
                            <inertia-link :href="route('welcome')"  class="font-semibold text-gray-300 transition-colors hover:text-primary text-base tracking-wide"> 
                                {{$page.SiteOptions.Title}}
                            </inertia-link>
                        </li>

                    </ul>
                </div>
                <div class="text-center py-16 lg:py-0">
                    <inertia-link  :href="route('welcome')" class="font-semibold text-gray-300 text-4xl uppercase tracking-wider">
                        {{$page.SiteOptions.Title}}
                    </inertia-link>

                    <div class="flex items-center justify-center pt-5">

                        <a :href="$page.SiteOptions.Social.Facebook" v-if="$page.SiteOptions.Social.Facebook" class="group" target="_blank" >
                            <span class="sr-only">Social link</span>
                            <div class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i class="bx bxl-facebook text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a :href="$page.SiteOptions.Social.Twitter" v-if="$page.SiteOptions.Social.Twitter" class="group" target="_blank" >
                            <span class="sr-only">Social link</span>
                            <div class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i class="bx bxl-twitter text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a :href="$page.SiteOptions.Social.Instagram" v-if="$page.SiteOptions.Social.Instagram" class="group" target="_blank" >
                            <span class="sr-only">Social link</span>
                            <div class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i class="bx bxl-instagram text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a :href="$page.SiteOptions.Social.Pinterest" v-if="$page.SiteOptions.Social.Pinterest"  class="group" target="_blank" > 
                            <span class="sr-only">Social link</span>
                            <div class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i class="bx bxl-pinterest text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a :href="$page.SiteOptions.Social.LinkedIn" v-if="$page.SiteOptions.Social.LinkedIn"  class="group" target="_blank" > 
                            <span class="sr-only">Social link</span>
                            <div class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i class="bx bxl-linkedin text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                    </div>
                </div>
                <div class="text-center lg:text-left">
                    <h4 class="font-semibold text-gray-300 text-2xl pb-8">Link</h4>
                    <ul class="list-reset">

                        <li class="pb-2 block">
                            <inertia-link :href="route('welcome')" class="font-semibold text-gray-300 hover:text-primary text-base tracking-wide">HOME</inertia-link>
                        </li> 
                        <li class="pb-2 block">
                            <inertia-link :href="route('shop.index')" class="font-semibold text-gray-300 hover:text-primary text-base tracking-wide">SHOP</inertia-link>
                        </li>
                        <li class="pb-2 block">
                            <inertia-link :href="route('blog.index')" class="font-semibold text-gray-300 hover:text-primary text-base tracking-wide">BLOG</inertia-link>                        </li>

                    </ul>
                </div>
            </div>
        </div>

    </div>

    <div class="container py-8">
        <p class="font-hkregular text-secondary text-base text-center">{{$page.SiteOptions.FooterCopyRightText}}</p>
    </div>   

</footer>
</template>
<script> 
// import ApplicationLogo from './components/ApplicationLogo'

export default { 
    components:{
        ApplicationLogo:() => import('./components/ApplicationLogo'),
    },
    computed: {
        IsVisibleFooter() {
            switch (this.$page.currentRouteName) {
                // case 'login':
                //     return false;      
                // break;
                // case 'register':
                //     return false;      
                // break;
                // case 'password.request':
                //     return false;      
                // break;
                // case 'password.reset':
                //     return false;      
                // break;
            
                // case 'verification.notice':
                //     return false;      
                // break;

                // case 'cart.success':
                //     return false;      
                // break;
 
            
                default:
                    return true;      
                break;
            }
        },        
       
    },

}
</script>