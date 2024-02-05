import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitch } from 'shared/ui/ThemeSwitch';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Theme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';
import AboutPageIcon from 'shared/assets/icon/book.svg';
import MainPageIcon from 'shared/assets/icon/home.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}
export function Sidebar({ className } : SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();
  const onToggle = () => setCollapsed((newCollapsed) => !newCollapsed);

  return (
    <div
      className={classNames({
        cls: classes.Sidebar,
        additional: [className],
        mods: { [classes.collapsed]: collapsed },
      })}
      data-testid="sidebar"
    >
      <div className={classes.items}>
        <AppLink to="/" theme={Theme.LIGHT} className={classes.item}>
          <MainPageIcon className={classes.iconPage} />
          <span className={classes.link}>
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink to="/about" theme={Theme.LIGHT} className={classes.item}>
          <AboutPageIcon className={classes.iconPage} />
          <span className={classes.link}>
            {t('О сайте')}
          </span>
        </AppLink>

      </div>
      <Button
        data-testid="button-toggle"
        onClick={onToggle}
        className={classes.collapsedBtn}
        themeButton={ButtonTheme.BACKGROUND_INVERTED}
        isSquare
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.switchers}>
        <LangSwitcher className={classes.lang} />
        <ThemeSwitch />
      </div>
    </div>

  );
}
