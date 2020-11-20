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


                            <!-- <div class="flex justify-between">
                             
                 

                            

                            <div class="flex justify-between">

                                <label for="country" class="block relative h-0 w-0 overflow-hidden">Country</label>
                                <input type="text" v-model="form.country" placeholder="Country/Region" class="form-input mb-4 sm:mb-5 mr-2" id="country" />
                                <p class="text-red-500 text-xs italic">Please choose a password.</p>

                                <label for="post_code" class="block relative h-0 w-0 overflow-hidden">Post code</label>
                                <input type="number" v-model="form.postal_code" placeholder="Post code" class="form-input mb-4 sm:mb-5 ml-1" id="post_code" />
                                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div class="flex items-center pt-2">
                                <label for="save_info" class="block relative h-0 w-0 overflow-hidden">Save Info</label>
                                <input type="checkbox" v-model="form.saveinformation" class="form-checkbox" id="save_info" />
                                <p class="font-hkregular text-sm pl-3 text-secondary"> Save this information for next time </p>
                            </div> -->

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
                            <button type="submit" class="btn btn-primary">Continue to shipping method</button>

                        </div>

                    </div>

                </form>
            </div>
       
            
            <your-order ></your-order>
        </div>
    </div>
</template>
<script>
import AppLayout from './../../AppLayout'  
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