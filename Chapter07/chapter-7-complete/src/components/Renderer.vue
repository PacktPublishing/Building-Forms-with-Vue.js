<template>
  <component 
    :is="component" 
    v-bind="props"
    :value="value"
    @input="handleComponentInput"
  />
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  computed: {
    component() {
      const componentName = this.element.component;
      return () => import(`./${componentName}`);
    },
    props() {
      return this.element;
    }
  },
  methods: {
    handleComponentInput (value) {
      this.$emit('input', value);
    }
  }
}
</script>
