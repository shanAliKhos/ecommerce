<template>
    <div class="product-attributes mt-2">
        <div v-for="(ProductAttribute, index) in Attributes" :key="index" class="product-attribute mb-3">
            <h5>{{index}}</h5>
            <div class="btn-group btn-group-xs mt-1 " role="group" aria-label="...">
                <button @click="SelectProduct(Attribute)" :class="{'seleced':SelectedAttribute.id === Attribute.id}" class="btn btn-outline-primary btn-sm ml-1" v-for="(Attribute, Attributeindex) in ProductAttribute" :key="Attributeindex">
                    <span v-if=" (index === 'Size')" >{{Attribute.AttributeValue.charAt(0).toUpperCase()}}</span>
                    <span v-else >{{Attribute.AttributeValue}} </span>
                </button>                                    
            </div>                                    
            <hr> 
        </div>
    </div>
</template>
<script>
export default {
    props:['Attributes'],
    data() {
        return {
            SelectedAttribute:{},
        };
    }, 
    mounted() {
       
    },
    methods: {
        SelectProduct(attrbute){
            self = this;
            console.log(this.SelectedAttribute.length)
            // this.SelectedAttribute = this.Attributes.Color[0]?this.Attributes.Color[0]:this.Attributes.Size[0];
        },
    },

}
</script>
<style scope>
.seleced{
    background-color:red;
}
</style>