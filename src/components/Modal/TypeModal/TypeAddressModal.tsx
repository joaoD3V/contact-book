import { useState } from 'react';
import { Modal } from '..';
import { useModal } from '../../../contexts/ModalContext';
import { Radio } from '../../Form/Radio';
import * as S from './styles';

export type TypeModalProps = {
  defaultValue: string;
  values: string[];
};

export function TypeAddressModal({ defaultValue, values }: TypeModalProps) {
  const [selectTypeAddress, setSelectTypeAddress] = useState(defaultValue);

  const { isTypeAddressModalOpen, handleToggleTypeAddressModal } = useModal();

  return (
    <Modal
      isOpen={isTypeAddressModalOpen}
      onRequestClose={handleToggleTypeAddressModal}
      title="Tipo de telefone"
    >
      <S.Wrapper>
        {values.map((type) => (
          <Radio
            key={type}
            name="type"
            id={type}
            checked={selectTypeAddress === type}
            value={type}
            onChange={(e) => {
              setSelectTypeAddress(e.target.value);
              handleToggleTypeAddressModal();
            }}
          >
            {type}
          </Radio>
        ))}
      </S.Wrapper>
    </Modal>
  );
}
