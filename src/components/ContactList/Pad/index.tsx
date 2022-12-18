import { Contact, useContact } from '../../../contexts/ContactContext';
import * as S from './styles';

type PadProps = {
  initalLetter: string;
  contacts: Contact[];
};

export function Pad({ initalLetter, contacts }: PadProps) {
  const { handleSetContact, handleChangeView } = useContact();

  return (
    <S.Wrapper>
      <span>{initalLetter}</span>

      <div>
        {contacts.map((contact) => (
          <S.DisplayName
            key={contact.id}
            onClick={() => {
              handleSetContact(contact);
              handleChangeView('contact');
            }}
          >
            <p>{contact.name}</p>
          </S.DisplayName>
        ))}
      </div>
    </S.Wrapper>
  );
}
