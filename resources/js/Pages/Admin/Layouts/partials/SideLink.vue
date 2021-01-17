<template>
    <inertia-link 
        :href="href"  
        class="py-2 px-2 flex rounded-xl lg:cursor-pointer block font-semibold transition duration-500 ease-in-out transform  items-center hover:shadow" 
        :class="IsActiveLink"
    >
        <slot></slot>
    </inertia-link>     

  
</template>

<script>
    export default {
        props: ['href', 'active','atTopOfPage'], 


        computed: { 
       
            IsActiveLink() {
                return this.active
                            ? 'text-red-500 border-red-600 shadow-2xl border-b-4  scale-110 animate-pulse mb-3 mt-3 bg-white'
                            : 'hover:text-red-500 hover:bg-white hover:shadow-2xl hover:border-red-500 border-b-4 mb-2 hover:scale-110 hover:animate-pulse ' 
            }, 


        }
    }
</script> 