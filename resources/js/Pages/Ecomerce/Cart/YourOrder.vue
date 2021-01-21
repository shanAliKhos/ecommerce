<template>
  <div class="sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0">
    <div class="p-8">
      <h4
        class="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left"
      >
        Your Order
      </h4>
      <p class="font-hkbold text-secondary uppercase text-center sm:text-left">
        PRODUCTS ({{ CountCartItems }})
      </p>

      <div class="mt-5 mb-8">
        <div
          class="flex items-center mb-5"
          v-for="(CartItem, index) in CartItems"
          :key="index"
        >
          <div class="w-20 relative mr-3 sm:pr-0">
            <div class="h-20 rounded flex items-center justify-center">
              <div
                class="w-12 h-16 bg-center bg-no-repeat bg-cover"
                :style="'background-image:url(\'' + CartItem.image + '\')'"
              ></div>
              <span
                class="font-hkregular text-white text-xs px-2 leading-none absolute top-0 right-0 bg-primary flex items-center justify-center rounded-full -mt-2 -mr-2 h-6 w-6"
                >2</span
              >
            </div>
          </div>
          <p
            class="font-hkregular text-secondary text-md"
            :title="CartItem.name"
          >
            {{ CartItem.name.substring(0, 12) + ".." }} ${{ CartItem.price }}
          </p>
        </div>
      </div>
      <p class="font-hkbold text-secondary pt-1 pb-2">Cart Totals</p>
      <div class="border-b border-grey-darker pb-1 flex justify-between">
        <span class="font-hkregular text-secondary">Subtotal</span>
        <span class="font-hkregular text-secondary">${{ CartTotalPrice }}</span>
      </div>
      <div class="border-b border-grey-darker pt-2 pb-1 flex justify-between">
        <span class="font-hkregular text-secondary">Coupon apply</span>
        <span class="font-hkregular text-secondary">-$0</span>
      </div>
      <div class="pt-3 flex justify-between">
        <span class="font-hkbold text-secondary">Total</span>
        <span class="font-hkbold text-secondary">${{ CartTotalPrice }}</span>
      </div>
    </div>
  </div>
  <!-- <div class="checkout__order">
        <h4>Your Order</h4>
        <div class="checkout__order__products">Products | Qty<span>Total</span></div>
        <ul>
            <li v-for="(CartItem, index) in CartItems" :key="index"><small>{{CartItem.name}} ${{CartItem.price}} * {{CartItem.Qty}} </small> <span>${{CartItem.Qty * CartItem.price}}</span></li>
        </ul>
        <div class="checkout__order__subtotal">Subtotal <span>${{CartTotalPrice}}</span></div>
        <div class="checkout__order__total">Total <span>${{CartTotalPrice}}</span></div>
      
        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
        <div class="checkout__input__checkbox">
            <label for="payment">
                Check Payment
                <input type="checkbox" id="payment">
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="checkout__input__checkbox">
            <label for="paypal">
                Paypal
                <input type="checkbox" id="paypal">
                <span class="checkmark"></span>
            </label>
        </div> 
    </div> -->
</template>
<script>
export default {
  computed: {
    CountCartItems() {
      let Qty = 0;
      if (this.$page.Cart.Items.length > 0) {
        Qty = this.$page.Cart.Items.reduce(
          (TotalItems, Item) => TotalItems + Item.Qty,
          0
        );
      }
      return Qty;
    },
    CartTotalPrice() {
      let sum = 0;
      if (this.$page.Cart.Items.length > 0) {
        sum = this.$page.Cart.Items.reduce(
          (TotalPrice, Item) => TotalPrice + Item.Qty * Item.price,
          0
        );
      }
      return sum;
    },
    CartItems() {
      return this.$page.Cart.Items;
    },
  },
};
</script>