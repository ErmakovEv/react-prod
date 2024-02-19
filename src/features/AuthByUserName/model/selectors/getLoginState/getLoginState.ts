import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getLoginState = (state: StateSchema) => state.loginForm;
