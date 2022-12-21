import { Contact } from '../contexts/ContactContext';
import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import { api } from './api';

export async function contactsFactory() {
  const groups = ['Amigos', 'Escola', 'Trabalho', 'Outros'];

  const typePhones = [
    'Celular',
    'Casa',
    'Trabalho',
    'Fax do trabalho',
    'Fax de casa',
    'Pager',
    'Outros',
  ];

  const typeAddresses = ['Principal', 'Secundário', 'Trabalho', 'Outros'];

  for (let i = 0; i <= 20; i++) {
    const contact: Contact = {
      id: uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email().toLowerCase(),
      group: groups[Math.floor(Math.random() * groups.length)],
      addresses: [
        {
          id: uuid(),
          type: typeAddresses[Math.floor(Math.random() * typeAddresses.length)],
          cep: '68627-433',
          street: 'Rua Sete de Setembro',
          neighborhood: 'Laércio Cabeline',
          city: 'Paragominas',
          state: 'Pará',
          number: '15',
          complement: 'Bloco 01',
        },
        {
          id: uuid(),
          type: typeAddresses[Math.floor(Math.random() * typeAddresses.length)],
          cep: '69309-188',
          street: 'Avenida dos Imigrantes',
          neighborhood: 'Buritis',
          city: 'Boa Vista',
          state: 'Roraima',
          number: '20',
          complement: 'Apto. 03',
        },
      ],
      phones: [
        {
          id: uuid(),
          number: faker.phone.number('0##########'),
          type: typePhones[Math.floor(Math.random() * typePhones.length)],
        },
        {
          id: uuid(),
          number: faker.phone.number('0###########'),
          type: typePhones[Math.floor(Math.random() * typePhones.length)],
        },
      ],
    };
    await api.post('/contacts', contact);
  }

  // await api.post('/typePhones', typePhones);
  // await api.post('/typeAddresses', typeAddresses);
  // await api.post('/groups', groups);
}
