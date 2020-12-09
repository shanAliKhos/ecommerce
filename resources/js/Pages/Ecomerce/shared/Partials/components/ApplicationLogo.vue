<template> 
    <div class="transition delay-500 duration-700 ease-in-out transform  bg-contain bg-center bg-no-repeat bg-application-logo " :class="{'w-12 h-12':!atTopOfPage,'w-20 h-20':atTopOfPage}"  ></div>
</template>
<script>
export default { 
props:['atTopOfPage'],

}
</script>