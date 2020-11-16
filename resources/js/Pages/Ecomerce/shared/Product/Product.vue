<template>
    <div class="product-gird">
        <div class="relative rounded flex justify-center items-center">
            <div class="w-full h-68 bg-center bg-no-repeat bg-cover"
                :style="'background-image:url(\'' + ProductImage + '\')'">
            </div> 
            <div class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full" v-if="Label.Active">
                <p class="font-hkbold text-sm uppercase tracking-wide" :class="Label.Color">
                    {{Label.Title}}
                </p>
            </div>            
            <div
                class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
            </div>
            <div class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
                <a href="javascript:;" @click="AddToCart(Product)" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                    <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg " class="h-6 w-6" alt="icon cart" />
                </a>
 
                <a href="/account/wishlist/" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f7c995473e0c29c1578cd00a2b7baa1562456ad9/b584a/assets/img/icons/icon-heart.svg" class="h-6 w-6" alt="icon heart" />
                </a>
            </div>
        </div>
        <inertia-link :href="route('shop.product',Product.slug)">
            <div class="flex justify-between items-center pt-6">
                <div>
                    <h3 class="font-hkregular text-base text-secondary" :title="ProductName">{{ProductName.substring(0,15)+"..."}}</h3>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                            <i class="bx bxs-star text-primary"></i>
                        </div>
                        <p class="font-hkregular text-sm text-secondary ml-2">
                            (45)</p>
                    </div>
                </div>
                <span class="font-hkbold text-primary text-md">
                    {{$page.SiteOptions.Currency.Symbol}} {{CurrentPrice}} 
                </span>
            </div>
        </inertia-link>

    </div>
    <!-- <div :class="{'product__item':!Product.sale_price,'product__discount__item':Product.sale_price}" class="shadow-sm">
        <div :class="{'product__item__pic':!Product.sale_price, 'product__discount__item__pic':Product.sale_price}" class="shadow-sm p-2 i" 
        :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + ProductImage + '\');'"
        >
            <div class="product__discount__percent" v-if="Product.sale_price">-20%</div>
            <ul class="product__item__pic__hover">
                <li><a href="javascript:;"><i class="fa fa-heart"></i></a></li>
                <li><a href="javascript:;"><i class="fa fa-retweet"></i></a></li>
                <li><a href="javascript:;"  @click="AddToCart(Product)"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
        <inertia-link :href="$route('shop.product',Product.slug)">
            <div :class="{'product__item__text':!Product.sale_price ,'product__discount__item__text':Product.sale_price}" class="h-20">
                <h6 class="product-name" :title="Product.name">{{Product.name.substring(0,30)+"..."}}</h6>
                <div class="product__item__price" v-if="Product.sale_price">${{Product.sale_price}} <span>${{Product.regular_price}}</span></div>
                <h5 v-else>${{Product.regular_price}}</h5>            
            </div>            
        </inertia-link>
     
    </div> -->

</template> 
<script>
export default {
    props:['Product'],
    data() {
        return {
            Label:{
                Color:null,
                Title:null,
                Active:false,
            }
        }
    },
    methods: {
        AddToCart(Item){   
            this.$root.$emit('Add-To-Cart',{
                "id":(Item.id)?Item.id:'',
                "name":(Item.name)?Item.name:'',
                "slug":(Item.slug)?Item.slug:'',
                "Instock":(Item.quantity)?Item.quantity:'',
                "Qty":1,
                "price":(Item.sale_price)?Item.sale_price:Item.regular_price,
                "image":this.Product.image?Item.image:'./img/shoes-4.png',
            });      
        },        
        SetLable(){ 
            if(this.Product.sale_price > 0){
                var RegualPrice = this.Product.regular_price;
                var SalePrice = this.Product.sale_price;
                var Discount = Math.round( ((RegualPrice - SalePrice)/ RegualPrice) * 100) + '%';
                this.Label={
                    Color:'text-primary-light',
                    Title:Discount,
                    Active:true,                
                };
            }else if(this.Product.is_featured){                    
                this.Label={
                    Color:'text-v-blue',
                    Title:'Trend',
                    Active:true,                
                };       
                
            }else{

                this.Label={
                    Color:'text-v-green',
                    Title:'new',
                    Active:true,                
                };   

            }  
        },
    }, 
    computed: {
        ProductImage(){
            var  img = this.Product.image?this.Product.image.replace("public", "storage"):'./img/shoes-4.png';
            return img;
        },
        RegularPrice(){
            return this.Product.regular_price;
        }, 
        SalePrice(){
            return this.Product.sale_price;
        }, 
        CurrentPrice(){
            return this.Product.sale_price?this.Product.sale_price:this.Product.regular_price;
        }, 
        ProductName(){
            return this.Product.name;
        },
        
    },
    mounted() {
        this.SetLable();
    },
  
 
}
</script>
 