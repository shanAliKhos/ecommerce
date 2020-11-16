<template>
    <li>
        <inertia-link :href="href" :class="IsActiveLink"  preserve-scroll >
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
                            ? 'p-3 uppercase text-primary border-t border-grey-darker block'
                            : 'p-3 uppercase text-secondary border-t border-grey-darker block' 
            },
        }
    }
</script> 