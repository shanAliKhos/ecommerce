<template>
<div class="product-gird transition duration-500 ease-in-out transform motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 shadow-sm hover:shadow-md">
    <div class=" rounded flex justify-center items-center p-2">
        <div class="w-full h-68 bg-center bg-no-repeat bg-cover shadow-md hover:shadow-lg"
            :style="'background-image:url(\'' + ProductImage + '\')'">
        </div> 
        <div class="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full" v-if="Label.Active">
            <p class="font-hkbold text-sm uppercase tracking-wide" :class="Label.Color"> {{Label.Title}}</p>
        </div>            
        <!-- <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
        </div>
        <div class="absolute opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center py-28 inset-0 group">
            <a href="javascript:;" @click="AddToCart(Product)" class="bg-white hover:bg-primary-light rounded-full px-3 py-3 flex items-center transition-all mr-3">
                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-cart"></span>
            </a>
            <a href="javascript:;" class="bg-white hover:bg-primary-light  rounded-full px-3 py-3 flex items-center transition-all ">
                <span class="bg-contain bg-center bg-no-repeat h-6 w-6 bg-icon-heart"></span> 
            </a>
        </div> -->
    </div>
    <div class="p-2 relative h-28 ">
    <inertia-link :href="route('shop.show',Product.slug)" class="z-30">
            <div class="flex items-center content-center py-2">
                <h3 class="font-semibold text-xs text-gray-400 capitalize" :title="ProductName">{{ProductName.substring(0,65)+"..."}}</h3>
            </div>
            <div class="flex  absolute bottom-7">
                <p class="font-semibold text-red-400 text-sm">{{$page.SiteOptions.Currency.Symbol}}{{CurrentPrice}} </p>
                <p v-if="SalePrice>0" class="font-semibold line-through text-gray-400 text-xs ml-3">{{$page.SiteOptions.Currency.Symbol}}{{RegularPrice}} </p>
            </div>
            <div class="flex absolute bottom-2">
                <div class="flex items-center text-xs">
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                </div>
                <p class="font-hkregular text-sm text-secondary  ml-2">(45)</p>
            </div>            
    </inertia-link>
    </div>
</div> 
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
            var  img = this.Product.image?this.Product.image.replace("public", "storage"):'./img/product/product (1).png';
            return img;
        },
        RegularPrice(){
            return this.Product.regular_price;
        }, 
        SalePrice(){
            return this.Product.sale_price;
        }, 
        CurrentPrice(){
            return this.Product.sale_price>0?this.Product.sale_price:this.Product.regular_price;
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
 