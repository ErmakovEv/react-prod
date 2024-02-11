import { counterReducer, counterActions, CounterSchema } from 'entities/Counter';

describe('CounterSlice', () => {
  test('decrement', () => {
    const state: Partial<CounterSchema> = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.decrement()))
      .toEqual({ value: 9 });
  });
  test('increment', () => {
    const state: Partial<CounterSchema> = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.increment()))
      .toEqual({ value: 11 });
  });
  test('no state', () => {
    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 });
  });
});
