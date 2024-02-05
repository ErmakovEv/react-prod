import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18n/i18n';

interface ComponentRenderOptions {
  // route?: string
  children: ReactNode;
}

export function ComponentRender({ children }: ComponentRenderOptions) {
  return (
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </MemoryRouter>
  );
}
