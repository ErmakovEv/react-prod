import React from 'react';
import './index.scss';
import { Theme, ThemeProvider } from 'app/providers/theme';

// import './index.scss';

interface TestDecoratorProps {
  children: React.ReactNode
}
function ThemeDecorator({ children } : TestDecoratorProps) {
  return (
    <ThemeProvider>
      <div className={`app ${Theme.DARK}`}>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default ThemeDecorator;
