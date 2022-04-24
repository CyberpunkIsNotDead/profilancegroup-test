import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';

import Logo from 'src/assets/svg/logo.svg';

import { Button } from 'src/components/button';
import { Input } from 'src/components/input';
import { Label } from 'src/components/label';
import { Modal } from 'src/components/modal';

import useModal from 'src/hooks/useModal';

import { USERS } from 'src/lib/constants';

import { selectUser } from 'src/redux/selectors/authSelectors';
import { authSlice } from 'src/redux/slices/authSlice';

import styles from './styles.module.scss';

const { login, logout } = authSlice.actions;

const Menu = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => selectUser(state));

  const [name, setName] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const { open, toggle } = useModal();

  const formClassNames = classNames({
    [styles.form]: true,
    [styles['menu__form']]: true,
  });

  const getLinkClassNames = isActive =>
    classNames({
      [styles['menu__link']]: true,
      [styles['menu__link_active']]: isActive,
    });

  const onAuthClick = () => {
    if (!user) {
      toggle(true);
    } else {
      dispatch(logout());
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const foundUser = USERS.find(
      u => u.name.toLowerCase() === name.toLowerCase() && u.password === password
    );

    if (!foundUser) {
      setError('Неверно введен логин или пароль');

      return;
    }

    dispatch(login({ name: foundUser.name, role: foundUser.role }));

    toggle(false);

    setName('');
    setPassword('');
    setError(null);
  };

  return (
    <>
      <header className={styles.menu}>
        <div className={styles['menu__item']}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles['menu__item']}>
          <Link className={getLinkClassNames(useMatch('/news/*'))} to="/news">
            Новости
          </Link>
        </div>
        <div className={styles['menu__item']}>
          <span className={getLinkClassNames(open)} onClick={onAuthClick}>
            {user ? 'Выход' : 'Вход'}
          </span>
        </div>
      </header>
      <Modal isOpen={open} onClose={() => toggle(false)}>
        <div className={styles['modal-content']}>
          <form className={formClassNames} onSubmit={onFormSubmit} autoComplete="off">
            <p className={styles['form__field-container']}>
              <Label>Имя пользователя</Label>
              <Input
                placeholder="Введите имя пользователя"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </p>
            <p className={styles['form__field-container']}>
              <Label>Пароль</Label>
              <Input
                placeholder="Введите пароль"
                value={password}
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </p>
            <p className={styles['form__error']}>{error}</p>
            <Button type="submit">Войти</Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export { Menu };
