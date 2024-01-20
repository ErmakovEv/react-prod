import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/theme';
import App from './app/App';

import 'shared/config/i18n/i18n';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
