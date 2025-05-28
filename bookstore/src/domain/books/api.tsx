import { api } from '@/core/api';
import type { BookResponse } from '@/domain/books/types';
import { useQuery } from '@tanstack/vue-query';

export const useGetBooks = () => useQuery({
  queryKey: ['books'],
  queryFn: () => api<BookResponse>('/books', 'GET'),
  select: response => response.books ?? []
});

export const useGetBook = (slug: string) => useQuery({
  queryKey: ['books', slug],
  queryFn: () => api(`/books/${slug}`, 'GET')
});