// src/config.ts
export const BACKEND_PORT = parseInt(import.meta.env.VITE_BACKEND_PORT || "3005", 10);
export const FRONTEND_PORT = parseInt(import.meta.env.VITE_PORT || "3000", 10);
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost";

// BASE_URL für API-Anfragen
export const BASE_URL = `${BACKEND_URL}:${BACKEND_PORT}`;
