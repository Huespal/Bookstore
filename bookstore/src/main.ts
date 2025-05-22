import App from './App.vue';
import '@/style.scss';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import router from './router';

createApp(App)
  .use(VueQueryPlugin)
  .use(router)
  .mount('#app');
