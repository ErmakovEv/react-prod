import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/theme';

import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames({ cls: 'app', additional: [theme] })}>
      <AppRouter />
    </div>
  );
}

export default App;
