import * as S from './styles';

type PadProps = {
  initalLetter: string;
  contacts: {
    id: string;
    name: string;
  }[];
};

export function Pad({ initalLetter, contacts }: PadProps) {
  return (
    <S.Wrapper>
      <span>{initalLetter}</span>

      <div>
        {contacts.map((contact) => (
          <S.DisplayName key={contact.id}>
            <p>{contact.name}</p>
          </S.DisplayName>
        ))}
      </div>
    </S.Wrapper>
  );
}
