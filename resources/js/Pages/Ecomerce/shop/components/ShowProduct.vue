<template>
    <div class="container">
        <div class="pt-16 pb-24 flex flex-col lg:flex-row justify-between -mx-5">
            <div class="lg:1/2 flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between px-5">
                <div class="sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col">

                    <div class="w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0">
                        <div
                            class="bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center">
                            <div class="w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer"
                                @click="selectedImage = $event.target.style.backgroundImage"
                                style="background-image:url('./../../img/product/product (1).png')">
                            </div>
                        </div>
                    </div>

                    <div class="w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0">
                        <div
                            class="bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center">
                            <div class="w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer"
                                @click="selectedImage = $event.target.style.backgroundImage"
                                style="background-image:url('./../../img/product/product (2).png')">
                            </div>
                        </div>
                    </div>

                    <div class="w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0">
                        <div
                            class="bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center">
                            <div class="w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer"
                                @click="selectedImage = $event.target.style.backgroundImage"
                                style="background-image:url('./../../img/product/product (3).png')">
                            </div>
                        </div>
                    </div>

                    <div class="w-28 sm:w-32 lg:w-24 xl:w-28 relative pb-5 mr-3 sm:pr-0">
                        <div
                            class="bg-v-pink border border-grey relative h-28 rounded flex items-center justify-center">
                            <div class="w-16 h-20 my-3 bg-center bg-no-repeat bg-cover cursor-pointer"
                                @click="selectedImage = $event.target.style.backgroundImage"
                                style="background-image:url('./../../img/product/product (4).png')"
                                >
                            </div>
                        </div>
                    </div>

                </div>
                <div class="w-full sm:w-96 lg:w-80 xl:w-90 relative pb-5 sm:pb-0">
                    <div
                        class="bg-v-pink border border-grey relative h-80 sm:h-94 xl:h-96 rounded flex items-center justify-center">
                        <div class="w-56 xl:w-64 h-76 sm:h-82 xl:h-86 my-6 sm:my-12 xl:my-24 bg-center bg-no-repeat bg-cover"
                            :style="'background-image:'+selectedImage+''"  
                            >
                        </div>
                    </div>
                </div>
            </div> 
            <div class="lg:w-1/2 pt-12 sm:pt-16 lg:pt-0 px-5">
                
                <div class="product-title">                
                    <div class="border-b border-grey-dark mb-8">
                        <div class="flex items-center">
                            <h2 class="font-butlerregular text-3xl md:text-4xl lg:text-7xl">{{Product.name}}</h2>
                            <small class="rounded-full font-hkbold text-white uppercase text-sm text-center px-4 py-2 m-2" 
                                :class="Label.Color"
                                v-if="Label.Active">
                                {{Label.Title}}
                            </small>
                        </div>
                        <div class="flex items-center pt-3">
                            <span class="font-hkregular text-secondary text-2xl">
                                {{$page.SiteOptions.Currency.Symbol}} {{CurrentPrice}} 
                            </span>
                            <span class="font-hkregular text-grey-darker text-xl line-through pl-5"
                                v-if="IsOnSale">
                                {{$page.SiteOptions.Currency.Symbol}} {{RegularPrice}} 
                            </span>
                        </div>
                        <div class="flex items-center pt-3 pb-8">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <span class="font-hkregular text-sm text-secondary ml-2">(45)</span>
                        </div>
                    </div>
                </div>

                <div class="product-availablity">                
                    <div class="flex pb-5">
                        <p class="font-hkregular text-secondary">Availability:</p>
                        <p class="font-hkbold text-v-green pl-3" v-if="ProductQuantity > 0">In Stock {{ ProductQuantity }}</p>
                        <p class="font-hkbold text-v-red pl-3" v-else>Out of Stock {{ ProductQuantity }}</p>
                    </div>
                </div>
                 
                <div class="product-attrbute-variation">
                    <div class="flex justify-between pb-4">
                        <div class="w-1/3 sm:w-1/5">
                            <p class="font-hkregular text-secondary">Color</p>
                        </div>
                        <div class="w-2/3 sm:w-5/6 flex items-center">
                            <div class="bg-primary px-2 py-2 rounded-full mr-2"></div>
                            <div class="bg-secondary-light px-2 py-2 rounded-full mr-2">
                            </div>
                            <div class="bg-v-green px-2 py-2 rounded-full mr-2"></div>
                            <div class="bg-v-blue px-2 py-2 rounded-full"></div>
                        </div>
                    </div>                
                    <div class="flex items-center justify-between pb-4">
                        <div class="w-1/3 sm:w-1/5">
                            <p class="font-hkregular text-secondary">Size</p>
                        </div>
                        <div class="w-2/3 sm:w-5/6">
                            <select class="w-2/3 form-select">
                                <option value="0">Small</option>
                                <option value="1">Medium</option>
                                <option value="2">Large</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between pb-8">
                    <div class="w-1/3 sm:w-1/5">
                        <p class="font-hkregular text-secondary">Quantity</p>
                    </div>
                    <div class="w-2/3 sm:w-5/6 flex" x-data="{ productQuantity: 1 }">
                        <label for="quantity-form" class="block relative h-0 w-0 overflow-hidden">Quantity
                            form</label>
                        <input type="number" id="quantity-form"
                            class="form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center"
                            v-model.number="CartItem.Qty" min="1" />
                        <div class="flex flex-col">
                            <span class="px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer"
                                @click="CartItem.Qty++">
                                    <i class="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i>
                            </span>
                            <span class="px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer"
                                @click="CartItem.Qty--">
                                <i class="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i>
                            </span>
                        </div>
                    </div>
                </div>

                
                <div class="flex pb-8 group">

                        <button   
                            @click="AddToCart"
                            type="button"
                            class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full  "
                            > 
                            <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                            </svg>                              
                            <svg v-if="!sending"  class="transition duration-700 ease-in-out  h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>                                   
                            Add to cart
                        </button>                     
                    <!-- <button type="button" @click="AddToCart" class="btn btn-outline mr-4 md:mr-6">
                        Add to cart
                    </button> -->
                    <!-- <a href="/cart" class="btn btn-primary">
                        BUY NOW
                    </a> -->
                </div>
                
                <div class="product-short-description">                
                    <p class="font-hkregular text-secondary pb-5">
                        <!-- {{ProductDescription.substring(0,70)+"..."}} -->
                    </p>
                </div>                 
                <div class="flex pb-2">
                    <p class="font-hkregular text-secondary">SKU:</p>
                    <p class="font-hkbold text-secondary pl-3">
                        KH12345</p>
                </div>
                <p class="font-hkregular text-secondary">
                    <span class="pr-2">Categories:</span>Bag, Hand bag, Travel bag, Black
                </p>
            </div>
        </div>

        <div class="pb-16 sm:pb-20 md:pb-24" x-data="{ activeTab: 'description' }">
            <div class="tabs flex flex-col sm:flex-row" role="tablist">

                <span @click="activeTab = 'description'"
                    class="tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors"
                    :class="{ 'active': activeTab=== 'description' }">
                    Description
                </span>

                <span @click="activeTab = 'additional-information'"
                    class="tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors"
                    :class="{ 'active': activeTab=== 'additional-information' }">
                    Additional Information
                </span>

                <span @click="activeTab = 'reviews'"
                    class="tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors"
                    :class="{ 'active': activeTab=== 'reviews' }">
                    Reviews
                </span>

            </div>
            <div class="tab-content relative">
                <div :class="{ 'active': activeTab=== 'description' }"
                    class="tab-pane bg-grey-light py-10 md:py-16   transition-opacity" role="tabpanel">
                    <div class="w-5/6 mx-auto text-center sm:text-left">
                        <div class="font-hkregular text-secondary text-base" v-html="ProductDescription">

                        </div>
                    </div>
                </div>
                <div :class="{ 'active': activeTab=== 'additional-information' }"
                    class="tab-pane bg-grey-light py-10 md:py-16   transition-opacity" role="tabpanel">
                    <div class="w-5/6 mx-auto">
                        <div class="font-hkregular text-secondary text-base">
                            On the main compartment has multiple pockets available for your tools, chargers,
                            make up, keys, etc. <br /><br /> Size::13.4”Lx 6.5”W x 15.4”H. <br /> Weight:
                            1.57pounds. <br /> Color: light brown.

                        </div>
                    </div>
                </div>
                <div :class="{ 'active': activeTab=== 'reviews' }"
                    class="tab-pane bg-grey-light py-10 md:py-16   transition-opacity" role="tabpanel">

                    <div class="w-5/6 mx-auto border-b border-grey-darker pb-8 text-center sm:text-left">
                        <div class="flex justify-center sm:justify-start items-center pt-3 xl:pt-5">
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                        </div>
                        <p class="font-hkbold text-secondary text-lg pt-3">
                            Perfect for everyday use</p>
                        <p class="font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3">
                            I loooveeeee this product!!! It feels so soft and smells like real leather!!! I
                            ordered this fancy backpack looking for something that can be used at work and, at
                            the same time, after work; and I found it. Honestly.. Amazing!!</p>
                        <div class="flex justify-center sm:justify-start items-center pt-3">
                            <p class="font-hkregular text-grey-darkest text-sm">
                                <span>By</span> Melanie Ashwood</p>
                            <span class="font-hkregular text-grey-darkest text-sm block px-4">.</span>
                            <p class="font-hkregular text-grey-darkest text-sm">
                                6 days ago</p>
                        </div>
                    </div>

                    <div class="w-5/6 mx-auto border-b border-transparent pb-8 text-center sm:text-left">
                        <div class="flex justify-center sm:justify-start items-center pt-3 xl:pt-5">
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                        </div>
                        <p class="font-hkbold text-secondary text-lg pt-3">
                            Gift for my girlfriend</p>
                        <p class="font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3">
                            I paid this thing thinking about my girlfriend’s birthday present, however I had my
                            doubts cuz’ she is kind of picky. But Seriously, from now on, Elyssi is my best
                            friend! She loved it!! She’s crazy about it! DISCLAIMER: It is smaller than it
                            appears. </p>
                        <div class="flex justify-center sm:justify-start items-center pt-3">
                            <p class="font-hkregular text-grey-darkest text-sm">
                                <span>By</span> Jake Houston</p>
                            <span class="font-hkregular text-grey-darkest text-sm block px-4">.</span>
                            <p class="font-hkregular text-grey-darkest text-sm">
                                4 days ago</p>
                        </div>
                    </div>

                    <form class="w-5/6 mx-auto">
                        <div class="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
                            <div class="sm:w-1/2 px-5">
                                <label class="font-hkregular text-secondary text-sm block mb-2"
                                    for="name">Name</label>
                                <input type="text" placeholder="Enter your Name" class="form-input" id="name" />
                            </div>
                            <div class="sm:w-1/2 px-5 pt-10 sm:pt-0">
                                <label class="font-hkregular text-secondary text-sm block mb-2"
                                    for="email">Email
                                    address</label>
                                <input type="email" placeholder="Enter your email" class="form-input "
                                    id="email" />
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
                            <div class="sm:w-1/2 px-5">
                                <label class="font-hkregular text-secondary text-sm block mb-2"
                                    for="review_title">Review
                                    Title</label>
                                <input type="text" placeholder="Enter your review title" class="form-input "
                                    id="review_title" />
                            </div>
                            <div class="sm:w-1/2 px-5 pt-10 sm:pt-0">
                                <label class="font-hkregular text-secondary text-sm block mb-2">Rating</label>
                                <div class="flex pt-4">
                                    <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                                    <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                                    <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                                    <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                                    <i class="bx bxs-star text-grey-darker text-xl"></i>
                                </div>
                            </div>
                        </div>
                        <div class="sm:w-12/25 pt-10">
                            <label for="message" class="font-hkregular text-secondary text-sm block mb-2">Review
                                Message</label>
                            <textarea placeholder="Give your review tittle" class="form-textarea"
                                id="message"></textarea>
                        </div>
                    </form>
                    <div class="w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left">
                        <a href="/" class="btn btn-primary">
                            Submit Review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            Product:{
                type:Object,
                required:true,
            },
        },
        data() {
            return {
                CartItem:{
                    id:(this.Product.id)?this.Product.id:null,
                    name:(this.Product.name)?this.Product.name:'',
                    slug:(this.Product.slug)?this.Product.slug:'',
                    Instock:(this.Product.quantity)?this.Product.quantity:'',
                    Qty:1,
                    price:(this.Product.sale_price)?this.Product.sale_price:this.Product.regular_price,
                    image:(this.Product.image)?this.Product.image:'./img/shoes-4.png', 
                },                 
                Label:{
                    Color:null,
                    Title:null,
                    Active:false,
                },        
                sending:false,
                activeTab:'description',
                selectedImage:null,                        
            }
        },
        watch: { 
            CartItemQty: function (newQty, oldQty) {  
                if(newQty > this.ProductQuantity || newQty < 1 ){
                    this.CartItem.Qty =  oldQty
                }
            }
        },        
        methods: {
            AddToCart(){  
                this.sending = true;
                this.$root.$emit('Add-To-Cart',this.CartItem);      
            },            
            SetLable(){ 
                if(this.Product.sale_price > 0){
                    var RegualPrice = this.Product.regular_price;
                    var SalePrice = this.Product.sale_price;
                    var Discount = Math.round( ((RegualPrice - SalePrice)/ RegualPrice) * 100)+'%OFF';
                    this.Label={
                        Color:'bg-primary',
                        Title:Discount,
                        Active:true,                
                    };
                }else if(this.Product.is_featured){    

                    this.Label={
                        Color:'bg-v-blue',
                        Title:'Trend',
                        Active:true,                
                    };       
                    
                }else{
                    this.Label={
                        Color:'bg-v-green',
                        Title:'new',
                        Active:true,                
                    };   

                }  
            },            
        },
        computed: {
            ProductImages(){
                self=this; 
                var  img = './../../'+self.Product.image.replace("public", "storage");
                return img;
            },            
            CurrentPrice(){
                return this.$page.Product.sale_price?this.$page.Product.sale_price:this.$page.Product.regular_price; 
            },
            RegularPrice(){
                return this.$page.Product.regular_price;
            },
            ProductQuantity(){
                return this.Product.quantity;
            },
            ProductDescription(){
                return this.Product.description;
            },
            IsOnSale(){
                return this.$page.Product.sale_price > 0;
            }, 
            CartItemQty(){
                self = this;
                return self.CartItem.Qty;
            },                       
        },    
        mounted () {
            this.$root.$on('item-is-added-to-cart',()=>{
                this.sending = false;
            });
            this.SetLable(); 
        }, 
      
 
    }
</script>