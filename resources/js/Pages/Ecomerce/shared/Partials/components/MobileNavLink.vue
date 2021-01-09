<template> 
        <inertia-link :href="href" :class="IsActiveLink" class="flex flex-col justify-center item-center antialiased text-center focus:outline-none md:cursor-pointer text-xs appearance-none ">
            <slot></slot>
        </inertia-link>     
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'text-orange-500'
                            : '' 
            },
        }
    }
</script> 