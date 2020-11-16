<template>
    <input 
        :id="id" 
        ref="input" 
        v-bind="$attrs"  
        :class="{'is-invalid':error}"
        :type="type" 
        :value="value" 
        @input="$emit('input', $event.target.value)"      
      />
    
    <!-- <div v-if="error" class="invalid-feedback active">
        <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ error }}</span> 
    </div>    
   -->
 
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
    value: String,
    label: String,
    error: String,
    className: String,
    labelRequire:{
        type:Boolean,
        default:false,
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
