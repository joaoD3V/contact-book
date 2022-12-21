import * as S from './appStyles';

import { useContact } from './contexts/ContactContext';
import { ContactEditing } from './templates/ContactEditing';
import { ContactView } from './templates/ContactView';
import { Initial } from './templates/Initial';
import { Main } from './templates/Main';

function App() {
  const { contact, view } = useContact();

  return (
    <S.Wrapper>
      <Main>
        {view === 'initial' && <Initial />}
        {view === 'contact' && contact && <ContactView contact={contact} />}
        {view === 'editing' && contact && <ContactEditing contact={contact} />}
        {view === 'add' && <ContactEditing />}
      </Main>
    </S.Wrapper>
  );
}

export default App;
