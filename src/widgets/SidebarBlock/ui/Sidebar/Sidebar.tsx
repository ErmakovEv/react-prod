import { classNames } from 'shared/lib/classNames';
import React, { useState } from 'react';
import { ThemeSwitch } from 'shared/ui/ThemeSwitch/';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Theme } from 'app/providers/theme';
import { useTranslation } from 'react-i18next';
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

        <AppLink to="/" theme={Theme.LIGHT} className={classes.link}>
          {' '}
          {t('Главная')}
          {' '}
        </AppLink>

        <AppLink to="/about" theme={Theme.LIGHT} className={classes.link}>
          {' '}
          {t('О сайте')}
          {' '}
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
