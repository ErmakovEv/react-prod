import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
