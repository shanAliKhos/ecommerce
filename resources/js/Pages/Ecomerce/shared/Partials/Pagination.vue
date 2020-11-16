<template>
<div class="pb-16 flex justify-center mx-auto" v-if="Links.length"> 
    <pagination-link v-for="(Link, Linkindex) in Links" :key="Linkindex"  :Link="Link"></pagination-link> 
</div>     
</template>
<script>
import PaginationLink from './components/PaginationLink'
export default {
    props:['Links'],
    components: {
        PaginationLink,
    },
    
}
</script>
<!-- <div class="pb-16 flex justify-center mx-auto">
    <span class="font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer">Previous</span>
    <span class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">1</span>
    <span class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">2</span>
    <span class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center cursor-pointer">3</span>
    <span class=" font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer">Next</span>
</div> -->