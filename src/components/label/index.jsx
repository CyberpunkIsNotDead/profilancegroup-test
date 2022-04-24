import React from 'react';

import styles from './styles.module.scss';

const Label = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};

export { Label };
