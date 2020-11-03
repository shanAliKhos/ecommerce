<template>
    <div class="categories__item"  
        :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + CategoryImage + '\');'"
    >
    <img :src="CategoryImage">
        <h5>shan</h5>
        <!-- <h5><inertia-link :href="'/shop/'+Category.slug">{{Category.name}}</inertia-link></h5> -->
    </div>
</template>
<script>
export default {
    props:['Category'],
    computed: {
        CategoryImage(){
            return this.Category.image.replace("public", "storage");
        }
    },    
}
</script>