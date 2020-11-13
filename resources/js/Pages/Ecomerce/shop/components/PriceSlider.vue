<template>
 <div class="sidebar__item p-3">
    <h4>Price</h4>
    <div class="row"> 
        <text-input 
        v-model="minamount" :error="$page.props.errors.minamount" 
        class="form-group col-lg-6" label="MinPrice" placeholder="MinPrice" />
    
        <text-input 
        v-model="maxamount" :error="$page.props.errors.maxamount" 
        class="form-group col-lg-6" label="MaxPrice" placeholder="MaxPrice" />
  
    </div> 
    <inertia-link 
      as="button" 
      type="button"
      :href="$route('shop',{ MinPrice:minamount, MaxPrice:maxamount })"
      preserve-scroll
      preserve-state
      class="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-green-600  py-1 px-2 border border-green-500 hover:border-transparent rounded focus:text-green-600 float-right">
      Apply
    </inertia-link>
    
    <inertia-link 
      as="button" 
      type="button"
      :href="$route('shop')"
      preserve-scroll
      class="bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-red-700 py-1 px-2 border border-green-500 hover:border-transparent rounded float-right">
      Reset
    </inertia-link>
    
</div>
</template>>
<script>
import TextInput from './../../../Shared/TextInput'   

export default {
    data() {
        return {
            minamount:null,
            maxamount:null,
        }
    }, 
    components:{
        TextInput,
    },
 
}
</script>