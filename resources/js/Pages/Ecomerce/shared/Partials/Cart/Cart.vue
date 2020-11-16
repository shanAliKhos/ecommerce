<template> 

            <div class="container border-t border-grey-dark pt-10 sm:pt-12">
                <div class="flex flex-wrap items-center">


                    <a href="/cart/" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkbold ">Cart</a>
                    <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>


                    <a href="/cart/customer-info" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular ">Customer information</a>
                    <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>


                    <a href="/cart/shipping-method" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular ">Shipping method</a>
                    <i class="bx bx-chevron-right text-sm text-secondary px-2"></i>


                    <a href="/cart/payment-method" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkregular  ">Payment method</a>
                    <i class="bx bx-chevron-right text-sm text-transparent px-2"></i>

                </div>

                <div class="flex flex-col-reverse lg:flex-row justify-between pb-16 sm:pb-20 lg:pb-24">
                    <div class="lg:w-3/5">
                        <div class="pt-10">
                            <h1 class="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">Cart Items</h1>
                            <div class="pt-8">
                                <div class="hidden sm:block">
                                    <div class="flex justify-between border-b border-grey-darker">
                                        <div class="w-1/2 lg:w-3/5 xl:w-1/2 pl-8 sm:pl-12 pb-2">
                                            <p class="font-hkbold text-secondary text-sm uppercase">
                                                Product Name</p>
                                        </div>
                                        <div
                                            class="w-1/4 sm:w-1/6 lg:w-1/5 xl:w-1/4 pb-2 text-right sm:mr-2 md:mr-18 lg:mr-12 xl:mr-18">
                                            <p class="font-hkbold text-secondary text-sm uppercase">
                                                Quantity</p>
                                        </div>
                               
                                        <div class="w-1/4 lg:w-1/5 xl:w-1/4 pb-2 text-right md:pr-10">
                                            <p class="font-hkbold text-secondary text-sm uppercase">
                                                Price</p>
                                        </div>
                                    </div>
                                </div>

                                <cart-item 
                                    v-for="(item, index) in CartItems" 
                                    :key="index" 
                                    :CartItem="item" 
                                    :cartindex="index"
                                    @update-this-item="update()"
                                
                                ></cart-item>

                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 sm:pt-12">
                           <inertia-link 
                                :href="route('shop.index')" 
                                class="btn btn-outline"
                                >CONTINUE SHOPPING
                            </inertia-link>

                   
                           <button 
                                @click="EmptyCart"
                                v-if="CartItems?CartItems.length:false" 
                                type="submit"
                                class="btn btn-primary mt-5 sm:mt-0">
                                <div v-if="sending" class="btn-spinner mr-2" />
                                <i v-else class="fa fa-fw fa-lg fa-remove"></i>                                
                                Empty cart
                            </button>          
                        </div>
                    </div>
                    <div class="sm:w-2/3 md:w-full lg:w-1/3 mx-auto lg:mx-0 mt-16 lg:mt-0">
                        <div class="bg-grey-light py-8 px-8">
                            <h4 class="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">
                                Cart Totals</h4>
                            <div>
                                <p class="font-hkbold text-secondary pt-1 pb-2">Cart Note
                                </p>
                                <p class="font-hkregular text-secondary text-sm pb-4">
                                    Special instructions for us</p>
                                <label for="cart_note" class="block relative h-0 w-0 overflow-hidden">Cart
                                    Note</label>
                                <textarea rows="5" placeholder="Enter your text" class="form-textarea"
                                    id="cart_note"></textarea>
                            </div>
                            <div class="pt-4">
                                <p class="font-hkbold text-secondary pt-1 pb-4">Add Coupon
                                </p>
                                <div class="flex justify-between">
                                    <label for="discount_code" class="block relative h-0 w-0 overflow-hidden">Discount
                                        Code</label>
                                    <input type="text" placeholder="Discount code" class="w-3/5 xl:w-2/3 form-input"
                                        id="discount_code" />
                                    <button class="w-2/5 xl:w-1/3 ml-4 lg:ml-2 xl:ml-4 btn btn-outline btn-sm"
                                        aria-label="Apply button">Apply</button>
                                </div>
                            </div>
                            <div class="mb-12 pt-4">
                                <p class="font-hkbold text-secondary pt-1 pb-2">Cart Total
                                </p>
                                <div class="border-b border-grey-darker pb-1 flex justify-between">
                                    <span class="font-hkregular text-secondary">Subtotal</span>
                                    <span class="font-hkregular text-secondary">{{Currency}}{{CartTotalPrice}}</span>
                                </div>
                                <div class="border-b border-grey-darker pt-2 pb-1 flex justify-between">
                                    <span class="font-hkregular text-secondary">Coupon
                                        applied</span>
                                    <span class="font-hkregular text-secondary">-$0</span>
                                </div>
                                <div class="pt-3 flex justify-between">
                                    <span class="font-hkbold text-secondary">Total</span>
                                    <span class="font-hkbold text-secondary">{{Currency}}{{CartTotalPrice}}</span>
                                </div>
                            </div>
                            <inertia-link 
                                v-if="CartItems?CartItems.length:false" 
                                :href="route('cart.CustomerInfomation')" 
                                class="btn btn-primary w-full">
                                PROCEED TO CHECKOUT
                            </inertia-link> 
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
    import AppLayout from './../../AppLayout'  
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
                sending:false,
            }
        },
        methods: { 
            update() {
                self = this;
                this.$root.$emit('update-cart',self.CartItems);
            },
            EmptyCart(){
                const self= this;
                self.$swal.fire({
                    title: 'Are you sure?',
                    text: "You will be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, clear it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        self.$inertia.post(self.route('cart.flush'), {
                            preserveState: true,
                            preserveScroll: true,  
                            onStart: () => this.sending = true,
                            onFinish: () => this.sending = false,                                    

                        })                    
                    }
                })                   
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
            },
            Currency(){
                return this.$page.SiteOptions.Currency.Symbol;
            }            

            
        },              
    }
</script>
