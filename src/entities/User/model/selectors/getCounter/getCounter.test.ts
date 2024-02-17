import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter obj', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
