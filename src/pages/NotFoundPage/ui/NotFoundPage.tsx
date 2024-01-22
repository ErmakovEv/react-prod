import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}
export function NotFoundPage({ className } : NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div
      className={classNames({
        cls: classes.NotFoundPage,
        additional: [className],
      })}
    >
      <Navbar />
      <div className={classes.NotFoundPageContent}>
        {t('Страница не найдена')}
      </div>
    </div>

  );
}
