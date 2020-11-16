<template>
    <li class="mr-10 hidden lg:block">
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
                            ? 'block text-lg font-hkregular transition-all  text-primary  border-b-2  border-primary px-2'
                            : 'block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary  border-b-2 border-white hover:border-primary px-2  ' 
            },
        }
    }
</script> 