import { Pad } from './Pad';
import * as S from './styles';
import { contacts } from '../../mocks/contacts';

export function ContactList() {
  return (
    <S.Wrapper>
      <Pad initalLetter="A" contacts={contacts} />
      <Pad initalLetter="B" contacts={contacts} />
      <Pad initalLetter="C" contacts={contacts} />
      <Pad initalLetter="D" contacts={contacts} />
      <Pad initalLetter="E" contacts={contacts} />
    </S.Wrapper>
  );
}
