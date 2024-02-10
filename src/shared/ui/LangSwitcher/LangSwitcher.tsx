import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './LangSwitcher.module.scss';
import Ru from '../../assets/icon/ru.svg';
import En from '../../assets/icon/gb.svg';

interface LangSwitcherProps {
  className?: string;
  isShort: boolean
}
export function LangSwitcher({ className, isShort } : LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      themeButton={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames({
        cls: classes.LangSwitcher,
        additional: [className],
      })}
      size={ButtonSize.M}
    >
      <div className={classes.langSwitcherContent}>
        <div className={classes.langName}>
          {t(isShort ? 'Яз' : 'Язык')}
        </div>

        <div className={classes.langIcon}>
          {i18n.language === 'ru' ? <En /> : <Ru />}
        </div>
      </div>

    </Button>
  );
}
