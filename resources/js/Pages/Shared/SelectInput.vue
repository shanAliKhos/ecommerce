<template>
  <div class="mt-2 relative">
      <label v-if="label" class="absolute top-0 bg-blue-200 px-1 py-0 text-xs font-bold uppercase" :class="fixedClasses"  :for="id">{{label}}<span class="text-red-500" v-if="labelRequire"> *</span></label> 
      <div class="relative">
          <select  
          :id="id" ref="input" 
          v-model="selected" 
          v-bind="$attrs"
          class="focus:bg-white block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-4 px-4 pr-8 rounded leading-tight shadow focus:outline-none focus:shadow-outline">
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
