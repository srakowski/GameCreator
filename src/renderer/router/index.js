import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/editor',
      name: 'editor-page',
      component: require('@/components/EditorPage').default,
      children: [
        {
          path: 'code',
          name: 'code-editor',
          component: require('@/components/CodeEditor').default,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// https://gamecreator.games
// https://gamecreator.games/editor
// https://gamecreator.games/editor/code
