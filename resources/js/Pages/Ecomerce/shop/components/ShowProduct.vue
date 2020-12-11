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
            <div class="lg:w-1/2 pt-5 lg:pt-0 px-5">
                
                <div class="product-title">                
                    <div class="border-b border-grey-dark mb-8">
                        <div class="flex items-center">
                            <p class="font-mono text-3xl capitalize text-gray-900 overflow-ellipsis overflow-hidden" >{{Product.name}}</p>
                            <small class="rounded-full  text-white uppercase text-sm text-center px-4 py-2 m-2" 
                                :class="Label.Color"
                                v-if="Label.Active">
                                {{Label.Title}}
                            </small>
                        </div>
                        <div class="flex items-center pt-2">
                            <div class="flex items-center">
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                                <i class="bx bxs-star text-primary"></i>
                            </div>
                            <span class="font-semibold text-sm text-gray-400 ml-2">(45)</span>
                        </div>                        
                        <div class="flex items-center pt-2">
                            <span class="font-semibold text-red-600 text-2xl text-red-600">
                                {{$page.SiteOptions.Currency.Symbol}} {{CurrentPrice}} 
                            </span>
                            <span class="font-semibold text-grey-darker text-xl line-through pl-5"
                                v-if="IsOnSale">
                                {{$page.SiteOptions.Currency.Symbol}} {{RegularPrice}} 
                            </span>
                        </div>
                        <div class="flex items-center " v-if="ProductCategories.length > 0">
                            <div class=" text-gray-400 mt-2 mb-1 text-xs">
                                <span class="pr-2">Categories:</span>
                                <span v-for="(ProductCategory, index) in ProductCategories" :key="index" class="capitalize ">{{ProductCategory.name}} <span  v-if="ProductCategories.length > (index+1)">,  </span></span> 
                            </div>                                        
                        </div>
                        <div class="flex items-center">
                            <div class=" text-gray-400 mt-1 mb-1 text-xs">
                                <span class="pr-2">Brands:</span>
                                <span v-for="(ProductCategory, index) in ProductCategories" :key="index" class="capitalize ">{{ProductCategory.name}} <span  v-if="ProductCategories.length > (index+1)">,  </span></span> 
                            </div>                                        
                        </div>
                    </div>
                </div>
         
                <div class="product-attrbute-variation text-gray-500">
                    <div class="flex items-center justify-between pb-4">
                        <div class="w-1/3 sm:w-1/5">
                            <p >SKU </p>
                        </div>
                        <div class="w-2/3 sm:w-5/6 flex items-center">
                            <p>{{ SkuCode }}</p>
                                    
                        </div>
                    </div>                
                    <div class="flex items-center justify-between pb-4">
                        <div class="w-1/3 sm:w-1/5">
                            <p >Availability </p>
                        </div>
                        <div class="w-2/3 sm:w-5/6 flex items-center">
                            <p class="font-semibold text-v-green" v-if="ProductQuantity > 0">In Stock {{ ProductQuantity }}</p>
                            <p class="font-semibold text-v-red " v-else>Out of Stock {{ ProductQuantity }}</p>
                        </div>
                    </div>                
                    <div class="flex items-center justify-between pb-4">
                        <div class="w-1/3 sm:w-1/5">
                            <p >Color</p>
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
                            <p>Size</p>
                        </div>
                        <div class="w-2/3 sm:w-5/6">
                            <select class="w-2/3 form-select">
                                <option value="0">Small</option>
                                <option value="1">Medium</option>
                                <option value="2">Large</option>
                            </select>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                    <div class="flex items-center justify-between pb-5 "> 
                        <div class="w-1/3 sm:w-1/5">
                            <p>Quantity</p>
                        </div>
                        <div class="w-2/3 sm:w-5/6 flex"> 
                            <input type="number" class="form-input rounded-r-none  w-2/3 py-0 px-2 text-center " v-model.number="CartItem.Qty" min="1" />
                            <div class="flex flex-col   inline-flex ">
                                <span class="px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer "
                                    @click="CartItem.Qty++"> 
                                    <svg class="text-primary pointer-events-none h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>                                                                                                          
                                </span>
                                <span class="px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer"
                                    @click="CartItem.Qty--"> 
                                    <svg class="text-primary pointer-events-none h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                                    </svg>                                                                  
                                </span>
                            </div>   
                        </div>         
                    </div>
                    </div>
                    <div class="flex items-center justify-between hidden lg:block">
                        <button :disabled="sending" :class="{'opacity-50':sending}"  @click="AddToCart" 
                        class="flex flex-inline justify-center items-center transition duration-1000 ease-in bg-yellow-400 hover:bg-yellow-600 focus:outline-none rounded-lg px-2 py-2 text-white font-semibold shadow  mr-2 uppercase w-full" type="button">
                            <svg v-if="!sending" class=" transition duration-700 ease-in-out  h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>                                   
                            <span class=" ml-2 pointer-events-none">Add to cart</span>
                        </button> 
                    </div>
                </div>        
  
 
                 <div class="mobile-addtocart-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 ">
                    <div class="grid grid-cols-4 gap-2 flex justify-around">  
                    
                        <div class="w-1/2 relative px-2 py-2">
                             
                            
                                <span class="px-1 py-2 bg-white flex-1 border border-gray-200 rounded cursor-pointer" @click="CartItem.Qty--">
                                    <i class="bx bxs-down-arrow text-xs text-primary pointer-events-none"></i>
                                </span>                 

                                <input type="number" class="rounded-r-none w-2/3 py-1 px-1 text-center"
                                v-model.number="CartItem.Qty" min="1" /> 
                                
                                <span class="text-xs absolute text-semibold bottom-5 px-0 right-12 transition duration-500 ease-in-out " :class="{'text-green-400':ProductQuantity > 0,'text-red-700':ProductQuantity < 1}">  /stock {{ProductQuantity}} </span>
                                
                                <span class="px-1 py-2 bg-white border  border-gray-200 flex-1 rounded cursor-pointer" @click="CartItem.Qty++">
                                    <i class="bx bxs-up-arrow text-xs text-primary pointer-events-none"></i>
                                </span>
 
                        </div>
                        <div class="flex justify-end w-1/2 relative px-2 py-2 ">
                            <button :disabled="sending" @click="AddToCart" type="button"
                                :class="{'opacity-50 pointer-events-none':sending}"  
                                class="flex items-center transition duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none rounded px-2 py-2 text-white text-sm font-semibold uppercase shadow" >

                                <svg v-if="!sending" class="transition duration-700 ease-in-out  h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <svg viewBox="0 0 20 20" class="h-4 w-4 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                                </svg>

                                <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <svg viewBox="0 0 20 20" class="h-6 w-6 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                                </svg>                                   

                                <span class="tracking-tighter">Add To Cart</span>
                                
                            </button> 
                        </div>
 
                    </div>    
                </div>    

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
                            <label for="message" class="font-hkregular text-secondary text-sm block mb-2">ReviewMessage</label>
                            <textarea placeholder="Give your review tittle" class="form-textarea"id="message"></textarea>
                        </div>
                    </form>
                    <div class="w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left">
                        <a href="/" class="btn btn-primary">Submit Review</a>
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
                price:this.Product?this.Product.current_price:0,
                image:this.Product?this.Product.mainphoto_url:'', 
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
        CartQty: function (newQty, oldQty) {  
            if(newQty > this.CartItem.Instock || newQty < 1 ){
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
                this.Label={
                    Color:'bg-primary',
                    Title:'-' +Math.round( ((this.Product.regular_price - this.Product.sale_price)/ this.Product.regular_price) * 100)+'%OFF',
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
        ProductImage(){ 
            return this.Product.mainphoto_url;
        },
        RegularPrice(){
            return this.Product.regular_price;
        }, 
        SalePrice(){
            return this.Product.sale_price;
        }, 
        CurrentPrice(){
            return this.Product.current_price;
        }, 
        ProductName(){
            return this.Product.name;
        },
        ProductQuantity(){
            return this.Product.quantity -this.CartItem.Qty;
        },
        ProductDescription(){
            return this.Product.description;
        },
        IsOnSale(){
            return this.$page.Product.sale_price > 0;
        }, 
        SkuCode(){
            return this.$page.Product.sku?this.$page.Product.sku:'N/A';
        }, 
        ProductCategories(){
            return this.$page.Product.categories;
        }, 
        CartQty(){
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