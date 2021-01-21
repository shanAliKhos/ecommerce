<template>
  <acounts-layout>
    <div class="lg:w-3/4 mt-12 lg:mt-0">
      <div class="bg-grey-light py-8 px-5 md:px-8">
        <h1
          class="font-hkbold text-secondary text-2xl pb-6 text-center sm:text-left"
        >
          My Wishlist
        </h1>
        <div class="hidden sm:block">
          <div class="flex justify-between pb-3">
            <div class="w-1/3 md:w-2/5 pl-4">
              <p class="font-hkbold text-secondary text-sm uppercase">
                Product Name
              </p>
            </div>
            <div class="w-1/4 xl:w-1/5 text-center">
              <p class="font-hkbold text-secondary text-sm uppercase">
                Quantity
              </p>
            </div>
            <div class="w-1/6 md:w-1/5 text-center mr-3">
              <p class="font-hkbold text-secondary text-sm uppercase">Price</p>
            </div>
            <div class="w-3/10 md:w-1/5 text-center">
              <p
                class="font-hkbold text-secondary text-sm uppercase pr-8 md:pr-16 xl:pr-8"
              >
                Action
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-white shadow px-4 py-5 sm:py-4 rounded mb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div
            class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden"
              >Product Name</span
            >
            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
              <div class="h-20 rounded flex items-center justify-center">
                <div
                  class="w-12 h-16 mx-auto bg-center bg-no-repeat bg-cover"
                  style="
                    background-image: url(/assets/img/unlicensed/shoes-3.png);
                  "
                ></div>
              </div>
            </div>
            <span class="font-hkregular text-secondary text-base mt-2"
              >Classic Beige</span
            >
          </div>
          <div
            class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Quantity</span
            >
            <span class="font-hkregular text-secondary">11</span>
          </div>
          <div
            class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Price</span
            >
            <span class="font-hkregular text-secondary">$1045</span>
          </div>
          <a href="/" class="btn btn-primary whitespace-no-wrap"> Order Now </a>
        </div>

        <div
          class="bg-white shadow px-4 py-5 sm:py-4 rounded mb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div
            class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden"
              >Product Name</span
            >
            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
              <div class="h-20 rounded flex items-center justify-center">
                <div
                  class="w-12 h-16 mx-auto bg-center bg-no-repeat bg-cover"
                  style="
                    background-image: url(/assets/img/unlicensed/backpack-3.png);
                  "
                ></div>
              </div>
            </div>
            <span class="font-hkregular text-secondary text-base mt-2"
              >Party Blake</span
            >
          </div>
          <div
            class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Quantity</span
            >
            <span class="font-hkregular text-secondary">10</span>
          </div>
          <div
            class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Price</span
            >
            <span class="font-hkregular text-secondary">$1045</span>
          </div>
          <a href="/" class="btn btn-primary whitespace-no-wrap"> Order Now </a>
        </div>

        <div
          class="bg-white shadow px-4 py-5 sm:py-4 rounded mb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div
            class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden"
              >Product Name</span
            >
            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
              <div class="h-20 rounded flex items-center justify-center">
                <div
                  class="w-12 h-16 mx-auto bg-center bg-no-repeat bg-cover"
                  style="
                    background-image: url(/assets/img/unlicensed/shoes-4.png);
                  "
                ></div>
              </div>
            </div>
            <span class="font-hkregular text-secondary text-base mt-2"
              >Siberian Boots</span
            >
          </div>
          <div
            class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Quantity</span
            >
            <span class="font-hkregular text-secondary">7</span>
          </div>
          <div
            class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Price</span
            >
            <span class="font-hkregular text-secondary">$1045</span>
          </div>
          <a href="/" class="btn btn-primary whitespace-no-wrap"> Order Now </a>
        </div>

        <div
          class="bg-white shadow px-4 py-5 sm:py-4 rounded mb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div
            class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden"
              >Product Name</span
            >
            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
              <div class="h-20 rounded flex items-center justify-center">
                <div
                  class="w-12 h-16 mx-auto bg-center bg-no-repeat bg-cover"
                  style="
                    background-image: url(/assets/img/unlicensed/sunglass-1.png);
                  "
                ></div>
              </div>
            </div>
            <span class="font-hkregular text-secondary text-base mt-2"
              >Cat Eye</span
            >
          </div>
          <div
            class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Quantity</span
            >
            <span class="font-hkregular text-secondary">12</span>
          </div>
          <div
            class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Price</span
            >
            <span class="font-hkregular text-secondary">$1045</span>
          </div>
          <a href="/" class="btn btn-primary whitespace-no-wrap"> Order Now </a>
        </div>

        <div
          class="bg-white shadow px-4 py-5 sm:py-4 rounded mb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div
            class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden"
              >Product Name</span
            >
            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
              <div class="h-20 rounded flex items-center justify-center">
                <div
                  class="w-12 h-16 mx-auto bg-center bg-no-repeat bg-cover"
                  style="
                    background-image: url(/assets/img/unlicensed/watch-4.png);
                  "
                ></div>
              </div>
            </div>
            <span class="font-hkregular text-secondary text-base mt-2"
              >Princess</span
            >
          </div>
          <div
            class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Quantity</span
            >
            <span class="font-hkregular text-secondary">3</span>
          </div>
          <div
            class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Price</span
            >
            <span class="font-hkregular text-secondary">$1045</span>
          </div>
          <a href="/" class="btn btn-primary whitespace-no-wrap"> Order Now </a>
        </div>

        <div
          class="bg-white shadow px-4 py-5 sm:py-4 rounded mb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <div
            class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden"
              >Product Name</span
            >
            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
              <div class="h-20 rounded flex items-center justify-center">
                <div
                  class="w-12 h-16 mx-auto bg-center bg-no-repeat bg-cover"
                  style="
                    background-image: url(/assets/img/unlicensed/backpack-1.png);
                  "
                ></div>
              </div>
            </div>
            <span class="font-hkregular text-secondary text-base mt-2"
              >Black Blake</span
            >
          </div>
          <div
            class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Quantity</span
            >
            <span class="font-hkregular text-secondary">4</span>
          </div>
          <div
            class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0"
          >
            <span
              class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden"
              >Price</span
            >
            <span class="font-hkregular text-secondary">$1045</span>
          </div>
          <a href="/" class="btn btn-primary whitespace-no-wrap"> Order Now </a>
        </div>

        <div class="pt-6 flex justify-center md:justify-end">
          <span
            class="font-hksemibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer"
            >Previous</span
          >
          <span
            class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer"
            >1</span
          >
          <span
            class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-centerjustify-center mr-3 cursor-pointer"
            >2</span
          >
          <span
            class="font-hksemibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center cursor-pointer"
            >3</span
          >
          <span
            class="font-hksemibold text-grey-darkest transition-colors hover:text-black pl-5 cursor-pointer"
            >Next</span
          >
        </div>
      </div>
    </div>
  </acounts-layout>
</template>

<script>
import AppLayout from "./../shared/AppLayout";
import AcountsLayout from "./../shared/AcountsLayout";
export default {
  metaInfo: { title: "WishList Items" },
  layout: AppLayout,
  components: {
    AcountsLayout,
  },
  mounted() {
    const self = this;
    self.$root.$emit("sidebar-close");
  },
};
</script>
