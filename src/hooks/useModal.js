import { useCallback, useState } from 'react';

const useModal = (open = false) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleModal = useCallback(open => setIsOpen(open), []);

  return {
    open: isOpen,
    toggle: toggleModal,
  };
};

export default useModal;
