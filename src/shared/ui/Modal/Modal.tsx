import { classNames } from 'shared/lib/classNames';
import React, { useEffect, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/themeProvider';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean
}

const ANIMATION_DELAY = 300;
export function Modal(props: ModalProps) {
  const {
    className, children, isOpen, onClose, lazy,
  } = props;

  const { theme } = useTheme();

  const [isClosing, setIsClosing] = React.useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setIsMounted(true);
  }, [isOpen]);

  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [classes.opened]: isOpen,
    [classes.closed]: isClosing,
  };

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames({
        cls: classes.Modal,
        additional: [className, theme],
        mods,
      })}
      >
        <div className={classes.overlay} onClick={closeHandler} role="presentation">
          <div className={classes.content} role="presentation" onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      </div>
    </Portal>

  );
}
