<template>
  <div class="product-title">
    <div class="border-b border-grey-dark mb-8">
      <div class="flex items-center">
        <p class="font-mono text-3xl capitalize text-gray-900 overflow-ellipsis overflow-hidden">{{ ProductName }}</p>
        <small class="rounded-full text-white uppercase text-sm text-center px-4 py-2 m-2" :class="ProductLabel.bg_color" v-if="ProductLabel.active" >{{ ProductLabel.title }}</small>
      </div>
      <div class="flex items-center  ">
        <div class="flex items-center">
          <i v-for="n in 5" :key="n" :class="{ 'bxs-star': n <= ProductRating,'bx-star': n > ProductRating,}" class="bx text-yellow-300 border border-white text-lg"></i>
        </div>
      </div>
      <div class="flex items-center ">
        <span class="font-semibold text-red-600 text-2xl">{{ Currency }} {{ ProductCurrentPrice }}</span>
        <span class="font-semibold text-grey-darker text-xl line-through pl-5" v-if="ProductIsOnSale">{{ Currency }} {{ ProductRegularPrice }}</span>
      </div>
      <div class="flex items-center text-gray-500 border-b border-t py-2">
        <div class=" mb-1 text-xs">
          <span class="pr-2 font-semibold">Categories:</span>
          <span v-if="ProductCategories.length<1" >N/A</span>
          <span v-for="(ProductCategory, index) in ProductCategories" :key="index" class="capitalize" >
              <span>{{ ProductCategory }}</span>
              <span v-if="ProductCategories.length > index + 1">| </span> 
          </span>
        </div>
      </div>
      <div class="flex items-center text-gray-500 py-2">
        <div class="text-xs">
          <span class="pr-2 font-semibold">Brands:</span>
          <span class="capitalize">{{ ProductBrand?ProductBrand:'N/A' }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['selectedSku'],
  computed: {
    ProductName() {
      return this.$page.Product.name;
    },
    ProductIsOnSale() {
      return  this.selectedSku.on_sale?this.selectedSku.on_sale:this.$page.Product.on_sale;
    },
    ProductRegularPrice() {
      return this.selectedSku.regular_price?this.selectedSku.regular_price:this.$page.Product.regular_price;
    },
    ProductRating() {
      return this.$page.Product.rating;
    },
    ProductCurrentPrice() {
      return this.selectedSku.current_price?this.selectedSku.current_price:this.$page.Product.current_price;
    },
    ProductCategories() {
      return this.$page.Product.categories.map((categories)=>{
        return categories.name
      });
    },
    ProductBrand() {
      return this.$page.Product.brand?this.$page.Product.brand.name:'';
    }, 
    Currency() {
      return this.$page.SiteOptions.Currency.Symbol;
    },
    ProductLabel(){
      return this.$page.Product.label
    },
    
 
  },

};
</script>