import {
  CaretRight,
  EnvelopeSimple,
  House,
  Minus,
  Phone,
  Plus,
  User,
  Users,
} from 'phosphor-react';
import { Input } from '../../components/Form/Input';
import { Contact } from '../../contexts/ContactContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigation } from '../../components/Navigation';
import { useModal } from '../../contexts/ModalContext';
import { AddPhoneModal } from '../../components/Modal/AddPhoneModal';
import * as yup from 'yup';
import * as S from './styles';
import { typeAddresses, typePhones } from '../../mocks/types';
import { TypePhoneModal } from '../../components/Modal/TypeModal/TypePhoneModal';
import { TypeAddressModal } from '../../components/Modal/TypeModal/TypeAddressModal';
import { AddAddressModal } from '../../components/Modal/AddAddressModal';

type ContactEditingProps = {
  contact: Contact;
};

type ContactFormData = {
  name: string;
  phones: string[];
  email: string;
};

const ContactFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
});

export function ContactEditing({ contact }: ContactEditingProps) {
  const { register, handleSubmit, formState } = useForm<ContactFormData>({
    resolver: yupResolver(ContactFormSchema),
  });
  const { errors } = formState;

  const {
    handleToggleTypePhoneModal,
    handleToggleAddPhoneModal,
    handleToggleTypeAddressModal,
    handleToggleAddAddressModal,
  } = useModal();

  const handleSaveUpdate: SubmitHandler<ContactFormData> = async (values) => {
    console.log(values);
  };

  return (
    <>
      <S.FormWrapper onSubmit={handleSubmit(handleSaveUpdate)}>
        <S.FormScrollView>
          <S.FormContent>
            <Input
              defaultValue={contact.name}
              type="text"
              placeholder="Nome completo"
              icon={<User width="28px" height="28px" />}
              error={errors.name}
              {...register('name')}
            />

            <S.FieldsGroup>
              <S.Info>
                <Phone width="28px" height="28px" />
                <S.Group>
                  {contact.phones.map((phone, index) => (
                    <S.Field key={phone.id}>
                      <S.CategoryButton
                        type="button"
                        title="Selecionar tipo de telefone"
                        onClick={handleToggleTypePhoneModal}
                      >
                        {phone.type} <CaretRight width="18px" height="18px" />
                      </S.CategoryButton>
                      <input
                        defaultValue={phone.number}
                        {...register(`phones.${index}`)}
                        type="number"
                      />

                      {contact.phones.length > 1 && (
                        <S.RemoveField
                          type="button"
                          title={`Remover o telefone ${phone.number}`}
                        >
                          <Minus width="28px" height="28px" />
                        </S.RemoveField>
                      )}
                    </S.Field>
                  ))}
                </S.Group>
              </S.Info>

              <S.AddNewField
                type="button"
                title="Adicionar novo número"
                onClick={handleToggleAddPhoneModal}
              >
                <span>
                  <Plus width="22px" height="22px" />
                  Adicionar número de telefone
                </span>
              </S.AddNewField>
            </S.FieldsGroup>

            <Input
              defaultValue={contact.email}
              type="email"
              placeholder="E-mail"
              icon={<EnvelopeSimple width="28px" height="28px" />}
              {...register('email')}
            />

            <S.FieldsGroup>
              <S.Info>
                <House width="28px" height="28px" />
                <S.Group>
                  {contact.addresses.map((address) => (
                    <S.Field key={address.id}>
                      <S.CategoryButton
                        type="button"
                        title="Alterar endereço"
                        onClick={handleToggleTypeAddressModal}
                      >
                        {address.type} <CaretRight width="18px" height="18px" />
                      </S.CategoryButton>
                      <S.AddressButton>{address.street}</S.AddressButton>

                      {contact.phones.length > 1 && (
                        <S.RemoveField
                          type="button"
                          title={`Remover o endereço ${address.street}`}
                        >
                          <Minus width="28px" height="28px" />
                        </S.RemoveField>
                      )}
                    </S.Field>
                  ))}
                </S.Group>
              </S.Info>

              <S.AddNewField
                type="button"
                title="Adicionar novo número"
                onClick={handleToggleAddAddressModal}
              >
                <span>
                  <Plus width="22px" height="22px" />
                  Adicionar novo endereço
                </span>
              </S.AddNewField>
            </S.FieldsGroup>

            <S.ContactGroup>
              <Users width="28px" height="28px" />
              {contact.group}
            </S.ContactGroup>
          </S.FormContent>
        </S.FormScrollView>
        <Navigation />
      </S.FormWrapper>

      <TypePhoneModal values={typePhones} defaultValue={typePhones[0]} />
      <AddPhoneModal />
      <TypeAddressModal
        values={typeAddresses}
        defaultValue={typeAddresses[2]}
      />
      <AddAddressModal />
    </>
  );
}
