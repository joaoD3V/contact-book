import { Pad } from './Pad';
import * as S from './styles';

const contacts = [
  {
    id: '1',
    name: 'Alessandro',
  },
  {
    id: '2',
    name: 'Alexandre',
  },
  {
    id: '2',
    name: 'Ananias',
  },
];

export function Contact() {
  return (
    <S.Wrapper>
      <Pad initalLetter="A" contacts={contacts} />
      <Pad initalLetter="B" contacts={contacts} />
      <Pad initalLetter="C" contacts={contacts} />
      <Pad initalLetter="D" contacts={contacts} />
      <Pad initalLetter="E" contacts={contacts} />
    </S.Wrapper>
  );
}
