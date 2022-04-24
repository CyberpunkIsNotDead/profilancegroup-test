import React from 'react';

import styles from './styles.module.scss';

const Input = ({ value, type = 'text', ...props }) => {
  return <input className={styles.input} type={type} spellCheck="false" {...props} />;
};

export { Input };
