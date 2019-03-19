<template>
  <div class="field">
    <label :for="id" class="label">{{label}}</label>
    <div class="field has-addons">
      <div class="control">
        <input :id="id" class="input" type="text" :value="value" @input="$emit('input', $event)" />
      </div>
      <div class="control">
        <button class="button" @click="pickFolder" type="button">...</button>
      </div>
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'; // eslint-disable-line

export default {
  props: ['id', 'label', 'value'],
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