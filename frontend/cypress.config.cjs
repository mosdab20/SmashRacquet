"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
const dotenv = require("dotenv");

// `dotenv` konfigurieren, um `.env`-Datei zu laden
dotenv.config();

const backendUrl = process.env.VITE_BACKEND_URL + ":" + process.env.VITE_BACKEND_PORT;

const cypressURL = "http://0.0.0.0:" + process.env.CYPRESS_PORT;

const viteUrl = process.env.VITE_BACKEND_URL + ":" + process.env.VITE_PORT;

exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        baseUrl: backendUrl,
        supportFile: false,
    },
    env: {
        viteUrl: viteUrl, // Übergibt den Benutzernamen als Umgebungsvariable
    },
});
