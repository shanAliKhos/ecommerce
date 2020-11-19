<template>
  <div class="mt-2 relative">
      <label v-if="label" class="absolute top-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" :class="fixedClasses"  :for="id">{{label}}<span class="text-red-500" v-if="labelRequire"> *</span></label>
      <input 
        :id="id"
        ref="input"     
        v-bind="$attrs"
        class="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded appearance-none shadow focus:outline-none focus:shadow-outline focus:bg-white" 
        :type="type" 
        :value="value" 
        @input="$emit('input', $event.target.value)"
        :aria-label="label">
      <p class="absolute bottom-0 text-red-500 text-xs italic" :class="fixedClasses" v-if="error">{{error}}</p>
  </div>  
 
</template>
  
<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`
      },
    },
    type: {
      type: String,
      default: 'text',
    },
    value: null,
    label: String,
    error: String,
    labelRequire:{
        type:Boolean,
        default:false,
    },
    fixedClasses:{
        type:String,
        default:'right-0',
    },    
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
  },
}
</script>
