<template> 
    <img :src="$page.SiteOptions.Logo" class="transition duration-700 ease-in-out transform  bg-contain bg-center bg-no-repeat  transition duration-300 ease-in-out transform w-20 h-20" :class="IsAtTop"  /> 
</template>
<script>
export default { 
props:['atTopOfPage'],

    computed:{
            IsAtTop() {
                return this.atTopOfPage
                            ? 'scale-100  sm:scale-100 md:scale-100 '
                            : 'scale-50  sm:scale-50  md:scale-50' 
            },
 
    }, 
}
</script>