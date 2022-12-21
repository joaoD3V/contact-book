import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Modal } from '..';
import { useContact } from '../../../contexts/ContactContext';
import { Input } from '../../Form/Input';
import * as S from './styles';

type SearchModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function SearchModal({ isOpen, onRequestClose }: SearchModalProps) {
  const [search, setSearch] = useState('');

  const { contactsList, handleChangeView, handleSetContact } = useContact();

  const filterContact =
    search.length > 0
      ? contactsList.filter((contact) =>
          contact.name
            .toLocaleLowerCase()
            .startsWith(search.toLocaleLowerCase())
        )
      : [];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Pesquisar contato"
    >
      <S.Wrapper>
        <Input
          icon={<MagnifyingGlass width="28px" height="28px" />}
          name="search"
          bgColor="primary"
          placeholder="Pesquisar contato"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <S.SearchAreaScroll>
          <S.SearchArea>
            {filterContact.map((contact) => (
              <S.DisplayName
                key={contact.id}
                onClick={() => {
                  handleSetContact(contact);
                  handleChangeView('contact');
                  onRequestClose();
                }}
              >
                <p>{contact.name}</p>
              </S.DisplayName>
            ))}
          </S.SearchArea>
        </S.SearchAreaScroll>
      </S.Wrapper>
    </Modal>
  );
}
