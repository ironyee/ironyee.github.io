import Vue from 'vue';
import Router from 'vue-router';
import Resume from './views/Resume.vue';
import A4 from './views/A4.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume,
    },
  ],
});
