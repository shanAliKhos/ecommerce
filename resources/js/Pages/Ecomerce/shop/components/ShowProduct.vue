<template>
  <div class="px-2 py-2">
    <div
      class="flex flex-col lg:flex-row justify-between md:mx-5 md:py-5 md:mt-5"
    >
      <ProductImages />

      <div class="px-5 py-5  w-full">
        
        <ProductHeader :selectedSku="selectedSku" />

        <ProductVariations :ProductQuantity="ProductQuantity" @sku:changed="UpdateSku"  />
        

        <div v-if="CanAddToCart">
          <div class="text-xs fixed bottom-1 right-1 flex flex-wrap justify-end items-center hidden md:block py-4 px-2 z-50 bg-white shadow-2xl border border-gray-200 rounded">
               
            <div class="flex items-center  font-semibold  text-lg">
              <div class="flex flex-wrap items-center mr-2">
                <p>GrandTotal</p>
              </div>
              <div class="flex flex-wrap items-center text-red-600 "> 
                <p>{{Currency}} {{TotalPrice}}</p>
              </div>
            </div>              
              
              <p class="transition duration-700 ease-in-out  text-red-500 text-xs italic"  v-if="$page.errors.quantity">{{$page.errors.quantity}}</p>
              <div class="flex flex-wrap items-center pb-2 bg-white">
                <input
                  type="number"
                  placeholder="Quantity"
                  class="text-red-600 font-semibold text-center w-4/5 transition duration-700 ease-in-out px-4 py-2 rounded shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-r-0 border-2 border-gray-200 focus:outline-none"
                  v-model.number="form.quantity"
                  min="1"
                />
                
                <div class="flex flex-col w-1/5">
                  <button
                    class="transition transform duration-500 focus:scale-105 flex flex-1 item-center justify-center text-white bg-green-400 border focus:border-white focus:bg-green-600 rounded-tr px-1 cursor-pointer focus:outline-none"
                    @click="form.quantity++"
                  >
                    <svg
                      class="h-6 w-6 focus:"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <button
                    class="transition transform duration-500 focus:scale-105 flex flex-1 item-center justify-center text-white bg-red-400 border focus:border-white focus:bg-red-600 rounded-tr px-1 cursor-pointer focus:outline-none"
                    @click="form.quantity--"
                  >
                    <svg
                      class="pointer-events-none h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                </div>
              </div> 
         

              
              <div class="flex flex-wrap items-center bg-white">
                <button
                  :disabled="sending"
                  :class="{ 'opacity-50 pointer-events-none': sending }"
                  class="group w-full flex flex-inline justify-center items-center transition transform duration-500 ease-in bg-red-600 hover:bg-green-600 focus:outline-none cursor-pointer rounded px-4 py-2 text-white font-semibold shadow uppercase focus:scale-105"
                  type="button"
                  @click="AddToCart"
                >
                  <svg
                    v-if="!sending"
                    class="transition duration-700 ease-in-out h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <svg
                    v-if="sending"
                    class="transition ease-in-out animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="ml-2 pointer-events-none">{{ CartButtonName }}</span>
                </button>
              </div>

          </div>

          <div
            class="mobile-addtocart-menu z-50 bg-white block lg:hidden fixed bottom-11 right-0 left-0 border-t-2 border-gray-200 text-gray-400"
          >
            <div class="flex justify-around">
              <div class="w-1/2 relative px-2 py-2">
                <button
                  class="transition transform duration-500 ease-in focus:outline-none focus:scale-105 px-2 py-2 text-red-400 focus:text-green-500 bg-white bx bx-minus bx-border font-semibold"
                  @click="form.quantity--"
                ></button>

                <span
                  class="px-5 py-4 bg-gray-50 text-green-500 cursor-pointer font-semibold"
                  >{{ form.quantity }}</span
                >

                <button
                  class="transition transform duration-300 ease-in focus:outline-none focus:scale-105 px-2 py-2 text-green-400 focus:text-green-500 bg-white bx bx-plus bx-border font-semibold"
                  @click="form.quantity++"
                ></button>
              </div>

              <div class="flex justify-end w-1/2 relative px-2 py-2">
                <button
                  :disabled="sending"
                  type="button"
                  :class="{ 'opacity-50 pointer-events-none': sending }"
                  @click="AddToCart"
                  class="group text-xs px-2 flex items-center transition transform duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none focus:scale-105 rounded text-white font-normal tracking-wide cursor-pointer"
                >
                  <svg
                    v-if="!sending"
                    class="transition transform duration-700 ease-in-out h-4 w-4 group-hover:scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <svg
                    v-if="sending"
                    class="pointer-events-none transition ease-in-out animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="tracking-tighter pointer-events-none ml-2">{{
                    CartButtonName
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <SectionBorder/>

    <ProductDetails />
  </div>
</template>

<script>
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import ProductHeader from "./ProductHeader";
import ProductVariations from "./ProductVariations"; 
import SectionBorder from '@/Jetstream/SectionBorder'

export default {
  components: {
    ProductImages,
    ProductDetails,
    ProductHeader,
    ProductVariations,
    SectionBorder,
  },
  data() {
    return { 
      form:{
        sku_id:null,
        product_id:this.$page.Product ? this.$page.Product.id : null,
        product_image: this.$page.Product ? this.$page.Product.mainphoto_url : "",
        product_name:this.$page.Product.name,
        product_name:this.$page.Product.name,
        current_price:0,
        quantity:0,
      },
  
      selectedSku: {},
      sending: false,
      CanAddToCart: true,
    };
  },
 
  watch: {
    SelectedQuantity: function (newQty, oldQty) {
      const self = this;
      if (newQty < 0 ) {
        self.form.quantity = this.ProductQuantity;
      }
   
    },
    ProductQuantity: function (newQty, oldQty) {
      const self = this;
      if (newQty < 0) {
        self.form.quantity = oldQty;
      }
    },
    ProductCurrentPrice(val){
      const self =  this ;
      if(val>0){
        self.CanAddToCart = true;
      }else{    
        self.CanAddToCart = false;
      }
    },     
  },
  methods: {
    AddToCart() {
      const self = this;
      if (self.form.quantity>0) {
        self.sending = true;
        self.$root.$emit("Add-To-Cart", this.form);
      }else{
        this.$swal({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              showCloseButton: true,
              timer: 7000,
              timerProgressBar: true,
              icon: 'error',
              title: 'add some quantity',
        })           

      } 
    },
    UpdateSku(optSku) {
      const self = this;
      self.selectedSku = optSku.id?optSku:this.$page.Product;
      self.form.sku_id = optSku.id?optSku.id:null;
      this.CartButtonName();
      return true;
    },
  
  },   
  computed: {
    Currency() {
      return this.$page.SiteOptions.Currency.Symbol;
    },
    TotalPrice(){
      const self = this;
      return self.SelectedQuantity * self.ProductCurrentPrice;
    },
    SkuCode() {
      const self = this; 

      return self.selectedSku.name
        ? self.selectedSku.name
        : self.$page.Product.sku
        ? self.$page.Product.sku
        : "N/A";
    }, 
    ProductQuantity() {
      const self = this;
      let PrdQty = self.selectedSku.id ? self.selectedSku.quantity: self.$page.Product.quantity; 
      return PrdQty - self.form.quantity;
    }, 
    SelectedQuantity() {
      self = this;
      return self.form.quantity;
    },
    CartButtonName() {
      let button;
      button = "Add to cart";
      if (this.$page.Cart.Items) {
        this.$page.Cart.Items.filter((Item) => {
          if (Item.product_id == this.$page.Product.id && Item.sku_id == this.form.sku_id) {
            button = "Update to cart";
            this.form.quantity = Item.quantity;
          } 
        });
      }
      return button;
    },
    ProductCurrentPrice() {
      const self = this;
      let price = self.selectedSku.current_price?self.selectedSku.current_price:self.$page.Product.current_price;
      self.form.current_price = price;
      return price;
    },    
  },
  mounted() {
    const self = this;
  
    self.$root.$on("item-is-added-to-cart", () => {
      self.sending = false;
    });
  },
};
</script>
