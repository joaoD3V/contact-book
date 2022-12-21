import { CaretLeft, MagnifyingGlass } from 'phosphor-react';
import { useContact } from '../../contexts/ContactContext';
import { useModal } from '../../contexts/ModalContext';
import * as S from './styles';

type HeaderProps = {
  isInitial?: boolean;
};

export function Header({ isInitial = true }: HeaderProps) {
  const { handleChangeView, contact } = useContact();
  const { handleToggleSearchModal } = useModal();

  return (
    <S.Header>
      {isInitial ? (
        <>
          <h3>Contatos</h3>

          <div>
            <button
              type="button"
              title="Pesquisar contato"
              onClick={handleToggleSearchModal}
            >
              <MagnifyingGlass width="28px" height="28px" />
            </button>
          </div>
        </>
      ) : (
        <S.HeaderContact>
          <button
            type="button"
            title="Voltar para a lista de contatos"
            onClick={() => handleChangeView('initial')}
          >
            <CaretLeft width="28px" height="28px" />
          </button>

          <h3>{contact.group}</h3>
        </S.HeaderContact>
      )}
    </S.Header>
  );
}
