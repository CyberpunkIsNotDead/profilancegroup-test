import React from 'react';

import styles from './styles.module.scss';

const Textarea = ({ value, type = 'text', ...props }) => {
  return <textarea className={styles.input} type={type} {...props} />;
};

export { Textarea };
