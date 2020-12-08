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
                            ? 'antialiased outline-none text-center text-red-500 focus:outline-none appearance-none'
                            : 'antialiased outline-none text-center focus:outline-none appearance-none' 
            },
        }
    }
</script> 