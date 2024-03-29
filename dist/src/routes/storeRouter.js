"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wep_api_1 = __importDefault(require("../api/wep-api"));
const router = (0, express_1.Router)();
const shoeController = new wep_api_1.default();
router.get('/', shoeController.getAll);
router.get('/brand/:brand', shoeController.getBrand);
router.get('/color/:color', shoeController.getColor);
router.get('/size/:size', shoeController.getSize);
router.post('/shoes', shoeController.addShoe);
exports.default = router;
//# sourceMappingURL=storeRouter.js.map