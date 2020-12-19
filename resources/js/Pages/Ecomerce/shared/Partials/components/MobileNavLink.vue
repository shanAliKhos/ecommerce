<template> 
        <inertia-link :href="href" :class="IsActiveLink" class="focus:outline-none">
            <slot></slot>
        </inertia-link>     
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
       
            IsActiveLink() {
                return this.active
                            ? 'antialiased outline-none text-center text-orange-500 outline-none appearance-none text-xs cursor-pointer'
                            : 'antialiased outline-none text-center outline-none appearance-none text-xs cursor-pointer' 
            },
        }
    }
</script> 