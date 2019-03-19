<template>
  <div class="field">
    <label>
      <span class="label">{{label}}</span>
      <div class="control">
        <input class="input" type="text" :value="value" @input="onInput" />
      </div>
    </label>
  </div>
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
