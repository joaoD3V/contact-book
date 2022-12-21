/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useContact } from '../../contexts/ContactContext';
import { Loading } from '../Loading';
import { Pad } from './Pad';
import * as S from './styles';

export function ContactList() {
  const [initialsLetter, setInitialsLetter] = useState<string[]>([]);

  const { contactsList, isLoading } = useContact();

  const isLock = useRef(false);
  useEffect(() => {
    if (!isLock.current && contactsList) {
      contactsList.forEach((contact) =>
        setInitialsLetter((prevValues) => {
          if (!prevValues.includes(contact.name[0])) {
            return [...prevValues, contact.name[0]];
          }

          return [...prevValues];
        })
      );
    }
  }, [contactsList]);

  function handleFilterContacts(category: string) {
    return contactsList.filter((contact) => contact.name[0] === category);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Wrapper>
      {initialsLetter.map((initial) => (
        <Pad
          key={initial}
          initalLetter={initial}
          contacts={handleFilterContacts(initial)}
        />
      ))}
    </S.Wrapper>
  );
}
