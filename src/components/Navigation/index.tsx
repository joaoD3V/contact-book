import { NotePencil, Trash } from 'phosphor-react';
import { useContact } from '../../contexts/ContactContext';
import { isMobile } from 'react-device-detect';

import * as S from './styles';

export function Navigation() {
  const { handleChangeView, view, contact, handleRemoveContact } = useContact();

  return (
    <S.Wrapper isContactView={view === 'contact'}>
      {view === 'contact' ? (
        <>
          <button
            type="button"
            title="Editar contato"
            onClick={() => handleChangeView('editing')}
          >
            {isMobile ? (
              <NotePencil width="28px" height="28px" />
            ) : (
              <NotePencil width="42px" height="42px" />
            )}

            <span>Editar</span>
          </button>

          <button
            type="button"
            title="Excluir contato"
            onClick={() => {
              handleRemoveContact(contact.id);
              handleChangeView('initial');
            }}
          >
            {isMobile ? (
              <Trash width="28px" height="28px" />
            ) : (
              <Trash width="42px" height="42px" />
            )}

            <span>Excluir</span>
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            title="Cancelar edição"
            onClick={() =>
              view === 'add'
                ? handleChangeView('initial')
                : handleChangeView('contact')
            }
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
