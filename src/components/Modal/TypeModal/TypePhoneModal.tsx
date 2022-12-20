import { useState } from 'react';
import { Modal } from '..';
import { useModal } from '../../../contexts/ModalContext';
import { Radio } from '../../Form/Radio';
import * as S from './styles';

export type TypeModalProps = {
  defaultValue: string;
  values: string[];
};

export function TypePhoneModal({ defaultValue, values }: TypeModalProps) {
  const [selectTypePhone, setSelectTypePhone] = useState(defaultValue);

  const { isTypePhoneModalOpen, handleToggleTypePhoneModal } = useModal();

  return (
    <Modal
      isOpen={isTypePhoneModalOpen}
      onRequestClose={handleToggleTypePhoneModal}
      title="Tipo de telefone"
    >
      <S.Wrapper>
        {values.map((type) => (
          <Radio
            key={type}
            name="type"
            id={type}
            checked={selectTypePhone === type}
            value={type}
            onChange={(e) => {
              setSelectTypePhone(e.target.value);
              handleToggleTypePhoneModal();
            }}
          >
            {type}
          </Radio>
        ))}
      </S.Wrapper>
    </Modal>
  );
}
