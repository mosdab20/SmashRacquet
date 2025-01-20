/// <reference types="cypress" />
describe('AddTurnier Component', () => {
    before(function () {
        cy.visit('http://localhost:5174/Tournaments');
        cy.get('input[placeholder="Benutzername"]').type('root');
        cy.get('input[placeholder="Passwort"]').type('root');
        cy.get('button[id="submit"]').click();
        cy.get('a.nav-link').contains('Turnier hinzufügen').click();
    });

    it('should display the form and inputs correctly', () => {
        cy.get('#tournament-title').should('contain.text', 'Turniere erstellen');
        cy.get('#tournament-name-input').should('exist');
        cy.get('#tournament-description-input').should('exist');
        cy.get('#tournament-prize-input').should('exist');
        cy.get('#add-tournament-button').should('exist');
    });

    it('should show an alert when fields are empty', () => {

        cy.visit('http://localhost:5174/Tournaments');
        cy.get('input[placeholder="Benutzername"]').type('root');
        cy.get('input[placeholder="Passwort"]').type('root');
        cy.get('button[id="submit"]').click();
        cy.get('a.nav-link').contains('Turnier hinzufügen').click();

        cy.get('#add-tournament-button').click();


        cy.on('window:alert', (text) => {
            expect(text).to.equal('Bitte alle Felder korrekt ausfüllen.');
        });
    });

    it('should allow adding a tournament with valid inputs', () => {

        cy.intercept('POST', 'http://localhost:3005/tournaments/add', {
            statusCode: 201,
            body: {
                id: 1,
                name: 'Test Tournament',
                description: 'This is a test tournament',
                prize: 1000,
                users: [],
                matches: [],
            },
        }).as('addTournament');

        cy.visit('http://localhost:5174/Tournaments');
        cy.get('input[placeholder="Benutzername"]').type('root');
        cy.get('input[placeholder="Passwort"]').type('root');
        cy.get('button[id="submit"]').click();
        cy.get('a.nav-link').contains('Turnier hinzufügen').click();


        cy.get('#tournament-name-input').type('Test Tournament');
        cy.get('#tournament-description-input').type('This is a test tournament');
        cy.get('#tournament-prize-input').type('1000');


        cy.get('#add-tournament-button').click();


        cy.wait('@addTournament').its('request.body').should('deep.equal', {
            name: 'Test Tournament',
            description: 'This is a test tournament',
            users: [],
            matches: [],
            prize: 1000,
        });


        cy.on('window:alert', (text) => {
            expect(text).to.equal('Turnier erfolgreich hinzugefügt!');
        });


        cy.get('#tournament-name-input').should('have.value', '');
        cy.get('#tournament-description-input').should('have.value', '');
        cy.get('#tournament-prize-input').should('have.value', '0');
    });

    it('should handle API errors gracefully', () => {

        cy.intercept('POST', 'http://localhost:3005/tournaments/add', {
            statusCode: 500,
            body: { error: 'Internal Server Error' },
        }).as('addTournamentError');

        cy.visit('http://localhost:5174/Tournaments');
        cy.get('input[placeholder="Benutzername"]').type('root');
        cy.get('input[placeholder="Passwort"]').type('root');
        cy.get('button[id="submit"]').click();
        cy.get('a.nav-link').contains('Turnier hinzufügen').click();


        cy.get('#tournament-name-input').type('Test Tournament');
        cy.get('#tournament-description-input').type('This is a test tournament');
        cy.get('#tournament-prize-input').type('1000');


        cy.get('#add-tournament-button').click();


        cy.wait('@addTournamentError');


        cy.on('window:alert', (text) => {
            expect(text).to.equal('Fehler beim Hinzufügen des Turniers.');
        });
    });
});
