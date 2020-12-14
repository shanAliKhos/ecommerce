<template>
    <li class="mr-10 hidden lg:block">
        <inertia-link :href="href" class="transition duration-1000 ease-in transform " :class="IsActiveLink,IsTop">
            <slot></slot>
        </inertia-link>     
    </li> 
</template>

<script>
    export default {
        props: ['href', 'active','atTopOfPage'], 


        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'block font-semibold text-orange-500 border-b-4  border-orange-500 px-2'
                            : 'hover:-translate-x-1 block font-semibold  text-gray-300 hover:text-orange-300  border-b-4   hover:border-orange-300 px-2' 
            },
            IsTop() {
                return this.atTopOfPage
                            ? 'text-lg'
                            : 'text-sm' 
            },


        }
    }
</script> 