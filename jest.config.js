"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    // Verzeichnis, in dem die Tests gefunden werden
    roots: ['<rootDir>/src'],
    // Dateiendungen, die als Tests erkannt werden
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    // Testumgebung, die verwendet werden soll
    testEnvironment: 'node',
    // Vorverarbeitungswerkzeuge für TypeScript-Dateien
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    // Verzeichnis für den Test-Coverage-Bericht
    collectCoverage: true,
    coverageDirectory: 'coverage',
    // Sammlung von Coverage-Daten
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.ts', // exclude entry point
        '!src/**/*.d.ts', // exclude type declarations
    ],
    // Automatisches Mocking
    automock: false,
};
exports.default = config;
