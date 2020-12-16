<template>
<div class="xxstheme-footer bg-gray-200 " v-if="IsVisibleFooter">
 

 
    <div class="bg-gray-50 lg:rounded-b-full rounded-b-xl">
        <div class="py-10 text-center">
            <p class="font-semibold text-primary text-3xl sm:text-4xl tracking-wide"> Let's keep in touch</p>
            <p class="font-regular  text-lg sm:text-xl pt-3 px-6"> Join our list and save 15% off your first order.</p>
            <form class="pt-10 sm:pt-12">
                <div class="w-4/6 sm:w-3/4 lg:w-2/5 xl:w-2/5 mx-auto flex flex-col sm:flex-row justify-center items-center">
                    <!-- <label for="cta_email" class="block relative h-0 w-0 overflow-hidden ">Email</label> -->
                    <input 
                        type="email" 
                        name="cta_email" 
                        id="cta_email" 
                        placeholder="ENTER YOUR EMAIL"
                        class="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white" 
                    />
                </div>
                <div class="w-4/6 sm:w-3/4 lg:w-2/5  mx-auto my-2 flex flex-col sm:flex-row justify-center items-center">
                    <button type="button" class="flex flex-inline justify-center items-center transition duration-700 ease-in bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 shadow-lg hover:shadow-2xl shadow-lg hover:bg-gradient-to-l from-yellow-500 via-yellow-400 to-orange-500 focus:outline-none rounded px-2 py-3 text-white font-semibold shadow   uppercase w-full" aria-label="Subscribe button">SUBSCRIBE</button>
                </div>
            </form>
        </div>
    </div>


    <div class="py-16 sm:py-20 md:py-24 text-gray-500">
        <div class="flex flex-col lg:flex-row items-center justify-around lg:px-20">
            <div class="lg:w-1/3 py-5 order-2 lg:order-1">
                <p class="font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-start">Contact</p>
                <ul>
                    <li class="pb-2 block flex items-center justify-center lg:justify-start">
                        <a href="mailto:test.email0123@elyssi.com" class="font-semibold  transition-colors hover:text-primary text-base tracking-wide">{{$page.SiteOptions.Email}}</a>
                    </li>

                    <li class="pb-2 block flex items-center justify-center lg:justify-start">
                        <a href="tel:0123234222" class="font-semibold  transition-colors hover:text-primary text-base tracking-wide">{{$page.SiteOptions.Phone}}</a>
                    </li>

                    <li class="pb-2 block flex items-center justify-center lg:justify-start">
                        
                        <inertia-link :href="route('welcome')"  class="font-semibold  transition-colors hover:text-primary text-base tracking-wide"> 
                            {{$page.SiteOptions.Title}}
                        </inertia-link>
                    </li>

                </ul>
            </div>
            <div class="lg:w-1/3 py-5 order-1 lg:order-2">
                <inertia-link  :href="route('welcome')" class="font-semibold  text-4xl uppercase tracking-wider flex items-center justify-center">
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
            <div class="w-1/3 py-5 order-3 lg:order-3">
                <p class="font-semibold text-2xl pb-8 flex items-center justify-center lg:justify-end">Link</p>
                <ul>
                    <li class="pb-2 block flex items-center justify-center lg:justify-end">
                        <inertia-link :href="route('welcome')" class="font-semibold  hover:text-primary text-base tracking-wide">HOME</inertia-link>
                    </li> 
                    <li class="pb-2 block flex items-center justify-center lg:justify-end">
                        <inertia-link :href="route('shop.index')" class="font-semibold  hover:text-primary text-base tracking-wide">SHOP</inertia-link>
                    </li>
                    <li class="pb-2 block flex items-center justify-center lg:justify-end">
                        <inertia-link :href="route('blog.index')" class="font-semibold  hover:text-primary text-base tracking-wide">BLOG</inertia-link>                        </li>

                </ul>
            </div>
        </div>
    </div>

 
 
    <div class="hidden lg:block ">
        <div class="flex item-centen justify-center border-gray-50 border rounded">
            <div class="font-semibold text-gray-400 text-base rounded bg-white py-1 px-5 mb-2">
                <p class="flex transition duration-500 ease-in-out transform  hover:translate-x-2 hover:text-orange-500 ">{{$page.SiteOptions.FooterCopyRightText}}</p>
            </div>
        </div>   
    </div>   

</div>
</template>
<script> 
import ApplicationLogo from './components/ApplicationLogo'

export default { 
    components:{
        ApplicationLogo,
    },
    computed: {
        IsVisibleFooter() {
            switch (this.$page.currentRouteName) {
                case 'login':
                    return false;      
                break;
                case 'register':
                    return false;      
                break;
                case 'password.request':
                    return false;      
                break;
                case 'password.reset':
                    return false;      
                break;
            
                case 'verification.notice':
                    return false;      
                break;

                case 'cart.index':
                    return false;      
                break;
                case 'cart.CustomerInfomation':
                    return false;      
                break;
                case 'cart.ShippingMethod':
                    return false;      
                break;
                case 'cart.PaymentMethod':
                    return false;      
                break;
                case 'cart.success':
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