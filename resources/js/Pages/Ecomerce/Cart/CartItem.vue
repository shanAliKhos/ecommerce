<template>
<transition  name="slide-fade">
<div> 
    <div class="normal-display-item">
        <div class="py-3 border-b border-grey-dark flex-row justify-between items-center mb-0 hidden md:flex ">
            <i class="transition duration-500 ease-in-out transform hover:scale-125 bx bx-x hover:text-red-500  text-2xl sm:text-3xl mr-6 cursor-pointer" @click="RemoveCartItem"></i>
            <div class="w-1/2 lg:w-3/5 xl:w-1/2 flex flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left">
                <div class="w-20 mx-0 relative pr-0">
                    <div class="h-20 rounded flex items-center justify-center">
                        <div class="w-16 h-16 mx-auto bg-center bg-no-repeat bg-cover" :style="'background-image:url(\'' + ProductImage + '\')'"> </div>
                    </div>
                </div>

                <inertia-link :href="route('shop.show',CartItem.product_slug)" class="focus:outline-none">
                    <p class="font-semibold text-lg capitalize">{{CartItem.product_name}}</p>
                    <p class="font-regular text-xs text-gray-400" v-if="CartItem.sku_name">SKU : {{CartItem.sku_name}}</p>
                    <p class="font-regular text-xs text-gray-400" v-if="CartItem.variation_options">
                        <span>variation : </span> 
                        <span v-for="(variation_option,variation_option_index) in CartItem.variation_options" :key="(variation_option_index+1)" >{{variation_option_index}} -  {{variation_option}}, </span>
                    </p>
                </inertia-link>
            </div>
            <div class="w-full sm:w-1/5 xl:w-1/4 text-center border-b-0 border-grey-dark pb-0">
                <div class="mx-auto mr-8 xl:mr-4">
                    <div class="flex justify-center relative">
                        <input v-model.number="CartItem.quantity" @change="update" type="number" id="quantity-form-desktop" class="form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center" min="1" />
                        <div class="flex flex-col">
                            <span class="px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer" @click="plus">
                                <i class="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i>
                            </span>
                            <span class="px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer" @click="minus">
                                <i class="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i>
                            </span>
                        </div>
                    </div>
                    <span class="font-semibold text-xs ">Stock/{{InStock}}</span>
                </div>
            </div>
            <div class="w-1/4 lg:w-1/5 xl:w-1/4 text-right pr-10 xl:pr-10 pb-4">
                <span class="font-regular ">{{Currency}} {{ CartItem.current_price * CartItem.quantity}} </span>
            </div>
        </div>
    </div>
    <div class="mobile-display-item">
        <div class="flex md:hidden mb-5 pb-5 border-b border-grey-dark items-center">
            <div class="relative">
                <div class="w-24 h-24 mx-auto bg-center bg-no-repeat bg-cover" :style="'background-image:url(\'' + ProductImage + '\')'">
                </div>
                <i class="bx bx-x  text-xl cursor-pointer absolute top-0 right-0 -mt-2 -mr-2 bg-white border border-grey-dark  rounded-full shadow" @click="RemoveCartItem"></i>
            </div>
            <div class="pl-4">
                <inertia-link :href="route('shop.show',CartItem.product_slug)" class="focus:outline-none">
                    <p class="font-regular text-base font-bold">{{CartItem.product_name}}</p>
                    <p class="font-regular text-xs text-gray-400">SKU {{CartItem.sku_name}}</p>
                    <p class="font-regular text-xs text-gray-400" v-if="CartItem.variation_options">variation {{CartItem.variation_options}}</p>
                </inertia-link>                
                <span class="font-regular   block">{{Currency}} {{ CartItem.current_price * CartItem.quantity}} </span>
                <div class="w-2/3 sm:w-5/6 flex mt-2"  >
                    <input v-model.number="CartItem.quantity" type="number" id="quantity-form-mobile" class="w-full form-input form-quantity rounded-r-none w-12 py-1 px-2 text-center" min="1" />
                    <div class="flex flex-row">
                        <span class="px-2 bg-white flex-1 border  border-l-0 border-grey-darker cursor-pointer flex items-center justify-center" @click="minus">
                            <i class="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i>
                        </span>
                        <span class="px-2 bg-white border border-l-0 border-grey-darker flex-1 rounded-r cursor-pointer flex items-center justify-center" @click="plus">
                            <i class="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

 

</div> 
</transition>        
</template>
<script>
export default {
    props:['CartItem','cartindex'],
    methods: {
        RemoveCartItem(){ 
            const self = this; 
            this.$root.$emit('destory-this-item',self.cartindex);    
        },
        update(){
            const self = this; 
            this.$emit('update-this-item',self.cartindex);    
        },
        minus(){
            this.CartItem.quantity--;
        },             
        plus(){
            this.CartItem.quantity++;
        },             
    },
    watch: { 
        CartQty: function (newQty, oldQty) {  
            if(newQty > this.CartItem.Instock || newQty < 1 ){
                this.CartItem.quantity =  oldQty
            }
            this.update();
        },
    },    
    computed: { 
        CartQty(){
          self = this;
          return self.CartItem.quantity;
        },        
        ProductImage(){
            return this.CartItem.product_image;
        },
        InStock(){
            return this.CartItem.Instock - this.CartItem.quantity;
        },  
        Currency(){
          return this.$page.SiteOptions.Currency.Symbol;
        },
    },
}
</script>
<style scoped>
.img-thumbnail{
    max-width: 200px !important;
}
.cart-item-name{
    color: #1c1c1c;
    font-weight: 400; 
}
    
 
    .slide-fade-leave-active {  
        transition: all 0.5s ease-in-out;
    } 
    .slide-fade-leave-to{
        opacity: 0;
    }    
</style>