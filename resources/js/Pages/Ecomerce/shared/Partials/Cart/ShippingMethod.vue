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
                        <div class="flex justify-between border-b border-grey-dark py-2">
                            <div class="flex items-center">
                                <label for="shipping_international" class="block relative h-0 w-0 overflow-hidden">International Shipping</label>
                                <input type="radio" value="International Shipping" v-model="form.shipment_type" class="form-checkbox" id="InternationalShipping" > 

                                <!-- <input type="checkbox" v-model="form.shipment_type" class="form-checkbox" id="shipping_international" /> -->
                                <p class="ml-3 font-hkregular text-secondary"> International Shipping</p>
                            </div>
                            <p class="font-hkregular uppercase text-secondary"> $20</p>
                        </div>
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

                    <button type="button" @click="store" class="btn btn-primary mb-3 sm:mb-0">Continue to payment method</button>

                   
                </div>
            
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