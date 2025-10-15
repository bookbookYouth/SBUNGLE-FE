import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return { isOpen, openModal, closeModal };
};
