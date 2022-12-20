import { Modal } from '..';
import { useModal } from '../../../contexts/ModalContext';
import * as S from './styles';

export function AddAddressModal() {
  const { handleToggleAddAddressModal, isAddAddressModalOpen } = useModal();

  return (
    <Modal
      isOpen={isAddAddressModalOpen}
      onRequestClose={handleToggleAddAddressModal}
      title="Adicionar novo endereço"
    >
      <S.Wrapper>
        <h1>AddAddressModal</h1>
      </S.Wrapper>
    </Modal>
  );
}
