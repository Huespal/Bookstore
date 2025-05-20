import { APIUrl } from '@/core/constants';

export const getImgSrc = (fileName: string) => `${APIUrl}/images/${fileName}`;