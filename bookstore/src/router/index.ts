import { createRouter, createWebHistory } from 'vue-router';

import BookDetailView from '@/views/BookDetail.vue';
import BookFormView from '@/views/BookForm.vue';
import BookListView from '@/views/BookList.vue';

const routes = [
  { path: '/', component: BookListView },
  { path: '/:slug', component: BookDetailView },
  { path: '/create', component: BookFormView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;