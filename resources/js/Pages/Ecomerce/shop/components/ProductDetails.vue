<template>
  <tabs>
    <tab name="Description" :selected="true">
      <div
        class="font-hkregular text-secondary text-base"
        v-html="ProductDescription"
      ></div>
    </tab>

    <tab name="Additional Information">
      <div class="w-5/6 mx-auto">
        <div class="font-hkregular text-secondary text-base">
          On the main compartment has multiple pockets available for your tools,
          chargers, make up, keys, etc. <br /><br />
          Size::13.4”Lx 6.5”W x 15.4”H. <br />
          Weight: 1.57pounds. <br />
          Color: light brown.
        </div>
      </div>
    </tab>

    <tab name="Reviews">
      <div
        :class="{ active: activeTab === 'reviews' }"
        class="tab-pane bg-grey-light py-10 md:py-16 transition-opacity"
        role="tabpanel"
      >
        <div
          class="w-5/6 mx-auto border-b border-grey-darker pb-8 text-center sm:text-left"
        >
          <div
            class="flex justify-center sm:justify-start items-center pt-3 xl:pt-5"
          >
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
          </div>
          <p class="font-hkbold text-secondary text-lg pt-3">
            Perfect for everyday use
          </p>
          <p class="font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3">
            I loooveeeee this product!!! It feels so soft and smells like real
            leather!!! I ordered this fancy backpack looking for something that
            can be used at work and, at the same time, after work; and I found
            it. Honestly.. Amazing!!
          </p>
          <div class="flex justify-center sm:justify-start items-center pt-3">
            <p class="font-hkregular text-grey-darkest text-sm">
              <span>By</span> Melanie Ashwood
            </p>
            <span class="font-hkregular text-grey-darkest text-sm block px-4"
              >.</span
            >
            <p class="font-hkregular text-grey-darkest text-sm">6 days ago</p>
          </div>
        </div>

        <div
          class="w-5/6 mx-auto border-b border-transparent pb-8 text-center sm:text-left"
        >
          <div
            class="flex justify-center sm:justify-start items-center pt-3 xl:pt-5"
          >
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
            <i class="bx bxs-star text-primary"></i>
          </div>
          <p class="font-hkbold text-secondary text-lg pt-3">
            Gift for my girlfriend
          </p>
          <p class="font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3">
            I paid this thing thinking about my girlfriend’s birthday present,
            however I had my doubts cuz’ she is kind of picky. But Seriously,
            from now on, Elyssi is my best friend! She loved it!! She’s crazy
            about it! DISCLAIMER: It is smaller than it appears.
          </p>
          <div class="flex justify-center sm:justify-start items-center pt-3">
            <p class="font-hkregular text-grey-darkest text-sm">
              <span>By</span> Jake Houston
            </p>
            <span class="font-hkregular text-grey-darkest text-sm block px-4"
              >.</span
            >
            <p class="font-hkregular text-grey-darkest text-sm">4 days ago</p>
          </div>
        </div>

        <form class="w-5/6 mx-auto">
          <div class="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
            <div class="sm:w-1/2 px-5">
              <label
                class="font-hkregular text-secondary text-sm block mb-2"
                for="name"
                >Name</label
              >
              <input
                type="text"
                placeholder="Enter your Name"
                class="form-input"
                id="name"
              />
            </div>
            <div class="sm:w-1/2 px-5 pt-10 sm:pt-0">
              <label
                class="font-hkregular text-secondary text-sm block mb-2"
                for="email"
                >Email address</label
              >
              <input
                type="email"
                placeholder="Enter your email"
                class="form-input"
                id="email"
              />
            </div>
          </div>
          <div class="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
            <div class="sm:w-1/2 px-5">
              <label
                class="font-hkregular text-secondary text-sm block mb-2"
                for="review_title"
                >Review Title</label
              >
              <input
                type="text"
                placeholder="Enter your review title"
                class="form-input"
                id="review_title"
              />
            </div>
            <div class="sm:w-1/2 px-5 pt-10 sm:pt-0">
              <label class="font-hkregular text-secondary text-sm block mb-2"
                >Rating</label
              >
              <div class="flex pt-4">
                <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                <i class="bx bxs-star text-grey-darker text-xl pr-1"></i>
                <i class="bx bxs-star text-grey-darker text-xl"></i>
              </div>
            </div>
          </div>
          <div class="sm:w-12/25 pt-10">
            <label
              for="message"
              class="font-hkregular text-secondary text-sm block mb-2"
              >ReviewMessage</label
            >
            <textarea
              placeholder="Give your review tittle"
              class="form-textarea"
              id="message"
            ></textarea>
          </div>
        </form>
        <div class="w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left">
          <a href="/" class="btn btn-primary">Submit Review</a>
        </div>
      </div>
    </tab>
  </tabs>
</template>
<script>
 
import Tab from '@/Pages/Shared/Tab'

export default {
  components: {
    Tabs:() => import('@/Pages/Shared/Tabs'),
    Tab,
  },
  data() {
    return {
      activeTab: "description",
    };
  },
  computed: {
    ProductDescription() {
      return this.$page.Product.description;
    },
  },
};
</script>