import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import App from './App.vue';
import './style.scss';

const app = createApp(App);

app.use(VueQueryPlugin)

app.mount('#app');
