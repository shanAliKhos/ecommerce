<template>
  <div>
    <label v-if="label" class="control-label" :for="id">
     {{ label }}: <span class="m-l-5 text-danger" v-if="labelRequire"> *</span>
     </label>
    <input 
    :id="id" 
    ref="input" 
    v-bind="$attrs" 
    class="form-input" 
    :class="{'is-invalid':error,'form-control':true}"
    :type="type" 
    :value="value" 
    @input="$emit('input', $event.target.value)">
    <div v-if="error" class="invalid-feedback active">
        <i class="fa fa-exclamation-circle fa-fw"></i>  <span>{{ error }}</span> 
    </div>      
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
    value: String,
    label: String,
    error: String,
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
