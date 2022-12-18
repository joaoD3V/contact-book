import { Contact } from '../../contexts/ContactContext';
import * as S from './styles';

type ContactEditingProps = {
  contact: Contact;
};

export function ContactEditing({ contact }: ContactEditingProps) {
  return (
    <S.Wrapper>
      <h1>{contact.name}</h1>
    </S.Wrapper>
  );
}
