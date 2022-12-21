import { faker } from '@faker-js/faker';
const name = faker.name.fullName();

describe('Add contact', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be able to add contact with only a name', () => {
    cy.get('.sc-cUEOzv > svg').click();
    cy.get(':nth-child(2) > .sc-gswNZR > div').type(name);
    cy.contains('Salvar').click();
    cy.contains(name).should('contain', name);
  });
});
