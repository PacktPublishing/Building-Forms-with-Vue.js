<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input 
      :value="value" 
      :type="type" 
      class="form-control"
      @input="$emit('input', $event.target.value)"
      v-mask="mask"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password'].includes(value);
      }
    },
    value: {
      type: String,
      required: true
    },
    mask: {
      type: String,
      default: ''
    }
  }
}
</script>
