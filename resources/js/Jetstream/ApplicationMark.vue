<template>
      <inertia-link href="/"><img :src="Logo" alt=""></inertia-link>
</template>
<script>
export default {
     data() {
          return {
              Logo:this.$page.SiteOptions.Logo?'/'+this.$page.SiteOptions.Logo.replace("public", "storage"):'',
          }
     },     
}
</script>
