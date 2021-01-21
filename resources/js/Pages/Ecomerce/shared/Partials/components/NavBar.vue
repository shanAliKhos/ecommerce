<template>
  <div class="container mx-auto relative">
    <div
      class="transition duration-300 ease-in-out transform flex justify-between items-center"
      :class="{ 'md:h-16': !atTopOfPage }"
    >
      <button @click="back" type="button" class="md:hidden">
        <svg
          class="hover:text-gray-800 text-xs w-6 h-6"
          :class="IsAtTop"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <inertia-link
        :href="route('welcome')"
        class="flex items-center flex-inline justify-center"
      >
        <ApplicationLogo :atTopOfPage="atTopOfPage" />
      </inertia-link>
      <div class="hidden md:block flex">
        <div class="flex items-center justify-end flex-inline">
          <a
            href="javascript:;"
            class="border-2 transition-all border-transparent hover:border-orange-500 rounded-full px-4 py-4"
          >
            <span
              :class="IsAtTop"
              class="w-6 h-6 transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat block bg-icon-search hover:bg-icon-search-hover"
            ></span>
          </a>

          <a
            href="javascript:;"
            class="border-2 transition-all border-transparent hover:border-orange-500 rounded-full px-4 py-4 group"
          >
            <span
              :class="IsAtTop"
              class="w-6 h-6 transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat bg-icon-heart block hover:bg-icon-heart-hover"
            ></span>
          </a>

          <nav-cart :IsAtTop="IsAtTop"></nav-cart>

          <inertia-link
            v-if="!$page.user"
            :href="route('login')"
            class="border-2 transition-all border-transparent hover:border-orange-500 rounded-full px-4 py-4 group relative"
          >
            <span class="flex h-3 w-3 absolute right-2">
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-red-500"
              ></span>
            </span>
            <span
              :class="IsAtTop"
              class="w-6 h-6 transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat block bg-icon-user hover:bg-icon-user-hover"
            ></span>
          </inertia-link>

          <inertia-link
            v-if="$page.user ? $page.user.is_admin : false"
            :href="route('admin.dashboard')"
            class="border-2 transition-all border-transparent hover:border-orange-500 rounded-full px-4 py-4 group relative"
          >
            <span class="flex h-3 w-3 absolute right-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-green-400"
              ></span>
            </span>
            <span
              :class="IsAtTop"
              class="w-6 h-6 transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat block bg-icon-user hover:bg-icon-user-hover"
            ></span>
          </inertia-link>

          <inertia-link
            v-if="$page.user ? !$page.user.is_admin : false"
            :href="route('dashboard.index')"
            :class="{
              'border-green-400': $page.currentRouteName == 'dashboard.index',
            }"
            class="border-2 transition-all border-transparent hover:border-orange-500 rounded-full px-4 py-4 group relative"
          >
            <span class="flex h-3 w-3 absolute right-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-green-400"
              ></span>
            </span>
            <span
              :class="IsAtTop"
              class="w-6 h-6 transition duration-500 ease-in-out bg-contain bg-center bg-no-repeat block bg-icon-user hover:bg-icon-user-hover"
            ></span>
          </inertia-link>
        </div>
      </div>
      <div class="block md:hidden flex">
        <div class="relative">
          <dropdown align="right" width="48">
            <template #trigger>
              <svg
                :class="IsAtTop"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </template>

            <template #content>
              <div class="block px-4 py-2 text-xs">Menu</div>
              <div class="border-t border-gray-100"></div>

              <dropdown-link :href="route('blog.index')"> Blog </dropdown-link>

              <dropdown-link :href="route('login')" v-if="!$page.user">
                LogIn
              </dropdown-link>

              <dropdown-link
                :href="route('logout')"
                method="post"
                v-if="$page.user"
              >
                Logout
              </dropdown-link>
              <div class="border-t border-gray-100"></div>
              <div v-if="$page.user" class="block px-4 py-2 text-xs">
                {{ $page.user.name }} is logged In
              </div>
            </template>
          </dropdown>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-around font-semibold hidden md:block">
      <ul
        class="flex items-center justify-center"
        :class="{ 'fixed top-4 w-1/2': !atTopOfPage, 'w-full': atTopOfPage }"
      >
        <cus-nav-link
          :href="route('welcome')"
          :active="$page.currentRouteName == 'welcome'"
          :atTopOfPage="atTopOfPage"
        >
          <template #icon>
            <svg
              class="pointer-events-none h-6 w-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </template>

          <span>Home</span>
        </cus-nav-link>

        <cus-nav-link
          :href="route('shop.index')"
          :active="$page.currentRouteName == 'shop.index'"
          :atTopOfPage="atTopOfPage"
        >
          <template #icon>
            <svg
              class="pointer-events-none h-6 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </template>

          <span>Shop</span>
        </cus-nav-link>

        <cus-nav-link
          :href="route('blog.index')"
          :active="$page.currentRouteName == 'blog.index'"
          :atTopOfPage="atTopOfPage"
        >
          <template #icon>
            <svg
              class="pointer-events-none h-6 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </template>

          <span>Blog</span>
        </cus-nav-link>
      </ul>
    </div>
  </div>
</template>
<script>
import ApplicationLogo from "./ApplicationLogo";
import CusNavLink from "./NavLink";
import NavCart from "./../../../Cart/NavCart";
import DropdownLink from "./../../../../Shared/DropdownLink";
import Dropdown from "./../../../../Shared/Dropdown";

export default {
  props: ["mobileMenu", "categories", "subcategory", "atTopOfPage"],
  components: {
    ApplicationLogo,
    CusNavLink,
    NavCart,
    DropdownLink,
    Dropdown,
  },

  computed: {
    IsAtTop() {
      return this.atTopOfPage
        ? "transition duration-300 ease-in-out transform scale-100 md:scale-100"
        : "transition duration-300 ease-in-out transform scale-75 md:scale-75";
    },
  },
  methods: {
    back() {
      return window.history.back();
    },
  },
};
</script>
 