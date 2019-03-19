import Vue from 'vue';
import Vuex from 'vuex';
import games from '../../libs/games.js';

import { createPersistedState } from 'vuex-electron';

Vue.use(Vuex);

const state = {
  game: {
    name: 'N/A',
  },
};

const getters = {
};

const mutations = {
  setGame(state, game) {
    state.game = game;
  },
};

const actions = {
  openGame(store, path) {
    const game = games.openGame(path);
    if (game) {
      store.commit('setGame', game);
      return true;
    }
    return false;
  },
};

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
});
