import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/RenderWithRouter';
import { Counter } from './Counter';

const initialState = {
  counter: {
    value: 10,
  },
};
describe('Sidebar', () => {
  test('test render', () => {
    render(<ComponentRender initialState={initialState}><Counter /></ComponentRender>);
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test increment', () => {
    render(<ComponentRender initialState={initialState}><Counter /></ComponentRender>);
    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test decrement', () => {
    render(<ComponentRender initialState={initialState}><Counter /></ComponentRender>);
    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
