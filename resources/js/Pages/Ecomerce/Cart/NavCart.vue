<template>
  <inertia-link
    :href="route('cart.index')"
    class="border-2 transition-all border-transparent hover:border-orange-500 rounded-full px-4 py-4 group"
  >
    <span
      class="transition duration-500 ease-in-out bg-icon-cart bg-contain bg-center bg-no-repeat block hover:bg-icon-cart-hover w-6 h-6"
      :class="IsAtTop"
    ></span>
    <span
      class="text-white border border-white shadow absolute py-auto px-2 my-0 mx-1 rounded-full"
      :class="{
        'bg-green-400': CountCartItems > 0,
        hidden: CountCartItems === 0,
      }"
      >{{ CountCartItems }}</span
    >
  </inertia-link>
</template>
<script>
export default {
  props: ["IsAtTop"],
  data() {
    return {
      CartTotalPricess: 0,
    };
  },

  methods: {
    store(Item) {
      const self = this;
      self.$inertia.post(route("cart.store"), Item, {
        preserveScroll: true,
        onSuccess: () => {
          if (Object.keys(this.$page.errors).length === 0) {
            this.$root.$emit("item-is-added-to-cart");
          }
        },
      });
    },
    update(Items) {
      self = this;
      this.$inertia.put(route("cart.update", "update"), Items, {
        preserveState: true,
        preserveScroll: true,
      });
    },
    destory(Index) {
      const self = this;
      self.$swal
        .fire({
          title: "Are you sure?",
          text: "You will be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            self.$inertia.delete(route("cart.destroy", Index), {
              preserveState: true,
              preserveScroll: true,
            });
          }
        });
    },
  },

  mounted() {
    self = this;

    this.$root.$on("Add-To-Cart", (Item) => {
      this.store(Item);
    });

    this.$root.$on("destory-this-item", (Item) => {
      this.destory(Item);
    });

    this.$root.$on("update-cart", (Items) => {
      this.update(Items);
    });
  },
  computed: {
    CountCartItems() {
      let Qty = this.$page.Cart.Items
        ? this.$page.Cart.Items.reduce(
            (TotalItems, Item) => TotalItems + Item.quantity,
            0
          )
        : 0;
      return Qty;
    },
    CartTotalPrice() {
      let sum = this.$page.Cart.Items
        ? this.$page.Cart.Items.reduce(
            (TotalPrice, Item) => TotalPrice + Item.quantity * Item.price,
            0
          )
        : 0;
      return sum;
    },
  },
};
</script>
 

     