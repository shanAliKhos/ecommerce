<template>
  <div class="blog-sidebar">
    <form class="flex items-center w-full mb-16 relative">
      <label for="search_form" class="block relative h-0 w-0 overflow-hidden"
        >Search</label
      >
      <input
        type="text"
        id="search_form"
        placeholder="Search the Blog"
        class="form-input transition-all pr-10 text-grey-darkest text-base"
      />
      <button
        class="focus:outline-none absolute right-0 top-0 mt-4 mr-3"
        aria-label="Search button"
      >
        <i class="bx bx-search text-2xl"></i>
      </button>
    </form>
    <!-- <div class="mb-16 text-center sm:text-left">
            <p class="font-regular text-gray-400 text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark">Recent Post</p>

            <a href="/post" class="block mt-8 border-b border-grey-dark pb-5 group">
                <p class="font-hkregular text-gray-400 text-base transition-colors group-hover:text-primary"> How to make the most of the rest of the year</p>
                <p class="font-hkregular group-hover:font-hkbold text-grey-darkest transition-all group-hover:text-primary text-base pt-4"> 02 May 2019</p>
            </a>

        </div> -->
    <div class="mb-16">
      <p
        class="font-regular text-gray-400 text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark text-center sm:text-left"
      >
        Categories
      </p>

      <inertia-link
        :href="route('blog.by-category', Category.slug)"
        class="flex justify-between group pb-4 border-b border-grey-dark mt-8"
        v-for="(Category, CategoryIndex) in Categories"
        :key="CategoryIndex"
      >
        <p
          class="font-hkregular transition-colors group-hover:font-hkbold text-gray-400 group-hover:text-primary text-base capitalize"
        >
          {{ Category.name }}
        </p>
        <!-- <span class="font-hkregular transition-colors group-hover:font-hkbold text-gray-400 group-hover:text-primary text-base">5</span> -->
      </inertia-link>
    </div>
    <div class="text-center sm:text-left">
      <p
        class="font-regular text-gray-400 text-xl md:text-2xl lg:text-3xl pb-2 border-b border-grey-dark"
      >
        Follow Us
      </p>
      <div class="flex justify-center sm:justify-start pt-8">
        <a
          href="https://www.google.com"
          class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"
          ><i class="bx bxl-facebook text-white"></i
        ></a>

        <a
          href="https://www.google.com"
          class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"
          ><i class="bx bxl-twitter text-white"></i
        ></a>

        <a
          href="https://www.google.com"
          class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"
          ><i class="bx bxl-instagram text-white"></i
        ></a>

        <a
          href="https://www.google.com"
          class="bg-secondary-lighter transition-colors hover:bg-primary px-3 py-3 rounded-full mr-2 flex items-center justify-center"
          ><i class="bx bxl-pinterest text-white"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    Categories() {
      return this.$page.Categories;
    },
  },
};
</script>