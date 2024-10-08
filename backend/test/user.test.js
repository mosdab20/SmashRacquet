const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
});

afterAll(async () => {
    // Schließe die Verbindung zur Datenbank nach den Tests.
    await mongoose.connection.close();
});

describe('API Routen', () => {
    it('sollte die User zurückgeben', async () => {
        // Möglicherweise möchtest du hier eine Sicherstellung einfügen, dass die DB bereits Daten hat
        const response = await request(app).get('/user/');
        expect(response.status).toBe(200);
    });
});
