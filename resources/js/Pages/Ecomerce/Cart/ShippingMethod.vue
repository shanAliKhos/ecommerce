<template>
  <div class="container border-t border-grey-400 mb-20 px-5 py-5 ">
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
          <inertia-link
            :href="route('cart.CustomerInfomation')"
            class="transition-all border-b border-transparent hover:border-orange-500 text-sm text-gray-500 hover:text-orange-500 font-regular"
          > 
            Customer information
          </inertia-link>             
         
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
          <a
            href="javascript:;"
            class="transition-all border-b border-transparent border-orange-500 text-sm text-orange-500 font-bold"
            >Shipping method</a
          >          
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
          <a
            href="javascript:;"
            class="transition-all border-b border-transparent  text-sm text-gray-300  font-regular cursor-not-allowed	"
            >Payment method</a
          >
          <i class="bx bx-chevron-right text-sm text-transparent px-2"></i>
        </div>

        <div
          class="mt-10 md:mt-12 border border-grey-darker rounded px-4 sm:px-5"
        >
          <div class="flex justify-between py-2 border-b border-grey-dark">
            <div class="w-1/5">
              <p class="font-hkregular text-secondary">Contact</p>
            </div>
            <div class="w-3/5">
              <p class="font-hkregular text-secondary">
                {{ CustomerInformation ? CustomerInformation.email : "" }}
              </p>
            </div>
            <div class="w-1/5 text-right">
              <inertia-link
                :href="route('cart.CustomerInfomation')"
                class="font-hkregular text-primary underline"
                >Change</inertia-link
              >
            </div>
          </div>
          <div class="flex justify-between py-2">
            <div class="w-1/5">
              <p class="font-hkregular text-secondary">Ship to</p>
            </div>
            <div class="w-3/5">
              <p class="font-hkregular text-secondary">
                {{ CustomerInformation ? CustomerInformation.address : "" }}
              </p>
            </div>
            <div class="w-1/5 text-right">
              <inertia-link
                :href="route('cart.CustomerInfomation')"
                class="font-hkregular text-primary underline"
                >Change</inertia-link
              >
            </div>
          </div>
        </div>
        <div class="pt-8 md:pt-10">
          <h1
            class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left"
          >
            Shipping Type
          </h1>

          <div
            class="mt-5 md:mt-6 border border-grey-darker rounded px-4 sm:px-5"
          >
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
                <label
                  for="shipping_normal"
                  class="block relative h-0 w-0 overflow-hidden"
                  >Normal 3 days delivery</label
                >
                <input
                  type="radio"
                  value="Normal 3 days delivery"
                  v-model="form.shipment_type"
                  class="form-checkbox"
                  id="shipping_normal"
                />
                <p class="ml-3 font-hkregular text-secondary">
                  Normal 3 days delivery
                </p>
              </div>
              <p class="font-hkregular uppercase text-secondary">FREE</p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 sm:pt-12"
        >
          <inertia-link
            preserve-scroll
            :href="route('cart.index')"
            class="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-all"
          >
            <i
              class="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"
            ></i>
            Return to Cart
          </inertia-link>

          <div
            class="flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3 hidden lg:block"
          >
            <button
              @click="store"
              type="button"
              class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full"
            >
              <svg
                v-if="sending"
                class="animate-pulse transition duration-700 ease-in-out h-5 w-auto mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <svg
                v-else
                class="transition duration-700 ease-in-out h-5 w-auto mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              Proceed
            </button>
          </div>

          <div
            class="mobile-secondary-menu z-50 bg-white block lg:hidden fixed bottom-14 right-0 left-0 border-t-2 border-gray-200 text-gray-400"
          >
            <div class="flex justify-around">
              <div class="w-1/2 relative px-2 py-2 flex item-center"></div>
              <div
                class="w-1/2 relative px-2 py-2 flex item-center justify-end"
              >
                <button
                  :disabled="sending"
                  @click="store"
                  type="button"
                  :class="{ 'opacity-50 pointer-events-none': sending }"
                  class="flex items-center transition duration-500 ease-in-out bg-green-500 hover:bg-green-600 focus:outline-none rounded px-2 py-2 text-white text-sm font-semibold uppercase shadow"
                >
                  <svg
                    v-if="sending"
                    class="animate-pulse transition duration-700 ease-in-out h-5 w-auto mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <svg
                    v-else
                    class="transition duration-700 ease-in-out h-5 w-auto mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span class="tracking-tighter">Proceed</span>
                </button>
              </div>
            </div>
          </div>
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

export default {
  metaInfo: { title: "Shipping Method" },
  layout: AppLayout,
  components: {
    YourOrder,
    PaymentForm,
  },
  data() {
    return {
      form: {
        shipment_type: "Normal 3 days delivery",
      },
      sending: false,
    };
  },
  computed: {
    CustomerInformation() {
      return this.$page.user;
    },
  },
  methods: {
    store() {
      const self = this;
      let formData = new FormData();
      formData.append("shipment_type", self.form.shipment_type || "");

      self.$inertia.post(this.route("cart.ShippingMethodStore"), formData, {
        onStart: () => (this.sending = true),
        onFinish: () => (this.sending = false),
      });
    },
  },
};
</script>