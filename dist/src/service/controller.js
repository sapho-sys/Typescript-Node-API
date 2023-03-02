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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBrand = exports.findAll = void 0;
const dbconfig_1 = __importDefault(require("../dbconfig/dbconfig"));
const Client = dbconfig_1.default.connect();
;
;
//find all shoes in my Database
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield Client).query('SELECT * FROM shoes WHERE in_stock > 0');
    return result ? result : [];
});
exports.findAll = findAll;
//find all shoe brands in my Database
const findBrand = (brand) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = (yield Client).query(`SELECT * FROM shoes WHERE
     brand in $1`, [brand]);
        return results;
    }
    catch (error) {
        console.log('Here is the issue', error);
    }
});
exports.findBrand = findBrand;
//# sourceMappingURL=controller.js.map