<template>
<li class="mr-10 hidden lg:block" :class="{'pb-2':!IsAtTop}">
    <inertia-link :href="href" class="transition duration-300 ease-in-out transform  px-2" :class="classes">
        <slot></slot>
    </inertia-link>     
</li> 
</template>

<script>
    export default {
        props: ['href', 'active','atTopOfPage'],  
        computed: { 
            classes(){
                let is_active = this.active? 'block font-semibold text-orange-500 border-b-4 border-orange-500 px-2':'hover:-translate-x-1 block font-semibold  hover:text-orange-300  border-b-4 hover:border-orange-300 px-2';
                let is_atTop = this.atTopOfPage ? 'scale-100 md:scale-100': 'fixed top-0 scale-75 md:scale-75'; 
                return is_active.concat(is_atTop);
            }, 
             
            IsAtTop(){
                this.atTopOfPage?true:false;
            }

        }
    }
</script> 