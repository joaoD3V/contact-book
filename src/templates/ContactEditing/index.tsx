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
import MediaMatch from '../../components/MediaMatch';

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
  const {
    typeAddresses,
    typePhones,
    groups,
    handleAddContact,
    handleUpdateContact,
    handleChangeView,
  } = useContact();

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

  function handleSetPhones(phone: Phone) {
    setPhones((prevValues) => [...prevValues, phone]);
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
      <S.FormWrapper onSubmit={handleSubmit(handleSaveContact)}>
        <S.FormScrollView>
          <S.FormContent>
            <MediaMatch greaterThan="large" style={{ width: '100%' }}>
              <Input
                defaultValue={contact?.name}
                type="text"
                placeholder="Nome completo"
                icon={<User width="28px" height="28px" />}
                error={errors.name}
                {...register('name')}
              />
            </MediaMatch>
            <MediaMatch lessThan="large" style={{ width: '100%' }}>
              <Input
                defaultValue={contact?.name}
                type="text"
                placeholder="Nome completo"
                error={errors.name}
                {...register('name')}
              />
            </MediaMatch>

            <S.FieldsGroup>
              {phones.length > 0 && (
                <S.Info>
                  <MediaMatch greaterThan="large">
                    <PhoneIcon width="28px" height="28px" />
                  </MediaMatch>
                  <S.Group>
                    {phones.map((phone) => (
                      <S.Field key={phone.id}>
                        <Select
                          name="typePhone"
                          defaultValue={phone.type}
                          isSmall
                          onChange={(e) =>
                            setPhones((prevValues) => {
                              const newValues = prevValues.map((prev) => {
                                if (prev.id === phone.id) {
                                  return { ...prev, type: e.target.value };
                                }
                                return { ...prev };
                              });
                              return [...newValues];
                            })
                          }
                        >
                          {typePhones.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </Select>

                        <input defaultValue={phone.number} type="number" />

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
                onClick={handleToggleAddPhoneModal}
              >
                <span>
                  <Plus width="22px" height="22px" />
                  Adicionar número de telefone
                </span>
              </S.AddNewField>
            </S.FieldsGroup>

            <MediaMatch greaterThan="large" style={{ width: '100%' }}>
              <Input
                defaultValue={contact?.email}
                type="email"
                placeholder="E-mail"
                icon={<EnvelopeSimple width="28px" height="28px" />}
                {...register('email')}
              />
            </MediaMatch>

            <MediaMatch lessThan="large" style={{ width: '100%' }}>
              <Input
                defaultValue={contact?.email}
                type="email"
                placeholder="E-mail"
                {...register('email')}
              />
            </MediaMatch>

            <S.FieldsGroup>
              {addresses.length > 0 && (
                <S.Info>
                  <MediaMatch greaterThan="large">
                    <House width="28px" height="28px" />
                  </MediaMatch>
                  <S.Group>
                    {addresses.map((address) => (
                      <S.Field key={address.id}>
                        <Select
                          name="typeAddress"
                          defaultValue={address.type}
                          isSmall
                          onChange={(e) =>
                            setAddresses((prevValues) => {
                              const newValues = prevValues.map((prev) => {
                                if (prev.id === address.id) {
                                  return { ...prev, type: e.target.value };
                                }
                                return { ...prev };
                              });
                              return [...newValues];
                            })
                          }
                        >
                          {typeAddresses.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </Select>
                        <S.AddressButton
                          type="button"
                          title="Alterar endereço"
                          onClick={() => {
                            setSelectAddress(address);
                            handleToggleAddressModal();
                          }}
                        >
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
                onClick={handleToggleAddressModal}
              >
                <span>
                  <Plus width="22px" height="22px" />
                  Adicionar novo endereço
                </span>
              </S.AddNewField>
            </S.FieldsGroup>

            <MediaMatch greaterThan="large" style={{ width: '100%' }}>
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
            </MediaMatch>

            <MediaMatch lessThan="large" style={{ width: '100%' }}>
              <Select {...register('group')} defaultValue={contact?.group}>
                {groups.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </Select>
            </MediaMatch>
          </S.FormContent>
        </S.FormScrollView>
        <Navigation />
      </S.FormWrapper>

      <AddPhoneModal
        onSave={handleSetPhones}
        isOpen={isAddPhoneModalOpen}
        onRequestClose={handleToggleAddPhoneModal}
      />

      <AddressModal
        defaultValue={selectAddress}
        onSave={handleSetAddresses}
        isOpen={isAddressModalOpen}
        onRequestClose={handleToggleAddressModal}
      />
    </>
  );
}
