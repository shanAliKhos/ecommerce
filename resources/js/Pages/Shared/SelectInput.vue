<template>
  <div class="mt-2 relative">
      <label v-if="label" class="absolute rounded-lg top-0  text-purple-700 px-1 text-xs font-semibold uppercase z-20" :class="fixedClasses"  :for="id">{{label}}<span class="text-red-500" v-if="labelRequire"> *</span></label> 
      <div class="relative">
          <select  
          :id="id" ref="input" 
          v-model="selected" 
          v-bind="$attrs"
          class="w-full px-4 py-1 text-gray-700 bg-white rounded appearance-none shadow-sm hover:shadow-2xl focus:shadow-2xl border-2 border-transparent focus:outline-none  focus:border-purple-600">
            <slot />
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" :class="{'mt-5':label}">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
      </div>
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
        return `select-input-${this._uid}`
      },
    },
    value: [String, Number, Boolean],
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
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    selected(selected) {
      this.$emit('input', selected)
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
  },
}
</script>
