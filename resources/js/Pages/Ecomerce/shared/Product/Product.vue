<template>
    <div :class="{'product__item':!Product.sale_price,'product__discount__item':Product.sale_price}" class="shadow-md">
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
        <!-- <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default"><i class="fa fa-heart"></i>Favourite</button>
            </div> 
            <div class="btn-group" role="group">
                <button @click="AddToCart(Product)" type="button" class="btn btn-default"><i class="fa fa-shopping-cart"></i>Add To Cart</button>
            </div>
        </div>             -->
    </div>
</template>

<script>
export default {
    props:['Product'],
    methods: {
        AddToCart(Item){   
            this.$root.$emit('Add-To-Cart',{
                "id":(Item.id)?Item.id:'',
                "name":(Item.name)?Item.name:'',
                "slug":(Item.slug)?Item.slug:'',
                "Instock":(Item.quantity)?Item.quantity:'',
                "Qty":1,
                "price":(Item.sale_price)?Item.sale_price:Item.regular_price,
                "image":(Item.image)?Item.image:'',
            });      
        },        
    }, 
    computed: {
        ProductImage(){
            var  img = (this.Product.image)?'/'+this.Product.image.replace("public", "storage"):'/'+this.Product.image;
            return img;
        }
    },
  
 
}
</script>
<style scoped>

 </style>