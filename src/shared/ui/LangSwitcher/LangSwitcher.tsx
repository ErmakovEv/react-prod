import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';
import Ru from '../../assets/icon/ru.svg';
import En from '../../assets/icon/gb.svg';

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
      themeButton={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames({
        cls: classes.LangSwitcher,
        additional: [className],
      })}
    >
      <div className={classes.langSwitcherContent}>
        <div className={classes.langName}>
          {t('Русский')}
        </div>

        <div className={classes.langIcon}>
          {i18n.language === 'ru' ? <En /> : <Ru />}
        </div>
      </div>

    </Button>
  );
}
