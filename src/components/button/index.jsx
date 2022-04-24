import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

const Button = ({ children, className, type = 'button', ...props }) => {
  const buttonClassNames = classNames({
    [styles.button]: true,
    [className]: !!className,
  });

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};

export { Button };
