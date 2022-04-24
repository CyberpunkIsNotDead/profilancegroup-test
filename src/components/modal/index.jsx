import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import useOnClickOutside from 'src/hooks/useOnClickOutside';

import styles from './styles.module.scss';

const Modal = ({ children, isOpen = false, onClose }) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, onClose);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'unset');
  });

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div ref={modalRef} className={styles.modal}>
          <div className={styles['modal__header']}>
            <div className={styles['modal__close']} onClick={onClose}>
              &times;
            </div>
          </div>
          <div className={styles['modal__content']}>{children}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export { Modal };
