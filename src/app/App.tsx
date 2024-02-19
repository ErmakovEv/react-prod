import React, { useEffect } from 'react';
import { AppRouter } from 'app/providers/routerProvider';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { BugButton } from 'widgets/BugButton';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames({ cls: 'app', additional: [theme] })}>
      <BugButton className="clear" />
      <AppRouter />
    </div>
  );
}
export default App;
