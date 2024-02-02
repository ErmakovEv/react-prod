import React from 'react';
import './index.scss';
import { Theme, ThemeProvider } from 'app/providers/theme';

// import './index.scss';

interface TestDecoratorProps {
  children: React.ReactNode,
  theme: Theme
}
function ThemeDecorator({ children, theme } : TestDecoratorProps) {
  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default ThemeDecorator;