"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserModel_1 = require("../src/db/UserModel");
let router = express_1.default.Router();
router.get('/', (req, res) => {
    UserModel_1.UserModel.find().then(users => res.send(users));
});
module.exports = router;
