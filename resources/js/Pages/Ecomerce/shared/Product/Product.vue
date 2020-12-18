<template>
<inertia-link :href="route('shop.show',Product.slug)" class="z-30 p-2">
<div class="product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl hover:scale-105 rounded-lg">
<div class="absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full " v-if="SetLable.Active">
    <p class="font-semibold text-sm uppercase tracking-wide" :class="SetLable.Color"> {{SetLable.Title}}</p>
</div>            
    <div class="flex justify-center items-center m-1">
        <div class="w-full h-68 bg-center bg-no-repeat bg-cover transition duration-500 ease-in-out hover:shadow-lg rounded-lg"
            :style="'background-image:url(\'' + ProductImage + '\')'">
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
            <div class="flex items-center content-center py-2">
                <p class="font-semibold text-xs text-gray-400 capitalize" :title="ProductName">{{ProductName.substring(0,65)+"..."}}</p>
            </div>
            <div class="flex  absolute bottom-7">
                <p class="font-semibold text-red-400 text-sm">{{Currency}} {{CurrentPrice}} </p>
                <p v-if="SalePrice>0" class="font-semibold line-through text-gray-400 text-xs ml-3">{{Currency}}{{RegularPrice}} </p>
            </div>
            <div class="flex absolute bottom-2">
                <div class="flex items-center text-xs">
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                </div>
                <p class="font-regular text-sm text-secondary  ml-2">(45)</p>
            </div>            
    </div>
</div> 
</inertia-link>
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
        SetLable(){
            let lable;
            if(this.Product.sale_price > 0){
    
                lable ={
                    Color:'text-primary-light',
                    Title:'-' +Math.round( ((this.Product.regular_price - this.Product.sale_price)/ this.Product.regular_price) * 100) + '%',
                    Active:true,                
                };
                
            }else if(this.Product.is_featured){                    
                lable={
                    Color:'text-v-blue',
                    Title:'Trend',
                    Active:true,                
                };       
                
            }else{

                lable={
                    Color:'text-v-green',
                    Title:'new',
                    Active:true,                
                };   

            }  
         return lable;
        },  
        Currency(){
            return this.$page.SiteOptions.Currency.Symbol;
        }
        
    },
 
  
 
}
</script>
 