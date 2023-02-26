"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Router } from 'express';
const express_1 = require("express");
const controller_1 = __importDefault(require("../service/controller"));
const router = (0, express_1.Router)();
const shoeController = new controller_1.default();
router.get('/products/', shoeController.get);
exports.default = router;
//# sourceMappingURL=storeRouter.js.map