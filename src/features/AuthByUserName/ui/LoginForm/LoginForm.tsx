import { classNames } from 'shared/lib/classNames';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { useAppDispatch } from 'app/providers/storeProvider/hooks';
import { Text, TextThema } from 'shared/ui/Text/Text';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}
export const LoginForm = React.memo(({ className } : LoginFormProps) => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    appDispatch(loginByUsername({ username, password }));
  }, [appDispatch, username, password]);

  const { t } = useTranslation();
  return (
    <div className={classNames({
      cls: classes.LoginForm,
      additional: [className],
    })}
    >
      <Text title={t('титул формы авторизации')} />
      {error && <Text content={error} thema={TextThema.ERROR} />}
      <Input
        type="text"
        className={classes.loginInput}
        placeholder={t('логин')}
        autoFocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={classes.loginInput}
        placeholder={t('пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        type="button"
        themeButton={ButtonTheme.BACKGROUND_INVERTED}
        className={classes.loginBtn}
        onClick={onClickLogin}
        disabled={isLoading}
      >
        {t('Вход')}
      </Button>
    </div>
  );
});
