import React, {
  ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultThemeValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type ThemeProviderProps = {
  children: ReactNode
  initialTheme?: Theme
};
function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultThemeValue);

  const defaultProviderValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
