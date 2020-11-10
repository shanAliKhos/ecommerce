<template>
    <tr>
        <td class="shoping__cart__item">
            <inertia-link :href="'/shop/'+CartItem.slug+'/details'">
                <img :src="ProductMainImage" alt="" class="img-thumbnail">
                <h5 class="cart-item-name">{{CartItem.name}}</h5>
            </inertia-link>
        </td>
        <td class="shoping__cart__price">
            ${{CartItem.price}}
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity">
                <div class="pro-qty">
                    <input type="text" v-model.number="CartItem.Qty" @change="update()">
                    <small :class="{'text-danger':(InStock == 0),'text-info':(InStock > 0), }">InStock {{InStock}}</small>
                </div>
            </div>
        </td>
        <td class="shoping__cart__total">
            ${{ CartItem.price * CartItem.Qty}}
        </td>
        <td class="shoping__cart__item__close">
            <span @click="destory" class="icon_close"></span>
        </td>        
    </tr>    
</template>
<script>
export default {
    props:['CartItem','cartindex'],
    methods: {
        destory(){ 
            const self = this; 
            this.$root.$emit('destory-this-item',self.cartindex);    
        },
        update(){
            const self = this; 
            this.$emit('update-this-item',self.cartindex);    
        },
    },
    watch: { 
        CartQty: function (newQty, oldQty) {  

            if(newQty > this.CartItem.Instock || newQty < 1 ){
                this.CartItem.Qty =  oldQty
            }
        }
    },    
    computed: {
        CartQty(){
            self = this;
            return self.CartItem.Qty;
        },        
        ProductMainImage(){
            self = this ;
            var  img = (self.CartItem.image)?'/'+self.CartItem.image.replace("public", "storage"):'/'+self.CartItem.image;
            return img; 
        },     
        InStock(){
            return this.CartItem.Instock - this.CartItem.Qty;
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
    
</style>