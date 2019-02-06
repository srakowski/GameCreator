<template>
  <div>
    <h1>{{name}}</h1>

    <text-input
      label="Name"
      v-model="name"
    ></text-input>

    <directory-picker
      label="Location"
      v-model="location"
    ></directory-picker>
  </div>
</template>

<script>
import TextInput from './Common/TextInput.vue';
import DirectoryPicker from './Common/DirectoryPicker.vue';

export default {
  components: {
    TextInput,
    DirectoryPicker,
  },
  data() {
    return {
      name: 'Controdazone',
      location: '',
    };
  },
};
</script>

<style>

</style>
