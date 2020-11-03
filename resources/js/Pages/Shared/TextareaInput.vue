<template>
  <div>
    <label v-if="label" class="control-label" :for="id">{{ label }}: <span class="m-l-5 text-danger" v-if="labelRequire"> *</span></label>
    <textarea :id="id" ref="input" v-bind="$attrs" 
    :class="{'is-invalid':error,'form-control':true}"
     :value="value" @input="$emit('input', $event.target.value)" />
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
        return `textarea-input-${this._uid}`
      },
    },
    value: String,
    label: String,
    error: String,
    labelRequire:Boolean,
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
