import React from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'src/components/page';

import { selectUser } from 'src/redux/selectors/authSelectors';

import styles from './styles.module.scss';

const HomePage = () => {
  const user = useSelector(state => selectUser(state));

  return (
    <Page title="Главная">
      <div className={styles.home}>Привет, {user?.name || 'Гость'}</div>
    </Page>
  );
};

export { HomePage };
