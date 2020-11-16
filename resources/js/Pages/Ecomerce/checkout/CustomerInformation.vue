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

                <div class="pt-10 md:pt-12">
                    <div class="flex flex-col-reverse sm:flex-row items-center justify-between">
                        <h1 class="font-hkmedium text-secondary text-xl md:text-2xl"> Contact information </h1>
                        <!-- <p class="font-hkrehular text-secondary"> Already have an account?
                            <a href="/login" class="font-hkbold text-primary">Log in</a>
                        </p> -->
                    </div>
                    <div class="pt-4 md:pt-5">
                        <label for="email" class="block relative h-0 w-0 overflow-hidden">Email</label>
                        <input type="email" placeholder="Enter your email address" class="form-input" id="email" />
                        <div class="flex items-center pt-4">
                            <label for="offers" class="block relative h-0 w-0 overflow-hidden">Sign up to exclusive offers</label>
                            <input type="checkbox" class="form-checkbox" id="offers" />
                            <p class="font-hkregular text-sm pl-3 text-secondary">
                                Keep me up to date on news and exclusive offers
                            </p>
                        </div>
                    </div>
                </div>
                <div class="pt-4 pb-10">
                    <h4 class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">
                        Shipping address
                    </h4>
                    <div class="pt-4 md:pt-5">
                        <div class="flex justify-between">
                            <label for="first_name" class="block relative h-0 w-0 overflow-hidden">First
                                Name</label>
                            <input type="text" placeholder="First Name" class="form-input mb-4 sm:mb-5 mr-2"
                                id="first_name" />
                            <label for="last_name" class="block relative h-0 w-0 overflow-hidden">Last
                                Name</label>
                            <input type="text" placeholder="Last Name" class="form-input mb-4 sm:mb-5 ml-1"
                                id="last_name" />
                        </div>
                        <label for="address" class="block relative h-0 w-0 overflow-hidden">Address</label>
                        <input type="text" placeholder="You address" class="form-input mb-4 sm:mb-5" id="address" />
                        <label for="address2" class="block relative h-0 w-0 overflow-hidden">Address 2</label>
                        <input type="text" placeholder="Apartment, Suite, etc" class="form-input mb-4 sm:mb-5" id="address2" />
                        <label for="city" class="block relative h-0 w-0 overflow-hidden">City</label>
                        <input type="text" placeholder="City" class="form-input mb-4 sm:mb-5" id="city" />
                        <div class="flex justify-between">
                            <label for="country" class="block relative h-0 w-0 overflow-hidden">Country</label>
                            <input type="text" placeholder="Country/Region" class="form-input mb-4 sm:mb-5 mr-2" id="country" />
                            <label for="post_code" class="block relative h-0 w-0 overflow-hidden">Post code</label>
                            <input type="number" placeholder="Post code" class="form-input mb-4 sm:mb-5 ml-1" id="post_code" />
                        </div>
                        <div class="flex items-center pt-2">
                            <label for="save_info" class="block relative h-0 w-0 overflow-hidden">Save Info</label>
                            <input type="checkbox" class="form-checkbox" id="save_info" />
                            <p class="font-hkregular text-sm pl-3 text-secondary"> Save this information for next time </p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12">
                        
                        <inertia-link preserve-scroll :href="route('cart.index')"
                            class="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all">
                            <i class="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
                            Return to Cart
                        </inertia-link>

                        <a href="/cart/shipping-method" class="btn btn-primary">Continue to shipping method</a>
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
                
            },
            sending:false,
        }
    },
    methods: {
        store() {
            const self = this;
            let formData = new FormData();
            formData.append("code", self.form.code || '');
            formData.append("name", self.form.name || '');
            formData.append("frontend_type", self.form.frontend_type || '');
            formData.append("is_required", self.form.is_required || '');
            formData.append("is_filterable", self.form.is_filterable || '');

            self.$inertia.post(this.route('cart.CustomerInfomationStore'), formData,{
                preserveState: true,
                preserveScroll: true,                
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.form.name = null
                        this.form.logo = null
                    }
                },             
            });
        },
  
    },
}
</script>