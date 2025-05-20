import { api } from '@/core/api';
import type { Book } from '@/domain/books/types';
import { useQuery } from '@tanstack/vue-query';

export const useGetBooks = () => useQuery<Book[]>({
  queryKey: ['books'],
  queryFn: () => api('/books', 'GET')
});

export const useGetBook = (slug: string) => useQuery({
  queryKey: ['books', slug],
  queryFn: () => api(`/books/${slug}`, 'GET')
});