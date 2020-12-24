<template>
  <div class="mt-2 relative">
      <label v-if="label" class="absolute rounded top-0  text-purple-600  px-1 text-xs font-semibold uppercase" :class="fixedClasses"  :for="id">{{label}}<span class="text-red-500" v-if="labelRequire"> *</span></label>
      <input 
        :id="id"
        ref="input"     
        v-bind="$attrs"
        class="w-full px-4 py-2 text-blue-500 bg-gray-50 rounded-lg shadow-sm hover:bg-white focus:bg-white hover:shadow-2xl focus:shadow-2xl border-2 border-gray-200 focus:outline-none  focus:border-purple-600 " 
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
