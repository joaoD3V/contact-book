/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from '..';
import { Select } from '../../Form/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../Form/Input';
import { Phone, useContact } from '../../../contexts/ContactContext';
import { v4 as uuid } from 'uuid';

import * as yup from 'yup';
import * as S from './styles';
import { useEffect } from 'react';

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
  onUpdate: (phone: Phone) => void;
  defaultValue?: Phone;
};

export function AddPhoneModal({
  onSave,
  onUpdate,
  isOpen,
  onRequestClose,
  defaultValue,
}: AddPhoneModalProps) {
  const { register, handleSubmit, formState, reset, setValue } =
    useForm<AddPhoneFormData>({
      resolver: yupResolver(AddPhoneFormSchema),
    });
  const { errors } = formState;

  const { typePhones } = useContact();

  useEffect(() => {
    if (defaultValue) {
      setValue('number', defaultValue.number);
      setValue('type', defaultValue.type);
    } else {
      reset();
    }
  }, [defaultValue]);

  const handleAddPhone: SubmitHandler<AddPhoneFormData> = (values) => {
    const phone: Phone = {
      id: defaultValue ? defaultValue.id : uuid(),
      type: values.type,
      number: values.number,
    };
    defaultValue ? onUpdate(phone) : onSave(phone);
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
          defaultValue={defaultValue?.type}
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
          defaultValue={defaultValue?.number}
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
