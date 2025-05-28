import Search from '@/components/Search/Search.vue';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

describe('Search', () => {
  test('Renders component successfully given required properties', () => {
    render(Search);
    expect(screen.getByPlaceholderText('Search by title or synopsis...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
  test('Emits \'onSearch\' method given \'onSearch\' callback',
    async () => {
      const wrapper = render(Search);

      const searchBtn = screen.getByText('Search');
      await fireEvent.click(searchBtn);
      expect(wrapper.emitted()).toHaveProperty('onSearch');
    });
});
