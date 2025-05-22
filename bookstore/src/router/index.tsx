import { createRouter, createWebHistory } from 'vue-router';

import BookDetailView from '@/views/BookDetail.vue';
import BookListView from '@/views/BookList.vue';

const routes = [
  { path: '/', component: BookListView },
  { path: '/:slug', component: BookDetailView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;