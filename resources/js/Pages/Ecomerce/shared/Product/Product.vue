<template>
<div class="p-2 ">
    <div class="product-gird transition duration-700 ease-in-out shadow-sm hover:shadow-2xl rounded-lg pb-4">
        <inertia-link :href="route('shop.show',Product.slug)">
            <div class="absolute top-0 right-0 bg-white px-4 py-1 my-4 mx-4 rounded-full" v-if="SetLable.Active">
                <p class="font-semibold text-sm uppercase tracking-wide" :class="SetLable.Color"> {{SetLable.Title}}</p>
            </div>            
            <div class="flex justify-center items-center">
                <div class="w-full h-68 bg-center bg-no-repeat bg-cover transition duration-500 ease-in-out hover:shadow-lg rounded-lg"
                    :style="'background-image:url(\'' + ProductImage + '\')'">
                </div>  
            </div>
            <div class="flex items-center px-4 py-1">
                <p class="font-semibold text-xs text-gray-400 capitalize  overflow-ellipsis truncate overflow-hidden" :title="ProductName">{{ProductName}}</p>
            </div>
            <div class="flex px-4 py-1">
                <p class="font-semibold text-red-400 text-normal">{{Currency}} {{CurrentPrice}} </p>
                <p v-if="SalePrice>0" class="font-semibold line-through text-gray-400 text-xs ml-3">{{Currency}}{{RegularPrice}} </p>
            </div>
            <div class="flex px-4">
                <div class="flex items-center  ">
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                    <i class="bx bxs-star text-yellow-300"></i>
                </div>
                <p class="font-regular text-sm text-secondary  ml-2">(45)</p>
            </div>            

        </inertia-link>
    </div> 
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
 