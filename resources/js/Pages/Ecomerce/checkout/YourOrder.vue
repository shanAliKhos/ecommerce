<template>
    <div class="col-lg-5 col-md-6">
        <div class="checkout__order">
            <h4>Your Order</h4>
            <div class="checkout__order__products">Products | Qty<span>Total</span></div>
            <ul>
                <li v-for="(CartItem, index) in CartItems" :key="index"><small>{{CartItem.name}} ${{CartItem.price}} * {{CartItem.Qty}} </small> <span>${{CartItem.Qty * CartItem.price}}</span></li>
            </ul>
            <div class="checkout__order__subtotal">Subtotal <span>${{CartTotalPrice}}</span></div>
            <div class="checkout__order__total">Total <span>${{CartTotalPrice}}</span></div>
            <!-- <div class="checkout__input__checkbox">
                <label for="acc-or">
                    Create an account?
                    <input type="checkbox" id="acc-or">
                    <span class="checkmark"></span>
                </label>
            </div> -->
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
            <!-- <button type="submit" class="site-btn">PLACE ORDER</button> -->
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        CountCartItems(){
       
            let Qty = 0;
            if(this.$page.Cart.Items.length > 0){
                Qty = this.$page.Cart.Items.reduce((TotalItems, Item) => TotalItems + Item.Qty , 0);
            }
            return Qty;
        },    
        CartTotalPrice(){
            let sum = 0 ;
            if(this.$page.Cart.Items.length > 0){
                sum = this.$page.Cart.Items.reduce((TotalPrice, Item) => TotalPrice + (Item.Qty * Item.price) , 0); 
            }
            return sum; 
        },
        CartItems(){
          return this.$page.Cart.Items;
        }                
    },    
}
</script>