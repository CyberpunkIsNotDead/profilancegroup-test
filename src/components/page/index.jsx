import DocumentTitle from 'react-document-title';
import React from 'react';

import { Menu } from 'src/components/menu';

import styles from './styles.module.scss';

const Page = ({ children, isLoading, title }) => {
  const content = (
    <div className={styles.page}>
      <Menu />
      <div className={styles['page__content-wrapper']}>
        <main className={styles['page__content']}>
          {isLoading ? <div>Загрузка...</div> : children}
        </main>
      </div>
    </div>
  );

  if (!title) {
    return content;
  }

  return <DocumentTitle title={title}>{content}</DocumentTitle>;
};

export { Page };
