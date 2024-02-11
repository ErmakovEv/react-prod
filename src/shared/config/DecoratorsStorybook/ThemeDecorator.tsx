import React from 'react';
import './index.scss';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';

// import './index.scss';

interface TestDecoratorProps {
  children: React.ReactNode,
  theme: Theme
}
function ThemeDecorator({ children, theme } : TestDecoratorProps) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default ThemeDecorator;
