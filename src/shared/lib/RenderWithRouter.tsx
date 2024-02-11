import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StoreProvider } from 'app/providers/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import i18n from '../config/i18n/i18nForTests';

interface ComponentRenderOptions {
  // route?: string
  children: ReactNode;
  initialState?: Partial<StateSchema>
}

export function ComponentRender({ children, initialState }: ComponentRenderOptions) {
  return (
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>

  );
}
