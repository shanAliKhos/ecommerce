<template>
    <inertia-link 
        :href="href" 
        class="py-2 px-2 flex rounded-lg cursor-pointer  block font-semibold transition duration-500 ease-in-out transform-gpu  items-center hover:shadow" 
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
                            ? 'text-red-500 border-red-600 shadow-2xl border-b-4 md:-translate-x-1 md:translate-y-1 animate-wiggle mb-3 mt-3'
                            : 'text-gray-400  hover:text-blue-400 hover:border-blue-300 border mb-2' 
            }, 


        }
    }
</script> 