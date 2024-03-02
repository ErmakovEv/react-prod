import React, { FC } from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(() => (
  new Promise((res) => {
    setTimeout(() => res(import('./LoginForm')), 1500);
  })
));
