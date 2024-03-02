import { classNames } from 'shared/lib/classNames';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/storeProvider/hooks';
import { Text, TextThema } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import classes from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  className?: string
}
const LoginForm = React.memo(({ className } : LoginFormProps) => {
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames({
        cls: classes.LoginForm,
        additional: [className],
      })}
      >
        <Text title={t('титул формы авторизации')} />
        {error && <Text content={t('Ошибка авторизации')} thema={TextThema.ERROR} />}
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
    </DynamicModuleLoader>

  );
});

export default LoginForm;
