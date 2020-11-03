<template>
  <div>
    <label v-if="label" class="control-label" :for="id">{{ label }}:</label>
    <select :id="id" ref="input" v-model="selected" v-bind="$attrs" class="form-control" :class="{'is-invalid': error}">
      <slot />
    </select>
    <div class="invalid-feedback active">
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
        return `select-input-${this._uid}`
      },
    },
    value: [String, Number, Boolean],
    label: String,
    error: String,
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
