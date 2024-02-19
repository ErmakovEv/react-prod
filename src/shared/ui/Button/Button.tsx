import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
  XL = 'size_xl',
  L = 'size_l',
  M = 'size_m',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  themeButton?: ButtonTheme,
  isSquare?: boolean,
  size? : ButtonSize,
  disabled?: boolean
}
export function Button({
  className, themeButton, isSquare, children, size = ButtonSize.L, disabled, ...otherProps
} : ButtonProps) {
  return (
    <button
      type="button"
      className={classNames({
        cls: classes.Button,
        additional: [className, classes[themeButton], classes[size]],
        mods: { [classes.square]: isSquare, [classes.disabled]: disabled },

      })}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}
