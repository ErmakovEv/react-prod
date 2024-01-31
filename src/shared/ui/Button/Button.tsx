import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
