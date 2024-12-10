const { defineConfig } = require("cypress");

const port = process.env.BACKEND_PORT || '3005';

const backendUrl = process.env.VITE_BACKEND_URL || 'http://localhost';

module.exports = defineConfig({
  e2e: {
    baseUrl: backendUrl + ':' + port,
  },
});
  