import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export function Navbar({ className } : NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);

  return (
    <div className={classNames({
      cls: classes.navbar,
      additional: [className],
    })}
    >
      <Button themeButton={ButtonTheme.BACKGROUND} size={ButtonSize.M} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>

  );
}
