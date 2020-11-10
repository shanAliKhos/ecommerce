<template>
    <li :class="IsActive">
        <inertia-link :href="href"  preserve-scroll>
            <slot></slot>
        </inertia-link>
    </li>
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
            IsActive() {
                return this.active
                            ? 'transition duration-500 ease-in-out active  shadow-md   mr-4 border border-green-500 btn'
                            : 'transition duration-500 ease-in-out hover:shadow-md p-1 mr-4 mr-4  border-green-500 btn' 
            }
        }
    }
</script> 