import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || '';
