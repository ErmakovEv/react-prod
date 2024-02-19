import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export function Navbar({ className } : NavbarProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, [dispatch]);

  const authData = useSelector(getUserAuthData);

  if (authData) {
    return (
      <div className={classNames({
        cls: classes.navbar,
        additional: [className],
      })}
      >
        <Button themeButton={ButtonTheme.BACKGROUND} size={ButtonSize.M} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

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
