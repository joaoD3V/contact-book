import { Contact } from '../../Contact';
import { Header } from '../../Header';
import * as S from './styles';

export function ContactList() {
  return (
    <S.Wrapper>
      <Header />
      <Contact />
    </S.Wrapper>
  );
}
