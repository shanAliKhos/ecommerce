<template>
  <div class="container border-t border-grey-400 mb-20  px-5 py-5  ">
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
          <a
            href="javascript:;"
            class="transition-all border-b border-transparent border-orange-500 text-sm text-orange-500 font-bold"
            >Customer information</a
          >
          <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>
          <a
            href="javascript:;"
            class="transition-all border-b border-transparent  text-sm text-gray-300  font-regular cursor-not-allowed"
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

        <form @submit.prevent="store">
          <div class="pt-10 md:pt-12">
            <div
              class="flex flex-col-reverse sm:flex-row items-center justify-between"
            >
              <h1 class="font-hkmedium text-secondary text-xl md:text-2xl">
                Contact information
              </h1>
            </div>
            <div class="pt-4 md:pt-5">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-emai"
                    >Email</label
                  >
                  <span
                    class="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight cursor-not-allowed"
                    >{{ form.email }}</span
                  >
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="$page.errors.email"
                  >
                    {{ $page.errors.email }}
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-mobile"
                  >
                    Mobile
                  </label>
                  <input
                    v-model.number="form.mobile"
                    placeholder="Mobile Number"
                    class="form-input w-full "
                    id="grid-last-name"
                    type="text"
                  />
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="$page.errors.mobile"
                  >
                    {{ $page.errors.mobile }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4 pb-10">
            <h4
              class="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left"
            >
              Shipping address
            </h4>
            <div class="pt-4 md:pt-5">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-full_name"
                    >Full Name</label
                  >
                  <span
                    class="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight cursor-not-allowed"
                    >{{ form.full_name }}</span
                  >
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="$page.errors.full_name"
                  >
                    {{ $page.errors.full_name }}
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                    >Address</label
                  >
                  <input
                    v-model="form.address"
                    placeholder="You address"
                    class="form-input w-full "
                    id="grid-address"
                    type="text"
                  />
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="$page.errors.address"
                  >
                    {{ $page.errors.address }}
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                    >City</label
                  >
                  <input
                    v-model="form.city"
                    class="form-input  w-full"
                    id="grid-city"
                    type="text"
                    placeholder="City"
                  />
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="$page.errors.city"
                  >
                    {{ $page.errors.city }}
                  </p>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                    >Country</label
                  >
                  <div class="relative">
                    <select
                      v-model="form.country"
                      class="form-input  w-full"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <p
                      class="text-red-500 text-xs italic"
                      v-if="$page.errors.country"
                    >
                      {{ $page.errors.country }}
                    </p>

                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                    >Zip/Postal Code</label
                  >
                  <input
                    v-model.number="form.postal_code"
                    class="form-input  w-full"
                    id="grid-zip"
                    type="text"
                    placeholder="90210"
                  />
                  <p
                    class="text-red-500 text-xs italic"
                    v-if="$page.errors.postal_code"
                  >
                    {{ $page.errors.postal_code }}
                  </p>
                </div>
              </div>

              <!-- <div class="flex items-center pt-4">
                <label
                  for="offers"
                  class="block relative h-0 w-0 overflow-hidden"
                  >Sign up to exclusive offers</label
                >
                <input
                  type="checkbox"
                  v-model="form.get_updates"
                  class="form-checkbox"
                  id="offers"
                />
                <p class="font-regular text-sm pl-3 text-secondary">
                  Keep me up to date on news and exclusive offers
                </p>
              </div> -->
            </div>

            <div
              class="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12"
            >
              <inertia-link
                preserve-scroll
                :href="route('cart.index')"
                class="flex items-center mb-3 sm:mb-0 font-regular group-hover:font-bold text-sm text-secondary hover:text-orange-500 group transition-all"
              >
                <i
                  class="bx bx-chevron-left text-secondary group-hover:text-orange-500 pr-2 text-xl transition-colors"
                ></i>
                Return to Cart
              </inertia-link>

              <div
                class="flex items-center justify-end px-4 py-3 text-right sm:px-6 mt-3 hidden lg:block"
              >
                <button
                  type="submit"
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
                    type="submit"
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
        </form>
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
  metaInfo: { title: "Customer Information" },
  layout: AppLayout,
  components: {
    YourOrder,
    PaymentForm,
  },
  remember: "form",

  data() {
    return {
      form: {
        email: this.$page.user ? this.$page.user.email : null,
        full_name: this.$page.user ? this.$page.user.name : null, 
        address: this.$page.user ? this.$page.user.address: null,
        city: this.$page.user? this.$page.user.city: null,
        country: this.$page.user? this.$page.user.country: null,
        postal_code: this.$page.user?this.$page.user.postal_code: null,
        mobile: this.$page.user?this.$page.user.phone: null,
        
      },
      sending: false,
    };
  },
  methods: {
    store() {
      const self = this;
      let formData = new FormData();
      formData.append("email", self.form.email || "");
      formData.append("full_name", self.form.full_name || ""); 
      formData.append("address", self.form.address || "");
      formData.append("city", self.form.city || "");
      formData.append("country", self.form.country || "");
      formData.append("postal_code", self.form.postal_code || "");
      formData.append("phone", self.form.mobile || ""); 

      self.$inertia.post(this.route("cart.CustomerInfomationStore"), formData, {
        preserveState: true,
        onStart: () => (this.sending = true),
        onFinish: () => (this.sending = false),
      });
    },
  },
};
</script>