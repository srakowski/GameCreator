<template>
  <label>
    {{label}}
    <input type="text" :value="value" @input="onInput" />
  </label>
</template>

<script>
export default {
  props: ['label', 'value'],
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style>
</style>
