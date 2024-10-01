// cypress/component/login.cy.tsx

import { mount } from 'cypress/react';
import Login from "../../src/components/login/Login";

describe('Login Component', () => {
    it('renders input fields for username and password', () => {
        const onLoginMock = cy.stub();
        mount(<Login onLogin={onLoginMock} />);

        // Überprüfe, ob das Eingabefeld für den Benutzernamen vorhanden ist
        cy.get('input[placeholder="Benutzername"]').should('exist');

        // Überprüfe, ob das Eingabefeld für das Passwort vorhanden ist
        cy.get('input[placeholder="Passwort"]').should('exist');
    });
});
