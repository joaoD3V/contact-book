import { EnvelopeSimple, User } from 'phosphor-react';
import { Input } from '../../components/Form/Input';
import { Contact } from '../../contexts/ContactContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';

type ContactEditingProps = {
  contact: Contact;
};

type ContactFormData = {
  name: string;
  email: string;
};

const ContactFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});

export function ContactEditing({ contact }: ContactEditingProps) {
  const { register, handleSubmit, formState } = useForm<ContactFormData>({
    resolver: yupResolver(ContactFormSchema),
  });
  const { errors } = formState;

  const handleSaveUpdate: SubmitHandler<ContactFormData> = async (values) => {
    console.log(values);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleSaveUpdate)}>
        <Input
          defaultValue={contact.name}
          type="text"
          placeholder="Nome completo"
          icon={<User width="28px" height="28px" />}
          error={errors.name}
          {...register('name')}
        />
        <Input
          defaultValue={contact.email}
          type="email"
          placeholder="E-mail"
          icon={<EnvelopeSimple width="28px" height="28px" />}
          error={errors.email}
          {...register('email')}
        />

        <button type="submit">Salvar</button>
      </S.Form>
    </S.Wrapper>
  );
}
