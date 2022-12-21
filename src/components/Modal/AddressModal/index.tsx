import { Modal } from '..';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { cepMask } from 'masks-br';
import { Address, useContact } from '../../../contexts/ContactContext';
import { Select } from '../../Form/Select';
import { Input } from '../../Form/Input';
import { v4 as uuid } from 'uuid';
import * as yup from 'yup';
import * as S from './styles';

type AddAddressFormData = {
  type: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

const AddAddressFormSchema = yup.object().shape({
  type: yup.string().required('Tipo de endereço obrigatório'),
  cep: yup
    .string()
    .required('CEP obrigatório')
    .min(9, 'O CEP precisa ter 8 números'),
  street: yup.string().required('Endereço obrigatório'),
  neighborhood: yup.string().required('Bairro obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  state: yup.string().required('Estado obrigatório'),
});

type AxiosAddressProps = {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

type AddressModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  defaultValue?: Address;
  onSave: (address: Address) => void;
};

export function AddressModal({
  isOpen,
  onRequestClose,
  defaultValue,
  onSave,
}: AddressModalProps) {
  const { register, handleSubmit, formState, setValue, reset, clearErrors } =
    useForm<AddAddressFormData>({
      resolver: yupResolver(AddAddressFormSchema),
    });
  const { errors } = formState;

  const { typeAddresses } = useContact();

  const handleAddAddress: SubmitHandler<AddAddressFormData> = (values) => {
    const address: Address = {
      id: uuid(),
      type: values.type,
      cep: values.cep,
      street: values.street,
      number: values.number,
      complement: values.complement,
      neighborhood: values.neighborhood,
      city: values.city,
      state: values.state,
    };

    onSave(address);
    reset();
    onRequestClose();
  };

  async function handleSetAddress(value: string) {
    try {
      const { data } = await axios.get<AxiosAddressProps>(
        `https://brasilapi.com.br/api/cep/v2/${value}`
      );
      setValue('city', data.city);
      setValue('state', data.state);
      setValue('neighborhood', data.neighborhood);
      setValue('street', data.street);
    } catch {
      alert(
        'Não foi possível encontrar o CEP. Reveja o CEP informado e tente novamente.'
      );

      reset();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title={defaultValue ? 'Alterar endereço' : 'Adicionar novo endereço'}
    >
      <S.Form onSubmit={handleSubmit(handleAddAddress)}>
        <Select
          defaultValue={defaultValue ? defaultValue.type : ''}
          label="Tipo de endereço"
          error={errors.type!}
          {...register('type')}
        >
          {typeAddresses.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>

        <S.GroupFields isFlex>
          <Input
            defaultValue={defaultValue ? defaultValue.cep : ''}
            type="text"
            label="CEP"
            placeholder="28670-025"
            error={errors.cep!}
            {...register('cep')}
            bgColor="primary"
            onChange={(e) => {
              const value = e.target.value;
              setValue('cep', cepMask(value));
              const cep = value.replace(/[^0-9]/g, '');
              if (value === '' && !defaultValue) {
                reset();
              }

              if (cep.length === 8) {
                clearErrors('cep');
                handleSetAddress(cep);
              }
            }}
            style={{ width: '100px' }}
          />

          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            rel="noreferrer"
          >
            Não sei meu CEP
          </a>
        </S.GroupFields>

        <Input
          defaultValue={defaultValue ? defaultValue.street : ''}
          type="text"
          label="Endereço"
          placeholder="Rua Sete de Setembro"
          error={errors.street!}
          {...register('street')}
          bgColor="primary"
          readOnly
        />

        <S.GroupFields>
          <Input
            defaultValue={defaultValue ? defaultValue.number : ''}
            type="number"
            label="Número"
            placeholder="123"
            error={errors.number!}
            {...register('number')}
            bgColor="primary"
            style={{ width: '100px' }}
          />

          <Input
            defaultValue={defaultValue ? defaultValue.complement : ''}
            type="text"
            label="Complemento"
            placeholder="Bloco 01"
            error={errors.complement!}
            {...register('complement')}
            bgColor="primary"
          />
        </S.GroupFields>

        <S.GroupFields hasThreeElements>
          <Input
            defaultValue={defaultValue ? defaultValue.neighborhood : ''}
            type="text"
            label="Bairro"
            placeholder="Centro"
            error={errors.neighborhood!}
            {...register('neighborhood')}
            bgColor="primary"
            readOnly
            style={{ width: '150px' }}
          />

          <Input
            defaultValue={defaultValue ? defaultValue.city : ''}
            type="text"
            label="Cidade"
            placeholder="Rio de Janeiro"
            error={errors.city!}
            {...register('city')}
            bgColor="primary"
            readOnly
            style={{ width: '150px' }}
          />

          <Input
            defaultValue={defaultValue ? defaultValue.state : ''}
            type="text"
            label="Estado"
            placeholder="RJ"
            error={errors.state!}
            {...register('state')}
            bgColor="primary"
            readOnly
            style={{ width: '20px' }}
          />
        </S.GroupFields>

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
