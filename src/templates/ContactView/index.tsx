import { EnvelopeSimple } from 'phosphor-react';
import { Header } from '../../components/Header';
import { Contact } from '../../contexts/ContactContext';
import * as S from './styles';

type ContactViewProps = {
  contact: Contact;
};

export function ContactView({ contact }: ContactViewProps) {
  return (
    <S.Wrapper>
      <Header isInitial={false} />

      <S.Content>
        <h1>{contact.name}</h1>

        <S.Phones>
          {contact.phones.map((phone) => (
            <div key={phone.id}>
              <span>{phone.type}</span>
              <h2>{phone.number}</h2>
            </div>
          ))}
        </S.Phones>

        <S.Email>
          <EnvelopeSimple width="28px" height="28px" />
          <p>{contact.email}</p>
        </S.Email>

        <S.AddressesList>
          {contact.addresses.map((address) => (
            <S.Addresses key={address.id}>
              <h4>Endereço {address.type}</h4>

              <S.AddressInfo>
                <S.AddressField>
                  <span>CEP</span>
                  <p>{address.cep}</p>
                </S.AddressField>
                <S.AddressField>
                  <span>Endereço</span>
                  <p>{address.street}</p>
                </S.AddressField>
                <S.AddressField>
                  <span>Número</span>
                  <p>{address.number}</p>
                </S.AddressField>
                <S.AddressField>
                  <span>Complemento</span>
                  <p>{address.complement}</p>
                </S.AddressField>
                <p>
                  {address.city}, {address.state}, {address.country}
                </p>
              </S.AddressInfo>
            </S.Addresses>
          ))}
        </S.AddressesList>
      </S.Content>
    </S.Wrapper>
  );
}
