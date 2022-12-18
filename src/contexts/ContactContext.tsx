import { createContext, useContext, useState } from 'react';

type View = 'initial' | 'contact' | 'editing';

type Phone = {
  id: string;
  type: string;
  number: string;
};

type Address = {
  id: string;
  type: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
};

export type Contact = {
  id: string;
  name: string;
  phones: Phone[];
  email: string;
  addresses: Address[];
  group: string;
};

type ContactContextData = {
  view: View;
  contact: Contact;
  handleChangeView: (changeView: View) => void;
  handleSetContact: (contact: Contact) => void;
};

type ContactProviderProps = {
  children: React.ReactNode;
};

const ContactContext = createContext({} as ContactContextData);

export function ContactProvider({ children }: ContactProviderProps) {
  const [view, setView] = useState<View>('initial');
  const [contact, setContact] = useState<Contact>({} as Contact);

  function handleChangeView(changeView: View) {
    setView(changeView);
  }

  function handleSetContact(contact: Contact) {
    setContact(contact);
  }

  return (
    <ContactContext.Provider
      value={{ view, contact, handleChangeView, handleSetContact }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
