<template>
    <li :class="IsActive">
        <inertia-link :href="href" :class="IsActiveLink" preserve-scroll >
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
                            ? 'transition duration-500 active mr-4 '
                            : 'mr-4' 
            },
            IsActiveLink() {
                return this.active
                            ? 'transition duration-500 ease-in-out p-1 shadow-md border border-green-500 btn'
                            : 'transition duration-500 ease-in-out p-1 hover:shadow-md  btn' 
            },
        }
    }
</script> 