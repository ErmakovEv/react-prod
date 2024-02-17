import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}
export function LoginForm({ className } : LoginFormProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames({
      cls: classes.LoginForm,
      additional: [className],
    })}
    >
      <Input type="text" className={classes.loginInput} placeholder={t('логин')} autoFocus />
      <Input type="text" className={classes.loginInput} placeholder={t('пароль')} />
      <Button
        type="button"
        themeButton={ButtonTheme.BACKGROUND_INVERTED}
        className={classes.loginBtn}
      >
        {t('Вход')}
      </Button>
    </div>

  );
}
