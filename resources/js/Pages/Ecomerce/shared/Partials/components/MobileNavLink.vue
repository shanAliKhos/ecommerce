<template> 
        <inertia-link :href="href" :class="IsActiveLink"  preserve-scroll >
            <slot></slot>
        </inertia-link>     
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'font-semibold text-red-500'
                            : '' 
            },
        }
    }
</script> 