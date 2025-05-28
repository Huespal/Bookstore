import Pagination from '@/components/Pagination/Pagination.vue';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

describe('Pagination', () => {
  test('Renders component successfully given required properties', () => {
    render(Pagination);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Page: 1 of 1')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
  test('Displays \'Page: 2 of 4\' text given page property to 2'
    + ' and totalPages property to 4', () => {
      render(Pagination, { props: { page: 2, totalPages: 4 } });
      expect(screen.getByText('Page: 2 of 4')).toBeInTheDocument();
    });
  test('Emits \'onChangePage\' method given \'onChangePage\' callback',
    async () => {
      const wrapper = render(Pagination, { props: { page: 2, totalPages: 4 } });

      const previousBtn = screen.getByText('Previous');
      const nextBtn = screen.getByText('Next');
      await fireEvent.click(previousBtn);
      expect(wrapper.emitted()).toHaveProperty('onChangePage');

      await fireEvent.click(nextBtn);
      expect(wrapper.emitted()).toHaveProperty('onChangePage');


    });
});
