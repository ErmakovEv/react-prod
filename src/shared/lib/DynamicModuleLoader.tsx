import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StoreWithReduceManager } from 'app/providers/storeProvider';
import { StateSchemaKey } from 'app/providers/storeProvider/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
};

interface DynamicModuleLoaderProps {
  children?:ReactNode,
  reducers: ReducersList,
  removeAfterUnmount: boolean
}
export function DynamicModuleLoader(props : DynamicModuleLoaderProps) {
  const {
    children, reducers, removeAfterUnmount,
  } = props;
  const store = useStore() as StoreWithReduceManager;
  const dispatch = useDispatch();

  useEffect(
    () => {
      Object.entries(reducers).forEach(([name, reducer]) => {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `!!!INIT ${name}!!!` });
      });

      return () => {
        if (removeAfterUnmount) {
          Object.keys(reducers).forEach((name) => {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `!!!DESTROY ${name}!!!` });
          });
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <div>{children }</div>;
}
