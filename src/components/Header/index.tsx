import { MagnifyingGlass, Users } from 'phosphor-react';
import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <h3>Contatos</h3>

      <div>
        <button type="button" title="Pesquisar contato">
          <MagnifyingGlass width="28px" height="28px" />
        </button>

        <button type="button" title="Agrupar por categoria">
          <Users width="28px" height="28px" />
        </button>
      </div>
    </S.Header>
  );
}
