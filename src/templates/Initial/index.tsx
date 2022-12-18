import { ContactList } from '../../components/ContactList';
import { Header } from '../../components/Header';
import * as S from './styles';

export function Initial() {
  return (
    <S.Wrapper>
      <Header />
      <ContactList />
    </S.Wrapper>
  );
}
