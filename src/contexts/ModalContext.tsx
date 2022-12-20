import { createContext, useContext, useState } from 'react';

type ModalContextData = {
  isTypePhoneModalOpen: boolean;
  isAddPhoneModalOpen: boolean;
  isTypeAddressModalOpen: boolean;
  isAddAddressModalOpen: boolean;
  handleToggleTypePhoneModal: () => void;
  handleToggleAddPhoneModal: () => void;
  handleToggleTypeAddressModal: () => void;
  handleToggleAddAddressModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isTypePhoneModalOpen, setIsTypePhoneModalOpen] = useState(false);
  const [isAddPhoneModalOpen, setIsAddPhoneModalOpen] = useState(false);
  const [isTypeAddressModalOpen, setIsTypeAddressModalOpen] = useState(false);
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);

  function handleToggleTypePhoneModal() {
    isTypePhoneModalOpen
      ? setIsTypePhoneModalOpen(false)
      : setIsTypePhoneModalOpen(true);
  }

  function handleToggleAddPhoneModal() {
    isAddPhoneModalOpen
      ? setIsAddPhoneModalOpen(false)
      : setIsAddPhoneModalOpen(true);
  }

  function handleToggleTypeAddressModal() {
    isTypeAddressModalOpen
      ? setIsTypeAddressModalOpen(false)
      : setIsTypeAddressModalOpen(true);
  }

  function handleToggleAddAddressModal() {
    isAddAddressModalOpen
      ? setIsAddAddressModalOpen(false)
      : setIsAddAddressModalOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{
        isTypePhoneModalOpen,
        isAddPhoneModalOpen,
        isAddAddressModalOpen,
        isTypeAddressModalOpen,
        handleToggleTypePhoneModal,
        handleToggleAddPhoneModal,
        handleToggleTypeAddressModal,
        handleToggleAddAddressModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
