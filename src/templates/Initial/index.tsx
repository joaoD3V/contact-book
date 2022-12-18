import { Plus } from 'phosphor-react';
import { ContactList } from '../../components/ContactList';
import { Header } from '../../components/Header';
import * as S from './styles';

export function Initial() {
  return (
    <S.Wrapper>
      <Header />
      <ContactList />

      <S.AddContact type="button" title="Adicionar novo contato">
        <Plus width="42px" height="42px" />
      </S.AddContact>
    </S.Wrapper>
  );
}
