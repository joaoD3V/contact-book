import { Modal } from '..';
import { useModal } from '../../../contexts/ModalContext';
import { Select } from '../../Form/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as S from './styles';
import { Input } from '../../Form/Input';
import { typePhones } from '../../../mocks/types';

type AddPhoneFormData = {
  type: string;
  number: string;
};

const AddPhoneFormSchema = yup.object().shape({
  type: yup.string().required('Tipo de telefone obrigatório'),
  number: yup.string().required('Número de telefone obrigatório'),
});

export function AddPhoneModal() {
  const { register, handleSubmit, formState } = useForm<AddPhoneFormData>({
    resolver: yupResolver(AddPhoneFormSchema),
  });
  const { errors } = formState;

  const { handleToggleAddPhoneModal, isAddPhoneModalOpen } = useModal();

  const handleAddPhone: SubmitHandler<AddPhoneFormData> = async (values) => {
    console.log(values);
    handleToggleAddPhoneModal();
  };

  return (
    <Modal
      isOpen={isAddPhoneModalOpen}
      onRequestClose={handleToggleAddPhoneModal}
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
            onClick={handleToggleAddPhoneModal}
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
