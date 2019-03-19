<template>
  <div>
    <h3 class="title">Continue building</h3>
    <h4 class="subtitle">Recent</h4>
    <div v-for="game in recentGames" :key="game.name">
      <div>{{game.name}}</div>
      <div>{{game.path}}</div>
    </div>
    <button @click="openGame" class="button">Open</button>
  </div>
</template>

<script>
import { remote } from 'electron'; // eslint-disable-line

export default {
  data() {
    return {
      recentGames: [
        {
          name: "Controdazone",
          path: "C:\\foo"
        },
        {
          name: "Pong",
          path: "C:\\bar"
        }
      ]
    };
  },
  methods: {
    openGame() {
      const paths = remote.dialog.showOpenDialog({ properties: ['openDirectory'] });
      if (paths) {
        const path = paths[0];
        this.$store.dispatch('openGame', path)
          .then((gameOpened) => {
            if (gameOpened) {
              this.$router.push({name: 'editor-page'});
            }
          });
      }
    },
  }
};
</script>

<style>
</style>
