import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from 'features/AuthByUserName/ui/LoginForm/LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation('main');
  const [val, setVal] = useState<string>('');

  const onChange = (value: string) => setVal(value);

  return (

    <div>
      {t('Главная')}
      <Input
        type="text"
        className={classes.loginInput}
        value={val}
        onChange={onChange}
        placeholder="Введите текст"
      />
    </div>
  );
}

export default MainPage;
