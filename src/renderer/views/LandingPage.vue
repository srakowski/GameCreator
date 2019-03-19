<template>
  <div class="container">
    <h1 class="title is-1 has-text-centered">Game Creator</h1>
    <div class="columns">
      <add-game class="column"></add-game>
      <open-game class="column"></open-game>
    </div>
  </div>
</template>

<script>
import OpenGame from '../components/OpenGame.vue';
import AddGame from '../components/AddGame.vue';
import {remote} from 'electron';
const app = remote.app;

export default {
  components: {
    OpenGame,
    AddGame,
  },
  computed: {
    userDataPath() {
      return app.getPath('userData');
    }
  }
};
</script>

<style>
</style>
