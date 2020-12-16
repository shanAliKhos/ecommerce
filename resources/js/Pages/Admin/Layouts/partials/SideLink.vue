<template>
    <inertia-link 
        :href="href" 
        class="transition  duration-500 ease-in-out transform-gpu py-2 px-2 w-full flex items-center hover:shadow rounded-lg cursor-pointer mb-2 px-2 block border-b-4 font-semibold" 
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
                            ? 'text-red-500 border-red-600 shadow-2xl'
                            : 'text-gray-400  hover:text-blue-400 hover:border-blue-300' 
            }, 


        }
    }
</script> 