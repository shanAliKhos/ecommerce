<template>
    <div class="header__cart">
        <ul>
            <li><a href="#"><i class="fa fa-heart"></i> <span>0</span></a></li>
            <li><inertia-link :href="$route('cart.show','show')"><i class="fa fa-shopping-bag "></i> <span syle="font-size:20px;" >{{CountCartItems}}</span></inertia-link></li>
        </ul>
        <div class="header__cart__price"><span > item: ${{ CartTotalPrice }}</span></div>
    </div>
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
            this.$inertia.put   (route('cart.update', 'update'), Items, {
                preserveState: true,
                preserveScroll: true,                
            });
        },
        destory(Index) {
            self = this; 
            self.$inertia.delete(route('cart.destroy',Index),{
                preserveState: true,
                preserveScroll: true,                
            });       
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


     