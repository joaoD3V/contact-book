import { Plus } from 'phosphor-react';
import { ContactList } from '../../components/ContactList';
import { Header } from '../../components/Header';
import { useContact } from '../../contexts/ContactContext';
import * as S from './styles';

export function Initial() {
  const { handleChangeView } = useContact();

  return (
    <>
      <S.Wrapper>
        <Header />
        <ContactList />

        <S.AddContact
          type="button"
          title="Adicionar novo contato"
          onClick={() => handleChangeView('add')}
        >
          <Plus width="42px" height="42px" />
        </S.AddContact>
      </S.Wrapper>
    </>
  );
}
