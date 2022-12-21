import { useEffect, useState } from 'react';
import { useContact } from '../../contexts/ContactContext';
import { Loading } from '../Loading';
import { Pad } from './Pad';
import * as S from './styles';

export function ContactList() {
  const [initialsLetter, setInitialsLetter] = useState<string[]>([]);

  const { contactsList, isLoading } = useContact();

  useEffect(() => {
    contactsList.forEach((contact) =>
      setInitialsLetter((prevValues) => {
        if (!prevValues.includes(contact.name[0])) {
          return [...prevValues, contact.name[0]].sort();
        }

        return [...prevValues].sort();
      })
    );
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
        <div key={initial}>
          {handleFilterContacts(initial).length > 0 && (
            <Pad
              initalLetter={initial}
              contacts={handleFilterContacts(initial)}
            />
          )}
        </div>
      ))}
    </S.Wrapper>
  );
}
