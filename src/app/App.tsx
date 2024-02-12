import React from 'react';
import { AppRouter } from 'app/providers/routerProvider';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { BugButton } from 'widgets/BugButton';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames({ cls: 'app', additional: [theme] })}>
      <BugButton className="clear" />
      <AppRouter />
    </div>
  );
}
export default App;
