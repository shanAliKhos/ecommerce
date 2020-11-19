<template>
<div class="container">

    <!-- <div class="flex relative">
        <div class="bg-no-repeat bg-cover bg-center w-3/4 ml-auto h-56 sm:h-64 md:h-68 bg-footer-bg">
        </div>
        <div class="w-full h-56 sm:h-64 md:h-68 bg-no-repeat bg-cover absolute top-0 left-0" style="background-image: linear-gradient(90deg, rgba(55,36,31,1) 40%, rgba(0,0,0,0) 100%)">
            <div class="py-20 px-6 sm:px-12 lg:px-20">
                <h1 class="font-butlerregular text-white text-2xl sm:text-3xl md:text-7xl lg:text-5xl"> Contact Us</h1>
                <div class="flex pt-2">
                    <inertia-link :href="route('welcome')" class="font-hkregular text-white text-base hover:text-primary transition-colors">Home</inertia-link>
                    <span class="font-hkregular text-white text-base px-2">.</span>
                    <span class="font-hkregular text-white text-base">Contact Us</span>
                </div>
            </div>
        </div>
    </div> -->

    <!-- <div class="flex flex-col md:flex-row py-20 md:py-24">

        <div class="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
            <div>
                <img src="https://d33wubrfki0l68.cloudfront.net/3c5b77be07c217ce310e179b30e44da59d358fb8/1fd98/assets/img/icons/icon-shipping.svg" class="w-auto h-12" alt="icon" />
            </div>
            <div class="ml-6 mt-3 lg:mt-0">
                <h3 class="font-hksemibold text-primary text-xl tracking-wide"> Free shipping</h3>
                <p class="font-hkregular text-secondary-lighter text-base tracking-wide"> On all orders over $30</p>
            </div>
        </div>

        <div
            class="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
            <div>
                <img src="https://d33wubrfki0l68.cloudfront.net/2e7e83f4e008c5efc2301e9ca7dde06e98c9a2b3/0b6dc/assets/img/icons/icon-support.svg"
                    class="w-auto h-12" alt="icon" />
            </div>
            <div class="ml-6 mt-3 lg:mt-0">
                <h3 class="font-hksemibold text-primary text-xl tracking-wide"> Always available</h3>
                <p class="font-hkregular text-secondary-lighter text-base tracking-wide"> 24/7 call center available</p>
            </div>
        </div>

        <div
            class="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
            <div>
                <img src="https://d33wubrfki0l68.cloudfront.net/c5fe62fc1adbb5e1e57a703b0f916a2ff38b4f77/efebf/assets/img/icons/icon-return.svg" class="w-auto h-12" alt="icon" />
            </div>
            <div class="ml-6 mt-3 lg:mt-0">
                <h3 class="font-hksemibold text-primary text-xl tracking-wide"> Free returns</h3>
                <p class="font-hkregular text-secondary-lighter text-base tracking-wide"> 30 days free return policy</p>
            </div>
        </div>

    </div>  -->
    <WelcomeIcons/>

    <div class="pb-16 md:pb-20 lg:pb-24 flex flex-col lg:flex-row justify-between">
        <div
            class="w-full lg:w-3/8 xl:w-1/3 mx-auto lg:mx-0 border border-grey-darker shadow px-6 xl:px-8 py-10 lg:py-8 text-center lg:text-left">
            <h2 class="font-butlerregular border-b border-grey-dark pb-6 text-secondary text-2xl sm:text-3xl md:text-4xl"> Quick contact</h2>
            <h4 class="font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"> Email</h4>
            <p class="font-hkregular text-secondary"> {{$page.SiteOptions.Email}} </p>
            <h4 class="font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"> Phone</h4>
            <p class="font-hkregular text-secondary">+0 321-654-0987 </p>
            <!-- <h4 class="font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"> WORKING HOURS</h4>
            <p class="font-hkbold text-secondary text-lg pt-3">Summer</p>
            <p class="font-hkregular text-secondary"> <span class="text-primary">(May to Nov) :</span> Mon - Sat: 9.00 to 18.00</p>

            <p class="font-hkbold text-secondary text-lg pt-3">Winter </p>
            <p class="font-hkregular text-secondary"> <span class="text-primary">(Dic to Apr) :</span> Mon - Sat: 9.00 to 17.00</p> -->


            <div class="pt-8">
                <h4 class="font-hkbold text-secondary text-lg sm:text-xl uppercase"> Follow Us</h4>
                <div class="flex justify-center lg:justify-start pt-3">
                    <a href="/" class="bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl"><i class="bx bxl-facebook text-white"></i></a>
                    <a href="/" class="bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl"><i class="bx bxl-twitter text-white"></i></a>
                    <a href="/" class="bg-secondary-lighter transition-colors hover:bg-primary p-3 rounded-full mr-2 flex items-center text-xl"><i class="bx bxl-google text-white"></i></a>
                    <a href="/" class="bg-secondary-lighter hover:bg-primary transition-colors p-3 rounded-full flex items-center text-xl"><i class="bx bxl-linkedin text-white"></i></a>
                </div>
            </div>
        </div>

        <div class="lg:w-3/5 border border-grey-darker shadow px-8 py-10 lg:py-8 mt-10 md:mt-12 lg:mt-0">
            <form>
                <p class="font-hkregular text-secondary text-lg pb-8"> Any questions? Contact us through whats app or on our contact from below.</p>
                <div class="flex flex-col sm:flex-row justify-between mb-5 -mx-5">
                    <div class="sm:w-1/2 px-5 mb-8 sm:mb-0">
                        <label for="name" class="font-hkregular text-secondary block mb-2">Name</label>
                        <input type="text" placeholder="Enter your name" class="form-input" id="name" />
                    </div>
                    <div class="sm:w-1/2 px-5">
                        <label for="email" class="font-hkregular text-secondary block mb-2">Email address</label>
                        <input type="text" placeholder="Enter your email" class="form-input" id="email" />
                    </div>
                </div>
                <div class="w-full mb-8">
                    <label for="subject" class="font-hkregular text-secondary block mb-2">Subject*</label>
                    <input type="text" placeholder="Enter your subject" class="form-input" id="subject" />
                </div>
                <div class="w-full mb-8">
                    <label for="message" class="font-hkregular text-secondary block mb-2">Message*</label>
                    <textarea rows="5" placeholder="Enter your message" class="form-textarea" id="message"></textarea>
                </div>
                <button class="btn btn-primary" aria-label="Submit button">SUBMIT</button>
            </form>
        </div>
    </div>

    <div class="pb-16 md:pb-20 lg:pb-24" id="faq">
        <div class="text-center sm:w-5/6 md:w-full mx-auto md:mx-0">
            <h2 class="font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl">
                Frequently Asked Questions</h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2">
                Get the latest news & updates from Ciloe</p>

            <div class="pt-12" x-data="{ faqIndex: null }">

                <div
                    class="faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer">
                    <div class="faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary"
                        @click="faqIndex === 1 ? faqIndex=null : faqIndex=1"
                        :class="{ 'border-b': faqIndex=== 1 }">
                        <div class="w-5/6 text-left"><span
                                class="font-hkmedium text-secondary md:text-lg uppercase">How many days does
                                the product takes to arrive?</span>
                        </div>
                        <div class="w-1/6 text-right">
                            <i class="bx text-primary text-2xl"
                                :class="faqIndex === 1 ? 'bx-minus' : 'bx-plus'"></i>
                        </div>
                    </div>
                    <div class="item-height   transition-all overflow-auto cursor-text"
                        :class="{ 'active': faqIndex=== 1 }">
                        <div class="px-5 md:px-8 py-5">
                            <p class="font-hkregular text-secondary text-sm leading-loose text-left">
                                It depends on the product, but it can take 3-5 days max.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer">
                    <div class="faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary"
                        @click="faqIndex === 2 ? faqIndex=null : faqIndex=2"
                        :class="{ 'border-b': faqIndex=== 2 }">
                        <div class="w-5/6 text-left"><span
                                class="font-hkmedium text-secondary md:text-lg uppercase">How much is
                                shipping?</span>
                        </div>
                        <div class="w-1/6 text-right">
                            <i class="bx text-primary text-2xl"
                                :class="faqIndex === 2 ? 'bx-minus' : 'bx-plus'"></i>
                        </div>
                    </div>
                    <div class="item-height   transition-all overflow-auto cursor-text"
                        :class="{ 'active': faqIndex=== 2 }">
                        <div class="px-5 md:px-8 py-5">
                            <p class="font-hkregular text-secondary text-sm leading-loose text-left">
                                It depends on a lot of factors like where you're located and how many things
                                you buy. We do have a free shipping special if you buy more than $50.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div> 
</template>

<script>
import AppLayout from './../shared/AppLayout'   
import WelcomeIcons from './../shared/Partials/components/WelcomeIcons'  

export default {
    layout: AppLayout,     
    metaInfo: { 
        title: 'Contact' 
    }, 
    components:{
        WelcomeIcons,
    },
    data () {
        return {
            faqIndex:null,
        }
    },
}
</script>
