import { api } from '@/core/api';
import { useMutation } from '@tanstack/vue-query';

export const useUploadImage = () => useMutation({
  mutationFn: (file: File) => {
    const body = new FormData();
    body.append('file', file);
    return api(`/images`, 'POST', body);
  }
})