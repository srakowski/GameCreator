<template>
    <div>
      <slot name="header"></slot>
      <div v-for="(item, i) in items" :key="i">
        {{item}}
      </div>
      <button @click="clearItems">Clear</button>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clearItems() {
      this.$emit('clear');
    },
  },
};
</script>

<style>

</style>
