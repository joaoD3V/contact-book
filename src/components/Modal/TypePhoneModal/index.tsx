import { useState } from 'react';
import { Modal } from '..';
import { useModal } from '../../../contexts/ModalContext';
import { typePhones } from '../../../mocks/typePhone';
import { Radio } from '../../Form/Radio';
import * as S from './styles';

export function TypePhoneModal() {
  const [typePhone, setTypePhone] = useState(typePhones[0]);

  const { isTypePhoneModalOpen, handleToggleTypePhoneModal } = useModal();

  return (
    <Modal
      isOpen={isTypePhoneModalOpen}
      onRequestClose={handleToggleTypePhoneModal}
      title="Tipo de telefone"
    >
      <S.Wrapper>
        {typePhones.map((type) => (
          <Radio
            key={type}
            name="type"
            id={type}
            checked={typePhone === type}
            value={type}
            onChange={(e) => setTypePhone(e.target.value)}
          >
            {type}
          </Radio>
        ))}
      </S.Wrapper>
    </Modal>
  );
}
