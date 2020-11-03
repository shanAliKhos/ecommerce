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
                            ? 'transition duration-500 ease-in-out active  shadow   mr-4 border border-green-500 btn active-fonts'
                            : 'transition duration-500 ease-in-out hover:shadow p-1 mr-4 mr-4  border-green-500 btn' 
            }
        }
    }
</script>
<style scoped>
.active-fonts{
    font-size:15px !important;
}
    
</style>