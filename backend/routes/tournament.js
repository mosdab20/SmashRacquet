"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TournamentModel_1 = require("../src/db/TournamentModel");
let router = express_1.default.Router();
router.get('/', (req, res) => {
    console.log("im get");
    TournamentModel_1.TournamentModel.find().then(tournaments => res.send(tournaments));
});
router.get('/tByLetter', (req, res) => {
    var _a;
    const letter = (_a = req.query.letter) === null || _a === void 0 ? void 0 : _a.toString();
    console.log(letter);
    if (!letter || letter.length !== 1) {
        return res.status(400).send("Bitte gib einen einzigen Buchstaben als 'letter' an.");
    }
    TournamentModel_1.TournamentModel.find({ name: { $regex: new RegExp(`^${letter}`, "i") } })
        .then(tournaments => {
        res.send(tournaments);
    });
});
router.get('/tByPrize/', (req, res) => {
    const prize = Number(req.query.prize);
    if (isNaN(prize)) {
        return res.status(400).send("Bitte gib eine gültige Zahl als 'prize' an.");
    }
    TournamentModel_1.TournamentModel.find({ prize: prize })
        .then(tournaments => {
        if (tournaments.length === 0) {
            return res.status(404).send("Keine Turniere mit diesem Prize gefunden.");
        }
        res.send(tournaments);
    })
        .catch(err => res.status(500).send("Fehler beim Abrufen der Turniere: " + err.message));
});
router.get('/prize-range', (req, res) => {
    const minPrize = Number(req.query.minPrize);
    const maxPrize = Number(req.query.maxPrize);
    if (isNaN(minPrize) || isNaN(maxPrize)) {
        return res.status(400).send("Bitte gib gültige Zahlen als 'minPrize' und 'maxPrize' an.");
    }
    TournamentModel_1.TournamentModel.find({ prize: { $gte: minPrize, $lte: maxPrize } })
        .then(tournaments => {
        res.send(tournaments);
    })
        .catch(err => res.status(500).send("Fehler beim Abrufen der Turniere: " + err.message));
});
module.exports = router;
