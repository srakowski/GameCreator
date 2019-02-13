<template>
  <div>
    <add-game></add-game>
    <router-link :to="{name: 'editor-page'}">Editor</router-link>
  </div>
</template>

<script>
import AddGame from './AddGame.vue';

export default {
  components: {
    AddGame,
  },
};
</script>

<style>
</style>
