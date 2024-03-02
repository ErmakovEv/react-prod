import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
