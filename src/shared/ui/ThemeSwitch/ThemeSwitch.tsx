import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'app/providers/themeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icon/sun.svg';
import DarkIcon from 'shared/assets/icon/moon.svg';
import classes from './ThemeSwitch.module.scss';

interface ThemeSwitchProps {
  className?: string
}
export function ThemeSwitch({ className } : ThemeSwitchProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={
                classNames({
                  cls: classes.ThemeSwitch,
                  additional: [className],
                })
}
      onClick={toggleTheme}
      themeButton={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <LightIcon className={classes.icon} />
        : <DarkIcon className={classes.icon} />}
    </Button>
  );
}
