import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
}
export function LangSwitcher({ className } : LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      themeButton={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames({
        cls: classes.LangSwitcher,
        additional: [className],
      })}
    >
      {t('Русский')}
    </Button>
  );
}
