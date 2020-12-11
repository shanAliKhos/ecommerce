<template>
    <div class="container border-t border-grey-dark">
        <div class="flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24">
            <div class="lg:w-2/3 lg:pr-16 xl:pr-20">
                <div class="flex flex-wrap items-center">
                    <a href="/cart/" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular ">Cart</a>
                    <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
                    <a href="/cart/customer-info" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkbold ">Customer information</a>
                    <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
                    <a href="/cart/shipping-method" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular ">Shipping method</a>
                    <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
                    <a href="/cart/payment-method" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular  ">Payment method</a>
                    <i class="bx bx-chevron-right text-sm text-transparent px-2"></i>
                </div>
     
       
                <div class="mt-10 md:mt-12 border border-grey-darker rounded px-4 sm:px-5">
                    <div class="flex justify-between py-2 border-b border-grey-dark">
                        <div class="w-1/5">
                            <p class="font-hkregular text-secondary">Contact</p>
                        </div>
                        <div class="w-3/5">
                            <p class="font-hkregular text-secondary">{{CustomerInformation?CustomerInformation.email:""}}</p>
                        </div>
                        <div class="w-1/5 text-right">
                            <inertia-link :href="route('cart.CustomerInfomation')" class="font-hkregular text-primary underline">Change</inertia-link>
                        </div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div class="w-1/5">
                            <p class="font-hkregular text-secondary">Ship to</p>
                        </div>
                        <div class="w-3/5">
                            <p class="font-hkregular text-secondary">{{CustomerInformation?CustomerInformation.address:""}}</p>
                        </div>
                        <div class="w-1/5 text-right">
                            <inertia-link :href="route('cart.CustomerInfomation')" class="font-hkregular text-primary underline">Change</inertia-link>
                        </div>
                    </div>
                </div>
                <div class="pt-8 md:pt-10">
                    <h1 class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">Shipping Type </h1>

                    <div class="mt-5 md:mt-6 border border-grey-darker rounded px-4 sm:px-5">
                        <!-- <div class="flex justify-between border-b border-grey-dark py-2">
                            <div class="flex items-center">
                                <label for="shipping_international" class="block relative h-0 w-0 overflow-hidden">International Shipping</label>
                                <input type="radio" value="International Shipping" v-model="form.shipment_type" class="form-checkbox" id="InternationalShipping" > 

                                <input type="checkbox" v-model="form.shipment_type" class="form-checkbox" id="shipping_international" />
                                <p class="ml-3 font-hkregular text-secondary"> International Shipping</p>
                            </div>
                            <p class="font-hkregular uppercase text-secondary"> $20</p>
                        </div> -->
                        <div class="flex justify-between py-2">
                            <div class="flex items-center">
                                <label for="shipping_normal" class="block relative h-0 w-0 overflow-hidden">Normal 3 days delivery</label>
                                <input type="radio" value="Normal 3 days delivery" v-model="form.shipment_type" class="form-checkbox" id="shipping_normal" > 
                                <p class="ml-3 font-hkregular text-secondary"> Normal 3 days delivery</p>
                            </div>
                            <p class="font-hkregular uppercase text-secondary">FREE</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 sm:pt-12">

                    <inertia-link preserve-scroll :href="route('cart.index')"
                        class="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all">
                        <i class="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
                        Return to Cart
                    </inertia-link>


                    <div class="flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3 hidden lg:block">
                        <button   
                            @click="store"
                            type="button"
                            class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full  "
                            > 
                            <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                            </svg>                              
                            <svg v-else  class="transition  ease-in-out  animate-spin h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <svg viewBox="0 0 20 20" class="h-6 w-6 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                            </svg>                                  
                            Proceed
                        </button>                                  
                    </div>                       
                    
                    <div class="mobile-secondary-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 ">
                        <div class="grid grid-cols-4 gap-2 flex justify-around"> 

                            <div class="w-1/2 relative px-2 py-2 flex item-center">
                                
                            </div>
                            <div class="w-1/2 relative px-2 py-2 flex item-center justify-end">
                                <button :disabled="sending" @click="store" type="button"
                                    :class="{'opacity-50 pointer-events-none':sending}"  
                                    class="flex items-center transition duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none rounded px-2 py-2 text-white text-sm font-semibold uppercase shadow" >
                                    <svg v-if="!sending" class="transition duration-700 ease-in-out  h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg> 
                                    <svg v-else  class="transition  ease-in-out  animate-spin h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <svg viewBox="0 0 20 20" class="h-6 w-6 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                                    </svg>                                   
                                    <span class="tracking-tighter">Proceed</span>
                                </button> 
                            </div>
    
                        </div>
                    </div>                              


                </div>
            
            </div>
            <your-order ></your-order>
        </div>
    </div>
</template>
<script>
import AppLayout from './../shared/AppLayout'   

import YourOrder from './YourOrder' 
import PaymentForm from './PaymentForm';  

export default {
    layout:AppLayout,
    components: {
        YourOrder,
        PaymentForm, 
    }, 
    data() {
        return {
            form:{
                shipment_type:'Normal 3 days delivery', 
            },
            sending:false,
        }
    },
    computed: {
        CustomerInformation(){
            return this.$page.CustomerInformation;
        },
    },        
    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("shipment_type", self.form.shipment_type || ''); 

            self.$inertia.post(this.route('cart.ShippingMethodStore'), formData,{
                preserveState: true, 
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false, 
            });
        },
    },

  
}
</script>