<template>
    <li class="mr-10 hidden lg:block">
        <inertia-link :href="href" class="transition duration-500 ease-in-out transform motion-reduce:transition-none motion-reduce:transform-none" :class="IsActiveLink"  preserve-scroll >
            <slot></slot>
        </inertia-link>    

    </li>
   
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'block text-lg font-semibold text-orange-500 border-b-4  border-orange-500 px-2'
                            : 'hover:-translate-y-2 block text-lg font-semibold  text-gray-300 hover:text-orange-300  border-b-3 border-white hover:border-orange-300 px-2' 
            },
        }
    }
</script> 