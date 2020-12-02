<template>
<div class="container">
 


    <div class="pb-10 md:pb-10 lg:pb-10 flex flex-col lg:flex-row justify-between">
        <div
            class="w-full lg:w-3/8 xl:w-1/3 mx-auto lg:mx-0 border border-grey-darker shadow px-6 xl:px-8 py-10 lg:py-8 text-center lg:text-left">
            <h2 class="font-butlerregular border-b border-grey-dark pb-6 text-secondary text-2xl sm:text-3xl md:text-4xl"> Quick contact</h2>
            <h4 class="font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"> Email</h4>
            <p class="font-hkregular text-secondary"> {{$page.SiteOptions.Email}} </p>
            <h4 class="font-hkbold text-secondary text-lg sm:text-xl uppercase pt-8"> Phone</h4>
            <p class="font-hkregular text-secondary">+0 321-654-0987 </p>
     
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
            <form @submit.prevent="store"> 
                <p class="font-hkregular text-secondary text-lg pb-8"> Any questions? Contact us through whats app or on our contact from below.</p>
                <div class="flex flex-col sm:flex-row justify-between mb-5 -mx-5">
                    <div class="sm:w-1/2 px-5 mb-8 sm:mb-0">
                        <label for="name" class="font-hkregular text-secondary block mb-2">Name</label>
                        <input v-model="form.name" type="text" placeholder="Enter your name" class="form-input" id="name" />
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.name">{{$page.errors.name}}</p>

                    </div>
                    <div class="sm:w-1/2 px-5">
                        <label for="email" class="font-hkregular text-secondary block mb-2">Email address</label>
                        <input v-model="form.email" type="text" placeholder="Enter your email" class="form-input" id="email" />
                        <p class="text-red-500 text-xs italic" v-if="$page.errors.email">{{$page.errors.email}}</p>
                    </div>
                </div>
                <div class="w-full mb-8">
                    <label for="subject" class="font-hkregular text-secondary block mb-2">Subject*</label>
                    <input v-model="form.subject" type="text" placeholder="Enter your subject" class="form-input" id="subject" />
                    <p class="text-red-500 text-xs italic" v-if="$page.errors.subject">{{$page.errors.subject}}</p>
                </div>
                <div class="w-full mb-8">
                    <label for="message" class="font-hkregular text-secondary block mb-2">Message*</label>
                    <textarea v-model="form.message" rows="5" placeholder="Enter your message" class="form-textarea" id="message"></textarea>
                    <p class="text-red-500 text-xs italic" v-if="$page.errors.message">{{$page.errors.message}}</p>
                </div>

                <div class="flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3">
                    <button   
                        type="submit"
                        class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full lg:w-1/2  "
                        > 
                        <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                        </svg>                              
                        <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>                           
                        SUBMIT
                    </button>                                  
                </div>        
            </form>
        </div>
    </div>

    <WelcomeIcons/>

    <div class="pb-16 md:pb-20 lg:pb-24" id="faq">
        <div class="text-center sm:w-5/6 md:w-full mx-auto md:mx-0">
            <h2 class="font-butlerregular text-secondary text-2xl sm:text-3xl md:text-7xl lg:text-5xl">
                Frequently Asked Questions</h2>
            <p class="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2">
                Get the latest news & updates from Ciloe</p>

            <div class="pt-12" x-data="{ faqIndex: null }">

                <div class="faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer">
                    <div class="faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary"
                        @click="faqIndex === 1 ? faqIndex=null : faqIndex=1"
                        :class="{ 'border-b': faqIndex=== 1 }">
                        <div class="w-5/6 text-left">
                            <span class="font-hkmedium text-secondary md:text-lg uppercase">How many days does the product takes to arrive?</span>
                        </div>
                        <div class="w-1/6 text-right">
                            <i class="bx text-primary text-2xl" :class="faqIndex === 1 ? 'bx-minus' : 'bx-plus'"></i>
                        </div>
                    </div>
                    <div class="item-height   transition-all overflow-auto cursor-text"
                        :class="{ 'active': faqIndex=== 1 }">
                        <div class="px-5 md:px-8 py-5">
                            <p class="font-hkregular text-secondary text-sm leading-loose text-left">It depends on the product, but it can take 3-5 days max.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="faq-wrapper border-t border-l border-r border-primary last:border-b cursor-pointer">
                    <div class="faq-question   transition-all bg-primary-lightest flex justify-between items-center px-5 md:px-8 py-5 border-primary"
                        @click="faqIndex === 2 ? faqIndex=null : faqIndex=2"
                        :class="{ 'border-b': faqIndex=== 2 }">
                        <div class="w-5/6 text-left">
                        <   span class="font-hkmedium text-secondary md:text-lg uppercase">How much is shipping?</span>
                        </div>
                        <div class="w-1/6 text-right">
                            <i class="bx text-primary text-2xl" :class="faqIndex === 2 ? 'bx-minus' : 'bx-plus'"></i>
                        </div>
                    </div>
                    <div class="item-height   transition-all overflow-auto cursor-text"
                        :class="{ 'active': faqIndex=== 2 }">
                        <div class="px-5 md:px-8 py-5">
                            <p class="font-hkregular text-secondary text-sm leading-loose text-left">
                                It depends on a lot of factors like where you're located and how many things you buy. We do have a free shipping special if you buy more than $50.
                            </p>
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
            form:{
                name:null,
                email:null,
                subject:null,
                message:null,
            },
            faqIndex:null,
            sending:false,
        }
    },
    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("name", self.form.name || '');
            formData.append("email", self.form.email || '');
            formData.append("subject", self.form.subject || '');
            formData.append("message", self.form.message || ''); 

            // self.$inertia.post(route('contact.store'), formData,{
            //     preserveState: true, 
            //     onStart: () => this.sending = true,
            //     onFinish: () => this.sending = false,
            //     onSuccess: () => {
            //         if (Object.keys(this.$page.errors).length === 0) {
            //             this.form.name = null
            //             this.form.email = null
            //             this.form.subject = null
            //             this.form.message = null
            //         }
            //     },             
            // });
        },
    },          
    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },    
}
</script>
