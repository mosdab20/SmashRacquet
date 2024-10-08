/// <reference types="cypress" />

describe('template spec', () => {
  before(() => {
    cy.visit('http://localhost:5173/');
  });

  it('renders input fields for username and password', () => {
    cy.get('input[placeholder="Benutzername"]').should('exist');
    cy.get('input[placeholder="Passwort"]').should('exist');
  });
});
