import Upvote from '@/components/Upvote/Upvote.vue';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

describe('Upvote', () => {
  test('Renders component successfully given required properties', () => {
    render(Upvote, { props: { upvoted: true, upvotes: 10 } });
    expect(screen.getByText('Upvoted 10 times')).toBeInTheDocument();
  });
  test('Renders component successfully given \'reverse\' property', () => {
    render(Upvote, { props: { reverse: true, upvoted: true, upvotes: 10 } });
    expect(screen.getByText('Upvoted 10 times')).toBeInTheDocument();
  });
  test('Manages upvotes successfully given upvotes interactivity', async () => {
    render(Upvote, { props: { upvoted: true, upvotes: 10 } });
    const button = screen.getByRole('button');
    expect(button.textContent).toEqual('Upvoted');
    expect(screen.getByText('Upvoted 10 times')).toBeInTheDocument();
    await fireEvent.click(button);
    expect(button.textContent).toEqual('Upvote');
    expect(screen.getByText('Upvoted 9 times')).toBeInTheDocument();
    await fireEvent.click(button);
    expect(button.textContent).toEqual('Upvoted');
    expect(screen.getByText('Upvoted 10 times')).toBeInTheDocument();
  });
});
