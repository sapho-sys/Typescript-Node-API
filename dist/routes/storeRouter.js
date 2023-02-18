"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../service/controller"));
const router = (0, express_1.Router)();
const storeController = new controller_1.default();
router.get('/', storeController.get);
exports.default = router;
//# sourceMappingURL=storeRouter.js.map