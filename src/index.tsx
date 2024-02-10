import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/theme';
import { ErrorPage } from 'shared/ui/ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';
import App from './app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

createRoot(document.getElementById('root')).render(
  <ErrorBoundary fallback={<ErrorPage />}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundary>,
);
