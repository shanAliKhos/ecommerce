<template>
    <section :class=" $page.currentRouteName == 'welcome'?'hero':'hero hero-normal'">
        <div class="container">
            <div class="row shadow-lg p-2">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all" @click="HeroCategories()">
                            <i class="fa fa-bars"></i>
                            <span>Categoryies</span>
                        </div>
                        <ul class="shadow-inner dep-ul">
                            <li v-for="(Category, index) in Categories" :key="index" v-if="index > 0">
                                <inertia-link 
                                    :href="$route('shop.category-products',Category.slug)" 
                                    preserve-scroll
                                    >{{ Category.name }}
                                </inertia-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <div class="hero__search__categories">
                                    Brands 
                                        <span class="arrow_carrot-down"></span>                                    
                                </div>
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn transition duration-500 ease-in-out hover:bg-red-500 transform hover:-translate-x-1 hover:scale-100 ">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="($page.currentRouteName == 'welcome') " class="hero__item shadow-inner"
                    :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + HeroMainImage + '\');'" >
                        <div class="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" class="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script> 
export default {
 
     
    methods: {
        HeroCategories(){
            $('.hero__categories ul').slideToggle(120);
        },
        
    },
    computed: {
        Categories(){
            return this.$page.Categories;
        },
        HeroMainImage(){
            var  img = APP_URL +'/img/hero/banner.jpg';
            return img;
        },
    },

 
}
</script>
<style scoped>
.dep-ul{
    height:455px !important;
}
     
</style>