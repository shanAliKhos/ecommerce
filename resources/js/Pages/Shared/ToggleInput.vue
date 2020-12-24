<template> 
    <label :for="id" class="flex items-center cursor-pointer">
        <div class="relative">
            <input 
              ref="checkbox"
              :id="id"
              type="checkbox" 
              class="hidden"  
              :checked="value"  

            />
            <div class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner" ></div>
            <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
        </div>
        <div class="px-2">{{label}}</div>
    </label>  
</template>
  
<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `checkbox-${this._uid}`
      },
    },  
    label: String,
    error: String,
    value: null, 
  },

  methods: {
      chab() {
          this.$refs.checkbox.focus()
      }
  }  
}
</script>
<style scoped>
  .toggle-path {
      transition: background 0.3s ease-in-out;
  }
  .toggle-circle {
      top: 0.2rem;
      left: 0.25rem;
      transition: all 0.3s ease-in-out;
  }
  input:checked ~ .toggle-circle {
      transform: translateX(100%);
  }
  input:checked ~ .toggle-path {
      background-color:#81E6D9;
  } 
</style>