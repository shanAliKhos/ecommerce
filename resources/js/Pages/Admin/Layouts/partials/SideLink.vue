<template>
    <inertia-link 
        :href="href" 
        class="admin_sidebar_link" 
        :class="IsActiveLink"
    >
        <slot></slot>
    </inertia-link>     

  
</template>

<script>
    export default {
        props: ['href', 'active','atTopOfPage'], 


        computed: { 
       
            IsActiveLink() {
                return this.active
                            ? 'active_sidebar_link'
                            : 'de_active_sidebar_link text-gray-400  hover:text-blue-400 hover:border-blue-300' 
            }, 


        }
    }
</script> 