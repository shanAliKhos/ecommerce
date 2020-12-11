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
                
                <form @submit.prevent="store()">

                    <div class="pt-10 md:pt-12">
                        <div class="flex flex-col-reverse sm:flex-row items-center justify-between">
                            <h1 class="font-hkmedium text-secondary text-xl md:text-2xl"> Contact information </h1>
                        </div>
                        <div class="pt-4 md:pt-5">
                            

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-emai">Email</label>
                                    <input v-model.number="form.email" placeholder="Email" class=" form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email">
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.email">{{$page.errors.email}}</p>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-mobile"> Mobile </label>
                                    <input v-model.number="form.mobile" placeholder="Mobile Number" class="form-input " id="grid-last-name" type="text">
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.mobile">{{$page.errors.mobile}}</p>

                                </div>
                            </div>                            
                              
                        </div>
                    </div>
                    <div class="pt-4 pb-10">
                        <h4 class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">Shipping address</h4>
                        <div class="pt-4 md:pt-5">

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">First Name</label>
                                    <input v-model="form.first_name" placeholder="First Name" class="form-input " id="grid-first-fname" type="text">
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.first_name">{{$page.errors.first_name}}</p>

                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"> Last Name </label>
                                    <input v-model="form.last_name" placeholder="Last Name"  class="form-input " id="grid-last-lname" type="text">
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.last_name">{{$page.errors.last_name}}</p>

                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Address</label>
                                    <input  v-model="form.address" placeholder="You address" class="form-input " id="grid-address" type="text" >
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.address">{{$page.errors.address}}</p>

                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">City</label>
                                    <input v-model="form.city" class="form-input" id="grid-city" type="text" placeholder="City">
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.city">{{$page.errors.city}}</p>
                                </div
                                >
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Country</label>
                                    <div class="relative">
                                        <select v-model="form.country" class="form-input" id="grid-state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <p class="text-red-500 text-xs italic" v-if="$page.errors.country">{{$page.errors.country}}</p>

                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">Zip/Postal Code</label>
                                    <input v-model.number="form.postal_code" class="form-input " id="grid-zip" type="text" placeholder="90210">
                                    <p class="text-red-500 text-xs italic" v-if="$page.errors.postal_code">{{$page.errors.postal_code}}</p>
                                </div>
                            </div>
 
                            <div class="flex items-center pt-4">
                                <label for="offers" class="block relative h-0 w-0 overflow-hidden">Sign up to exclusive offers</label>
                                <input type="checkbox" v-model="form.get_updates"  class="form-checkbox" id="offers" />
                                <p class="font-hkregular text-sm pl-3 text-secondary">
                                    Keep me up to date on news and exclusive offers
                                </p>
                            </div>
                            

                        </div>
                        
                        <div class="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12">
                            
                            <inertia-link preserve-scroll :href="route('cart.index')"
                                class="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all">
                                <i class="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
                                Return to Cart
                            </inertia-link> 

                            <div class="flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3 hidden lg:block">
                                <button   
                                    type="submit"
                                    class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full  "
                                    > 
                                    <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                                    </svg>                              
                                    <svg v-else class="transition  ease-in-out  animate-spin h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <svg viewBox="0 0 20 20" class="h-6 w-6 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                                    </svg>                                  
                                    Continue to shipping method
                                </button>                                  
                            </div>                                   


                        </div>


                        <div class="mobile-secondary-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 ">
                            <div class="grid grid-cols-4 gap-2 flex justify-around"> 

                                <div class="w-1/2 relative px-2 py-2 flex item-center">
                                   
                                </div>
                                <div class="w-1/2 relative px-2 py-2 flex item-center justify-end">
                                    <button :disabled="sending"  type="submit"
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

                </form>
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
    remember: 'form',

    data() {
        return {
            form:{
                email:this.$page.CustomerInformation?this.$page.CustomerInformation.email:null,
                first_name:this.$page.CustomerInformation?this.$page.CustomerInformation.first_name:null,
                last_name:this.$page.CustomerInformation?this.$page.CustomerInformation.last_name:null,
                get_updates:this.$page.CustomerInformation?this.$page.CustomerInformation.get_updates:null,
                address:this.$page.CustomerInformation?this.$page.CustomerInformation.address:null,
                city:this.$page.CustomerInformation?this.$page.CustomerInformation.city:null,
                country:this.$page.CustomerInformation?this.$page.CustomerInformation.country:null,
                postal_code:this.$page.CustomerInformation?this.$page.CustomerInformation.postal_code:null,
                mobile:this.$page.CustomerInformation?this.$page.CustomerInformation.mobile:null,
                saveinformation:this.$page.CustomerInformation?this.$page.CustomerInformation.saveinformation:null,
            },
            sending:false,
        }
    },
    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("email", self.form.email || '');
            formData.append("first_name", self.form.first_name || '');
            formData.append("last_name", self.form.last_name || '');
            formData.append("get_updates", self.form.get_updates || '');
            formData.append("address", self.form.address || '');
            formData.append("city", self.form.city || '');
            formData.append("country", self.form.country || '');
            formData.append("postal_code", self.form.postal_code || '');
            formData.append("mobile", self.form.mobile || '');
            formData.append("saveinformation", self.form.saveinformation || '');

            self.$inertia.post(this.route('cart.CustomerInfomationStore'), formData,{
                preserveState: true,              
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                      
            });
        },
  
    },

}
</script>