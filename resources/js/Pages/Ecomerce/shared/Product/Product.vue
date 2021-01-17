<template>
<div class="p-1  ">
    <div class="product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4">
        <inertia-link :href="route('shop.show',Product.slug)" class="focus:outline-none">
            <div class="absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full z-30" v-if="Product.label.active">
                <p class="font-semibold text-sm uppercase tracking-wide" :class="Product.label.text_color"> {{Product.label.title}}</p>
            </div>     
            <div class="flex justify-center items-center w-auto h-56 mb-1 bg-gray-100">
                <img :src="ProductImage" class="w-auto h-full bg-center bg-no-repeat bg-cover transition transform duration-500 ease-in-out hover:shadow-lg rounded">
            </div>
            <div class="flex flex-wrap items-center px-4 py-2">
                <p class="font-mono font-semibold text-normal text-red-700 capitalize  overflow-ellipsis truncate overflow-hidden" :title="ProductName">{{ProductName}}</p>
            </div>
            <div class="flex items-center  px-2">
                <div class="flex  items-center group text-text-sm">
                    <i v-for="n in 5" :key="(n+1)" :class="{'bxs-star':n<=Product.rating,'bx-star':n>Product.rating}" class="bx text-yellow-300 border border-white"></i>   
                </div> 
            </div>             
            <div class="flex px-4">
                <p class="font-semibold text-red-500 text-normal">{{Currency}} {{CurrentPrice}} </p>
                <p v-if="SalePrice>0" class="font-semibold line-through text-gray-400 text-xs ml-3">{{Currency}}{{RegularPrice}} </p>
            </div>       
        </inertia-link>
    </div> 

    <!-- <div class="w-full lg:w-1/2 lg:px-5">
        <div
                class="flex flex-col sm:flex-row items-center border border-grey-dark mb-8 sm:mb-10 lg:mb-12 group shadow-none hover:shadow-lg rounde transition-shadowd">
            <div class="w-full sm:w-2/5 lg:w-5/11 relative">
                <div class="relative rounded-l">
                    <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                            style="background-image:url(/assets/img/unlicensed/sunglass-1.png)">
                    </div>
                    <span
                            class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hkbold text-v-green text-sm uppercase tracking-wide">
                        New
                    </span>
                    <div
                            class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded-l">
                    </div>
                    <div
                            class="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group hover:shadow-lg transition-all">
                        <a href="/cart"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg "
                                    class="h-6 w-6"
                                    alt="icon cart"/>
                        </a>
                        <a href="/product"
                            class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                            <img src="https://d33wubrfki0l68.cloudfront.net/56f050a65973a419ab0f192614c9a3c7232604d1/4b447/assets/img/icons/icon-search.svg"
                                    class="h-6 w-6"
                                    alt="icon search"/>
                        </a>
                        <a href="/account/wishlist/"
                            class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg"
                                    class="h-6 w-6"
                                    alt="icon heart"/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-3/5 lg:w-6/11 px-6 py-6 sm:py-0">
                <h3
                    class="font-hkregular text-xl xl:text-2xl text-grey-darkest">
                    Cat eye</h3>
                <span
                        class="font-hkbold text-secondary text-xl block pt-1">$75.0</span>
                <span
                        class="pt-4 font-hkbold text-v-green text-base block">In Stock</span>
                <p
                    class="font-hkregular text-grey-darkest pt-2 text-sm xl:text-base">
                    Elyssi sunglasses provides a new way to protect your eyes from the sun’s UV light, because of its polarized lenses.</p>
                <div class="flex items-center pt-3 xl:pt-5">
                    <div class="flex items-center">
                        <i class="bx bxs-star text-primary"></i>
                        <i class="bx bxs-star text-primary"></i>
                        <i class="bx bxs-star text-primary"></i>
                        <i class="bx bxs-star text-primary"></i>
                        <i class="bx bxs-star text-primary"></i>
                    </div>
                    <p class="font-hkregular text-sm text-secondary ml-2">
                        45</p>
                </div>
            </div>
        </div>
    </div>     -->
</div> 
</template> 
<script>
export default {
    props:['Product'],
 
    methods: {
        // AddToCart(Item){   
        //     this.$root.$emit('Add-To-Cart',{
        //         "id":(Item.id)?Item.id:'',
        //         "name":(Item.name)?Item.name:'',
        //         "slug":(Item.slug)?Item.slug:'',
        //         "Instock":(Item.quantity)?Item.quantity:'',
        //         "Qty":1,
        //         "price":Item.current_price,
        //         "image":this.Product.image?Item.image:'./img/shoes-4.png',
        //     });      
        // },        

    }, 
    computed: {
        ProductImage(){
            var  img = this.Product.mainphoto_url;
            return img;
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
 
        Currency(){
            return this.$page.SiteOptions.Currency.Symbol;
        },
      
        
    },
 
  
 
}
</script>
 