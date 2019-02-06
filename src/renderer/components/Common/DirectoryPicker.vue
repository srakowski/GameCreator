<template>
  <span>
    <text-input :label="label" :value="value" @input="$emit('input', $event)"></text-input>
    <button @click="pickFolder" type="button">...</button>
  </span>
</template>

<script>
import { remote } from 'electron'; // eslint-disable-line
import TextInput from './TextInput.vue';

export default {
  props: ['label', 'value'],
  components: {
    TextInput,
  },
  methods: {
    pickFolder() {
      const paths = remote.dialog.showOpenDialog({ properties: ['openDirectory'] });
      if (paths) {
        this.$emit('input', paths[0]);
      }
    },
  },
};
</script>