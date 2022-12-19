import { createContext, useContext, useState } from 'react';

type ModalContextData = {
  isTypePhoneModalOpen: boolean;
  handleToggleTypePhoneModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isTypePhoneModalOpen, setIsTypePhoneModalOpen] = useState(false);

  function handleToggleTypePhoneModal() {
    isTypePhoneModalOpen
      ? setIsTypePhoneModalOpen(false)
      : setIsTypePhoneModalOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{ isTypePhoneModalOpen, handleToggleTypePhoneModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
