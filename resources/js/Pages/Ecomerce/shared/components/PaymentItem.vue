<template>
     <img :src="Logo" alt="">
</template>
<script>
export default {
     data() {
          return {
              Logo: APP_URL +"/img/payment-item.png",
          }
     },     
}
</script>
