import Button, { type Variant } from '@/components/Button/Button.vue';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
  const defaultSlot = { slots: { default: "Test" } };

  test('Renders component successfully given slot content', () => {
    render(Button, defaultSlot);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test.each([{ variant: 'primary' }, { variant: 'secondary' }])(
    'Renders component successfully given $variant variant',
    ({ variant }) => {
      render(Button, {
        ...defaultSlot,
        props: { variant: variant as Variant }
      });
      expect(screen.getByText('Test')).toBeInTheDocument();
    }
  );

  test('Renders component successfully given \'disabled\' property', () => {
    render(Button, {
      ...defaultSlot,
      props: { disabled: true }
    });
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Emits click event successfully given a component click',
    async () => {
      const wrapper = render(Button, defaultSlot);
      const button = screen.getByText('Test');
      await fireEvent.click(button);

      expect(wrapper.emitted()).toHaveProperty('onClick');
    });
});
