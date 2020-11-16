<template>
    <inertia-link preserve-scroll :href="route('cart.index')"
        class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 ml-8 group">
        <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg"
            class="w-8 h-8 block group-hover:hidden" alt="icon cart" />
        <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg"
            class="w-8 h-8 hidden group-hover:block" alt="icon cart hover" />
            <span class="text-white border-2 border-white shadow  absolute py-auto  px-2 my-0 mx-1 rounded-full"
            :class="{'bg-v-green':CountCartItems>0,'bg-red-400':CountCartItems === 0 }"
            >{{CountCartItems}}</span>
    </inertia-link>
    <!-- <div class="header__cart">
        <ul>
            <li><a href="#"><i class="fa fa-heart"></i> <span>0</span></a></li>
            <li><inertia-link :href="$route('cart.show','show')"><i class="fa fa-shopping-bag "></i> <span syle="font-size:20px;" >{{CountCartItems}}</span></inertia-link></li>
        </ul>
        <div class="header__cart__price"><span > item: ${{ CartTotalPrice }}</span></div>
    </div> -->
</template>
<script>
export default {
    data() {
        return {
            CartTotalPricess:0,    
        }
    },
 
    methods: { 
        store(Item) {
            const self = this;
            self.$inertia.post(route('cart.store'), Item,{
                preserveState: true,
                preserveScroll: true,               
            });
            
        },        
        update(Items) {
            self = this;
            this.$inertia.put(route('cart.update', 'update'), Items, {
                preserveState: true,
                preserveScroll: true,                
            });
        },
        destory(Index) { 
            const self= this;
            self.$swal.fire({
                title: 'Are you sure?',
                text: "You will be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    self.$inertia.delete(route('cart.destroy',Index),{
                        preserveState: true,
                        preserveScroll: true,                
                    });                    
                }
            })                 
       
        },
   
    },
 
    mounted() { 
        self = this;
         
        this.$root.$on('Add-To-Cart',Item =>  {
            this.store(Item);
        }); 

        this.$root.$on('destory-this-item',Item =>  { 
            this.destory(Item);
        }); 
 
        this.$root.$on('update-cart',(Items) =>  { 
            this.update(Items);
        }); 
   
    },
    computed: {
        CountCartItems(){
            let Qty = this.$page.Cart.Items?this.$page.Cart.Items.reduce((TotalItems, Item) => TotalItems + Item.Qty , 0):0;
            return Qty;
        },    
        CartTotalPrice(){
            let sum = this.$page.Cart.Items?this.$page.Cart.Items.reduce((TotalPrice, Item) => TotalPrice + (Item.Qty * Item.price) , 0):0; 
            return sum; 
        }    
    },
 
}
</script>
<!-- <style scoped>
.CartCountItems{
    position: absolute;
    right: 25px;
    top: 40px;    
}
    
</style> -->


     