import { classNames } from 'shared/lib/classNames';
import React, {
  InputHTMLAttributes, useEffect, useState, useRef,
} from 'react';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}
export const Input = React.memo((props : InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPos, setCaretPos] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  const blurHandler = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autoFocus]);

  const focusHandler = () => {
    setIsFocused(true);
  };

  const selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaretPos(e.target.selectionStart || 0);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPos(e.target.value.length);
  };

  return (
    <div
      className={classNames({
        cls: classes.InputWrapper,
        additional: [className],
      })}
    >
      {placeholder && (
      <div className={classes.placeholder}>
        {`${placeholder} >`}
      </div>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={changeHandler}
          className={classes.input}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onSelect={selectHandler}
          {...otherProps}
        />
        {isFocused && <span className={classes.caret} style={{ left: `${caretPos * 9}px` }} />}
      </div>

    </div>
  );
});
