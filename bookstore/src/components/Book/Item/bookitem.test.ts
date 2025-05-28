import BookItem from '@/components/Book/Item/BookItem.vue';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Book > Item', () => {
  test('Renders component successfully given required properties', () => {
    render(BookItem, {
      props: {
        position: 1,
        title: 'Test',
        rating: '5',
        author: 'John Doe',
        slug: 'test',
        cover: 'test.jpg',
        synopsis: 'Lorem ipsum',
        upvoted: true,
        upvotes: 10
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    expect(screen.getByText('1. Test')).toBeInTheDocument();
    expect(screen.getByText('(5/10)')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    expect(screen.getByText('Upvoted')).toBeInTheDocument();
    expect(screen.getByText('Upvoted 10 times')).toBeInTheDocument();
  });
});
