"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TournamentModel_1 = require("../src/db/TournamentModel");
let router = express_1.default.Router();
router.get('/', (req, res) => {
    TournamentModel_1.TournamentModel.find().then(tournaments => res.send(tournaments));
});
module.exports = router;
