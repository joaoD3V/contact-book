import * as S from './appStyles';
import { Main } from './components/templates/Main';
import { ContactList } from './components/templates/ContactList';

function App() {
  return (
    <S.Wrapper>
      <Main>
        <ContactList />
      </Main>
    </S.Wrapper>
  );
}

export default App;
