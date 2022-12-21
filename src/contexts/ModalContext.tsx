import { createContext, useContext, useState } from 'react';

type ModalContextData = {
  isAddPhoneModalOpen: boolean;
  isAddressModalOpen: boolean;
  handleToggleAddPhoneModal: () => void;
  handleToggleAddressModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isAddPhoneModalOpen, setIsAddPhoneModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  function handleToggleAddPhoneModal() {
    setIsAddPhoneModalOpen(!isAddPhoneModalOpen);
  }

  function handleToggleAddressModal() {
    setIsAddressModalOpen(!isAddressModalOpen);
  }

  return (
    <ModalContext.Provider
      value={{
        isAddPhoneModalOpen,
        isAddressModalOpen,
        handleToggleAddPhoneModal,
        handleToggleAddressModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
