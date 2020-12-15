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
     
       
                <div class="mt-10 md:mt-12 border border-grey-darker rounded px-4 sm:px-5 py-3">
                    <div class="flex pb-2 border-b border-grey-dark">
                        <div class="w-1/5 ">
                            <p class="font-hkregular text-secondary">Contact</p>
                        </div>
                        <div class="w-3/5">
                            <p class="font-hkregular text-secondary">{{CustomerInformation.email}}</p>
                        </div>
                        <div class="w-1/5 text-right">
                            <a href="/cart/customer-info"
                                class="font-hkregular text-primary underline">Change</a>
                        </div>
                    </div>
                    <div class="flex pt-2 pb-2 border-b border-grey-dark">
                        <div class="w-1/5 ">
                            <p class="font-hkregular text-secondary">Ship to</p>
                        </div>
                        <div class="w-3/5">
                            <p class="font-hkregular text-secondary">{{CustomerInformation.address}}</p>
                        </div>
                        <div class="w-1/5 text-right">
                            <a href="/cart/customer-info"
                                class="font-hkregular text-primary underline">Change</a>
                        </div>
                    </div>
                    <div class="flex pt-2">
                        <div class="w-1/5 ">
                            <p class="font-hkregular text-secondary">Method</p>
                        </div>
                        <p class="font-hkregular text-secondary">{{ ShipmentInformation.shipment_type }}</p>
                    </div>
                </div>
                <div class="pt-8 md:pt-10">
                    <h1 class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">Payment method</h1>
                    <p class="font-hkregular text-secondary pt-2">All transactionsare secure and encrypted</p>
                    <div class="mt-6 border border-grey-darker rounded px-4 sm:px-5 py-3">
                        

                        <PaymentForm></PaymentForm>
             
                    </div>
                </div>
       
                <div class="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 sm:pt-12">

                    <inertia-link preserve-scroll :href="route('cart.index')"
                        class="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all">
                        <i class="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
                        Return to Cart
                    </inertia-link>
 
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
    metaInfo: { title: 'PAyment Form' },   
    layout:AppLayout,
    components: {
        YourOrder,
        PaymentForm, 
    }, 
    data() {
        return { 
            sending:false,
        }
    },
    computed: {
        CustomerInformation(){
            return this.$page.CustomerInformation;
        },
        ShipmentInformation(){
            return this.$page.ShipmentInformation;
        },
    },      
}
</script>