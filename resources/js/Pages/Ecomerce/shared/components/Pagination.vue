<template>
    <div class="product__pagination" v-if="links.length">
        <inertia-link v-for="(link, linkindex) in links" 
        :key="linkindex" 
        v-if="link.url"
        :href="link.url"
        :class="{'active':link.active}"
        class="transition duration-500 ease-in-out  transform hover:-translate-x-1 hover:scale-100 "
        preserve-scroll

        >
        {{link.label}}
        </inertia-link> 
    </div> 
</template>
<script>
export default {
    props:['links'],
}
</script>
<style scoped> 
 
.product__pagination a, .blog__pagination a {
    width: unset;
    padding: 10px;
    line-height: 0.5;
}

.active {
    background: #7fad39;
    color: #ffffff !important;
}
    
</style>