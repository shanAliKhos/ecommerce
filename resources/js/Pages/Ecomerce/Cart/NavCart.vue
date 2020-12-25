<template>
    <inertia-link :href="route('cart.index')" class="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 ml-8 group">

        <span class="transition duration-500 ease-in-out  bg-icon-cart bg-contain bg-center bg-no-repeat  block hover:bg-icon-cart-hover w-8 h-8" :class="IsAtTop"></span>
        <span class="text-white border-2 border-white shadow  absolute py-auto  px-2 my-0 mx-1 rounded-full" :class="{'bg-v-green':CountCartItems>0,'bg-red-400':CountCartItems === 0 }" >{{CountCartItems}}</span>

    </inertia-link>
</template>
<script>
export default {
    props:['IsAtTop'],
    data() {
        return {
            CartTotalPricess:0,    
        }
    },
 
    methods: { 
        store(Item) {
            const self = this;
            self.$inertia.post(route('cart.store'), Item,{ 
                
                onSuccess: () => {
                    if (Object.keys(this.$page.errors).length === 0) {
                        this.$root.$emit('item-is-added-to-cart');
                    }
                },                           
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


     