import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { api } from '../services/api';
import { v4 as uuid } from 'uuid';

type View = 'initial' | 'contact' | 'editing' | 'add';

export type Phone = {
  id: string;
  type: string;
  number: string;
};

export type Address = {
  id: string;
  type: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
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
  contactsList: Contact[];
  typePhones: string[];
  typeAddresses: string[];
  groups: string[];
  isLoading: boolean;
  handleChangeView: (changeView: View) => void;
  handleSetContact: (contact: Contact) => void;
  handleUpdateContact: (
    contact: Omit<Contact, 'id'>,
    id: string
  ) => Promise<void>;
  handleRemoveContact: (id: string) => Promise<void>;
  handleAddContact: (contact: Omit<Contact, 'id'>) => Promise<void>;
};

type ContactProviderProps = {
  children: React.ReactNode;
};

const ContactContext = createContext({} as ContactContextData);

export function ContactProvider({ children }: ContactProviderProps) {
  const [view, setView] = useState<View>('initial');
  const [contactsList, setContactsList] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact>({} as Contact);
  const [typePhones, setTypePhones] = useState<string[]>([]);
  const [typeAddresses, setTypeAddresses] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isLock = useRef(false);
  useEffect(() => {
    if (!isLock.current) {
      getContacts();
      isLock.current = true;
    }
  }, []);

  function handleChangeView(changeView: View) {
    setView(changeView);
  }

  function handleSetContact(contact: Contact) {
    setContact(contact);
  }

  async function getContacts() {
    try {
      setIsLoading(true);

      const responseContacts = await api.get<Contact[]>('/contacts');
      const sortContacts = responseContacts.data.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setContactsList(sortContacts);

      const responseTypePhones = await api.get<string[]>('/typePhones');
      setTypePhones(responseTypePhones.data);

      const responseTypeAddresses = await api.get<string[]>('/typeAddresses');
      setTypeAddresses(responseTypeAddresses.data);

      const responseGroups = await api.get<string[]>('/groups');
      setGroups(responseGroups.data);

      setIsLoading(false);
    } catch {
      alert('Erro ao se comunicar com a API');
      setIsLoading(false);
    }
  }

  async function handleUpdateContact(contact: Omit<Contact, 'id'>, id: string) {
    try {
      setIsLoading(true);
      const response = await api.put<Contact>(`/contacts/${id}`, contact);
      setContact(response.data);
      alert('Contato alterado com sucesso!');
      await getContacts();
      setIsLoading(false);
    } catch {
      alert('Erro ao se comunicar com a API');
      setIsLoading(false);
    }
  }

  async function handleRemoveContact(id: string) {
    try {
      setIsLoading(true);
      await api.delete<Contact>(`/contacts/${id}`);
      alert('Contato excluído com sucesso!');
      await getContacts();
      setIsLoading(false);
    } catch {
      alert('Erro ao se comunicar com a API');
      setIsLoading(false);
    }
  }

  async function handleAddContact(contact: Omit<Contact, 'id'>) {
    try {
      setIsLoading(true);
      await api.post<Contact>(`/contacts`, { id: uuid(), ...contact });
      alert('Contato adicionado com sucesso!');
      await getContacts();
      setIsLoading(false);
    } catch {
      alert('Erro ao se comunicar com a API');
      setIsLoading(false);
    }
  }

  return (
    <ContactContext.Provider
      value={{
        view,
        contact,
        contactsList,
        typePhones,
        typeAddresses,
        groups,
        isLoading,
        handleChangeView,
        handleSetContact,
        handleUpdateContact,
        handleRemoveContact,
        handleAddContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
