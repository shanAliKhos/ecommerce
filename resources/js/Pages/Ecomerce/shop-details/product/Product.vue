<template>
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large"
                                :src="ProductMainImage" :alt="Product.name">
                        </div>
                        <div class="product__details__pic__slider owl-carousel">
                            <img :data-imgbigurl="ProductImages[0]" :src="ProductImages[0]" alt="">
                            <img :data-imgbigurl="ProductImages[1]" :src="ProductImages[1]" alt="">
                            <img :data-imgbigurl="ProductImages[2]" :src="ProductImages[2]" alt="">
                            <img :data-imgbigurl="ProductImages[3]" :src="ProductImages[3]" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{{Product.name}}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">${{(Product.sale_price)?Product.sale_price:this.Product.regular_price}}</div>
                        <p>{{Product.description.substring(0,255)+"..."}}</p>
                        
                        <!-- <product-attributes :Attributes="ProductAttributes"></product-attributes> -->

                        <div class="product__details__quantity mt-5">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <span @click="CartProduct.Qty--" class="qtybtn">-</span>
                                    <input type="text" v-model="CartProduct.Qty">
                                    <span @click="CartProduct.Qty++" class="qtybtn">+</span>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="primary-btn" @click="AddToCart(CartProduct)">ADD TO CARD</button>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                        <ul>
                            <li><b>Availability</b> <span>{{(ProductQuantity > 1)?'In Stock ('+ProductQuantity+')':'Out of Stock'}}</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Weight</b> <span>{{Product.weight}} kg</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Information</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                    aria-selected="false">Reviews <span>(1)</span></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Description</h6>
                                    <p>{{Product.description}}</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Reviews</h6>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
                ProductImages:[],
                CartProduct:{
                    id:(this.Product.id)?this.Product.id:null,
                    name:(this.Product.name)?this.Product.name:'',
                    slug:(this.Product.slug)?this.Product.slug:'',
                    Instock:(this.Product.quantity)?this.Product.quantity:'',
                    Qty:1,
                    price:(this.Product.sale_price)?this.Product.sale_price:this.Product.regular_price,
                    image:(this.Product.image)?this.Product.image:'',
                }, 
            }
        },
        methods: {
            AddToCart(Item){ 
                this.$root.$emit('Add-To-Cart',Item);      
            },
        },
        watch: { 
            CartQty: function (newQty, oldQty) {  

                if(newQty > this.ProductQuantity || newQty < 1 ){
                    this.CartProduct.Qty =  oldQty
                }
            }
        },
        computed: {
            ProductMainImage(){
                self = this ;
                var  img = (this.Product.image)?APP_URL+'/'+this.Product.image.replace("public", "storage"):APP_URL+'/'+self.Product.image;
                return img;
                      
            },
            ProductAttributes(){
                self = this ;  
                return self.Product.Attributes;
            },
            ProductPrice(){
                self = this ;
                return (self.Product.sale_price)?self.Product.sale_price:self.Product.regular_price;
            },
            CartQty(){
                self = this;
                return self.CartProduct.Qty;
            },
            ProductQuantity(){
                self = this;
                return self.Product.quantity;
            }
        },

 
    }
</script>