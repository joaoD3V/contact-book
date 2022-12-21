import { createContext, useContext, useState } from 'react';

type ModalContextData = {
  isAddPhoneModalOpen: boolean;
  isAddressModalOpen: boolean;
  isSearchModalOpen: boolean;
  handleToggleAddPhoneModal: () => void;
  handleToggleAddressModal: () => void;
  handleToggleSearchModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isAddPhoneModalOpen, setIsAddPhoneModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  function handleToggleAddPhoneModal() {
    setIsAddPhoneModalOpen(!isAddPhoneModalOpen);
  }

  function handleToggleAddressModal() {
    setIsAddressModalOpen(!isAddressModalOpen);
  }

  function handleToggleSearchModal() {
    setIsSearchModalOpen(!isSearchModalOpen);
  }

  return (
    <ModalContext.Provider
      value={{
        isAddPhoneModalOpen,
        isAddressModalOpen,
        isSearchModalOpen,
        handleToggleAddPhoneModal,
        handleToggleAddressModal,
        handleToggleSearchModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
