import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export function Navbar({ className } : NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((perv) => !perv);
  }, []);

  return (
    <div className={classNames({
      cls: classes.navbar,
      additional: [className],
    })}
    >
      <Button themeButton={ButtonTheme.CLEAR} size={ButtonSize.M} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Alias cumque dicta doloremque enim esse ex excepturi id illum
          in ipsum iste laborum laudantium magni molestias necessitatibus
          numquam perferendis, quas quis quisquam recusandae saepe sunt suscipit
        </p>
      </Modal>
    </div>

  );
}
