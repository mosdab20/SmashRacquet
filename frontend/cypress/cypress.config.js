"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        // Einstellungen hier, z.B.
        supportFile: 'cypress/support/e2e.js',
    },
});
