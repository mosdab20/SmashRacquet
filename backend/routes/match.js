"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MatchModel_1 = require("../src/db/MatchModel");
let router = express_1.default.Router();
router.get('/', (req, res) => {
    MatchModel_1.MatchModel.find().then(matches => res.send(matches));
});
module.exports = router;
