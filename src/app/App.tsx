import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/theme';
import ErrorBoundary from 'untitled/src/ErrorBoundary';
import './styles/index.scss';
import React from 'react';

function MyComp() {
  const throwError = () => {
    console.log('!!!!');
    throw new Error('Something went wrong');
  };

  return (
    <div>
      {/* <AppRouter /> */}
      <button type="button" onClick={throwError}>Throw error</button>
      <h1>Hello</h1>
    </div>
  );
}

function App() {
  const { theme } = useTheme();

  return (

    <MyComp />

  );
}
export default App;
