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
exports.insertBrand = exports.findSize = exports.findColor = exports.findBrand = exports.findAll = void 0;
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
//find specific shoe brands in my Database
const findBrand = (brand) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (yield Client).query(`SELECT * from shoes WHERE brand = $1`, [brand]);
        return result ? result : [];
    }
    catch (error) {
        console.log('Here is the issue', error);
    }
});
exports.findBrand = findBrand;
//find specific color of shoes in my Database
const findColor = (color) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (yield Client).query(`SELECT * FROM shoes WHERE color = $1`, [color]);
        return result ? result : [];
    }
    catch (error) {
        console.log('Here is the issue', error);
    }
});
exports.findColor = findColor;
// find specific size of shoes in my Database
const findSize = (size) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (yield Client).query('SELECT * FROM shoes WHERE size = $1', [size]);
        return result ? result : [];
    }
    catch (error) {
        console.log('Here is the issue', error);
    }
});
exports.findSize = findSize;
//insert new shoe brand
const insertBrand = (brand, color, size, price) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (yield Client).query('INSERT INTO shoes (brand, color, size, price) VALUES ($1, $2, $3, $4)', [brand, color, size, price]);
    }
    catch (error) {
        console.log('Here is the issue', error);
    }
});
exports.insertBrand = insertBrand;
//# sourceMappingURL=controller.js.map