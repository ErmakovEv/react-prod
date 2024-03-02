import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
