<template>
<div class="container relative">

    <div class="pt-16 pb-24 flex flex-col lg:flex-row justify-between -mx-5">
        <div class="lg:1/2 flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-between px-5">
            <div class="sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col">

                <div class="w-28 h-28 my-3 bg-center bg-no-repeat bg-cover cursor-pointer  pb-5 mr-3 sm:pr-0 border-2 border-gray-300 bg-gray-50" @click="selectedImage = $event.target.style.backgroundImage" :style="`background-image:url('${this.$page.Product.mainphoto_url}')`"></div>

                <div v-for="n in 3" :key="n+1" class="w-28 h-28 my-3 bg-center bg-no-repeat bg-cover cursor-pointer pb-5 mr-3 sm:pr-0 border-2 border-gray-300 bg-gray-50" @click="selectedImage = $event.target.style.backgroundImage" :style="`background-image:url('./../../img/product/product (${Math.floor(Math.random() * 40)}).jpg')`">
                </div>

            </div>
            <div class="w-full sm:w-96 lg:w-80 xl:w-90 relative pb-5 sm:pb-0">
                <div class="bg-v-pink border border-grey relative h-80 sm:h-94 xl:h-96 rounded flex items-center justify-center">
                    <div class="w-full h-full my-6  bg-center bg-no-repeat bg-cover" :style="'background-image:'+selectedImage+''"></div>
                </div>
            </div>
        </div>
        <div class="lg:w-1/2 pt-5 lg:pt-0 px-5">

            <div class="product-title">
                <div class="border-b border-grey-dark mb-8">
                    <div class="flex items-center">
                        <p class="font-mono text-3xl capitalize text-gray-900 overflow-ellipsis overflow-hidden">{{Product.name}}</p>
                        <small class="rounded-full text-white uppercase text-sm text-center px-4 py-2 m-2" :class="Product.label.bg_scolor" v-if="Product.label.active">{{Product.label.title}}</small>
                    </div>
                    <div class="flex items-center pt-2">
                        <div class="flex items-center">
                            <i v-for="n in 5" :key="n" :class="{'bxs-star':n<=Product.rating,'bx-star':n>Product.rating}" class="bx text-yellow-300 border border-white text-lg"></i>
                        </div>
                    </div>
                    <div class="flex items-center pt-2">
                        <span class="font-semibold text-red-600 text-2xl text-red-600">
                            {{$page.SiteOptions.Currency.Symbol}} {{CurrentPrice}}
                        </span>
                        <span class="font-semibold text-grey-darker text-xl line-through pl-5" v-if="IsOnSale">
                            {{$page.SiteOptions.Currency.Symbol}} {{RegularPrice}}
                        </span>
                    </div>
                    <div class="flex items-center " v-if="ProductCategories.length > 0">
                        <div class=" text-gray-400 mt-2 mb-1 text-xs">
                            <span class="pr-2">Categories:</span>
                            <span v-for="(ProductCategory, index) in ProductCategories" :key="index" class="capitalize ">{{ProductCategory.name}} <span v-if="ProductCategories.length > (index+1)">, </span></span>
                        </div>
                    </div>
                    <div class="flex items-center" v-if="ProductBrand">
                        <div class=" text-gray-400 mt-1 mb-1 text-xs">
                            <span class="pr-2">Brands:</span>
                            <span class="capitalize ">{{ProductBrand.name}} </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-attrbute-variation text-gray-500">
                <div class="flex items-center justify-between pb-4">
                    <div class="w-1/4 flex flex-wrap items-center">
                        <p>SKU </p>
                    </div>
                    <div class="w-3/4 flex flex-wrap items-center">
                        <p>{{ SkuCode }}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between pb-4 block lg:hidden">
                    <div class="w-1/4 flex flex-wrap items-center">
                        <p>Availablity</p>
                    </div>
                    <div class="w-3/4 flex flex-wrap items-center">
                        <p class="font-semibold w-3/4" :class="{'text-green-400':(ProductQuantity > 0),'text-red-400':(ProductQuantity < 1)}">{{ ProductQuantity>0?'In Stock':'OutStock' }} {{ ProductQuantity }}</p>
                        
                    </div>
                </div>
               
                <div class="flex flex-wrap items-center justify-between pb-4" v-for="(ProductVariation, ProductVariationIndex) in ProductVariations" :key="ProductVariationIndex">
                    <div class="flex flex-wrap w-1/4">
                        <p>{{ProductVariation.attribute.name}}</p>
                    </div>
                    <div class="w-3/4 flex flex-wrap items-center" v-if="(ProductVariation.attribute.name == 'Color')">
                        <label class="w-1/2 md:w-1/3 flex inline-flex items-center mt-3" v-for="(attribute_option, attribute_option_index) in ProductVariation.attribute_options" :key="attribute_option_index">
                            <input type="radio" v-model="form.selectedSku" class="form-radio px-3 py-3 rounded focus:outline-red " :class="AttrColor(attribute_option.name.toLowerCase())" :value="attribute_option.id" :key="attribute_option_index">
                            <span class="px-2 text-xs text-gray-700 font-semibold">{{attribute_option.name}}</span>
                        </label>
                    </div>
                    <div class="w-3/4" v-else>
                        <select class="w-2/3 transition duration-700 ease-in-out px-4 py-2 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none  focus:border-purple-600">
                            <option v-for="(attribute_option, attribute_option_index) in ProductVariation.attribute_options" :key="attribute_option_index" :value="attribute_option.id">{{attribute_option.name}}</option>
                        </select>
                    </div>
                </div> 
            </div>

            <div class="text-xs fixed bottom-0 right-1 flex flex-wrap justify-end items-center hidden lg:block py-3 px-3 z-50 bg-white shadow-2xl border border-gray-200 rounded-lg  ">

                <p class="text-red-700 font-semibold flex">SKU : {{SkuCode}}</p>
 
                <div class="flex flex-wrap items-center bg-white py-1 w-full transition duration-700 ease-in-out " :class="{'text-green-400':(ProductQuantity > 0),'text-red-400':(ProductQuantity < 1)}">
                    
                    <p class="font-semibold w-3/4" >{{ ProductQuantity>0?'In Stock':'OutStock' }} {{ ProductQuantity }}</p>

                    <p class=" font-semibold flex justify-center w-1/4">Qty</p>

                </div>

                <div class="flex flex-wrap items-center  pb-2 bg-white">
                    <input type="number" class="text-red-600  font-semibold text-center w-4/5 transition duration-700 ease-in-out px-4 py-3 rounded  shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-r-0 border-2 border-gray-200 focus:outline-none  " v-model.number="CartItem.Qty" min="1" />
                    <div class="flex flex-col inline-flex w-1/5">
                        <button class="transition transform duration-500 focus:scale-105 flex flex-1 item-center justify-center text-white  bg-green-400 border focus:border-white focus:bg-green-600 rounded-tr px-1 cursor-pointer focus:outline-none" @click="CartItem.Qty++">
                            <svg class="h-6 w-6 focus:" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                        <button class="transition transform duration-500 focus:scale-105 flex flex-1 item-center justify-center text-white  bg-red-400 border focus:border-white focus:bg-red-600 rounded-tr px-1 cursor-pointer focus:outline-none" @click="CartItem.Qty--">
                            <svg class="pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="flex flex-wrap  items-center  bg-white">
                    <button :disabled="sending" :class="{'opacity-50 pointer-events-none':sending}" @click="AddToCart" 
                        class="group w-full flex flex-inline justify-center items-center transition transform duration-500 ease-in bg-red-500  hover:bg-red-600 focus:outline-none cursor-pointer rounded px-4 py-3 text-white font-semibold shadow uppercase focus:scale-105" type="button">
                        <svg v-if="!sending" class=" transition duration-700 ease-in-out  h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <svg v-if="sending" class="transition  ease-in-out  animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="  ml-2 pointer-events-none">{{CartButtonName}}</span>
                    </button>
                </div>

            </div>
            
            <div class="mobile-addtocart-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 ">
                <div class="flex justify-around">

                    <div class="w-1/2 relative px-2 py-2">

                        <button class="transition transform duration-500 ease-in focus:outline-none focus:scale-105 px-2 py-2 text-red-400 transition duration-700 ease-in-out transform focus:text-green-500 bg-white bx bx-minus bx-border font-semibold" @click="CartItem.Qty--"></button>

                        <span class="px-5 py-4 bg-gray-50 text-green-500 cursor-pointer font-semibold">{{CartItem.Qty}}</span>

                        <button class="transition transform duration-300 ease-in focus:outline-none focus:scale-105 px-2 py-2 text-green-400 transition duration-700 ease-in-out transform focus:text-green-500 bg-white bx bx-plus bx-border font-semibold" @click="CartItem.Qty++"></button>

                    </div>

                    <div class="flex justify-end w-1/2 relative  px-2 py-2 ">
                        <button :disabled="sending" type="button" :class="{'opacity-50 pointer-events-none':sending}" @click="AddToCart" class="group text-xs px-2 flex items-center transition transform  duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none focus:scale-105   rounded text-white font-normal tracking-wide cursor-pointer">

                            <svg v-if="!sending" class=" transition transform  duration-700 ease-in-out  h-4 w-4 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            <svg v-if="sending" class="pointer-events-none transition  ease-in-out  animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="tracking-tighter pointer-events-none ml-2">{{CartButtonName}}</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="pb-16 sm:pb-20 md:pb-24" x-data="{ activeTab: 'description' }">
        <div class="tabs flex flex-col sm:flex-row" role="tablist">

            <span @click="activeTab = 'description'" class="tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors" :class="{ 'active': activeTab=== 'description' }">
                Description
            </span>

            <span @click="activeTab = 'additional-information'" class="tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors" :class="{ 'active': activeTab=== 'additional-information' }">
                Additional Information
            </span>

            <span @click="activeTab = 'reviews'" class="tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors" :class="{ 'active': activeTab=== 'reviews' }">
                Reviews
            </span>

        </div>
        <div class="tab-content relative">
            <div :class="{ 'active': activeTab=== 'description' }" class="tab-pane bg-grey-light py-10 md:py-16   transition-opacity" role="tabpanel">
                <div class="w-5/6 mx-auto text-center sm:text-left">
                    <div class="font-hkregular text-secondary text-base" v-html="ProductDescription">

                    </div>
                </div>
            </div>
            <div :class="{ 'active': activeTab=== 'additional-information' }" class="tab-pane bg-grey-light py-10 md:py-16   transition-opacity" role="tabpanel">
                <div class="w-5/6 mx-auto">
                    <div class="font-hkregular text-secondary text-base">
                        On the main compartment has multiple pockets available for your tools, chargers,
                        make up, keys, etc. <br /><br /> Size::13.4”Lx 6.5”W x 15.4”H. <br /> Weight:
                        1.57pounds. <br /> Color: light brown.

                    </div>
                </div>
            </div>
            <div :class="{ 'active': activeTab=== 'reviews' }" class="tab-pane bg-grey-light py-10 md:py-16   transition-opacity" role="tabpanel">

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
                            <label class="font-hkregular text-secondary text-sm block mb-2" for="name">Name</label>
                            <input type="text" placeholder="Enter your Name" class="form-input" id="name" />
                        </div>
                        <div class="sm:w-1/2 px-5 pt-10 sm:pt-0">
                            <label class="font-hkregular text-secondary text-sm block mb-2" for="email">Email
                                address</label>
                            <input type="email" placeholder="Enter your email" class="form-input " id="email" />
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
                        <div class="sm:w-1/2 px-5">
                            <label class="font-hkregular text-secondary text-sm block mb-2" for="review_title">Review
                                Title</label>
                            <input type="text" placeholder="Enter your review title" class="form-input " id="review_title" />
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
                        <textarea placeholder="Give your review tittle" class="form-textarea" id="message"></textarea>
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
    data() {
        return {
            CartItem: {
                id: this.$page.Product ? this.$page.Product.id : null,
                name: this.$page.Product ? this.$page.Product.name : '',
                slug: this.$page.Product ? this.$page.Product.slug : '',
                Instock: this.$page.Product ? this.$page.Product.quantity : '',
                Qty: 1,
                price: this.$page.Product ? this.$page.Product.current_price : 0,
                image: this.$page.Product ? this.$page.Product.mainphoto_url : '',
            },
            form: {},
            sending: false,
            activeTab: 'description',
            selectedImage: `url('${this.$page.Product.mainphoto_url}')`,
        }
    },
    watch: {
        CartQty: function (newQty, oldQty) {
            if (newQty > this.CartItem.Instock || newQty < 1) {
                this.CartItem.Qty = oldQty
            }
        }
    },
    methods: {
        AddToCart() {
            this.sending = true;
            this.$root.$emit('Add-To-Cart', this.CartItem);
        },
        AttrColor(clr) {
            return `bg-${clr}-400 text-${clr}-400`
        },

    },
    computed: {
        Product() {
            return this.$page.Product;
        },
        ProductImage() {
            return this.$page.Product.mainphoto_url;
        },
        RegularPrice() {
            return this.$page.Product.regular_price;
        },
        SalePrice() {
            return this.$page.Product.sale_price;
        },
        CurrentPrice() {
            return this.$page.Product.current_price;
        },
        ProductName() {
            return this.$page.Product.name;
        },
        ProductQuantity() {
            return this.$page.Product.quantity - this.CartItem.Qty;
        },
        ProductDescription() {
            return this.$page.Product.description;
        },
        IsOnSale() {
            return this.$page.Product.sale_price > 0;
        },
        SkuCode() {
            return this.$page.Product.sku ? this.$page.Product.sku : 'N/A';
        },
        ProductCategories() {
            return this.$page.Product.categories;
        },
        ProductBrand() {
            return this.$page.Product.brand;
        },
        CartQty() {
            self = this;
            return self.CartItem.Qty;
        },
        ProductVariations() {
            return this.$page.Product.variations;
        }, 
        CartButtonName() {
            let button;
            button = 'Add to cart'
            if (this.$page.Cart.Items) {
                this.$page.Cart.Items.filter((Item) => {
                    if (Item.id == this.$page.Product.id) {
                        button = 'Update to cart'
                        this.CartItem.Qty = Item.Qty
                    }
                });
            }
            return button;
        },
    },
    mounted() {
        this.$root.$on('item-is-added-to-cart', () => {
            this.sending = false;
        });
    },

}
</script>
