<template>
    <inertia-link 
        :href="href" 
        class="transition duration-500 ease-in-out transform py-2 px-2 w-full flex items-center hover:shadow rounded-lg cursor-pointer mb-2 px-2 block border-b-4" 
        :class="IsActiveLink"  

    preserve-scroll >
        <slot></slot>
    </inertia-link>     

  
</template>

<script>
    export default {
        props: ['href', 'active','atTopOfPage'], 


        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'font-semibold text-red-400 border-red-500 shadow-2xl'
                            : 'font-semibold text-gray-400 border-gray-300 hover:text-blue-400 hover:border-blue-300' 
            }, 


        }
    }
</script> 