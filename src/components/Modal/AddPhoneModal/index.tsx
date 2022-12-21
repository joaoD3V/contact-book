import { Modal } from '..';
import { Select } from '../../Form/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../Form/Input';
import { Phone, useContact } from '../../../contexts/ContactContext';
import { v4 as uuid } from 'uuid';

import * as yup from 'yup';
import * as S from './styles';

type AddPhoneFormData = {
  type: string;
  number: string;
};

const AddPhoneFormSchema = yup.object().shape({
  type: yup.string().required('Tipo de telefone obrigatório'),
  number: yup.string().required('Número de telefone obrigatório'),
});

type AddPhoneModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (phone: Phone) => void;
};

export function AddPhoneModal({
  onSave,
  isOpen,
  onRequestClose,
}: AddPhoneModalProps) {
  const { register, handleSubmit, formState, reset } =
    useForm<AddPhoneFormData>({
      resolver: yupResolver(AddPhoneFormSchema),
    });
  const { errors } = formState;

  const { typePhones } = useContact();

  const handleAddPhone: SubmitHandler<AddPhoneFormData> = (values) => {
    const phone: Phone = {
      id: uuid(),
      type: values.type,
      number: values.number,
    };
    onSave(phone);
    reset();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Adicionar novo número"
    >
      <S.Form onSubmit={handleSubmit(handleAddPhone)}>
        <Select
          label="Tipo de telefone"
          error={errors.type!}
          {...register('type')}
        >
          {typePhones.map((type: string) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <Input
          type="number"
          label="Número de telefone"
          placeholder="Ex: 022998765432"
          bgColor="primary"
          error={errors.number!}
          {...register('number')}
        />

        <S.Buttons>
          <S.CancelButton
            type="button"
            title="Cancelar"
            onClick={onRequestClose}
          >
            Cancelar
          </S.CancelButton>
          <S.SaveButton type="submit" title="Salvar">
            Salvar
          </S.SaveButton>
        </S.Buttons>
      </S.Form>
    </Modal>
  );
}
