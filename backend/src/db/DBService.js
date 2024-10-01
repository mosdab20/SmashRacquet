"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = void 0;
const UserModel_1 = require("./UserModel");
const mockdata_1 = require("../../mockdata/mockdata");
const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield UserModel_1.UserModel.deleteMany();
        yield UserModel_1.UserModel.insertMany(mockdata_1.mockdata);
        console.log("### inserted data");
    }
    catch (error) {
        console.log("### error on inserting: ", error);
    }
});
exports.initDB = initDB;
