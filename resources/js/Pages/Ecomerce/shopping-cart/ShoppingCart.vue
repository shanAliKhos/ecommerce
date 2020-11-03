<template>
    <div>  
        <!-- <BreadCrumb>
            <template #CurrentPage>
                ShoopingCart
            </template>
        </BreadCrumb>     -->
      
        <section class="shoping-cart spad">
    
            <div class="container">

                <div class="row">
    
                    <div class="col-lg-12">
    
                        <div class="shoping__cart__btns">
                            <inertia-link 
                                :href="$route('shop')" 
                                class="primary-btn cart-btn"
                                >CONTINUE SHOPPING
                            </inertia-link>

                            <inertia-link 
                                v-if="CartItems?CartItems.length:false"
                                :href="$route('cart.flush')" 
                                preserve-state
                                preserve-scroll                                  
                                method="post"
                                class="primary-btn cart-btn cart-btn-right" 
                                >
                                <span  class="">Empty Cart</span>
                            </inertia-link>                           

                        </div>
     
                    </div>                
                </div>
                <hr>

                <div class="row">
    
                    <div class="col-lg-12">
    
                        <div class="shoping__cart__table">
    
                            <table>
    
                                <thead>
    
                                    <tr>
    
                                        <th class="shoping__product">Products</th>
    
                                        <th>Price</th>
    
                                        <th>Quantity</th>
    
                                        <th>Total</th>
    
                                        <th></th>
    
                                    </tr>
    
                                </thead>
    
                                <tbody>
    
                                    <cart-item v-for="(CartItem, CartItemindex) in CartItems" 
                                    :key="CartItemindex" 
                                    :CartItem="CartItem" 
                                    :cartindex="CartItemindex" 
                                    @update-this-item="update()"
                                    >
                                    
                                    </cart-item>
    
                                </tbody>
    
                            </table>
    
                        </div>
    
                    </div>
    
                </div>
    
                <div class="row">
     
                    <div class="col-lg-6">
    
                        <div class="shoping__continue">
    
                            <div class="shoping__discount">
    
                                <h5>Discount Codes</h5>
    
                                <form action="#">
    
                                    <input type="text" placeholder="Enter your coupon code">
    
                                    <button type="submit" class="site-btn">APPLY COUPON</button>
    
                                </form>
    
                            </div>
    
                        </div>
    
                    </div>
    
                    <div class="col-lg-6">
    
                        <div class="shoping__checkout">
    
                            <h5>Cart Total</h5>
    
                            <ul>
    
                                <li>Subtotal <span>${{CartTotalPrice}}</span></li>
    
                                <li>Total <span>${{CartTotalPrice}}</span></li>
    
                            </ul>
    
                            <inertia-link v-if="CartItems?CartItems.length:false" :href="$route('checkout.index')"  class="primary-btn">PROCEED TO CHECKOUT</inertia-link>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
            <!-- <SaleSlider></SaleSlider> -->
    
        </section> 
    </div>
</template>
<script>
    import AppLayout from './../shared/AppLayout'  
    // import BreadCrumb from './../components/BreadCrumb' 
    import CartItem from './CartItem'

    export default {
        layout: AppLayout,     
        metaInfo: { title: 'Shopping-cart' },    
        components: { 
            CartItem,
        }, 
        data() {
            return {
                TotalPrice:0,
                SubTotalPrice:0,
            }
        },
        methods: { 
            update() {
                self = this;
                this.$root.$emit('update-cart',self.CartItems);
            },
        
        }, 
    
        computed: {
            CartItems(){
            return this.$page.Cart.Items;
            },
            CountCartItems(){
                let Qty = this.$page.Cart.Items?this.$page.Cart.Items.reduce((TotalItems, Item) => TotalItems + Item.Qty , 0):0;
                return Qty;
            },    
            CartTotalPrice(){
                let sum = this.$page.Cart.Items?this.$page.Cart.Items.reduce((TotalPrice, Item) => TotalPrice + (Item.Qty * Item.price) , 0):0; 
                return sum; 
            }            
            
        },              
    }
</script>
