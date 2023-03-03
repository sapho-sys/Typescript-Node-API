"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wep_api_1 = __importDefault(require("../api/wep-api"));
const router2 = (0, express_1.Router)();
const shoeController = new wep_api_1.default();
router2.get('/:color', shoeController.getColor);
router2.get('/:size', shoeController.getSize);
exports.default = router2;
//# sourceMappingURL=storeRouter2.js.map