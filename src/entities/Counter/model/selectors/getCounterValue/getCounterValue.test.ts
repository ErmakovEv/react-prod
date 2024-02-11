import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
