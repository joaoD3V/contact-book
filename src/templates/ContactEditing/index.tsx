import {
  EnvelopeSimple,
  House,
  Minus,
  Phone as PhoneIcon,
  Plus,
  User,
  Users,
} from 'phosphor-react';
import { Input } from '../../components/Form/Input';
import {
  Address,
  Contact,
  Phone,
  useContact,
} from '../../contexts/ContactContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigation } from '../../components/Navigation';
import { useModal } from '../../contexts/ModalContext';
import { AddPhoneModal } from '../../components/Modal/AddPhoneModal';
import * as yup from 'yup';
import * as S from './styles';
import { AddressModal } from '../../components/Modal/AddressModal';
import { useState } from 'react';
import { Select } from '../../components/Form/Select';
import { isMobile } from 'react-device-detect';

type ContactEditingProps = {
  contact?: Contact;
};

type ContactFormData = {
  name: string;
  email: string;
  group: string;
};

const ContactFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
});

export function ContactEditing({ contact }: ContactEditingProps) {
  const [selectAddress, setSelectAddress] = useState<Address | undefined>(
    undefined
  );

  const [selectPhone, setSelectPhone] = useState<Phone | undefined>(undefined);
  const [addresses, setAddresses] = useState<Address[]>(
    contact ? contact.addresses : []
  );
  const [phones, setPhones] = useState<Phone[]>(contact ? contact.phones : []);

  const { register, handleSubmit, formState } = useForm<ContactFormData>({
    resolver: yupResolver(ContactFormSchema),
  });
  const { errors } = formState;

  const {
    handleToggleAddPhoneModal,
    handleToggleAddressModal,
    isAddressModalOpen,
    isAddPhoneModalOpen,
  } = useModal();
  const { groups, handleAddContact, handleUpdateContact, handleChangeView } =
    useContact();

  const handleSaveContact: SubmitHandler<ContactFormData> = async (values) => {
    const contactToAdd: Omit<Contact, 'id'> = {
      name: values.name,
      email: values.email,
      group: values.group,
      addresses,
      phones,
    };

    contact
      ? handleUpdateContact(contactToAdd, contact.id)
      : handleAddContact(contactToAdd);
    handleChangeView('initial');
  };

  function handleSetAddresses(address: Address) {
    setAddresses((prevValues) => [...prevValues, address]);
  }

  function handleUpdateAddress(address: Address) {
    setAddresses((prevValues) => {
      return [...prevValues].map((prev) => {
        if (prev.id === address.id) {
          return { ...address };
        }

        return prev;
      });
    });
    setSelectAddress(() => undefined);
  }

  function handleSetPhones(phone: Phone) {
    setPhones((prevValues) => [...prevValues, phone]);
  }

  function handleUpdatePhone(phone: Phone) {
    setPhones((prevValues) => {
      return [...prevValues].map((prev) => {
        if (prev.id === phone.id) {
          return { ...phone };
        }

        return prev;
      });
    });
    setSelectPhone(() => undefined);
  }

  function handleRemoveAddress(id: string) {
    setAddresses((prevValues) => {
      return [...prevValues].filter((address) => address.id !== id);
    });
  }

  function handleRemovePhone(id: string) {
    setPhones((prevValues) => {
      return [...prevValues].filter((phone) => phone.id !== id);
    });
  }

  return (
    <>
      <span>{selectPhone?.number}</span>
      <span>{selectAddress?.id}</span>
      <S.FormWrapper onSubmit={handleSubmit(handleSaveContact)}>
        <S.FormScrollView>
          <S.FormContent>
            {isMobile ? (
              <Input
                defaultValue={contact?.name}
                type="text"
                placeholder="Nome completo"
                error={errors.name}
                {...register('name')}
              />
            ) : (
              <Input
                defaultValue={contact?.name}
                type="text"
                placeholder="Nome completo"
                icon={<User width="28px" height="28px" />}
                error={errors.name}
                {...register('name')}
              />
            )}

            <S.FieldsGroup>
              {phones.length > 0 && (
                <S.Info>
                  {!isMobile && <PhoneIcon width="28px" height="28px" />}
                  <S.Group>
                    {phones.map((phone) => (
                      <S.Field key={phone.id}>
                        <S.AddressButton
                          type="button"
                          title="Alterar número de telefone"
                          onClick={() => {
                            setSelectPhone(() => phone);
                            handleToggleAddPhoneModal();
                          }}
                        >
                          <span>{phone.type}</span>
                          {phone.number}
                        </S.AddressButton>

                        <S.RemoveField
                          type="button"
                          title={`Remover o telefone ${phone.number}`}
                          onClick={() => handleRemovePhone(phone.id)}
                        >
                          <Minus width="28px" height="28px" />
                        </S.RemoveField>
                      </S.Field>
                    ))}
                  </S.Group>
                </S.Info>
              )}

              <S.AddNewField
                type="button"
                title="Adicionar novo número"
                onClick={() => {
                  setSelectPhone(() => undefined);
                  handleToggleAddPhoneModal();
                }}
              >
                <span>
                  <Plus width="22px" height="22px" />
                  Adicionar número de telefone
                </span>
              </S.AddNewField>
            </S.FieldsGroup>

            {isMobile ? (
              <Input
                defaultValue={contact?.email}
                type="email"
                placeholder="E-mail"
                {...register('email')}
              />
            ) : (
              <Input
                defaultValue={contact?.email}
                type="email"
                placeholder="E-mail"
                icon={<EnvelopeSimple width="28px" height="28px" />}
                {...register('email')}
              />
            )}

            <S.FieldsGroup>
              {addresses.length > 0 && (
                <S.Info>
                  {!isMobile && <House width="28px" height="28px" />}

                  <S.Group>
                    {addresses.map((address) => (
                      <S.Field key={address.id}>
                        <S.AddressButton
                          type="button"
                          title="Alterar endereço"
                          onClick={() => {
                            setSelectAddress(() => address);
                            handleToggleAddressModal();
                          }}
                        >
                          <span>{address.type}</span>
                          {address.street}
                        </S.AddressButton>

                        <S.RemoveField
                          type="button"
                          title={`Remover o endereço ${address.street}`}
                          onClick={() => handleRemoveAddress(address.id)}
                        >
                          <Minus width="28px" height="28px" />
                        </S.RemoveField>
                      </S.Field>
                    ))}
                  </S.Group>
                </S.Info>
              )}

              <S.AddNewField
                type="button"
                title="Adicionar novo endereço"
                onClick={() => {
                  setSelectAddress(() => undefined);
                  handleToggleAddressModal();
                }}
              >
                <span>
                  <Plus width="22px" height="22px" />
                  Adicionar novo endereço
                </span>
              </S.AddNewField>
            </S.FieldsGroup>

            {isMobile ? (
              <Select {...register('group')} defaultValue={contact?.group}>
                {groups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </Select>
            ) : (
              <Select
                {...register('group')}
                icon={<Users width="28px" height="28px" />}
                defaultValue={contact?.group}
              >
                {groups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </Select>
            )}
          </S.FormContent>
        </S.FormScrollView>
        <Navigation />
      </S.FormWrapper>

      <AddPhoneModal
        onSave={handleSetPhones}
        onUpdate={handleUpdatePhone}
        isOpen={isAddPhoneModalOpen}
        onRequestClose={handleToggleAddPhoneModal}
        defaultValue={selectPhone}
      />

      <AddressModal
        defaultValue={selectAddress}
        onSave={handleSetAddresses}
        onUpdate={handleUpdateAddress}
        isOpen={isAddressModalOpen}
        onRequestClose={handleToggleAddressModal}
      />
    </>
  );
}
