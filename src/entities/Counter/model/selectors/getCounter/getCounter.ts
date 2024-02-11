import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getCounter = (state: StateSchema) => state.counter;
