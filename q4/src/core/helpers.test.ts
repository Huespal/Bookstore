import { APIUrl } from '@/core/constants';
import { getImgSrc } from '@/core/helpers';
import { describe, expect, test } from 'vitest';

describe('Helpers > getImgSrc', () => {
  test('Returns a formatted image src given an image file name', () => {
    const imageFileName = 'cover01.jpg';
    const imgSrc = getImgSrc(imageFileName);
    expect(imgSrc).toEqual(`${APIUrl}/images/${imageFileName}`);
  });
});
