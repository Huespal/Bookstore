import { api } from '@/core/api';
import type { BookCreateRequest, BookResponse } from '@/domain/books/types';
import { useMutation, useQuery } from '@tanstack/vue-query';

export const useGetBooks = () => useQuery({
  queryKey: ['books'],
  queryFn: () => api<BookResponse>('/books', 'GET'),
  select: response => response.books ?? []
});

export const useGetBook = (slug: string) => useQuery({
  queryKey: ['books', slug],
  queryFn: () => api(`/books/${slug}`, 'GET')
});

export const useCreateBook = (onSuccess?: () => void) => useMutation({
  mutationFn: (body: BookCreateRequest) => api(`/books`, 'POST', body),
  onSuccess
})