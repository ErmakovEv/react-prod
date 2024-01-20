import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Theme } from 'app/providers/theme';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export function Navbar({ className } : NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames({
      cls: classes.navbar,
      additional: [className],
    })}
    >
      <ul className={classes.links}>
        <li className={classes.mainLink}>
          <AppLink to="/" theme={Theme.LIGHT}>
            {' '}
            {t('Главная')}
            {' '}
          </AppLink>
        </li>
        <li>
          <AppLink to="/about" theme={Theme.LIGHT}>
            {' '}
            {t('О сайте')}
            {' '}
          </AppLink>
        </li>
      </ul>
    </div>

  );
}
