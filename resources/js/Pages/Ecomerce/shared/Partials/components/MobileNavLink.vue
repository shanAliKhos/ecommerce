<template> 
        <inertia-link :href="href" :class="IsActiveLink" class="antialiased text-center focus:outline-none md:cursor-pointer text-xs">
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