import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/storeProvider/store';
import { StateSchema } from 'app/providers/storeProvider/StateSchema';

interface StoreProviderProps {
  children?: ReactNode,
  initialState?: StateSchema
}

export function StoreProvider({ children, initialState }: StoreProviderProps) {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
