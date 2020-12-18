<template>
    <inertia-link
        v-if="Link.url"
        :href="Link.url"
        :class="{'bg-primary':Link.active}"
        v-bind="$attrs"
        class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer"
   
        >
        {{Link.label}}
    </inertia-link> 
</template>
<script>
export default {
    props:['Link'],
    computed: {
        Next(){
            return this.Link.label== "Next &raquo;"?'font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer':'';
        },
        Previous(){
            return this.Link.label=="&laquo; Previous"?'font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer':'';
        },
    },
 
}
</script>