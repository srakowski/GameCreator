<template>
  <div>
    <h1 class="title">Create something new</h1>

    <text-input
      label="Name"
      v-model="name"
    ></text-input>

    <directory-picker
      label="Location"
      v-model="location"
    ></directory-picker>

    <div class="field">
      <div class="control">
        <button class="button is-primary" @click="createGame">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue';
import DirectoryPicker from './DirectoryPicker.vue';

export default {
  components: {
    TextInput,
    DirectoryPicker,
  },
  data() {
    return {
      name: '',
      location: '',
    };
  },
  methods: {
    createGame() {
      this.$router.push({ name: 'editor-page' });
    },
  },
};
</script>

<style>

</style>
