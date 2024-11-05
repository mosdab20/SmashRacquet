
/// <reference types="cypress" />

describe('switch pages', function() {
    before(function() {
        cy.visit('http://localhost:5173/HomePage/');
    });

    it('renders headers', function() {

        // Login
        cy.get('input[placeholder="Benutzername"]').should('exist');
        cy.get('input[placeholder="Passwort"]').should('exist');
        cy.get('input[placeholder="Benutzername"]').type('root');
        cy.get('input[placeholder="Passwort"]').type('root');
        cy.get('button[id="submit"]').click();

        cy.get('a.nav-link').contains('Alle Turniere').should('exist');

        cy.get('a.nav-link').contains('Alle Turniere').click();



        // Fülle die Eingabefelder für das Turnier aus
        cy.get('input#tournament-name-input').should('exist').type('Testturnier');
        cy.get('input#tournament-description-input').should('exist').type('Dies ist ein Testturnier zur Demonstration.');
        cy.get('input#tournament-prize-input').should('exist').type('100');

        // Klicke auf den Button, um das Turnier hinzuzufügen
        cy.get('button#add-tournament-button').click();

        // Optional: Überprüfe, ob das Turnier in der Liste erscheint
        cy.get('ul#tournament-list').should('exist');
        cy.get('li#tournament-list-item').last().should('contain', 'Testturnier'); // Überprüfe, ob das hinzugefügte Turnier vorhanden ist

    });
});
