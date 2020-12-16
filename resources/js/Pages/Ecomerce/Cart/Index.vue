<template> 
    <div class="container border-t border-grey-dark pt-10 sm:pt-12 mb-20 lg:mb-0">
        <!-- <div class="flex flex-wrap items-center"> 
            <a href="/cart/" class="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary font-hkbold ">Cart</a>
            <i class="bx bx-chevron-right text-sm text-secondary px-2"></i> 

        </div> -->
 
        <div class="flex flex-col lg:flex-row justify-between pb-16 sm:pb-20 lg:pb-24">
            <div class="lg:w-3/5">

                <div class="hidden lg:block">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 sm:pt-12">
                    
                        <inertia-link 
                            :href="route('shop.index')" 
                            class="flex items-center mt-2 justify-center uppercase transition duration-700 ease-in-out border  bg-primary-lightest border-primary-light text-primary   focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow  w-full lg:w-1/3 lg:mr-2"
                        >CONTINUE SHOPPING</inertia-link>

                        <button v-if="CartItems?CartItems.length:false" 
                            @click="EmptyCart"
                            type="button"
                            class="flex items-center mt-2 justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow items-center  w-full lg:w-1/3 lg:ml-2"
                                > 
                                <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                                </svg>                              
                                <svg v-else  class="transition duration-700 ease-in-out  h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>        
                        Empty cart</button>  

                    </div>                      
                </div>                      

                 <div class="mobile-secondary-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 ">
                    <div class="grid grid-cols-4 gap-2 flex justify-around"> 

                        <div class="w-1/2 relative px-2 py-2 flex item-center">
                            <div class="pt-3 flex justify-between"> 
                                <span class="font-semibold text-red-500"> =// {{Currency}} {{CartTotalPrice}}</span>
                            </div>
                        </div>
                        <div class="w-1/2 relative px-2 py-2 flex item-center justify-end">
                            <button :disabled="sending" @click="ProceedToCheckOut" type="button"
                                :class="{'opacity-50 pointer-events-none':sending}"  
                                class="flex items-center transition duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none rounded px-2 py-2 text-white text-sm font-semibold uppercase shadow" >
                                <svg v-if="!sending" class="transition duration-700 ease-in-out  h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg> 

                                <svg v-else  class="transition  ease-in-out  animate-spin h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <svg viewBox="0 0 20 20" class="h-6 w-6 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                                </svg>                                   

                                <span class="tracking-tighter">Proceed</span>
                                
                            </button> 
                        </div>
 
                    </div>
                </div>

                <div class="pt-10">
                    <h1 class="font-semibold text-gray-400 text-2xl pb-3 text-center sm:text-left">Cart Items</h1>
                    <div class="pt-8">
                        <div class="hidden sm:block">
                            <div class="flex justify-between border-b border-grey-darker">
                                <div class="w-1/2 lg:w-3/5 xl:w-1/2 pl-8 sm:pl-12 pb-2">
                                    <p class="font-hkbold text-secondary text-sm uppercase"> Product Name</p>
                                </div>
                                <div
                                    class="w-1/4 sm:w-1/6 lg:w-1/5 xl:w-1/4 pb-2 text-right sm:mr-2 md:mr-18 lg:mr-12 xl:mr-18">
                                    <p class="font-hkbold text-secondary text-sm uppercase">Quantity</p>
                                </div>
                        
                                <div class="w-1/4 lg:w-1/5 xl:w-1/4 pb-2 text-right md:pr-10">
                                    <p class="font-hkbold text-secondary text-sm uppercase">Price</p>
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
            </div>
            <div class="sm:w-2/3 md:w-full lg:w-1/3 mx-auto lg:mx-0 mt-16 lg:mt-0">
                <div class="bg-grey-light py-8 px-8">
                    <h4 class="font-semibold text-gray-400 text-2xl pb-3 text-center sm:text-left">Cart Totals</h4>
                    <div>
                        <p class="font-semibold text-gray-400 pt-1 pb-2">Cart Note</p>
                        <p class="font-semibold text-gray-400 text-sm pb-4">Special instructions for us</p>
                        <label for="cart_note" class="block relative h-0 w-0 overflow-hidden">Cart Note</label>
                        <textarea rows="5" placeholder="Enter your text" class="form-textarea" id="cart_note"></textarea>
                    </div>
                    <div class="pt-4">
                        <p class="font-semibold text-gray-400 pt-1 pb-4">Add Coupon</p>
                        <div class="flex justify-between">
                            <label for="discount_code" class="block relative h-0 w-0 overflow-hidden">Discount Code</label>
                            <input type="text" placeholder="Discount code" class="w-3/5 xl:w-2/3 form-input" id="discount_code" />
                            <button class="w-2/5 xl:w-1/3 ml-4 lg:ml-2 xl:ml-4 btn btn-outline btn-sm" aria-label="Apply button">Apply</button>
                        </div>
                    </div>
                    <div class="mb-12 pt-4">
                        <p class="font-semibold text-gray-400 pt-1 pb-2">Cart Total</p>
                        <div class="border-b border-grey-darker pb-1 flex justify-between">
                            <span class="font-semibold text-gray-400">Subtotal</span>
                            <span class="font-semibold text-gray-400">{{Currency}}{{CartTotalPrice}}</span>
                        </div>
                        <div class="border-b border-grey-darker pt-2 pb-1 flex justify-between">
                            <span class="font-semibold text-gray-400">Coupon applied</span>
                            <span class="font-semibold text-gray-400">-$0</span>
                        </div>
                        <div class="pt-3 flex justify-between">
                            <span class="font-semibold text-gray-400">Total</span>
                            <span class="font-semibold text-gray-400">{{Currency}}{{CartTotalPrice}}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 hidden lg:block"> 
                        <button v-if="CartItems?CartItems.length:false" @click="ProceedToCheckOut" type="button"
                            class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full "> 
                            <svg v-if="sending"  class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                            </svg>                              
                            <svg v-else class="transition duration-700 ease-in-out  h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>           

                            PROCEED 
                        </button>  
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppLayout from './../shared/AppLayout'    
import CartItem from './CartItem'

export default {
    layout: AppLayout,     
    metaInfo: { title: 'Cart' },    
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
        ProceedToCheckOut() { 
            this.$inertia.get(this.route('cart.CustomerInfomation'), {
                preserveState: true,
                preserveScroll: true,    
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,          
            })                  
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
                        onStart: () => self.sending = true,
                        onFinish: () => self.sending = false,                                    

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


    mounted() {
        const self = this
        self.$root.$emit('sidebar-close');     
    },            
}
</script>
