import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  themeButton?: ThemeButton
}
export function Button({
  className, themeButton, children, ...otherProps
} : ButtonProps) {
  return (
    <button
      type="button"
      className={classNames({
        cls: classes.Button,
        additional: [className, classes[themeButton]],
      })}
      {...otherProps}
    >
      {children}
    </button>

  );
}
