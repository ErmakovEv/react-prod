import { StateSchema } from 'app/providers/storeProvider/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authDate;
