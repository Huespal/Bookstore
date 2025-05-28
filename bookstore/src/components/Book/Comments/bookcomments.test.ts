import BookComments from '@/components/Book/Comments/BookComments.vue';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

describe('Book > Comments', () => {
  test('Renders component successfully given required properties', () => {
    render(BookComments);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Marie Doe')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  test('Emits \'onSubmitComment\' method given \'onSubmitComment\' callback',
    async () => {
      render(BookComments);

      const submitBtn = screen.getByText('Submit');
      await fireEvent.click(submitBtn);
      expect(screen.getByText('Guest')).toBeInTheDocument();
    });
});
