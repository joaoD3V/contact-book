import { NotePencil, Trash } from 'phosphor-react';
import { useContact } from '../../contexts/ContactContext';
import * as S from './styles';

export function Navigation() {
  const { handleChangeView, view } = useContact();

  return (
    <S.Wrapper isContactView={view === 'contact'}>
      {view === 'contact' ? (
        <>
          <button
            type="button"
            title="Editar contato"
            onClick={() => handleChangeView('editing')}
          >
            <NotePencil width="42px" height="42px" />
            <span>Editar</span>
          </button>

          <button type="button">
            <Trash width="42px" height="42px" />
            <span>Excluir</span>
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            title="Cancelar edição"
            onClick={() => handleChangeView('contact')}
          >
            <p>Cancelar</p>
          </button>

          <button type="submit">
            <p>Salvar</p>
          </button>
        </>
      )}
    </S.Wrapper>
  );
}
