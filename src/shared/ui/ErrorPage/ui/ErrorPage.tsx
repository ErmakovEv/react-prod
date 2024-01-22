import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import classes from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string
}
export function ErrorPage({ className } : ErrorPageProps) {
  const { t } = useTranslation();

  const reloadApp = () => {
    window.location.reload();
  };

  return (
    <div className={classNames({
      cls: classes.ErrorPage,
      additional: [className],
    })}
    >
      <p>{t('Произошла ошибка')}</p>
      <Button onClick={reloadApp}>{t('Вернуться на главную')}</Button>
    </div>
  );
}
