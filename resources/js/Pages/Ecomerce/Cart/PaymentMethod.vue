<template>
  <div class="container border-t border-grey-400 mb-20  px-5 py-5 ">
    <div
      class="flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24"
    >
      <div class="lg:w-2/3 lg:pr-16 xl:pr-20">
        <div class="flex flex-wrap items-center">
          <inertia-link
            :href="route('cart.index')"
            class="transition-all border-b border-transparent hover:border-orange-500 text-sm text-gray-500 hover:text-orange-500 font-regular"
          > 
            Cart
          </inertia-link>           
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
          <inertia-link
            :href="route('cart.CustomerInfomation')"
            class="transition-all border-b border-transparent hover:border-orange-500 text-sm text-gray-500 hover:text-orange-500 font-regular"
          > 
            Customer information
          </inertia-link>             
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
          <inertia-link
            :href="route('cart.ShippingMethod')"
            class="transition-all border-b border-transparent hover:border-orange-500 text-sm text-gray-500 hover:text-orange-500 font-regular"
          > 
          Shipping method
          </inertia-link>                       
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
 
          <a
            href="javascript:;"
            class="transition-all border-b border-transparent border-orange-500 text-sm text-orange-500 font-bold"
            >Payment method</a
          >             
          <i class="bx bx-chevron-right text-sm text-transparent px-2"></i>       
        </div>

        <div
          class="mt-10 md:mt-12 border border-grey-darker rounded px-4 sm:px-5 py-3"
        >
          <div class="flex pb-2 border-b border-grey-dark">
            <div class="w-1/5">
              <p class="font-hkregular text-secondary">Contact</p>
            </div>
            <div class="w-3/5">
              <p class="font-hkregular text-secondary">
                {{ CustomerEmail }} / {{CustomerPhone}}
              </p>
            </div>
            <div class="w-1/5 text-right">
              <a
                href="/cart/customer-info"
                class="font-hkregular text-primary underline"
                >Change</a
              >
            </div>
          </div>
          <div class="flex pt-2 pb-2 border-b border-grey-dark">
            <div class="w-1/5">
              <p class="font-hkregular text-secondary">Ship to</p>
            </div>
            <div class="w-3/5">
              <p class="font-hkregular text-secondary">
                {{ CustomerAddress }}
              </p>
            </div>
            <div class="w-1/5 text-right">
              <a
                href="/cart/customer-info"
                class="font-hkregular text-primary underline"
                >Change</a
              >
            </div>
          </div>
          <div class="flex pt-2">
            <div class="w-1/5">
              <p class="font-hkregular text-secondary">Method</p>
            </div>
            <p class="font-hkregular text-secondary">
              {{ ShipmentInformation.shipment_type }}
            </p>
          </div>
        </div>


        <div class="pt-8 md:pt-10">
          <h1
            class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left"
          >
            Perfect Money Payments
          </h1>
          <p class="font-hkregular text-secondary pt-2">
            All transactionsare secure and encrypted
          </p>
          <div class="mt-6 border border-grey-darker rounded px-4 sm:px-5 py-3">
            <PMForm/>
          </div>
        </div>        
        
        <div class="pt-8 md:pt-10">
          <h1
            class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left"
          >
            Payments with Card
          </h1>
          <p class="font-hkregular text-secondary pt-2">
            All transactionsare secure and encrypted
          </p>
          <div class="mt-6 border border-grey-darker rounded px-4 sm:px-5 py-3">
            <PaymentForm></PaymentForm>
          </div>
        </div>



        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 sm:pt-12"
        >
          <inertia-link
            :href="route('cart.index')"
            class="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all"
          >
            <i
              class="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"
            ></i>
            Return to Cart
          </inertia-link>
        </div>
      </div>
      <your-order></your-order>
    </div>
  </div>
</template>
<script>
import AppLayout from "./../shared/AppLayout";

import YourOrder from "./YourOrder";
import PaymentForm from "./PaymentForm";
import PMForm from "./perfect-money/Form";


export default {
  metaInfo: { title: "Payment Form" },
  layout: AppLayout,
  components: {
    YourOrder,
    PaymentForm,
    PMForm,
  },
  data() {
    return {
      sending: false,
    };
  },
  computed: {
    CustomerAddress() {
      return this.$page.user.address;
    },
    CustomerEmail() {
      return this.$page.user.email;
    },
    CustomerPhone() {
      return this.$page.user.phone;
    },
    ShipmentInformation() {
      return this.$page.ShipmentInformation;
    },

  },
};
</script>