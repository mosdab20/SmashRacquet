const request = require('supertest');
const app = require('../app');
const { mockUsers: mockData } = require("../mockdata/mockUsers");


const mongoose = require("mongoose");

afterAll(async () => {
    // Schließe die Mongoose-Verbindung nach den Tests
    await mongoose.connection.close();
});

describe('API Routen', () => {
    it('sollte die User zurückgeben', async () => {
        // Anfrage an die User-Route und auf Antwort warten
        const response = await request(app).get('/users/');

        // Status prüfen
        expect(response.status).toBe(200);

        // Vergleiche die Länge der Antwortdaten mit den gemockten Daten
        expect(response.body.length).toBe(mockData.length);
    });
});
