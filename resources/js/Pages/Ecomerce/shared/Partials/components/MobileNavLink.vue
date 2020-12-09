<template> 
        <inertia-link :href="href" :class="IsActiveLink">
            <slot></slot>
        </inertia-link>     
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'antialiased outline-none text-center text-red-500 outline-none appearance-none text-sm'
                            : 'antialiased outline-none text-center outline-none appearance-none text-sm' 
            },
        }
    }
</script> 