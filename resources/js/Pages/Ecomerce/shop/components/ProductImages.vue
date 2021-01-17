<template>
  <div class="flex flex-col-reverse sm:flex-row-reverse lg:flex-row justify-around" >
    <div
      class="sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 flex flex-row sm:flex-col justify-between"
    >
      <div
        class="w-20 h-20 bg-center bg-no-repeat bg-cover cursor-pointer border-2 border-gray-300 bg-gray-50 mt-2 md:mt-0"
        @click="selectedImage = $event.target.style.backgroundImage"
        :style="`background-image:url('${this.$page.Product.mainphoto_url}')`"
      ></div>

      <div
        v-for="n in 3"
        :key="n + 1"
        class="w-20 h-20 bg-center bg-no-repeat bg-cover cursor-pointer border-2 border-gray-300 bg-gray-50 mt-2"
        @click="selectedImage = $event.target.style.backgroundImage"
        :style="`background-image:url('./../../img/product/product (${Math.floor(
          Math.random() * 40
        )}).jpg')`"
      ></div>
    </div>
    <div
      class="w-full relative bg-gray-100 border border-grey md:mr-5 flex items-center justify-center"
    >
      <div
        class="flex items-center justify-between w-96 h-96 bg-center bg-no-repeat bg-cover"
        :style="'background-image:' + selectedImage + ''"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedImage: `url('${this.$page.Product.mainphoto_url}')`,
    };
  },
};
</script>