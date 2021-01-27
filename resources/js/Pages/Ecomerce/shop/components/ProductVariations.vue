<template>
  <div class="product-attrbute-variation text-xs font-semibold">
    <div class="flex items-center justify-between pb-4">
      <div class="flex flex-wrap items-center">
        <p>SKU</p>
      </div>
      <div class="flex flex-wrap items-center text-blue-700 font-semibold"> 
        <p>{{ SkuCode }}</p>
      </div>
    </div>
    <div class="flex items-center justify-between pb-4"> 
      <div class="flex flex-wrap items-center">
          <p>Availablity</p>
      </div>
      <div class="flex flex-wrap items-center">
        <p
          class="font-semibold"
          :class="{
            'text-green-400': ProductQuantity > 0,
            'text-red-400': ProductQuantity < 1,
          }"
        >
          {{ ProductQuantity > 0 ? "In Stock" : "OutStock" }}
          {{ ProductQuantity }}
        </p>
      </div>
    </div>

    <div
      class="flex flex-wrap items-center justify-between pb-4"
      v-for="(ProductVariation, ProductVariationIndex) in ProductVariations"
      :key="ProductVariationIndex"
    >
      <div class="flex flex-wrap  ">
        <p>{{ ProductVariation.attribute.name }}</p>
      </div>
      <div
        class="flex flex-wrap items-center w-2/3"
        v-if="ProductVariation.attribute.name == 'Color'"
      >
        <label
          class="flex inline-flex items-center mt-3"
          v-for="(
            attribute_option, attribute_option_index
          ) in ProductVariation.attribute_options"
          :key="attribute_option_index"
        >
          <input
            type="radio"
            v-model="ProductVariation.selected" 
            class="form-radio px-2 py-2 rounded focus:outline-red"
            :class="AttrColor(attribute_option.name.toLowerCase(),ProductVariation.selected,attribute_option.id)"
            :value="attribute_option.id"
            :key="attribute_option_index"  
          />
          <span class="px-2 text-xs text-gray-700 font-semibold">{{
            attribute_option.name
          }}</span>
        </label>
      </div>
      <div class="flex flex-wrap items-center w-2/3" v-else>
        <select
          v-model="ProductVariation.selected"
          class="w-full transition duration-700 ease-in-out px-4 py-2 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none focus:border-purple-600"
        >
          <option
            v-for="(
              attribute_option, attribute_option_index
            ) in ProductVariation.attribute_options"
            :key="attribute_option_index"
            :value="attribute_option.id"
          >
            {{ attribute_option.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["ProductQuantity"],
 
  methods: {
    AttrColor(clr,sel,oid){
        let color = `bg-${clr}-400 text-${clr}-400`;
        let selected = sel==oid ? ` outline-red`:''; 
        return color.concat(selected);
    },   
  },
 remember:'SelectedSku',
  watch:{
    SelectedSku(val){
      this.$emit('sku:changed',val);
    },
  },
  computed: {
    SelectedSku(){
      const self = this;
      let selectedSku = { }; 
      this.$page.Product.skus.filter(sku =>{
        if(JSON.stringify(sku.attribute_options_ids)== JSON.stringify( this.selctedOption)){
          selectedSku = sku;
        }
      }); 
      return selectedSku;
    }, 
    SkuCode() {
      const self = this;
      return self.SelectedSku.name?self.SelectedSku.name:self.$page.Product.sku; 
    },
    ProductVariations() {
      return this.$page.Product.variations;
    },
    selctedOption() { 
      let selectedOptions= []; 
      this.$page.Product.variations.filter((variation) =>{
          selectedOptions.push(variation.selected);
      });
      return selectedOptions;
    },
    
  },

  mounted(){
    const self= this; 

      self.$emit('sku:changed',self.SelectedSku);
  },
 
};
</script>